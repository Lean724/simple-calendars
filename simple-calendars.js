const wt = "1.4.0", ve = "simple-calendar-month-card", oe = "simple-calendar-week-card", re = "simple-calendar-day-card", ae = "simple-calendar-event-card", st = "simple-calendar-card-editor", Ie = "ha-calendar-month-card", Le = "ha-calendar-week-card", Ue = "ha-calendar-day-card", je = "ha-calendar-event-card", D = [
  "#1a73e8",
  "#e67c73",
  "#33b679",
  "#f6bf26",
  "#8e24aa",
  "#039be5",
  "#f4511e",
  "#0b8043",
  "#3f51b5",
  "#d81b60"
], Se = "mdi:calendar", We = {
  es: "Español",
  "zh-Hans": "简体中文",
  de: "Deutsch",
  en: "English",
  pt: "Português",
  it: "Italiano",
  fr: "Français"
}, lt = {
  es: {
    today: "Hoy",
    prev: "Anterior",
    next: "Siguiente",
    refresh: "Actualizar",
    allDay: "Todo el día",
    noEvents: "Sin eventos hoy",
    moreEvents: "más",
    noCalendars: "No hay calendarios configurados",
    noCalendarsHint: "Añade una o más entidades calendar.* en la configuración de la tarjeta.",
    loading: "Cargando eventos...",
    errorLoading: "Error al cargar algunos calendarios",
    calendar: "Calendario",
    when: "Cuándo",
    location: "Ubicación",
    description: "Descripción",
    openEntity: "Abrir entidad",
    close: "Cerrar",
    weekAbbr: "Sem",
    eventsCount: "eventos",
    allDayEvents: "Todo el día",
    timedEvents: "Con horario",
    weekLabel: "Semana",
    hoursRemaining: "horas",
    hourRemaining: "hora",
    minutesRemaining: "minutos",
    completed: "Finalizado",
    startsIn: "Empieza en",
    previousEventsSection: "Eventos previos",
    currentEventsSection: "Eventos actuales",
    upcomingEventsSection: "Eventos próximos",
    noCurrentEvents: "Sin eventos en curso",
    editorGeneralSection: "Configuración general",
    editorAppearanceSection: "Apariencia y Transparencia",
    editorTransparent: "Fondo 100% transparente",
    editorBackgroundColor: "Color de fondo (opcional)",
    editorBackgroundOpacity: "Opacidad del fondo (%)",
    editorBackdropBlur: "Desenfoque de fondo (px)",
    editorHideBorder: "Ocultar borde",
    editorHideShadow: "Ocultar sombra",
    editorBorderRadius: "Radio de borde (px)",
    editorShowNavigation: "Mostrar flechas de navegación",
    editorUseEntityColor: "Colorear ícono y barra por calendario",
    editorShowCurrentDay: "Mostrar día actual",
    editorShowAllDayEvents: "Mostrar eventos de todo el día",
    editorAllDayPosition: "Posición eventos todo el día",
    editorPositionTop: "Arriba (superior)",
    editorPositionBottom: "Abajo (inferior)",
    editorShowCompletedEvents: "Ver eventos ya terminados",
    editorMaxPreviousEvents: "Cantidad de eventos previos",
    editorMaxUpcomingEvents: "Cantidad de eventos próximos",
    editorShowEmptyDays: "Mostrar días sin eventos",
    editorViewSection: "Opciones de vista",
    editorShowWeekNumber: "Mostrar número de semana",
    editorShowProgressBar: "Mostrar barra de progreso",
    editorEntitiesTitle: "Calendarios (Multi-entidad)",
    editorTitle: "Título (opcional)",
    editorTitlePlaceholder: "Ej. Calendario Familiar",
    editorFirstDay: "Primer día de la semana",
    editorMonday: "Lunes",
    editorSunday: "Domingo",
    editorLanguage: "Idioma",
    editorLangAuto: "Automático (Home Assistant)",
    editorShowHeader: "Mostrar cabecera de navegación",
    editorShowToggles: "Mostrar filtros por calendario",
    editorMaxEvents: "Máx. eventos visibles por día",
    editorShowWeekNumbers: "Mostrar número de semana",
    editorCompact: "Modo compacto",
    editorDaysToShow: "Días a mostrar",
    editorAddEntity: "Añadir calendario",
    editorEntity: "Entidad de calendario",
    editorCustomName: "Nombre personalizado",
    editorCustomIcon: "Ícono (mdi:...)",
    editorCustomColor: "Color",
    editorRemove: "Quitar calendario",
    editorNoEntities: "No has agregado calendarios todavía."
  },
  "zh-Hans": {
    today: "今天",
    prev: "上一个",
    next: "下一个",
    refresh: "刷新",
    allDay: "全天",
    noEvents: "今天没有日程",
    moreEvents: "更多",
    noCalendars: "未配置日历",
    noCalendarsHint: "请在卡片配置中添加一个或多个 calendar.* 实体。",
    loading: "正在加载日程...",
    errorLoading: "部分日历加载失败",
    calendar: "日历",
    when: "时间",
    location: "地点",
    description: "描述",
    openEntity: "打开实体",
    close: "关闭",
    weekAbbr: "周",
    eventsCount: "个日程",
    allDayEvents: "全天",
    timedEvents: "时段",
    weekLabel: "第",
    hoursRemaining: "小时",
    hourRemaining: "小时",
    minutesRemaining: "分钟",
    completed: "已结束",
    startsIn: "距离开始",
    previousEventsSection: "之前的日程",
    currentEventsSection: "当前日程",
    upcomingEventsSection: "即将到来",
    noCurrentEvents: "当前无进行中日程",
    editorGeneralSection: "常规设置",
    editorAppearanceSection: "外观与透明度",
    editorTransparent: "100% 透明背景",
    editorBackgroundColor: "背景颜色（可选）",
    editorBackgroundOpacity: "背景不透明度 (%)",
    editorBackdropBlur: "背景模糊 (px)",
    editorHideBorder: "隐藏边框",
    editorHideShadow: "隐藏阴影",
    editorBorderRadius: "圆角半径 (px)",
    editorShowNavigation: "显示导航箭头",
    editorUseEntityColor: "按日历颜色显示图标和进度条",
    editorShowCurrentDay: "显示当天日期",
    editorShowAllDayEvents: "显示全天日程",
    editorAllDayPosition: "全天日程位置",
    editorPositionTop: "顶部",
    editorPositionBottom: "底部",
    editorShowCompletedEvents: "显示已结束的日程",
    editorMaxPreviousEvents: "显示的已结束日程数",
    editorMaxUpcomingEvents: "显示的即将到来日程数",
    editorShowEmptyDays: "显示无日程的日期",
    editorViewSection: "视图选项",
    editorShowWeekNumber: "显示周数",
    editorShowProgressBar: "显示进度条",
    editorEntitiesTitle: "日历（多实体）",
    editorTitle: "标题（可选）",
    editorTitlePlaceholder: "例如：家庭日历",
    editorFirstDay: "每周第一天",
    editorMonday: "星期一",
    editorSunday: "星期日",
    editorLanguage: "语言",
    editorLangAuto: "自动 (Home Assistant)",
    editorShowHeader: "显示导航栏",
    editorShowToggles: "显示日历筛选标签",
    editorMaxEvents: "每日最多显示日程数",
    editorShowWeekNumbers: "显示周数",
    editorCompact: "紧凑模式",
    editorDaysToShow: "显示天数",
    editorAddEntity: "添加日历",
    editorEntity: "日历实体",
    editorCustomName: "自定义名称",
    editorCustomIcon: "图标 (mdi:...)",
    editorCustomColor: "颜色",
    editorRemove: "移除日历",
    editorNoEntities: "尚未添加任何日历。"
  },
  de: {
    today: "Heute",
    prev: "Zurück",
    next: "Weiter",
    refresh: "Aktualisieren",
    allDay: "Ganztägig",
    noEvents: "Heute keine Termine",
    moreEvents: "mehr",
    noCalendars: "Keine Kalender konfiguriert",
    noCalendarsHint: "Füge eine oder mehrere calendar.*-Entitäten in der Kartenkonfiguration hinzu.",
    loading: "Termine werden geladen...",
    errorLoading: "Fehler beim Laden einiger Kalender",
    calendar: "Kalender",
    when: "Wann",
    location: "Ort",
    description: "Beschreibung",
    openEntity: "Entität öffnen",
    close: "Schließen",
    weekAbbr: "KW",
    eventsCount: "Termine",
    allDayEvents: "Ganztägig",
    timedEvents: "Zeitlich",
    weekLabel: "Woche",
    hoursRemaining: "Stunden",
    hourRemaining: "Stunde",
    minutesRemaining: "Minuten",
    completed: "Beendet",
    startsIn: "Beginnt in",
    previousEventsSection: "Vorherige Termine",
    currentEventsSection: "Aktuelle Termine",
    upcomingEventsSection: "Kommende Termine",
    noCurrentEvents: "Keine laufenden Termine",
    editorGeneralSection: "Allgemeine Einstellungen",
    editorAppearanceSection: "Aussehen & Transparenz",
    editorTransparent: "100% transparenter Hintergrund",
    editorBackgroundColor: "Hintergrundfarbe (optional)",
    editorBackgroundOpacity: "Hintergrund-Deckkraft (%)",
    editorBackdropBlur: "Hintergrundunschärfe (px)",
    editorHideBorder: "Rahmen ausblenden",
    editorHideShadow: "Schatten ausblenden",
    editorBorderRadius: "Eckenradius (px)",
    editorShowNavigation: "Navigationspfeile anzeigen",
    editorUseEntityColor: "Kalenderfarbe für Symbol & Balken nutzen",
    editorShowCurrentDay: "Aktuellen Tag anzeigen",
    editorShowAllDayEvents: "Ganztägige Termine anzeigen",
    editorAllDayPosition: "Position ganztägiger Termine",
    editorPositionTop: "Oben",
    editorPositionBottom: "Unten",
    editorShowCompletedEvents: "Bereits beendete Termine anzeigen",
    editorMaxPreviousEvents: "Anzahl vorheriger Termine",
    editorMaxUpcomingEvents: "Anzahl kommender Termine",
    editorShowEmptyDays: "Tage ohne Termine anzeigen",
    editorViewSection: "Ansichtsoptionen",
    editorShowWeekNumber: "Kalenderwoche anzeigen",
    editorShowProgressBar: "Fortschrittsbalken anzeigen",
    editorEntitiesTitle: "Kalender (Multi-Entität)",
    editorTitle: "Titel (optional)",
    editorTitlePlaceholder: "z. B. Familienkalender",
    editorFirstDay: "Erster Tag der Woche",
    editorMonday: "Montag",
    editorSunday: "Sonntag",
    editorLanguage: "Sprache",
    editorLangAuto: "Automatisch (Home Assistant)",
    editorShowHeader: "Navigationsleiste anzeigen",
    editorShowToggles: "Kalenderfilter anzeigen",
    editorMaxEvents: "Max. sichtbare Termine pro Tag",
    editorShowWeekNumbers: "Kalenderwochen anzeigen",
    editorCompact: "Kompaktmodus",
    editorDaysToShow: "Anzahl der Tage",
    editorAddEntity: "Kalender hinzufügen",
    editorEntity: "Kalender-Entität",
    editorCustomName: "Benutzerdefinierter Name",
    editorCustomIcon: "Symbol (mdi:...)",
    editorCustomColor: "Farbe",
    editorRemove: "Kalender entfernen",
    editorNoEntities: "Noch keine Kalender hinzugefügt."
  },
  en: {
    today: "Today",
    prev: "Previous",
    next: "Next",
    refresh: "Refresh",
    allDay: "All day",
    noEvents: "No events today",
    moreEvents: "more",
    noCalendars: "No calendars configured",
    noCalendarsHint: "Add one or more calendar.* entities in the card configuration.",
    loading: "Loading events...",
    errorLoading: "Failed to load some calendars",
    calendar: "Calendar",
    when: "When",
    location: "Location",
    description: "Description",
    openEntity: "Open entity",
    close: "Close",
    weekAbbr: "Wk",
    eventsCount: "events",
    allDayEvents: "All day",
    timedEvents: "Scheduled",
    weekLabel: "Week",
    hoursRemaining: "hours",
    hourRemaining: "hour",
    minutesRemaining: "minutes",
    completed: "Completed",
    startsIn: "Starts in",
    previousEventsSection: "Previous events",
    currentEventsSection: "Current events",
    upcomingEventsSection: "Upcoming events",
    noCurrentEvents: "No ongoing events",
    editorGeneralSection: "General settings",
    editorAppearanceSection: "Appearance & Transparency",
    editorTransparent: "100% Transparent background",
    editorBackgroundColor: "Background color (optional)",
    editorBackgroundOpacity: "Background opacity (%)",
    editorBackdropBlur: "Backdrop blur (px)",
    editorHideBorder: "Hide border",
    editorHideShadow: "Hide shadow",
    editorBorderRadius: "Border radius (px)",
    editorShowNavigation: "Show navigation arrows",
    editorUseEntityColor: "Use calendar color on icon & bar",
    editorShowCurrentDay: "Show current day",
    editorShowAllDayEvents: "Show all-day events",
    editorAllDayPosition: "All-day events position",
    editorPositionTop: "Top",
    editorPositionBottom: "Bottom",
    editorShowCompletedEvents: "Show completed events",
    editorMaxPreviousEvents: "Previous events to show",
    editorMaxUpcomingEvents: "Upcoming events to show",
    editorShowEmptyDays: "Show days without events",
    editorViewSection: "View options",
    editorShowWeekNumber: "Show week number",
    editorShowProgressBar: "Show progress bar",
    editorEntitiesTitle: "Calendars (Multi-entity)",
    editorTitle: "Title (optional)",
    editorTitlePlaceholder: "e.g. Family Calendar",
    editorFirstDay: "First day of the week",
    editorMonday: "Monday",
    editorSunday: "Sunday",
    editorLanguage: "Language",
    editorLangAuto: "Automatic (Home Assistant)",
    editorShowHeader: "Show navigation header",
    editorShowToggles: "Show calendar filter chips",
    editorMaxEvents: "Max visible events per day",
    editorShowWeekNumbers: "Show week numbers",
    editorCompact: "Compact mode",
    editorDaysToShow: "Days to show",
    editorAddEntity: "Add calendar",
    editorEntity: "Calendar entity",
    editorCustomName: "Custom name",
    editorCustomIcon: "Icon (mdi:...)",
    editorCustomColor: "Color",
    editorRemove: "Remove calendar",
    editorNoEntities: "No calendars added yet."
  },
  pt: {
    today: "Hoje",
    prev: "Anterior",
    next: "Seguinte",
    refresh: "Atualizar",
    allDay: "Todo o dia",
    noEvents: "Sem eventos hoje",
    moreEvents: "mais",
    noCalendars: "Nenhum calendário configurado",
    noCalendarsHint: "Adicione uma ou mais entidades calendar.* na configuração do cartão.",
    loading: "Carregando eventos...",
    errorLoading: "Erro ao carregar alguns calendários",
    calendar: "Calendário",
    when: "Quando",
    location: "Local",
    description: "Descrição",
    openEntity: "Abrir entidade",
    close: "Fechar",
    weekAbbr: "Sem",
    eventsCount: "eventos",
    allDayEvents: "Todo o dia",
    timedEvents: "Com horário",
    weekLabel: "Semana",
    hoursRemaining: "horas",
    hourRemaining: "hora",
    minutesRemaining: "minutos",
    completed: "Concluído",
    startsIn: "Começa em",
    previousEventsSection: "Eventos anteriores",
    currentEventsSection: "Eventos atuais",
    upcomingEventsSection: "Próximos eventos",
    noCurrentEvents: "Sem eventos em andamento",
    editorGeneralSection: "Configuração geral",
    editorAppearanceSection: "Aparência e Transparência",
    editorTransparent: "Fundo 100% transparente",
    editorBackgroundColor: "Cor de fundo (opcional)",
    editorBackgroundOpacity: "Opacidade do fundo (%)",
    editorBackdropBlur: "Desfoque do fundo (px)",
    editorHideBorder: "Ocultar borda",
    editorHideShadow: "Ocultar sombra",
    editorBorderRadius: "Raio da borda (px)",
    editorShowNavigation: "Mostrar setas de navegação",
    editorUseEntityColor: "Colorir ícone e barra por calendário",
    editorShowCurrentDay: "Mostrar dia atual",
    editorShowAllDayEvents: "Mostrar eventos de dia inteiro",
    editorAllDayPosition: "Posição de eventos de dia inteiro",
    editorPositionTop: "Topo",
    editorPositionBottom: "Inferior",
    editorShowCompletedEvents: "Mostrar eventos já concluídos",
    editorMaxPreviousEvents: "Quantidade de eventos anteriores",
    editorMaxUpcomingEvents: "Quantidade de próximos eventos",
    editorShowEmptyDays: "Mostrar dias sem eventos",
    editorViewSection: "Opções de visualização",
    editorShowWeekNumber: "Mostrar número da semana",
    editorShowProgressBar: "Mostrar barra de progresso",
    editorEntitiesTitle: "Calendários (Multi-entidade)",
    editorTitle: "Título (opcional)",
    editorTitlePlaceholder: "Ex. Calendário Familiar",
    editorFirstDay: "Primeiro dia da semana",
    editorMonday: "Segunda-feira",
    editorSunday: "Domingo",
    editorLanguage: "Idioma",
    editorLangAuto: "Automático (Home Assistant)",
    editorShowHeader: "Mostrar cabeçalho de navegação",
    editorShowToggles: "Mostrar filtros de calendário",
    editorMaxEvents: "Máx. eventos visíveis por dia",
    editorShowWeekNumbers: "Mostrar números das semanas",
    editorCompact: "Modo compacto",
    editorDaysToShow: "Dias para mostrar",
    editorAddEntity: "Adicionar calendário",
    editorEntity: "Entidade de calendário",
    editorCustomName: "Nome personalizado",
    editorCustomIcon: "Ícone (mdi:...)",
    editorCustomColor: "Cor",
    editorRemove: "Remover calendário",
    editorNoEntities: "Nenhum calendário adicionado ainda."
  },
  it: {
    today: "Oggi",
    prev: "Precedente",
    next: "Successivo",
    refresh: "Aggiorna",
    allDay: "Tutto il giorno",
    noEvents: "Nessun evento oggi",
    moreEvents: "altri",
    noCalendars: "Nessun calendario configurato",
    noCalendarsHint: "Aggiungi una o più entità calendar.* nella configurazione della scheda.",
    loading: "Caricamento eventi...",
    errorLoading: "Errore nel caricamento di alcuni calendari",
    calendar: "Calendario",
    when: "Quando",
    location: "Luogo",
    description: "Descrizione",
    openEntity: "Apri entità",
    close: "Chiudi",
    weekAbbr: "Sett",
    eventsCount: "eventi",
    allDayEvents: "Tutto il giorno",
    timedEvents: "Con orario",
    weekLabel: "Settimana",
    hoursRemaining: "ore",
    hourRemaining: "ora",
    minutesRemaining: "minuti",
    completed: "Terminato",
    startsIn: "Inizia tra",
    previousEventsSection: "Eventi precedenti",
    currentEventsSection: "Eventi attuali",
    upcomingEventsSection: "Prossimi eventi",
    noCurrentEvents: "Nessun evento in corso",
    editorGeneralSection: "Impostazioni generali",
    editorAppearanceSection: "Aspetto e Trasparenza",
    editorTransparent: "Sfondo 100% trasparente",
    editorBackgroundColor: "Colore di sfondo (opzionale)",
    editorBackgroundOpacity: "Opacità dello sfondo (%)",
    editorBackdropBlur: "Sfocatura sfondo (px)",
    editorHideBorder: "Nascondi bordo",
    editorHideShadow: "Nascondi ombra",
    editorBorderRadius: "Raggio del bordo (px)",
    editorShowNavigation: "Mostra frecce di navigazione",
    editorUseEntityColor: "Usa colore calendario su icona e barra",
    editorShowCurrentDay: "Mostra giorno attuale",
    editorShowAllDayEvents: "Mostra eventi tutto il giorno",
    editorAllDayPosition: "Posizione eventi tutto il giorno",
    editorPositionTop: "In alto",
    editorPositionBottom: "In basso",
    editorShowCompletedEvents: "Mostra eventi già terminati",
    editorMaxPreviousEvents: "Numero di eventi precedenti",
    editorMaxUpcomingEvents: "Numero di prossimi eventi",
    editorShowEmptyDays: "Mostra giorni senza eventi",
    editorViewSection: "Opzioni vista",
    editorShowWeekNumber: "Mostra numero settimana",
    editorShowProgressBar: "Mostra barra di avanzamento",
    editorEntitiesTitle: "Calendari (Multi-entità)",
    editorTitle: "Titolo (opzionale)",
    editorTitlePlaceholder: "Es. Calendario Famiglia",
    editorFirstDay: "Primo giorno della settimana",
    editorMonday: "Lunedì",
    editorSunday: "Domenica",
    editorLanguage: "Lingua",
    editorLangAuto: "Automatico (Home Assistant)",
    editorShowHeader: "Mostra intestazione",
    editorShowToggles: "Mostra filtri calendario",
    editorMaxEvents: "Max eventi visibili al giorno",
    editorShowWeekNumbers: "Mostra numeri settimana",
    editorCompact: "Modalità compatta",
    editorDaysToShow: "Giorni da mostrare",
    editorAddEntity: "Aggiungi calendario",
    editorEntity: "Entità calendario",
    editorCustomName: "Nome personalizzato",
    editorCustomIcon: "Icona (mdi:...)",
    editorCustomColor: "Colore",
    editorRemove: "Rimuovi calendario",
    editorNoEntities: "Nessun calendario ancora aggiunto."
  },
  fr: {
    today: "Aujourd'hui",
    prev: "Précédent",
    next: "Suivant",
    refresh: "Actualiser",
    allDay: "Toute la journée",
    noEvents: "Aucun événement aujourd'hui",
    moreEvents: "de plus",
    noCalendars: "Aucun calendrier configuré",
    noCalendarsHint: "Ajoutez une ou plusieurs entités calendar.* dans la configuration de la carte.",
    loading: "Chargement des événements...",
    errorLoading: "Erreur lors du chargement de certains calendriers",
    calendar: "Calendrier",
    when: "Quand",
    location: "Lieu",
    description: "Description",
    openEntity: "Ouvrir l'entité",
    close: "Fermer",
    weekAbbr: "Sem",
    eventsCount: "événements",
    allDayEvents: "Toute la journée",
    timedEvents: "Planifiés",
    weekLabel: "Semaine",
    hoursRemaining: "heures",
    hourRemaining: "heure",
    minutesRemaining: "minutes",
    completed: "Terminé",
    startsIn: "Commence dans",
    previousEventsSection: "Événements précédents",
    currentEventsSection: "Événements en cours",
    upcomingEventsSection: "Événements à venir",
    noCurrentEvents: "Aucun événement en cours",
    editorGeneralSection: "Paramètres généraux",
    editorAppearanceSection: "Apparence et Transparence",
    editorTransparent: "Fond 100% transparent",
    editorBackgroundColor: "Couleur de fond (optionnel)",
    editorBackgroundOpacity: "Opacité du fond (%)",
    editorBackdropBlur: "Flou d'arrière-plan (px)",
    editorHideBorder: "Masquer la bordure",
    editorHideShadow: "Masquer l'ombre",
    editorBorderRadius: "Rayon de bordure (px)",
    editorShowNavigation: "Afficher les flèches de navigation",
    editorUseEntityColor: "Colorer icône et barre par calendrier",
    editorShowCurrentDay: "Afficher le jour actuel",
    editorShowAllDayEvents: "Afficher les événements journée entière",
    editorAllDayPosition: "Position des événements journée entière",
    editorPositionTop: "En haut",
    editorPositionBottom: "En bas",
    editorShowCompletedEvents: "Afficher les événements terminés",
    editorMaxPreviousEvents: "Nombre d'événements précédents",
    editorMaxUpcomingEvents: "Nombre d'événements à venir",
    editorShowEmptyDays: "Afficher les jours sans événement",
    editorViewSection: "Options d'affichage",
    editorShowWeekNumber: "Afficher le numéro de semaine",
    editorShowProgressBar: "Afficher la barre de progression",
    editorEntitiesTitle: "Calendriers (Multi-entités)",
    editorTitle: "Titre (optionnel)",
    editorTitlePlaceholder: "Ex. Calendrier Familial",
    editorFirstDay: "Premier jour de la semaine",
    editorMonday: "Lundi",
    editorSunday: "Dimanche",
    editorLanguage: "Langue",
    editorLangAuto: "Automatique (Home Assistant)",
    editorShowHeader: "Afficher l'en-tête de navigation",
    editorShowToggles: "Afficher les filtres de calendrier",
    editorMaxEvents: "Max événements visibles par jour",
    editorShowWeekNumbers: "Afficher les numéros de semaine",
    editorCompact: "Mode compact",
    editorDaysToShow: "Jours à afficher",
    editorAddEntity: "Ajouter un calendrier",
    editorEntity: "Entité calendrier",
    editorCustomName: "Nom personnalisé",
    editorCustomIcon: "Icône (mdi:...)",
    editorCustomColor: "Couleur",
    editorRemove: "Supprimer le calendrier",
    editorNoEntities: "Aucun calendrier ajouté pour le moment."
  }
}, xt = [
  "es",
  "zh-Hans",
  "de",
  "en",
  "pt",
  "it",
  "fr"
], $t = {
  es: "es-ES",
  "zh-Hans": "zh-CN",
  de: "de-DE",
  en: "en-US",
  pt: "pt-PT",
  it: "it-IT",
  fr: "fr-FR"
};
function ct(t, e) {
  var o;
  if (t && xt.includes(t))
    return t;
  const i = (((o = e == null ? void 0 : e.locale) == null ? void 0 : o.language) || (e == null ? void 0 : e.language) || "es").toLowerCase();
  return i.startsWith("zh") ? "zh-Hans" : i.startsWith("de") ? "de" : i.startsWith("en") ? "en" : i.startsWith("pt") ? "pt" : i.startsWith("it") ? "it" : i.startsWith("fr") ? "fr" : "es";
}
function Et(t, e) {
  var n;
  const i = ((n = e == null ? void 0 : e.locale) == null ? void 0 : n.language) || (e == null ? void 0 : e.language), o = t === "zh-Hans" ? "zh" : t;
  return i && i.toLowerCase().startsWith(o) ? i : $t[t];
}
function dt(t, e, i) {
  return e === "zh-Hans" ? `第${t}周` : `${i.weekLabel} ${t}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de = globalThis, Pe = de.ShadowRoot && (de.ShadyCSS === void 0 || de.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ne = Symbol(), Ye = /* @__PURE__ */ new WeakMap();
let ht = class {
  constructor(e, i, o) {
    if (this._$cssResult$ = !0, o !== Ne) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = i;
  }
  get styleSheet() {
    let e = this.o;
    const i = this.t;
    if (Pe && e === void 0) {
      const o = i !== void 0 && i.length === 1;
      o && (e = Ye.get(i)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), o && Ye.set(i, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const kt = (t) => new ht(typeof t == "string" ? t : t + "", void 0, Ne), I = (t, ...e) => {
  const i = t.length === 1 ? t[0] : e.reduce((o, n, a) => o + ((r) => {
    if (r._$cssResult$ === !0) return r.cssText;
    if (typeof r == "number") return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[a + 1], t[0]);
  return new ht(i, t, Ne);
}, Dt = (t, e) => {
  if (Pe) t.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of e) {
    const o = document.createElement("style"), n = de.litNonce;
    n !== void 0 && o.setAttribute("nonce", n), o.textContent = i.cssText, t.appendChild(o);
  }
}, Ge = Pe ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let i = "";
  for (const o of e.cssRules) i += o.cssText;
  return kt(i);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: St, defineProperty: Ct, getOwnPropertyDescriptor: At, getOwnPropertyNames: Tt, getOwnPropertySymbols: Mt, getPrototypeOf: Pt } = Object, M = globalThis, Ke = M.trustedTypes, Nt = Ke ? Ke.emptyScript : "", _e = M.reactiveElementPolyfillSupport, Q = (t, e) => t, he = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Nt : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let i = t;
  switch (e) {
    case Boolean:
      i = t !== null;
      break;
    case Number:
      i = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(t);
      } catch {
        i = null;
      }
  }
  return i;
} }, Oe = (t, e) => !St(t, e), Ve = { attribute: !0, type: String, converter: he, reflect: !1, useDefault: !1, hasChanged: Oe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), M.litPropertyMetadata ?? (M.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Y = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, i = Ve) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(e, i), !i.noAccessor) {
      const o = Symbol(), n = this.getPropertyDescriptor(e, o, i);
      n !== void 0 && Ct(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, i, o) {
    const { get: n, set: a } = At(this.prototype, e) ?? { get() {
      return this[i];
    }, set(r) {
      this[i] = r;
    } };
    return { get: n, set(r) {
      const l = n == null ? void 0 : n.call(this);
      a == null || a.call(this, r), this.requestUpdate(e, l, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ve;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Q("elementProperties"))) return;
    const e = Pt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Q("properties"))) {
      const i = this.properties, o = [...Tt(i), ...Mt(i)];
      for (const n of o) this.createProperty(n, i[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const i = litPropertyMetadata.get(e);
      if (i !== void 0) for (const [o, n] of i) this.elementProperties.set(o, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, o] of this.elementProperties) {
      const n = this._$Eu(i, o);
      n !== void 0 && this._$Eh.set(n, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const i = [];
    if (Array.isArray(e)) {
      const o = new Set(e.flat(1 / 0).reverse());
      for (const n of o) i.unshift(Ge(n));
    } else e !== void 0 && i.push(Ge(e));
    return i;
  }
  static _$Eu(e, i) {
    const o = i.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((i) => this.enableUpdating = i), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((i) => i(this));
  }
  addController(e) {
    var i;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((i = e.hostConnected) == null || i.call(e));
  }
  removeController(e) {
    var i;
    (i = this._$EO) == null || i.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), i = this.constructor.elementProperties;
    for (const o of i.keys()) this.hasOwnProperty(o) && (e.set(o, this[o]), delete this[o]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Dt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((i) => {
      var o;
      return (o = i.hostConnected) == null ? void 0 : o.call(i);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((i) => {
      var o;
      return (o = i.hostDisconnected) == null ? void 0 : o.call(i);
    });
  }
  attributeChangedCallback(e, i, o) {
    this._$AK(e, o);
  }
  _$ET(e, i) {
    var a;
    const o = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, o);
    if (n !== void 0 && o.reflect === !0) {
      const r = (((a = o.converter) == null ? void 0 : a.toAttribute) !== void 0 ? o.converter : he).toAttribute(i, o.type);
      this._$Em = e, r == null ? this.removeAttribute(n) : this.setAttribute(n, r), this._$Em = null;
    }
  }
  _$AK(e, i) {
    var a, r;
    const o = this.constructor, n = o._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const l = o.getPropertyOptions(n), s = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((a = l.converter) == null ? void 0 : a.fromAttribute) !== void 0 ? l.converter : he;
      this._$Em = n;
      const c = s.fromAttribute(i, l.type);
      this[n] = c ?? ((r = this._$Ej) == null ? void 0 : r.get(n)) ?? c, this._$Em = null;
    }
  }
  requestUpdate(e, i, o, n = !1, a) {
    var r;
    if (e !== void 0) {
      const l = this.constructor;
      if (n === !1 && (a = this[e]), o ?? (o = l.getPropertyOptions(e)), !((o.hasChanged ?? Oe)(a, i) || o.useDefault && o.reflect && a === ((r = this._$Ej) == null ? void 0 : r.get(e)) && !this.hasAttribute(l._$Eu(e, o)))) return;
      this.C(e, i, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, i, { useDefault: o, reflect: n, wrapped: a }, r) {
    o && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, r ?? i ?? this[e]), a !== !0 || r !== void 0) || (this._$AL.has(e) || (this.hasUpdated || o || (i = void 0), this._$AL.set(e, i)), n === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (i) {
      Promise.reject(i);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var o;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [a, r] of this._$Ep) this[a] = r;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [a, r] of n) {
        const { wrapped: l } = r, s = this[a];
        l !== !0 || this._$AL.has(a) || s === void 0 || this.C(a, void 0, r, s);
      }
    }
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (o = this._$EO) == null || o.forEach((n) => {
        var a;
        return (a = n.hostUpdate) == null ? void 0 : a.call(n);
      }), this.update(i)) : this._$EM();
    } catch (n) {
      throw e = !1, this._$EM(), n;
    }
    e && this._$AE(i);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var i;
    (i = this._$EO) == null || i.forEach((o) => {
      var n;
      return (n = o.hostUpdated) == null ? void 0 : n.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((i) => this._$ET(i, this[i]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Y.elementStyles = [], Y.shadowRootOptions = { mode: "open" }, Y[Q("elementProperties")] = /* @__PURE__ */ new Map(), Y[Q("finalized")] = /* @__PURE__ */ new Map(), _e == null || _e({ ReactiveElement: Y }), (M.reactiveElementVersions ?? (M.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z = globalThis, qe = (t) => t, pe = Z.trustedTypes, Qe = pe ? pe.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, pt = "$lit$", T = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + T, Ot = `<${ut}>`, H = document, J = () => H.createComment(""), X = (t) => t === null || typeof t != "object" && typeof t != "function", ze = Array.isArray, zt = (t) => ze(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", we = `[ 	
\f\r]`, q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ze = /-->/g, Je = />/g, z = RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Xe = /'/g, et = /"/g, mt = /^(?:script|style|textarea|title)$/i, Ft = (t) => (e, ...i) => ({ _$litType$: t, strings: e, values: i }), d = Ft(1), G = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), tt = /* @__PURE__ */ new WeakMap(), F = H.createTreeWalker(H, 129);
function gt(t, e) {
  if (!ze(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Qe !== void 0 ? Qe.createHTML(e) : e;
}
const Bt = (t, e) => {
  const i = t.length - 1, o = [];
  let n, a = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", r = q;
  for (let l = 0; l < i; l++) {
    const s = t[l];
    let c, p, h = -1, m = 0;
    for (; m < s.length && (r.lastIndex = m, p = r.exec(s), p !== null); ) m = r.lastIndex, r === q ? p[1] === "!--" ? r = Ze : p[1] !== void 0 ? r = Je : p[2] !== void 0 ? (mt.test(p[2]) && (n = RegExp("</" + p[2], "g")), r = z) : p[3] !== void 0 && (r = z) : r === z ? p[0] === ">" ? (r = n ?? q, h = -1) : p[1] === void 0 ? h = -2 : (h = r.lastIndex - p[2].length, c = p[1], r = p[3] === void 0 ? z : p[3] === '"' ? et : Xe) : r === et || r === Xe ? r = z : r === Ze || r === Je ? r = q : (r = z, n = void 0);
    const g = r === z && t[l + 1].startsWith("/>") ? " " : "";
    a += r === q ? s + Ot : h >= 0 ? (o.push(c), s.slice(0, h) + pt + s.slice(h) + T + g) : s + T + (h === -2 ? l : g);
  }
  return [gt(t, a + (t[i] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), o];
};
class ee {
  constructor({ strings: e, _$litType$: i }, o) {
    let n;
    this.parts = [];
    let a = 0, r = 0;
    const l = e.length - 1, s = this.parts, [c, p] = Bt(e, i);
    if (this.el = ee.createElement(c, o), F.currentNode = this.el.content, i === 2 || i === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (n = F.nextNode()) !== null && s.length < l; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const h of n.getAttributeNames()) if (h.endsWith(pt)) {
          const m = p[r++], g = n.getAttribute(h).split(T), f = /([.?@])?(.*)/.exec(m);
          s.push({ type: 1, index: a, name: f[2], strings: g, ctor: f[1] === "." ? Ht : f[1] === "?" ? It : f[1] === "@" ? Lt : fe }), n.removeAttribute(h);
        } else h.startsWith(T) && (s.push({ type: 6, index: a }), n.removeAttribute(h));
        if (mt.test(n.tagName)) {
          const h = n.textContent.split(T), m = h.length - 1;
          if (m > 0) {
            n.textContent = pe ? pe.emptyScript : "";
            for (let g = 0; g < m; g++) n.append(h[g], J()), F.nextNode(), s.push({ type: 2, index: ++a });
            n.append(h[m], J());
          }
        }
      } else if (n.nodeType === 8) if (n.data === ut) s.push({ type: 2, index: a });
      else {
        let h = -1;
        for (; (h = n.data.indexOf(T, h + 1)) !== -1; ) s.push({ type: 7, index: a }), h += T.length - 1;
      }
      a++;
    }
  }
  static createElement(e, i) {
    const o = H.createElement("template");
    return o.innerHTML = e, o;
  }
}
function K(t, e, i = t, o) {
  var r, l;
  if (e === G) return e;
  let n = o !== void 0 ? (r = i._$Co) == null ? void 0 : r[o] : i._$Cl;
  const a = X(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== a && ((l = n == null ? void 0 : n._$AO) == null || l.call(n, !1), a === void 0 ? n = void 0 : (n = new a(t), n._$AT(t, i, o)), o !== void 0 ? (i._$Co ?? (i._$Co = []))[o] = n : i._$Cl = n), n !== void 0 && (e = K(t, n._$AS(t, e.values), n, o)), e;
}
class Rt {
  constructor(e, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: i }, parts: o } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? H).importNode(i, !0);
    F.currentNode = n;
    let a = F.nextNode(), r = 0, l = 0, s = o[0];
    for (; s !== void 0; ) {
      if (r === s.index) {
        let c;
        s.type === 2 ? c = new se(a, a.nextSibling, this, e) : s.type === 1 ? c = new s.ctor(a, s.name, s.strings, this, e) : s.type === 6 && (c = new Ut(a, this, e)), this._$AV.push(c), s = o[++l];
      }
      r !== (s == null ? void 0 : s.index) && (a = F.nextNode(), r++);
    }
    return F.currentNode = H, n;
  }
  p(e) {
    let i = 0;
    for (const o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(e, o, i), i += o.strings.length - 2) : o._$AI(e[i])), i++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, i, o, n) {
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = e, this._$AB = i, this._$AM = o, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = i.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, i = this) {
    e = K(this, e, i), X(e) ? e === u || e == null || e === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : e !== this._$AH && e !== G && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : zt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== u && X(this._$AH) ? this._$AA.nextSibling.data = e : this.T(H.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var a;
    const { values: i, _$litType$: o } = e, n = typeof o == "number" ? this._$AC(e) : (o.el === void 0 && (o.el = ee.createElement(gt(o.h, o.h[0]), this.options)), o);
    if (((a = this._$AH) == null ? void 0 : a._$AD) === n) this._$AH.p(i);
    else {
      const r = new Rt(n, this), l = r.u(this.options);
      r.p(i), this.T(l), this._$AH = r;
    }
  }
  _$AC(e) {
    let i = tt.get(e.strings);
    return i === void 0 && tt.set(e.strings, i = new ee(e)), i;
  }
  k(e) {
    ze(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let o, n = 0;
    for (const a of e) n === i.length ? i.push(o = new se(this.O(J()), this.O(J()), this, this.options)) : o = i[n], o._$AI(a), n++;
    n < i.length && (this._$AR(o && o._$AB.nextSibling, n), i.length = n);
  }
  _$AR(e = this._$AA.nextSibling, i) {
    var o;
    for ((o = this._$AP) == null ? void 0 : o.call(this, !1, !0, i); e !== this._$AB; ) {
      const n = qe(e).nextSibling;
      qe(e).remove(), e = n;
    }
  }
  setConnected(e) {
    var i;
    this._$AM === void 0 && (this._$Cv = e, (i = this._$AP) == null || i.call(this, e));
  }
}
class fe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, i, o, n, a) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = e, this.name = i, this._$AM = n, this.options = a, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = u;
  }
  _$AI(e, i = this, o, n) {
    const a = this.strings;
    let r = !1;
    if (a === void 0) e = K(this, e, i, 0), r = !X(e) || e !== this._$AH && e !== G, r && (this._$AH = e);
    else {
      const l = e;
      let s, c;
      for (e = a[0], s = 0; s < a.length - 1; s++) c = K(this, l[o + s], i, s), c === G && (c = this._$AH[s]), r || (r = !X(c) || c !== this._$AH[s]), c === u ? e = u : e !== u && (e += (c ?? "") + a[s + 1]), this._$AH[s] = c;
    }
    r && !n && this.j(e);
  }
  j(e) {
    e === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Ht extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === u ? void 0 : e;
  }
}
class It extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== u);
  }
}
class Lt extends fe {
  constructor(e, i, o, n, a) {
    super(e, i, o, n, a), this.type = 5;
  }
  _$AI(e, i = this) {
    if ((e = K(this, e, i, 0) ?? u) === G) return;
    const o = this._$AH, n = e === u && o !== u || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive, a = e !== u && (o === u || n);
    n && this.element.removeEventListener(this.name, this, o), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Ut {
  constructor(e, i, o) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    K(this, e);
  }
}
const xe = Z.litHtmlPolyfillSupport;
xe == null || xe(ee, se), (Z.litHtmlVersions ?? (Z.litHtmlVersions = [])).push("3.3.3");
const jt = (t, e, i) => {
  const o = (i == null ? void 0 : i.renderBefore) ?? e;
  let n = o._$litPart$;
  if (n === void 0) {
    const a = (i == null ? void 0 : i.renderBefore) ?? null;
    o._$litPart$ = n = new se(e.insertBefore(J(), a), a, void 0, i ?? {});
  }
  return n._$AI(t), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B = globalThis;
class P extends Y {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var i;
    const e = super.createRenderRoot();
    return (i = this.renderOptions).renderBefore ?? (i.renderBefore = e.firstChild), e;
  }
  update(e) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = jt(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return G;
  }
}
var at;
P._$litElement$ = !0, P.finalized = !0, (at = B.litElementHydrateSupport) == null || at.call(B, { LitElement: P });
const $e = B.litElementPolyfillSupport;
$e == null || $e({ LitElement: P });
(B.litElementVersions ?? (B.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = (t) => (e, i) => {
  i !== void 0 ? i.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wt = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Oe }, Yt = (t = Wt, e, i) => {
  const { kind: o, metadata: n } = i;
  let a = globalThis.litPropertyMetadata.get(n);
  if (a === void 0 && globalThis.litPropertyMetadata.set(n, a = /* @__PURE__ */ new Map()), o === "setter" && ((t = Object.create(t)).wrapped = !0), a.set(i.name, t), o === "accessor") {
    const { name: r } = i;
    return { set(l) {
      const s = e.get.call(this);
      e.set.call(this, l), this.requestUpdate(r, s, t, !0, l);
    }, init(l) {
      return l !== void 0 && this.C(r, void 0, t, l), l;
    } };
  }
  if (o === "setter") {
    const { name: r } = i;
    return function(l) {
      const s = this[r];
      e.call(this, l), this.requestUpdate(r, s, t, !0, l);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function x(t) {
  return (e, i) => typeof i == "object" ? Yt(t, e, i) : ((o, n, a) => {
    const r = n.hasOwnProperty(a);
    return n.constructor.createProperty(a, o), r ? Object.getOwnPropertyDescriptor(n, a) : void 0;
  })(t, e, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function k(t) {
  return x({ ...t, state: !0, attribute: !1 });
}
function ue(t, e = 0.16) {
  const i = (t || "").trim(), o = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i);
  if (o) {
    let r = o[1];
    r.length === 3 && (r = r.split("").map((p) => p + p).join(""));
    const l = parseInt(r.slice(0, 2), 16), s = parseInt(r.slice(2, 4), 16), c = parseInt(r.slice(4, 6), 16);
    return `rgba(${l}, ${s}, ${c}, ${e})`;
  }
  const n = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i.exec(i);
  if (n)
    return `rgba(${n[1]}, ${n[2]}, ${n[3]}, ${e})`;
  const a = Math.round(e * 100);
  return `color-mix(in srgb, ${i || "#1a73e8"} ${a}%, transparent)`;
}
function Gt(t) {
  var p;
  const e = !!t.transparent, i = typeof t.background_opacity == "number" && !Number.isNaN(t.background_opacity) ? Math.max(0, Math.min(100, t.background_opacity)) : e ? 0 : 100, o = e || i === 0, n = !o && i < 100, a = (p = t.background_color) == null ? void 0 : p.trim(), r = typeof t.border_radius == "number" && !Number.isNaN(t.border_radius) ? Math.max(0, t.border_radius) : 24, l = typeof t.backdrop_blur == "number" && !Number.isNaN(t.backdrop_blur) ? Math.max(0, t.backdrop_blur) : n ? 12 : 0, s = [
    `border-radius: ${r}px`,
    `--ha-card-border-radius: ${r}px`
  ];
  if (o)
    s.push(
      "background: transparent !important",
      "border-width: 0px",
      "border-color: transparent",
      "--ha-card-border-width: 0px",
      "box-shadow: none",
      "--ha-card-box-shadow: none"
    );
  else {
    if (n) {
      const h = a || "var(--ha-card-background, var(--card-background-color, #1c1d21))";
      s.push(`background: color-mix(in srgb, ${h} ${i}%, transparent)`);
    } else a && s.push(`background: ${a}`);
    l > 0 && s.push(
      `backdrop-filter: blur(${l}px)`,
      `-webkit-backdrop-filter: blur(${l}px)`
    ), t.hide_border && s.push(
      "border-width: 0px",
      "border-color: transparent",
      "--ha-card-border-width: 0px"
    ), t.hide_shadow && s.push("box-shadow: none", "--ha-card-box-shadow: none");
  }
  const c = [];
  return o && c.push("is-transparent"), n && c.push("has-opacity"), {
    className: c.join(" "),
    style: s.join("; ")
  };
}
const le = I`
  :host {
    display: block;
    --cal-border-color: var(--divider-color, rgba(127, 127, 127, 0.22));
    --cal-surface: var(--ha-card-background, var(--card-background-color, #ffffff));
    --cal-surface-alt: var(--secondary-background-color, rgba(127, 127, 127, 0.06));
    --cal-text-primary: var(--primary-text-color, #f1f3f4);
    --cal-text-secondary: var(--secondary-text-color, #9aa0a6);
    --cal-accent: var(--primary-color, #03a9f4);
    --cal-today-ring: var(--primary-color, #1a73e8);
    --cal-now-line: #ea4335;
  }

  ha-card {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: var(--cal-surface);
    color: var(--cal-text-primary);
    border-radius: var(--ha-card-border-radius, 24px);
    transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  ha-card.is-transparent {
    background: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
  }

  .card-content-wrap {
    padding: 0 12px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card-content-wrap.minimal-pad {
    padding: 16px 20px 18px;
    gap: 14px;
  }

  .status-banner {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 0.85rem;
    background: rgba(244, 67, 54, 0.1);
    color: var(--error-color, #db4437);
    margin: 0 12px 8px;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px 16px;
    color: var(--cal-text-secondary);
    gap: 6px;
  }

  .empty-state ha-icon {
    --mdc-icon-size: 28px;
    opacity: 0.65;
  }

  .empty-state-title {
    font-weight: 600;
    font-size: 0.92rem;
    color: var(--cal-text-primary);
  }

  .empty-state-hint {
    font-size: 0.82rem;
    max-width: 320px;
  }

  .loading-bar {
    height: 2px;
    width: 100%;
    background: transparent;
    overflow: hidden;
    position: relative;
  }

  .loading-bar.active::after {
    content: '';
    position: absolute;
    left: -35%;
    width: 35%;
    height: 100%;
    background: var(--cal-accent);
    animation: cal-loading 1.1s infinite ease-in-out;
  }

  @keyframes cal-loading {
    0% {
      left: -35%;
    }
    100% {
      left: 100%;
    }
  }

  /* Minimalist Widget Styles (shared across Day, Week, Month summary) */
  .minimal-top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .week-pill {
    display: inline-flex;
    align-items: center;
    padding: 3px 11px;
    border-radius: 8px;
    border: 1.5px solid color-mix(in srgb, var(--cal-text-primary) 72%, transparent);
    font-size: 0.88rem;
    font-weight: 500;
    line-height: 1.25;
    color: var(--cal-text-primary);
    letter-spacing: 0.01em;
    user-select: none;
  }

  .min-nav-group {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .min-nav-btn,
  .min-today-btn {
    appearance: none;
    border: 1px solid var(--cal-border-color);
    background: transparent;
    color: var(--cal-text-primary);
    border-radius: 7px;
    height: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: inherit;
    opacity: 0.82;
    transition: opacity 0.15s ease, background-color 0.15s ease;
  }

  .min-nav-btn {
    width: 26px;
    padding: 0;
    --mdc-icon-size: 17px;
  }

  .min-today-btn {
    padding: 0 9px;
    font-size: 0.74rem;
    font-weight: 600;
  }

  .min-nav-btn:hover,
  .min-today-btn:hover {
    opacity: 1;
    background: var(--cal-surface-alt);
  }

  .min-days-stack {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .min-day-row {
    display: flex;
    align-items: flex-start;
    gap: 18px;
  }

  .min-date-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 66px;
    flex-shrink: 0;
    padding-top: 1px;
    user-select: none;
  }

  .min-date-day {
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1.3;
    color: var(--cal-text-primary);
    white-space: nowrap;
  }

  .min-date-month {
    font-size: 1.02rem;
    font-weight: 400;
    line-height: 1.3;
    color: var(--cal-text-primary);
    opacity: 0.86;
  }

  .min-events-col {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .min-empty-text {
    font-size: 0.94rem;
    color: var(--cal-text-secondary);
    padding: 2px 0;
  }

  .min-event-item {
    appearance: none;
    border: none;
    background: transparent;
    padding: 2px 0;
    margin: 0;
    width: 100%;
    text-align: left;
    font-family: inherit;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    border-radius: 8px;
    transition: opacity 0.15s ease;
  }

  .min-event-item:hover {
    opacity: 0.86;
  }

  .min-event-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-width: 0;
  }

  .min-event-title-wrap {
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
    flex: 1;
  }

  .min-event-icon {
    --mdc-icon-size: 18px;
    flex-shrink: 0;
    color: var(--min-ev-accent, var(--cal-text-primary));
  }

  .min-event-title {
    font-size: 1.08rem;
    font-weight: 500;
    line-height: 1.3;
    color: var(--cal-text-primary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .min-event-time {
    font-size: 1.02rem;
    font-weight: 400;
    color: var(--cal-text-primary);
    white-space: nowrap;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }

  .min-event-sub {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .min-event-duration {
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.25;
    color: var(--cal-text-primary);
    opacity: 0.92;
  }

  .min-progress-track {
    width: 100%;
    height: 4px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--cal-text-primary) 26%, transparent);
    overflow: hidden;
  }

  .min-progress-fill {
    height: 100%;
    border-radius: 999px;
    background: var(--min-ev-accent, var(--cal-text-primary));
    transition: width 0.35s ease;
  }

  @media (max-width: 480px) {
    .card-content-wrap.minimal-pad {
      padding: 14px 16px 16px;
    }

    .min-day-row {
      gap: 12px;
    }

    .min-date-col {
      min-width: 56px;
    }

    .min-event-title {
      font-size: 0.98rem;
    }

    .min-event-time {
      font-size: 0.92rem;
    }
  }
`;
function _(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0);
}
function ce(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1, 0, 0, 0, 0);
}
function $(t, e) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate() + e, 0, 0, 0, 0);
}
function it(t, e) {
  return new Date(t.getFullYear(), t.getMonth() + e, 1, 0, 0, 0, 0);
}
function te(t, e) {
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
}
function nt(t) {
  const e = /^(\d{4})-(\d{2})-(\d{2})/.exec(t);
  if (!e)
    return new Date(t);
  const i = Number(e[1]), o = Number(e[2]) - 1, n = Number(e[3]);
  return new Date(i, o, n, 0, 0, 0, 0);
}
function Fe(t) {
  const e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())), i = e.getUTCDay() || 7;
  e.setUTCDate(e.getUTCDate() + 4 - i);
  const o = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
  return Math.ceil(((e.getTime() - o.getTime()) / 864e5 + 1) / 7);
}
function Kt(t, e, i) {
  const o = (i % 7 + 7) % 7, n = new Date(t, e, 1, 0, 0, 0, 0), a = new Date(t, e + 1, 0, 0, 0, 0, 0), r = (n.getDay() - o + 7) % 7, l = $(n, -r), s = (o + 6 - a.getDay() + 7) % 7, c = r + a.getDate() + s, p = _(/* @__PURE__ */ new Date()), h = [];
  for (let m = 0; m < c; m++) {
    const g = $(l, m);
    h.push({
      date: g,
      isCurrentMonth: g.getMonth() === e && g.getFullYear() === t,
      isToday: te(g, p),
      weekNumber: Fe(g)
    });
  }
  return h;
}
function Vt(t, e) {
  const i = (e % 7 + 7) % 7, o = _(t), n = (o.getDay() - i + 7) % 7;
  return $(o, -n);
}
function qt(t, e, i = 7) {
  const o = i === 7 ? Vt(t, e) : _(t), n = [];
  for (let a = 0; a < i; a++)
    n.push($(o, a));
  return n;
}
function Qt(t, e) {
  const i = (t % 7 + 7) % 7, o = new Date(2026, 10, 1), n = new Intl.DateTimeFormat(e, { weekday: "short" }), a = [];
  for (let r = 0; r < 7; r++) {
    const l = (i + r) % 7, s = $(o, l);
    a.push(R(n.format(s).replace(/\.$/, "")));
  }
  return a;
}
function Zt(t, e, i) {
  const o = t.start.getTime(), n = t.end.getTime(), a = e.getTime(), r = i.getTime();
  return n <= o ? o >= a && o < r : o < r && n > a;
}
function vt(t, e = {}) {
  const i = e.showAllDay !== !1, o = e.allDayPosition === "bottom" ? "bottom" : "top", n = e.showCompleted !== !1, a = (e.now || /* @__PURE__ */ new Date()).getTime();
  return t.filter((r) => !(!i && r.allDay || !n && r.end.getTime() <= a)).sort((r, l) => r.allDay !== l.allDay ? o === "bottom" ? r.allDay ? 1 : -1 : r.allDay ? -1 : 1 : r.start.getTime() - l.start.getTime());
}
function ie(t, e, i) {
  const o = _(e), n = ce(e), a = t.filter((r) => Zt(r, o, n));
  return vt(a, i);
}
function me(t, e) {
  return new Intl.DateTimeFormat(e, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(t);
}
function V(t) {
  const e = t.getHours(), i = String(t.getMinutes()).padStart(2, "0");
  return `${e}:${i}`;
}
function Jt(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    month: "long",
    year: "numeric"
  }).format(t);
  return R(i);
}
function ot(t, e) {
  if (t.length === 0) return "";
  const i = t[0], o = t[t.length - 1], n = i.getMonth() === o.getMonth() && i.getFullYear() === o.getFullYear(), a = i.getFullYear() === o.getFullYear();
  if (n) {
    const s = R(
      new Intl.DateTimeFormat(e, { month: "long", year: "numeric" }).format(i)
    );
    return `${i.getDate()} – ${o.getDate()} ${s}`;
  }
  if (a) {
    const s = new Intl.DateTimeFormat(e, { day: "numeric", month: "short" }).format(i), c = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(o);
    return `${s} – ${c}`;
  }
  const r = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(i), l = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(o);
  return `${r} – ${l}`;
}
function Be(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(t);
  return R(i);
}
const ft = {
  es: "a",
  "zh-Hans": "-",
  de: "bis",
  en: "to",
  pt: "a",
  it: "alle",
  fr: "à"
};
function Xt(t, e, i) {
  if (t.allDay)
    return i;
  const o = ft[e] || "a";
  return `${V(t.start)} ${o} ${V(t.end)}`;
}
function ei(t, e, i, o) {
  if (t.allDay) {
    const c = _(t.start), p = $(_(t.end), -1), h = new Intl.DateTimeFormat(e, {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    return p.getTime() > c.getTime() ? `${h.format(c)} – ${h.format(p)} (${o})` : `${h.format(c)} · ${o}`;
  }
  const n = te(t.start, t.end), a = new Intl.DateTimeFormat(e, {
    weekday: "short",
    day: "numeric",
    month: "short"
  }), r = me(t.start, e), l = me(t.end, e);
  if (n)
    return `${R(a.format(t.start))}, ${r} – ${l}`;
  const s = ft[i] || "to";
  return `${R(a.format(t.start))} ${r} ${s} ${R(a.format(t.end))} ${l}`;
}
function R(t) {
  return t && t.charAt(0).toUpperCase() + t.slice(1);
}
function Ee(t, e) {
  const i = Math.max(1, Math.round(t / 6e4));
  if (i >= 45) {
    const o = Math.max(1, Math.round(i / 60));
    return `${o} ${o === 1 ? e.hourRemaining : e.hoursRemaining}`;
  }
  return `${i} ${e.minutesRemaining}`;
}
function yt(t, e, i) {
  if (t.allDay) {
    const p = _(e).getTime(), h = _(t.start).getTime(), m = _(t.end).getTime();
    if (p < h)
      return {
        progressPct: 0,
        label: i.allDay,
        isOngoing: !1,
        isPast: !1,
        isFuture: !0
      };
    if (p >= m)
      return {
        progressPct: 100,
        label: i.allDay,
        isOngoing: !1,
        isPast: !0,
        isFuture: !1
      };
    const g = e.getHours() * 60 + e.getMinutes();
    return {
      progressPct: Math.min(100, Math.max(0, g / 1440 * 100)),
      label: i.allDay,
      isOngoing: !0,
      isPast: !1,
      isFuture: !1
    };
  }
  const o = t.start.getTime(), n = t.end.getTime(), a = e.getTime(), r = Math.max(6e4, n - o);
  if (a < o)
    return {
      progressPct: 0,
      label: Ee(r, i),
      isOngoing: !1,
      isPast: !1,
      isFuture: !0
    };
  if (a >= n)
    return {
      progressPct: 100,
      label: Ee(r, i),
      isOngoing: !1,
      isPast: !0,
      isFuture: !1
    };
  const l = a - o, s = Math.min(100, Math.max(0, l / r * 100)), c = n - a;
  return {
    progressPct: s,
    label: Ee(c, i),
    isOngoing: !0,
    isPast: !1,
    isFuture: !1
  };
}
function ti(t, e) {
  const i = new Intl.DateTimeFormat(e, { weekday: "short" }).format(t).replace(/\.$/, ""), o = t.getDate(), n = new Intl.DateTimeFormat(e, { month: "short" }).format(t).replace(/\.$/, "");
  return {
    weekdayDay: `${i}. ${o}`,
    month: n
  };
}
const ii = 6e4, Ce = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map();
function ni() {
  Ce.clear();
}
function De(t, e) {
  const i = Array.isArray(t.entities) && t.entities.length > 0 ? t.entities : t.entity ? [t.entity] : [], o = [];
  return i.forEach((n, a) => {
    var h, m, g, f, y, E;
    const r = typeof n == "string" ? { entity: n } : n, l = ((r == null ? void 0 : r.entity) || "").trim();
    if (!l) return;
    const s = (h = e == null ? void 0 : e.states) == null ? void 0 : h[l], c = typeof ((m = s == null ? void 0 : s.attributes) == null ? void 0 : m.friendly_name) == "string" ? s.attributes.friendly_name : void 0, p = typeof ((g = s == null ? void 0 : s.attributes) == null ? void 0 : g.icon) == "string" ? s.attributes.icon : void 0;
    o.push({
      entity: l,
      name: ((f = r.name) == null ? void 0 : f.trim()) || c || l,
      color: ((y = r.color) == null ? void 0 : y.trim()) || D[a % D.length],
      icon: ((E = r.icon) == null ? void 0 : E.trim()) || p || Se,
      hidden: !!r.hidden
    });
  }), o;
}
function rt(t) {
  if (!t)
    return { date: /* @__PURE__ */ new Date(), isDateOnly: !1 };
  if (typeof t == "string") {
    const e = /^\d{4}-\d{2}-\d{2}$/.test(t.trim());
    return {
      date: e ? nt(t.trim()) : new Date(t),
      isDateOnly: e
    };
  }
  return t.date && !t.dateTime ? {
    date: nt(t.date),
    isDateOnly: !0
  } : t.dateTime ? {
    date: new Date(t.dateTime),
    isDateOnly: !1
  } : { date: /* @__PURE__ */ new Date(), isDateOnly: !1 };
}
function oi(t, e, i) {
  const o = rt(t.start), n = rt(t.end);
  if (Number.isNaN(o.date.getTime()))
    return null;
  const a = o.isDateOnly, r = o.date;
  let l = Number.isNaN(n.date.getTime()) ? new Date(r) : n.date;
  a && l.getTime() <= r.getTime() ? l = $(r, 1) : !a && l.getTime() < r.getTime() && (l = new Date(r));
  const s = t.uid || `${r.getTime()}-${i}`;
  return {
    id: `${e.entity}::${s}::${r.toISOString()}`,
    uid: t.uid || void 0,
    summary: (t.summary || "(Sin título)").trim(),
    description: (t.description || "").trim(),
    location: (t.location || "").trim(),
    start: r,
    end: l,
    allDay: a,
    calendarEntity: e.entity,
    calendarName: e.name,
    color: e.color,
    icon: e.icon
  };
}
async function ri(t, e, i, o, n = !1) {
  const a = i.toISOString(), r = o.toISOString(), l = `${e.entity}|${e.name}|${e.color}|${e.icon}|${a}|${r}`;
  if (!n) {
    const p = Ce.get(l);
    if (p && Date.now() - p.timestamp < ii)
      return p.events;
    const h = ke.get(l);
    if (h)
      return h;
  }
  const s = `calendars/${encodeURIComponent(e.entity)}?start=${encodeURIComponent(
    a
  )}&end=${encodeURIComponent(r)}`, c = t.callApi("GET", s).then((p) => {
    const h = (Array.isArray(p) ? p : []).map((m, g) => oi(m, e, g)).filter((m) => m !== null);
    return Ce.set(l, {
      timestamp: Date.now(),
      events: h
    }), h;
  }).finally(() => {
    ke.delete(l);
  });
  return ke.set(l, c), c;
}
async function ai(t, e, i, o, n = !1) {
  if (!t || e.length === 0)
    return { events: [], failedEntities: [] };
  const a = await Promise.allSettled(
    e.map(
      (s) => ri(t, s, i, o, n)
    )
  ), r = [], l = [];
  return a.forEach((s, c) => {
    s.status === "fulfilled" ? r.push(...s.value) : l.push(e[c].entity);
  }), r.sort((s, c) => s.start.getTime() - c.start.getTime()), { events: r, failedEntities: l };
}
var si = Object.defineProperty, li = Object.getOwnPropertyDescriptor, N = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? li(e, i) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (n = (o ? r(e, i, n) : r(n)) || n);
  return o && n && si(e, i, n), n;
};
let S = class extends P {
  constructor() {
    super(...arguments), this.cardTitle = "", this.periodLabel = "", this.entities = [], this.hiddenEntities = /* @__PURE__ */ new Set(), this.showEntityToggles = !0, this.loading = !1;
  }
  _emit(t, e) {
    this.dispatchEvent(
      new CustomEvent(t, {
        detail: e,
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    var t, e, i, o, n, a, r;
    return d`
      <div class="header-root">
        <div class="header-top">
          <div class="title-group">
            ${this.cardTitle ? d`<div class="card-subtitle">${this.cardTitle}</div>` : u}
            <div class="period-title">${this.periodLabel}</div>
          </div>

          <div class="nav-controls">
            <button
              class="icon-btn"
              type="button"
              title=${((t = this.strings) == null ? void 0 : t.prev) || "Previous"}
              aria-label=${((e = this.strings) == null ? void 0 : e.prev) || "Previous"}
              @click=${() => this._emit("cal-prev")}
            >
              <ha-icon icon="mdi:chevron-left"></ha-icon>
            </button>

            <button
              class="today-btn"
              type="button"
              @click=${() => this._emit("cal-today")}
            >
              ${((i = this.strings) == null ? void 0 : i.today) || "Today"}
            </button>

            <button
              class="icon-btn"
              type="button"
              title=${((o = this.strings) == null ? void 0 : o.next) || "Next"}
              aria-label=${((n = this.strings) == null ? void 0 : n.next) || "Next"}
              @click=${() => this._emit("cal-next")}
            >
              <ha-icon icon="mdi:chevron-right"></ha-icon>
            </button>

            <button
              class="icon-btn ${this.loading ? "spinning" : ""}"
              type="button"
              title=${((a = this.strings) == null ? void 0 : a.refresh) || "Refresh"}
              aria-label=${((r = this.strings) == null ? void 0 : r.refresh) || "Refresh"}
              @click=${() => this._emit("cal-refresh")}
            >
              <ha-icon icon="mdi:refresh"></ha-icon>
            </button>
          </div>
        </div>

        ${this.showEntityToggles && this.entities.length > 0 ? d`
              <div class="entity-chips">
                ${this.entities.map((l) => {
      const s = this.hiddenEntities.has(l.entity);
      return d`
                    <button
                      type="button"
                      class="entity-chip ${s ? "is-hidden" : ""}"
                      style="--chip-color: ${l.color}; --chip-bg: ${ue(
        l.color,
        0.14
      )};"
                      aria-pressed=${!s}
                      @click=${() => this._emit("cal-toggle-entity", { entity: l.entity })}
                    >
                      <span class="chip-dot"></span>
                      <ha-icon class="chip-icon" .icon=${l.icon}></ha-icon>
                      <span class="chip-name">${l.name}</span>
                    </button>
                  `;
    })}
              </div>
            ` : u}
      </div>
    `;
  }
};
S.styles = I`
    :host {
      display: block;
    }

    .header-root {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 14px 14px 10px;
    }

    .header-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }

    .title-group {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    .card-subtitle {
      font-size: 0.78rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--secondary-text-color, #727272);
    }

    .period-title {
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--primary-text-color, #212121);
      line-height: 1.25;
    }

    .nav-controls {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    .icon-btn,
    .today-btn {
      appearance: none;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25));
      background: transparent;
      color: var(--primary-text-color, #212121);
      cursor: pointer;
      border-radius: 8px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.15s ease, border-color 0.15s ease;
      font-family: inherit;
    }

    .icon-btn {
      width: 32px;
      padding: 0;
      --mdc-icon-size: 19px;
    }

    .today-btn {
      padding: 0 12px;
      font-size: 0.82rem;
      font-weight: 600;
    }

    .icon-btn:hover,
    .today-btn:hover {
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
    }

    .icon-btn.spinning ha-icon {
      animation: spin 0.9s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .entity-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .entity-chip {
      appearance: none;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 4px 10px 4px 8px;
      border-radius: 999px;
      border: 1px solid var(--chip-color);
      background: var(--chip-bg);
      color: var(--primary-text-color, #212121);
      font-family: inherit;
      font-size: 0.78rem;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.15s ease, transform 0.1s ease;
      max-width: 210px;
    }

    .entity-chip:hover {
      transform: translateY(-1px);
    }

    .entity-chip.is-hidden {
      opacity: 0.45;
      border-color: var(--divider-color, rgba(127, 127, 127, 0.35));
      background: transparent;
    }

    .entity-chip.is-hidden .chip-name {
      text-decoration: line-through;
    }

    .chip-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--chip-color);
      flex-shrink: 0;
    }

    .chip-icon {
      --mdc-icon-size: 14px;
      color: var(--chip-color);
      flex-shrink: 0;
    }

    .chip-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;
N([
  x({ type: String })
], S.prototype, "cardTitle", 2);
N([
  x({ type: String })
], S.prototype, "periodLabel", 2);
N([
  x({ type: Array })
], S.prototype, "entities", 2);
N([
  x({ attribute: !1 })
], S.prototype, "hiddenEntities", 2);
N([
  x({ type: Boolean })
], S.prototype, "showEntityToggles", 2);
N([
  x({ type: Boolean })
], S.prototype, "loading", 2);
N([
  x({ attribute: !1 })
], S.prototype, "strings", 2);
S = N([
  L("ha-calendar-shared-header")
], S);
var ci = Object.defineProperty, di = Object.getOwnPropertyDescriptor, U = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? di(e, i) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (n = (o ? r(e, i, n) : r(n)) || n);
  return o && n && ci(e, i, n), n;
};
let A = class extends P {
  constructor() {
    super(...arguments), this.event = null, this.dayDate = null, this.dayEvents = [], this.locale = "es-ES", this.lang = "es", this._handleKeydown = (t) => {
      t.key === "Escape" && this._close();
    };
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("keydown", this._handleKeydown);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("keydown", this._handleKeydown);
  }
  _close() {
    this.dispatchEvent(
      new CustomEvent("cal-dialog-close", { bubbles: !0, composed: !0 })
    );
  }
  _selectEventFromList(t) {
    this.dispatchEvent(
      new CustomEvent("cal-select-event", {
        detail: { event: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _openMoreInfo(t) {
    this._close(), this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _renderEventDetail(t) {
    var i, o, n, a, r, l, s;
    const e = ei(
      t,
      this.locale,
      this.lang,
      ((i = this.strings) == null ? void 0 : i.allDay) || "All day"
    );
    return d`
      <div class="dialog-header" style="--ev-color: ${t.color};">
        <div class="header-badge-row">
          <span
            class="calendar-badge"
            style="background: ${ue(t.color, 0.16)}; color: ${t.color};"
          >
            <ha-icon .icon=${t.icon}></ha-icon>
            <span>${t.calendarName}</span>
          </span>
          <button
            type="button"
            class="close-btn"
            aria-label=${((o = this.strings) == null ? void 0 : o.close) || "Close"}
            @click=${this._close}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <h2 class="event-title">${t.summary}</h2>
      </div>

      <div class="dialog-body">
        <div class="detail-row">
          <ha-icon icon="mdi:clock-outline"></ha-icon>
          <div>
            <div class="detail-label">${((n = this.strings) == null ? void 0 : n.when) || "When"}</div>
            <div class="detail-value">${e}</div>
          </div>
        </div>

        ${t.location ? d`
              <div class="detail-row">
                <ha-icon icon="mdi:map-marker-outline"></ha-icon>
                <div>
                  <div class="detail-label">${((a = this.strings) == null ? void 0 : a.location) || "Location"}</div>
                  <div class="detail-value">${t.location}</div>
                </div>
              </div>
            ` : u}

        ${t.description ? d`
              <div class="detail-row">
                <ha-icon icon="mdi:text"></ha-icon>
                <div>
                  <div class="detail-label">
                    ${((r = this.strings) == null ? void 0 : r.description) || "Description"}
                  </div>
                  <div class="detail-value description-text">${t.description}</div>
                </div>
              </div>
            ` : u}
      </div>

      <div class="dialog-footer">
        <button
          type="button"
          class="action-btn secondary"
          @click=${() => this._openMoreInfo(t.calendarEntity)}
        >
          <ha-icon icon="mdi:open-in-new"></ha-icon>
          <span>${((l = this.strings) == null ? void 0 : l.openEntity) || "Open entity"}</span>
        </button>
        <button type="button" class="action-btn primary" @click=${this._close}>
          ${((s = this.strings) == null ? void 0 : s.close) || "Close"}
        </button>
      </div>
    `;
  }
  _renderDayList() {
    var e, i, o;
    if (!this.dayDate) return u;
    const t = Be(this.dayDate, this.locale);
    return d`
      <div class="dialog-header">
        <div class="header-badge-row">
          <span class="day-list-count">
            ${this.dayEvents.length} ${((e = this.strings) == null ? void 0 : e.eventsCount) || "events"}
          </span>
          <button
            type="button"
            class="close-btn"
            aria-label=${((i = this.strings) == null ? void 0 : i.close) || "Close"}
            @click=${this._close}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <h2 class="event-title">${t}</h2>
      </div>

      <div class="dialog-body day-list-body">
        ${this.dayEvents.length === 0 ? d`<div class="empty-day">${((o = this.strings) == null ? void 0 : o.noEvents) || "No events"}</div>` : this.dayEvents.map((n) => {
      var r;
      const a = n.allDay ? ((r = this.strings) == null ? void 0 : r.allDay) || "All day" : `${me(n.start, this.locale)} – ${me(
        n.end,
        this.locale
      )}`;
      return d`
                <button
                  type="button"
                  class="day-event-row"
                  style="--ev-color: ${n.color}; --ev-bg: ${ue(
        n.color,
        0.12
      )};"
                  @click=${() => this._selectEventFromList(n)}
                >
                  <ha-icon class="row-icon" .icon=${n.icon}></ha-icon>
                  <div class="row-main">
                    <div class="row-title">${n.summary}</div>
                    <div class="row-sub">
                      <span>${a}</span>
                      <span>·</span>
                      <span>${n.calendarName}</span>
                    </div>
                  </div>
                  <ha-icon class="row-arrow" icon="mdi:chevron-right"></ha-icon>
                </button>
              `;
    })}
      </div>
    `;
  }
  render() {
    return !(this.event || this.dayDate) ? u : d`
      <div
        class="backdrop"
        role="dialog"
        aria-modal="true"
        @click=${(e) => {
      e.target === e.currentTarget && this._close();
    }}
      >
        <div class="dialog-card">
          ${this.event ? this._renderEventDetail(this.event) : this._renderDayList()}
        </div>
      </div>
    `;
  }
};
A.styles = I`
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
U([
  x({ attribute: !1 })
], A.prototype, "event", 2);
U([
  x({ attribute: !1 })
], A.prototype, "dayDate", 2);
U([
  x({ type: Array })
], A.prototype, "dayEvents", 2);
U([
  x({ type: String })
], A.prototype, "locale", 2);
U([
  x({ type: String })
], A.prototype, "lang", 2);
U([
  x({ attribute: !1 })
], A.prototype, "strings", 2);
A = U([
  L("ha-calendar-event-dialog")
], A);
var hi = Object.defineProperty, C = (t, e, i, o) => {
  for (var n = void 0, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (n = r(e, i, n) || n);
  return n && hi(e, i, n), n;
};
function ye(t) {
  const e = Object.keys((t == null ? void 0 : t.states) || {}).filter((i) => i.startsWith("calendar.")).slice(0, 3);
  return e.length > 0 ? e.map((i, o) => {
    var l, s, c;
    const n = (l = t == null ? void 0 : t.states) == null ? void 0 : l[i], a = typeof ((s = n == null ? void 0 : n.attributes) == null ? void 0 : s.friendly_name) == "string" ? n.attributes.friendly_name : void 0, r = typeof ((c = n == null ? void 0 : n.attributes) == null ? void 0 : c.icon) == "string" ? n.attributes.icon : "mdi:calendar";
    return {
      entity: i,
      name: a,
      color: D[o % D.length],
      icon: r
    };
  }) : [
    {
      entity: "calendar.personal",
      name: "Personal",
      color: D[0],
      icon: "mdi:calendar-account"
    },
    {
      entity: "calendar.trabajo",
      name: "Trabajo",
      color: D[1],
      icon: "mdi:briefcase-outline"
    }
  ];
}
const He = class He extends P {
  constructor() {
    super(...arguments), this._anchorDate = _(/* @__PURE__ */ new Date()), this._events = [], this._loading = !1, this._failedEntities = [], this._hiddenEntities = /* @__PURE__ */ new Set(), this._selectedEvent = null, this._selectedDayDate = null, this._currentNow = /* @__PURE__ */ new Date(), this._lastFetchKey = "", this._fetchRequestId = 0;
  }
  connectedCallback() {
    super.connectedCallback(), this._currentNow = /* @__PURE__ */ new Date(), this.autoFollowToday() && !te(this._anchorDate, this._currentNow) && (this._anchorDate = _(this._currentNow)), this._tickerId = window.setInterval(() => {
      const e = /* @__PURE__ */ new Date();
      this._currentNow = e, this.autoFollowToday() && !te(this._anchorDate, e) && (this._anchorDate = _(e));
    }, 3e4);
  }
  autoFollowToday() {
    return !1;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._tickerId !== void 0 && (window.clearInterval(this._tickerId), this._tickerId = void 0);
  }
  static async getConfigElement() {
    var e, i, o;
    try {
      const n = window, a = await ((e = n.loadCardHelpers) == null ? void 0 : e.call(n));
      if (a && !customElements.get("ha-selector")) {
        const r = await a.createCardElement({ type: "entities", entities: [] });
        await ((o = (i = r == null ? void 0 : r.constructor) == null ? void 0 : i.getConfigElement) == null ? void 0 : o.call(i));
      }
    } catch {
    }
    return document.createElement(st);
  }
  setConfig(e) {
    if (!e)
      throw new Error("Invalid configuration");
    this._config = {
      first_day_of_week: 1,
      ...e
    };
    const i = De(this._config, this.hass);
    this._hiddenEntities = new Set(
      i.filter((o) => o.hidden).map((o) => o.entity)
    ), this._lastFetchKey = "";
  }
  updated(e) {
    super.updated(e), !(!this._config || !this.hass) && (e.has("_config") || e.has("hass") || e.has("_anchorDate")) && this._triggerFetchIfNeeded(!1);
  }
  getFirstDayOfWeek() {
    var i;
    const e = (i = this._config) == null ? void 0 : i.first_day_of_week;
    return typeof e == "number" && !Number.isNaN(e) ? e : 1;
  }
  useSharedHeader() {
    var e;
    return ((e = this._config) == null ? void 0 : e.show_header) !== !1;
  }
  isMinimalSurface() {
    return !1;
  }
  getDayFilterOptions() {
    var e, i, o;
    return {
      showAllDay: ((e = this._config) == null ? void 0 : e.show_all_day_events) !== !1,
      allDayPosition: ((i = this._config) == null ? void 0 : i.all_day_position) === "bottom" ? "bottom" : "top",
      showCompleted: ((o = this._config) == null ? void 0 : o.show_completed_events) !== !1,
      now: this._currentNow
    };
  }
  renderMinimalDayBlock(e, i, o, n, a = !0) {
    var p, h;
    const r = ti(e, o), l = !!((p = this._config) != null && p.use_entity_color), s = ((h = this._config) == null ? void 0 : h.show_current_day) !== !1, c = vt(
      i,
      this.getDayFilterOptions()
    );
    return d`
      <div class="min-day-row">
        ${s ? d`
              <div class="min-date-col">
                <span class="min-date-day">${r.weekdayDay}</span>
                <span class="min-date-month">${r.month}</span>
              </div>
            ` : u}

        <div class="min-events-col">
          ${c.length === 0 ? d`<div class="min-empty-text">${n.noEvents}</div>` : c.map((m) => {
      const g = yt(
        m,
        this._currentNow,
        n
      ), f = m.allDay ? n.allDay : `${V(m.start)} - ${V(m.end)}`, y = l ? `--min-ev-accent: ${m.color};` : "", E = m.summary && m.summary !== "(Sin título)" ? m.summary : m.calendarName;
      return d`
                  <button
                    type="button"
                    class="min-event-item"
                    style=${y}
                    @click=${(O) => {
        O.stopPropagation(), this._selectedEvent = m;
      }}
                  >
                    <div class="min-event-top">
                      <div class="min-event-title-wrap">
                        <ha-icon class="min-event-icon" .icon=${m.icon}></ha-icon>
                        <span class="min-event-title">${E}</span>
                      </div>
                      <span class="min-event-time">${f}</span>
                    </div>

                    <div class="min-event-sub">
                      <span class="min-event-duration">${g.label}</span>
                      ${a ? d`
                            <div
                              class="min-progress-track"
                              role="progressbar"
                              aria-valuenow=${Math.round(g.progressPct)}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div
                                class="min-progress-fill"
                                style="width: ${g.progressPct}%;"
                              ></div>
                            </div>
                          ` : u}
                    </div>
                  </button>
                `;
    })}
        </div>
      </div>
    `;
  }
  _triggerFetchIfNeeded(e) {
    if (!this.hass || !this._config) return;
    const i = De(this._config, this.hass);
    if (i.length === 0) {
      this._events = [], this._failedEntities = [], this._lastFetchKey = "";
      return;
    }
    const { start: o, end: n } = this.getFetchRange(), r = `${i.map((l) => `${l.entity}|${l.name}|${l.color}|${l.icon}`).join(";")}::${o.toISOString()}::${n.toISOString()}`;
    !e && r === this._lastFetchKey || (this._lastFetchKey = r, this._loadEvents(i, o, n, e));
  }
  async _loadEvents(e, i, o, n) {
    if (!this.hass) return;
    const a = ++this._fetchRequestId;
    this._loading = !0;
    try {
      const r = await ai(
        this.hass,
        e,
        i,
        o,
        n
      );
      if (a !== this._fetchRequestId) return;
      this._events = r.events, this._failedEntities = r.failedEntities;
    } catch {
      if (a !== this._fetchRequestId) return;
      this._failedEntities = e.map((r) => r.entity);
    } finally {
      a === this._fetchRequestId && (this._loading = !1);
    }
  }
  _handleRefresh() {
    ni(), this._triggerFetchIfNeeded(!0);
  }
  _handleToggleEntity(e) {
    var n;
    const i = (n = e.detail) == null ? void 0 : n.entity;
    if (!i) return;
    const o = new Set(this._hiddenEntities);
    o.has(i) ? o.delete(i) : o.add(i), this._hiddenEntities = o;
  }
  _handleEventClick(e) {
    var i;
    this._selectedEvent = ((i = e.detail) == null ? void 0 : i.event) || null;
  }
  _handleDialogClose() {
    this._selectedEvent = null, this._selectedDayDate = null;
  }
  _handleSelectEventFromDay(e) {
    var i;
    this._selectedEvent = ((i = e.detail) == null ? void 0 : i.event) || null;
  }
  _getDayDialogEvents(e) {
    if (!this._selectedDayDate) return [];
    const i = this._selectedDayDate, o = new Date(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0, 0), n = new Date(i.getFullYear(), i.getMonth(), i.getDate() + 1, 0, 0, 0, 0);
    return e.filter((a) => {
      const r = a.start.getTime(), l = a.end.getTime();
      return l <= r ? r >= o.getTime() && r < n.getTime() : r < n.getTime() && l > o.getTime();
    });
  }
  render() {
    if (!this._config) return u;
    const e = ct(this._config.language, this.hass), i = Et(e, this.hass), o = lt[e], n = De(this._config, this.hass), a = this._events.filter(
      (p) => !this._hiddenEntities.has(p.calendarEntity)
    ), r = this.useSharedHeader(), l = this._config.show_entity_toggles !== !1, s = this.isMinimalSurface(), c = Gt(this._config);
    return d`
      <ha-card class=${c.className} style=${c.style}>
        ${!s || this._loading ? d`<div class="loading-bar ${this._loading ? "active" : ""}"></div>` : u}

        ${r ? d`
              <ha-calendar-shared-header
                .cardTitle=${this._config.title || ""}
                .periodLabel=${this.getPeriodLabel(i)}
                .entities=${n}
                .hiddenEntities=${this._hiddenEntities}
                .showEntityToggles=${l}
                .loading=${this._loading}
                .strings=${o}
                @cal-prev=${() => this.navigatePrev()}
                @cal-today=${() => this.navigateToday()}
                @cal-next=${() => this.navigateNext()}
                @cal-refresh=${() => this._handleRefresh()}
                @cal-toggle-entity=${this._handleToggleEntity}
              ></ha-calendar-shared-header>
            ` : u}

        ${this._failedEntities.length > 0 ? d`
              <div class="status-banner" role="status">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                <span>
                  ${o.errorLoading}: ${this._failedEntities.join(", ")}
                </span>
              </div>
            ` : u}

        ${n.length === 0 ? d`
              <div class="empty-state">
                <ha-icon icon="mdi:calendar-blank-multiple"></ha-icon>
                <div class="empty-state-title">${o.noCalendars}</div>
                <div class="empty-state-hint">${o.noCalendarsHint}</div>
              </div>
            ` : d`
              <div
                class="card-content-wrap ${s ? "minimal-pad" : ""}"
                @cal-event-click=${this._handleEventClick}
              >
                ${this.renderCalendarBody(
      a,
      n,
      i,
      e,
      o
    )}
              </div>
            `}
      </ha-card>

      <ha-calendar-event-dialog
        .event=${this._selectedEvent}
        .dayDate=${this._selectedDayDate}
        .dayEvents=${this._getDayDialogEvents(a)}
        .locale=${i}
        .lang=${e}
        .strings=${o}
        @cal-dialog-close=${this._handleDialogClose}
        @cal-select-event=${this._handleSelectEventFromDay}
      ></ha-calendar-event-dialog>
    `;
  }
};
He.styles = [le];
let w = He;
C([
  x({ attribute: !1 })
], w.prototype, "hass");
C([
  k()
], w.prototype, "_config");
C([
  k()
], w.prototype, "_anchorDate");
C([
  k()
], w.prototype, "_events");
C([
  k()
], w.prototype, "_loading");
C([
  k()
], w.prototype, "_failedEntities");
C([
  k()
], w.prototype, "_hiddenEntities");
C([
  k()
], w.prototype, "_selectedEvent");
C([
  k()
], w.prototype, "_selectedDayDate");
C([
  k()
], w.prototype, "_currentNow");
var pi = Object.defineProperty, ui = Object.getOwnPropertyDescriptor, bt = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? ui(e, i) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (n = (o ? r(e, i, n) : r(n)) || n);
  return o && n && pi(e, i, n), n;
};
let ge = class extends w {
  constructor() {
    super(...arguments), this._focusedDay = _(/* @__PURE__ */ new Date());
  }
  static getStubConfig(t) {
    return {
      type: `custom:${ve}`,
      entities: ye(t),
      first_day_of_week: 1,
      max_events_per_day: 3,
      show_header: !0,
      show_entity_toggles: !1,
      show_week_numbers: !1,
      compact: !0,
      transparent: !1,
      background_opacity: 100
    };
  }
  getCardSize() {
    return 5;
  }
  getGridOptions() {
    return {
      columns: 12,
      min_columns: 6,
      min_rows: 4
    };
  }
  getFetchRange() {
    const t = this._getGridDays();
    return {
      start: t[0].date,
      end: ce(t[t.length - 1].date)
    };
  }
  getPeriodLabel(t) {
    return Jt(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = it(this._anchorDate, -1), this._focusedDay = new Date(
      this._anchorDate.getFullYear(),
      this._anchorDate.getMonth(),
      1
    );
  }
  navigateNext() {
    this._anchorDate = it(this._anchorDate, 1), this._focusedDay = new Date(
      this._anchorDate.getFullYear(),
      this._anchorDate.getMonth(),
      1
    );
  }
  navigateToday() {
    const t = /* @__PURE__ */ new Date();
    this._anchorDate = new Date(t.getFullYear(), t.getMonth(), 1, 0, 0, 0, 0), this._focusedDay = _(t);
  }
  _getGridDays() {
    return Kt(
      this._anchorDate.getFullYear(),
      this._anchorDate.getMonth(),
      this.getFirstDayOfWeek()
    );
  }
  _openDayList(t) {
    this._selectedEvent = null, this._selectedDayDate = t;
  }
  _onEventPillClick(t, e) {
    t.stopPropagation(), this._selectedEvent = e;
  }
  renderCalendarBody(t, e, i, o, n) {
    const a = !!this._config.show_week_numbers, r = this._config.compact !== !1, l = Math.max(1, this._config.max_events_per_day ?? 3), s = this._config.show_current_day !== !1, c = this.getDayFilterOptions(), p = Qt(this.getFirstDayOfWeek(), i), h = this._getGridDays(), m = [];
    for (let f = 0; f < h.length; f += 7)
      m.push(h.slice(f, f + 7));
    const g = ie(t, this._focusedDay, c);
    return d`
      <div class="month-grid-wrap ${r ? "is-compact" : ""}">
        <div
          class="weekday-row ${a ? "with-weeks" : ""}"
          role="row"
        >
          ${a ? d`<div class="week-col-header">${n.weekAbbr}</div>` : u}
          ${p.map(
      (f) => d`<div class="weekday-cell">${f}</div>`
    )}
        </div>

        <div class="weeks-container">
          ${m.map(
      (f) => d`
              <div class="week-row ${a ? "with-weeks" : ""}">
                ${a ? d`<div class="week-number-cell">${f[0].weekNumber}</div>` : u}
                ${f.map((y) => {
        const E = ie(t, y.date, c), O = E.slice(0, l), j = E.length - O.length, be = te(y.date, this._focusedDay), W = s && y.isToday;
        return d`
                    <div
                      class="day-cell ${y.isCurrentMonth ? "" : "outside-month"} ${W ? "is-today" : ""} ${be ? "is-focused" : ""}"
                      @click=${() => {
          this._focusedDay = y.date;
        }}
                    >
                      <div class="day-cell-top">
                        <span class="day-num ${W ? "today-circle" : ""}">
                          ${y.date.getDate()}
                        </span>
                      </div>

                      <div class="day-events">
                        ${O.map(
          (b) => b.allDay ? d`
                                <button
                                  type="button"
                                  class="event-pill all-day"
                                  style="--ev-color: ${b.color};"
                                  title=${`${b.calendarName}: ${b.summary}`}
                                  @click=${(v) => this._onEventPillClick(v, b)}
                                >
                                  <ha-icon class="pill-icon" .icon=${b.icon}></ha-icon>
                                  <span class="pill-text">${b.summary}</span>
                                </button>
                              ` : d`
                                <button
                                  type="button"
                                  class="event-pill timed"
                                  style="--ev-color: ${b.color}; --ev-bg: ${ue(
            b.color,
            0.14
          )};"
                                  title=${`${V(b.start)} ${b.summary} (${b.calendarName})`}
                                  @click=${(v) => this._onEventPillClick(v, b)}
                                >
                                  <span class="pill-dot"></span>
                                  <span class="pill-time">
                                    ${V(b.start)}
                                  </span>
                                  <span class="pill-text">${b.summary}</span>
                                </button>
                              `
        )}

                        ${j > 0 ? d`
                              <button
                                type="button"
                                class="more-btn"
                                @click=${(b) => {
          b.stopPropagation(), this._openDayList(y.date);
        }}
                              >
                                +${j} ${n.moreEvents}
                              </button>
                            ` : u}
                      </div>
                    </div>
                  `;
      })}
              </div>
            `
    )}
        </div>
      </div>

      ${g.length > 0 ? d`
            <div class="month-focused-summary">
              ${this.renderMinimalDayBlock(
      this._focusedDay,
      g,
      i,
      n,
      !0
    )}
            </div>
          ` : u}
    `;
  }
};
ge.styles = [
  le,
  I`
      .month-grid-wrap {
        border: 1px solid color-mix(in srgb, var(--cal-text-primary) 14%, transparent);
        border-radius: 14px;
        overflow: hidden;
        background: transparent;
      }

      .weekday-row,
      .week-row {
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
      }

      .weekday-row.with-weeks,
      .week-row.with-weeks {
        grid-template-columns: 32px repeat(7, minmax(0, 1fr));
      }

      .weekday-row {
        background: var(--cal-surface-alt);
        border-bottom: 1px solid color-mix(in srgb, var(--cal-text-primary) 12%, transparent);
      }

      .week-col-header,
      .weekday-cell {
        padding: 7px 4px;
        text-align: center;
        font-size: 0.72rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        color: var(--cal-text-secondary);
      }

      .week-row {
        border-bottom: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
      }

      .week-row:last-child {
        border-bottom: none;
      }

      .week-number-cell {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 7px;
        font-size: 0.68rem;
        font-weight: 600;
        color: var(--cal-text-secondary);
        background: var(--cal-surface-alt);
        border-right: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
      }

      .day-cell {
        min-height: 82px;
        padding: 4px;
        border-right: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-width: 0;
        cursor: pointer;
        transition: background-color 0.12s ease;
      }

      .month-grid-wrap.is-compact .day-cell {
        min-height: 64px;
        padding: 3px;
      }

      .day-cell:last-child {
        border-right: none;
      }

      .day-cell:hover {
        background: var(--cal-surface-alt);
      }

      .day-cell.outside-month {
        opacity: 0.45;
      }

      .day-cell.is-today {
        background: rgba(26, 115, 232, 0.08);
      }

      .day-cell.is-focused {
        box-shadow: inset 0 0 0 1.5px color-mix(in srgb, var(--cal-accent) 60%, transparent);
      }

      .day-cell-top {
        display: flex;
        justify-content: flex-end;
        padding: 1px 2px;
      }

      .day-num {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--cal-text-primary);
      }

      .day-num.today-circle {
        background: var(--cal-today-ring);
        color: var(--text-primary-color, #ffffff);
      }

      .day-events {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      .event-pill {
        appearance: none;
        border: none;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 2px 4px;
        border-radius: 4px;
        font-family: inherit;
        font-size: 0.71rem;
        line-height: 1.25;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        box-sizing: border-box;
      }

      .event-pill.all-day {
        background: var(--ev-color);
        color: #ffffff;
        font-weight: 600;
      }

      .event-pill.timed {
        background: var(--ev-bg);
        border-left: 2.5px solid var(--ev-color);
        color: var(--cal-text-primary);
      }

      .event-pill:hover {
        filter: brightness(0.94);
      }

      .pill-icon {
        --mdc-icon-size: 11px;
        flex-shrink: 0;
      }

      .pill-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--ev-color);
        flex-shrink: 0;
      }

      .pill-time {
        font-size: 0.66rem;
        font-weight: 600;
        color: var(--cal-text-secondary);
        flex-shrink: 0;
      }

      .pill-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
      }

      .more-btn {
        appearance: none;
        border: none;
        background: transparent;
        color: var(--cal-accent);
        font-family: inherit;
        font-size: 0.69rem;
        font-weight: 600;
        text-align: left;
        padding: 1px 4px;
        cursor: pointer;
        border-radius: 4px;
      }

      .more-btn:hover {
        background: var(--cal-surface-alt);
      }

      .month-focused-summary {
        margin-top: 4px;
        padding: 10px 12px;
        border-radius: 14px;
        background: var(--cal-surface-alt);
        border: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
      }

      @media (max-width: 560px) {
        .day-cell,
        .month-grid-wrap.is-compact .day-cell {
          min-height: 56px;
          padding: 2px;
        }

        .pill-time {
          display: none;
        }

        .event-pill {
          padding: 1px 3px;
          font-size: 0.66rem;
        }
      }
    `
];
bt([
  k()
], ge.prototype, "_focusedDay", 2);
ge = bt([
  L(ve)
], ge);
var mi = Object.getOwnPropertyDescriptor, gi = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? mi(e, i) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (n = r(n) || n);
  return n;
};
let Ae = class extends w {
  static getStubConfig(t) {
    return {
      type: `custom:${oe}`,
      entities: ye(t),
      first_day_of_week: 1,
      days_to_show: 7,
      show_week_number: !0,
      show_progress_bar: !0,
      show_empty_days: !1,
      show_navigation: !1,
      transparent: !1,
      background_opacity: 100
    };
  }
  getCardSize() {
    return 4;
  }
  getGridOptions() {
    return {
      columns: 12,
      min_columns: 6
    };
  }
  useSharedHeader() {
    return !1;
  }
  isMinimalSurface() {
    return !0;
  }
  _getDaysCount() {
    var e;
    const t = (e = this._config) == null ? void 0 : e.days_to_show;
    return typeof t == "number" && !Number.isNaN(t) ? Math.max(1, Math.min(14, Math.floor(t))) : 7;
  }
  _getVisibleDays() {
    return qt(
      this._anchorDate,
      this.getFirstDayOfWeek(),
      this._getDaysCount()
    );
  }
  getFetchRange() {
    const t = this._getVisibleDays();
    return {
      start: t[0],
      end: ce(t[t.length - 1])
    };
  }
  getPeriodLabel(t) {
    return ot(this._getVisibleDays(), t);
  }
  navigatePrev() {
    this._anchorDate = $(this._anchorDate, -this._getDaysCount());
  }
  navigateNext() {
    this._anchorDate = $(this._anchorDate, this._getDaysCount());
  }
  navigateToday() {
    this._anchorDate = _(/* @__PURE__ */ new Date());
  }
  renderCalendarBody(t, e, i, o, n) {
    const a = this._getVisibleDays(), r = this._config.show_week_number !== !1, l = this._config.show_progress_bar !== !1, s = !!this._config.show_navigation, c = !!this._config.show_empty_days, p = Fe(a[0] || this._anchorDate), h = this.getDayFilterOptions(), m = a.map((y) => ({
      day: y,
      events: ie(t, y, h)
    })), g = c ? m : m.filter((y) => y.events.length > 0), f = g.length > 0 ? g : [m[0]];
    return d`
      ${r || s ? d`
            <div class="minimal-top-bar">
              <div class="week-header-left">
                ${r ? d`<span class="week-pill">${dt(p, o, n)}</span>` : u}
                <span class="week-range-sub">${ot(a, i)}</span>
              </div>

              ${s ? d`
                    <div class="min-nav-group">
                      <button
                        type="button"
                        class="min-nav-btn"
                        title=${n.prev}
                        aria-label=${n.prev}
                        @click=${() => this.navigatePrev()}
                      >
                        <ha-icon icon="mdi:chevron-left"></ha-icon>
                      </button>
                      <button
                        type="button"
                        class="min-today-btn"
                        @click=${() => this.navigateToday()}
                      >
                        ${n.today}
                      </button>
                      <button
                        type="button"
                        class="min-nav-btn"
                        title=${n.next}
                        aria-label=${n.next}
                        @click=${() => this.navigateNext()}
                      >
                        <ha-icon icon="mdi:chevron-right"></ha-icon>
                      </button>
                    </div>
                  ` : u}
            </div>
          ` : u}

      <div class="min-days-stack">
        ${f.map(
      (y, E) => d`
            <div class="week-day-entry ${E > 0 ? "has-divider" : ""}">
              ${this.renderMinimalDayBlock(
        y.day,
        y.events,
        i,
        n,
        l
      )}
            </div>
          `
    )}
      </div>
    `;
  }
};
Ae.styles = [
  le,
  I`
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
    `
];
Ae = gi([
  L(oe)
], Ae);
var vi = Object.getOwnPropertyDescriptor, fi = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? vi(e, i) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (n = r(n) || n);
  return n;
};
let Te = class extends w {
  static getStubConfig(t) {
    return {
      type: `custom:${re}`,
      entities: ye(t),
      show_week_number: !0,
      show_progress_bar: !0,
      show_navigation: !1,
      transparent: !1,
      background_opacity: 100
    };
  }
  getCardSize() {
    return 2;
  }
  getGridOptions() {
    return {
      columns: 12,
      min_columns: 6
    };
  }
  useSharedHeader() {
    return !1;
  }
  isMinimalSurface() {
    return !0;
  }
  getFetchRange() {
    return {
      start: _(this._anchorDate),
      end: ce(this._anchorDate)
    };
  }
  getPeriodLabel(t) {
    return Be(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = $(this._anchorDate, -1);
  }
  navigateNext() {
    this._anchorDate = $(this._anchorDate, 1);
  }
  navigateToday() {
    this._anchorDate = _(/* @__PURE__ */ new Date());
  }
  renderCalendarBody(t, e, i, o, n) {
    const a = ie(
      t,
      this._anchorDate,
      this.getDayFilterOptions()
    ), r = this._config.show_week_number !== !1, l = this._config.show_progress_bar !== !1, s = !!this._config.show_navigation, c = Fe(this._anchorDate);
    return d`
      ${r || s ? d`
            <div class="minimal-top-bar">
              ${r ? d`<span class="week-pill">${dt(c, o, n)}</span>` : d`<span></span>`}

              ${s ? d`
                    <div class="min-nav-group">
                      <button
                        type="button"
                        class="min-nav-btn"
                        title=${n.prev}
                        aria-label=${n.prev}
                        @click=${() => this.navigatePrev()}
                      >
                        <ha-icon icon="mdi:chevron-left"></ha-icon>
                      </button>
                      <button
                        type="button"
                        class="min-today-btn"
                        @click=${() => this.navigateToday()}
                      >
                        ${n.today}
                      </button>
                      <button
                        type="button"
                        class="min-nav-btn"
                        title=${n.next}
                        aria-label=${n.next}
                        @click=${() => this.navigateNext()}
                      >
                        <ha-icon icon="mdi:chevron-right"></ha-icon>
                      </button>
                    </div>
                  ` : u}
            </div>
          ` : u}

      <div class="min-days-stack">
        ${this.renderMinimalDayBlock(
      this._anchorDate,
      a,
      i,
      n,
      l
    )}
      </div>
    `;
  }
};
Te.styles = [le];
Te = fi([
  L(re)
], Te);
var yi = Object.getOwnPropertyDescriptor, bi = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? yi(e, i) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (n = r(n) || n);
  return n;
};
let Me = class extends w {
  static getStubConfig(t) {
    return {
      type: `custom:${ae}`,
      title: "Agenda actual",
      entities: ye(t),
      max_previous_events: 2,
      max_upcoming_events: 2,
      show_all_day_events: !0,
      all_day_position: "top",
      show_completed_events: !0,
      show_progress_bar: !0,
      show_entity_toggles: !1,
      transparent: !1,
      background_opacity: 100
    };
  }
  getCardSize() {
    return 2;
  }
  getGridOptions() {
    return {
      columns: 6,
      min_columns: 3
    };
  }
  autoFollowToday() {
    return !0;
  }
  useSharedHeader() {
    return !1;
  }
  isMinimalSurface() {
    return !0;
  }
  getFetchRange() {
    return {
      start: _(this._anchorDate),
      end: ce(this._anchorDate)
    };
  }
  getPeriodLabel(t) {
    return Be(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = $(this._anchorDate, -1);
  }
  navigateNext() {
    this._anchorDate = $(this._anchorDate, 1);
  }
  navigateToday() {
    this._anchorDate = _(/* @__PURE__ */ new Date());
  }
  _renderSectionHeader(t) {
    return d`
      <div class="evcard-divider" role="separator">
        <span class="evcard-line"></span>
        <span class="evcard-section-label">${t}</span>
        <span class="evcard-line"></span>
      </div>
    `;
  }
  _renderCompactEventRow(t, e, i, o) {
    var c;
    const a = !!((c = this._config) != null && c.use_entity_color) ? `--min-ev-accent: ${t.color};` : "", r = t.summary && t.summary !== "(Sin título)" ? t.summary : t.calendarName, l = Xt(t, e, i.allDay), s = o.isCurrent ? yt(t, this._currentNow, i) : null;
    return d`
      <button
        type="button"
        class="evcard-row ${o.isCurrent ? "is-current" : ""} ${o.isPrevious ? "is-previous" : ""}"
        style=${a}
        @click=${(p) => {
      p.stopPropagation(), this._selectedEvent = t;
    }}
      >
        <div class="evcard-row-line">
          <ha-icon class="evcard-ev-icon" .icon=${t.icon}></ha-icon>
          <span class="evcard-ev-summary">${r}</span>
          <span class="evcard-ev-sep">-</span>
          <span class="evcard-ev-time">${l}</span>
        </div>

        ${o.isCurrent && o.showProgressBar && s ? d`
              <div
                class="min-progress-track evcard-progress"
                role="progressbar"
                aria-valuenow=${Math.round(s.progressPct)}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="min-progress-fill"
                  style="width: ${s.progressPct}%;"
                ></div>
              </div>
            ` : u}
      </button>
    `;
  }
  renderCalendarBody(t, e, i, o, n) {
    const a = this._currentNow.getTime(), r = this._config.show_all_day_events !== !1, l = this._config.all_day_position === "bottom" ? "bottom" : "top", s = this._config.show_completed_events !== !1, c = this._config.show_progress_bar !== !1, p = !!this._config.show_entity_toggles, h = typeof this._config.max_previous_events == "number" ? Math.max(0, Math.floor(this._config.max_previous_events)) : 2, m = typeof this._config.max_upcoming_events == "number" ? Math.max(0, Math.floor(this._config.max_upcoming_events)) : 2, g = ie(t, this._anchorDate, {
      showAllDay: r,
      allDayPosition: l,
      showCompleted: !0,
      now: this._currentNow
    }), f = g.filter(
      (v) => !v.allDay && v.end.getTime() <= a
    ), y = s && h > 0 ? f.slice(-h) : [], E = g.filter(
      (v) => !v.allDay && v.start.getTime() <= a && v.end.getTime() > a
    ), O = g.filter((v) => v.allDay), j = l === "bottom" ? [...E, ...O] : [...O, ...E], be = g.filter(
      (v) => !v.allDay && v.start.getTime() > a
    ), W = m > 0 ? be.slice(0, m) : [], b = y.length > 0 || j.length > 0 || W.length > 0;
    return d`
      <div class="evcard-root">
        ${this._config.title || p && e.length > 0 ? d`
              <div class="evcard-titlebar">
                ${this._config.title ? d`
                      <div class="evcard-title-left">
                        <ha-icon icon="mdi:calendar-clock-outline"></ha-icon>
                        <span class="evcard-title-text">${this._config.title}</span>
                      </div>
                    ` : d`<span></span>`}

                ${p && e.length > 0 ? d`
                      <div class="evcard-mini-chips">
                        ${e.map((v) => {
      const _t = this._hiddenEntities.has(v.entity);
      return d`
                            <button
                              type="button"
                              class="evcard-chip ${_t ? "is-hidden" : ""}"
                              title=${v.name}
                              style="--chip-color: ${v.color};"
                              @click=${() => this._handleToggleEntity(
        new CustomEvent("cal-toggle-entity", {
          detail: { entity: v.entity }
        })
      )}
                            >
                              <span class="evcard-chip-dot"></span>
                              <span class="evcard-chip-name">${v.name}</span>
                            </button>
                          `;
    })}
                      </div>
                    ` : u}
              </div>
            ` : u}

        ${b ? d`
              <div class="evcard-sections">
                ${y.length > 0 ? d`
                      <div class="evcard-section">
                        ${this._renderSectionHeader(n.previousEventsSection)}
                        <div class="evcard-list">
                          ${y.map(
      (v) => this._renderCompactEventRow(v, o, n, {
        isCurrent: !1,
        isPrevious: !0,
        showProgressBar: c
      })
    )}
                        </div>
                      </div>
                    ` : u}

                <div class="evcard-section">
                  ${this._renderSectionHeader(n.currentEventsSection)}
                  ${j.length === 0 ? d`
                        <div class="evcard-empty-inline">
                          ${n.noCurrentEvents}
                        </div>
                      ` : d`
                        <div class="evcard-list">
                          ${j.map(
      (v) => this._renderCompactEventRow(v, o, n, {
        isCurrent: !0,
        showProgressBar: c
      })
    )}
                        </div>
                      `}
                </div>

                ${W.length > 0 ? d`
                      <div class="evcard-section">
                        ${this._renderSectionHeader(n.upcomingEventsSection)}
                        <div class="evcard-list">
                          ${W.map(
      (v) => this._renderCompactEventRow(v, o, n, {
        isCurrent: !1,
        showProgressBar: c
      })
    )}
                        </div>
                      </div>
                    ` : u}
              </div>
            ` : d`<div class="evcard-empty">${n.noEvents}</div>`}
      </div>
    `;
  }
};
Me.styles = [
  le,
  I`
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
    `
];
Me = bi([
  L(ae)
], Me);
var _i = Object.defineProperty, wi = Object.getOwnPropertyDescriptor, Re = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? wi(e, i) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (n = (o ? r(e, i, n) : r(n)) || n);
  return o && n && _i(e, i, n), n;
};
let ne = class extends P {
  setConfig(t) {
    this._config = { ...t };
  }
  _getEntities() {
    return this._config ? (Array.isArray(this._config.entities) && this._config.entities.length > 0 ? this._config.entities : this._config.entity ? [this._config.entity] : []).map(
      (e) => typeof e == "string" ? { entity: e } : { ...e }
    ) : [];
  }
  _emitConfig(t) {
    this._config = t, this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _updateField(t, e) {
    if (!this._config) return;
    const i = { ...this._config };
    e === void 0 || e === "" ? delete i[t] : i[t] = e, this._emitConfig(i);
  }
  _updateEntities(t) {
    if (!this._config) return;
    const e = {
      ...this._config,
      entities: t
    };
    delete e.entity, this._emitConfig(e);
  }
  _updateEntityAt(t, e) {
    const i = this._getEntities(), o = { ...i[t], ...e };
    o.name || delete o.name, o.icon || delete o.icon, o.color || delete o.color, i[t] = o, this._updateEntities(i);
  }
  _addEntity() {
    var a;
    const t = this._getEntities(), e = new Set(t.map((r) => r.entity)), i = Object.keys(((a = this.hass) == null ? void 0 : a.states) || {}).filter((r) => r.startsWith("calendar.")).sort(), o = i.find((r) => !e.has(r)) || i[0] || "", n = D[t.length % D.length];
    t.push({
      entity: o,
      color: n,
      icon: Se
    }), this._updateEntities(t);
  }
  _removeEntity(t) {
    const e = this._getEntities();
    e.splice(t, 1), this._updateEntities(e);
  }
  _moveEntity(t, e) {
    const i = this._getEntities(), o = t + e;
    if (o < 0 || o >= i.length) return;
    const [n] = i.splice(t, 1);
    i.splice(o, 0, n), this._updateEntities(i);
  }
  _getCardKind() {
    var e;
    const t = (((e = this._config) == null ? void 0 : e.type) || "").toLowerCase();
    return t.includes(ae) || t.includes("event") ? "event" : t.includes(oe) || t.includes("week") ? "week" : t.includes(re) || t.includes("day") ? "day" : "month";
  }
  _normalizeHexForColorInput(t, e = 0) {
    const i = (t || "").trim();
    return /^#[0-9a-f]{6}$/i.test(i) ? i : D[e % D.length];
  }
  _renderEntitySelector(t, e) {
    var n;
    if (!!customElements.get("ha-entity-picker"))
      return d`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${t.entity || ""}
          .includeDomains=${["calendar"]}
          allow-custom-entity
          @value-changed=${(a) => this._updateEntityAt(e, { entity: a.detail.value })}
        ></ha-entity-picker>
      `;
    const o = Object.keys(((n = this.hass) == null ? void 0 : n.states) || {}).filter((a) => a.startsWith("calendar.")).sort();
    return d`
      <div class="entity-fallback-inputs">
        ${o.length > 0 ? d`
              <select
                .value=${o.includes(t.entity) ? t.entity : ""}
                @change=${(a) => {
      const r = a.target.value;
      r && this._updateEntityAt(e, { entity: r });
    }}
              >
                <option value="">-- calendar.* --</option>
                ${o.map((a) => {
      var l, s, c, p;
      const r = (p = (c = (s = (l = this.hass) == null ? void 0 : l.states) == null ? void 0 : s[a]) == null ? void 0 : c.attributes) == null ? void 0 : p.friendly_name;
      return d`
                    <option value=${a} ?selected=${t.entity === a}>
                      ${r ? `${r} (${a})` : a}
                    </option>
                  `;
    })}
              </select>
            ` : u}
        <input
          type="text"
          .value=${t.entity || ""}
          placeholder="calendar.personal"
          @change=${(a) => this._updateEntityAt(e, {
      entity: a.target.value.trim()
    })}
        />
      </div>
    `;
  }
  _renderIconInput(t, e) {
    return customElements.get("ha-icon-picker") ? d`
        <ha-icon-picker
          .hass=${this.hass}
          .value=${t.icon || ""}
          @value-changed=${(o) => this._updateEntityAt(e, { icon: o.detail.value })}
        ></ha-icon-picker>
      ` : d`
      <div class="icon-preview-input">
        <ha-icon .icon=${t.icon || Se}></ha-icon>
        <input
          type="text"
          .value=${t.icon || ""}
          placeholder="mdi:calendar"
          @change=${(o) => this._updateEntityAt(e, {
      icon: o.target.value.trim()
    })}
        />
      </div>
    `;
  }
  render() {
    if (!this._config) return u;
    const t = ct(this._config.language, this.hass), e = lt[t], i = this._getCardKind(), o = this._getEntities(), n = this._config.first_day_of_week ?? 1, a = this._config.language, r = i !== "month", l = typeof this._config.background_opacity == "number" ? this._config.background_opacity : this._config.transparent ? 0 : 100;
    return d`
      <div class="editor-root">
        <!-- General Section -->
        <div class="section">
          <div class="section-title">${e.editorGeneralSection}</div>

          <div class="field">
            <label>${e.editorTitle}</label>
            <input
              type="text"
              .value=${this._config.title || ""}
              placeholder=${e.editorTitlePlaceholder}
              @change=${(s) => this._updateField("title", s.target.value)}
            />
          </div>

          <div class="two-col">
            <div class="field">
              <label>${e.editorFirstDay}</label>
              <select
                .value=${String(n)}
                @change=${(s) => this._updateField(
      "first_day_of_week",
      Number(s.target.value)
    )}
              >
                <option value="1" ?selected=${n === 1}>
                  ${e.editorMonday}
                </option>
                <option value="0" ?selected=${n === 0}>
                  ${e.editorSunday}
                </option>
              </select>
            </div>

            <div class="field">
              <label>${e.editorLanguage}</label>
              <select
                .value=${this._config.language || ""}
                @change=${(s) => this._updateField(
      "language",
      s.target.value || void 0
    )}
              >
                <option value="">${e.editorLangAuto}</option>
                ${Object.keys(We).map(
      (s) => d`
                    <option value=${s} ?selected=${a === s}>
                      ${We[s]}
                    </option>
                  `
    )}
              </select>
            </div>
          </div>

          <div class="toggles-list">
            ${i === "event" ? d`
                  <label class="checkbox-row">
                    <input
                      type="checkbox"
                      .checked=${!!this._config.show_entity_toggles}
                      @change=${(s) => this._updateField(
      "show_entity_toggles",
      s.target.checked
    )}
                    />
                    <span>${e.editorShowToggles}</span>
                  </label>
                ` : r ? d`
                    <label class="checkbox-row">
                      <input
                        type="checkbox"
                        .checked=${!!this._config.show_navigation}
                        @change=${(s) => this._updateField(
      "show_navigation",
      s.target.checked
    )}
                      />
                      <span>${e.editorShowNavigation}</span>
                    </label>
                  ` : d`
                    <label class="checkbox-row">
                      <input
                        type="checkbox"
                        .checked=${this._config.show_header !== !1}
                        @change=${(s) => this._updateField(
      "show_header",
      s.target.checked
    )}
                      />
                      <span>${e.editorShowHeader}</span>
                    </label>

                    <label class="checkbox-row">
                      <input
                        type="checkbox"
                        .checked=${this._config.show_entity_toggles !== !1}
                        @change=${(s) => this._updateField(
      "show_entity_toggles",
      s.target.checked
    )}
                      />
                      <span>${e.editorShowToggles}</span>
                    </label>
                  `}
          </div>
        </div>

        <!-- Appearance & Transparency Section -->
        <div class="section">
          <div class="section-title">${e.editorAppearanceSection}</div>

          <div class="toggles-list">
            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${!!this._config.transparent}
                @change=${(s) => this._updateField(
      "transparent",
      s.target.checked
    )}
              />
              <span>${e.editorTransparent}</span>
            </label>

            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${!!this._config.use_entity_color}
                @change=${(s) => this._updateField(
      "use_entity_color",
      s.target.checked
    )}
              />
              <span>${e.editorUseEntityColor}</span>
            </label>
          </div>

          <div class="two-col">
            <div class="field">
              <label>${e.editorBackgroundOpacity}: ${l}%</label>
              <input
                type="range"
                min="0"
                max="100"
                .value=${String(l)}
                @input=${(s) => this._updateField(
      "background_opacity",
      Math.max(0, Math.min(100, Number(s.target.value) || 0))
    )}
              />
            </div>

            <div class="field">
              <label>${e.editorBackdropBlur}</label>
              <input
                type="number"
                min="0"
                max="40"
                .value=${String(this._config.backdrop_blur ?? 0)}
                @change=${(s) => this._updateField(
      "backdrop_blur",
      Math.max(0, Math.min(40, Number(s.target.value) || 0))
    )}
              />
            </div>
          </div>

          <div class="two-col">
            <div class="field">
              <label>${e.editorBackgroundColor}</label>
              <input
                type="text"
                .value=${this._config.background_color || ""}
                placeholder="#1c1d21"
                @change=${(s) => this._updateField(
      "background_color",
      s.target.value.trim()
    )}
              />
            </div>

            <div class="field">
              <label>${e.editorBorderRadius}</label>
              <input
                type="number"
                min="0"
                max="48"
                .value=${String(this._config.border_radius ?? 24)}
                @change=${(s) => this._updateField(
      "border_radius",
      Math.max(0, Math.min(48, Number(s.target.value) || 0))
    )}
              />
            </div>
          </div>

          <div class="two-col">
            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${!!this._config.hide_border}
                @change=${(s) => this._updateField(
      "hide_border",
      s.target.checked
    )}
              />
              <span>${e.editorHideBorder}</span>
            </label>

            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${!!this._config.hide_shadow}
                @change=${(s) => this._updateField(
      "hide_shadow",
      s.target.checked
    )}
              />
              <span>${e.editorHideShadow}</span>
            </label>
          </div>
        </div>

        <!-- Card View Section -->
        <div class="section">
          <div class="section-title">${e.editorViewSection}</div>

          <div class="toggles-list">
            ${i !== "event" ? d`
                  <label class="checkbox-row">
                    <input
                      type="checkbox"
                      .checked=${this._config.show_current_day !== !1}
                      @change=${(s) => this._updateField(
      "show_current_day",
      s.target.checked
    )}
                    />
                    <span>${e.editorShowCurrentDay}</span>
                  </label>
                ` : u}

            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${this._config.show_all_day_events !== !1}
                @change=${(s) => this._updateField(
      "show_all_day_events",
      s.target.checked
    )}
              />
              <span>${e.editorShowAllDayEvents}</span>
            </label>

            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${this._config.show_completed_events !== !1}
                @change=${(s) => this._updateField(
      "show_completed_events",
      s.target.checked
    )}
              />
              <span>${e.editorShowCompletedEvents}</span>
            </label>
          </div>

          ${this._config.show_all_day_events !== !1 ? d`
                <div class="field">
                  <label>${e.editorAllDayPosition}</label>
                  <select
                    .value=${this._config.all_day_position || "top"}
                    @change=${(s) => this._updateField(
      "all_day_position",
      s.target.value
    )}
                  >
                    <option
                      value="top"
                      ?selected=${(this._config.all_day_position || "top") === "top"}
                    >
                      ${e.editorPositionTop}
                    </option>
                    <option
                      value="bottom"
                      ?selected=${this._config.all_day_position === "bottom"}
                    >
                      ${e.editorPositionBottom}
                    </option>
                  </select>
                </div>
              ` : u}

          ${i === "month" ? this._renderMonthOptions(this._config, e) : i === "week" ? this._renderWeekOptions(this._config, e) : i === "event" ? this._renderEventOptions(this._config, e) : this._renderDayOptions(this._config, e)}
        </div>

        <!-- Multi-entity Section -->
        <div class="section">
          <div class="section-header-row">
            <div class="section-title">${e.editorEntitiesTitle}</div>
            <button
              type="button"
              class="add-btn"
              @click=${() => this._addEntity()}
            >
              <ha-icon icon="mdi:plus"></ha-icon>
              <span>${e.editorAddEntity}</span>
            </button>
          </div>

          ${o.length === 0 ? d`<div class="empty-entities">${e.editorNoEntities}</div>` : d`
                <div class="entities-list">
                  ${o.map((s, c) => {
      const p = this._normalizeHexForColorInput(
        s.color,
        c
      );
      return d`
                      <div class="entity-card">
                        <div class="entity-card-top">
                          <span
                            class="entity-badge"
                            style="--badge-color: ${p};"
                          >
                            #${c + 1}
                          </span>
                          <div class="entity-actions">
                            <button
                              type="button"
                              class="mini-icon-btn"
                              ?disabled=${c === 0}
                              @click=${() => this._moveEntity(c, -1)}
                            >
                              <ha-icon icon="mdi:arrow-up"></ha-icon>
                            </button>
                            <button
                              type="button"
                              class="mini-icon-btn"
                              ?disabled=${c === o.length - 1}
                              @click=${() => this._moveEntity(c, 1)}
                            >
                              <ha-icon icon="mdi:arrow-down"></ha-icon>
                            </button>
                            <button
                              type="button"
                              class="mini-icon-btn danger"
                              title=${e.editorRemove}
                              @click=${() => this._removeEntity(c)}
                            >
                              <ha-icon icon="mdi:delete-outline"></ha-icon>
                            </button>
                          </div>
                        </div>

                        <div class="field">
                          <label>${e.editorEntity}</label>
                          ${this._renderEntitySelector(s, c)}
                        </div>

                        <div class="two-col">
                          <div class="field">
                            <label>${e.editorCustomName}</label>
                            <input
                              type="text"
                              .value=${s.name || ""}
                              placeholder="Ej. Personal"
                              @change=${(h) => this._updateEntityAt(c, {
        name: h.target.value.trim()
      })}
                            />
                          </div>

                          <div class="field">
                            <label>${e.editorCustomColor}</label>
                            <div class="color-row">
                              <input
                                type="color"
                                .value=${p}
                                @input=${(h) => this._updateEntityAt(c, {
        color: h.target.value
      })}
                              />
                              <input
                                type="text"
                                .value=${s.color || p}
                                @change=${(h) => this._updateEntityAt(c, {
        color: h.target.value.trim()
      })}
                              />
                            </div>
                          </div>
                        </div>

                        <div class="field">
                          <label>${e.editorCustomIcon}</label>
                          ${this._renderIconInput(s, c)}
                        </div>
                      </div>
                    `;
    })}
                </div>
              `}
        </div>
      </div>
    `;
  }
  _renderMonthOptions(t, e) {
    return d`
      <div class="field">
        <label>${e.editorMaxEvents}</label>
        <input
          type="number"
          min="1"
          max="12"
          .value=${String(t.max_events_per_day ?? 3)}
          @change=${(i) => this._updateField(
      "max_events_per_day",
      Math.max(1, Number(i.target.value) || 3)
    )}
        />
      </div>

      <div class="toggles-list">
        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${!!t.show_week_numbers}
            @change=${(i) => this._updateField(
      "show_week_numbers",
      i.target.checked
    )}
          />
          <span>${e.editorShowWeekNumbers}</span>
        </label>

        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${t.compact !== !1}
            @change=${(i) => this._updateField(
      "compact",
      i.target.checked
    )}
          />
          <span>${e.editorCompact}</span>
        </label>
      </div>
    `;
  }
  _renderWeekOptions(t, e) {
    return d`
      <div class="field">
        <label>${e.editorDaysToShow}</label>
        <input
          type="number"
          min="1"
          max="14"
          .value=${String(t.days_to_show ?? 7)}
          @change=${(i) => this._updateField(
      "days_to_show",
      Math.max(1, Math.min(14, Number(i.target.value) || 7))
    )}
        />
      </div>

      <div class="toggles-list">
        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${t.show_week_number !== !1}
            @change=${(i) => this._updateField(
      "show_week_number",
      i.target.checked
    )}
          />
          <span>${e.editorShowWeekNumber}</span>
        </label>

        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${t.show_progress_bar !== !1}
            @change=${(i) => this._updateField(
      "show_progress_bar",
      i.target.checked
    )}
          />
          <span>${e.editorShowProgressBar}</span>
        </label>

        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${!!t.show_empty_days}
            @change=${(i) => this._updateField(
      "show_empty_days",
      i.target.checked
    )}
          />
          <span>${e.editorShowEmptyDays}</span>
        </label>
      </div>
    `;
  }
  _renderDayOptions(t, e) {
    return d`
      <div class="toggles-list">
        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${t.show_week_number !== !1}
            @change=${(i) => this._updateField(
      "show_week_number",
      i.target.checked
    )}
          />
          <span>${e.editorShowWeekNumber}</span>
        </label>

        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${t.show_progress_bar !== !1}
            @change=${(i) => this._updateField(
      "show_progress_bar",
      i.target.checked
    )}
          />
          <span>${e.editorShowProgressBar}</span>
        </label>
      </div>
    `;
  }
  _renderEventOptions(t, e) {
    return d`
      <div class="two-col">
        <div class="field">
          <label>${e.editorMaxPreviousEvents}</label>
          <input
            type="number"
            min="0"
            max="10"
            .value=${String(t.max_previous_events ?? 2)}
            @change=${(i) => this._updateField(
      "max_previous_events",
      Math.max(0, Math.min(10, Number(i.target.value) || 0))
    )}
          />
        </div>

        <div class="field">
          <label>${e.editorMaxUpcomingEvents}</label>
          <input
            type="number"
            min="0"
            max="10"
            .value=${String(t.max_upcoming_events ?? 2)}
            @change=${(i) => this._updateField(
      "max_upcoming_events",
      Math.max(0, Math.min(10, Number(i.target.value) || 0))
    )}
          />
        </div>
      </div>

      <div class="toggles-list">
        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${t.show_progress_bar !== !1}
            @change=${(i) => this._updateField(
      "show_progress_bar",
      i.target.checked
    )}
          />
          <span>${e.editorShowProgressBar}</span>
        </label>
      </div>
    `;
  }
};
ne.styles = I`
    :host {
      display: block;
    }

    .editor-root {
      display: flex;
      flex-direction: column;
      gap: 16px;
      color: var(--primary-text-color, #212121);
    }

    .section {
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25));
      border-radius: 10px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: var(--card-background-color, transparent);
    }

    .section-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
    }

    .section-title {
      font-size: 0.92rem;
      font-weight: 700;
      color: var(--primary-text-color, #212121);
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .field label {
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--secondary-text-color, #727272);
    }

    input[type='text'],
    input[type='number'],
    select {
      width: 100%;
      box-sizing: border-box;
      padding: 8px 10px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.35));
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.06));
      color: var(--primary-text-color, #212121);
      font-family: inherit;
      font-size: 0.88rem;
    }

    input[type='range'] {
      width: 100%;
      margin: 6px 0;
      accent-color: var(--primary-color, #1a73e8);
      cursor: pointer;
    }

    .two-col {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }

    .three-col {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
    }

    .toggles-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .checkbox-row {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.88rem;
      cursor: pointer;
    }

    .add-btn {
      appearance: none;
      border: none;
      border-radius: 8px;
      padding: 6px 12px;
      background: var(--primary-color, #1a73e8);
      color: var(--text-primary-color, #ffffff);
      font-family: inherit;
      font-size: 0.82rem;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      --mdc-icon-size: 16px;
    }

    .entities-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .entity-card {
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25));
      border-radius: 8px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.04));
    }

    .entity-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .entity-badge {
      padding: 2px 8px;
      border-radius: 999px;
      background: var(--badge-color);
      color: #ffffff;
      font-size: 0.74rem;
      font-weight: 700;
    }

    .entity-actions {
      display: flex;
      gap: 4px;
    }

    .mini-icon-btn {
      appearance: none;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      background: transparent;
      color: var(--primary-text-color, #212121);
      border-radius: 6px;
      width: 28px;
      height: 28px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      --mdc-icon-size: 16px;
    }

    .mini-icon-btn:disabled {
      opacity: 0.35;
      cursor: default;
    }

    .mini-icon-btn.danger {
      color: var(--error-color, #db4437);
    }

    .color-row {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    input[type='color'] {
      width: 38px;
      height: 36px;
      padding: 2px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.35));
      background: transparent;
      cursor: pointer;
      flex-shrink: 0;
    }

    .entity-fallback-inputs {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .icon-preview-input {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .icon-preview-input ha-icon {
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color, #727272);
      flex-shrink: 0;
    }

    .empty-entities {
      font-size: 0.85rem;
      color: var(--secondary-text-color, #727272);
      text-align: center;
      padding: 12px;
    }

    @media (max-width: 480px) {
      .two-col,
      .three-col {
        grid-template-columns: 1fr;
      }
    }
  `;
Re([
  x({ attribute: !1 })
], ne.prototype, "hass", 2);
Re([
  k()
], ne.prototype, "_config", 2);
ne = Re([
  L(st)
], ne);
if (!customElements.get(Ie)) {
  const t = customElements.get(ve);
  t && customElements.define(Ie, class extends t {
  });
}
if (!customElements.get(Le)) {
  const t = customElements.get(oe);
  t && customElements.define(Le, class extends t {
  });
}
if (!customElements.get(Ue)) {
  const t = customElements.get(re);
  t && customElements.define(Ue, class extends t {
  });
}
if (!customElements.get(je)) {
  const t = customElements.get(ae);
  t && customElements.define(je, class extends t {
  });
}
const xi = [
  {
    type: ve,
    name: "Simple Calendar - Month (Multi-Entity)",
    description: "Full monthly calendar view supporting multiple calendar entities with custom colors, icons, and filters.",
    preview: !0
  },
  {
    type: oe,
    name: "Simple Calendar - Week (Multi-Entity)",
    description: "Minimalist weekly summary view supporting multiple calendar entities, progress bars, and custom styling.",
    preview: !0
  },
  {
    type: re,
    name: "Simple Calendar - Day (Multi-Entity)",
    description: "Minimalist daily agenda widget with week pill, progress bars, and multi-calendar support.",
    preview: !0
  },
  {
    type: ae,
    name: "Simple Calendar - Event Card (Multi-Entity)",
    description: "Compact now/next event tracker displaying previous, current (with progress bar), and upcoming events.",
    preview: !0
  }
];
window.customCards = window.customCards || [];
for (const t of xi)
  window.customCards.some((e) => e.type === t.type) || window.customCards.push(t);
console.info(
  `%c SIMPLE-CALENDARS %c v${wt} `,
  "color: white; background: #1a73e8; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;",
  "color: #1a73e8; background: #e8f0fe; font-weight: 700; border-radius: 0 4px 4px 0; padding: 2px 6px;"
);
