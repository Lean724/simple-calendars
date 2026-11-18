import { css, html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  MONTH_CARD_TYPE,
  type TranslationStrings,
} from '../constants';
import { sharedCardStyles, toTranslucentColor } from '../styles/shared-styles';
import type {
  CalendarEvent,
  HomeAssistant,
  MonthCardConfig,
  MonthGridDay,
  NormalizedCalendarEntity,
  SupportedLanguage,
} from '../types';
import {
  addMonths,
  endOfDay,
  formatMonthTitle,
  formatTimeShort,
  getEventsForDay,
  getMonthGridDays,
  getWeekdayLabels,
} from '../utils/date-utils';
import { BaseCalendarCard, buildStubEntities } from './base-card';

@customElement(MONTH_CARD_TYPE)
export class HaCalendarMonthCard extends BaseCalendarCard<MonthCardConfig> {
  public static getStubConfig(hass?: HomeAssistant): MonthCardConfig {
    return {
      type: `custom:${MONTH_CARD_TYPE}`,
      entities: buildStubEntities(hass),
      first_day_of_week: 1,
      max_events_per_day: 3,
      show_header: true,
      show_entity_toggles: true,
      show_week_numbers: false,
      compact: false,
    };
  }

  public getCardSize(): number {
    return 7;
  }

  public getGridOptions() {
    return {
      columns: 12,
      min_columns: 6,
      rows: 7,
      min_rows: 5,
    };
  }

  protected getFetchRange(): { start: Date; end: Date } {
    const grid = this._getGridDays();
    return {
      start: grid[0].date,
      end: endOfDay(grid[grid.length - 1].date),
    };
  }

  protected getPeriodLabel(locale: string): string {
    return formatMonthTitle(this._anchorDate, locale);
  }

  protected navigatePrev(): void {
    this._anchorDate = addMonths(this._anchorDate, -1);
  }

  protected navigateNext(): void {
    this._anchorDate = addMonths(this._anchorDate, 1);
  }

  protected navigateToday(): void {
    const now = new Date();
    this._anchorDate = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
  }

  private _getGridDays(): MonthGridDay[] {
    return getMonthGridDays(
      this._anchorDate.getFullYear(),
      this._anchorDate.getMonth(),
      this.getFirstDayOfWeek(),
    );
  }

  private _openDayList(date: Date): void {
    this._selectedEvent = null;
    this._selectedDayDate = date;
  }

  private _onEventPillClick(e: Event, ev: CalendarEvent): void {
    e.stopPropagation();
    this._selectedEvent = ev;
  }

