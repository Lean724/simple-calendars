import { DEFAULT_CALENDAR_COLORS, DEFAULT_ICON } from '../constants';
import type {
  BaseCalendarCardConfig,
  CalendarEntityConfig,
  CalendarEvent,
  HomeAssistant,
  NormalizedCalendarEntity,
  RawHassCalendarDate,
  RawHassCalendarEvent,
} from '../types';
import { addDays, parseLocalDateOnly } from '../utils/date-utils';

interface CacheEntry {
  timestamp: number;
  events: CalendarEvent[];
}

const CACHE_TTL_MS = 60_000;
const eventCache = new Map<string, CacheEntry>();
const inflightRequests = new Map<string, Promise<CalendarEvent[]>>();

export function clearCalendarCache(): void {
  eventCache.clear();
}

export function normalizeEntities(
  config: BaseCalendarCardConfig,
  hass?: HomeAssistant,
): NormalizedCalendarEntity[] {
  const rawList: Array<string | CalendarEntityConfig> =
    Array.isArray(config.entities) && config.entities.length > 0
      ? config.entities
      : config.entity
        ? [config.entity]
        : [];

  const result: NormalizedCalendarEntity[] = [];

  rawList.forEach((entry, index) => {
    const obj: CalendarEntityConfig =
      typeof entry === 'string' ? { entity: entry } : entry;

    const entityId = (obj?.entity || '').trim();
    if (!entityId) return;

    const stateObj = hass?.states?.[entityId];
    const friendlyName =
      typeof stateObj?.attributes?.friendly_name === 'string'
        ? stateObj.attributes.friendly_name
        : undefined;
    const stateIcon =
      typeof stateObj?.attributes?.icon === 'string'
        ? stateObj.attributes.icon
        : undefined;

    result.push({
      entity: entityId,
      name: obj.name?.trim() || friendlyName || entityId,
      color:
        obj.color?.trim() ||
        DEFAULT_CALENDAR_COLORS[index % DEFAULT_CALENDAR_COLORS.length],
      icon: obj.icon?.trim() || stateIcon || DEFAULT_ICON,
      hidden: Boolean(obj.hidden),
    });
  });

  return result;
}

function extractDateInfo(raw: RawHassCalendarDate | string | undefined): {
  date: Date;
  isDateOnly: boolean;
} {
  if (!raw) {
    return { date: new Date(), isDateOnly: false };
  }
  if (typeof raw === 'string') {
    const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(raw.trim());
    return {
      date: isDateOnly ? parseLocalDateOnly(raw.trim()) : new Date(raw),
      isDateOnly,
    };
  }
  if (raw.date && !raw.dateTime) {
    return {
      date: parseLocalDateOnly(raw.date),
      isDateOnly: true,
    };
  }
  if (raw.dateTime) {
    return {
      date: new Date(raw.dateTime),
      isDateOnly: false,
    };
  }
  return { date: new Date(), isDateOnly: false };
}

function normalizeRawEvent(
  raw: RawHassCalendarEvent,
  entity: NormalizedCalendarEntity,
  index: number,
): CalendarEvent | null {
  const startInfo = extractDateInfo(raw.start);
  const endInfo = extractDateInfo(raw.end);

  if (Number.isNaN(startInfo.date.getTime())) {
    return null;
  }

  const allDay = startInfo.isDateOnly;
  const start = startInfo.date;
  let end = Number.isNaN(endInfo.date.getTime()) ? new Date(start) : endInfo.date;

  if (allDay && end.getTime() <= start.getTime()) {
    end = addDays(start, 1);
  } else if (!allDay && end.getTime() < start.getTime()) {
    end = new Date(start);
  }

  const uidPart = raw.uid || `${start.getTime()}-${index}`;

  return {
    id: `${entity.entity}::${uidPart}::${start.toISOString()}`,
    uid: raw.uid || undefined,
    summary: (raw.summary || '(Sin título)').trim(),
    description: (raw.description || '').trim(),
    location: (raw.location || '').trim(),
    start,
    end,
    allDay,
    calendarEntity: entity.entity,
    calendarName: entity.name,
    color: entity.color,
    icon: entity.icon,
  };
}

async function fetchSingleEntityEvents(
  hass: HomeAssistant,
  entity: NormalizedCalendarEntity,
  start: Date,
  end: Date,
  forceRefresh = false,
): Promise<CalendarEvent[]> {
  const startIso = start.toISOString();
  const endIso = end.toISOString();
  const cacheKey = `${entity.entity}|${entity.name}|${entity.color}|${entity.icon}|${startIso}|${endIso}`;

  if (!forceRefresh) {
    const cached = eventCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
      return cached.events;
    }
    const existingInflight = inflightRequests.get(cacheKey);
    if (existingInflight) {
      return existingInflight;
    }
  }

  const path = `calendars/${encodeURIComponent(entity.entity)}?start=${encodeURIComponent(
    startIso,
  )}&end=${encodeURIComponent(endIso)}`;

  const promise = hass
    .callApi<RawHassCalendarEvent[]>('GET', path)
    .then((rawEvents) => {
      const normalized = (Array.isArray(rawEvents) ? rawEvents : [])
        .map((ev, idx) => normalizeRawEvent(ev, entity, idx))
        .filter((ev): ev is CalendarEvent => ev !== null);

      eventCache.set(cacheKey, {
        timestamp: Date.now(),
        events: normalized,
      });
      return normalized;
    })
    .finally(() => {
      inflightRequests.delete(cacheKey);
    });

  inflightRequests.set(cacheKey, promise);
  return promise;
}

export interface MultiCalendarFetchResult {
  events: CalendarEvent[];
  failedEntities: string[];
}

export async function fetchMultiCalendarEvents(
  hass: HomeAssistant,
  entities: NormalizedCalendarEntity[],
  start: Date,
  end: Date,
  forceRefresh = false,
): Promise<MultiCalendarFetchResult> {
  if (!hass || entities.length === 0) {
    return { events: [], failedEntities: [] };
  }

  const settled = await Promise.allSettled(
    entities.map((entity) =>
      fetchSingleEntityEvents(hass, entity, start, end, forceRefresh),
    ),
  );

  const events: CalendarEvent[] = [];
  const failedEntities: string[] = [];

  settled.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      events.push(...result.value);
    } else {
      failedEntities.push(entities[index].entity);
    }
  });

  events.sort((a, b) => a.start.getTime() - b.start.getTime());

  return { events, failedEntities };
}
