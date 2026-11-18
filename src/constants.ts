import type { HomeAssistant, SupportedLanguage } from './types';

export const CARD_VERSION = '1.4.0';

export const MONTH_CARD_TYPE = 'simple-calendar-month-card';
export const WEEK_CARD_TYPE = 'simple-calendar-week-card';
export const DAY_CARD_TYPE = 'simple-calendar-day-card';
export const EVENT_CARD_TYPE = 'simple-calendar-event-card';
export const EDITOR_TAG = 'simple-calendar-card-editor';

export const LEGACY_MONTH_CARD_TYPE = 'ha-calendar-month-card';
export const LEGACY_WEEK_CARD_TYPE = 'ha-calendar-week-card';
export const LEGACY_DAY_CARD_TYPE = 'ha-calendar-day-card';
export const LEGACY_EVENT_CARD_TYPE = 'ha-calendar-event-card';

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

export const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  es: 'Español',
  'zh-Hans': '简体中文',
  de: 'Deutsch',
  en: 'English',
  pt: 'Português',
  it: 'Italiano',
  fr: 'Français',
};

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
  previousEventsSection: string;
  currentEventsSection: string;
  upcomingEventsSection: string;
  noCurrentEvents: string;
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
  editorShowCurrentDay: string;
  editorShowAllDayEvents: string;
  editorAllDayPosition: string;
  editorPositionTop: string;
  editorPositionBottom: string;
  editorShowCompletedEvents: string;
  editorMaxPreviousEvents: string;
  editorMaxUpcomingEvents: string;
  editorShowEmptyDays: string;
  editorViewSection: string;
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
  editorDaysToShow: string;
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
    noEvents: 'Sin eventos hoy',
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
    previousEventsSection: 'Eventos previos',
    currentEventsSection: 'Eventos actuales',
    upcomingEventsSection: 'Eventos próximos',
    noCurrentEvents: 'Sin eventos en curso',
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
    editorShowCurrentDay: 'Mostrar día actual',
    editorShowAllDayEvents: 'Mostrar eventos de todo el día',
    editorAllDayPosition: 'Posición eventos todo el día',
    editorPositionTop: 'Arriba (superior)',
    editorPositionBottom: 'Abajo (inferior)',
    editorShowCompletedEvents: 'Ver eventos ya terminados',
    editorMaxPreviousEvents: 'Cantidad de eventos previos',
    editorMaxUpcomingEvents: 'Cantidad de eventos próximos',
    editorShowEmptyDays: 'Mostrar días sin eventos',
    editorViewSection: 'Opciones de vista',
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
    editorDaysToShow: 'Días a mostrar',
    editorAddEntity: 'Añadir calendario',
    editorEntity: 'Entidad de calendario',
    editorCustomName: 'Nombre personalizado',
    editorCustomIcon: 'Ícono (mdi:...)',
    editorCustomColor: 'Color',
    editorRemove: 'Quitar calendario',
    editorNoEntities: 'No has agregado calendarios todavía.',
  },
  'zh-Hans': {
    today: '今天',
    prev: '上一个',
    next: '下一个',
    refresh: '刷新',
    allDay: '全天',
    noEvents: '今天没有日程',
    moreEvents: '更多',
    noCalendars: '未配置日历',
    noCalendarsHint: '请在卡片配置中添加一个或多个 calendar.* 实体。',
    loading: '正在加载日程...',
    errorLoading: '部分日历加载失败',
    calendar: '日历',
    when: '时间',
    location: '地点',
    description: '描述',
    openEntity: '打开实体',
    close: '关闭',
    weekAbbr: '周',
    eventsCount: '个日程',
    allDayEvents: '全天',
    timedEvents: '时段',
    weekLabel: '第',
    hoursRemaining: '小时',
    hourRemaining: '小时',
    minutesRemaining: '分钟',
    completed: '已结束',
    startsIn: '距离开始',
    previousEventsSection: '之前的日程',
    currentEventsSection: '当前日程',
    upcomingEventsSection: '即将到来',
    noCurrentEvents: '当前无进行中日程',
    editorGeneralSection: '常规设置',
    editorAppearanceSection: '外观与透明度',
    editorTransparent: '100% 透明背景',
    editorBackgroundColor: '背景颜色（可选）',
    editorBackgroundOpacity: '背景不透明度 (%)',
    editorBackdropBlur: '背景模糊 (px)',
    editorHideBorder: '隐藏边框',
    editorHideShadow: '隐藏阴影',
    editorBorderRadius: '圆角半径 (px)',
    editorShowNavigation: '显示导航箭头',
    editorUseEntityColor: '按日历颜色显示图标和进度条',
    editorShowCurrentDay: '显示当天日期',
    editorShowAllDayEvents: '显示全天日程',
    editorAllDayPosition: '全天日程位置',
    editorPositionTop: '顶部',
    editorPositionBottom: '底部',
    editorShowCompletedEvents: '显示已结束的日程',
    editorMaxPreviousEvents: '显示的已结束日程数',
    editorMaxUpcomingEvents: '显示的即将到来日程数',
    editorShowEmptyDays: '显示无日程的日期',
    editorViewSection: '视图选项',
    editorShowWeekNumber: '显示周数',
    editorShowProgressBar: '显示进度条',
    editorEntitiesTitle: '日历（多实体）',
    editorTitle: '标题（可选）',
    editorTitlePlaceholder: '例如：家庭日历',
    editorFirstDay: '每周第一天',
    editorMonday: '星期一',
    editorSunday: '星期日',
    editorLanguage: '语言',
    editorLangAuto: '自动 (Home Assistant)',
    editorShowHeader: '显示导航栏',
    editorShowToggles: '显示日历筛选标签',
    editorMaxEvents: '每日最多显示日程数',
    editorShowWeekNumbers: '显示周数',
    editorCompact: '紧凑模式',
    editorDaysToShow: '显示天数',
    editorAddEntity: '添加日历',
    editorEntity: '日历实体',
    editorCustomName: '自定义名称',
    editorCustomIcon: '图标 (mdi:...)',
    editorCustomColor: '颜色',
    editorRemove: '移除日历',
    editorNoEntities: '尚未添加任何日历。',
  },
  de: {
    today: 'Heute',
    prev: 'Zurück',
    next: 'Weiter',
    refresh: 'Aktualisieren',
    allDay: 'Ganztägig',
    noEvents: 'Heute keine Termine',
    moreEvents: 'mehr',
    noCalendars: 'Keine Kalender konfiguriert',
    noCalendarsHint: 'Füge eine oder mehrere calendar.*-Entitäten in der Kartenkonfiguration hinzu.',
    loading: 'Termine werden geladen...',
    errorLoading: 'Fehler beim Laden einiger Kalender',
    calendar: 'Kalender',
    when: 'Wann',
    location: 'Ort',
    description: 'Beschreibung',
    openEntity: 'Entität öffnen',
    close: 'Schließen',
    weekAbbr: 'KW',
    eventsCount: 'Termine',
    allDayEvents: 'Ganztägig',
    timedEvents: 'Zeitlich',
    weekLabel: 'Woche',
    hoursRemaining: 'Stunden',
    hourRemaining: 'Stunde',
    minutesRemaining: 'Minuten',
    completed: 'Beendet',
    startsIn: 'Beginnt in',
    previousEventsSection: 'Vorherige Termine',
    currentEventsSection: 'Aktuelle Termine',
    upcomingEventsSection: 'Kommende Termine',
    noCurrentEvents: 'Keine laufenden Termine',
    editorGeneralSection: 'Allgemeine Einstellungen',
    editorAppearanceSection: 'Aussehen & Transparenz',
    editorTransparent: '100% transparenter Hintergrund',
    editorBackgroundColor: 'Hintergrundfarbe (optional)',
    editorBackgroundOpacity: 'Hintergrund-Deckkraft (%)',
    editorBackdropBlur: 'Hintergrundunschärfe (px)',
    editorHideBorder: 'Rahmen ausblenden',
    editorHideShadow: 'Schatten ausblenden',
    editorBorderRadius: 'Eckenradius (px)',
    editorShowNavigation: 'Navigationspfeile anzeigen',
    editorUseEntityColor: 'Kalenderfarbe für Symbol & Balken nutzen',
    editorShowCurrentDay: 'Aktuellen Tag anzeigen',
    editorShowAllDayEvents: 'Ganztägige Termine anzeigen',
    editorAllDayPosition: 'Position ganztägiger Termine',
    editorPositionTop: 'Oben',
    editorPositionBottom: 'Unten',
    editorShowCompletedEvents: 'Bereits beendete Termine anzeigen',
    editorMaxPreviousEvents: 'Anzahl vorheriger Termine',
    editorMaxUpcomingEvents: 'Anzahl kommender Termine',
    editorShowEmptyDays: 'Tage ohne Termine anzeigen',
    editorViewSection: 'Ansichtsoptionen',
    editorShowWeekNumber: 'Kalenderwoche anzeigen',
    editorShowProgressBar: 'Fortschrittsbalken anzeigen',
    editorEntitiesTitle: 'Kalender (Multi-Entität)',
    editorTitle: 'Titel (optional)',
    editorTitlePlaceholder: 'z. B. Familienkalender',
    editorFirstDay: 'Erster Tag der Woche',
    editorMonday: 'Montag',
    editorSunday: 'Sonntag',
    editorLanguage: 'Sprache',
    editorLangAuto: 'Automatisch (Home Assistant)',
    editorShowHeader: 'Navigationsleiste anzeigen',
    editorShowToggles: 'Kalenderfilter anzeigen',
    editorMaxEvents: 'Max. sichtbare Termine pro Tag',
    editorShowWeekNumbers: 'Kalenderwochen anzeigen',
    editorCompact: 'Kompaktmodus',
    editorDaysToShow: 'Anzahl der Tage',
    editorAddEntity: 'Kalender hinzufügen',
    editorEntity: 'Kalender-Entität',
    editorCustomName: 'Benutzerdefinierter Name',
    editorCustomIcon: 'Symbol (mdi:...)',
    editorCustomColor: 'Farbe',
    editorRemove: 'Kalender entfernen',
    editorNoEntities: 'Noch keine Kalender hinzugefügt.',
  },
  en: {
    today: 'Today',
    prev: 'Previous',
    next: 'Next',
    refresh: 'Refresh',
    allDay: 'All day',
    noEvents: 'No events today',
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
    previousEventsSection: 'Previous events',
    currentEventsSection: 'Current events',
    upcomingEventsSection: 'Upcoming events',
    noCurrentEvents: 'No ongoing events',
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
    editorShowCurrentDay: 'Show current day',
    editorShowAllDayEvents: 'Show all-day events',
    editorAllDayPosition: 'All-day events position',
    editorPositionTop: 'Top',
    editorPositionBottom: 'Bottom',
    editorShowCompletedEvents: 'Show completed events',
    editorMaxPreviousEvents: 'Previous events to show',
    editorMaxUpcomingEvents: 'Upcoming events to show',
    editorShowEmptyDays: 'Show days without events',
    editorViewSection: 'View options',
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
    editorDaysToShow: 'Days to show',
    editorAddEntity: 'Add calendar',
    editorEntity: 'Calendar entity',
    editorCustomName: 'Custom name',
    editorCustomIcon: 'Icon (mdi:...)',
    editorCustomColor: 'Color',
    editorRemove: 'Remove calendar',
    editorNoEntities: 'No calendars added yet.',
  },
  pt: {
    today: 'Hoje',
    prev: 'Anterior',
    next: 'Seguinte',
    refresh: 'Atualizar',
    allDay: 'Todo o dia',
    noEvents: 'Sem eventos hoje',
    moreEvents: 'mais',
    noCalendars: 'Nenhum calendário configurado',
    noCalendarsHint: 'Adicione uma ou mais entidades calendar.* na configuração do cartão.',
    loading: 'Carregando eventos...',
    errorLoading: 'Erro ao carregar alguns calendários',
    calendar: 'Calendário',
    when: 'Quando',
    location: 'Local',
    description: 'Descrição',
    openEntity: 'Abrir entidade',
    close: 'Fechar',
    weekAbbr: 'Sem',
    eventsCount: 'eventos',
    allDayEvents: 'Todo o dia',
    timedEvents: 'Com horário',
    weekLabel: 'Semana',
    hoursRemaining: 'horas',
    hourRemaining: 'hora',
    minutesRemaining: 'minutos',
    completed: 'Concluído',
    startsIn: 'Começa em',
    previousEventsSection: 'Eventos anteriores',
    currentEventsSection: 'Eventos atuais',
    upcomingEventsSection: 'Próximos eventos',
    noCurrentEvents: 'Sem eventos em andamento',
    editorGeneralSection: 'Configuração geral',
    editorAppearanceSection: 'Aparência e Transparência',
    editorTransparent: 'Fundo 100% transparente',
    editorBackgroundColor: 'Cor de fundo (opcional)',
    editorBackgroundOpacity: 'Opacidade do fundo (%)',
    editorBackdropBlur: 'Desfoque do fundo (px)',
    editorHideBorder: 'Ocultar borda',
    editorHideShadow: 'Ocultar sombra',
    editorBorderRadius: 'Raio da borda (px)',
    editorShowNavigation: 'Mostrar setas de navegação',
    editorUseEntityColor: 'Colorir ícone e barra por calendário',
    editorShowCurrentDay: 'Mostrar dia atual',
    editorShowAllDayEvents: 'Mostrar eventos de dia inteiro',
    editorAllDayPosition: 'Posição de eventos de dia inteiro',
    editorPositionTop: 'Topo',
    editorPositionBottom: 'Inferior',
    editorShowCompletedEvents: 'Mostrar eventos já concluídos',
    editorMaxPreviousEvents: 'Quantidade de eventos anteriores',
    editorMaxUpcomingEvents: 'Quantidade de próximos eventos',
    editorShowEmptyDays: 'Mostrar dias sem eventos',
    editorViewSection: 'Opções de visualização',
    editorShowWeekNumber: 'Mostrar número da semana',
    editorShowProgressBar: 'Mostrar barra de progresso',
    editorEntitiesTitle: 'Calendários (Multi-entidade)',
    editorTitle: 'Título (opcional)',
    editorTitlePlaceholder: 'Ex. Calendário Familiar',
    editorFirstDay: 'Primeiro dia da semana',
    editorMonday: 'Segunda-feira',
    editorSunday: 'Domingo',
    editorLanguage: 'Idioma',
    editorLangAuto: 'Automático (Home Assistant)',
    editorShowHeader: 'Mostrar cabeçalho de navegação',
    editorShowToggles: 'Mostrar filtros de calendário',
    editorMaxEvents: 'Máx. eventos visíveis por dia',
    editorShowWeekNumbers: 'Mostrar números das semanas',
    editorCompact: 'Modo compacto',
    editorDaysToShow: 'Dias para mostrar',
    editorAddEntity: 'Adicionar calendário',
    editorEntity: 'Entidade de calendário',
    editorCustomName: 'Nome personalizado',
    editorCustomIcon: 'Ícone (mdi:...)',
    editorCustomColor: 'Cor',
    editorRemove: 'Remover calendário',
    editorNoEntities: 'Nenhum calendário adicionado ainda.',
  },
  it: {
    today: 'Oggi',
    prev: 'Precedente',
    next: 'Successivo',
    refresh: 'Aggiorna',
    allDay: 'Tutto il giorno',
    noEvents: 'Nessun evento oggi',
    moreEvents: 'altri',
    noCalendars: 'Nessun calendario configurato',
    noCalendarsHint: 'Aggiungi una o più entità calendar.* nella configurazione della scheda.',
    loading: 'Caricamento eventi...',
    errorLoading: 'Errore nel caricamento di alcuni calendari',
    calendar: 'Calendario',
    when: 'Quando',
    location: 'Luogo',
    description: 'Descrizione',
    openEntity: 'Apri entità',
    close: 'Chiudi',
    weekAbbr: 'Sett',
    eventsCount: 'eventi',
    allDayEvents: 'Tutto il giorno',
    timedEvents: 'Con orario',
    weekLabel: 'Settimana',
    hoursRemaining: 'ore',
    hourRemaining: 'ora',
    minutesRemaining: 'minuti',
    completed: 'Terminato',
    startsIn: 'Inizia tra',
    previousEventsSection: 'Eventi precedenti',
    currentEventsSection: 'Eventi attuali',
    upcomingEventsSection: 'Prossimi eventi',
    noCurrentEvents: 'Nessun evento in corso',
    editorGeneralSection: 'Impostazioni generali',
    editorAppearanceSection: 'Aspetto e Trasparenza',
    editorTransparent: 'Sfondo 100% trasparente',
    editorBackgroundColor: 'Colore di sfondo (opzionale)',
    editorBackgroundOpacity: 'Opacità dello sfondo (%)',
    editorBackdropBlur: 'Sfocatura sfondo (px)',
    editorHideBorder: 'Nascondi bordo',
    editorHideShadow: 'Nascondi ombra',
    editorBorderRadius: 'Raggio del bordo (px)',
    editorShowNavigation: 'Mostra frecce di navigazione',
    editorUseEntityColor: 'Usa colore calendario su icona e barra',
    editorShowCurrentDay: 'Mostra giorno attuale',
    editorShowAllDayEvents: 'Mostra eventi tutto il giorno',
    editorAllDayPosition: 'Posizione eventi tutto il giorno',
    editorPositionTop: 'In alto',
    editorPositionBottom: 'In basso',
    editorShowCompletedEvents: 'Mostra eventi già terminati',
    editorMaxPreviousEvents: 'Numero di eventi precedenti',
    editorMaxUpcomingEvents: 'Numero di prossimi eventi',
    editorShowEmptyDays: 'Mostra giorni senza eventi',
    editorViewSection: 'Opzioni vista',
    editorShowWeekNumber: 'Mostra numero settimana',
    editorShowProgressBar: 'Mostra barra di avanzamento',
    editorEntitiesTitle: 'Calendari (Multi-entità)',
    editorTitle: 'Titolo (opzionale)',
    editorTitlePlaceholder: 'Es. Calendario Famiglia',
    editorFirstDay: 'Primo giorno della settimana',
    editorMonday: 'Lunedì',
    editorSunday: 'Domenica',
    editorLanguage: 'Lingua',
    editorLangAuto: 'Automatico (Home Assistant)',
    editorShowHeader: 'Mostra intestazione',
    editorShowToggles: 'Mostra filtri calendario',
    editorMaxEvents: 'Max eventi visibili al giorno',
    editorShowWeekNumbers: 'Mostra numeri settimana',
    editorCompact: 'Modalità compatta',
    editorDaysToShow: 'Giorni da mostrare',
    editorAddEntity: 'Aggiungi calendario',
    editorEntity: 'Entità calendario',
    editorCustomName: 'Nome personalizzato',
    editorCustomIcon: 'Icona (mdi:...)',
    editorCustomColor: 'Colore',
    editorRemove: 'Rimuovi calendario',
    editorNoEntities: 'Nessun calendario ancora aggiunto.',
  },
  fr: {
    today: "Aujourd'hui",
    prev: 'Précédent',
    next: 'Suivant',
    refresh: 'Actualiser',
    allDay: 'Toute la journée',
    noEvents: "Aucun événement aujourd'hui",
    moreEvents: 'de plus',
    noCalendars: 'Aucun calendrier configuré',
    noCalendarsHint: 'Ajoutez une ou plusieurs entités calendar.* dans la configuration de la carte.',
    loading: 'Chargement des événements...',
    errorLoading: 'Erreur lors du chargement de certains calendriers',
    calendar: 'Calendrier',
    when: 'Quand',
    location: 'Lieu',
    description: 'Description',
    openEntity: "Ouvrir l'entité",
    close: 'Fermer',
    weekAbbr: 'Sem',
    eventsCount: 'événements',
    allDayEvents: 'Toute la journée',
    timedEvents: 'Planifiés',
    weekLabel: 'Semaine',
    hoursRemaining: 'heures',
    hourRemaining: 'heure',
    minutesRemaining: 'minutes',
    completed: 'Terminé',
    startsIn: 'Commence dans',
    previousEventsSection: 'Événements précédents',
    currentEventsSection: 'Événements en cours',
    upcomingEventsSection: 'Événements à venir',
    noCurrentEvents: 'Aucun événement en cours',
    editorGeneralSection: 'Paramètres généraux',
    editorAppearanceSection: 'Apparence et Transparence',
    editorTransparent: 'Fond 100% transparent',
    editorBackgroundColor: 'Couleur de fond (optionnel)',
    editorBackgroundOpacity: 'Opacité du fond (%)',
    editorBackdropBlur: "Flou d'arrière-plan (px)",
    editorHideBorder: 'Masquer la bordure',
    editorHideShadow: "Masquer l'ombre",
    editorBorderRadius: 'Rayon de bordure (px)',
    editorShowNavigation: 'Afficher les flèches de navigation',
    editorUseEntityColor: 'Colorer icône et barre par calendrier',
    editorShowCurrentDay: 'Afficher le jour actuel',
    editorShowAllDayEvents: 'Afficher les événements journée entière',
    editorAllDayPosition: 'Position des événements journée entière',
    editorPositionTop: 'En haut',
    editorPositionBottom: 'En bas',
    editorShowCompletedEvents: 'Afficher les événements terminés',
    editorMaxPreviousEvents: "Nombre d'événements précédents",
    editorMaxUpcomingEvents: "Nombre d'événements à venir",
    editorShowEmptyDays: 'Afficher les jours sans événement',
    editorViewSection: "Options d'affichage",
    editorShowWeekNumber: 'Afficher le numéro de semaine',
    editorShowProgressBar: 'Afficher la barre de progression',
    editorEntitiesTitle: 'Calendriers (Multi-entités)',
    editorTitle: 'Titre (optionnel)',
    editorTitlePlaceholder: 'Ex. Calendrier Familial',
    editorFirstDay: 'Premier jour de la semaine',
    editorMonday: 'Lundi',
    editorSunday: 'Dimanche',
    editorLanguage: 'Langue',
    editorLangAuto: 'Automatique (Home Assistant)',
    editorShowHeader: "Afficher l'en-tête de navigation",
    editorShowToggles: 'Afficher les filtres de calendrier',
    editorMaxEvents: 'Max événements visibles par jour',
    editorShowWeekNumbers: 'Afficher les numéros de semaine',
    editorCompact: 'Mode compact',
    editorDaysToShow: 'Jours à afficher',
    editorAddEntity: 'Ajouter un calendrier',
    editorEntity: 'Entité calendrier',
    editorCustomName: 'Nom personnalisé',
    editorCustomIcon: 'Icône (mdi:...)',
    editorCustomColor: 'Couleur',
    editorRemove: 'Supprimer le calendrier',
    editorNoEntities: 'Aucun calendrier ajouté pour le moment.',
  },
};

