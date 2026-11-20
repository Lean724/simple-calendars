import type {
  AllDayPosition,
  CalendarEvent,
  EventLayoutItem,
  MonthGridDay,
  SupportedLanguage,
} from '../types';

export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
}

export function endOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 0, 0, 0, 0);
}

export function addDays(date: Date, days: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days, 0, 0, 0, 0);
}

export function addMonths(date: Date, months: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + months, 1, 0, 0, 0, 0);
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/**
 * Parses a YYYY-MM-DD string into local midnight without UTC offset issues.
 */
export function parseLocalDateOnly(dateStr: string): Date {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateStr);
  if (!match) {
    return new Date(dateStr);
  }
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  const day = Number(match[3]);
  return new Date(year, month, day, 0, 0, 0, 0);
}

export function getISOWeekNumber(date: Date): number {
  const utc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = utc.getUTCDay() || 7;
  utc.setUTCDate(utc.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
  return Math.ceil(((utc.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

export function getMonthGridDays(
  year: number,
  month: number,
  firstDayOfWeek: number,
): MonthGridDay[] {
  const normalizedFirstDay = ((firstDayOfWeek % 7) + 7) % 7;
  const firstOfMonth = new Date(year, month, 1, 0, 0, 0, 0);
  const lastOfMonth = new Date(year, month + 1, 0, 0, 0, 0, 0);

  const startOffset = (firstOfMonth.getDay() - normalizedFirstDay + 7) % 7;
  const gridStart = addDays(firstOfMonth, -startOffset);

  const endOffset = (normalizedFirstDay + 6 - lastOfMonth.getDay() + 7) % 7;
  const totalDays = startOffset + lastOfMonth.getDate() + endOffset;
  const today = startOfDay(new Date());

  const days: MonthGridDay[] = [];
  for (let i = 0; i < totalDays; i++) {
    const date = addDays(gridStart, i);
    days.push({
      date,
      isCurrentMonth: date.getMonth() === month && date.getFullYear() === year,
      isToday: isSameDay(date, today),
      weekNumber: getISOWeekNumber(date),
    });
  }
  return days;
}

export function getWeekdayLabels(firstDayOfWeek: number, locale: string): string[] {
  const normalizedFirstDay = ((firstDayOfWeek % 7) + 7) % 7;
  // 2026-11-01 is a Sunday
  const baseSunday = new Date(2026, 10, 1);
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  const labels: string[] = [];
  for (let i = 0; i < 7; i++) {
    const dayIndex = (normalizedFirstDay + i) % 7;
    const d = addDays(baseSunday, dayIndex);
    labels.push(capitalizeFirst(formatter.format(d).replace(/\.$/, '')));
  }
  return labels;
}

export function eventOccursOnDay(
  event: CalendarEvent,
  dayStart: Date,
  dayEnd: Date,
): boolean {
  const startMs = event.start.getTime();
  const endMs = event.end.getTime();
  const dayStartMs = dayStart.getTime();
  const dayEndMs = dayEnd.getTime();

  if (endMs <= startMs) {
    return startMs >= dayStartMs && startMs < dayEndMs;
  }
  return startMs < dayEndMs && endMs > dayStartMs;
}

export function isEventPast(event: CalendarEvent, now: Date = new Date()): boolean {
  if (event.allDay) {
    return startOfDay(now).getTime() >= startOfDay(event.end).getTime();
  }
  return now.getTime() >= event.end.getTime();
}

export interface DayEventFilterOptions {
  showAllDay?: boolean;
  allDayPosition?: AllDayPosition;
  showCompleted?: boolean;
  now?: Date;
}

export function filterAndOrderDayEvents(
  dayEvents: CalendarEvent[],
  options: DayEventFilterOptions = {},
): CalendarEvent[] {
  const showAllDay = options.showAllDay !== false;
  const allDayPos: AllDayPosition = options.allDayPosition === 'bottom' ? 'bottom' : 'top';
  const showCompleted = options.showCompleted !== false;
  const now = options.now || new Date();

  return dayEvents
    .filter((ev) => {
      if (!showAllDay && ev.allDay) {
        return false;
      }
      if (!showCompleted && isEventPast(ev, now)) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (a.allDay !== b.allDay) {
        if (allDayPos === 'bottom') {
          return a.allDay ? 1 : -1;
        }
        return a.allDay ? -1 : 1;
      }
      return a.start.getTime() - b.start.getTime();
    });
}

export function getEventsForDay(
  events: CalendarEvent[],
  date: Date,
  options?: DayEventFilterOptions,
): CalendarEvent[] {
  const dayStart = startOfDay(date);
  const dayEnd = endOfDay(date);
  const matched = events.filter((ev) => eventOccursOnDay(ev, dayStart, dayEnd));
  return filterAndOrderDayEvents(matched, options);
}

interface InternalLayoutEntry {
  event: CalendarEvent;
  startMin: number;
  endMin: number;
  visualEndMin: number;
  col: number;
  colSpan: number;
}

/**
 * Computes Google-Calendar-style parallel columns for overlapping timed events on a single day.
 */
export function layoutOverlappingEvents(
  events: CalendarEvent[],
  dayDate: Date,
  startHour: number,
  endHour: number,
): EventLayoutItem[] {
  const totalMinutes = Math.max(60, (endHour - startHour) * 60);
  const dayBase = startOfDay(dayDate).getTime();
  const windowStartMs = dayBase + startHour * 3600000;
  const windowEndMs = dayBase + endHour * 3600000;
  const minVisualMinutes = 25;

  const timed = events
    .filter((ev) => !ev.allDay)
    .map((ev) => {
      const rawStart = ev.start.getTime();
      const rawEnd = Math.max(ev.end.getTime(), rawStart);
      if (rawEnd <= windowStartMs || rawStart >= windowEndMs) {
        return null;
      }
      const clampedStart = Math.max(rawStart, windowStartMs);
      const clampedEnd = Math.min(rawEnd, windowEndMs);
      const startMin = (clampedStart - windowStartMs) / 60000;
      const endMin = Math.max(startMin + 1, (clampedEnd - windowStartMs) / 60000);
      const visualEndMin = Math.min(totalMinutes, Math.max(endMin, startMin + minVisualMinutes));
      return {
        event: ev,
        startMin,
        endMin,
        visualEndMin,
        col: 0,
        colSpan: 1,
      } satisfies InternalLayoutEntry;
    })
    .filter((item): item is InternalLayoutEntry => item !== null)
    .sort((a, b) => {
      if (a.startMin !== b.startMin) return a.startMin - b.startMin;
      return b.visualEndMin - a.visualEndMin;
    });

  if (timed.length === 0) return [];

  // Partition into connected overlap clusters
  const clusters: InternalLayoutEntry[][] = [];
  let currentCluster: InternalLayoutEntry[] = [];
  let clusterEnd = -1;

  for (const item of timed) {
    if (currentCluster.length === 0 || item.startMin < clusterEnd) {
      currentCluster.push(item);
      clusterEnd = Math.max(clusterEnd, item.visualEndMin);
    } else {
      clusters.push(currentCluster);
      currentCluster = [item];
      clusterEnd = item.visualEndMin;
    }
  }
  if (currentCluster.length > 0) {
    clusters.push(currentCluster);
  }

  const output: EventLayoutItem[] = [];

  for (const cluster of clusters) {
    const columnEndTimes: number[] = [];

    for (const item of cluster) {
      let assignedCol = -1;
      for (let c = 0; c < columnEndTimes.length; c++) {
        if (columnEndTimes[c] <= item.startMin) {
          assignedCol = c;
          break;
        }
      }
      if (assignedCol === -1) {
        assignedCol = columnEndTimes.length;
        columnEndTimes.push(item.visualEndMin);
      } else {
        columnEndTimes[assignedCol] = item.visualEndMin;
      }
      item.col = assignedCol;
    }

    const numCols = Math.max(1, columnEndTimes.length);

    // Expand each item horizontally if adjacent right columns are free during its interval
    for (const item of cluster) {
      let span = 1;
      while (item.col + span < numCols) {
        const targetCol = item.col + span;
        const collides = cluster.some(
          (other) =>
            other !== item &&
            other.col === targetCol &&
            other.startMin < item.visualEndMin &&
            other.visualEndMin > item.startMin,
        );
        if (collides) break;
        span++;
      }
      item.colSpan = span;

      const top = (item.startMin / totalMinutes) * 100;
      const height = ((item.visualEndMin - item.startMin) / totalMinutes) * 100;
      const left = (item.col / numCols) * 100;
      const width = (item.colSpan / numCols) * 100;

      output.push({
        event: item.event,
        top,
        height: Math.max(height, 1.5),
        left,
        width,
      });
    }
  }

  return output;
}

export function formatHourLabel(hour: number, locale: string): string {
  const d = new Date(2026, 0, 1, hour % 24, 0, 0, 0);
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(d);
}

export function formatTimeShort(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
}

export function formatTimeMinimal(date: Date): string {
  const hours = date.getHours();
  const mins = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${mins}`;
}

export function formatMonthTitle(date: Date, locale: string): string {
  const formatted = new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
  }).format(date);
  return capitalizeFirst(formatted);
}

export function formatDayTitle(date: Date, locale: string): string {
  const formatted = new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
  return capitalizeFirst(formatted);
}

const CONNECTOR_BY_LANG: Record<SupportedLanguage, string> = {
  es: 'a',
  'zh-Hans': '-',
  de: 'bis',
  en: 'to',
  pt: 'a',
  it: 'alle',
  fr: 'à',
  ru: 'до',
  pl: 'do',
  nl: 'tot',
};

export function formatEventInlineRange(
  event: CalendarEvent,
  lang: SupportedLanguage,
  allDayLabel: string,
): string {
  if (event.allDay) {
    return allDayLabel;
  }
  const connector = CONNECTOR_BY_LANG[lang] || 'to';
  return `${formatTimeMinimal(event.start)} ${connector} ${formatTimeMinimal(event.end)}`;
}

export function formatEventTimeRange(
  event: CalendarEvent,
  locale: string,
  lang: SupportedLanguage,
  allDayLabel: string,
): string {
  if (event.allDay) {
    const startDay = startOfDay(event.start);
    const inclusiveEnd = addDays(startOfDay(event.end), -1);
    const dateFmt = new Intl.DateTimeFormat(locale, {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    if (inclusiveEnd.getTime() > startDay.getTime()) {
      return `${dateFmt.format(startDay)} – ${dateFmt.format(inclusiveEnd)} (${allDayLabel})`;
    }
    return `${dateFmt.format(startDay)} · ${allDayLabel}`;
  }

  const sameDay = isSameDay(event.start, event.end);
  const dateFmt = new Intl.DateTimeFormat(locale, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
  const startTime = formatTimeShort(event.start, locale);
  const endTime = formatTimeShort(event.end, locale);

  if (sameDay) {
    return `${capitalizeFirst(dateFmt.format(event.start))}, ${startTime} – ${endTime}`;
  }
  const connector = CONNECTOR_BY_LANG[lang] || 'to';
  return `${capitalizeFirst(dateFmt.format(event.start))} ${startTime} ${connector} ${capitalizeFirst(dateFmt.format(event.end))} ${endTime}`;
}

export function capitalizeFirst(text: string): string {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export interface EventProgressInfo {
  progressPct: number;
  label: string;
  isOngoing: boolean;
  isPast: boolean;
  isFuture: boolean;
}

function formatDurationUnits(
  ms: number,
  strings: {
    hoursRemaining: string;
    hourRemaining: string;
    minutesRemaining: string;
  },
): string {
  const totalMinutes = Math.max(1, Math.round(ms / 60000));
  if (totalMinutes >= 45) {
    const hours = Math.max(1, Math.round(totalMinutes / 60));
    return `${hours} ${hours === 1 ? strings.hourRemaining : strings.hoursRemaining}`;
  }
  return `${totalMinutes} ${strings.minutesRemaining}`;
}

export function getEventProgressInfo(
  event: CalendarEvent,
  now: Date,
  strings: {
    hoursRemaining: string;
    hourRemaining: string;
    minutesRemaining: string;
    completed: string;
    startsIn: string;
    allDay: string;
  },
): EventProgressInfo {
  if (event.allDay) {
    const todayStart = startOfDay(now).getTime();
    const eventStartDay = startOfDay(event.start).getTime();
    const eventEndDay = startOfDay(event.end).getTime();

    if (todayStart < eventStartDay) {
      return {
        progressPct: 0,
        label: strings.allDay,
        isOngoing: false,
        isPast: false,
        isFuture: true,
      };
    }
    if (todayStart >= eventEndDay) {
      return {
        progressPct: 100,
        label: strings.allDay,
        isOngoing: false,
        isPast: true,
        isFuture: false,
      };
    }

    const dayMinutesElapsed = now.getHours() * 60 + now.getMinutes();
    const pct = Math.min(100, Math.max(0, (dayMinutesElapsed / 1440) * 100));
    return {
      progressPct: pct,
      label: strings.allDay,
      isOngoing: true,
      isPast: false,
      isFuture: false,
    };
  }

  const startMs = event.start.getTime();
  const endMs = event.end.getTime();
  const nowMs = now.getTime();
  const totalMs = Math.max(60000, endMs - startMs);

  if (nowMs < startMs) {
    return {
      progressPct: 0,
      label: formatDurationUnits(totalMs, strings),
      isOngoing: false,
      isPast: false,
      isFuture: true,
    };
  }

  if (nowMs >= endMs) {
    return {
      progressPct: 100,
      label: formatDurationUnits(totalMs, strings),
      isOngoing: false,
      isPast: true,
      isFuture: false,
    };
  }

  const elapsedMs = nowMs - startMs;
  const progressPct = Math.min(100, Math.max(0, (elapsedMs / totalMs) * 100));
  const remainingMs = endMs - nowMs;

  return {
    progressPct,
    label: formatDurationUnits(remainingMs, strings),
    isOngoing: true,
    isPast: false,
    isFuture: false,
  };
}

export function formatDayColParts(
  date: Date,
  locale: string,
): { weekdayDay: string; month: string } {
  const weekday = new Intl.DateTimeFormat(locale, { weekday: 'short' })
    .format(date)
    .replace(/\.$/, '');
  const day = date.getDate();
  const month = new Intl.DateTimeFormat(locale, { month: 'short' })
    .format(date)
    .replace(/\.$/, '');
  return {
    weekdayDay: `${weekday}. ${day}`,
    month: month,
  };
}
