import { css, html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  EVENT_CARD_TYPE,
  type TranslationStrings,
} from '../constants';
import { sharedCardStyles } from '../styles/shared-styles';
import type {
  CalendarEvent,
  EventCardConfig,
  HomeAssistant,
  NormalizedCalendarEntity,
  SupportedLanguage,
} from '../types';
import {
  addDays,
  endOfDay,
  formatDayTitle,
  formatEventInlineRange,
  getEventProgressInfo,
  getEventsForDay,
  startOfDay,
} from '../utils/date-utils';
import { BaseCalendarCard, buildStubEntities } from './base-card';

@customElement(EVENT_CARD_TYPE)
export class HaCalendarEventCard extends BaseCalendarCard<EventCardConfig> {
  public static getStubConfig(hass?: HomeAssistant): EventCardConfig {
    return {
      type: `custom:${EVENT_CARD_TYPE}`,
      title: 'Agenda actual',
      entities: buildStubEntities(hass),
      max_previous_events: 2,
      max_upcoming_events: 2,
      show_all_day_events: true,
      all_day_position: 'top',
      show_completed_events: true,
      show_progress_bar: true,
      show_entity_toggles: false,
      transparent: false,
      background_opacity: 100,
    };
  }

  public getCardSize(): number {
    return 2;
  }

  public getGridOptions() {
    return {
      columns: 6,
      min_columns: 3,
    };
  }

  protected override autoFollowToday(): boolean {
    return true;
  }

  protected override useSharedHeader(): boolean {
    return false;
  }

