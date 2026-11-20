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
  MonthCalendarSize,
  MonthCardConfig,
  MonthEventDisplay,
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
  isEventPast,
  isSameDay,
  startOfDay,
} from '../utils/date-utils';
import { BaseCalendarCard, buildStubEntities } from './base-card';

@customElement(MONTH_CARD_TYPE)
export class HaCalendarMonthCard extends BaseCalendarCard<MonthCardConfig> {
  @state() private _focusedDay: Date = startOfDay(new Date());

  private _getCalendarSize(): MonthCalendarSize {
    const size = this._config?.calendar_size;
    if (size === 'compact' || size === 'normal' || size === 'large') return size;
    if (this._config?.compact === true) return 'compact';
    return 'normal';
  }

  private _getEventDisplay(): MonthEventDisplay {
    return this._config?.event_display === 'dots' ? 'dots' : 'pills';
  }

  public static getStubConfig(hass?: HomeAssistant): MonthCardConfig {
    return {
      type: `custom:${MONTH_CARD_TYPE}`,
      entities: buildStubEntities(hass),
      first_day_of_week: 1,
      calendar_size: 'normal',
      event_display: 'pills',
      max_events_per_day: 3,
      show_header: true,
      show_entity_toggles: false,
      show_week_numbers: false,
      show_day_summary: true,
      show_progress_bar: true,
      dim_completed_events: true,
      transparent: false,
      background_opacity: 100,
    };
  }

  public getCardSize(): number {
    const size = this._getCalendarSize();
    const showSummary = this._config?.show_day_summary !== false;
    if (size === 'compact') return showSummary ? 4 : 3;
    if (size === 'large') return showSummary ? 7 : 6;
    return showSummary ? 5 : 4;
  }

  public getGridOptions() {
    const size = this._getCalendarSize();
    const showSummary = this._config?.show_day_summary !== false;
    const rows =
      size === 'compact'
        ? showSummary
          ? 6
          : 4
        : size === 'large'
          ? showSummary
            ? 10
            : 8
          : showSummary
            ? 7
            : 5;
    return {
      columns: 12,
      min_columns: 6,
      rows,
      min_rows: 4,
    };
  }

  protected override isMinimalSurface(): boolean {
    return true;
  }

