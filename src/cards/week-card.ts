import { css, html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  WEEK_CARD_TYPE,
  formatWeekBadge,
  type TranslationStrings,
} from '../constants';
import { sharedCardStyles } from '../styles/shared-styles';
import type {
  CalendarEvent,
  HomeAssistant,
  NormalizedCalendarEntity,
  SupportedLanguage,
  WeekCardConfig,
} from '../types';
import {
  addDays,
  endOfDay,
  formatWeekRangeTitle,
  getEventsForDay,
  getISOWeekNumber,
  getWeekDays,
  startOfDay,
} from '../utils/date-utils';
import { BaseCalendarCard, buildStubEntities } from './base-card';

@customElement(WEEK_CARD_TYPE)
export class HaCalendarWeekCard extends BaseCalendarCard<WeekCardConfig> {
  public static getStubConfig(hass?: HomeAssistant): WeekCardConfig {
    return {
      type: `custom:${WEEK_CARD_TYPE}`,
      entities: buildStubEntities(hass),
      first_day_of_week: 1,
      days_to_show: 7,
      show_week_number: true,
      show_progress_bar: true,
      show_empty_days: false,
      show_navigation: false,
      transparent: false,
      background_opacity: 100,
    };
  }

  public getCardSize(): number {
    return 4;
  }

  public getGridOptions() {
    return {
      columns: 12,
      min_columns: 6,
    };
  }

  protected override useSharedHeader(): boolean {
    return false;
  }

  protected override isMinimalSurface(): boolean {
    return true;
  }

  protected override autoFollowToday(): boolean {
    return !this._config?.show_navigation;
  }

  private _getDaysCount(): number {
    const val = this._config?.days_to_show;
    if (typeof val === 'number' && !Number.isNaN(val)) {
      return Math.max(1, Math.min(14, Math.floor(val)));
    }
    return 7;
  }

  private _getVisibleDays(): Date[] {
    return getWeekDays(
      this._anchorDate,
      this.getFirstDayOfWeek(),
      this._getDaysCount(),
    );
  }

  protected getFetchRange(): { start: Date; end: Date } {
    const days = this._getVisibleDays();
    return {
      start: days[0],
      end: endOfDay(days[days.length - 1]),
    };
  }

  protected getPeriodLabel(locale: string): string {
    return formatWeekRangeTitle(this._getVisibleDays(), locale);
  }

  protected navigatePrev(): void {
    this._anchorDate = addDays(this._anchorDate, -this._getDaysCount());
  }

  protected navigateNext(): void {
    this._anchorDate = addDays(this._anchorDate, this._getDaysCount());
  }

  protected navigateToday(): void {
    this._anchorDate = startOfDay(new Date());
  }

  protected renderCalendarBody(
    visibleEvents: CalendarEvent[],
    _entities: NormalizedCalendarEntity[],
    locale: string,
    lang: SupportedLanguage,
    strings: TranslationStrings,
  ) {
    const days = this._getVisibleDays();
    const showWeekNum = this._config.show_week_number !== false;
    const showProgressBar = this._config.show_progress_bar !== false;
    const showNav = Boolean(this._config.show_navigation);
    const showEmptyDays = Boolean(this._config.show_empty_days);
    const weekNum = getISOWeekNumber(days[0] || this._anchorDate);
    const filterOpts = this.getDayFilterOptions();

    const dayEntries = days.map((day) => ({
      day,
      events: getEventsForDay(visibleEvents, day, filterOpts),
    }));

    const filteredEntries = showEmptyDays
      ? dayEntries
      : dayEntries.filter((entry) => entry.events.length > 0);

    const displayEntries =
      filteredEntries.length > 0 ? filteredEntries : [dayEntries[0]];

    return html`
      ${showWeekNum || showNav
        ? html`
            <div class="minimal-top-bar">
              <div class="week-header-left">
                ${showWeekNum
                  ? html`<span class="week-pill">${formatWeekBadge(weekNum, lang, strings)}</span>`
                  : nothing}
                <span class="week-range-sub">${formatWeekRangeTitle(days, locale)}</span>
              </div>

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
        ${displayEntries.map(
          (entry, idx) => html`
            <div class="week-day-entry ${idx > 0 ? 'has-divider' : ''}">
              ${this.renderMinimalDayBlock(
                entry.day,
                entry.events,
                locale,
                strings,
                showProgressBar,
              )}
            </div>
          `,
        )}
      </div>
    `;
  }

  static styles = [
    sharedCardStyles,
    css`
      .week-header-left {
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 0;
      }

      .week-range-sub {
        font-size: 0.85rem;
        color: var(--cal-text-secondary);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .week-day-entry.has-divider {
        padding-top: 12px;
        border-top: 1px solid color-mix(in srgb, var(--cal-text-primary) 12%, transparent);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    [WEEK_CARD_TYPE]: HaCalendarWeekCard;
  }
}
