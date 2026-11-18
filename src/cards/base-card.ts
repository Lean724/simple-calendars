import { LitElement, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import {
  DEFAULT_CALENDAR_COLORS,
  EDITOR_TAG,
  TRANSLATIONS,
  getLocaleTag,
  resolveLanguage,
  type TranslationStrings,
} from '../constants';
import {
  clearCalendarCache,
  fetchMultiCalendarEvents,
  normalizeEntities,
} from '../services/calendar-service';
import { sharedCardStyles } from '../styles/shared-styles';
import type {
  BaseCalendarCardConfig,
  CalendarEntityConfig,
  CalendarEvent,
  HomeAssistant,
  NormalizedCalendarEntity,
  SupportedLanguage,
} from '../types';
import { startOfDay } from '../utils/date-utils';
import '../components/calendar-header';
import '../components/event-dialog';

export function buildStubEntities(hass?: HomeAssistant): CalendarEntityConfig[] {
  const calendarIds = Object.keys(hass?.states || {})
    .filter((id) => id.startsWith('calendar.'))
    .slice(0, 3);

  if (calendarIds.length > 0) {
    return calendarIds.map((entityId, idx) => {
      const stateObj = hass?.states?.[entityId];
      const friendly =
        typeof stateObj?.attributes?.friendly_name === 'string'
          ? stateObj.attributes.friendly_name
          : undefined;
      const icon =
        typeof stateObj?.attributes?.icon === 'string'
          ? stateObj.attributes.icon
          : 'mdi:calendar';
      return {
        entity: entityId,
        name: friendly,
        color: DEFAULT_CALENDAR_COLORS[idx % DEFAULT_CALENDAR_COLORS.length],
        icon,
      };
    });
  }

  return [
    {
      entity: 'calendar.personal',
      name: 'Personal',
      color: DEFAULT_CALENDAR_COLORS[0],
      icon: 'mdi:calendar-account',
    },
    {
      entity: 'calendar.trabajo',
      name: 'Trabajo',
      color: DEFAULT_CALENDAR_COLORS[1],
      icon: 'mdi:briefcase-outline',
    },
  ];
}

export abstract class BaseCalendarCard<
  TConfig extends BaseCalendarCardConfig,
> extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() protected _config!: TConfig;
  @state() protected _anchorDate: Date = startOfDay(new Date());
  @state() protected _events: CalendarEvent[] = [];
  @state() protected _loading = false;
  @state() protected _failedEntities: string[] = [];
  @state() protected _hiddenEntities: Set<string> = new Set();
  @state() protected _selectedEvent: CalendarEvent | null = null;
  @state() protected _selectedDayDate: Date | null = null;

  private _lastFetchKey = '';
  private _fetchRequestId = 0;

  public static getConfigElement(): HTMLElement {
    return document.createElement(EDITOR_TAG);
  }

  public setConfig(config: TConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }
    this._config = {
      show_header: true,
      show_entity_toggles: true,
      first_day_of_week: 1,
      ...config,
    };

    const normalized = normalizeEntities(this._config, this.hass);
    this._hiddenEntities = new Set(
      normalized.filter((e) => e.hidden).map((e) => e.entity),
    );
    this._lastFetchKey = '';
  }

  protected updated(changedProps: Map<string, unknown>): void {
    super.updated(changedProps);

    if (!this._config || !this.hass) return;

    if (
      changedProps.has('_config') ||
      changedProps.has('hass') ||
      changedProps.has('_anchorDate')
    ) {
      this._triggerFetchIfNeeded(false);
    }
  }

  protected getFirstDayOfWeek(): number {
    const val = this._config?.first_day_of_week;
    return typeof val === 'number' && !Number.isNaN(val) ? val : 1;
  }

  protected abstract getFetchRange(): { start: Date; end: Date };
  protected abstract getPeriodLabel(locale: string): string;
  protected abstract navigatePrev(): void;
  protected abstract navigateNext(): void;
  protected abstract navigateToday(): void;

  protected abstract renderCalendarBody(
    visibleEvents: CalendarEvent[],
    entities: NormalizedCalendarEntity[],
    locale: string,
    lang: SupportedLanguage,
    strings: TranslationStrings,
  ): TemplateResult;

  private _triggerFetchIfNeeded(forceRefresh: boolean): void {
    if (!this.hass || !this._config) return;
    const entities = normalizeEntities(this._config, this.hass);
    if (entities.length === 0) {
      this._events = [];
      this._failedEntities = [];
      this._lastFetchKey = '';
      return;
    }

    const { start, end } = this.getFetchRange();
    const entitiesSig = entities
      .map((e) => `${e.entity}|${e.name}|${e.color}|${e.icon}`)
      .join(';');
    const fetchKey = `${entitiesSig}::${start.toISOString()}::${end.toISOString()}`;

    if (!forceRefresh && fetchKey === this._lastFetchKey) {
      return;
    }

    this._lastFetchKey = fetchKey;
    void this._loadEvents(entities, start, end, forceRefresh);
  }

  private async _loadEvents(
    entities: NormalizedCalendarEntity[],
    start: Date,
    end: Date,
    forceRefresh: boolean,
  ): Promise<void> {
    if (!this.hass) return;
    const reqId = ++this._fetchRequestId;
    this._loading = true;

    try {
      const result = await fetchMultiCalendarEvents(
        this.hass,
        entities,
        start,
        end,
        forceRefresh,
      );
      if (reqId !== this._fetchRequestId) return;
      this._events = result.events;
      this._failedEntities = result.failedEntities;
    } catch {
      if (reqId !== this._fetchRequestId) return;
      this._failedEntities = entities.map((e) => e.entity);
    } finally {
      if (reqId === this._fetchRequestId) {
        this._loading = false;
      }
    }
  }

  protected _handleRefresh(): void {
    clearCalendarCache();
    this._triggerFetchIfNeeded(true);
  }

  protected _handleToggleEntity(e: CustomEvent<{ entity: string }>): void {
    const entityId = e.detail?.entity;
    if (!entityId) return;
    const next = new Set(this._hiddenEntities);
    if (next.has(entityId)) {
      next.delete(entityId);
    } else {
      next.add(entityId);
    }
    this._hiddenEntities = next;
  }

  protected _handleEventClick(e: CustomEvent<{ event: CalendarEvent }>): void {
    this._selectedEvent = e.detail?.event || null;
  }

  protected _handleDialogClose(): void {
    this._selectedEvent = null;
    this._selectedDayDate = null;
  }

  protected _handleSelectEventFromDay(e: CustomEvent<{ event: CalendarEvent }>): void {
    this._selectedEvent = e.detail?.event || null;
  }

  protected _getDayDialogEvents(visibleEvents: CalendarEvent[]): CalendarEvent[] {
    if (!this._selectedDayDate) return [];
    const target = this._selectedDayDate;
    const dayStart = new Date(target.getFullYear(), target.getMonth(), target.getDate(), 0, 0, 0, 0);
    const dayEnd = new Date(target.getFullYear(), target.getMonth(), target.getDate() + 1, 0, 0, 0, 0);
    return visibleEvents.filter((ev) => {
      const s = ev.start.getTime();
      const e = ev.end.getTime();
      if (e <= s) return s >= dayStart.getTime() && s < dayEnd.getTime();
      return s < dayEnd.getTime() && e > dayStart.getTime();
    });
  }

  protected render() {
    if (!this._config) return nothing;

    const lang = resolveLanguage(this._config.language, this.hass);
    const locale = getLocaleTag(lang, this.hass);
    const strings = TRANSLATIONS[lang];
    const entities = normalizeEntities(this._config, this.hass);
    const visibleEvents = this._events.filter(
      (ev) => !this._hiddenEntities.has(ev.calendarEntity),
    );
    const showHeader = this._config.show_header !== false;
    const showToggles = this._config.show_entity_toggles !== false;

    return html`
      <ha-card>
        <div class="loading-bar ${this._loading ? 'active' : ''}"></div>

        ${showHeader
          ? html`
              <ha-calendar-shared-header
                .cardTitle=${this._config.title || ''}
                .periodLabel=${this.getPeriodLabel(locale)}
                .entities=${entities}
                .hiddenEntities=${this._hiddenEntities}
                .showEntityToggles=${showToggles}
                .loading=${this._loading}
                .strings=${strings}
                @cal-prev=${() => this.navigatePrev()}
                @cal-today=${() => this.navigateToday()}
                @cal-next=${() => this.navigateNext()}
                @cal-refresh=${() => this._handleRefresh()}
                @cal-toggle-entity=${this._handleToggleEntity}
              ></ha-calendar-shared-header>
            `
          : nothing}

        ${this._failedEntities.length > 0
          ? html`
              <div class="status-banner" role="status">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                <span>
                  ${strings.errorLoading}: ${this._failedEntities.join(', ')}
                </span>
              </div>
            `
          : nothing}

        ${entities.length === 0
          ? html`
              <div class="empty-state">
                <ha-icon icon="mdi:calendar-blank-multiple"></ha-icon>
                <div class="empty-state-title">${strings.noCalendars}</div>
                <div class="empty-state-hint">${strings.noCalendarsHint}</div>
              </div>
            `
          : html`
              <div
                class="card-content-wrap"
                @cal-event-click=${this._handleEventClick}
              >
                ${this.renderCalendarBody(
                  visibleEvents,
                  entities,
                  locale,
                  lang,
                  strings,
                )}
              </div>
            `}
      </ha-card>

      <ha-calendar-event-dialog
        .event=${this._selectedEvent}
        .dayDate=${this._selectedDayDate}
        .dayEvents=${this._getDayDialogEvents(visibleEvents)}
        .locale=${locale}
        .lang=${lang}
        .strings=${strings}
        @cal-dialog-close=${this._handleDialogClose}
        @cal-select-event=${this._handleSelectEventFromDay}
      ></ha-calendar-event-dialog>
    `;
  }

  static styles = [sharedCardStyles];
}