  protected override isMinimalSurface(): boolean {
    return true;
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

  private _renderSectionHeader(label: string) {
    return html`
      <div class="evcard-divider" role="separator">
        <span class="evcard-line"></span>
        <span class="evcard-section-label">${label}</span>
        <span class="evcard-line"></span>
      </div>
    `;
  }

  private _renderCompactEventRow(
    ev: CalendarEvent,
    lang: SupportedLanguage,
    strings: TranslationStrings,
    options: { isCurrent: boolean; isPrevious?: boolean; showProgressBar: boolean },
  ) {
    const useEntityColor = Boolean(this._config?.use_entity_color);
    const accentStyle = useEntityColor ? `--min-ev-accent: ${ev.color};` : '';
    const displayTitle =
      ev.summary && ev.summary !== '(Sin título)' ? ev.summary : ev.calendarName;
    const inlineRange = formatEventInlineRange(ev, lang, strings.allDay);
    const progress = options.isCurrent
      ? getEventProgressInfo(ev, this._currentNow, strings)
      : null;

    return html`
      <button
        type="button"
        class="evcard-row ${options.isCurrent ? 'is-current' : ''} ${options.isPrevious ? 'is-previous' : ''}"
        style=${accentStyle}
        @click=${(e: Event) => {
          e.stopPropagation();
          this._selectedEvent = ev;
        }}
      >
        <div class="evcard-row-line">
          <ha-icon class="evcard-ev-icon" .icon=${ev.icon}></ha-icon>
          <span class="evcard-ev-summary">${displayTitle}</span>
          <span class="evcard-ev-sep">-</span>
          <span class="evcard-ev-time">${inlineRange}</span>
        </div>

        ${options.isCurrent && options.showProgressBar && progress
          ? html`
              <div
                class="min-progress-track evcard-progress"
                role="progressbar"
                aria-valuenow=${Math.round(progress.progressPct)}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="min-progress-fill"
                  style="width: ${progress.progressPct}%;"
                ></div>
              </div>
            `
          : nothing}
      </button>
    `;
  }

  protected renderCalendarBody(
    visibleEvents: CalendarEvent[],
    entities: NormalizedCalendarEntity[],
    _locale: string,
    lang: SupportedLanguage,
    strings: TranslationStrings,
  ) {
    const nowMs = this._currentNow.getTime();
    const showAllDay = this._config.show_all_day_events !== false;
    const allDayPos = this._config.all_day_position === 'bottom' ? 'bottom' : 'top';
    const showCompleted = this._config.show_completed_events !== false;
    const showProgressBar = this._config.show_progress_bar !== false;
    const showToggles = Boolean(this._config.show_entity_toggles);

    const maxPrev =
      typeof this._config.max_previous_events === 'number'
        ? Math.max(0, Math.floor(this._config.max_previous_events))
        : 2;
    const maxNext =
      typeof this._config.max_upcoming_events === 'number'
        ? Math.max(0, Math.floor(this._config.max_upcoming_events))
        : 2;

    const todayEvents = getEventsForDay(visibleEvents, this._anchorDate, {
      showAllDay,
      allDayPosition: allDayPos,
      showCompleted: true,
      now: this._currentNow,
    });

    const previousAll = todayEvents.filter(
      (ev) => !ev.allDay && ev.end.getTime() <= nowMs,
    );
    const previousEvents =
      showCompleted && maxPrev > 0 ? previousAll.slice(-maxPrev) : [];

    const currentTimed = todayEvents.filter(
      (ev) => !ev.allDay && ev.start.getTime() <= nowMs && ev.end.getTime() > nowMs,
    );
    const currentAllDay = todayEvents.filter((ev) => ev.allDay);
    const currentEvents =
      allDayPos === 'bottom'
        ? [...currentTimed, ...currentAllDay]
        : [...currentAllDay, ...currentTimed];

    const upcomingAll = todayEvents.filter(
      (ev) => !ev.allDay && ev.start.getTime() > nowMs,
    );
    const upcomingEvents = maxNext > 0 ? upcomingAll.slice(0, maxNext) : [];

    const hasAnyVisible =
      previousEvents.length > 0 ||
      currentEvents.length > 0 ||
      upcomingEvents.length > 0;

    return html`
      <div class="evcard-root">
        ${this._config.title || (showToggles && entities.length > 0)
          ? html`
              <div class="evcard-titlebar">
                ${this._config.title
                  ? html`
                      <div class="evcard-title-left">
                        <ha-icon icon="mdi:calendar-clock-outline"></ha-icon>
                        <span class="evcard-title-text">${this._config.title}</span>
                      </div>
                    `
                  : html`<span></span>`}

                ${showToggles && entities.length > 0
                  ? html`
                      <div class="evcard-mini-chips">
                        ${entities.map((ent) => {
                          const hidden = this._hiddenEntities.has(ent.entity);
                          return html`
                            <button
                              type="button"
                              class="evcard-chip ${hidden ? 'is-hidden' : ''}"
                              title=${ent.name}
                              style="--chip-color: ${ent.color};"
                              @click=${() =>
                                this._handleToggleEntity(
                                  new CustomEvent('cal-toggle-entity', {
                                    detail: { entity: ent.entity },
                                  }),
                                )}
                            >
                              <span class="evcard-chip-dot"></span>
                              <span class="evcard-chip-name">${ent.name}</span>
                            </button>
                          `;
                        })}
                      </div>
                    `
                  : nothing}
              </div>
            `
          : nothing}

        ${!hasAnyVisible
          ? html`<div class="evcard-empty">${strings.noEvents}</div>`
          : html`
              <div class="evcard-sections">
                ${previousEvents.length > 0
                  ? html`
                      <div class="evcard-section">
                        ${this._renderSectionHeader(strings.previousEventsSection)}
                        <div class="evcard-list">
                          ${previousEvents.map((ev) =>
                            this._renderCompactEventRow(ev, lang, strings, {
                              isCurrent: false,
                              isPrevious: true,
                              showProgressBar,
                            }),
                          )}
                        </div>
                      </div>
                    `
                  : nothing}

                <div class="evcard-section">
                  ${this._renderSectionHeader(strings.currentEventsSection)}
                  ${currentEvents.length === 0
                    ? html`
                        <div class="evcard-empty-inline">
                          ${strings.noCurrentEvents}
                        </div>
                      `
                    : html`
                        <div class="evcard-list">
                          ${currentEvents.map((ev) =>
                            this._renderCompactEventRow(ev, lang, strings, {
                              isCurrent: true,
                              showProgressBar,
                            }),
                          )}
                        </div>
                      `}
                </div>

                ${upcomingEvents.length > 0
                  ? html`
                      <div class="evcard-section">
                        ${this._renderSectionHeader(strings.upcomingEventsSection)}
                        <div class="evcard-list">
                          ${upcomingEvents.map((ev) =>
                            this._renderCompactEventRow(ev, lang, strings, {
                              isCurrent: false,
                              showProgressBar,
                            }),
                          )}
                        </div>
                      </div>
                    `
                  : nothing}
              </div>
            `}
      </div>
    `;
  }

  static styles = [
    sharedCardStyles,
    css`
      .evcard-root {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .evcard-titlebar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 8px;
        padding-bottom: 8px;
        border-bottom: 1px solid color-mix(in srgb, var(--cal-text-primary) 14%, transparent);
      }

      .evcard-title-left {
        display: flex;
        align-items: center;
        gap: 7px;
        min-width: 0;
        --mdc-icon-size: 18px;
        color: var(--cal-text-primary);
      }

      .evcard-title-text {
        font-size: 0.98rem;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .evcard-mini-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
      }

      .evcard-chip {
        appearance: none;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 7px;
        border-radius: 999px;
        border: 1px solid color-mix(in srgb, var(--chip-color) 65%, transparent);
        background: transparent;
        color: var(--cal-text-primary);
        font-family: inherit;
        font-size: 0.72rem;
        cursor: pointer;
        max-width: 130px;
      }

      .evcard-chip.is-hidden {
        opacity: 0.42;
        text-decoration: line-through;
      }

      .evcard-chip-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--chip-color);
        flex-shrink: 0;
      }

      .evcard-chip-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .evcard-sections {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .evcard-section {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      .evcard-divider {
        display: flex;
        align-items: center;
        gap: 8px;
        user-select: none;
      }

      .evcard-line {
        flex: 1;
        height: 1px;
        background: color-mix(in srgb, var(--cal-text-primary) 22%, transparent);
      }

      .evcard-section-label {
        font-size: 0.78rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        color: var(--cal-text-secondary);
        white-space: nowrap;
      }

      .evcard-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .evcard-row {
        appearance: none;
        border: none;
        background: transparent;
        padding: 2px 0;
        margin: 0;
        width: 100%;
        text-align: left;
        font-family: inherit;
        color: var(--cal-text-primary);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 4px;
        transition: opacity 0.15s ease;
      }

      .evcard-row:hover {
        opacity: 0.82;
      }

      .evcard-row.is-previous {
        opacity: 0.72;
      }

      .evcard-row.is-previous:hover {
        opacity: 0.95;
      }

      .evcard-row-line {
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
        font-size: 0.9rem;
        line-height: 1.3;
      }

      .evcard-row.is-current .evcard-row-line {
        font-weight: 600;
        font-size: 0.94rem;
      }

      .evcard-ev-icon {
        --mdc-icon-size: 16px;
        flex-shrink: 0;
        color: var(--min-ev-accent, var(--cal-text-primary));
      }

      .evcard-ev-summary {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
      }

      .evcard-ev-sep {
        color: var(--cal-text-secondary);
        flex-shrink: 0;
      }

      .evcard-ev-time {
        color: var(--cal-text-secondary);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        flex-shrink: 0;
      }

      .evcard-row.is-current .evcard-ev-time {
        color: var(--cal-text-primary);
        font-weight: 500;
      }

      .evcard-progress {
        margin-top: 1px;
      }

      .evcard-empty,
      .evcard-empty-inline {
        text-align: center;
        font-size: 0.86rem;
        color: var(--cal-text-secondary);
        padding: 4px 0;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    [EVENT_CARD_TYPE]: HaCalendarEventCard;
  }
}
