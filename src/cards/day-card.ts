import { css, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  DAY_CARD_TYPE,
  type TranslationStrings,
} from '../constants';
import { sharedCardStyles, toTranslucentColor } from '../styles/shared-styles';
import type {
  CalendarEvent,
  DayCardConfig,
  HomeAssistant,
  NormalizedCalendarEntity,
  SupportedLanguage,
} from '../types';
import {
  addDays,
  endOfDay,
  formatDayColParts,
  formatDayTitle,
  formatTimeShort,
  getEventProgressInfo,
  getEventsForDay,
  getISOWeekNumber,
  startOfDay,
} from '../utils/date-utils';
import { BaseCalendarCard, buildStubEntities } from './base-card';
import '../components/time-grid';

@customElement(DAY_CARD_TYPE)
export class HaCalendarDayCard extends BaseCalendarCard<DayCardConfig> {
  @state() private _currentNow: Date = new Date();
  private _tickerId?: number;

  public connectedCallback(): void {
    super.connectedCallback();
    this._currentNow = new Date();
    this._tickerId = window.setInterval(() => {
      this._currentNow = new Date();
    }, 30_000);
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._tickerId !== undefined) {
      window.clearInterval(this._tickerId);
      this._tickerId = undefined;
    }
  }

  public static getStubConfig(hass?: HomeAssistant): DayCardConfig {
    return {
      type: `custom:${DAY_CARD_TYPE}`,
      entities: buildStubEntities(hass),
      layout: 'compact',
      show_week_number: true,
      show_progress_bar: true,
      show_header: false,
      transparent: false,
    };
  }

  public getCardSize(): number {
    return this._isCompact ? 3 : 7;
  }

  public getGridOptions() {
    return {
      columns: 6,
      min_columns: 3,
      rows: this._isCompact ? 3 : 7,
      min_rows: 2,
    };
  }

  private get _isCompact(): boolean {
    return this._config?.layout !== 'grid';
  }

  protected getFetchRange(): { start: Date; end: Date } {
    return {
      start: startOfDay(this._anchorDate),
      end: endOfDay(this._anchorDate),
    };
  }

  protected getPeriodLabel(locale: string): string {
    return formatDayTitle(this._anchorDate, locale);
  }

  protected navigatePrev(): void {
    this._anchorDate = addDays(this._anchorDate, -1);
  }

  protected navigateNext(): void {
    this._anchorDate = addDays(this._anchorDate, 1);
  }

  protected navigateToday(): void {
    this._anchorDate = startOfDay(new Date());
  }

  private _onEventClick(e: Event, ev: CalendarEvent): void {
    e.stopPropagation();
    this._selectedEvent = ev;
  }

  private _renderCompactWidget(
    dayEvents: CalendarEvent[],
    locale: string,
    strings: TranslationStrings,
  ) {
    const showWeekNum = this._config.show_week_number !== false;
    const showProgressBar = this._config.show_progress_bar !== false;
    const weekNum = getISOWeekNumber(this._anchorDate);
    const dateParts = formatDayColParts(this._anchorDate, locale);

    return html`
      <div class="compact-widget">
        <!-- Top Row: Week Badge & Embedded Navigation -->
        <div class="widget-top-bar">
          ${showWeekNum
            ? html`
                <span class="week-pill-badge">
                  ${strings.weekLabel} ${weekNum}
                </span>
              `
            : html`<span></span>`}

          <div class="widget-nav">
            <button
              type="button"
              class="widget-nav-btn"
              title=${strings.prev}
              aria-label=${strings.prev}
              @click=${() => this.navigatePrev()}
            >
              <ha-icon icon="mdi:chevron-left"></ha-icon>
            </button>
            <button
              type="button"
              class="widget-today-btn"
              title=${strings.today}
              @click=${() => this.navigateToday()}
            >
              ${strings.today}
            </button>
            <button
              type="button"
              class="widget-nav-btn"
              title=${strings.next}
              aria-label=${strings.next}
              @click=${() => this.navigateNext()}
            >
              <ha-icon icon="mdi:chevron-right"></ha-icon>
            </button>
          </div>
        </div>

        <!-- Main Content Area: Date Column + Events List -->
        <div class="widget-main">
          <div class="date-col">
            <span class="date-day">${dateParts.weekdayDay}</span>
            <span class="date-month">${dateParts.month}</span>
          </div>

          <div class="events-col">
            ${dayEvents.length === 0
              ? html`
                  <div class="empty-event-row">
                    <ha-icon icon="mdi:calendar-check-outline"></ha-icon>
                    <span>${strings.noEvents}</span>
                  </div>
                `
              : dayEvents.map((ev) => {
                  const progress = getEventProgressInfo(
                    ev,
                    this._currentNow,
                    strings,
                  );
                  const timeRangeStr = ev.allDay
                    ? strings.allDay
                    : `${formatTimeShort(ev.start, locale)} - ${formatTimeShort(
                        ev.end,
                        locale,
                      )}`;

                  return html`
                    <div
                      class="event-row-card"
                      style="--ev-accent-color: ${ev.color};"
                      @click=${(e: Event) => this._onEventClick(e, ev)}
                    >
                      <div class="event-row-top">
                        <div class="event-title-group">
                          <ha-icon
                            class="event-icon"
                            .icon=${ev.icon}
                            style="color: ${ev.color};"
                          ></ha-icon>
                          <span class="event-title">${ev.summary}</span>
                        </div>
                        <span class="event-time-range">${timeRangeStr}</span>
                      </div>

                      <div class="event-progress-wrap">
                        <span class="event-time-remaining">${progress.label}</span>
                        ${showProgressBar
                          ? html`
                              <div
                                class="progress-track"
                                role="progressbar"
                                aria-valuenow=${Math.round(progress.progressPct)}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div
                                  class="progress-fill ${progress.isOngoing ? 'is-active' : ''}"
                                  style="width: ${progress.progressPct}%; background-color: ${ev.color || '#ffffff'};"
                                ></div>
                              </div>
                            `
                          : nothing}
                      </div>
                    </div>
                  `;
                })}
          </div>
        </div>
      </div>
    `;
  }

  private _renderDetailedGrid(
    visibleEvents: CalendarEvent[],
    entities: NormalizedCalendarEntity[],
    locale: string,
    lang: SupportedLanguage,
    strings: TranslationStrings,
  ) {
    const startHour = this._config.start_hour ?? 0;
    const endHour = this._config.end_hour ?? 24;
    const showSummary = this._config.show_agenda_summary !== false;
    const dayEvents = getEventsForDay(visibleEvents, this._anchorDate);
    const allDayCount = dayEvents.filter((e) => e.allDay).length;
    const timedCount = dayEvents.length - allDayCount;

    return html`
      ${showSummary
        ? html`
            <div class="day-summary-bar">
              <div class="summary-totals">
                <span class="summary-pill">
                  <ha-icon icon="mdi:calendar-check-outline"></ha-icon>
                  <span>${dayEvents.length} ${strings.eventsCount}</span>
                </span>
                ${dayEvents.length === 0
                  ? html`<span class="summary-empty">${strings.noEvents}</span>`
                  : html`
                      ${allDayCount > 0
                        ? html`<span class="summary-sub">${allDayCount} ${strings.allDayEvents}</span>`
                        : nothing}
                      ${timedCount > 0
                        ? html`<span class="summary-sub">${timedCount} ${strings.timedEvents}</span>`
                        : nothing}
                    `}
              </div>

              <div class="summary-calendars">
                ${entities
                  .filter((ent) => !this._hiddenEntities.has(ent.entity))
                  .map((ent) => {
                    const count = dayEvents.filter(
                      (ev) => ev.calendarEntity === ent.entity,
                    ).length;
                    if (count === 0) return nothing;
                    return html`
                      <span
                        class="cal-count-badge"
                        style="background: ${toTranslucentColor(
                          ent.color,
                          0.14,
                        )}; color: ${ent.color};"
                      >
                        <ha-icon .icon=${ent.icon}></ha-icon>
                        <span>${ent.name}: ${count}</span>
                      </span>
                    `;
                  })}
              </div>
            </div>
          `
        : nothing}

      <ha-calendar-time-grid
        .days=${[this._anchorDate]}
        .events=${visibleEvents}
        .startHour=${startHour}
        .endHour=${endHour}
        .locale=${locale}
        .lang=${lang}
        .strings=${strings}
        .detailedMode=${true}
      ></ha-calendar-time-grid>
    `;
  }

  protected renderCalendarBody(
    visibleEvents: CalendarEvent[],
    entities: NormalizedCalendarEntity[],
    locale: string,
    lang: SupportedLanguage,
    strings: TranslationStrings,
  ) {
    if (this._isCompact) {
      const dayEvents = getEventsForDay(visibleEvents, this._anchorDate);
      return this._renderCompactWidget(dayEvents, locale, strings);
    }
    return this._renderDetailedGrid(visibleEvents, entities, locale, lang, strings);
  }

  static styles = [
    sharedCardStyles,
    css`
      /* Compact Widget Styles */
      .compact-widget {
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 4px 2px 2px;
      }

      .widget-top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }

      .week-pill-badge {
        display: inline-flex;
        align-items: center;
        padding: 3px 10px;
        border-radius: 6px;
        border: 1.5px solid var(--divider-color, rgba(255, 255, 255, 0.35));
        font-size: 0.84rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        color: var(--primary-text-color, #ffffff);
        background: rgba(127, 127, 127, 0.08);
      }

      .widget-nav {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .widget-nav-btn,
      .widget-today-btn {
        appearance: none;
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25));
        background: transparent;
        color: var(--primary-text-color, #ffffff);
        border-radius: 6px;
        height: 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-family: inherit;
        transition: background-color 0.15s ease;
      }

      .widget-nav-btn {
        width: 28px;
        padding: 0;
        --mdc-icon-size: 18px;
      }

      .widget-today-btn {
        padding: 0 10px;
        font-size: 0.76rem;
        font-weight: 600;
      }

      .widget-nav-btn:hover,
      .widget-today-btn:hover {
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.15));
      }

      .widget-main {
        display: flex;
        align-items: flex-start;
        gap: 16px;
      }

      .date-col {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-width: 68px;
        flex-shrink: 0;
        padding-top: 2px;
      }

      .date-day {
        font-size: 1.15rem;
        font-weight: 600;
        line-height: 1.25;
        color: var(--primary-text-color, #ffffff);
      }

      .date-month {
        font-size: 0.98rem;
        font-weight: 500;
        line-height: 1.25;
        color: var(--secondary-text-color, rgba(255, 255, 255, 0.75));
      }

      .events-col {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .empty-event-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 0;
        color: var(--secondary-text-color, rgba(255, 255, 255, 0.6));
        font-size: 0.9rem;
        --mdc-icon-size: 20px;
      }

      .event-row-card {
        display: flex;
        flex-direction: column;
        gap: 4px;
        cursor: pointer;
        padding: 4px 6px;
        border-radius: 8px;
        transition: background-color 0.15s ease;
      }

      .event-row-card:hover {
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.1));
      }

      .event-row-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
      }

      .event-title-group {
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
      }

      .event-icon {
        --mdc-icon-size: 18px;
        flex-shrink: 0;
      }

      .event-title {
        font-size: 1.12rem;
        font-weight: 600;
        line-height: 1.3;
        color: var(--primary-text-color, #ffffff);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .event-time-range {
        font-size: 1.05rem;
        font-weight: 500;
        color: var(--primary-text-color, #ffffff);
        white-space: nowrap;
        flex-shrink: 0;
      }

      .event-progress-wrap {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-top: 1px;
      }

      .event-time-remaining {
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--secondary-text-color, rgba(255, 255, 255, 0.75));
        line-height: 1.25;
      }

      .progress-track {
        width: 100%;
        height: 3.5px;
        background: var(--divider-color, rgba(255, 255, 255, 0.22));
        border-radius: 999px;
        overflow: hidden;
        position: relative;
      }

      .progress-fill {
        height: 100%;
        border-radius: 999px;
        transition: width 0.3s ease;
      }

      .progress-fill.is-active {
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
      }

      /* Detailed Grid Styles */
      .day-summary-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 8px;
        background: var(--cal-surface-alt);
        border: 1px solid var(--cal-border-color);
      }

      .summary-totals {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        font-size: 0.8rem;
      }

      .summary-pill {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-weight: 600;
        color: var(--cal-text-primary);
        --mdc-icon-size: 16px;
      }

      .summary-empty,
      .summary-sub {
        color: var(--cal-text-secondary);
        font-size: 0.78rem;
      }

      .summary-calendars {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }

      .cal-count-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 0.74rem;
        font-weight: 600;
        --mdc-icon-size: 13px;
      }

      @media (max-width: 480px) {
        .widget-main {
          gap: 10px;
        }

        .date-col {
          min-width: 56px;
        }

        .date-day {
          font-size: 1rem;
        }

        .date-month {
          font-size: 0.88rem;
        }

        .event-title {
          font-size: 1rem;
        }

        .event-time-range {
          font-size: 0.92rem;
        }

        .event-time-remaining {
          font-size: 0.85rem;
        }
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    [DAY_CARD_TYPE]: HaCalendarDayCard;
  }
}
