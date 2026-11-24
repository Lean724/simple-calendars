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
  MonthLayout,
  NormalizedCalendarEntity,
  SupportedLanguage,
} from '../types';
import {
  addMonths,
  endOfDay,
  formatMonthTitle,
  formatTimeMinimal,
  getEventProgressInfo,
  getEventsForDay,
  getMonthGridDays,
  getWeekdayLabels,
  isEventPast,
  isSameDay,
  startOfDay,
  type DayEventFilterOptions,
} from '../utils/date-utils';
import { BaseCalendarCard, buildStubEntities } from './base-card';

@customElement(MONTH_CARD_TYPE)
export class HaCalendarMonthCard extends BaseCalendarCard<MonthCardConfig> {
  @state() private _focusedDay: Date = startOfDay(new Date());
  @state() private _carouselIndex = 0;

  private _touchStartX: number | null = null;
  private _touchStartY: number | null = null;

  private _getLayout(): MonthLayout {
    return this._config?.layout === 'compact' ? 'compact' : 'classic';
  }

  private _getCalendarSize(): MonthCalendarSize {
    const size = this._config?.calendar_size;
    if (size === 'compact' || size === 'normal' || size === 'large') return size;
    if (this._config?.compact === true) return 'compact';
    return 'normal';
  }

  private _getEventDisplay(): MonthEventDisplay {
    return this._config?.event_display === 'dots' ? 'dots' : 'pills';
  }

  private _focusDay(date: Date): void {
    this._focusedDay = startOfDay(date);
    this._carouselIndex = 0;
  }

  private _stepCarousel(delta: number, total: number): void {
    const maxIndex = Math.max(0, total - 2);
    const next = Math.min(maxIndex, Math.max(0, this._carouselIndex + delta));
    this._carouselIndex = next;
  }

  private _onCarouselTouchStart(e: TouchEvent): void {
    const touch = e.touches?.[0];
    if (!touch) return;
    this._touchStartX = touch.clientX;
    this._touchStartY = touch.clientY;
  }

  private _onCarouselTouchEnd(e: TouchEvent, total: number): void {
    if (this._touchStartX === null || this._touchStartY === null) return;
    const touch = e.changedTouches?.[0];
    const startX = this._touchStartX;
    const startY = this._touchStartY;
    this._touchStartX = null;
    this._touchStartY = null;
    if (!touch || total <= 2) return;
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    if (Math.abs(dx) >= 32 && Math.abs(dx) > Math.abs(dy)) {
      this._stepCarousel(dx < 0 ? 1 : -1, total);
    }
  }

  public static getStubConfig(hass?: HomeAssistant): MonthCardConfig {
    return {
      type: `custom:${MONTH_CARD_TYPE}`,
      entities: buildStubEntities(hass),
      first_day_of_week: 1,
      layout: 'classic',
      calendar_size: 'normal',
      event_display: 'pills',
      max_events_per_day: 3,
      show_header: true,
      show_navigation: true,
      show_entity_toggles: false,
      show_week_numbers: false,
      show_month_grid: true,
      show_day_summary: true,
      show_progress_bar: true,
      dim_completed_events: true,
      transparent: false,
      background_opacity: 100,
    };
  }

  public getCardSize(): number {
    if (this._config?.show_month_grid === false) return 2;
    const size = this._getCalendarSize();
    const showSummary = this._config?.show_day_summary !== false;
    if (size === 'compact') return showSummary ? 4 : 3;
    if (size === 'large') return showSummary ? 7 : 6;
    return showSummary ? 5 : 4;
  }

