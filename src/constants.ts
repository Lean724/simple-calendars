import type { HomeAssistant, SupportedLanguage } from './types';

export const CARD_VERSION = '1.3.0';

export const MONTH_CARD_TYPE = 'simple-calendar-month-card';
export const WEEK_CARD_TYPE = 'simple-calendar-week-card';
export const DAY_CARD_TYPE = 'simple-calendar-day-card';
export const EDITOR_TAG = 'simple-calendar-card-editor';

export const LEGACY_MONTH_CARD_TYPE = 'ha-calendar-month-card';
export const LEGACY_WEEK_CARD_TYPE = 'ha-calendar-week-card';
export const LEGACY_DAY_CARD_TYPE = 'ha-calendar-day-card';

export const DEFAULT_CALENDAR_COLORS: readonly string[] = [
  '#1a73e8',
  '#e67c73',
  '#33b679',
  '#f6bf26',
  '#8e24aa',
  '#039be5',
  '#f4511e',
  '#0b8043',
  '#3f51b5',
  '#d81b60',
];

export const DEFAULT_ICON = 'mdi:calendar';

export interface TranslationStrings {
  today: string;
  prev: string;
  next: string;
  refresh: string;
  allDay: string;
  noEvents: string;
  moreEvents: string;
  noCalendars: string;
  noCalendarsHint: string;
  loading: string;
  errorLoading: string;
  calendar: string;
  when: string;
  location: string;
  description: string;
  openEntity: string;
  close: string;
  weekAbbr: string;
  eventsCount: string;
  allDayEvents: string;
  timedEvents: string;
  weekLabel: string;
  hoursRemaining: string;
  hourRemaining: string;
  minutesRemaining: string;
  completed: string;
  startsIn: string;
  editorGeneralSection: string;
  editorAppearanceSection: string;
  editorTransparent: string;
  editorBackgroundColor: string;
  editorBackgroundOpacity: string;
  editorBackdropBlur: string;
  editorHideBorder: string;
  editorHideShadow: string;
  editorBorderRadius: string;
  editorShowNavigation: string;
  editorUseEntityColor: string;
  editorShowEmptyDays: string;
  editorViewSection: string;
  editorLayout: string;
  editorLayoutCompact: string;
  editorLayoutGrid: string;
  editorShowWeekNumber: string;
  editorShowProgressBar: string;
  editorEntitiesTitle: string;
  editorTitle: string;
  editorTitlePlaceholder: string;
  editorFirstDay: string;
  editorMonday: string;
  editorSunday: string;
  editorLanguage: string;
  editorLangAuto: string;
  editorShowHeader: string;
  editorShowToggles: string;
  editorMaxEvents: string;
  editorShowWeekNumbers: string;
  editorCompact: string;
  editorStartHour: string;
  editorEndHour: string;
  editorDaysToShow: string;
  editorShowSummary: string;
  editorAddEntity: string;
  editorEntity: string;
  editorCustomName: string;
  editorCustomIcon: string;
  editorCustomColor: string;
  editorRemove: string;
  editorNoEntities: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationStrings> = {
  es: {
    today: 'Hoy',
    prev: 'Anterior',
    next: 'Siguiente',
    refresh: 'Actualizar',
    allDay: 'Todo el día',
    noEvents: 'Sin eventos programados',
    moreEvents: 'más',
    noCalendars: 'No hay calendarios configurados',
    noCalendarsHint: 'Añade una o más entidades calendar.* en la configuración de la tarjeta.',
    loading: 'Cargando eventos...',
    errorLoading: 'Error al cargar algunos calendarios',
    calendar: 'Calendario',
    when: 'Cuándo',
    location: 'Ubicación',
    description: 'Descripción',
    openEntity: 'Abrir entidad',
    close: 'Cerrar',
    weekAbbr: 'Sem',
    eventsCount: 'eventos',
    allDayEvents: 'Todo el día',
    timedEvents: 'Con horario',
    weekLabel: 'Semana',
    hoursRemaining: 'horas',
    hourRemaining: 'hora',
    minutesRemaining: 'minutos',
    completed: 'Finalizado',
    startsIn: 'Empieza en',
    editorGeneralSection: 'Configuración general',
    editorAppearanceSection: 'Apariencia y Transparencia',
    editorTransparent: 'Fondo 100% transparente',
    editorBackgroundColor: 'Color de fondo (opcional)',
    editorBackgroundOpacity: 'Opacidad del fondo (%)',
    editorBackdropBlur: 'Desenfoque de fondo (px)',
    editorHideBorder: 'Ocultar borde',
    editorHideShadow: 'Ocultar sombra',
    editorBorderRadius: 'Radio de borde (px)',
    editorShowNavigation: 'Mostrar flechas de navegación',
    editorUseEntityColor: 'Colorear ícono y barra por calendario',
    editorShowEmptyDays: 'Mostrar días sin eventos',
    editorViewSection: 'Opciones de vista',
    editorLayout: 'Diseño de la tarjeta',
    editorLayoutCompact: 'Widget estilizado (compacto)',
    editorLayoutGrid: 'Grilla horaria detallada',
    editorShowWeekNumber: 'Mostrar número de semana',
    editorShowProgressBar: 'Mostrar barra de progreso',
    editorEntitiesTitle: 'Calendarios (Multi-entidad)',
    editorTitle: 'Título (opcional)',
    editorTitlePlaceholder: 'Ej. Calendario Familiar',
    editorFirstDay: 'Primer día de la semana',
    editorMonday: 'Lunes',
    editorSunday: 'Domingo',
    editorLanguage: 'Idioma',
    editorLangAuto: 'Automático (Home Assistant)',
    editorShowHeader: 'Mostrar cabecera de navegación',
    editorShowToggles: 'Mostrar filtros por calendario',
    editorMaxEvents: 'Máx. eventos visibles por día',
    editorShowWeekNumbers: 'Mostrar número de semana',
    editorCompact: 'Modo compacto',
    editorStartHour: 'Hora de inicio',
    editorEndHour: 'Hora de fin',
    editorDaysToShow: 'Días a mostrar',
    editorShowSummary: 'Mostrar resumen de calendarios',
    editorAddEntity: 'Añadir calendario',
    editorEntity: 'Entidad de calendario',
    editorCustomName: 'Nombre personalizado',
    editorCustomIcon: 'Ícono (mdi:...)',
    editorCustomColor: 'Color',
    editorRemove: 'Quitar calendario',
    editorNoEntities: 'No has agregado calendarios todavía.',
  },
  en: {
    today: 'Today',
    prev: 'Previous',
    next: 'Next',
    refresh: 'Refresh',
    allDay: 'All day',
    noEvents: 'No scheduled events',
    moreEvents: 'more',
    noCalendars: 'No calendars configured',
    noCalendarsHint: 'Add one or more calendar.* entities in the card configuration.',
    loading: 'Loading events...',
    errorLoading: 'Failed to load some calendars',
    calendar: 'Calendar',
    when: 'When',
    location: 'Location',
    description: 'Description',
    openEntity: 'Open entity',
    close: 'Close',
    weekAbbr: 'Wk',
    eventsCount: 'events',
    allDayEvents: 'All day',
    timedEvents: 'Scheduled',
    weekLabel: 'Week',
    hoursRemaining: 'hours',
    hourRemaining: 'hour',
    minutesRemaining: 'minutes',
    completed: 'Completed',
    startsIn: 'Starts in',
    editorGeneralSection: 'General settings',
    editorAppearanceSection: 'Appearance & Transparency',
    editorTransparent: '100% Transparent background',
    editorBackgroundColor: 'Background color (optional)',
    editorBackgroundOpacity: 'Background opacity (%)',
    editorBackdropBlur: 'Backdrop blur (px)',
    editorHideBorder: 'Hide border',
    editorHideShadow: 'Hide shadow',
    editorBorderRadius: 'Border radius (px)',
    editorShowNavigation: 'Show navigation arrows',
    editorUseEntityColor: 'Use calendar color on icon & bar',
    editorShowEmptyDays: 'Show days without events',
    editorViewSection: 'View options',
    editorLayout: 'Card layout',
    editorLayoutCompact: 'Stylized widget (compact)',
    editorLayoutGrid: 'Detailed hourly grid',
    editorShowWeekNumber: 'Show week number',
    editorShowProgressBar: 'Show progress bar',
    editorEntitiesTitle: 'Calendars (Multi-entity)',
    editorTitle: 'Title (optional)',
    editorTitlePlaceholder: 'e.g. Family Calendar',
    editorFirstDay: 'First day of the week',
    editorMonday: 'Monday',
    editorSunday: 'Sunday',
    editorLanguage: 'Language',
    editorLangAuto: 'Automatic (Home Assistant)',
    editorShowHeader: 'Show navigation header',
    editorShowToggles: 'Show calendar filter chips',
    editorMaxEvents: 'Max visible events per day',
    editorShowWeekNumbers: 'Show week numbers',
    editorCompact: 'Compact mode',
    editorStartHour: 'Start hour',
    editorEndHour: 'End hour',
    editorDaysToShow: 'Days to show',
    editorShowSummary: 'Show calendar summary',
    editorAddEntity: 'Add calendar',
    editorEntity: 'Calendar entity',
    editorCustomName: 'Custom name',
    editorCustomIcon: 'Icon (mdi:...)',
    editorCustomColor: 'Color',
    editorRemove: 'Remove calendar',
    editorNoEntities: 'No calendars added yet.',
  },
};

export function resolveLanguage(
  configured?: SupportedLanguage,
  hass?: HomeAssistant,
): SupportedLanguage {
  if (configured === 'es' || configured === 'en') {
    return configured;
  }
  const hassLang = (hass?.locale?.language || hass?.language || 'es').toLowerCase();
  return hassLang.startsWith('en') ? 'en' : 'es';
}

export function getLocaleTag(lang: SupportedLanguage, hass?: HomeAssistant): string {
  const hassLang = hass?.locale?.language || hass?.language;
  if (hassLang && hassLang.toLowerCase().startsWith(lang)) {
    return hassLang;
  }
  return lang === 'es' ? 'es-ES' : 'en-US';
}