  protected renderCalendarBody(
    visibleEvents: CalendarEvent[],
    _entities: NormalizedCalendarEntity[],
    locale: string,
    _lang: SupportedLanguage,
    strings: TranslationStrings,
  ) {
    const showWeekNumbers = Boolean(this._config.show_week_numbers);
    const compact = Boolean(this._config.compact);
    const maxEvents = Math.max(1, this._config.max_events_per_day ?? 3);

    const weekdays = getWeekdayLabels(this.getFirstDayOfWeek(), locale);
    const gridDays = this._getGridDays();

    const weeks: MonthGridDay[][] = [];
    for (let i = 0; i < gridDays.length; i += 7) {
      weeks.push(gridDays.slice(i, i + 7));
    }

    return html`
      <div class="month-grid-wrap ${compact ? 'is-compact' : ''}">
        <!-- Weekday Headers -->
        <div
          class="weekday-row ${showWeekNumbers ? 'with-weeks' : ''}"
          role="row"
        >
          ${showWeekNumbers
            ? html`<div class="week-col-header">${strings.weekAbbr}</div>`
            : nothing}
          ${weekdays.map(
            (label) => html`<div class="weekday-cell">${label}</div>`,
          )}
        </div>

        <!-- Month Grid Weeks -->
        <div class="weeks-container">
          ${weeks.map(
            (week) => html`
              <div class="week-row ${showWeekNumbers ? 'with-weeks' : ''}">
                ${showWeekNumbers
                  ? html`<div class="week-number-cell">${week[0].weekNumber}</div>`
                  : nothing}
                ${week.map((day) => {
                  const dayEvents = getEventsForDay(visibleEvents, day.date);
                  const visibleDayEvents = dayEvents.slice(0, maxEvents);
                  const hiddenCount = dayEvents.length - visibleDayEvents.length;

                  return html`
                    <div
                      class="day-cell ${day.isCurrentMonth ? '' : 'outside-month'} ${day.isToday ? 'is-today' : ''}"
                      @click=${() => {
                        if (dayEvents.length > 0) {
                          this._openDayList(day.date);
                        }
                      }}
                    >
                      <div class="day-cell-top">
                        <span class="day-num ${day.isToday ? 'today-circle' : ''}">
                          ${day.date.getDate()}
                        </span>
                      </div>

                      <div class="day-events">
                        ${visibleDayEvents.map((ev) =>
                          ev.allDay
                            ? html`
                                <button
                                  type="button"
                                  class="event-pill all-day"
                                  style="--ev-color: ${ev.color};"
                                  title=${`${ev.calendarName}: ${ev.summary}`}
                                  @click=${(e: Event) => this._onEventPillClick(e, ev)}
                                >
                                  <ha-icon class="pill-icon" .icon=${ev.icon}></ha-icon>
                                  <span class="pill-text">${ev.summary}</span>
                                </button>
                              `
                            : html`
                                <button
                                  type="button"
                                  class="event-pill timed"
                                  style="--ev-color: ${ev.color}; --ev-bg: ${toTranslucentColor(
                                    ev.color,
                                    0.14,
                                  )};"
                                  title=${`${formatTimeShort(ev.start, locale)} ${ev.summary} (${ev.calendarName})`}
                                  @click=${(e: Event) => this._onEventPillClick(e, ev)}
                                >
                                  <span class="pill-dot"></span>
                                  <span class="pill-time">
                                    ${formatTimeShort(ev.start, locale)}
                                  </span>
                                  <span class="pill-text">${ev.summary}</span>
                                </button>
                              `,
                        )}

                        ${hiddenCount > 0
                          ? html`
                              <button
                                type="button"
                                class="more-btn"
                                @click=${(e: Event) => {
                                  e.stopPropagation();
                                  this._openDayList(day.date);
                                }}
                              >
                                +${hiddenCount} ${strings.moreEvents}
                              </button>
                            `
                          : nothing}
                      </div>
                    </div>
                  `;
                })}
              </div>
            `,
          )}
        </div>
      </div>
    `;
  }

  static styles = [
    sharedCardStyles,
    css`
      .month-grid-wrap {
        border: 1px solid var(--cal-border-color);
        border-radius: 10px;
        overflow: hidden;
        background: var(--cal-surface);
      }

      .weekday-row,
      .week-row {
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
      }

      .weekday-row.with-weeks,
      .week-row.with-weeks {
        grid-template-columns: 34px repeat(7, minmax(0, 1fr));
      }

      .weekday-row {
        background: var(--cal-surface-alt);
        border-bottom: 1px solid var(--cal-border-color);
      }

      .week-col-header,
      .weekday-cell {
        padding: 8px 4px;
        text-align: center;
        font-size: 0.74rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        color: var(--cal-text-secondary);
      }

      .week-row {
        border-bottom: 1px solid var(--cal-border-color);
      }

      .week-row:last-child {
        border-bottom: none;
      }

      .week-number-cell {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 8px;
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--cal-text-secondary);
        background: var(--cal-surface-alt);
        border-right: 1px solid var(--cal-border-color);
      }

      .day-cell {
        min-height: 98px;
        padding: 4px;
        border-right: 1px solid var(--cal-border-color);
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-width: 0;
        cursor: default;
        transition: background-color 0.12s ease;
      }

      .month-grid-wrap.is-compact .day-cell {
        min-height: 70px;
        padding: 3px;
      }

      .day-cell:last-child {
        border-right: none;
      }

      .day-cell:hover {
        background: var(--cal-surface-alt);
      }

      .day-cell.outside-month {
        opacity: 0.52;
      }

      .day-cell.is-today {
        background: rgba(26, 115, 232, 0.05);
      }

      .day-cell-top {
        display: flex;
        justify-content: flex-end;
        padding: 1px 2px;
      }

      .day-num {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--cal-text-primary);
      }

      .day-num.today-circle {
        background: var(--cal-today-ring);
        color: var(--text-primary-color, #ffffff);
      }

      .day-events {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      .event-pill {
        appearance: none;
        border: none;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 2px 5px;
        border-radius: 4px;
        font-family: inherit;
        font-size: 0.73rem;
        line-height: 1.3;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        box-sizing: border-box;
      }

      .event-pill.all-day {
        background: var(--ev-color);
        color: #ffffff;
        font-weight: 600;
      }

      .event-pill.timed {
        background: var(--ev-bg);
        border-left: 2.5px solid var(--ev-color);
        color: var(--cal-text-primary);
      }

      .event-pill:hover {
        filter: brightness(0.94);
      }

      .pill-icon {
        --mdc-icon-size: 12px;
        flex-shrink: 0;
      }

      .pill-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--ev-color);
        flex-shrink: 0;
      }

      .pill-time {
        font-size: 0.68rem;
        font-weight: 600;
        color: var(--cal-text-secondary);
        flex-shrink: 0;
      }

      .pill-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
      }

      .more-btn {
        appearance: none;
        border: none;
        background: transparent;
        color: var(--cal-accent);
        font-family: inherit;
        font-size: 0.71rem;
        font-weight: 600;
        text-align: left;
        padding: 1px 4px;
        cursor: pointer;
        border-radius: 4px;
      }

      .more-btn:hover {
        background: var(--cal-surface-alt);
      }

      @media (max-width: 560px) {
        .day-cell {
          min-height: 76px;
          padding: 2px;
        }

        .pill-time {
          display: none;
        }

        .event-pill {
          padding: 2px 3px;
          font-size: 0.68rem;
        }
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    [MONTH_CARD_TYPE]: HaCalendarMonthCard;
  }
}