const SUPPORTED_LANGUAGES: readonly SupportedLanguage[] = [
  'es',
  'zh-Hans',
  'de',
  'en',
  'pt',
  'it',
  'fr',
];

const LOCALE_BY_LANG: Record<SupportedLanguage, string> = {
  es: 'es-ES',
  'zh-Hans': 'zh-CN',
  de: 'de-DE',
  en: 'en-US',
  pt: 'pt-PT',
  it: 'it-IT',
  fr: 'fr-FR',
};

export function resolveLanguage(
  configured?: SupportedLanguage,
  hass?: HomeAssistant,
): SupportedLanguage {
  if (configured && SUPPORTED_LANGUAGES.includes(configured)) {
    return configured;
  }
  const raw = (hass?.locale?.language || hass?.language || 'es').toLowerCase();
  if (raw.startsWith('zh')) return 'zh-Hans';
  if (raw.startsWith('de')) return 'de';
  if (raw.startsWith('en')) return 'en';
  if (raw.startsWith('pt')) return 'pt';
  if (raw.startsWith('it')) return 'it';
  if (raw.startsWith('fr')) return 'fr';
  return 'es';
}

export function getLocaleTag(lang: SupportedLanguage, hass?: HomeAssistant): string {
  const hassLang = hass?.locale?.language || hass?.language;
  const basePrefix = lang === 'zh-Hans' ? 'zh' : lang;
  if (hassLang && hassLang.toLowerCase().startsWith(basePrefix)) {
    return hassLang;
  }
  return LOCALE_BY_LANG[lang];
}

export function formatWeekBadge(
  weekNumber: number,
  lang: SupportedLanguage,
  strings: TranslationStrings,
): string {
  if (lang === 'zh-Hans') {
    return `第${weekNumber}周`;
  }
  return `${strings.weekLabel} ${weekNumber}`;
}
