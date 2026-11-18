import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  WEEK_CARD_TYPE,
  type TranslationStrings,
} from '../constants';
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
  getWeekDays,
  startOfDay,
} from '../utils/date-utils';
import { BaseCalendarCard, buildStubEntities } from './base-card';
import '../components/time-grid';

@customElement(WEEK_CARD_TYPE)
export class HaCalendarWeekCard extends BaseCalendarCard<WeekCardConfig> {
  public static getStubConfig(hass?: HomeAssistant): WeekCardConfig {
    return {
      type: `custom:${WEEK_CARD_TYPE}`,
      entities: buildStubEntities(hass),
      first_day_of_week: 1,
      start_hour: 0,
      end_hour: 24,
      days_to_show: 7,
      show_header: true,
      show_entity_toggles: true,
      compact_all_day: false,
    };
  }

  public getCardSize(): number {
    return 8;
  }

  public getGridOptions() {
    return {
      columns: 12,
      min_columns: 6,
      rows: 8,
      min_rows: 6,
    };
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
    const startHour = this._config.start_hour ?? 0;
    const endHour = this._config.end_hour ?? 24;
    const compactAllDay = Boolean(this._config.compact_all_day);

    return html`
      <ha-calendar-time-grid
        .days=${days}
        .events=${visibleEvents}
        .startHour=${startHour}
        .endHour=${endHour}
        .locale=${locale}
        .lang=${lang}
        .strings=${strings}
        .compactAllDay=${compactAllDay}
        .detailedMode=${false}
      ></ha-calendar-time-grid>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [WEEK_CARD_TYPE]: HaCalendarWeekCard;
  }
}