  protected override isCompactHeader(): boolean {
    return this._getCalendarSize() === 'compact';
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

  protected override handleDayRollover(prevNow: Date, now: Date): void {
    if (isSameDay(prevNow, now)) return;
    if (isSameDay(this._focusedDay, prevNow)) {
      this._focusedDay = startOfDay(now);
    }
    if (
      this._anchorDate.getFullYear() === prevNow.getFullYear() &&
      this._anchorDate.getMonth() === prevNow.getMonth() &&
      (now.getFullYear() !== prevNow.getFullYear() ||
        now.getMonth() !== prevNow.getMonth())
    ) {
      this._anchorDate = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
    }
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
    const size = this._getCalendarSize();
    const eventDisplay = this._getEventDisplay();
    const showWeekNumbers = Boolean(this._config.show_week_numbers);
    const showDaySummary = this._config.show_day_summary !== false;
    const showProgressBar = this._config.show_progress_bar !== false;
    const defaultMax = eventDisplay === 'dots' ? 4 : size === 'compact' ? 2 : 3;
    const maxEvents = Math.max(1, this._config.max_events_per_day ?? defaultMax);
    const showCurrentDay = this._config.show_current_day !== false;
    const dimCompleted = this.shouldDimCompletedEvents();
    const filterOpts = this.getDayFilterOptions();

    const weekdays = getWeekdayLabels(this.getFirstDayOfWeek(), locale);
    const gridDays = this._getGridDays();

    const weeks: MonthGridDay[][] = [];
    for (let i = 0; i < gridDays.length; i += 7) {
      weeks.push(gridDays.slice(i, i + 7));
    }

    const focusedDayEvents = getEventsForDay(visibleEvents, this._focusedDay, filterOpts);

    return html`
      <div class="month-root size-${size} display-${eventDisplay}">
        <div class="month-grid-wrap">
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

          <div
            class="weeks-container"
            style="--mc-week-count: ${weeks.length};"
          >
            ${weeks.map(
              (week) => html`
                <div class="week-row ${showWeekNumbers ? 'with-weeks' : ''}">
                  ${showWeekNumbers
                    ? html`<div class="week-number-cell">${week[0].weekNumber}</div>`
                    : nothing}
                  ${week.map((day) => {
                    const dayEvents = getEventsForDay(visibleEvents, day.date, filterOpts);
                    const visibleDayEvents = dayEvents.slice(0, maxEvents);
                    const hiddenCount = dayEvents.length - visibleDayEvents.length;
                    const isFocused = isSameDay(day.date, this._focusedDay);
                    const markToday = showCurrentDay && day.isToday;

                    return html`
                      <div
                        class="day-cell ${day.isCurrentMonth ? '' : 'outside-month'} ${markToday ? 'is-today' : ''} ${isFocused ? 'is-focused' : ''}"
                        @click=${() => {
                          this._focusedDay = day.date;
                          if (!showDaySummary && dayEvents.length > 0) {
                            this._openDayList(day.date);
                          }
                        }}
                      >
                        <div class="day-cell-top">
                          <span class="day-num ${markToday ? 'today-circle' : ''}">
                            ${day.date.getDate()}
                          </span>
                        </div>

                        <div class="day-events">
                          ${eventDisplay === 'dots'
                            ? html`
                                <div class="day-dots">
                                  ${visibleDayEvents.map((ev) => {
                                    const isPastDimmed =
                                      dimCompleted && isEventPast(ev, this._currentNow);
                                    const dotTitle = ev.allDay
                                      ? `${ev.calendarName}: ${ev.summary}`
                                      : `${formatTimeMinimal(ev.start)} ${ev.summary} (${ev.calendarName})`;
                                    return html`
                                      <span
                                        class="event-dot ${ev.allDay ? 'all-day' : 'timed'} ${isPastDimmed ? 'is-past' : ''}"
                                        style="--ev-color: ${ev.color};"
                                        title=${dotTitle}
                                      ></span>
                                    `;
                                  })}
                                  ${hiddenCount > 0
                                    ? html`<span class="dots-more">+${hiddenCount}</span>`
                                    : nothing}
                                </div>
                              `
                            : html`
                                ${visibleDayEvents.map((ev) => {
                                  const isPastDimmed =
                                    dimCompleted && isEventPast(ev, this._currentNow);
                                  return ev.allDay
                                    ? html`
                                        <button
                                          type="button"
                                          class="event-pill all-day ${isPastDimmed ? 'is-past' : ''}"
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
                                          class="event-pill timed ${isPastDimmed ? 'is-past' : ''}"
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
                                      `;
                                })}

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
                                        +<span class="more-num">${hiddenCount}</span><span class="more-word"> ${strings.moreEvents}</span>
                                      </button>
                                    `
                                  : nothing}
                              `}
                        </div>
                      </div>
                    `;
                  })}
                </div>
              `,
            )}
          </div>
        </div>

        ${showDaySummary
          ? html`
              <div class="month-focused-summary">
                ${this.renderMinimalDayBlock(
                  this._focusedDay,
                  focusedDayEvents,
                  locale,
                  strings,
                  showProgressBar,
                )}
              </div>
            `
          : nothing}
      </div>
    `;
  }

  static styles = [
    sharedCardStyles,
    css`
      .month-root {
        container-type: inline-size;
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        gap: 10px;
      }

      .month-root.size-compact {
        --mc-cell-min-h: 32px;
        --mc-cell-pad: 2px;
        --mc-day-num-size: 18px;
        --mc-day-font: 0.7rem;
        --mc-pill-font: 0.62rem;
        --mc-pill-pad: 1px 3px;
        --mc-pill-gap: 1px;
        --mc-dot-size: 5px;
        --mc-weekday-font: 0.65rem;
        --mc-weekday-pad: 4px 2px;
      }

      .month-root.size-compact.display-dots {
        --mc-cell-min-h: 28px;
      }

      .month-root.size-normal {
        --mc-cell-min-h: 50px;
        --mc-cell-pad: 3px;
        --mc-day-num-size: 22px;
        --mc-day-font: 0.76rem;
        --mc-pill-font: 0.69rem;
        --mc-pill-pad: 2px 4px;
        --mc-pill-gap: 2px;
        --mc-dot-size: 6px;
        --mc-weekday-font: 0.71rem;
        --mc-weekday-pad: 6px 4px;
      }

      .month-root.size-normal.display-dots {
        --mc-cell-min-h: 36px;
      }

      .month-root.size-large {
        --mc-cell-min-h: 78px;
        --mc-cell-pad: 5px;
        --mc-day-num-size: 26px;
        --mc-day-font: 0.84rem;
        --mc-pill-font: 0.75rem;
        --mc-pill-pad: 3px 5px;
        --mc-pill-gap: 3px;
        --mc-dot-size: 7px;
        --mc-weekday-font: 0.76rem;
        --mc-weekday-pad: 8px 4px;
      }

      .month-root.size-large.display-dots {
        --mc-cell-min-h: 48px;
      }

      .month-grid-wrap {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        min-height: 0;
        border: 1px solid color-mix(in srgb, var(--cal-text-primary) 12%, transparent);
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
        grid-template-columns: 28px repeat(7, minmax(0, 1fr));
      }

      .weekday-row {
        background: var(--cal-surface-alt);
        border-bottom: 1px solid color-mix(in srgb, var(--cal-text-primary) 12%, transparent);
        flex-shrink: 0;
      }

      .week-col-header,
      .weekday-cell {
        padding: var(--mc-weekday-pad);
        text-align: center;
        font-size: var(--mc-weekday-font);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        color: var(--cal-text-secondary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .weeks-container {
        display: grid;
        grid-template-rows: repeat(var(--mc-week-count, 6), minmax(var(--mc-cell-min-h), 1fr));
        flex: 1 1 auto;
        min-height: 0;
      }

      .week-row {
        border-bottom: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
        min-height: 0;
      }

      .week-row:last-child {
        border-bottom: none;
      }

      .week-number-cell {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 5px;
        font-size: 0.64rem;
        font-weight: 600;
        color: var(--cal-text-secondary);
        background: var(--cal-surface-alt);
        border-right: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
      }

      .day-cell {
        min-height: 0;
        overflow: hidden;
        padding: var(--mc-cell-pad);
        border-right: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
        display: flex;
        flex-direction: column;
        gap: var(--mc-pill-gap);
        min-width: 0;
        cursor: pointer;
        transition: background-color 0.12s ease;
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
        padding: 0 2px;
        flex-shrink: 0;
      }

      .day-num {
        width: var(--mc-day-num-size);
        height: var(--mc-day-num-size);
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--mc-day-font);
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
        gap: var(--mc-pill-gap);
        min-width: 0;
        min-height: 0;
        overflow: hidden;
      }

      .event-pill {
        appearance: none;
        border: none;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: var(--mc-pill-pad);
        border-radius: 4px;
        font-family: inherit;
        font-size: var(--mc-pill-font);
        line-height: 1.2;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        box-sizing: border-box;
        transition: opacity 0.15s ease, filter 0.15s ease;
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

      .event-pill.is-past {
        opacity: 0.48;
        filter: grayscale(1);
      }

      .event-pill.is-past:hover {
        opacity: 0.78;
      }

      .event-pill.is-past .pill-text,
      .event-pill.is-past .pill-time {
        text-decoration: line-through;
      }

      .pill-icon {
        --mdc-icon-size: 10px;
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
        font-size: 0.9em;
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

      .day-dots {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 3px;
        padding: 1px 0;
      }

      .event-dot {
        width: var(--mc-dot-size);
        height: var(--mc-dot-size);
        border-radius: 50%;
        background: var(--ev-color);
        flex-shrink: 0;
      }

      .event-dot.all-day {
        width: calc(var(--mc-dot-size) * 2.1);
        border-radius: 999px;
      }

      .event-dot.is-past {
        opacity: 0.35;
        filter: grayscale(1);
      }

      .dots-more {
        font-size: 0.6rem;
        font-weight: 600;
        color: var(--cal-text-secondary);
        line-height: 1;
      }

      .more-btn {
        appearance: none;
        border: none;
        background: transparent;
        color: var(--cal-accent);
        font-family: inherit;
        font-size: var(--mc-pill-font);
        font-weight: 600;
        text-align: left;
        padding: 0 3px;
        cursor: pointer;
        border-radius: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.15;
        flex-shrink: 0;
      }

      .more-btn:hover {
        background: var(--cal-surface-alt);
      }

      .month-focused-summary {
        padding-top: 12px;
        border-top: 1px solid color-mix(in srgb, var(--cal-text-primary) 14%, transparent);
        flex-shrink: 0;
      }

      @container (max-width: 480px) {
        .pill-time,
        .more-word {
          display: none;
        }

        .event-pill {
          padding: 1px 3px;
          gap: 3px;
        }

        .day-cell {
          gap: 1px;
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
