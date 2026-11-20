import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { TranslationStrings } from '../constants';
import { toTranslucentColor } from '../styles/shared-styles';
import type { CalendarEvent, SupportedLanguage } from '../types';
import {
  formatDayTitle,
  formatEventTimeRange,
  formatTimeShort,
  isEventPast,
} from '../utils/date-utils';

@customElement('ha-calendar-event-dialog')
export class HaCalendarEventDialog extends LitElement {
  @property({ attribute: false }) public event: CalendarEvent | null = null;
  @property({ attribute: false }) public dayDate: Date | null = null;
  @property({ type: Array }) public dayEvents: CalendarEvent[] = [];
  @property({ type: String }) public locale = 'en-US';
  @property({ type: String }) public lang: SupportedLanguage = 'en';
  @property({ attribute: false }) public strings!: TranslationStrings;
  @property({ type: Boolean }) public dimCompletedEvents = true;
  @property({ attribute: false }) public now: Date = new Date();

  private _handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this._close();
    }
  };

  public connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('keydown', this._handleKeydown);
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this._handleKeydown);
  }

  private _close(): void {
    this.dispatchEvent(
      new CustomEvent('cal-dialog-close', { bubbles: true, composed: true }),
    );
  }

  private _selectEventFromList(ev: CalendarEvent): void {
    this.dispatchEvent(
      new CustomEvent('cal-select-event', {
        detail: { event: ev },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _openMoreInfo(entityId: string): void {
    this._close();
    this.dispatchEvent(
      new CustomEvent('hass-more-info', {
        detail: { entityId },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _renderEventDetail(ev: CalendarEvent) {
    const whenText = formatEventTimeRange(
      ev,
      this.locale,
      this.lang,
      this.strings?.allDay || 'All day',
    );

    return html`
      <div class="dialog-header" style="--ev-color: ${ev.color};">
        <div class="header-badge-row">
          <span
            class="calendar-badge"
            style="background: ${toTranslucentColor(ev.color, 0.16)}; color: ${ev.color};"
          >
            <ha-icon .icon=${ev.icon}></ha-icon>
            <span>${ev.calendarName}</span>
          </span>
          <button
            type="button"
            class="close-btn"
            aria-label=${this.strings?.close || 'Close'}
            @click=${this._close}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <h2 class="event-title">${ev.summary}</h2>
      </div>

      <div class="dialog-body">
        <div class="detail-row">
          <ha-icon icon="mdi:clock-outline"></ha-icon>
          <div>
            <div class="detail-label">${this.strings?.when || 'When'}</div>
            <div class="detail-value">${whenText}</div>
          </div>
        </div>

        ${ev.location
          ? html`
              <div class="detail-row">
                <ha-icon icon="mdi:map-marker-outline"></ha-icon>
                <div>
                  <div class="detail-label">${this.strings?.location || 'Location'}</div>
                  <div class="detail-value">${ev.location}</div>
                </div>
              </div>
            `
          : nothing}

        ${ev.description
          ? html`
              <div class="detail-row">
                <ha-icon icon="mdi:text"></ha-icon>
                <div>
                  <div class="detail-label">
                    ${this.strings?.description || 'Description'}
                  </div>
                  <div class="detail-value description-text">${ev.description}</div>
                </div>
              </div>
            `
          : nothing}
      </div>

      <div class="dialog-footer">
        <button
          type="button"
          class="action-btn secondary"
          @click=${() => this._openMoreInfo(ev.calendarEntity)}
        >
          <ha-icon icon="mdi:open-in-new"></ha-icon>
          <span>${this.strings?.openEntity || 'Open entity'}</span>
        </button>
        <button type="button" class="action-btn primary" @click=${this._close}>
          ${this.strings?.close || 'Close'}
        </button>
      </div>
    `;
  }

  private _renderDayList() {
    if (!this.dayDate) return nothing;
    const title = formatDayTitle(this.dayDate, this.locale);

    return html`
      <div class="dialog-header">
        <div class="header-badge-row">
          <span class="day-list-count">
            ${this.dayEvents.length} ${this.strings?.eventsCount || 'events'}
          </span>
          <button
            type="button"
            class="close-btn"
            aria-label=${this.strings?.close || 'Close'}
            @click=${this._close}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <h2 class="event-title">${title}</h2>
      </div>

      <div class="dialog-body day-list-body">
        ${this.dayEvents.length === 0
          ? html`<div class="empty-day">${this.strings?.noEvents || 'No events'}</div>`
          : this.dayEvents.map((ev) => {
              const isPastDimmed = this.dimCompletedEvents && isEventPast(ev, this.now);
              const timeStr = ev.allDay
                ? this.strings?.allDay || 'All day'
                : `${formatTimeShort(ev.start, this.locale)} – ${formatTimeShort(
                    ev.end,
                    this.locale,
                  )}`;
              return html`
                <button
                  type="button"
                  class="day-event-row ${isPastDimmed ? 'is-past' : ''}"
                  style="--ev-color: ${ev.color}; --ev-bg: ${toTranslucentColor(
                    ev.color,
                    0.12,
                  )};"
                  @click=${() => this._selectEventFromList(ev)}
                >
                  <ha-icon class="row-icon" .icon=${ev.icon}></ha-icon>
                  <div class="row-main">
                    <div class="row-title">${ev.summary}</div>
                    <div class="row-sub">
                      <span>${timeStr}</span>
                      <span>·</span>
                      <span>${ev.calendarName}</span>
                    </div>
                  </div>
                  <ha-icon class="row-arrow" icon="mdi:chevron-right"></ha-icon>
                </button>
              `;
            })}
      </div>
    `;
  }

  protected render() {
    const isOpen = Boolean(this.event || this.dayDate);
    if (!isOpen) return nothing;

    return html`
      <div
        class="backdrop"
        role="dialog"
        aria-modal="true"
        @click=${(e: Event) => {
          if (e.target === e.currentTarget) this._close();
        }}
      >
        <div class="dialog-card">
          ${this.event
            ? this._renderEventDetail(this.event)
            : this._renderDayList()}
        </div>
      </div>
    `;
  }

  static styles = css`
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: rgba(0, 0, 0, 0.54);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      backdrop-filter: blur(2px);
    }

    .dialog-card {
      width: 100%;
      max-width: 440px;
      max-height: 82vh;
      display: flex;
      flex-direction: column;
      background: var(--ha-card-background, var(--card-background-color, #ffffff));
      color: var(--primary-text-color, #212121);
      border-radius: 14px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.32);
      overflow: hidden;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2));
    }

    .dialog-header {
      padding: 16px 18px 12px;
      border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2));
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .header-badge-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .calendar-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 600;
      --mdc-icon-size: 15px;
    }

    .day-list-count {
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--secondary-text-color, #727272);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .close-btn {
      appearance: none;
      border: none;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      cursor: pointer;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      --mdc-icon-size: 20px;
    }

    .close-btn:hover {
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
    }

    .event-title {
      margin: 0;
      font-size: 1.15rem;
      font-weight: 600;
      line-height: 1.3;
    }

    .dialog-body {
      padding: 14px 18px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .detail-row {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .detail-row ha-icon {
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color, #727272);
      margin-top: 2px;
      flex-shrink: 0;
    }

    .detail-label {
      font-size: 0.74rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      color: var(--secondary-text-color, #727272);
    }

    .detail-value {
      font-size: 0.92rem;
      line-height: 1.4;
      word-break: break-word;
    }

    .description-text {
      white-space: pre-wrap;
    }

    .dialog-footer {
      padding: 12px 18px;
      border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2));
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
    }

    .action-btn {
      appearance: none;
      border-radius: 8px;
      padding: 8px 14px;
      font-family: inherit;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      --mdc-icon-size: 16px;
    }

    .action-btn.secondary {
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      background: transparent;
      color: var(--primary-text-color, #212121);
    }

    .action-btn.primary {
      border: none;
      background: var(--primary-color, #1a73e8);
      color: var(--text-primary-color, #ffffff);
    }

    .day-list-body {
      gap: 8px;
    }

    .day-event-row {
      appearance: none;
      width: 100%;
      border: none;
      border-left: 4px solid var(--ev-color);
      background: var(--ev-bg);
      color: var(--primary-text-color, #212121);
      border-radius: 8px;
      padding: 10px 12px;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      text-align: left;
      font-family: inherit;
    }

    .day-event-row:hover {
      filter: brightness(0.96);
    }

    .day-event-row.is-past {
      opacity: 0.5;
      filter: grayscale(1);
    }

    .day-event-row.is-past:hover {
      opacity: 0.8;
    }

    .day-event-row.is-past .row-title {
      text-decoration: line-through;
    }

    .row-icon {
      --mdc-icon-size: 18px;
      color: var(--ev-color);
      flex-shrink: 0;
    }

    .row-main {
      flex: 1;
      min-width: 0;
    }

    .row-title {
      font-size: 0.9rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .row-sub {
      font-size: 0.78rem;
      color: var(--secondary-text-color, #727272);
      display: flex;
      gap: 5px;
      align-items: center;
    }

    .row-arrow {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color, #727272);
      flex-shrink: 0;
    }

    .empty-day {
      text-align: center;
      padding: 16px;
      color: var(--secondary-text-color, #727272);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'ha-calendar-event-dialog': HaCalendarEventDialog;
  }
}