  public getGridOptions() {
    if (this._config?.show_month_grid === false) {
      return {
        columns: 12,
        min_columns: 6,
        rows: 2,
        min_rows: 2,
      };
    }
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

  protected override isUppercaseHeader(): boolean {
    return this._getLayout() === 'compact';
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
    this._focusDay(
      new Date(
        this._anchorDate.getFullYear(),
        this._anchorDate.getMonth(),
        1,
      ),
    );
  }

  protected navigateNext(): void {
    this._anchorDate = addMonths(this._anchorDate, 1);
    this._focusDay(
      new Date(
        this._anchorDate.getFullYear(),
        this._anchorDate.getMonth(),
        1,
      ),
    );
  }

  protected navigateToday(): void {
    const now = new Date();
    this._anchorDate = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
    this._focusDay(now);
  }

  protected override handleDayRollover(prevNow: Date, now: Date): void {
    if (isSameDay(prevNow, now)) return;
    if (isSameDay(this._focusedDay, prevNow)) {
      this._focusDay(now);
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

  private _renderDayDots(
    visibleDayEvents: CalendarEvent[],
    hiddenCount: number,
    dimCompleted: boolean,
    extraClass = '',
  ) {
    return html`
      <div class="day-dots ${extraClass}">
        ${visibleDayEvents.map((ev) => {
          const isPastDimmed = dimCompleted && isEventPast(ev, this._currentNow);
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
    `;
  }

  private _renderCompactFocusBar(
    focusedDayEvents: CalendarEvent[],
    locale: string,
    strings: TranslationStrings,
    showCurrentDay: boolean,
    showProgressBar: boolean,
    dimCompleted: boolean,
  ) {
    const weekdayLabel = new Intl.DateTimeFormat(locale, {
      weekday: 'long',
    }).format(this._focusedDay);
    const useEntityColor = Boolean(this._config?.use_entity_color);
    const totalEvents = focusedDayEvents.length;
    const maxIndex = Math.max(0, totalEvents - 2);
    const safeIndex = Math.min(Math.max(0, this._carouselIndex), maxIndex);
    const slotEvents = focusedDayEvents.slice(safeIndex, safeIndex + 2);
    const emptyText = isSameDay(this._focusedDay, this._currentNow)
      ? strings.noEvents
      : strings.noEventsDay;

    return html`
      <div class="compact-focus-bar ${showCurrentDay ? '' : 'no-date-col'}">
        ${showCurrentDay
          ? html`
              <div class="compact-date-col">
                <span class="compact-weekday">${weekdayLabel}</span>
                <span class="compact-day-hero">${this._focusedDay.getDate()}</span>
              </div>
            `
          : nothing}

        <div
          class="compact-events-carousel"
          @touchstart=${this._onCarouselTouchStart}
          @touchend=${(e: TouchEvent) => this._onCarouselTouchEnd(e, totalEvents)}
        >
          ${totalEvents === 0
            ? html`<div class="compact-empty-text">${emptyText}</div>`
            : html`
                <div
                  class="compact-events-slots ${slotEvents.length > 1 ? 'cols-2' : 'cols-1'}"
                >
                  ${slotEvents.map((ev) => {
                    const progress = getEventProgressInfo(
                      ev,
                      this._currentNow,
                      strings,
                    );
                    const isPastDimmed = dimCompleted && progress.isPast;
                    const timeText = ev.allDay
                      ? strings.allDay
                      : `${formatTimeMinimal(ev.start)} - ${formatTimeMinimal(ev.end)}`;
                    const displayTitle =
                      ev.summary && ev.summary !== '(Sin título)'
                        ? ev.summary
                        : ev.calendarName;
                    const slotStyle = useEntityColor
                      ? `--slot-accent: ${ev.color};`
                      : '--slot-accent: var(--cal-accent);';

                    return html`
                      <button
                        type="button"
                        class="compact-event-slot ${isPastDimmed ? 'is-past' : ''}"
                        style=${slotStyle}
                        @click=${(e: Event) => this._onEventPillClick(e, ev)}
                      >
                        <div class="compact-slot-time-row">
                          ${useEntityColor
                            ? html`<span class="compact-slot-dot"></span>`
                            : nothing}
                          <span class="compact-slot-time">${timeText}</span>
                        </div>
                        <div class="compact-slot-title">${displayTitle}</div>
                        ${showProgressBar && progress.isOngoing
                          ? html`
                              <div
                                class="compact-progress-track"
                                role="progressbar"
                                aria-valuenow=${Math.round(progress.progressPct)}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div
                                  class="compact-progress-fill"
                                  style="width: ${progress.progressPct}%;"
                                ></div>
                              </div>
                            `
                          : nothing}
                      </button>
                    `;
                  })}
                </div>

                ${totalEvents > 2
                  ? html`
                      <div class="carousel-controls">
                        <button
                          type="button"
                          class="carousel-nav-btn carousel-prev"
                          ?disabled=${safeIndex === 0}
                          title=${strings.prev}
                          aria-label=${strings.prev}
                          @click=${(e: Event) => {
                            e.stopPropagation();
                            this._stepCarousel(-1, totalEvents);
                          }}
                        >
                          <ha-icon icon="mdi:chevron-left"></ha-icon>
                        </button>
                        <button
                          type="button"
                          class="carousel-nav-btn carousel-next"
                          ?disabled=${safeIndex >= maxIndex}
                          title=${strings.next}
                          aria-label=${strings.next}
                          @click=${(e: Event) => {
                            e.stopPropagation();
                            this._stepCarousel(1, totalEvents);
                          }}
                        >
                          <ha-icon icon="mdi:chevron-right"></ha-icon>
                        </button>
                      </div>
                    `
                  : nothing}
              `}
        </div>
      </div>
    `;
  }

  private _renderCompactGrid(
    weeks: MonthGridDay[][],
    weekdays: string[],
    visibleEvents: CalendarEvent[],
    filterOpts: DayEventFilterOptions,
    maxEvents: number,
    showWeekNumbers: boolean,
    showDaySummary: boolean,
    showCurrentDay: boolean,
    dimCompleted: boolean,
    strings: TranslationStrings,
  ) {
    return html`
      <div class="compact-grid-wrap">
        <div
          class="compact-weekday-row ${showWeekNumbers ? 'with-weeks' : ''}"
          role="row"
        >
          ${showWeekNumbers
            ? html`<div class="compact-week-col-header">${strings.weekAbbr}</div>`
            : nothing}
          ${weekdays.map(
            (label) => html`<div class="compact-weekday-cell">${label}</div>`,
          )}
        </div>

        <div class="compact-weeks-container">
          ${weeks.map((week) => {
            const isActiveWeek = week.some((d) => isSameDay(d.date, this._focusedDay));
            return html`
              <div
                class="compact-week-row ${showWeekNumbers ? 'with-weeks' : ''} ${isActiveWeek ? 'is-active-week' : ''}"
              >
                ${showWeekNumbers
                  ? html`<div class="compact-week-number-cell">${week[0].weekNumber}</div>`
                  : nothing}
                ${week.map((day) => {
                  if (!day.isCurrentMonth) {
                    return html`<div class="compact-day-cell outside-month" aria-hidden="true"></div>`;
                  }
                  const dayEvents = getEventsForDay(visibleEvents, day.date, filterOpts);
                  const visibleDayEvents = dayEvents.slice(0, maxEvents);
                  const hiddenCount = dayEvents.length - visibleDayEvents.length;
                  const isFocused = isSameDay(day.date, this._focusedDay);
                  const markToday = showCurrentDay && day.isToday;

                  return html`
                    <button
                      type="button"
                      class="compact-day-cell ${markToday ? 'is-today' : ''} ${isFocused ? 'is-focused' : ''}"
                      @click=${() => {
                        this._focusDay(day.date);
                        if (!showDaySummary && dayEvents.length > 0) {
                          this._openDayList(day.date);
                        }
                      }}
                    >
                      <span
                        class="compact-day-num ${isFocused ? 'is-focused-badge' : ''} ${markToday ? 'is-today-badge' : ''}"
                      >
                        ${day.date.getDate()}
                      </span>
                      ${visibleDayEvents.length > 0
                        ? this._renderDayDots(
                            visibleDayEvents,
                            hiddenCount,
                            dimCompleted,
                            'compact-day-dots',
                          )
                        : nothing}
                    </button>
                  `;
                })}
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  protected renderCalendarBody(
    visibleEvents: CalendarEvent[],
    _entities: NormalizedCalendarEntity[],
    locale: string,
    _lang: SupportedLanguage,
    strings: TranslationStrings,
  ) {
    const layout = this._getLayout();
    const size = this._getCalendarSize();
    const eventDisplay = this._getEventDisplay();
    const showWeekNumbers = Boolean(this._config.show_week_numbers);
    const showMonthGrid = this._config.show_month_grid !== false;
    const showDaySummary = this._config.show_day_summary !== false;
    const showProgressBar = this._config.show_progress_bar !== false;
    const defaultMax =
      layout === 'compact' || eventDisplay === 'dots'
        ? 4
        : size === 'compact'
          ? 2
          : 3;
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

    if (layout === 'compact') {
      return html`
        <div class="month-root size-${size} display-dots layout-compact">
          ${showDaySummary
            ? this._renderCompactFocusBar(
                focusedDayEvents,
                locale,
                strings,
                showCurrentDay,
                showProgressBar,
                dimCompleted,
              )
            : nothing}
          ${showMonthGrid
            ? this._renderCompactGrid(
                weeks,
                weekdays,
                visibleEvents,
                filterOpts,
                maxEvents,
                showWeekNumbers,
                showDaySummary,
                showCurrentDay,
                dimCompleted,
                strings,
              )
            : nothing}
        </div>
      `;
    }

    return html`
      <div class="month-root size-${size} display-${eventDisplay} layout-classic">
        ${showMonthGrid
          ? html`
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
                                this._focusDay(day.date);
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
                                  ? this._renderDayDots(
                                      visibleDayEvents,
                                      hiddenCount,
                                      dimCompleted,
                                    )
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
            `
          : nothing}

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

      /* Compact structural layout */
      .month-root.size-compact {
        --mc-compact-row-min-h: 28px;
        --mc-compact-day-font: 0.82rem;
      }

      .month-root.size-normal {
        --mc-compact-row-min-h: 36px;
        --mc-compact-day-font: 0.92rem;
      }

      .month-root.size-large {
        --mc-compact-row-min-h: 46px;
        --mc-compact-day-font: 1.02rem;
      }

      .compact-focus-bar {
        display: flex;
        align-items: stretch;
        gap: 14px;
        flex-shrink: 0;
      }

      .compact-date-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        min-width: 56px;
        padding-right: 4px;
      }

      .compact-weekday {
        font-size: 0.78rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--cal-text-primary);
        line-height: 1.1;
      }

      .compact-day-hero {
        font-size: 2.35rem;
        font-weight: 800;
        line-height: 0.96;
        color: var(--cal-text-primary);
        letter-spacing: -0.02em;
        margin-top: 2px;
      }

      .compact-events-carousel {
        flex: 1 1 auto;
        min-width: 0;
        display: flex;
        align-items: center;
        gap: 6px;
        padding-left: 14px;
        border-left: 2px solid color-mix(in srgb, var(--cal-text-primary) 26%, transparent);
      }

      .compact-focus-bar.no-date-col .compact-events-carousel {
        padding-left: 0;
        border-left: none;
      }

      .compact-empty-text {
        font-size: 0.92rem;
        font-style: italic;
        font-weight: 600;
        color: var(--cal-text-secondary);
        padding: 4px 0;
      }

      .compact-events-slots {
        flex: 1 1 auto;
        min-width: 0;
        display: grid;
        gap: 10px;
        align-items: stretch;
      }

      .compact-events-slots.cols-1 {
        grid-template-columns: minmax(0, 1fr);
      }

      .compact-events-slots.cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .compact-event-slot {
        appearance: none;
        border: none;
        background: transparent;
        color: var(--cal-text-primary);
        font-family: inherit;
        text-align: left;
        padding: 2px 4px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2px;
        min-width: 0;
        border-radius: 6px;
        transition: background-color 0.15s ease, opacity 0.15s ease;
      }

      .compact-event-slot:hover {
        background: var(--cal-surface-alt);
      }

      .compact-events-slots.cols-2 .compact-event-slot + .compact-event-slot {
        border-left: 1.5px solid color-mix(in srgb, var(--cal-text-primary) 24%, transparent);
        padding-left: 12px;
        border-radius: 0 6px 6px 0;
      }

      .compact-event-slot.is-past {
        opacity: 0.48;
        filter: grayscale(1);
      }

      .compact-event-slot.is-past .compact-slot-time,
      .compact-event-slot.is-past .compact-slot-title {
        text-decoration: line-through;
      }

      .compact-slot-time-row {
        display: flex;
        align-items: center;
        gap: 5px;
        min-width: 0;
      }

      .compact-slot-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--slot-accent, var(--cal-accent));
        flex-shrink: 0;
      }

      .compact-slot-time {
        font-size: 0.78rem;
        font-weight: 800;
        color: var(--cal-text-primary);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .compact-slot-title {
        font-size: 0.86rem;
        font-weight: 500;
        line-height: 1.25;
        color: var(--cal-text-primary);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-word;
      }

      .compact-progress-track {
        width: 100%;
        height: 3px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--cal-text-primary) 16%, transparent);
        overflow: hidden;
        margin-top: 3px;
      }

      .compact-progress-fill {
        height: 100%;
        border-radius: 999px;
        background: var(--slot-accent, var(--cal-accent));
      }

      .carousel-controls {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex-shrink: 0;
      }

      .carousel-nav-btn {
        appearance: none;
        border: 1px solid color-mix(in srgb, var(--cal-text-primary) 18%, transparent);
        background: transparent;
        color: var(--cal-text-primary);
        width: 22px;
        height: 22px;
        border-radius: 6px;
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        --mdc-icon-size: 15px;
        transition: background-color 0.15s ease, opacity 0.15s ease;
      }

      .carousel-nav-btn:hover:not(:disabled) {
        background: var(--cal-surface-alt);
      }

      .carousel-nav-btn:disabled {
        opacity: 0.3;
        cursor: default;
      }

      .compact-grid-wrap {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        min-height: 0;
        gap: 2px;
        padding-top: 4px;
      }

      .compact-weekday-row,
      .compact-week-row {
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        align-items: center;
      }

      .compact-weekday-row.with-weeks,
      .compact-week-row.with-weeks {
        grid-template-columns: 32px repeat(7, minmax(0, 1fr));
      }

      .compact-week-col-header,
      .compact-weekday-cell {
        text-align: center;
        font-size: var(--mc-weekday-font);
        padding: 4px 2px 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .compact-week-col-header {
        font-weight: 600;
        color: var(--cal-text-secondary);
      }

      .compact-weekday-cell {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--cal-text-primary);
      }

      .compact-weeks-container {
        display: grid;
        grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
        gap: 2px;
        flex: 1 1 auto;
        min-height: 0;
      }

      .compact-week-row {
        padding: 2px 4px;
        border-radius: 10px;
        min-height: var(--mc-compact-row-min-h, 34px);
        transition: background-color 0.15s ease;
      }

      .compact-week-row.is-active-week {
        background: color-mix(in srgb, var(--cal-accent) 18%, var(--cal-surface-alt));
      }

      .compact-week-number-cell {
        text-align: center;
        font-size: 0.76rem;
        font-weight: 500;
        color: var(--cal-text-secondary);
      }

      .compact-week-row.is-active-week .compact-week-number-cell {
        color: var(--cal-text-primary);
        font-weight: 800;
      }

      .compact-day-cell {
        appearance: none;
        border: none;
        background: transparent;
        color: var(--cal-text-primary);
        font-family: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
        padding: 2px 1px;
        cursor: pointer;
        min-width: 0;
        border-radius: 8px;
        transition: background-color 0.12s ease;
      }

      .compact-day-cell:hover {
        background: color-mix(in srgb, var(--cal-text-primary) 8%, transparent);
      }

      .compact-day-cell.outside-month {
        cursor: default;
        pointer-events: none;
      }

      .compact-day-num {
        min-width: 26px;
        height: 24px;
        padding: 0 4px;
        border-radius: 7px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--mc-compact-day-font, 0.9rem);
        font-weight: 600;
        line-height: 1;
        color: var(--cal-text-primary);
      }

      .compact-day-num.is-focused-badge {
        background: var(--cal-today-ring);
        color: var(--text-primary-color, #ffffff);
        font-weight: 800;
      }

      .compact-day-num.is-today-badge:not(.is-focused-badge) {
        box-shadow: inset 0 0 0 1.5px var(--cal-today-ring);
        color: var(--cal-accent);
        font-weight: 800;
      }

      .compact-day-dots {
        min-height: 6px;
        padding: 0;
        gap: 2px;
      }

      @container (max-width: 340px) {
        .compact-events-slots.cols-2 {
          grid-template-columns: minmax(0, 1fr);
          gap: 6px;
        }

        .compact-events-slots.cols-2 .compact-event-slot + .compact-event-slot {
          border-left: none;
          border-top: 1px solid color-mix(in srgb, var(--cal-text-primary) 18%, transparent);
          padding-left: 4px;
          padding-top: 6px;
          border-radius: 6px;
        }

        .compact-day-hero {
          font-size: 1.9rem;
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
