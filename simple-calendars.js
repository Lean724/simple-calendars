const Et = "2.1.0", fe = "simple-calendar-month-card", de = "simple-calendar-day-card", Q = "simple-calendar-focus-event-card", ut = "simple-calendar-card-editor", Ye = "ha-calendar-month-card", Ve = "ha-calendar-day-card", qe = "simple-calendar-event-card", Ze = "ha-calendar-event-card", M = [
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
], Te = "mdi:calendar", Xe = {
  en: "English",
  es: "Español",
  "zh-Hans": "简体中文",
  de: "Deutsch",
  it: "Italiano",
  fr: "Français",
  pt: "Português",
  ru: "Русский",
  pl: "Polski",
  nl: "Nederlands"
}, mt = {
  es: {
    today: "Hoy",
    prev: "Anterior",
    next: "Siguiente",
    refresh: "Actualizar",
    allDay: "Todo el día",
    noEvents: "Sin eventos hoy",
    noEventsDay: "Sin eventos",
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
    editorDimCompletedEvents: "Grisar eventos finalizados",
    editorMaxPreviousEvents: "Cantidad de eventos previos",
    editorMaxUpcomingEvents: "Cantidad de eventos próximos",
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
    editorCalendarSize: "Tamaño del calendario",
    editorSizeCompact: "Compacto",
    editorSizeNormal: "Normal",
    editorSizeLarge: "Grande",
    editorLayout: "Diseño",
    editorLayoutClassic: "Clásico",
    editorLayoutCompact: "Compacto",
    editorShowMonthGrid: "Mostrar grilla del mes",
    editorEventDisplay: "Estilo de eventos en grilla",
    editorDisplayPills: "Píldoras (con texto)",
    editorDisplayDots: "Puntos (minimalista)",
    editorShowDaySummary: "Mostrar detalle del día seleccionado",
    editorMaxEvents: "Máx. eventos visibles por día",
    editorShowWeekNumbers: "Mostrar número de semana",
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
    noEventsDay: "没有日程",
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
    editorDimCompletedEvents: "灰显已结束的日程",
    editorMaxPreviousEvents: "显示的已结束日程数",
    editorMaxUpcomingEvents: "显示的即将到来日程数",
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
    editorCalendarSize: "日历尺寸",
    editorSizeCompact: "紧凑",
    editorSizeNormal: "标准",
    editorSizeLarge: "大号",
    editorLayout: "布局",
    editorLayoutClassic: "经典",
    editorLayoutCompact: "紧凑",
    editorShowMonthGrid: "显示月历网格",
    editorEventDisplay: "网格日程样式",
    editorDisplayPills: "标签（含文字）",
    editorDisplayDots: "圆点（极简）",
    editorShowDaySummary: "显示所选日期详情",
    editorMaxEvents: "每日最多显示日程数",
    editorShowWeekNumbers: "显示周数",
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
    noEventsDay: "Keine Termine",
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
    editorDimCompletedEvents: "Beendete Termine ausgrauen",
    editorMaxPreviousEvents: "Anzahl vorheriger Termine",
    editorMaxUpcomingEvents: "Anzahl kommender Termine",
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
    editorCalendarSize: "Kalendergröße",
    editorSizeCompact: "Kompakt",
    editorSizeNormal: "Normal",
    editorSizeLarge: "Groß",
    editorLayout: "Layout",
    editorLayoutClassic: "Klassisch",
    editorLayoutCompact: "Kompakt",
    editorShowMonthGrid: "Monatsraster anzeigen",
    editorEventDisplay: "Terminanzeige im Raster",
    editorDisplayPills: "Kapseln (mit Text)",
    editorDisplayDots: "Punkte (minimalistisch)",
    editorShowDaySummary: "Details des ausgewählten Tages anzeigen",
    editorMaxEvents: "Max. sichtbare Termine pro Tag",
    editorShowWeekNumbers: "Kalenderwochen anzeigen",
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
    noEventsDay: "No events",
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
    editorDimCompletedEvents: "Dim completed events",
    editorMaxPreviousEvents: "Previous events to show",
    editorMaxUpcomingEvents: "Upcoming events to show",
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
    editorCalendarSize: "Calendar size",
    editorSizeCompact: "Compact",
    editorSizeNormal: "Normal",
    editorSizeLarge: "Large",
    editorLayout: "Layout",
    editorLayoutClassic: "Classic",
    editorLayoutCompact: "Compact",
    editorShowMonthGrid: "Show month grid",
    editorEventDisplay: "Grid event style",
    editorDisplayPills: "Pills (with text)",
    editorDisplayDots: "Dots (minimal)",
    editorShowDaySummary: "Show selected day details",
    editorMaxEvents: "Max visible events per day",
    editorShowWeekNumbers: "Show week numbers",
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
    noEventsDay: "Sem eventos",
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
    editorDimCompletedEvents: "Esmaecer eventos concluídos",
    editorMaxPreviousEvents: "Quantidade de eventos anteriores",
    editorMaxUpcomingEvents: "Quantidade de próximos eventos",
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
    editorCalendarSize: "Tamanho do calendário",
    editorSizeCompact: "Compacto",
    editorSizeNormal: "Normal",
    editorSizeLarge: "Grande",
    editorLayout: "Layout",
    editorLayoutClassic: "Clássico",
    editorLayoutCompact: "Compacto",
    editorShowMonthGrid: "Mostrar grade do mês",
    editorEventDisplay: "Estilo de eventos na grade",
    editorDisplayPills: "Pílulas (com texto)",
    editorDisplayDots: "Pontos (minimalista)",
    editorShowDaySummary: "Mostrar detalhes do dia selecionado",
    editorMaxEvents: "Máx. eventos visíveis por dia",
    editorShowWeekNumbers: "Mostrar números das semanas",
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
    noEventsDay: "Nessun evento",
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
    editorDimCompletedEvents: "Attenua eventi terminati",
    editorMaxPreviousEvents: "Numero di eventi precedenti",
    editorMaxUpcomingEvents: "Numero di prossimi eventi",
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
    editorCalendarSize: "Dimensione calendario",
    editorSizeCompact: "Compatto",
    editorSizeNormal: "Normale",
    editorSizeLarge: "Grande",
    editorLayout: "Layout",
    editorLayoutClassic: "Classico",
    editorLayoutCompact: "Compatto",
    editorShowMonthGrid: "Mostra griglia mensile",
    editorEventDisplay: "Stile eventi nella griglia",
    editorDisplayPills: "Pillole (con testo)",
    editorDisplayDots: "Puntini (minimale)",
    editorShowDaySummary: "Mostra dettagli giorno selezionato",
    editorMaxEvents: "Max eventi visibili al giorno",
    editorShowWeekNumbers: "Mostra numeri settimana",
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
    noEventsDay: "Aucun événement",
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
    editorDimCompletedEvents: "Griser les événements terminés",
    editorMaxPreviousEvents: "Nombre d'événements précédents",
    editorMaxUpcomingEvents: "Nombre d'événements à venir",
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
    editorCalendarSize: "Taille du calendrier",
    editorSizeCompact: "Compact",
    editorSizeNormal: "Normal",
    editorSizeLarge: "Grand",
    editorLayout: "Disposition",
    editorLayoutClassic: "Classique",
    editorLayoutCompact: "Compact",
    editorShowMonthGrid: "Afficher la grille du mois",
    editorEventDisplay: "Style des événements dans la grille",
    editorDisplayPills: "Pastilles (avec texte)",
    editorDisplayDots: "Points (minimaliste)",
    editorShowDaySummary: "Afficher le détail du jour sélectionné",
    editorMaxEvents: "Max événements visibles par jour",
    editorShowWeekNumbers: "Afficher les numéros de semaine",
    editorAddEntity: "Ajouter un calendrier",
    editorEntity: "Entité calendrier",
    editorCustomName: "Nom personnalisé",
    editorCustomIcon: "Icône (mdi:...)",
    editorCustomColor: "Couleur",
    editorRemove: "Supprimer le calendrier",
    editorNoEntities: "Aucun calendrier ajouté pour le moment."
  },
  ru: {
    today: "Сегодня",
    prev: "Предыдущий",
    next: "Следующий",
    refresh: "Обновить",
    allDay: "Весь день",
    noEvents: "Сегодня событий нет",
    noEventsDay: "Нет событий",
    moreEvents: "ещё",
    noCalendars: "Календари не настроены",
    noCalendarsHint: "Добавьте одну или несколько сущностей calendar.* в настройках карточки.",
    loading: "Загрузка событий...",
    errorLoading: "Не удалось загрузить некоторые календари",
    calendar: "Календарь",
    when: "Когда",
    location: "Место",
    description: "Описание",
    openEntity: "Открыть сущность",
    close: "Закрыть",
    weekAbbr: "Нед",
    eventsCount: "событий",
    allDayEvents: "Весь день",
    timedEvents: "По времени",
    weekLabel: "Неделя",
    hoursRemaining: "ч.",
    hourRemaining: "ч.",
    minutesRemaining: "мин.",
    completed: "Завершено",
    startsIn: "Начётся через",
    previousEventsSection: "Прошедшие события",
    currentEventsSection: "Текущие события",
    upcomingEventsSection: "Предстоящие события",
    noCurrentEvents: "Нет текущих событий",
    editorGeneralSection: "Общие настройки",
    editorAppearanceSection: "Внешний вид и прозрачность",
    editorTransparent: "100% прозрачный фон",
    editorBackgroundColor: "Цвет фона (необязательно)",
    editorBackgroundOpacity: "Непрозрачность фона (%)",
    editorBackdropBlur: "Размытие фона (px)",
    editorHideBorder: "Скрыть рамку",
    editorHideShadow: "Скрыть тень",
    editorBorderRadius: "Радиус скругления (px)",
    editorShowNavigation: "Показывать стрелки навигации",
    editorUseEntityColor: "Цвет календаря для значка и полосы",
    editorShowCurrentDay: "Показывать текущий день",
    editorShowAllDayEvents: "Показывать события на весь день",
    editorAllDayPosition: "Положение событий на весь день",
    editorPositionTop: "Сверху",
    editorPositionBottom: "Снизу",
    editorShowCompletedEvents: "Показывать завершённые события",
    editorDimCompletedEvents: "Выделять серым завершённые события",
    editorMaxPreviousEvents: "Количество прошедших событий",
    editorMaxUpcomingEvents: "Количество предстоящих событий",
    editorViewSection: "Параметры отображения",
    editorShowWeekNumber: "Показывать номер недели",
    editorShowProgressBar: "Показывать индикатор прогресса",
    editorEntitiesTitle: "Календари (несколько сущностей)",
    editorTitle: "Заголовок (необязательно)",
    editorTitlePlaceholder: "Напр. Семейный календарь",
    editorFirstDay: "Первый день недели",
    editorMonday: "Понедельник",
    editorSunday: "Воскресенье",
    editorLanguage: "Язык",
    editorLangAuto: "Автоматически (Home Assistant)",
    editorShowHeader: "Показывать панель навигации",
    editorShowToggles: "Показывать фильтры календарей",
    editorCalendarSize: "Размер календаря",
    editorSizeCompact: "Компактный",
    editorSizeNormal: "Обычный",
    editorSizeLarge: "Крупный",
    editorLayout: "Макет",
    editorLayoutClassic: "Классический",
    editorLayoutCompact: "Компактный",
    editorShowMonthGrid: "Показать сетку месяца",
    editorEventDisplay: "Отображение событий в сетке",
    editorDisplayPills: "Плашки (с текстом)",
    editorDisplayDots: "Точки (минимализм)",
    editorShowDaySummary: "Показывать детали выбранного дня",
    editorMaxEvents: "Макс. событий в день",
    editorShowWeekNumbers: "Показывать номера недель",
    editorAddEntity: "Добавить календарь",
    editorEntity: "Сущность календаря",
    editorCustomName: "Пользовательское название",
    editorCustomIcon: "Значок (mdi:...)",
    editorCustomColor: "Цвет",
    editorRemove: "Удалить календарь",
    editorNoEntities: "Календари пока не добавлены."
  },
  pl: {
    today: "Dzisiaj",
    prev: "Poprzedni",
    next: "Następny",
    refresh: "Odśwież",
    allDay: "Cały dzień",
    noEvents: "Brak wydarzeń dzisiaj",
    noEventsDay: "Brak wydarzeń",
    moreEvents: "więcej",
    noCalendars: "Brak skonfigurowanych kalendarzy",
    noCalendarsHint: "Dodaj jedną lub więcej encji calendar.* w konfiguracji karty.",
    loading: "Ładowanie wydarzeń...",
    errorLoading: "Nie udało się załadować niektórych kalendarzy",
    calendar: "Kalendarz",
    when: "Kiedy",
    location: "Lokalizacja",
    description: "Opis",
    openEntity: "Otwórz encję",
    close: "Zamknij",
    weekAbbr: "Tydz",
    eventsCount: "wydarzeń",
    allDayEvents: "Cały dzień",
    timedEvents: "Zaplanowane",
    weekLabel: "Tydzień",
    hoursRemaining: "godz.",
    hourRemaining: "godz.",
    minutesRemaining: "min",
    completed: "Zakończono",
    startsIn: "Zaczyna się za",
    previousEventsSection: "Poprzednie wydarzenia",
    currentEventsSection: "Bieżące wydarzenia",
    upcomingEventsSection: "Nadchodzące wydarzenia",
    noCurrentEvents: "Brak bieżących wydarzeń",
    editorGeneralSection: "Ustawienia ogólne",
    editorAppearanceSection: "Wygląd i przezroczystość",
    editorTransparent: "100% przezroczyste tło",
    editorBackgroundColor: "Kolor tła (opcjonalny)",
    editorBackgroundOpacity: "Krycie tła (%)",
    editorBackdropBlur: "Rozmycie tła (px)",
    editorHideBorder: "Ukryj obramowanie",
    editorHideShadow: "Ukryj cień",
    editorBorderRadius: "Zaokrąglenie rogów (px)",
    editorShowNavigation: "Pokaż strzałki nawigacji",
    editorUseEntityColor: "Użyj koloru kalendarza dla ikony i paska",
    editorShowCurrentDay: "Pokaż bieżący dzień",
    editorShowAllDayEvents: "Pokaż wydarzenia całodniowe",
    editorAllDayPosition: "Pozycja wydarzeń całodniowych",
    editorPositionTop: "Na górze",
    editorPositionBottom: "Na dole",
    editorShowCompletedEvents: "Pokaż zakończone wydarzenia",
    editorDimCompletedEvents: "Wyszarz zakończone wydarzenia",
    editorMaxPreviousEvents: "Liczba poprzednich wydarzeń",
    editorMaxUpcomingEvents: "Liczba nadchodzących wydarzeń",
    editorViewSection: "Opcje widoku",
    editorShowWeekNumber: "Pokaż numer tygodnia",
    editorShowProgressBar: "Pokaż pasek postępu",
    editorEntitiesTitle: "Kalendarze (wiele encji)",
    editorTitle: "Tytuł (opcjonalny)",
    editorTitlePlaceholder: "Np. Kalendarz rodzinny",
    editorFirstDay: "Pierwszy dzień tygodnia",
    editorMonday: "Poniedziałek",
    editorSunday: "Niedziela",
    editorLanguage: "Język",
    editorLangAuto: "Automatyczny (Home Assistant)",
    editorShowHeader: "Pokaż nagłówek nawigacji",
    editorShowToggles: "Pokaż filtry kalendarzy",
    editorCalendarSize: "Rozmiar kalendarza",
    editorSizeCompact: "Kompaktowy",
    editorSizeNormal: "Normalny",
    editorSizeLarge: "Duży",
    editorLayout: "Układ",
    editorLayoutClassic: "Klasyczny",
    editorLayoutCompact: "Kompaktowy",
    editorShowMonthGrid: "Pokaż siatkę miesiąca",
    editorEventDisplay: "Styl wydarzeń w siatce",
    editorDisplayPills: "Etykiety (z tekstem)",
    editorDisplayDots: "Kropki (minimalistyczny)",
    editorShowDaySummary: "Pokaż szczegóły wybranego dnia",
    editorMaxEvents: "Maks. wydarzeń na dzień",
    editorShowWeekNumbers: "Pokaż numery tygodni",
    editorAddEntity: "Dodaj kalendarz",
    editorEntity: "Encja kalendarza",
    editorCustomName: "Własna nazwa",
    editorCustomIcon: "Ikona (mdi:...)",
    editorCustomColor: "Kolor",
    editorRemove: "Usuń kalendarz",
    editorNoEntities: "Nie dodano jeszcze żadnych kalendarzy."
  },
  nl: {
    today: "Vandaag",
    prev: "Vorige",
    next: "Volgende",
    refresh: "Vernieuwen",
    allDay: "Hele dag",
    noEvents: "Geen afspraken vandaag",
    noEventsDay: "Geen afspraken",
    moreEvents: "meer",
    noCalendars: "Geen agenda's geconfigureerd",
    noCalendarsHint: "Voeg een of meer calendar.*-entiteiten toe in de kaartconfiguratie.",
    loading: "Afspraken laden...",
    errorLoading: "Kan sommige agenda's niet laden",
    calendar: "Agenda",
    when: "Wanneer",
    location: "Locatie",
    description: "Beschrijving",
    openEntity: "Entiteit openen",
    close: "Sluiten",
    weekAbbr: "Wk",
    eventsCount: "afspraken",
    allDayEvents: "Hele dag",
    timedEvents: "Gepland",
    weekLabel: "Week",
    hoursRemaining: "uur",
    hourRemaining: "uur",
    minutesRemaining: "minuten",
    completed: "Afgelopen",
    startsIn: "Begint over",
    previousEventsSection: "Eerdere afspraken",
    currentEventsSection: "Huidige afspraken",
    upcomingEventsSection: "Komende afspraken",
    noCurrentEvents: "Geen lopende afspraken",
    editorGeneralSection: "Algemene instellingen",
    editorAppearanceSection: "Uiterlijk en transparantie",
    editorTransparent: "100% transparante achtergrond",
    editorBackgroundColor: "Achtergrondkleur (optioneel)",
    editorBackgroundOpacity: "Achtergronddekking (%)",
    editorBackdropBlur: "Achtergrondvervaging (px)",
    editorHideBorder: "Rand verbergen",
    editorHideShadow: "Schaduw verbergen",
    editorBorderRadius: "Hoekradius (px)",
    editorShowNavigation: "Navigatiepijlen tonen",
    editorUseEntityColor: "Agendakleur gebruiken voor pictogram en balk",
    editorShowCurrentDay: "Huidige dag tonen",
    editorShowAllDayEvents: "Hele-dagafspraken tonen",
    editorAllDayPosition: "Positie hele-dagafspraken",
    editorPositionTop: "Boven",
    editorPositionBottom: "Onder",
    editorShowCompletedEvents: "Afgelopen afspraken tonen",
    editorDimCompletedEvents: "Afgelopen afspraken grijs weergeven",
    editorMaxPreviousEvents: "Aantal eerdere afspraken",
    editorMaxUpcomingEvents: "Aantal komende afspraken",
    editorViewSection: "Weergave-opties",
    editorShowWeekNumber: "Weeknummer tonen",
    editorShowProgressBar: "Voortgangsbalk tonen",
    editorEntitiesTitle: "Agenda's (meerdere entiteiten)",
    editorTitle: "Titel (optioneel)",
    editorTitlePlaceholder: "Bijv. Gezinsagenda",
    editorFirstDay: "Eerste dag van de week",
    editorMonday: "Maandag",
    editorSunday: "Zondag",
    editorLanguage: "Taal",
    editorLangAuto: "Automatisch (Home Assistant)",
    editorShowHeader: "Navigatiekop tonen",
    editorShowToggles: "Agendafilters tonen",
    editorCalendarSize: "Agendagrootte",
    editorSizeCompact: "Compact",
    editorSizeNormal: "Normaal",
    editorSizeLarge: "Groot",
    editorLayout: "Indeling",
    editorLayoutClassic: "Klassiek",
    editorLayoutCompact: "Compact",
    editorShowMonthGrid: "Maandraster tonen",
    editorEventDisplay: "Weergave van afspraken in raster",
    editorDisplayPills: "Labels (met tekst)",
    editorDisplayDots: "Stippen (minimalistisch)",
    editorShowDaySummary: "Details van geselecteerde dag tonen",
    editorMaxEvents: "Max. zichtbare afspraken per dag",
    editorShowWeekNumbers: "Weeknummers tonen",
    editorAddEntity: "Agenda toevoegen",
    editorEntity: "Agenda-entiteit",
    editorCustomName: "Aangepaste naam",
    editorCustomIcon: "Pictogram (mdi:...)",
    editorCustomColor: "Kleur",
    editorRemove: "Agenda verwijderen",
    editorNoEntities: "Nog geen agenda's toegevoegd."
  }
}, St = [
  "en",
  "es",
  "zh-Hans",
  "de",
  "it",
  "fr",
  "pt",
  "ru",
  "pl",
  "nl"
], Ct = {
  en: "en-US",
  es: "es-ES",
  "zh-Hans": "zh-CN",
  de: "de-DE",
  it: "it-IT",
  fr: "fr-FR",
  pt: "pt-PT",
  ru: "ru-RU",
  pl: "pl-PL",
  nl: "nl-NL"
};
function gt(t, e) {
  var a;
  if (t && St.includes(t))
    return t;
  const i = (((a = e == null ? void 0 : e.locale) == null ? void 0 : a.language) || (e == null ? void 0 : e.language) || "en").toLowerCase();
  return i.startsWith("zh") ? "zh-Hans" : i.startsWith("es") ? "es" : i.startsWith("de") ? "de" : i.startsWith("it") ? "it" : i.startsWith("fr") ? "fr" : i.startsWith("pt") ? "pt" : i.startsWith("ru") ? "ru" : i.startsWith("pl") ? "pl" : i.startsWith("nl") ? "nl" : (i.startsWith("en"), "en");
}
function Dt(t, e) {
  var o;
  const i = ((o = e == null ? void 0 : e.locale) == null ? void 0 : o.language) || (e == null ? void 0 : e.language), a = t === "zh-Hans" ? "zh" : t;
  return i && i.toLowerCase().startsWith(a) ? i : Ct[t];
}
function At(t, e, i) {
  return e === "zh-Hans" ? `第${t}周` : `${i.weekLabel} ${t}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, Le = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Be = Symbol(), Qe = /* @__PURE__ */ new WeakMap();
let vt = class {
  constructor(e, i, a) {
    if (this._$cssResult$ = !0, a !== Be) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = i;
  }
  get styleSheet() {
    let e = this.o;
    const i = this.t;
    if (Le && e === void 0) {
      const a = i !== void 0 && i.length === 1;
      a && (e = Qe.get(i)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), a && Qe.set(i, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (t) => new vt(typeof t == "string" ? t : t + "", void 0, Be), J = (t, ...e) => {
  const i = t.length === 1 ? t[0] : e.reduce((a, o, r) => a + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + t[r + 1], t[0]);
  return new vt(i, t, Be);
}, Tt = (t, e) => {
  if (Le) t.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of e) {
    const a = document.createElement("style"), o = he.litNonce;
    o !== void 0 && a.setAttribute("nonce", o), a.textContent = i.cssText, t.appendChild(a);
  }
}, Je = Le ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let i = "";
  for (const a of e.cssRules) i += a.cssText;
  return zt(i);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Pt, defineProperty: Mt, getOwnPropertyDescriptor: Nt, getOwnPropertyNames: Lt, getOwnPropertySymbols: Bt, getPrototypeOf: Ot } = Object, I = globalThis, et = I.trustedTypes, Ht = et ? et.emptyScript : "", ke = I.reactiveElementPolyfillSupport, oe = (t, e) => t, ue = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Ht : null;
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
} }, Oe = (t, e) => !Pt(t, e), tt = { attribute: !0, type: String, converter: ue, reflect: !1, useDefault: !1, hasChanged: Oe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), I.litPropertyMetadata ?? (I.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Y = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, i = tt) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(e, i), !i.noAccessor) {
      const a = Symbol(), o = this.getPropertyDescriptor(e, a, i);
      o !== void 0 && Mt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, i, a) {
    const { get: o, set: r } = Nt(this.prototype, e) ?? { get() {
      return this[i];
    }, set(n) {
      this[i] = n;
    } };
    return { get: o, set(n) {
      const l = o == null ? void 0 : o.call(this);
      r == null || r.call(this, n), this.requestUpdate(e, l, a);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? tt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(oe("elementProperties"))) return;
    const e = Ot(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(oe("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(oe("properties"))) {
      const i = this.properties, a = [...Lt(i), ...Bt(i)];
      for (const o of a) this.createProperty(o, i[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const i = litPropertyMetadata.get(e);
      if (i !== void 0) for (const [a, o] of i) this.elementProperties.set(a, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, a] of this.elementProperties) {
      const o = this._$Eu(i, a);
      o !== void 0 && this._$Eh.set(o, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const i = [];
    if (Array.isArray(e)) {
      const a = new Set(e.flat(1 / 0).reverse());
      for (const o of a) i.unshift(Je(o));
    } else e !== void 0 && i.push(Je(e));
    return i;
  }
  static _$Eu(e, i) {
    const a = i.attribute;
    return a === !1 ? void 0 : typeof a == "string" ? a : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const a of i.keys()) this.hasOwnProperty(a) && (e.set(a, this[a]), delete this[a]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Tt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((i) => {
      var a;
      return (a = i.hostConnected) == null ? void 0 : a.call(i);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((i) => {
      var a;
      return (a = i.hostDisconnected) == null ? void 0 : a.call(i);
    });
  }
  attributeChangedCallback(e, i, a) {
    this._$AK(e, a);
  }
  _$ET(e, i) {
    var r;
    const a = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, a);
    if (o !== void 0 && a.reflect === !0) {
      const n = (((r = a.converter) == null ? void 0 : r.toAttribute) !== void 0 ? a.converter : ue).toAttribute(i, a.type);
      this._$Em = e, n == null ? this.removeAttribute(o) : this.setAttribute(o, n), this._$Em = null;
    }
  }
  _$AK(e, i) {
    var r, n;
    const a = this.constructor, o = a._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = a.getPropertyOptions(o), s = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((r = l.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? l.converter : ue;
      this._$Em = o;
      const d = s.fromAttribute(i, l.type);
      this[o] = d ?? ((n = this._$Ej) == null ? void 0 : n.get(o)) ?? d, this._$Em = null;
    }
  }
  requestUpdate(e, i, a, o = !1, r) {
    var n;
    if (e !== void 0) {
      const l = this.constructor;
      if (o === !1 && (r = this[e]), a ?? (a = l.getPropertyOptions(e)), !((a.hasChanged ?? Oe)(r, i) || a.useDefault && a.reflect && r === ((n = this._$Ej) == null ? void 0 : n.get(e)) && !this.hasAttribute(l._$Eu(e, a)))) return;
      this.C(e, i, a);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, i, { useDefault: a, reflect: o, wrapped: r }, n) {
    a && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, n ?? i ?? this[e]), r !== !0 || n !== void 0) || (this._$AL.has(e) || (this.hasUpdated || a || (i = void 0), this._$AL.set(e, i)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    var a;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [r, n] of o) {
        const { wrapped: l } = n, s = this[r];
        l !== !0 || this._$AL.has(r) || s === void 0 || this.C(r, void 0, n, s);
      }
    }
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (a = this._$EO) == null || a.forEach((o) => {
        var r;
        return (r = o.hostUpdate) == null ? void 0 : r.call(o);
      }), this.update(i)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(i);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var i;
    (i = this._$EO) == null || i.forEach((a) => {
      var o;
      return (o = a.hostUpdated) == null ? void 0 : o.call(a);
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
Y.elementStyles = [], Y.shadowRootOptions = { mode: "open" }, Y[oe("elementProperties")] = /* @__PURE__ */ new Map(), Y[oe("finalized")] = /* @__PURE__ */ new Map(), ke == null || ke({ ReactiveElement: Y }), (I.reactiveElementVersions ?? (I.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis, it = (t) => t, me = ae.trustedTypes, ot = me ? me.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, yt = "$lit$", R = `lit$${Math.random().toFixed(9).slice(2)}$`, ft = "?" + R, Ft = `<${ft}>`, K = document, ne = () => K.createComment(""), re = (t) => t === null || typeof t != "object" && typeof t != "function", He = Array.isArray, Rt = (t) => He(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", Ee = `[ 	
\f\r]`, ie = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, at = /-->/g, nt = />/g, U = RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), rt = /'/g, st = /"/g, bt = /^(?:script|style|textarea|title)$/i, It = (t) => (e, ...i) => ({ _$litType$: t, strings: e, values: i }), c = It(1), Z = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), lt = /* @__PURE__ */ new WeakMap(), W = K.createTreeWalker(K, 129);
function wt(t, e) {
  if (!He(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ot !== void 0 ? ot.createHTML(e) : e;
}
const jt = (t, e) => {
  const i = t.length - 1, a = [];
  let o, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", n = ie;
  for (let l = 0; l < i; l++) {
    const s = t[l];
    let d, p, h = -1, g = 0;
    for (; g < s.length && (n.lastIndex = g, p = n.exec(s), p !== null); ) g = n.lastIndex, n === ie ? p[1] === "!--" ? n = at : p[1] !== void 0 ? n = nt : p[2] !== void 0 ? (bt.test(p[2]) && (o = RegExp("</" + p[2], "g")), n = U) : p[3] !== void 0 && (n = U) : n === U ? p[0] === ">" ? (n = o ?? ie, h = -1) : p[1] === void 0 ? h = -2 : (h = n.lastIndex - p[2].length, d = p[1], n = p[3] === void 0 ? U : p[3] === '"' ? st : rt) : n === st || n === rt ? n = U : n === at || n === nt ? n = ie : (n = U, o = void 0);
    const v = n === U && t[l + 1].startsWith("/>") ? " " : "";
    r += n === ie ? s + Ft : h >= 0 ? (a.push(d), s.slice(0, h) + yt + s.slice(h) + R + v) : s + R + (h === -2 ? l : v);
  }
  return [wt(t, r + (t[i] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), a];
};
class se {
  constructor({ strings: e, _$litType$: i }, a) {
    let o;
    this.parts = [];
    let r = 0, n = 0;
    const l = e.length - 1, s = this.parts, [d, p] = jt(e, i);
    if (this.el = se.createElement(d, a), W.currentNode = this.el.content, i === 2 || i === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (o = W.nextNode()) !== null && s.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const h of o.getAttributeNames()) if (h.endsWith(yt)) {
          const g = p[n++], v = o.getAttribute(h).split(R), m = /([.?@])?(.*)/.exec(g);
          s.push({ type: 1, index: r, name: m[2], strings: v, ctor: m[1] === "." ? Wt : m[1] === "?" ? Gt : m[1] === "@" ? Kt : be }), o.removeAttribute(h);
        } else h.startsWith(R) && (s.push({ type: 6, index: r }), o.removeAttribute(h));
        if (bt.test(o.tagName)) {
          const h = o.textContent.split(R), g = h.length - 1;
          if (g > 0) {
            o.textContent = me ? me.emptyScript : "";
            for (let v = 0; v < g; v++) o.append(h[v], ne()), W.nextNode(), s.push({ type: 2, index: ++r });
            o.append(h[g], ne());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ft) s.push({ type: 2, index: r });
      else {
        let h = -1;
        for (; (h = o.data.indexOf(R, h + 1)) !== -1; ) s.push({ type: 7, index: r }), h += R.length - 1;
      }
      r++;
    }
  }
  static createElement(e, i) {
    const a = K.createElement("template");
    return a.innerHTML = e, a;
  }
}
function X(t, e, i = t, a) {
  var n, l;
  if (e === Z) return e;
  let o = a !== void 0 ? (n = i._$Co) == null ? void 0 : n[a] : i._$Cl;
  const r = re(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== r && ((l = o == null ? void 0 : o._$AO) == null || l.call(o, !1), r === void 0 ? o = void 0 : (o = new r(t), o._$AT(t, i, a)), a !== void 0 ? (i._$Co ?? (i._$Co = []))[a] = o : i._$Cl = o), o !== void 0 && (e = X(t, o._$AS(t, e.values), o, a)), e;
}
class Ut {
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
    const { el: { content: i }, parts: a } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? K).importNode(i, !0);
    W.currentNode = o;
    let r = W.nextNode(), n = 0, l = 0, s = a[0];
    for (; s !== void 0; ) {
      if (n === s.index) {
        let d;
        s.type === 2 ? d = new pe(r, r.nextSibling, this, e) : s.type === 1 ? d = new s.ctor(r, s.name, s.strings, this, e) : s.type === 6 && (d = new Yt(r, this, e)), this._$AV.push(d), s = a[++l];
      }
      n !== (s == null ? void 0 : s.index) && (r = W.nextNode(), n++);
    }
    return W.currentNode = K, o;
  }
  p(e) {
    let i = 0;
    for (const a of this._$AV) a !== void 0 && (a.strings !== void 0 ? (a._$AI(e, a, i), i += a.strings.length - 2) : a._$AI(e[i])), i++;
  }
}
class pe {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, i, a, o) {
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = e, this._$AB = i, this._$AM = a, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = X(this, e, i), re(e) ? e === u || e == null || e === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Rt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== u && re(this._$AH) ? this._$AA.nextSibling.data = e : this.T(K.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var r;
    const { values: i, _$litType$: a } = e, o = typeof a == "number" ? this._$AC(e) : (a.el === void 0 && (a.el = se.createElement(wt(a.h, a.h[0]), this.options)), a);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === o) this._$AH.p(i);
    else {
      const n = new Ut(o, this), l = n.u(this.options);
      n.p(i), this.T(l), this._$AH = n;
    }
  }
  _$AC(e) {
    let i = lt.get(e.strings);
    return i === void 0 && lt.set(e.strings, i = new se(e)), i;
  }
  k(e) {
    He(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let a, o = 0;
    for (const r of e) o === i.length ? i.push(a = new pe(this.O(ne()), this.O(ne()), this, this.options)) : a = i[o], a._$AI(r), o++;
    o < i.length && (this._$AR(a && a._$AB.nextSibling, o), i.length = o);
  }
  _$AR(e = this._$AA.nextSibling, i) {
    var a;
    for ((a = this._$AP) == null ? void 0 : a.call(this, !1, !0, i); e !== this._$AB; ) {
      const o = it(e).nextSibling;
      it(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var i;
    this._$AM === void 0 && (this._$Cv = e, (i = this._$AP) == null || i.call(this, e));
  }
}
class be {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, i, a, o, r) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = e, this.name = i, this._$AM = o, this.options = r, a.length > 2 || a[0] !== "" || a[1] !== "" ? (this._$AH = Array(a.length - 1).fill(new String()), this.strings = a) : this._$AH = u;
  }
  _$AI(e, i = this, a, o) {
    const r = this.strings;
    let n = !1;
    if (r === void 0) e = X(this, e, i, 0), n = !re(e) || e !== this._$AH && e !== Z, n && (this._$AH = e);
    else {
      const l = e;
      let s, d;
      for (e = r[0], s = 0; s < r.length - 1; s++) d = X(this, l[a + s], i, s), d === Z && (d = this._$AH[s]), n || (n = !re(d) || d !== this._$AH[s]), d === u ? e = u : e !== u && (e += (d ?? "") + r[s + 1]), this._$AH[s] = d;
    }
    n && !o && this.j(e);
  }
  j(e) {
    e === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Wt extends be {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === u ? void 0 : e;
  }
}
class Gt extends be {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== u);
  }
}
class Kt extends be {
  constructor(e, i, a, o, r) {
    super(e, i, a, o, r), this.type = 5;
  }
  _$AI(e, i = this) {
    if ((e = X(this, e, i, 0) ?? u) === Z) return;
    const a = this._$AH, o = e === u && a !== u || e.capture !== a.capture || e.once !== a.once || e.passive !== a.passive, r = e !== u && (a === u || o);
    o && this.element.removeEventListener(this.name, this, a), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Yt {
  constructor(e, i, a) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = a;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    X(this, e);
  }
}
const Se = ae.litHtmlPolyfillSupport;
Se == null || Se(se, pe), (ae.litHtmlVersions ?? (ae.litHtmlVersions = [])).push("3.3.3");
const Vt = (t, e, i) => {
  const a = (i == null ? void 0 : i.renderBefore) ?? e;
  let o = a._$litPart$;
  if (o === void 0) {
    const r = (i == null ? void 0 : i.renderBefore) ?? null;
    a._$litPart$ = o = new pe(e.insertBefore(ne(), r), r, void 0, i ?? {});
  }
  return o._$AI(t), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class j extends Y {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Vt(i, this.renderRoot, this.renderOptions);
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
    return Z;
  }
}
var ht;
j._$litElement$ = !0, j.finalized = !0, (ht = G.litElementHydrateSupport) == null || ht.call(G, { LitElement: j });
const Ce = G.litElementPolyfillSupport;
Ce == null || Ce({ LitElement: j });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = (t) => (e, i) => {
  i !== void 0 ? i.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qt = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: Oe }, Zt = (t = qt, e, i) => {
  const { kind: a, metadata: o } = i;
  let r = globalThis.litPropertyMetadata.get(o);
  if (r === void 0 && globalThis.litPropertyMetadata.set(o, r = /* @__PURE__ */ new Map()), a === "setter" && ((t = Object.create(t)).wrapped = !0), r.set(i.name, t), a === "accessor") {
    const { name: n } = i;
    return { set(l) {
      const s = e.get.call(this);
      e.set.call(this, l), this.requestUpdate(n, s, t, !0, l);
    }, init(l) {
      return l !== void 0 && this.C(n, void 0, t, l), l;
    } };
  }
  if (a === "setter") {
    const { name: n } = i;
    return function(l) {
      const s = this[n];
      e.call(this, l), this.requestUpdate(n, s, t, !0, l);
    };
  }
  throw Error("Unsupported decorator location: " + a);
};
function b(t) {
  return (e, i) => typeof i == "object" ? Zt(t, e, i) : ((a, o, r) => {
    const n = o.hasOwnProperty(r);
    return o.constructor.createProperty(r, a), n ? Object.getOwnPropertyDescriptor(o, r) : void 0;
  })(t, e, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function A(t) {
  return b({ ...t, state: !0, attribute: !1 });
}
function ge(t, e = 0.16) {
  const i = (t || "").trim(), a = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i);
  if (a) {
    let n = a[1];
    n.length === 3 && (n = n.split("").map((p) => p + p).join(""));
    const l = parseInt(n.slice(0, 2), 16), s = parseInt(n.slice(2, 4), 16), d = parseInt(n.slice(4, 6), 16);
    return `rgba(${l}, ${s}, ${d}, ${e})`;
  }
  const o = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i.exec(i);
  if (o)
    return `rgba(${o[1]}, ${o[2]}, ${o[3]}, ${e})`;
  const r = Math.round(e * 100);
  return `color-mix(in srgb, ${i || "#1a73e8"} ${r}%, transparent)`;
}
function Xt(t) {
  var p;
  const e = !!t.transparent, i = typeof t.background_opacity == "number" && !Number.isNaN(t.background_opacity) ? Math.max(0, Math.min(100, t.background_opacity)) : e ? 0 : 100, a = e || i === 0, o = !a && i < 100, r = (p = t.background_color) == null ? void 0 : p.trim(), n = typeof t.border_radius == "number" && !Number.isNaN(t.border_radius) ? Math.max(0, t.border_radius) : 24, l = typeof t.backdrop_blur == "number" && !Number.isNaN(t.backdrop_blur) ? Math.max(0, t.backdrop_blur) : o ? 12 : 0, s = [
    `border-radius: ${n}px`,
    `--ha-card-border-radius: ${n}px`
  ];
  if (a)
    s.push(
      "background: transparent !important",
      "border-width: 0px",
      "border-color: transparent",
      "--ha-card-border-width: 0px",
      "box-shadow: none",
      "--ha-card-box-shadow: none"
    );
  else {
    if (o) {
      const h = r || "var(--ha-card-background, var(--card-background-color, #1c1d21))";
      s.push(`background: color-mix(in srgb, ${h} ${i}%, transparent)`);
    } else r && s.push(`background: ${r}`);
    l > 0 && s.push(
      `backdrop-filter: blur(${l}px)`,
      `-webkit-backdrop-filter: blur(${l}px)`
    ), t.hide_border && s.push(
      "border-width: 0px",
      "border-color: transparent",
      "--ha-card-border-width: 0px"
    ), t.hide_shadow && s.push("box-shadow: none", "--ha-card-box-shadow: none");
  }
  const d = [];
  return a && d.push("is-transparent"), o && d.push("has-opacity"), {
    className: d.join(" "),
    style: s.join("; ")
  };
}
const we = J`
  :host {
    display: block;
    height: 100%;
    box-sizing: border-box;
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
    height: 100%;
    box-sizing: border-box;
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
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    scrollbar-width: thin;
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
    transition: opacity 0.15s ease, filter 0.15s ease;
  }

  .min-event-item:hover {
    opacity: 0.86;
  }

  .min-event-item.is-past {
    opacity: 0.48;
    filter: grayscale(1);
  }

  .min-event-item.is-past:hover {
    opacity: 0.78;
  }

  .min-event-item.is-past .min-event-title,
  .min-event-item.is-past .min-event-time {
    text-decoration: line-through;
    text-decoration-thickness: 1.5px;
    color: var(--cal-text-secondary);
  }

  .min-event-item.is-past .min-event-icon,
  .min-event-item.is-past .min-event-duration {
    color: var(--cal-text-secondary);
  }

  .min-event-item.is-past .min-progress-track {
    background: color-mix(in srgb, var(--cal-text-secondary) 22%, transparent);
  }

  .min-event-item.is-past .min-progress-fill {
    background: var(--cal-text-secondary);
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
function x(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0);
}
function xe(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1, 0, 0, 0, 0);
}
function O(t, e) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate() + e, 0, 0, 0, 0);
}
function ct(t, e) {
  return new Date(t.getFullYear(), t.getMonth() + e, 1, 0, 0, 0, 0);
}
function D(t, e) {
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
}
function dt(t) {
  const e = /^(\d{4})-(\d{2})-(\d{2})/.exec(t);
  if (!e)
    return new Date(t);
  const i = Number(e[1]), a = Number(e[2]) - 1, o = Number(e[3]);
  return new Date(i, a, o, 0, 0, 0, 0);
}
function xt(t) {
  const e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())), i = e.getUTCDay() || 7;
  e.setUTCDate(e.getUTCDate() + 4 - i);
  const a = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
  return Math.ceil(((e.getTime() - a.getTime()) / 864e5 + 1) / 7);
}
function Qt(t, e, i) {
  const a = (i % 7 + 7) % 7, o = new Date(t, e, 1, 0, 0, 0, 0), r = new Date(t, e + 1, 0, 0, 0, 0, 0), n = (o.getDay() - a + 7) % 7, l = O(o, -n), s = (a + 6 - r.getDay() + 7) % 7, d = n + r.getDate() + s, p = x(/* @__PURE__ */ new Date()), h = [];
  for (let g = 0; g < d; g++) {
    const v = O(l, g);
    h.push({
      date: v,
      isCurrentMonth: v.getMonth() === e && v.getFullYear() === t,
      isToday: D(v, p),
      weekNumber: xt(v)
    });
  }
  return h;
}
function Jt(t, e) {
  const i = (t % 7 + 7) % 7, a = new Date(2026, 10, 1), o = new Intl.DateTimeFormat(e, { weekday: "short" }), r = [];
  for (let n = 0; n < 7; n++) {
    const l = (i + n) % 7, s = O(a, l);
    r.push(q(o.format(s).replace(/\.$/, "")));
  }
  return r;
}
function ei(t, e, i) {
  const a = t.start.getTime(), o = t.end.getTime(), r = e.getTime(), n = i.getTime();
  return o <= a ? a >= r && a < n : a < n && o > r;
}
function ve(t, e = /* @__PURE__ */ new Date()) {
  return t.allDay ? x(e).getTime() >= x(t.end).getTime() : e.getTime() >= t.end.getTime();
}
function _t(t, e = {}) {
  const i = e.showAllDay !== !1, a = e.allDayPosition === "bottom" ? "bottom" : "top", o = e.showCompleted !== !1, r = e.now || /* @__PURE__ */ new Date();
  return t.filter((n) => !(!i && n.allDay || !o && ve(n, r))).sort((n, l) => n.allDay !== l.allDay ? a === "bottom" ? n.allDay ? 1 : -1 : n.allDay ? -1 : 1 : n.start.getTime() - l.start.getTime());
}
function V(t, e, i) {
  const a = x(e), o = xe(e), r = t.filter((n) => ei(n, a, o));
  return _t(r, i);
}
function ye(t, e) {
  return new Intl.DateTimeFormat(e, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(t);
}
function B(t) {
  const e = t.getHours(), i = String(t.getMinutes()).padStart(2, "0");
  return `${e}:${i}`;
}
function ti(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    month: "long",
    year: "numeric"
  }).format(t);
  return q(i);
}
function Fe(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(t);
  return q(i);
}
const $t = {
  es: "a",
  "zh-Hans": "-",
  de: "bis",
  en: "to",
  pt: "a",
  it: "alle",
  fr: "à",
  ru: "до",
  pl: "do",
  nl: "tot"
};
function ii(t, e, i) {
  if (t.allDay)
    return i;
  const a = $t[e] || "to";
  return `${B(t.start)} ${a} ${B(t.end)}`;
}
function oi(t, e, i, a) {
  if (t.allDay) {
    const d = x(t.start), p = O(x(t.end), -1), h = new Intl.DateTimeFormat(e, {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    return p.getTime() > d.getTime() ? `${h.format(d)} – ${h.format(p)} (${a})` : `${h.format(d)} · ${a}`;
  }
  const o = D(t.start, t.end), r = new Intl.DateTimeFormat(e, {
    weekday: "short",
    day: "numeric",
    month: "short"
  }), n = ye(t.start, e), l = ye(t.end, e);
  if (o)
    return `${q(r.format(t.start))}, ${n} – ${l}`;
  const s = $t[i] || "to";
  return `${q(r.format(t.start))} ${n} ${s} ${q(r.format(t.end))} ${l}`;
}
function q(t) {
  return t && t.charAt(0).toUpperCase() + t.slice(1);
}
function De(t, e) {
  const i = Math.max(1, Math.round(t / 6e4));
  if (i >= 45) {
    const a = Math.max(1, Math.round(i / 60));
    return `${a} ${a === 1 ? e.hourRemaining : e.hoursRemaining}`;
  }
  return `${i} ${e.minutesRemaining}`;
}
function Re(t, e, i) {
  if (t.allDay) {
    const p = x(e).getTime(), h = x(t.start).getTime(), g = x(t.end).getTime();
    if (p < h)
      return {
        progressPct: 0,
        label: i.allDay,
        isOngoing: !1,
        isPast: !1,
        isFuture: !0
      };
    if (p >= g)
      return {
        progressPct: 100,
        label: i.allDay,
        isOngoing: !1,
        isPast: !0,
        isFuture: !1
      };
    const v = e.getHours() * 60 + e.getMinutes();
    return {
      progressPct: Math.min(100, Math.max(0, v / 1440 * 100)),
      label: i.allDay,
      isOngoing: !0,
      isPast: !1,
      isFuture: !1
    };
  }
  const a = t.start.getTime(), o = t.end.getTime(), r = e.getTime(), n = Math.max(6e4, o - a);
  if (r < a)
    return {
      progressPct: 0,
      label: De(n, i),
      isOngoing: !1,
      isPast: !1,
      isFuture: !0
    };
  if (r >= o)
    return {
      progressPct: 100,
      label: De(n, i),
      isOngoing: !1,
      isPast: !0,
      isFuture: !1
    };
  const l = r - a, s = Math.min(100, Math.max(0, l / n * 100)), d = o - r;
  return {
    progressPct: s,
    label: De(d, i),
    isOngoing: !0,
    isPast: !1,
    isFuture: !1
  };
}
function ai(t, e) {
  const i = new Intl.DateTimeFormat(e, { weekday: "short" }).format(t).replace(/\.$/, ""), a = t.getDate(), o = new Intl.DateTimeFormat(e, { month: "short" }).format(t).replace(/\.$/, "");
  return {
    weekdayDay: `${i}. ${a}`,
    month: o
  };
}
const ni = 6e4, Pe = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map();
function ri() {
  Pe.clear();
}
function ze(t, e) {
  const i = Array.isArray(t.entities) && t.entities.length > 0 ? t.entities : t.entity ? [t.entity] : [], a = [];
  return i.forEach((o, r) => {
    var h, g, v, m, f, _;
    const n = typeof o == "string" ? { entity: o } : o, l = ((n == null ? void 0 : n.entity) || "").trim();
    if (!l) return;
    const s = (h = e == null ? void 0 : e.states) == null ? void 0 : h[l], d = typeof ((g = s == null ? void 0 : s.attributes) == null ? void 0 : g.friendly_name) == "string" ? s.attributes.friendly_name : void 0, p = typeof ((v = s == null ? void 0 : s.attributes) == null ? void 0 : v.icon) == "string" ? s.attributes.icon : void 0;
    a.push({
      entity: l,
      name: ((m = n.name) == null ? void 0 : m.trim()) || d || l,
      color: ((f = n.color) == null ? void 0 : f.trim()) || M[r % M.length],
      icon: ((_ = n.icon) == null ? void 0 : _.trim()) || p || Te,
      hidden: !!n.hidden
    });
  }), a;
}
function pt(t) {
  if (!t)
    return { date: /* @__PURE__ */ new Date(), isDateOnly: !1 };
  if (typeof t == "string") {
    const e = /^\d{4}-\d{2}-\d{2}$/.test(t.trim());
    return {
      date: e ? dt(t.trim()) : new Date(t),
      isDateOnly: e
    };
  }
  return t.date && !t.dateTime ? {
    date: dt(t.date),
    isDateOnly: !0
  } : t.dateTime ? {
    date: new Date(t.dateTime),
    isDateOnly: !1
  } : { date: /* @__PURE__ */ new Date(), isDateOnly: !1 };
}
function si(t, e, i) {
  const a = pt(t.start), o = pt(t.end);
  if (Number.isNaN(a.date.getTime()))
    return null;
  const r = a.isDateOnly, n = a.date;
  let l = Number.isNaN(o.date.getTime()) ? new Date(n) : o.date;
  r && l.getTime() <= n.getTime() ? l = O(n, 1) : !r && l.getTime() < n.getTime() && (l = new Date(n));
  const s = t.uid || `${n.getTime()}-${i}`;
  return {
    id: `${e.entity}::${s}::${n.toISOString()}`,
    uid: t.uid || void 0,
    summary: (t.summary || "(Sin título)").trim(),
    description: (t.description || "").trim(),
    location: (t.location || "").trim(),
    start: n,
    end: l,
    allDay: r,
    calendarEntity: e.entity,
    calendarName: e.name,
    color: e.color,
    icon: e.icon
  };
}
async function li(t, e, i, a, o = !1) {
  const r = i.toISOString(), n = a.toISOString(), l = `${e.entity}|${e.name}|${e.color}|${e.icon}|${r}|${n}`;
  if (!o) {
    const p = Pe.get(l);
    if (p && Date.now() - p.timestamp < ni)
      return p.events;
    const h = Ae.get(l);
    if (h)
      return h;
  }
  const s = `calendars/${encodeURIComponent(e.entity)}?start=${encodeURIComponent(
    r
  )}&end=${encodeURIComponent(n)}`, d = t.callApi("GET", s).then((p) => {
    const h = (Array.isArray(p) ? p : []).map((g, v) => si(g, e, v)).filter((g) => g !== null);
    return Pe.set(l, {
      timestamp: Date.now(),
      events: h
    }), h;
  }).finally(() => {
    Ae.delete(l);
  });
  return Ae.set(l, d), d;
}
async function ci(t, e, i, a, o = !1) {
  if (!t || e.length === 0)
    return { events: [], failedEntities: [] };
  const r = await Promise.allSettled(
    e.map(
      (s) => li(t, s, i, a, o)
    )
  ), n = [], l = [];
  return r.forEach((s, d) => {
    s.status === "fulfilled" ? n.push(...s.value) : l.push(e[d].entity);
  }), n.sort((s, d) => s.start.getTime() - d.start.getTime()), { events: n, failedEntities: l };
}
var di = Object.defineProperty, pi = Object.getOwnPropertyDescriptor, T = (t, e, i, a) => {
  for (var o = a > 1 ? void 0 : a ? pi(e, i) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (o = (a ? n(e, i, o) : n(o)) || o);
  return a && o && di(e, i, o), o;
};
let E = class extends j {
  constructor() {
    super(...arguments), this.cardTitle = "", this.periodLabel = "", this.entities = [], this.hiddenEntities = /* @__PURE__ */ new Set(), this.showEntityToggles = !0, this.showNavigation = !0, this.uppercasePeriod = !1, this.loading = !1, this.compact = !1;
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
    var t, e, i, a, o, r, n;
    return c`
      <div class="header-root ${this.compact ? "is-compact" : ""}">
        <div class="header-top">
          <div class="title-group">
            ${this.cardTitle ? c`<div class="card-subtitle">${this.cardTitle}</div>` : u}
            <div class="period-title ${this.uppercasePeriod ? "is-uppercase" : ""}">
              ${this.periodLabel}
            </div>
          </div>

          ${this.showNavigation ? c`
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
                    title=${((a = this.strings) == null ? void 0 : a.next) || "Next"}
                    aria-label=${((o = this.strings) == null ? void 0 : o.next) || "Next"}
                    @click=${() => this._emit("cal-next")}
                  >
                    <ha-icon icon="mdi:chevron-right"></ha-icon>
                  </button>

                  <button
                    class="icon-btn ${this.loading ? "spinning" : ""}"
                    type="button"
                    title=${((r = this.strings) == null ? void 0 : r.refresh) || "Refresh"}
                    aria-label=${((n = this.strings) == null ? void 0 : n.refresh) || "Refresh"}
                    @click=${() => this._emit("cal-refresh")}
                  >
                    <ha-icon icon="mdi:refresh"></ha-icon>
                  </button>
                </div>
              ` : u}
        </div>

        ${this.showEntityToggles && this.entities.length > 0 ? c`
              <div class="entity-chips">
                ${this.entities.map((l) => {
      const s = this.hiddenEntities.has(l.entity);
      return c`
                    <button
                      type="button"
                      class="entity-chip ${s ? "is-hidden" : ""}"
                      style="--chip-color: ${l.color}; --chip-bg: ${ge(
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
E.styles = J`
    :host {
      display: block;
    }

    .header-root {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 14px 14px 10px;
    }

    .header-root.is-compact {
      padding: 8px 12px 6px;
      gap: 6px;
    }

    .header-root.is-compact .period-title {
      font-size: 0.96rem;
    }

    .header-root.is-compact .card-subtitle {
      font-size: 0.7rem;
    }

    .header-root.is-compact .icon-btn,
    .header-root.is-compact .today-btn {
      height: 26px;
    }

    .header-root.is-compact .icon-btn {
      width: 26px;
      --mdc-icon-size: 16px;
    }

    .header-root.is-compact .today-btn {
      padding: 0 8px;
      font-size: 0.74rem;
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

    .period-title.is-uppercase {
      text-transform: uppercase;
      font-weight: 800;
      letter-spacing: 0.02em;
      font-size: 1.25rem;
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
T([
  b({ type: String })
], E.prototype, "cardTitle", 2);
T([
  b({ type: String })
], E.prototype, "periodLabel", 2);
T([
  b({ type: Array })
], E.prototype, "entities", 2);
T([
  b({ attribute: !1 })
], E.prototype, "hiddenEntities", 2);
T([
  b({ type: Boolean })
], E.prototype, "showEntityToggles", 2);
T([
  b({ type: Boolean })
], E.prototype, "showNavigation", 2);
T([
  b({ type: Boolean })
], E.prototype, "uppercasePeriod", 2);
T([
  b({ type: Boolean })
], E.prototype, "loading", 2);
T([
  b({ type: Boolean })
], E.prototype, "compact", 2);
T([
  b({ attribute: !1 })
], E.prototype, "strings", 2);
E = T([
  ee("ha-calendar-shared-header")
], E);
var hi = Object.defineProperty, ui = Object.getOwnPropertyDescriptor, H = (t, e, i, a) => {
  for (var o = a > 1 ? void 0 : a ? ui(e, i) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (o = (a ? n(e, i, o) : n(o)) || o);
  return a && o && hi(e, i, o), o;
};
let z = class extends j {
  constructor() {
    super(...arguments), this.event = null, this.dayDate = null, this.dayEvents = [], this.locale = "en-US", this.lang = "en", this.dimCompletedEvents = !0, this.now = /* @__PURE__ */ new Date(), this._handleKeydown = (t) => {
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
    var i, a, o, r, n, l, s;
    const e = oi(
      t,
      this.locale,
      this.lang,
      ((i = this.strings) == null ? void 0 : i.allDay) || "All day"
    );
    return c`
      <div class="dialog-header" style="--ev-color: ${t.color};">
        <div class="header-badge-row">
          <span
            class="calendar-badge"
            style="background: ${ge(t.color, 0.16)}; color: ${t.color};"
          >
            <ha-icon .icon=${t.icon}></ha-icon>
            <span>${t.calendarName}</span>
          </span>
          <button
            type="button"
            class="close-btn"
            aria-label=${((a = this.strings) == null ? void 0 : a.close) || "Close"}
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
            <div class="detail-label">${((o = this.strings) == null ? void 0 : o.when) || "When"}</div>
            <div class="detail-value">${e}</div>
          </div>
        </div>

        ${t.location ? c`
              <div class="detail-row">
                <ha-icon icon="mdi:map-marker-outline"></ha-icon>
                <div>
                  <div class="detail-label">${((r = this.strings) == null ? void 0 : r.location) || "Location"}</div>
                  <div class="detail-value">${t.location}</div>
                </div>
              </div>
            ` : u}

        ${t.description ? c`
              <div class="detail-row">
                <ha-icon icon="mdi:text"></ha-icon>
                <div>
                  <div class="detail-label">
                    ${((n = this.strings) == null ? void 0 : n.description) || "Description"}
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
    var e, i, a;
    if (!this.dayDate) return u;
    const t = Fe(this.dayDate, this.locale);
    return c`
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
        ${this.dayEvents.length === 0 ? c`<div class="empty-day">${((a = this.strings) == null ? void 0 : a.noEvents) || "No events"}</div>` : this.dayEvents.map((o) => {
      var l;
      const r = this.dimCompletedEvents && ve(o, this.now), n = o.allDay ? ((l = this.strings) == null ? void 0 : l.allDay) || "All day" : `${ye(o.start, this.locale)} – ${ye(
        o.end,
        this.locale
      )}`;
      return c`
                <button
                  type="button"
                  class="day-event-row ${r ? "is-past" : ""}"
                  style="--ev-color: ${o.color}; --ev-bg: ${ge(
        o.color,
        0.12
      )};"
                  @click=${() => this._selectEventFromList(o)}
                >
                  <ha-icon class="row-icon" .icon=${o.icon}></ha-icon>
                  <div class="row-main">
                    <div class="row-title">${o.summary}</div>
                    <div class="row-sub">
                      <span>${n}</span>
                      <span>·</span>
                      <span>${o.calendarName}</span>
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
    return !(this.event || this.dayDate) ? u : c`
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
z.styles = J`
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
H([
  b({ attribute: !1 })
], z.prototype, "event", 2);
H([
  b({ attribute: !1 })
], z.prototype, "dayDate", 2);
H([
  b({ type: Array })
], z.prototype, "dayEvents", 2);
H([
  b({ type: String })
], z.prototype, "locale", 2);
H([
  b({ type: String })
], z.prototype, "lang", 2);
H([
  b({ attribute: !1 })
], z.prototype, "strings", 2);
H([
  b({ type: Boolean })
], z.prototype, "dimCompletedEvents", 2);
H([
  b({ attribute: !1 })
], z.prototype, "now", 2);
z = H([
  ee("ha-calendar-event-dialog")
], z);
var mi = Object.defineProperty, N = (t, e, i, a) => {
  for (var o = void 0, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (o = n(e, i, o) || o);
  return o && mi(e, i, o), o;
};
function Ie(t) {
  const e = Object.keys((t == null ? void 0 : t.states) || {}).filter((i) => i.startsWith("calendar.")).slice(0, 3);
  return e.length > 0 ? e.map((i, a) => {
    var l, s, d;
    const o = (l = t == null ? void 0 : t.states) == null ? void 0 : l[i], r = typeof ((s = o == null ? void 0 : o.attributes) == null ? void 0 : s.friendly_name) == "string" ? o.attributes.friendly_name : void 0, n = typeof ((d = o == null ? void 0 : o.attributes) == null ? void 0 : d.icon) == "string" ? o.attributes.icon : "mdi:calendar";
    return {
      entity: i,
      name: r,
      color: M[a % M.length],
      icon: n
    };
  }) : [
    {
      entity: "calendar.personal",
      name: "Personal",
      color: M[0],
      icon: "mdi:calendar-account"
    },
    {
      entity: "calendar.trabajo",
      name: "Trabajo",
      color: M[1],
      icon: "mdi:briefcase-outline"
    }
  ];
}
const We = class We extends j {
  constructor() {
    super(...arguments), this._anchorDate = x(/* @__PURE__ */ new Date()), this._events = [], this._loading = !1, this._failedEntities = [], this._hiddenEntities = /* @__PURE__ */ new Set(), this._selectedEvent = null, this._selectedDayDate = null, this._currentNow = /* @__PURE__ */ new Date(), this._lastFetchKey = "", this._fetchRequestId = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    const e = this._currentNow, i = /* @__PURE__ */ new Date();
    this._currentNow = i, this.handleDayRollover(e, i), this._tickerId = window.setInterval(() => {
      const a = this._currentNow, o = /* @__PURE__ */ new Date();
      this._currentNow = o, this.handleDayRollover(a, o);
    }, 3e4);
  }
  autoFollowToday() {
    return !1;
  }
  handleDayRollover(e, i) {
    if (this.autoFollowToday() && !D(this._anchorDate, i)) {
      this._anchorDate = x(i);
      return;
    }
    !D(e, i) && D(this._anchorDate, e) && (this._anchorDate = x(i));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._tickerId !== void 0 && (window.clearInterval(this._tickerId), this._tickerId = void 0);
  }
  static async getConfigElement() {
    var e, i, a;
    try {
      const o = window, r = await ((e = o.loadCardHelpers) == null ? void 0 : e.call(o));
      if (r && !customElements.get("ha-selector")) {
        const n = await r.createCardElement({ type: "entities", entities: [] });
        await ((a = (i = n == null ? void 0 : n.constructor) == null ? void 0 : i.getConfigElement) == null ? void 0 : a.call(i));
      }
    } catch {
    }
    return document.createElement(ut);
  }
  setConfig(e) {
    if (!e)
      throw new Error("Invalid configuration");
    this._config = {
      first_day_of_week: 1,
      ...e
    };
    const i = ze(this._config, this.hass);
    this._hiddenEntities = new Set(
      i.filter((a) => a.hidden).map((a) => a.entity)
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
  isCompactHeader() {
    return !1;
  }
  showHeaderNavigation() {
    var e;
    return ((e = this._config) == null ? void 0 : e.show_navigation) !== !1;
  }
  isUppercaseHeader() {
    return !1;
  }
  shouldDimCompletedEvents() {
    var e;
    return ((e = this._config) == null ? void 0 : e.dim_completed_events) !== !1;
  }
  getDayFilterOptions() {
    var e, i, a;
    return {
      showAllDay: ((e = this._config) == null ? void 0 : e.show_all_day_events) !== !1,
      allDayPosition: ((i = this._config) == null ? void 0 : i.all_day_position) === "bottom" ? "bottom" : "top",
      showCompleted: ((a = this._config) == null ? void 0 : a.show_completed_events) !== !1,
      now: this._currentNow
    };
  }
  renderMinimalDayBlock(e, i, a, o, r = !0) {
    var g, v;
    const n = ai(e, a), l = !!((g = this._config) != null && g.use_entity_color), s = ((v = this._config) == null ? void 0 : v.show_current_day) !== !1, d = this.shouldDimCompletedEvents(), p = _t(
      i,
      this.getDayFilterOptions()
    ), h = D(e, this._currentNow) ? o.noEvents : o.noEventsDay;
    return c`
      <div class="min-day-row">
        ${s ? c`
              <div class="min-date-col">
                <span class="min-date-day">${n.weekdayDay}</span>
                <span class="min-date-month">${n.month}</span>
              </div>
            ` : u}

        <div class="min-events-col">
          ${p.length === 0 ? c`<div class="min-empty-text">${h}</div>` : p.map((m) => {
      const f = Re(
        m,
        this._currentNow,
        o
      ), _ = d && f.isPast, S = m.allDay ? o.allDay : `${B(m.start)} - ${B(m.end)}`, L = l ? `--min-ev-accent: ${m.color};` : "", C = m.summary && m.summary !== "(Sin título)" ? m.summary : m.calendarName;
      return c`
                  <button
                    type="button"
                    class="min-event-item ${_ ? "is-past" : ""}"
                    style=${L}
                    @click=${(F) => {
        F.stopPropagation(), this._selectedEvent = m;
      }}
                  >
                    <div class="min-event-top">
                      <div class="min-event-title-wrap">
                        <ha-icon class="min-event-icon" .icon=${m.icon}></ha-icon>
                        <span class="min-event-title">${C}</span>
                      </div>
                      <span class="min-event-time">${S}</span>
                    </div>

                    <div class="min-event-sub">
                      <span class="min-event-duration">${f.label}</span>
                      ${r ? c`
                            <div
                              class="min-progress-track"
                              role="progressbar"
                              aria-valuenow=${Math.round(f.progressPct)}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div
                                class="min-progress-fill"
                                style="width: ${f.progressPct}%;"
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
    const i = ze(this._config, this.hass);
    if (i.length === 0) {
      this._events = [], this._failedEntities = [], this._lastFetchKey = "";
      return;
    }
    const { start: a, end: o } = this.getFetchRange(), n = `${i.map((l) => `${l.entity}|${l.name}|${l.color}|${l.icon}`).join(";")}::${a.toISOString()}::${o.toISOString()}`;
    !e && n === this._lastFetchKey || (this._lastFetchKey = n, this._loadEvents(i, a, o, e));
  }
  async _loadEvents(e, i, a, o) {
    if (!this.hass) return;
    const r = ++this._fetchRequestId;
    this._loading = !0;
    try {
      const n = await ci(
        this.hass,
        e,
        i,
        a,
        o
      );
      if (r !== this._fetchRequestId) return;
      this._events = n.events, this._failedEntities = n.failedEntities;
    } catch {
      if (r !== this._fetchRequestId) return;
      this._failedEntities = e.map((n) => n.entity);
    } finally {
      r === this._fetchRequestId && (this._loading = !1);
    }
  }
  _handleRefresh() {
    ri(), this._triggerFetchIfNeeded(!0);
  }
  _handleToggleEntity(e) {
    var o;
    const i = (o = e.detail) == null ? void 0 : o.entity;
    if (!i) return;
    const a = new Set(this._hiddenEntities);
    a.has(i) ? a.delete(i) : a.add(i), this._hiddenEntities = a;
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
    return this._selectedDayDate ? V(
      e,
      this._selectedDayDate,
      this.getDayFilterOptions()
    ) : [];
  }
  render() {
    if (!this._config) return u;
    const e = gt(this._config.language, this.hass), i = Dt(e, this.hass), a = mt[e], o = ze(this._config, this.hass), r = this._events.filter(
      (p) => !this._hiddenEntities.has(p.calendarEntity)
    ), n = this.useSharedHeader(), l = this._config.show_entity_toggles !== !1, s = this.isMinimalSurface(), d = Xt(this._config);
    return c`
      <ha-card class=${d.className} style=${d.style}>
        ${!s || this._loading ? c`<div class="loading-bar ${this._loading ? "active" : ""}"></div>` : u}

        ${n ? c`
              <ha-calendar-shared-header
                .cardTitle=${this._config.title || ""}
                .periodLabel=${this.getPeriodLabel(i)}
                .entities=${o}
                .hiddenEntities=${this._hiddenEntities}
                .showEntityToggles=${l}
                .showNavigation=${this.showHeaderNavigation()}
                .uppercasePeriod=${this.isUppercaseHeader()}
                .loading=${this._loading}
                .compact=${this.isCompactHeader()}
                .strings=${a}
                @cal-prev=${() => this.navigatePrev()}
                @cal-today=${() => this.navigateToday()}
                @cal-next=${() => this.navigateNext()}
                @cal-refresh=${() => this._handleRefresh()}
                @cal-toggle-entity=${this._handleToggleEntity}
              ></ha-calendar-shared-header>
            ` : u}

        ${this._failedEntities.length > 0 ? c`
              <div class="status-banner" role="status">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                <span>
                  ${a.errorLoading}: ${this._failedEntities.join(", ")}
                </span>
              </div>
            ` : u}

        ${o.length === 0 ? c`
              <div class="empty-state">
                <ha-icon icon="mdi:calendar-blank-multiple"></ha-icon>
                <div class="empty-state-title">${a.noCalendars}</div>
                <div class="empty-state-hint">${a.noCalendarsHint}</div>
              </div>
            ` : c`
              <div
                class="card-content-wrap ${s ? "minimal-pad" : ""}"
                @cal-event-click=${this._handleEventClick}
              >
                ${this.renderCalendarBody(
      r,
      o,
      i,
      e,
      a
    )}
              </div>
            `}
      </ha-card>

      <ha-calendar-event-dialog
        .event=${this._selectedEvent}
        .dayDate=${this._selectedDayDate}
        .dayEvents=${this._getDayDialogEvents(r)}
        .dimCompletedEvents=${this.shouldDimCompletedEvents()}
        .now=${this._currentNow}
        .locale=${i}
        .lang=${e}
        .strings=${a}
        @cal-dialog-close=${this._handleDialogClose}
        @cal-select-event=${this._handleSelectEventFromDay}
      ></ha-calendar-event-dialog>
    `;
  }
};
We.styles = [we];
let $ = We;
N([
  b({ attribute: !1 })
], $.prototype, "hass");
N([
  A()
], $.prototype, "_config");
N([
  A()
], $.prototype, "_anchorDate");
N([
  A()
], $.prototype, "_events");
N([
  A()
], $.prototype, "_loading");
N([
  A()
], $.prototype, "_failedEntities");
N([
  A()
], $.prototype, "_hiddenEntities");
N([
  A()
], $.prototype, "_selectedEvent");
N([
  A()
], $.prototype, "_selectedDayDate");
N([
  A()
], $.prototype, "_currentNow");
var gi = Object.defineProperty, vi = Object.getOwnPropertyDescriptor, je = (t, e, i, a) => {
  for (var o = a > 1 ? void 0 : a ? vi(e, i) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (o = (a ? n(e, i, o) : n(o)) || o);
  return a && o && gi(e, i, o), o;
};
let le = class extends $ {
  constructor() {
    super(...arguments), this._focusedDay = x(/* @__PURE__ */ new Date()), this._carouselIndex = 0, this._touchStartX = null, this._touchStartY = null;
  }
  _getLayout() {
    var t;
    return ((t = this._config) == null ? void 0 : t.layout) === "compact" ? "compact" : "classic";
  }
  _getCalendarSize() {
    var e, i;
    const t = (e = this._config) == null ? void 0 : e.calendar_size;
    return t === "compact" || t === "normal" || t === "large" ? t : ((i = this._config) == null ? void 0 : i.compact) === !0 ? "compact" : "normal";
  }
  _getEventDisplay() {
    var t;
    return ((t = this._config) == null ? void 0 : t.event_display) === "dots" ? "dots" : "pills";
  }
  _focusDay(t) {
    this._focusedDay = x(t), this._carouselIndex = 0;
  }
  _stepCarousel(t, e) {
    const i = Math.max(0, e - 2), a = Math.min(i, Math.max(0, this._carouselIndex + t));
    this._carouselIndex = a;
  }
  _onCarouselTouchStart(t) {
    var i;
    const e = (i = t.touches) == null ? void 0 : i[0];
    e && (this._touchStartX = e.clientX, this._touchStartY = e.clientY);
  }
  _onCarouselTouchEnd(t, e) {
    var l;
    if (this._touchStartX === null || this._touchStartY === null) return;
    const i = (l = t.changedTouches) == null ? void 0 : l[0], a = this._touchStartX, o = this._touchStartY;
    if (this._touchStartX = null, this._touchStartY = null, !i || e <= 2) return;
    const r = i.clientX - a, n = i.clientY - o;
    Math.abs(r) >= 32 && Math.abs(r) > Math.abs(n) && this._stepCarousel(r < 0 ? 1 : -1, e);
  }
  static getStubConfig(t) {
    return {
      type: `custom:${fe}`,
      entities: Ie(t),
      first_day_of_week: 1,
      layout: "classic",
      calendar_size: "normal",
      event_display: "pills",
      max_events_per_day: 3,
      show_header: !0,
      show_navigation: !0,
      show_entity_toggles: !1,
      show_week_numbers: !1,
      show_month_grid: !0,
      show_day_summary: !0,
      show_progress_bar: !0,
      dim_completed_events: !0,
      transparent: !1,
      background_opacity: 100
    };
  }
  getCardSize() {
    var i, a;
    if (((i = this._config) == null ? void 0 : i.show_month_grid) === !1) return 2;
    const t = this._getCalendarSize(), e = ((a = this._config) == null ? void 0 : a.show_day_summary) !== !1;
    return t === "compact" ? e ? 4 : 3 : t === "large" ? e ? 7 : 6 : e ? 5 : 4;
  }
  getGridOptions() {
    var a, o;
    if (((a = this._config) == null ? void 0 : a.show_month_grid) === !1)
      return {
        columns: 12,
        min_columns: 6,
        rows: 2,
        min_rows: 2
      };
    const t = this._getCalendarSize(), e = ((o = this._config) == null ? void 0 : o.show_day_summary) !== !1;
    return {
      columns: 12,
      min_columns: 6,
      rows: t === "compact" ? e ? 6 : 4 : t === "large" ? e ? 10 : 8 : e ? 7 : 5,
      min_rows: 4
    };
  }
  isMinimalSurface() {
    return !0;
  }
  isCompactHeader() {
    return this._getCalendarSize() === "compact";
  }
  isUppercaseHeader() {
    return this._getLayout() === "compact";
  }
  getFetchRange() {
    const t = this._getGridDays();
    return {
      start: t[0].date,
      end: xe(t[t.length - 1].date)
    };
  }
  getPeriodLabel(t) {
    return ti(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = ct(this._anchorDate, -1), this._focusDay(
      new Date(
        this._anchorDate.getFullYear(),
        this._anchorDate.getMonth(),
        1
      )
    );
  }
  navigateNext() {
    this._anchorDate = ct(this._anchorDate, 1), this._focusDay(
      new Date(
        this._anchorDate.getFullYear(),
        this._anchorDate.getMonth(),
        1
      )
    );
  }
  navigateToday() {
    const t = /* @__PURE__ */ new Date();
    this._anchorDate = new Date(t.getFullYear(), t.getMonth(), 1, 0, 0, 0, 0), this._focusDay(t);
  }
  handleDayRollover(t, e) {
    D(t, e) || (D(this._focusedDay, t) && this._focusDay(e), this._anchorDate.getFullYear() === t.getFullYear() && this._anchorDate.getMonth() === t.getMonth() && (e.getFullYear() !== t.getFullYear() || e.getMonth() !== t.getMonth()) && (this._anchorDate = new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0)));
  }
  _getGridDays() {
    return Qt(
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
  _renderDayDots(t, e, i, a = "") {
    return c`
      <div class="day-dots ${a}">
        ${t.map((o) => {
      const r = i && ve(o, this._currentNow), n = o.allDay ? `${o.calendarName}: ${o.summary}` : `${B(o.start)} ${o.summary} (${o.calendarName})`;
      return c`
            <span
              class="event-dot ${o.allDay ? "all-day" : "timed"} ${r ? "is-past" : ""}"
              style="--ev-color: ${o.color};"
              title=${n}
            ></span>
          `;
    })}
        ${e > 0 ? c`<span class="dots-more">+${e}</span>` : u}
      </div>
    `;
  }
  _renderCompactFocusBar(t, e, i, a, o, r) {
    var v;
    const n = new Intl.DateTimeFormat(e, {
      weekday: "long"
    }).format(this._focusedDay), l = !!((v = this._config) != null && v.use_entity_color), s = t.length, d = Math.max(0, s - 2), p = Math.min(Math.max(0, this._carouselIndex), d), h = t.slice(p, p + 2), g = D(this._focusedDay, this._currentNow) ? i.noEvents : i.noEventsDay;
    return c`
      <div class="compact-focus-bar ${a ? "" : "no-date-col"}">
        ${a ? c`
              <div class="compact-date-col">
                <span class="compact-weekday">${n}</span>
                <span class="compact-day-hero">${this._focusedDay.getDate()}</span>
              </div>
            ` : u}

        <div
          class="compact-events-carousel"
          @touchstart=${this._onCarouselTouchStart}
          @touchend=${(m) => this._onCarouselTouchEnd(m, s)}
        >
          ${s === 0 ? c`<div class="compact-empty-text">${g}</div>` : c`
                <div
                  class="compact-events-slots ${h.length > 1 ? "cols-2" : "cols-1"}"
                >
                  ${h.map((m) => {
      const f = Re(
        m,
        this._currentNow,
        i
      ), _ = r && f.isPast, S = m.allDay ? i.allDay : `${B(m.start)} - ${B(m.end)}`, L = m.summary && m.summary !== "(Sin título)" ? m.summary : m.calendarName, C = l ? `--slot-accent: ${m.color};` : "--slot-accent: var(--cal-accent);";
      return c`
                      <button
                        type="button"
                        class="compact-event-slot ${_ ? "is-past" : ""}"
                        style=${C}
                        @click=${(F) => this._onEventPillClick(F, m)}
                      >
                        <div class="compact-slot-time-row">
                          ${l ? c`<span class="compact-slot-dot"></span>` : u}
                          <span class="compact-slot-time">${S}</span>
                        </div>
                        <div class="compact-slot-title">${L}</div>
                        ${o && f.isOngoing ? c`
                              <div
                                class="compact-progress-track"
                                role="progressbar"
                                aria-valuenow=${Math.round(f.progressPct)}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div
                                  class="compact-progress-fill"
                                  style="width: ${f.progressPct}%;"
                                ></div>
                              </div>
                            ` : u}
                      </button>
                    `;
    })}
                </div>

                ${s > 2 ? c`
                      <div class="carousel-controls">
                        <button
                          type="button"
                          class="carousel-nav-btn carousel-prev"
                          ?disabled=${p === 0}
                          title=${i.prev}
                          aria-label=${i.prev}
                          @click=${(m) => {
      m.stopPropagation(), this._stepCarousel(-1, s);
    }}
                        >
                          <ha-icon icon="mdi:chevron-left"></ha-icon>
                        </button>
                        <button
                          type="button"
                          class="carousel-nav-btn carousel-next"
                          ?disabled=${p >= d}
                          title=${i.next}
                          aria-label=${i.next}
                          @click=${(m) => {
      m.stopPropagation(), this._stepCarousel(1, s);
    }}
                        >
                          <ha-icon icon="mdi:chevron-right"></ha-icon>
                        </button>
                      </div>
                    ` : u}
              `}
        </div>
      </div>
    `;
  }
  _renderCompactGrid(t, e, i, a, o, r, n, l, s, d) {
    return c`
      <div class="compact-grid-wrap">
        <div
          class="compact-weekday-row ${r ? "with-weeks" : ""}"
          role="row"
        >
          ${r ? c`<div class="compact-week-col-header">${d.weekAbbr}</div>` : u}
          ${e.map(
      (p) => c`<div class="compact-weekday-cell">${p}</div>`
    )}
        </div>

        <div class="compact-weeks-container">
          ${t.map((p) => {
      const h = p.some((g) => D(g.date, this._focusedDay));
      return c`
              <div
                class="compact-week-row ${r ? "with-weeks" : ""} ${h ? "is-active-week" : ""}"
              >
                ${r ? c`<div class="compact-week-number-cell">${p[0].weekNumber}</div>` : u}
                ${p.map((g) => {
        if (!g.isCurrentMonth)
          return c`<div class="compact-day-cell outside-month" aria-hidden="true"></div>`;
        const v = V(i, g.date, a), m = v.slice(0, o), f = v.length - m.length, _ = D(g.date, this._focusedDay), S = l && g.isToday;
        return c`
                    <button
                      type="button"
                      class="compact-day-cell ${S ? "is-today" : ""} ${_ ? "is-focused" : ""}"
                      @click=${() => {
          this._focusDay(g.date), !n && v.length > 0 && this._openDayList(g.date);
        }}
                    >
                      <span
                        class="compact-day-num ${_ ? "is-focused-badge" : ""} ${S ? "is-today-badge" : ""}"
                      >
                        ${g.date.getDate()}
                      </span>
                      ${m.length > 0 ? this._renderDayDots(
          m,
          f,
          s,
          "compact-day-dots"
        ) : u}
                    </button>
                  `;
      })}
              </div>
            `;
    })}
        </div>
      </div>
    `;
  }
  renderCalendarBody(t, e, i, a, o) {
    const r = this._getLayout(), n = this._getCalendarSize(), l = this._getEventDisplay(), s = !!this._config.show_week_numbers, d = this._config.show_month_grid !== !1, p = this._config.show_day_summary !== !1, h = this._config.show_progress_bar !== !1, g = r === "compact" || l === "dots" ? 4 : n === "compact" ? 2 : 3, v = Math.max(1, this._config.max_events_per_day ?? g), m = this._config.show_current_day !== !1, f = this.shouldDimCompletedEvents(), _ = this.getDayFilterOptions(), S = Jt(this.getFirstDayOfWeek(), i), L = this._getGridDays(), C = [];
    for (let k = 0; k < L.length; k += 7)
      C.push(L.slice(k, k + 7));
    const F = V(t, this._focusedDay, _);
    return r === "compact" ? c`
        <div class="month-root size-${n} display-dots layout-compact">
          ${p ? this._renderCompactFocusBar(
      F,
      i,
      o,
      m,
      h,
      f
    ) : u}
          ${d ? this._renderCompactGrid(
      C,
      S,
      t,
      _,
      v,
      s,
      p,
      m,
      f,
      o
    ) : u}
        </div>
      ` : c`
      <div class="month-root size-${n} display-${l} layout-classic">
        ${d ? c`
              <div class="month-grid-wrap">
                <div
                  class="weekday-row ${s ? "with-weeks" : ""}"
                  role="row"
                >
                  ${s ? c`<div class="week-col-header">${o.weekAbbr}</div>` : u}
                  ${S.map(
      (k) => c`<div class="weekday-cell">${k}</div>`
    )}
                </div>

                <div
                  class="weeks-container"
                  style="--mc-week-count: ${C.length};"
                >
                  ${C.map(
      (k) => c`
                      <div class="week-row ${s ? "with-weeks" : ""}">
                        ${s ? c`<div class="week-number-cell">${k[0].weekNumber}</div>` : u}
                        ${k.map((P) => {
        const y = V(t, P.date, _), te = y.slice(0, v), _e = y.length - te.length, kt = D(P.date, this._focusedDay), Ge = m && P.isToday;
        return c`
                            <div
                              class="day-cell ${P.isCurrentMonth ? "" : "outside-month"} ${Ge ? "is-today" : ""} ${kt ? "is-focused" : ""}"
                              @click=${() => {
          this._focusDay(P.date), !p && y.length > 0 && this._openDayList(P.date);
        }}
                            >
                              <div class="day-cell-top">
                                <span class="day-num ${Ge ? "today-circle" : ""}">
                                  ${P.date.getDate()}
                                </span>
                              </div>

                              <div class="day-events">
                                ${l === "dots" ? this._renderDayDots(
          te,
          _e,
          f
        ) : c`
                                      ${te.map((w) => {
          const Ke = f && ve(w, this._currentNow);
          return w.allDay ? c`
                                              <button
                                                type="button"
                                                class="event-pill all-day ${Ke ? "is-past" : ""}"
                                                style="--ev-color: ${w.color};"
                                                title=${`${w.calendarName}: ${w.summary}`}
                                                @click=${($e) => this._onEventPillClick($e, w)}
                                              >
                                                <ha-icon class="pill-icon" .icon=${w.icon}></ha-icon>
                                                <span class="pill-text">${w.summary}</span>
                                              </button>
                                            ` : c`
                                              <button
                                                type="button"
                                                class="event-pill timed ${Ke ? "is-past" : ""}"
                                                style="--ev-color: ${w.color}; --ev-bg: ${ge(
            w.color,
            0.14
          )};"
                                                title=${`${B(w.start)} ${w.summary} (${w.calendarName})`}
                                                @click=${($e) => this._onEventPillClick($e, w)}
                                              >
                                                <span class="pill-dot"></span>
                                                <span class="pill-time">
                                                  ${B(w.start)}
                                                </span>
                                                <span class="pill-text">${w.summary}</span>
                                              </button>
                                            `;
        })}

                                      ${_e > 0 ? c`
                                            <button
                                              type="button"
                                              class="more-btn"
                                              @click=${(w) => {
          w.stopPropagation(), this._openDayList(P.date);
        }}
                                            >
                                              +<span class="more-num">${_e}</span><span class="more-word"> ${o.moreEvents}</span>
                                            </button>
                                          ` : u}
                                    `}
                              </div>
                            </div>
                          `;
      })}
                      </div>
                    `
    )}
                </div>
              </div>
            ` : u}

        ${p ? c`
              <div class="month-focused-summary">
                ${this.renderMinimalDayBlock(
      this._focusedDay,
      F,
      i,
      o,
      h
    )}
              </div>
            ` : u}
      </div>
    `;
  }
};
le.styles = [
  we,
  J`
      .month-root {
        container-type: inline-size;
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        gap: 10px;
      }

      .month-root.size-compact {
        --mc-cell-min-h: 32px;
        --mc-cell-pad: 2px;
        --mc-day-num-size: 18px;
        --mc-day-font: 0.7rem;
        --mc-pill-font: 0.62rem;
        --mc-pill-pad: 1px 3px;
        --mc-pill-gap: 1px;
        --mc-dot-size: 5px;
        --mc-weekday-font: 0.65rem;
        --mc-weekday-pad: 4px 2px;
      }

      .month-root.size-compact.display-dots {
        --mc-cell-min-h: 28px;
      }

      .month-root.size-normal {
        --mc-cell-min-h: 50px;
        --mc-cell-pad: 3px;
        --mc-day-num-size: 22px;
        --mc-day-font: 0.76rem;
        --mc-pill-font: 0.69rem;
        --mc-pill-pad: 2px 4px;
        --mc-pill-gap: 2px;
        --mc-dot-size: 6px;
        --mc-weekday-font: 0.71rem;
        --mc-weekday-pad: 6px 4px;
      }

      .month-root.size-normal.display-dots {
        --mc-cell-min-h: 36px;
      }

      .month-root.size-large {
        --mc-cell-min-h: 78px;
        --mc-cell-pad: 5px;
        --mc-day-num-size: 26px;
        --mc-day-font: 0.84rem;
        --mc-pill-font: 0.75rem;
        --mc-pill-pad: 3px 5px;
        --mc-pill-gap: 3px;
        --mc-dot-size: 7px;
        --mc-weekday-font: 0.76rem;
        --mc-weekday-pad: 8px 4px;
      }

      .month-root.size-large.display-dots {
        --mc-cell-min-h: 48px;
      }

      .month-grid-wrap {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        min-height: 0;
        border: 1px solid color-mix(in srgb, var(--cal-text-primary) 12%, transparent);
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
        grid-template-columns: 28px repeat(7, minmax(0, 1fr));
      }

      .weekday-row {
        background: var(--cal-surface-alt);
        border-bottom: 1px solid color-mix(in srgb, var(--cal-text-primary) 12%, transparent);
        flex-shrink: 0;
      }

      .week-col-header,
      .weekday-cell {
        padding: var(--mc-weekday-pad);
        text-align: center;
        font-size: var(--mc-weekday-font);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        color: var(--cal-text-secondary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .weeks-container {
        display: grid;
        grid-template-rows: repeat(var(--mc-week-count, 6), minmax(var(--mc-cell-min-h), 1fr));
        flex: 1 1 auto;
        min-height: 0;
      }

      .week-row {
        border-bottom: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
        min-height: 0;
      }

      .week-row:last-child {
        border-bottom: none;
      }

      .week-number-cell {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 5px;
        font-size: 0.64rem;
        font-weight: 600;
        color: var(--cal-text-secondary);
        background: var(--cal-surface-alt);
        border-right: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
      }

      .day-cell {
        min-height: 0;
        overflow: hidden;
        padding: var(--mc-cell-pad);
        border-right: 1px solid color-mix(in srgb, var(--cal-text-primary) 10%, transparent);
        display: flex;
        flex-direction: column;
        gap: var(--mc-pill-gap);
        min-width: 0;
        cursor: pointer;
        transition: background-color 0.12s ease;
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
        padding: 0 2px;
        flex-shrink: 0;
      }

      .day-num {
        width: var(--mc-day-num-size);
        height: var(--mc-day-num-size);
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--mc-day-font);
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
        gap: var(--mc-pill-gap);
        min-width: 0;
        min-height: 0;
        overflow: hidden;
      }

      .event-pill {
        appearance: none;
        border: none;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: var(--mc-pill-pad);
        border-radius: 4px;
        font-family: inherit;
        font-size: var(--mc-pill-font);
        line-height: 1.2;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        box-sizing: border-box;
        transition: opacity 0.15s ease, filter 0.15s ease;
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

      .event-pill.is-past {
        opacity: 0.48;
        filter: grayscale(1);
      }

      .event-pill.is-past:hover {
        opacity: 0.78;
      }

      .event-pill.is-past .pill-text,
      .event-pill.is-past .pill-time {
        text-decoration: line-through;
      }

      .pill-icon {
        --mdc-icon-size: 10px;
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
        font-size: 0.9em;
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

      .day-dots {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 3px;
        padding: 1px 0;
      }

      .event-dot {
        width: var(--mc-dot-size);
        height: var(--mc-dot-size);
        border-radius: 50%;
        background: var(--ev-color);
        flex-shrink: 0;
      }

      .event-dot.all-day {
        width: calc(var(--mc-dot-size) * 2.1);
        border-radius: 999px;
      }

      .event-dot.is-past {
        opacity: 0.35;
        filter: grayscale(1);
      }

      .dots-more {
        font-size: 0.6rem;
        font-weight: 600;
        color: var(--cal-text-secondary);
        line-height: 1;
      }

      .more-btn {
        appearance: none;
        border: none;
        background: transparent;
        color: var(--cal-accent);
        font-family: inherit;
        font-size: var(--mc-pill-font);
        font-weight: 600;
        text-align: left;
        padding: 0 3px;
        cursor: pointer;
        border-radius: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.15;
        flex-shrink: 0;
      }

      .more-btn:hover {
        background: var(--cal-surface-alt);
      }

      .month-focused-summary {
        padding-top: 12px;
        border-top: 1px solid color-mix(in srgb, var(--cal-text-primary) 14%, transparent);
        flex-shrink: 0;
      }

      @container (max-width: 480px) {
        .pill-time,
        .more-word {
          display: none;
        }

        .event-pill {
          padding: 1px 3px;
          gap: 3px;
        }

        .day-cell {
          gap: 1px;
        }
      }

      /* Compact structural layout */
      .month-root.size-compact {
        --mc-compact-row-min-h: 28px;
        --mc-compact-day-font: 0.82rem;
      }

      .month-root.size-normal {
        --mc-compact-row-min-h: 36px;
        --mc-compact-day-font: 0.92rem;
      }

      .month-root.size-large {
        --mc-compact-row-min-h: 46px;
        --mc-compact-day-font: 1.02rem;
      }

      .compact-focus-bar {
        display: flex;
        align-items: stretch;
        gap: 14px;
        flex-shrink: 0;
      }

      .compact-date-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        min-width: 56px;
        padding-right: 4px;
      }

      .compact-weekday {
        font-size: 0.78rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--cal-text-primary);
        line-height: 1.1;
      }

      .compact-day-hero {
        font-size: 2.35rem;
        font-weight: 800;
        line-height: 0.96;
        color: var(--cal-text-primary);
        letter-spacing: -0.02em;
        margin-top: 2px;
      }

      .compact-events-carousel {
        flex: 1 1 auto;
        min-width: 0;
        display: flex;
        align-items: center;
        gap: 6px;
        padding-left: 14px;
        border-left: 2px solid color-mix(in srgb, var(--cal-text-primary) 26%, transparent);
      }

      .compact-focus-bar.no-date-col .compact-events-carousel {
        padding-left: 0;
        border-left: none;
      }

      .compact-empty-text {
        font-size: 0.92rem;
        font-style: italic;
        font-weight: 600;
        color: var(--cal-text-secondary);
        padding: 4px 0;
      }

      .compact-events-slots {
        flex: 1 1 auto;
        min-width: 0;
        display: grid;
        gap: 10px;
        align-items: stretch;
      }

      .compact-events-slots.cols-1 {
        grid-template-columns: minmax(0, 1fr);
      }

      .compact-events-slots.cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .compact-event-slot {
        appearance: none;
        border: none;
        background: transparent;
        color: var(--cal-text-primary);
        font-family: inherit;
        text-align: left;
        padding: 2px 4px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2px;
        min-width: 0;
        border-radius: 6px;
        transition: background-color 0.15s ease, opacity 0.15s ease;
      }

      .compact-event-slot:hover {
        background: var(--cal-surface-alt);
      }

      .compact-events-slots.cols-2 .compact-event-slot + .compact-event-slot {
        border-left: 1.5px solid color-mix(in srgb, var(--cal-text-primary) 24%, transparent);
        padding-left: 12px;
        border-radius: 0 6px 6px 0;
      }

      .compact-event-slot.is-past {
        opacity: 0.48;
        filter: grayscale(1);
      }

      .compact-event-slot.is-past .compact-slot-time,
      .compact-event-slot.is-past .compact-slot-title {
        text-decoration: line-through;
      }

      .compact-slot-time-row {
        display: flex;
        align-items: center;
        gap: 5px;
        min-width: 0;
      }

      .compact-slot-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--slot-accent, var(--cal-accent));
        flex-shrink: 0;
      }

      .compact-slot-time {
        font-size: 0.78rem;
        font-weight: 800;
        color: var(--cal-text-primary);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .compact-slot-title {
        font-size: 0.86rem;
        font-weight: 500;
        line-height: 1.25;
        color: var(--cal-text-primary);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-word;
      }

      .compact-progress-track {
        width: 100%;
        height: 3px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--cal-text-primary) 16%, transparent);
        overflow: hidden;
        margin-top: 3px;
      }

      .compact-progress-fill {
        height: 100%;
        border-radius: 999px;
        background: var(--slot-accent, var(--cal-accent));
      }

      .carousel-controls {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex-shrink: 0;
      }

      .carousel-nav-btn {
        appearance: none;
        border: 1px solid color-mix(in srgb, var(--cal-text-primary) 18%, transparent);
        background: transparent;
        color: var(--cal-text-primary);
        width: 22px;
        height: 22px;
        border-radius: 6px;
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        --mdc-icon-size: 15px;
        transition: background-color 0.15s ease, opacity 0.15s ease;
      }

      .carousel-nav-btn:hover:not(:disabled) {
        background: var(--cal-surface-alt);
      }

      .carousel-nav-btn:disabled {
        opacity: 0.3;
        cursor: default;
      }

      .compact-grid-wrap {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        min-height: 0;
        gap: 2px;
        padding-top: 4px;
      }

      .compact-weekday-row,
      .compact-week-row {
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        align-items: center;
      }

      .compact-weekday-row.with-weeks,
      .compact-week-row.with-weeks {
        grid-template-columns: 32px repeat(7, minmax(0, 1fr));
      }

      .compact-week-col-header,
      .compact-weekday-cell {
        text-align: center;
        font-size: var(--mc-weekday-font);
        padding: 4px 2px 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .compact-week-col-header {
        font-weight: 600;
        color: var(--cal-text-secondary);
      }

      .compact-weekday-cell {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--cal-text-primary);
      }

      .compact-weeks-container {
        display: grid;
        grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
        gap: 2px;
        flex: 1 1 auto;
        min-height: 0;
      }

      .compact-week-row {
        padding: 2px 4px;
        border-radius: 10px;
        min-height: var(--mc-compact-row-min-h, 34px);
        transition: background-color 0.15s ease;
      }

      .compact-week-row.is-active-week {
        background: color-mix(in srgb, var(--cal-accent) 18%, var(--cal-surface-alt));
      }

      .compact-week-number-cell {
        text-align: center;
        font-size: 0.76rem;
        font-weight: 500;
        color: var(--cal-text-secondary);
      }

      .compact-week-row.is-active-week .compact-week-number-cell {
        color: var(--cal-text-primary);
        font-weight: 800;
      }

      .compact-day-cell {
        appearance: none;
        border: none;
        background: transparent;
        color: var(--cal-text-primary);
        font-family: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
        padding: 2px 1px;
        cursor: pointer;
        min-width: 0;
        border-radius: 8px;
        transition: background-color 0.12s ease;
      }

      .compact-day-cell:hover {
        background: color-mix(in srgb, var(--cal-text-primary) 8%, transparent);
      }

      .compact-day-cell.outside-month {
        cursor: default;
        pointer-events: none;
      }

      .compact-day-num {
        min-width: 26px;
        height: 24px;
        padding: 0 4px;
        border-radius: 7px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--mc-compact-day-font, 0.9rem);
        font-weight: 600;
        line-height: 1;
        color: var(--cal-text-primary);
      }

      .compact-day-num.is-focused-badge {
        background: var(--cal-today-ring);
        color: var(--text-primary-color, #ffffff);
        font-weight: 800;
      }

      .compact-day-num.is-today-badge:not(.is-focused-badge) {
        box-shadow: inset 0 0 0 1.5px var(--cal-today-ring);
        color: var(--cal-accent);
        font-weight: 800;
      }

      .compact-day-dots {
        min-height: 6px;
        padding: 0;
        gap: 2px;
      }

      @container (max-width: 340px) {
        .compact-events-slots.cols-2 {
          grid-template-columns: minmax(0, 1fr);
          gap: 6px;
        }

        .compact-events-slots.cols-2 .compact-event-slot + .compact-event-slot {
          border-left: none;
          border-top: 1px solid color-mix(in srgb, var(--cal-text-primary) 18%, transparent);
          padding-left: 4px;
          padding-top: 6px;
          border-radius: 6px;
        }

        .compact-day-hero {
          font-size: 1.9rem;
        }
      }
    `
];
je([
  A()
], le.prototype, "_focusedDay", 2);
je([
  A()
], le.prototype, "_carouselIndex", 2);
le = je([
  ee(fe)
], le);
var yi = Object.getOwnPropertyDescriptor, fi = (t, e, i, a) => {
  for (var o = a > 1 ? void 0 : a ? yi(e, i) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (o = n(o) || o);
  return o;
};
let Me = class extends $ {
  static getStubConfig(t) {
    return {
      type: `custom:${de}`,
      entities: Ie(t),
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
  autoFollowToday() {
    var t;
    return !((t = this._config) != null && t.show_navigation);
  }
  getFetchRange() {
    return {
      start: x(this._anchorDate),
      end: xe(this._anchorDate)
    };
  }
  getPeriodLabel(t) {
    return Fe(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = O(this._anchorDate, -1);
  }
  navigateNext() {
    this._anchorDate = O(this._anchorDate, 1);
  }
  navigateToday() {
    this._anchorDate = x(/* @__PURE__ */ new Date());
  }
  renderCalendarBody(t, e, i, a, o) {
    const r = V(
      t,
      this._anchorDate,
      this.getDayFilterOptions()
    ), n = this._config.show_week_number !== !1, l = this._config.show_progress_bar !== !1, s = !!this._config.show_navigation, d = xt(this._anchorDate);
    return c`
      ${n || s ? c`
            <div class="minimal-top-bar">
              ${n ? c`<span class="week-pill">${At(d, a, o)}</span>` : c`<span></span>`}

              ${s ? c`
                    <div class="min-nav-group">
                      <button
                        type="button"
                        class="min-nav-btn"
                        title=${o.prev}
                        aria-label=${o.prev}
                        @click=${() => this.navigatePrev()}
                      >
                        <ha-icon icon="mdi:chevron-left"></ha-icon>
                      </button>
                      <button
                        type="button"
                        class="min-today-btn"
                        @click=${() => this.navigateToday()}
                      >
                        ${o.today}
                      </button>
                      <button
                        type="button"
                        class="min-nav-btn"
                        title=${o.next}
                        aria-label=${o.next}
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
      r,
      i,
      o,
      l
    )}
      </div>
    `;
  }
};
Me.styles = [we];
Me = fi([
  ee(de)
], Me);
var bi = Object.getOwnPropertyDescriptor, wi = (t, e, i, a) => {
  for (var o = a > 1 ? void 0 : a ? bi(e, i) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (o = n(o) || o);
  return o;
};
let Ne = class extends $ {
  static getStubConfig(t) {
    return {
      type: `custom:${Q}`,
      title: "Focus Agenda",
      entities: Ie(t),
      max_previous_events: 2,
      max_upcoming_events: 2,
      show_all_day_events: !0,
      all_day_position: "top",
      show_completed_events: !0,
      dim_completed_events: !0,
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
      start: x(this._anchorDate),
      end: xe(this._anchorDate)
    };
  }
  getPeriodLabel(t) {
    return Fe(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = O(this._anchorDate, -1);
  }
  navigateNext() {
    this._anchorDate = O(this._anchorDate, 1);
  }
  navigateToday() {
    this._anchorDate = x(/* @__PURE__ */ new Date());
  }
  _renderSectionHeader(t) {
    return c`
      <div class="evcard-divider" role="separator">
        <span class="evcard-line"></span>
        <span class="evcard-section-label">${t}</span>
        <span class="evcard-line"></span>
      </div>
    `;
  }
  _renderCompactEventRow(t, e, i, a) {
    var d;
    const r = !!((d = this._config) != null && d.use_entity_color) ? `--min-ev-accent: ${t.color};` : "", n = t.summary && t.summary !== "(Sin título)" ? t.summary : t.calendarName, l = ii(t, e, i.allDay), s = a.isCurrent ? Re(t, this._currentNow, i) : null;
    return c`
      <button
        type="button"
        class="evcard-row ${a.isCurrent ? "is-current" : ""} ${a.isPrevious ? "is-previous" : ""} ${a.isPast ? "is-past" : ""}"
        style=${r}
        @click=${(p) => {
      p.stopPropagation(), this._selectedEvent = t;
    }}
      >
        <div class="evcard-row-line">
          <ha-icon class="evcard-ev-icon" .icon=${t.icon}></ha-icon>
          <span class="evcard-ev-summary">${n}</span>
          <span class="evcard-ev-sep">-</span>
          <span class="evcard-ev-time">${l}</span>
        </div>

        ${a.isCurrent && a.showProgressBar && s ? c`
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
  renderCalendarBody(t, e, i, a, o) {
    const r = this._currentNow.getTime(), n = this._config.show_all_day_events !== !1, l = this._config.all_day_position === "bottom" ? "bottom" : "top", s = this._config.show_completed_events !== !1, d = this.shouldDimCompletedEvents(), p = this._config.show_progress_bar !== !1, h = !!this._config.show_entity_toggles, g = typeof this._config.max_previous_events == "number" ? Math.max(0, Math.floor(this._config.max_previous_events)) : 2, v = typeof this._config.max_upcoming_events == "number" ? Math.max(0, Math.floor(this._config.max_upcoming_events)) : 2, m = V(t, this._anchorDate, {
      showAllDay: n,
      allDayPosition: l,
      showCompleted: !0,
      now: this._currentNow
    }), f = m.filter(
      (y) => !y.allDay && y.end.getTime() <= r
    ), _ = s && g > 0 ? f.slice(-g) : [], S = m.filter(
      (y) => !y.allDay && y.start.getTime() <= r && y.end.getTime() > r
    ), L = m.filter((y) => y.allDay), C = l === "bottom" ? [...S, ...L] : [...L, ...S], F = m.filter(
      (y) => !y.allDay && y.start.getTime() > r
    ), k = v > 0 ? F.slice(0, v) : [], P = _.length > 0 || C.length > 0 || k.length > 0;
    return c`
      <div class="evcard-root">
        ${this._config.title || h && e.length > 0 ? c`
              <div class="evcard-titlebar">
                ${this._config.title ? c`
                      <div class="evcard-title-left">
                        <ha-icon icon="mdi:calendar-clock-outline"></ha-icon>
                        <span class="evcard-title-text">${this._config.title}</span>
                      </div>
                    ` : c`<span></span>`}

                ${h && e.length > 0 ? c`
                      <div class="evcard-mini-chips">
                        ${e.map((y) => {
      const te = this._hiddenEntities.has(y.entity);
      return c`
                            <button
                              type="button"
                              class="evcard-chip ${te ? "is-hidden" : ""}"
                              title=${y.name}
                              style="--chip-color: ${y.color};"
                              @click=${() => this._handleToggleEntity(
        new CustomEvent("cal-toggle-entity", {
          detail: { entity: y.entity }
        })
      )}
                            >
                              <span class="evcard-chip-dot"></span>
                              <span class="evcard-chip-name">${y.name}</span>
                            </button>
                          `;
    })}
                      </div>
                    ` : u}
              </div>
            ` : u}

        ${P ? c`
              <div class="evcard-sections">
                ${_.length > 0 ? c`
                      <div class="evcard-section">
                        ${this._renderSectionHeader(o.previousEventsSection)}
                        <div class="evcard-list">
                          ${_.map(
      (y) => this._renderCompactEventRow(y, a, o, {
        isCurrent: !1,
        isPrevious: !0,
        isPast: d,
        showProgressBar: p
      })
    )}
                        </div>
                      </div>
                    ` : u}

                <div class="evcard-section">
                  ${this._renderSectionHeader(o.currentEventsSection)}
                  ${C.length === 0 ? c`
                        <div class="evcard-empty-inline">
                          ${o.noCurrentEvents}
                        </div>
                      ` : c`
                        <div class="evcard-list">
                          ${C.map(
      (y) => this._renderCompactEventRow(y, a, o, {
        isCurrent: !0,
        showProgressBar: p
      })
    )}
                        </div>
                      `}
                </div>

                ${k.length > 0 ? c`
                      <div class="evcard-section">
                        ${this._renderSectionHeader(o.upcomingEventsSection)}
                        <div class="evcard-list">
                          ${k.map(
      (y) => this._renderCompactEventRow(y, a, o, {
        isCurrent: !1,
        showProgressBar: p
      })
    )}
                        </div>
                      </div>
                    ` : u}
              </div>
            ` : c`<div class="evcard-empty">${o.noEvents}</div>`}
      </div>
    `;
  }
};
Ne.styles = [
  we,
  J`
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
        transition: opacity 0.15s ease, filter 0.15s ease;
      }

      .evcard-row:hover {
        opacity: 0.82;
      }

      .evcard-row.is-past {
        opacity: 0.48;
        filter: grayscale(1);
      }

      .evcard-row.is-past:hover {
        opacity: 0.8;
      }

      .evcard-row.is-past .evcard-ev-summary,
      .evcard-row.is-past .evcard-ev-time {
        text-decoration: line-through;
        color: var(--cal-text-secondary);
      }

      .evcard-row.is-past .evcard-ev-icon {
        color: var(--cal-text-secondary);
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
Ne = wi([
  ee(Q)
], Ne);
var xi = Object.defineProperty, _i = Object.getOwnPropertyDescriptor, Ue = (t, e, i, a) => {
  for (var o = a > 1 ? void 0 : a ? _i(e, i) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (o = (a ? n(e, i, o) : n(o)) || o);
  return a && o && xi(e, i, o), o;
};
let ce = class extends j {
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
    const i = this._getEntities(), a = { ...i[t], ...e };
    a.name || delete a.name, a.icon || delete a.icon, a.color || delete a.color, i[t] = a, this._updateEntities(i);
  }
  _addEntity() {
    var r;
    const t = this._getEntities(), e = new Set(t.map((n) => n.entity)), i = Object.keys(((r = this.hass) == null ? void 0 : r.states) || {}).filter((n) => n.startsWith("calendar.")).sort(), a = i.find((n) => !e.has(n)) || i[0] || "", o = M[t.length % M.length];
    t.push({
      entity: a,
      color: o,
      icon: Te
    }), this._updateEntities(t);
  }
  _removeEntity(t) {
    const e = this._getEntities();
    e.splice(t, 1), this._updateEntities(e);
  }
  _moveEntity(t, e) {
    const i = this._getEntities(), a = t + e;
    if (a < 0 || a >= i.length) return;
    const [o] = i.splice(t, 1);
    i.splice(a, 0, o), this._updateEntities(i);
  }
  _getCardKind() {
    var e;
    const t = (((e = this._config) == null ? void 0 : e.type) || "").toLowerCase();
    return t.includes(Q) || t.includes("event") ? "focus-event" : t.includes(de) || t.includes("day") ? "day" : "month";
  }
  _normalizeHexForColorInput(t, e = 0) {
    const i = (t || "").trim();
    return /^#[0-9a-f]{6}$/i.test(i) ? i : M[e % M.length];
  }
  _renderEntitySelector(t, e) {
    var o;
    if (!!customElements.get("ha-entity-picker"))
      return c`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${t.entity || ""}
          .includeDomains=${["calendar"]}
          allow-custom-entity
          @value-changed=${(r) => this._updateEntityAt(e, { entity: r.detail.value })}
        ></ha-entity-picker>
      `;
    const a = Object.keys(((o = this.hass) == null ? void 0 : o.states) || {}).filter((r) => r.startsWith("calendar.")).sort();
    return c`
      <div class="entity-fallback-inputs">
        ${a.length > 0 ? c`
              <select
                .value=${a.includes(t.entity) ? t.entity : ""}
                @change=${(r) => {
      const n = r.target.value;
      n && this._updateEntityAt(e, { entity: n });
    }}
              >
                <option value="">-- calendar.* --</option>
                ${a.map((r) => {
      var l, s, d, p;
      const n = (p = (d = (s = (l = this.hass) == null ? void 0 : l.states) == null ? void 0 : s[r]) == null ? void 0 : d.attributes) == null ? void 0 : p.friendly_name;
      return c`
                    <option value=${r} ?selected=${t.entity === r}>
                      ${n ? `${n} (${r})` : r}
                    </option>
                  `;
    })}
              </select>
            ` : u}
        <input
          type="text"
          .value=${t.entity || ""}
          placeholder="calendar.personal"
          @change=${(r) => this._updateEntityAt(e, {
      entity: r.target.value.trim()
    })}
        />
      </div>
    `;
  }
  _renderIconInput(t, e) {
    return customElements.get("ha-icon-picker") ? c`
        <ha-icon-picker
          .hass=${this.hass}
          .value=${t.icon || ""}
          @value-changed=${(a) => this._updateEntityAt(e, { icon: a.detail.value })}
        ></ha-icon-picker>
      ` : c`
      <div class="icon-preview-input">
        <ha-icon .icon=${t.icon || Te}></ha-icon>
        <input
          type="text"
          .value=${t.icon || ""}
          placeholder="mdi:calendar"
          @change=${(a) => this._updateEntityAt(e, {
      icon: a.target.value.trim()
    })}
        />
      </div>
    `;
  }
  render() {
    if (!this._config) return u;
    const t = gt(this._config.language, this.hass), e = mt[t], i = this._getCardKind(), a = this._getEntities(), o = this._config.first_day_of_week ?? 1, r = this._config.language, n = i !== "month", l = typeof this._config.background_opacity == "number" ? this._config.background_opacity : this._config.transparent ? 0 : 100;
    return c`
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
                .value=${String(o)}
                @change=${(s) => this._updateField(
      "first_day_of_week",
      Number(s.target.value)
    )}
              >
                <option value="1" ?selected=${o === 1}>
                  ${e.editorMonday}
                </option>
                <option value="0" ?selected=${o === 0}>
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
                ${Object.keys(Xe).map(
      (s) => c`
                    <option value=${s} ?selected=${r === s}>
                      ${Xe[s]}
                    </option>
                  `
    )}
              </select>
            </div>
          </div>

          <div class="toggles-list">
            ${i === "focus-event" ? c`
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
                ` : n ? c`
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
                  ` : c`
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

                    ${this._config.show_header !== !1 ? c`
                          <label class="checkbox-row sub-option">
                            <input
                              type="checkbox"
                              .checked=${this._config.show_navigation !== !1}
                              @change=${(s) => this._updateField(
      "show_navigation",
      s.target.checked
    )}
                            />
                            <span>${e.editorShowNavigation}</span>
                          </label>
                        ` : u}

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
            ${i !== "focus-event" ? c`
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

            ${this._config.show_completed_events !== !1 ? c`
                  <label class="checkbox-row sub-option">
                    <input
                      type="checkbox"
                      .checked=${this._config.dim_completed_events !== !1}
                      @change=${(s) => this._updateField(
      "dim_completed_events",
      s.target.checked
    )}
                    />
                    <span>${e.editorDimCompletedEvents}</span>
                  </label>
                ` : u}
          </div>

          ${this._config.show_all_day_events !== !1 ? c`
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

          ${i === "month" ? this._renderMonthOptions(this._config, e) : i === "focus-event" ? this._renderFocusEventOptions(this._config, e) : this._renderDayOptions(this._config, e)}
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

          ${a.length === 0 ? c`<div class="empty-entities">${e.editorNoEntities}</div>` : c`
                <div class="entities-list">
                  ${a.map((s, d) => {
      const p = this._normalizeHexForColorInput(
        s.color,
        d
      );
      return c`
                      <div class="entity-card">
                        <div class="entity-card-top">
                          <span
                            class="entity-badge"
                            style="--badge-color: ${p};"
                          >
                            #${d + 1}
                          </span>
                          <div class="entity-actions">
                            <button
                              type="button"
                              class="mini-icon-btn"
                              ?disabled=${d === 0}
                              @click=${() => this._moveEntity(d, -1)}
                            >
                              <ha-icon icon="mdi:arrow-up"></ha-icon>
                            </button>
                            <button
                              type="button"
                              class="mini-icon-btn"
                              ?disabled=${d === a.length - 1}
                              @click=${() => this._moveEntity(d, 1)}
                            >
                              <ha-icon icon="mdi:arrow-down"></ha-icon>
                            </button>
                            <button
                              type="button"
                              class="mini-icon-btn danger"
                              title=${e.editorRemove}
                              @click=${() => this._removeEntity(d)}
                            >
                              <ha-icon icon="mdi:delete-outline"></ha-icon>
                            </button>
                          </div>
                        </div>

                        <div class="field">
                          <label>${e.editorEntity}</label>
                          ${this._renderEntitySelector(s, d)}
                        </div>

                        <div class="two-col">
                          <div class="field">
                            <label>${e.editorCustomName}</label>
                            <input
                              type="text"
                              .value=${s.name || ""}
                              placeholder="Ej. Personal"
                              @change=${(h) => this._updateEntityAt(d, {
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
                                @input=${(h) => this._updateEntityAt(d, {
        color: h.target.value
      })}
                              />
                              <input
                                type="text"
                                .value=${s.color || p}
                                @change=${(h) => this._updateEntityAt(d, {
        color: h.target.value.trim()
      })}
                              />
                            </div>
                          </div>
                        </div>

                        <div class="field">
                          <label>${e.editorCustomIcon}</label>
                          ${this._renderIconInput(s, d)}
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
    const i = t.layout === "compact" ? "compact" : "classic", a = t.calendar_size || (t.compact === !0 ? "compact" : "normal"), o = t.event_display === "dots" ? "dots" : "pills", r = i === "compact" || o === "dots" ? 4 : a === "compact" ? 2 : 3;
    return c`
      <div class="two-col">
        <div class="field">
          <label>${e.editorLayout}</label>
          <select
            .value=${i}
            @change=${(n) => this._updateField(
      "layout",
      n.target.value
    )}
          >
            <option value="classic" ?selected=${i === "classic"}>
              ${e.editorLayoutClassic}
            </option>
            <option value="compact" ?selected=${i === "compact"}>
              ${e.editorLayoutCompact}
            </option>
          </select>
        </div>

        <div class="field">
          <label>${e.editorCalendarSize}</label>
          <select
            .value=${a}
            @change=${(n) => {
      const l = n.target.value;
      if (!this._config) return;
      const s = {
        ...this._config,
        calendar_size: l
      };
      delete s.compact, this._emitConfig(s);
    }}
          >
            <option value="compact" ?selected=${a === "compact"}>
              ${e.editorSizeCompact}
            </option>
            <option value="normal" ?selected=${a === "normal"}>
              ${e.editorSizeNormal}
            </option>
            <option value="large" ?selected=${a === "large"}>
              ${e.editorSizeLarge}
            </option>
          </select>
        </div>
      </div>

      <div class="two-col">
        ${i === "classic" ? c`
              <div class="field">
                <label>${e.editorEventDisplay}</label>
                <select
                  .value=${o}
                  @change=${(n) => this._updateField(
      "event_display",
      n.target.value
    )}
                >
                  <option value="pills" ?selected=${o === "pills"}>
                    ${e.editorDisplayPills}
                  </option>
                  <option value="dots" ?selected=${o === "dots"}>
                    ${e.editorDisplayDots}
                  </option>
                </select>
              </div>
            ` : u}

        <div class="field">
          <label>${e.editorMaxEvents}</label>
          <input
            type="number"
            min="1"
            max="12"
            .value=${String(t.max_events_per_day ?? r)}
            @change=${(n) => this._updateField(
      "max_events_per_day",
      Math.max(1, Number(n.target.value) || r)
    )}
          />
        </div>
      </div>

      <div class="toggles-list">
        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${!!t.show_week_numbers}
            @change=${(n) => this._updateField(
      "show_week_numbers",
      n.target.checked
    )}
          />
          <span>${e.editorShowWeekNumbers}</span>
        </label>

        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${t.show_month_grid !== !1}
            @change=${(n) => this._updateField(
      "show_month_grid",
      n.target.checked
    )}
          />
          <span>${e.editorShowMonthGrid}</span>
        </label>

        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${t.show_day_summary !== !1}
            @change=${(n) => this._updateField(
      "show_day_summary",
      n.target.checked
    )}
          />
          <span>${e.editorShowDaySummary}</span>
        </label>

        ${t.show_day_summary !== !1 ? c`
              <label class="checkbox-row sub-option">
                <input
                  type="checkbox"
                  .checked=${t.show_progress_bar !== !1}
                  @change=${(n) => this._updateField(
      "show_progress_bar",
      n.target.checked
    )}
                />
                <span>${e.editorShowProgressBar}</span>
              </label>
            ` : u}
      </div>
    `;
  }
  _renderDayOptions(t, e) {
    return c`
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
  _renderFocusEventOptions(t, e) {
    return c`
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
ce.styles = J`
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

    .checkbox-row.sub-option {
      padding-left: 20px;
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
Ue([
  b({ attribute: !1 })
], ce.prototype, "hass", 2);
Ue([
  A()
], ce.prototype, "_config", 2);
ce = Ue([
  ee(ut)
], ce);
if (!customElements.get(Ye)) {
  const t = customElements.get(fe);
  t && customElements.define(Ye, class extends t {
  });
}
if (!customElements.get(Ve)) {
  const t = customElements.get(de);
  t && customElements.define(Ve, class extends t {
  });
}
if (!customElements.get(qe)) {
  const t = customElements.get(Q);
  t && customElements.define(qe, class extends t {
  });
}
if (!customElements.get(Ze)) {
  const t = customElements.get(Q);
  t && customElements.define(Ze, class extends t {
  });
}
const $i = [
  {
    type: fe,
    name: "Simple Calendar - Month (Multi-Entity)",
    description: "Scalable monthly calendar view with pills or dots, daily details, and multi-calendar support.",
    preview: !0
  },
  {
    type: de,
    name: "Simple Calendar - Day (Multi-Entity)",
    description: "Minimalist daily agenda widget with week pill, progress bars, and multi-calendar support.",
    preview: !0
  },
  {
    type: Q,
    name: "Simple Calendar - Focus Event (Multi-Entity)",
    description: "Compact now/next event tracker displaying previous, current (with progress bar), and upcoming events.",
    preview: !0
  }
];
window.customCards = window.customCards || [];
for (const t of $i)
  window.customCards.some((e) => e.type === t.type) || window.customCards.push(t);
console.info(
  `%c SIMPLE-CALENDARS %c v${Et} `,
  "color: white; background: #1a73e8; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;",
  "color: #1a73e8; background: #e8f0fe; font-weight: 700; border-radius: 0 4px 4px 0; padding: 2px 6px;"
);
