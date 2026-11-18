import { css, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
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
  formatTimeMinimal,
  getEventsForDay,
  getMonthGridDays,
  getWeekdayLabels,
  isSameDay,
  startOfDay,
} from '../utils/date-utils';
import { BaseCalendarCard, buildStubEntities } from './base-card';

@customElement(MONTH_CARD_TYPE)
export class HaCalendarMonthCard extends BaseCalendarCard<MonthCardConfig> {
  @state() private _focusedDay: Date = startOfDay(new Date());

  public static getStubConfig(hass?: HomeAssistant): MonthCardConfig {
    return {
      type: `custom:${MONTH_CARD_TYPE}`,
      entities: buildStubEntities(hass),
      first_day_of_week: 1,
      max_events_per_day: 3,
      show_header: true,
      show_entity_toggles: false,
      show_week_numbers: false,
      compact: true,
      transparent: false,
      background_opacity: 100,
    };
  }

  public getCardSize(): number {
    return 5;
  }

  public getGridOptions() {
    return {
      columns: 12,
      min_columns: 6,
      min_rows: 4,
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
    this._focusedDay = new Date(
      this._anchorDate.getFullYear(),
      this._anchorDate.getMonth(),
      1,
    );
  }

  protected navigateNext(): void {
    this._anchorDate = addMonths(this._anchorDate, 1);
    this._focusedDay = new Date(
      this._anchorDate.getFullYear(),
      this._anchorDate.getMonth(),
      1,
    );
  }

  protected navigateToday(): void {
    const now = new Date();
    this._anchorDate = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
    this._focusedDay = startOfDay(now);
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
    const compact = this._config.compact !== false;
    const maxEvents = Math.max(1, this._config.max_events_per_day ?? 3);

    const weekdays = getWeekdayLabels(this.getFirstDayOfWeek(), locale);
    const gridDays = this._getGridDays();

    const weeks: MonthGridDay[][] = [];
    for (let i = 0; i < gridDays.length; i += 7) {
      weeks.push(gridDays.slice(i, i + 7));
    }

    const focusedDayEvents = getEventsForDay(visibleEvents, this._focusedDay);

    return html`
      <div class="month-grid-wrap ${compact ? 'is-compact' : ''}">
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
                  const isFocused = isSameDay(day.date, this._focusedDay);

                  return html`
                    <div
                      class="day-cell ${day.isCurrentMonth ? '' : 'outside-month'} ${day.isToday ? 'is-today' : ''} ${isFocused ? 'is-focused' : ''}"
                      @click=${() => {
                        this._focusedDay = day.date;
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
                                  title=${`${formatTimeMinimal(ev.start)} ${ev.summary} (${ev.calendarName})`}
                                  @click=${(e: Event) => this._onEventPillClick(e, ev)}
                                >
                                  <span class="pill-dot"></span>
                                  <span class="pill-time">
                                    ${formatTimeMinimal(ev.start)}
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

      ${focusedDayEvents.length > 0
        ? html`
            <div class="month-focused-summary">
              ${this.renderMinimalDayBlock(
                this._focusedDay,
                focusedDayEvents,
                locale,
                strings,
                true,
              )}
            </div>
          `
        : nothing}
    `;
  }

  static styles = [
    sharedCardStyles,
    css`
      .month-grid-wrap {
        border: 1px solid color-mix(in srgb, var(--cal-text-primary) 14%, transparent);
        border-radius: 14px;
        overflow: hidden;
        background: transparent;
      }

      .weekday-row,
      .week-row {
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
      }

      .weekday-row.with-weeks,
      .week-row.with-weeks {
        grid-template-columns: 32px repeat(7, minmax(0, 1fr));
      }

      .weekday-row {
        background: var(--cal-surface-alt);
        border-bottom: 1px solid color-mix(in srgb, var(--cal-text-primary) 12%, transparent);
      }

      .week-col-header,
      .weekday-cell {
        padding: 7px 4px;
        text-align: center;
        font-size: 0.72rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        color: var(--cal-text-secondary);
      }

      .week-row {
        border-bottom: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
      }

      .week-row:last-child {
        border-bottom: none;
      }

      .week-number-cell {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 7px;
        font-size: 0.68rem;
        font-weight: 600;
        color: var(--cal-text-secondary);
        background: var(--cal-surface-alt);
        border-right: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
      }

      .day-cell {
        min-height: 82px;
        padding: 4px;
        border-right: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-width: 0;
        cursor: pointer;
        transition: background-color 0.12s ease;
      }

      .month-grid-wrap.is-compact .day-cell {
        min-height: 64px;
        padding: 3px;
      }

      .day-cell:last-child {
        border-right: none;
      }

      .day-cell:hover {
        background: var(--cal-surface-alt);
      }

      .day-cell.outside-month {
        opacity: 0.45;
      }

      .day-cell.is-today {
        background: rgba(26, 115, 232, 0.08);
      }

      .day-cell.is-focused {
        box-shadow: inset 0 0 0 1.5px color-mix(in srgb, var(--cal-accent) 60%, transparent);
      }

      .day-cell-top {
        display: flex;
        justify-content: flex-end;
        padding: 1px 2px;
      }

      .day-num {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.78rem;
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
        padding: 2px 4px;
        border-radius: 4px;
        font-family: inherit;
        font-size: 0.71rem;
        line-height: 1.25;
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
        --mdc-icon-size: 11px;
        flex-shrink: 0;
      }

      .pill-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--ev-color);
        flex-shrink: 0;
      }

      .pill-time {
        font-size: 0.66rem;
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
        font-size: 0.69rem;
        font-weight: 600;
        text-align: left;
        padding: 1px 4px;
        cursor: pointer;
        border-radius: 4px;
      }

      .more-btn:hover {
        background: var(--cal-surface-alt);
      }

      .month-focused-summary {
        margin-top: 4px;
        padding: 10px 12px;
        border-radius: 14px;
        background: var(--cal-surface-alt);
        border: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
      }

      @media (max-width: 560px) {
        .day-cell,
        .month-grid-wrap.is-compact .day-cell {
          min-height: 56px;
          padding: 2px;
        }

        .pill-time {
          display: none;
        }

        .event-pill {
          padding: 1px 3px;
          font-size: 0.66rem;
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
