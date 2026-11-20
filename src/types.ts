export interface HassEntityAttributes {
  friendly_name?: string;
  icon?: string;
  [key: string]: unknown;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: HassEntityAttributes;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  locale?: {
    language?: string;
    number_format?: string;
    time_format?: string;
  };
  language?: string;
  callApi<T = unknown>(
    method: string,
    path: string,
    parameters?: Record<string, unknown>,
  ): Promise<T>;
}

export interface CalendarEntityConfig {
  entity: string;
  name?: string;
  color?: string;
  icon?: string;
  hidden?: boolean;
}

export interface NormalizedCalendarEntity {
  entity: string;
  name: string;
  color: string;
  icon: string;
  hidden: boolean;
}

export interface RawHassCalendarDate {
  date?: string;
  dateTime?: string;
}

export interface RawHassCalendarEvent {
  start: RawHassCalendarDate | string;
  end: RawHassCalendarDate | string;
  summary?: string;
  description?: string | null;
  location?: string | null;
  uid?: string | null;
  recurrence_id?: string | null;
  rrule?: string | null;
}

export interface CalendarEvent {
  id: string;
  uid?: string;
  summary: string;
  description: string;
  location: string;
  start: Date;
  end: Date;
  allDay: boolean;
  calendarEntity: string;
  calendarName: string;
  color: string;
  icon: string;
}

export type SupportedLanguage =
  | 'en'
  | 'es'
  | 'zh-Hans'
  | 'de'
  | 'it'
  | 'fr'
  | 'pt'
  | 'ru'
  | 'pl'
  | 'nl';

export type AllDayPosition = 'top' | 'bottom';

export interface BaseCalendarCardConfig {
  type: string;
  title?: string;
  entities?: Array<string | CalendarEntityConfig>;
  entity?: string;
  first_day_of_week?: number;
  language?: SupportedLanguage;
  show_header?: boolean;
  show_entity_toggles?: boolean;
  show_navigation?: boolean;
  use_entity_color?: boolean;
  show_current_day?: boolean;
  show_all_day_events?: boolean;
  all_day_position?: AllDayPosition;
  show_completed_events?: boolean;
  dim_completed_events?: boolean;
  transparent?: boolean;
  background_color?: string;
  background_opacity?: number;
  backdrop_blur?: number;
  hide_border?: boolean;
  hide_shadow?: boolean;
  border_radius?: number;
}

export type MonthCalendarSize = 'compact' | 'normal' | 'large';
export type MonthEventDisplay = 'pills' | 'dots';

export interface MonthCardConfig extends BaseCalendarCardConfig {
  calendar_size?: MonthCalendarSize;
  event_display?: MonthEventDisplay;
  max_events_per_day?: number;
  show_week_numbers?: boolean;
  show_day_summary?: boolean;
  show_progress_bar?: boolean;
  compact?: boolean;
}

export interface DayCardConfig extends BaseCalendarCardConfig {
  show_week_number?: boolean;
  show_progress_bar?: boolean;
}

export interface FocusEventCardConfig extends BaseCalendarCardConfig {
  max_previous_events?: number;
  max_upcoming_events?: number;
  show_progress_bar?: boolean;
}

export type EventCardConfig = FocusEventCardConfig;

export type AnyCalendarCardConfig =
  | MonthCardConfig
  | DayCardConfig
  | FocusEventCardConfig;

export interface MonthGridDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  weekNumber: number;
}

export interface EventLayoutItem {
  event: CalendarEvent;
  top: number;
  height: number;
  left: number;
  width: number;
}
