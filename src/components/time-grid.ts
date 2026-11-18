import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { TranslationStrings } from '../constants';
import { toTranslucentColor } from '../styles/shared-styles';
import type { CalendarEvent, SupportedLanguage } from '../types';
import {
  capitalizeFirst,
  formatHourLabel,
  formatTimeShort,
  getEventsForDay,
  isSameDay,
  layoutOverlappingEvents,
} from '../utils/date-utils';

@customElement('ha-calendar-time-grid')
export class HaCalendarTimeGrid extends LitElement {
  @property({ type: Array }) public days: Date[] = [];
  @property({ type: Array }) public events: CalendarEvent[] = [];
  @property({ type: Number }) public startHour = 0;
  @property({ type: Number }) public endHour = 24;
  @property({ type: String }) public locale = 'es-ES';
  @property({ type: String }) public lang: SupportedLanguage = 'es';
  @property({ attribute: false }) public strings!: TranslationStrings;
  @property({ type: Boolean }) public detailedMode = false;
  @property({ type: Boolean }) public compactAllDay = false;

  @state() private _now: Date = new Date();
  private _timerId?: number;
  private _hasAutoScrolled = false;

  public connectedCallback(): void {
    super.connectedCallback();
    this._now = new Date();
    this._timerId = window.setInterval(() => {
      this._now = new Date();
    }, 60_000);
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._timerId !== undefined) {
      window.clearInterval(this._timerId);
      this._timerId = undefined;
    }
  }

  protected updated(): void {
    if (!this._hasAutoScrolled) {
      const scroller = this.renderRoot.querySelector('.grid-scroll');
      if (scroller) {
        const hourHeight = this._hourHeight;
        const safeStart = this._safeStartHour;
        const targetHour = Math.max(safeStart, Math.min(8, this._safeEndHour - 2));
        scroller.scrollTop = Math.max(0, (targetHour - safeStart) * hourHeight - 16);
        this._hasAutoScrolled = true;
      }
    }
  }

  private get _safeStartHour(): number {
    return Math.max(0, Math.min(23, Math.floor(this.startHour || 0)));
  }

  private get _safeEndHour(): number {
    const start = this._safeStartHour;
    return Math.max(start + 1, Math.min(24, Math.floor(this.endHour || 24)));
  }

  private get _hourHeight(): number {
    return this.detailedMode ? 60 : 52;
  }

  private _onEventClick(event: CalendarEvent): void {
    this.dispatchEvent(
      new CustomEvent('cal-event-click', {
        detail: { event },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _renderDayHeader(day: Date) {
    const isToday = isSameDay(day, this._now);
    const weekday = capitalizeFirst(
      new Intl.DateTimeFormat(this.locale, { weekday: 'short' })
        .format(day)
        .replace(/\.$/, ''),
    );
    const dayNum = day.getDate();

    return html`
      <div class="day-header-cell ${isToday ? 'is-today' : ''}">
        <span class="day-weekday">${weekday}</span>
        <span class="day-number ${isToday ? 'today-badge' : ''}">${dayNum}</span>
      </div>
    `;
  }

  protected render() {
    const startH = this._safeStartHour;
    const endH = this._safeEndHour;
    const hourHeight = this._hourHeight;
    const hours: number[] = [];
    for (let h = startH; h < endH; h++) {
      hours.push(h);
    }

    const totalGridHeight = hours.length * hourHeight;
    const dayCount = Math.max(1, this.days.length);
    const colMinWidth = dayCount > 1 ? '82px' : '0px';

    const dayEventsList = this.days.map((day) => getEventsForDay(this.events, day));
    const hasAnyAllDay = dayEventsList.some((evs) => evs.some((ev) => ev.allDay));

    const nowMinutes = this._now.getHours() * 60 + this._now.getMinutes();
    const showNowLine =
      nowMinutes >= startH * 60 && nowMinutes <= endH * 60;
    const nowTopPct = showNowLine
      ? ((nowMinutes - startH * 60) / ((endH - startH) * 60)) * 100
      : 0;

    return html`
      <div
        class="grid-scroll"
        style="--day-count: ${dayCount}; --col-min-width: ${colMinWidth}; --hour-height: ${hourHeight}px;"
      >
        <div class="grid-canvas">
          <!-- Sticky header: days + all-day events -->
          <div class="sticky-top">
            <div class="header-row">
              <div class="gutter-corner"></div>
              <div class="day-columns-grid">
                ${this.days.map((day) => this._renderDayHeader(day))}
              </div>
            </div>

            ${hasAnyAllDay
              ? html`
                  <div class="all-day-row ${this.compactAllDay ? 'compact' : ''}">
                    <div class="gutter-all-day">
                      <span>${this.strings?.allDay || 'All day'}</span>
                    </div>
                    <div class="day-columns-grid all-day-columns">
                      ${dayEventsList.map((evs, idx) => {
                        const allDayEvs = evs.filter((ev) => ev.allDay);
                        const isToday = isSameDay(this.days[idx], this._now);
                        return html`
                          <div class="all-day-cell ${isToday ? 'is-today-col' : ''}">
                            ${allDayEvs.map(
                              (ev) => html`
                                <button
                                  type="button"
                                  class="all-day-pill"
                                  style="--ev-color: ${ev.color};"
                                  title=${`${ev.calendarName}: ${ev.summary}`}
                                  @click=${() => this._onEventClick(ev)}
                                >
                                  <ha-icon class="ev-icon" .icon=${ev.icon}></ha-icon>
                                  <span class="ev-summary">${ev.summary}</span>
                                </button>
                              `,
                            )}
                          </div>
                        `;
                      })}
                    </div>
                  </div>
                `
              : nothing}
          </div>

          <!-- Hourly schedule body -->
          <div class="time-body" style="height: ${totalGridHeight}px;">
            <div class="time-gutter">
              ${hours.map(
                (h) => html`
                  <div class="hour-label" style="height: ${hourHeight}px;">
                    <span>${formatHourLabel(h, this.locale)}</span>
                  </div>
                `,
              )}
            </div>

            <div class="day-columns-grid time-columns">
              <!-- Background hour lines -->
              <div class="hour-lines" aria-hidden="true">
                ${hours.map(
                  () => html`
                    <div class="hour-line" style="height: ${hourHeight}px;">
                      <div class="half-hour-line"></div>
                    </div>
                  `,
                )}
              </div>

              ${this.days.map((day, idx) => {
                const isToday = isSameDay(day, this._now);
                const layoutItems = layoutOverlappingEvents(
                  dayEventsList[idx],
                  day,
                  startH,
                  endH,
                );

                return html`
                  <div class="day-col ${isToday ? 'is-today-col' : ''}">
                    ${layoutItems.map((item) => {
                      const ev = item.event;
                      const bg = toTranslucentColor(ev.color, 0.16);
                      const bgHover = toTranslucentColor(ev.color, 0.26);
                      const timeLabel = `${formatTimeShort(
                        ev.start,
                        this.locale,
                      )} – ${formatTimeShort(ev.end, this.locale)}`;

                      return html`
                        <button
                          type="button"
                          class="timed-event"
                          style="
                            top: ${item.top}%;
                            height: ${item.height}%;
                            left: calc(${item.left}% + 2px);
                            width: calc(${item.width}% - 4px);
                            --ev-color: ${ev.color};
                            --ev-bg: ${bg};
                            --ev-bg-hover: ${bgHover};
                          "
                          title=${`${ev.summary} (${timeLabel}) · ${ev.calendarName}`}
                          @click=${() => this._onEventClick(ev)}
                        >
                          <div class="timed-ev-header">
                            <ha-icon class="ev-icon" .icon=${ev.icon}></ha-icon>
                            <span class="timed-ev-title">${ev.summary}</span>
                          </div>
                          <div class="timed-ev-time">${timeLabel}</div>
                          ${this.detailedMode && ev.location
                            ? html`
                                <div class="timed-ev-meta">
                                  <ha-icon icon="mdi:map-marker-outline"></ha-icon>
                                  <span>${ev.location}</span>
                                </div>
                              `
                            : nothing}
                          ${this.detailedMode && ev.description
                            ? html`<div class="timed-ev-desc">${ev.description}</div>`
                            : nothing}
                        </button>
                      `;
                    })}
                    ${isToday && showNowLine
                      ? html`
                          <div
                            class="now-indicator"
                            style="top: ${nowTopPct}%;"
                            aria-hidden="true"
                          >
                            <span class="now-dot"></span>
                            <span class="now-line"></span>
                          </div>
                        `
                      : nothing}
                  </div>
                `;
              })}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    .grid-scroll {
      overflow: auto;
      max-height: 580px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.22));
      border-radius: 10px;
      background: var(--ha-card-background, var(--card-background-color, #ffffff));
      position: relative;
    }

    .grid-canvas {
      min-width: fit-content;
      width: 100%;
    }

    .sticky-top {
      position: sticky;
      top: 0;
      z-index: 6;
      background: var(--ha-card-background, var(--card-background-color, #ffffff));
      border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.22));
    }

    .header-row,
    .all-day-row,
    .time-body {
      display: flex;
      width: 100%;
    }

    .gutter-corner,
    .gutter-all-day,
    .time-gutter {
      width: 54px;
      min-width: 54px;
      flex-shrink: 0;
      position: sticky;
      left: 0;
      z-index: 4;
      background: var(--ha-card-background, var(--card-background-color, #ffffff));
      border-right: 1px solid var(--divider-color, rgba(127, 127, 127, 0.22));
      box-sizing: border-box;
    }

    .gutter-all-day {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      font-size: 0.68rem;
      text-align: center;
      color: var(--secondary-text-color, #727272);
      line-height: 1.15;
    }

    .day-columns-grid {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(var(--day-count), minmax(var(--col-min-width), 1fr));
      position: relative;
    }

    .day-header-cell {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 8px 4px;
      gap: 3px;
      border-right: 1px solid var(--divider-color, rgba(127, 127, 127, 0.16));
    }

    .day-header-cell:last-child {
      border-right: none;
    }

    .day-weekday {
      font-size: 0.72rem;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--secondary-text-color, #727272);
    }

    .day-header-cell.is-today .day-weekday {
      color: var(--primary-color, #1a73e8);
    }

    .day-number {
      width: 28px;
      height: 28px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--primary-text-color, #212121);
    }

    .day-number.today-badge {
      background: var(--primary-color, #1a73e8);
      color: var(--text-primary-color, #ffffff);
    }

    .all-day-row {
      border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.16));
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.04));
    }

    .all-day-cell {
      padding: 4px;
      display: flex;
      flex-direction: column;
      gap: 3px;
      border-right: 1px solid var(--divider-color, rgba(127, 127, 127, 0.16));
      min-height: 28px;
    }

    .all-day-cell:last-child {
      border-right: none;
    }

    .all-day-row.compact .all-day-cell {
      max-height: 68px;
      overflow-y: auto;
    }

    .all-day-pill {
      appearance: none;
      border: none;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 3px 6px;
      border-radius: 5px;
      background: var(--ev-color);
      color: #ffffff;
      font-family: inherit;
      font-size: 0.75rem;
      font-weight: 600;
      text-align: left;
      cursor: pointer;
      box-sizing: border-box;
      transition: filter 0.15s ease;
    }

    .all-day-pill:hover {
      filter: brightness(1.08);
    }

    .all-day-pill .ev-icon {
      --mdc-icon-size: 13px;
      flex-shrink: 0;
    }

    .ev-summary {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .time-body {
      position: relative;
    }

    .hour-label {
      box-sizing: border-box;
      position: relative;
      display: flex;
      justify-content: flex-end;
      padding-right: 8px;
      font-size: 0.72rem;
      color: var(--secondary-text-color, #727272);
    }

    .hour-label span {
      transform: translateY(-7px);
      background: var(--ha-card-background, var(--card-background-color, #ffffff));
      padding: 0 2px;
    }

    .hour-label:first-child span {
      transform: translateY(2px);
    }

    .time-columns {
      position: relative;
    }

    .hour-lines {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }

    .hour-line {
      box-sizing: border-box;
      border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.18));
      position: relative;
    }

    .hour-line:first-child {
      border-top: none;
    }

    .half-hour-line {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      border-top: 1px dashed var(--divider-color, rgba(127, 127, 127, 0.1));
    }

    .day-col {
      position: relative;
      height: 100%;
      border-right: 1px solid var(--divider-color, rgba(127, 127, 127, 0.16));
      z-index: 1;
    }

    .day-col:last-child {
      border-right: none;
    }

    .is-today-col {
      background: rgba(26, 115, 232, 0.035);
    }

    .timed-event {
      appearance: none;
      position: absolute;
      z-index: 2;
      border: none;
      border-left: 3px solid var(--ev-color);
      background: var(--ev-bg);
      color: var(--primary-text-color, #212121);
      border-radius: 6px;
      padding: 3px 6px;
      text-align: left;
      font-family: inherit;
      cursor: pointer;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 1px;
      box-sizing: border-box;
      transition: background-color 0.15s ease, box-shadow 0.15s ease;
    }

    .timed-event:hover {
      background: var(--ev-bg-hover);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      z-index: 3;
    }

    .timed-ev-header {
      display: flex;
      align-items: center;
      gap: 4px;
      min-width: 0;
    }

    .timed-ev-header .ev-icon {
      --mdc-icon-size: 13px;
      color: var(--ev-color);
      flex-shrink: 0;
    }

    .timed-ev-title {
      font-size: 0.76rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .timed-ev-time {
      font-size: 0.69rem;
      color: var(--secondary-text-color, #727272);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .timed-ev-meta {
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: 0.71rem;
      color: var(--secondary-text-color, #727272);
      margin-top: 2px;
      --mdc-icon-size: 13px;
    }

    .timed-ev-meta span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .timed-ev-desc {
      font-size: 0.71rem;
      color: var(--secondary-text-color, #727272);
      margin-top: 2px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .now-indicator {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 4;
      pointer-events: none;
      display: flex;
      align-items: center;
      transform: translateY(-50%);
    }

    .now-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #ea4335;
      margin-left: -4.5px;
      flex-shrink: 0;
    }

    .now-line {
      height: 2px;
      flex: 1;
      background: #ea4335;
    }

    @media (max-width: 520px) {
      .gutter-corner,
      .gutter-all-day,
      .time-gutter {
        width: 44px;
        min-width: 44px;
      }

      .hour-label {
        padding-right: 4px;
        font-size: 0.66rem;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'ha-calendar-time-grid': HaCalendarTimeGrid;
  }
}
