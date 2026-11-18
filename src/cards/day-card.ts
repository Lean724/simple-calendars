import { css, html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
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
  formatDayTitle,
  getEventsForDay,
  getISOWeekNumber,
  startOfDay,
} from '../utils/date-utils';
import { BaseCalendarCard, buildStubEntities } from './base-card';
import '../components/time-grid';

@customElement(DAY_CARD_TYPE)
export class HaCalendarDayCard extends BaseCalendarCard<DayCardConfig> {
  public static getStubConfig(hass?: HomeAssistant): DayCardConfig {
    return {
      type: `custom:${DAY_CARD_TYPE}`,
      entities: buildStubEntities(hass),
      layout: 'compact',
      show_week_number: true,
      show_progress_bar: true,
      show_navigation: false,
      transparent: false,
      background_opacity: 100,
    };
  }

  public getCardSize(): number {
    return this._isCompact ? 2 : 7;
  }

  public getGridOptions() {
    if (this._isCompact) {
      return {
        columns: 6,
        min_columns: 3,
        min_rows: 1,
      };
    }
    return {
      columns: 6,
      min_columns: 4,
      rows: 7,
      min_rows: 5,
    };
  }

  private get _isCompact(): boolean {
    return this._config?.layout !== 'grid';
  }

  protected override useSharedHeader(): boolean {
    return !this._isCompact && this._config?.show_header !== false;
  }

  protected override isMinimalSurface(): boolean {
    return this._isCompact;
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

  private _renderCompactWidget(
    dayEvents: CalendarEvent[],
    locale: string,
    strings: TranslationStrings,
  ) {
    const showWeekNum = this._config.show_week_number !== false;
    const showProgressBar = this._config.show_progress_bar !== false;
    const showNav = Boolean(this._config.show_navigation);
    const weekNum = getISOWeekNumber(this._anchorDate);

    return html`
      ${showWeekNum || showNav
        ? html`
            <div class="minimal-top-bar">
              ${showWeekNum
                ? html`<span class="week-pill">${strings.weekLabel} ${weekNum}</span>`
                : html`<span></span>`}

              ${showNav
                ? html`
                    <div class="min-nav-group">
                      <button
                        type="button"
                        class="min-nav-btn"
                        title=${strings.prev}
                        aria-label=${strings.prev}
                        @click=${() => this.navigatePrev()}
                      >
                        <ha-icon icon="mdi:chevron-left"></ha-icon>
                      </button>
                      <button
                        type="button"
                        class="min-today-btn"
                        @click=${() => this.navigateToday()}
                      >
                        ${strings.today}
                      </button>
                      <button
                        type="button"
                        class="min-nav-btn"
                        title=${strings.next}
                        aria-label=${strings.next}
                        @click=${() => this.navigateNext()}
                      >
                        <ha-icon icon="mdi:chevron-right"></ha-icon>
                      </button>
                    </div>
                  `
                : nothing}
            </div>
          `
        : nothing}

      <div class="min-days-stack">
        ${this.renderMinimalDayBlock(
          this._anchorDate,
          dayEvents,
          locale,
          strings,
          showProgressBar,
        )}
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
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    [DAY_CARD_TYPE]: HaCalendarDayCard;
  }
}
