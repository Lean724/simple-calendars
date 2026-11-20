import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  DAY_CARD_TYPE,
  formatWeekBadge,
  type TranslationStrings,
} from '../constants';
import { sharedCardStyles } from '../styles/shared-styles';
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

@customElement(DAY_CARD_TYPE)
export class HaCalendarDayCard extends BaseCalendarCard<DayCardConfig> {
  public static getStubConfig(hass?: HomeAssistant): DayCardConfig {
    return {
      type: `custom:${DAY_CARD_TYPE}`,
      entities: buildStubEntities(hass),
      show_week_number: true,
      show_progress_bar: true,
      show_navigation: false,
      transparent: false,
      background_opacity: 100,
    };
  }

  public getCardSize(): number {
    return 2;
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

  protected renderCalendarBody(
    visibleEvents: CalendarEvent[],
    _entities: NormalizedCalendarEntity[],
    locale: string,
    lang: SupportedLanguage,
    strings: TranslationStrings,
  ) {
    const dayEvents = getEventsForDay(
      visibleEvents,
      this._anchorDate,
      this.getDayFilterOptions(),
    );
    const showWeekNum = this._config.show_week_number !== false;
    const showProgressBar = this._config.show_progress_bar !== false;
    const showNav = Boolean(this._config.show_navigation);
    const weekNum = getISOWeekNumber(this._anchorDate);

    return html`
      ${showWeekNum || showNav
        ? html`
            <div class="minimal-top-bar">
              ${showWeekNum
                ? html`<span class="week-pill">${formatWeekBadge(weekNum, lang, strings)}</span>`
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

  static styles = [sharedCardStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    [DAY_CARD_TYPE]: HaCalendarDayCard;
  }
}
