const $t = "2.0.1", be = "simple-calendar-month-card", de = "simple-calendar-day-card", Z = "simple-calendar-focus-event-card", ct = "simple-calendar-card-editor", We = "ha-calendar-month-card", Ge = "ha-calendar-day-card", Ke = "simple-calendar-event-card", Ve = "ha-calendar-event-card", A = [
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
], Te = "mdi:calendar", Ye = {
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
}, pt = {
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
}, Et = [
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
], kt = {
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
function ht(t, e) {
  var o;
  if (t && Et.includes(t))
    return t;
  const i = (((o = e == null ? void 0 : e.locale) == null ? void 0 : o.language) || (e == null ? void 0 : e.language) || "en").toLowerCase();
  return i.startsWith("zh") ? "zh-Hans" : i.startsWith("es") ? "es" : i.startsWith("de") ? "de" : i.startsWith("it") ? "it" : i.startsWith("fr") ? "fr" : i.startsWith("pt") ? "pt" : i.startsWith("ru") ? "ru" : i.startsWith("pl") ? "pl" : i.startsWith("nl") ? "nl" : (i.startsWith("en"), "en");
}
function St(t, e) {
  var n;
  const i = ((n = e == null ? void 0 : e.locale) == null ? void 0 : n.language) || (e == null ? void 0 : e.language), o = t === "zh-Hans" ? "zh" : t;
  return i && i.toLowerCase().startsWith(o) ? i : kt[t];
}
function Dt(t, e, i) {
  return e === "zh-Hans" ? `第${t}周` : `${i.weekLabel} ${t}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, Oe = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Be = Symbol(), qe = /* @__PURE__ */ new WeakMap();
let ut = class {
  constructor(e, i, o) {
    if (this._$cssResult$ = !0, o !== Be) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = i;
  }
  get styleSheet() {
    let e = this.o;
    const i = this.t;
    if (Oe && e === void 0) {
      const o = i !== void 0 && i.length === 1;
      o && (e = qe.get(i)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), o && qe.set(i, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ct = (t) => new ut(typeof t == "string" ? t : t + "", void 0, Be), Q = (t, ...e) => {
  const i = t.length === 1 ? t[0] : e.reduce((o, n, r) => o + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[r + 1], t[0]);
  return new ut(i, t, Be);
}, At = (t, e) => {
  if (Oe) t.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of e) {
    const o = document.createElement("style"), n = he.litNonce;
    n !== void 0 && o.setAttribute("nonce", n), o.textContent = i.cssText, t.appendChild(o);
  }
}, Ze = Oe ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let i = "";
  for (const o of e.cssRules) i += o.cssText;
  return Ct(i);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: zt, defineProperty: Tt, getOwnPropertyDescriptor: Pt, getOwnPropertyNames: Mt, getOwnPropertySymbols: Nt, getPrototypeOf: Ot } = Object, H = globalThis, Qe = H.trustedTypes, Bt = Qe ? Qe.emptyScript : "", Ee = H.reactiveElementPolyfillSupport, ie = (t, e) => t, ue = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Bt : null;
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
} }, He = (t, e) => !zt(t, e), Je = { attribute: !0, type: String, converter: ue, reflect: !1, useDefault: !1, hasChanged: He };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let K = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, i = Je) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(e, i), !i.noAccessor) {
      const o = Symbol(), n = this.getPropertyDescriptor(e, o, i);
      n !== void 0 && Tt(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, i, o) {
    const { get: n, set: r } = Pt(this.prototype, e) ?? { get() {
      return this[i];
    }, set(a) {
      this[i] = a;
    } };
    return { get: n, set(a) {
      const l = n == null ? void 0 : n.call(this);
      r == null || r.call(this, a), this.requestUpdate(e, l, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Je;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ie("elementProperties"))) return;
    const e = Ot(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ie("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ie("properties"))) {
      const i = this.properties, o = [...Mt(i), ...Nt(i)];
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
      for (const n of o) i.unshift(Ze(n));
    } else e !== void 0 && i.push(Ze(e));
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
    return At(e, this.constructor.elementStyles), e;
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
    var r;
    const o = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, o);
    if (n !== void 0 && o.reflect === !0) {
      const a = (((r = o.converter) == null ? void 0 : r.toAttribute) !== void 0 ? o.converter : ue).toAttribute(i, o.type);
      this._$Em = e, a == null ? this.removeAttribute(n) : this.setAttribute(n, a), this._$Em = null;
    }
  }
  _$AK(e, i) {
    var r, a;
    const o = this.constructor, n = o._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const l = o.getPropertyOptions(n), s = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((r = l.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? l.converter : ue;
      this._$Em = n;
      const d = s.fromAttribute(i, l.type);
      this[n] = d ?? ((a = this._$Ej) == null ? void 0 : a.get(n)) ?? d, this._$Em = null;
    }
  }
  requestUpdate(e, i, o, n = !1, r) {
    var a;
    if (e !== void 0) {
      const l = this.constructor;
      if (n === !1 && (r = this[e]), o ?? (o = l.getPropertyOptions(e)), !((o.hasChanged ?? He)(r, i) || o.useDefault && o.reflect && r === ((a = this._$Ej) == null ? void 0 : a.get(e)) && !this.hasAttribute(l._$Eu(e, o)))) return;
      this.C(e, i, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, i, { useDefault: o, reflect: n, wrapped: r }, a) {
    o && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, a ?? i ?? this[e]), r !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || o || (i = void 0), this._$AL.set(e, i)), n === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [r, a] of this._$Ep) this[r] = a;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [r, a] of n) {
        const { wrapped: l } = a, s = this[r];
        l !== !0 || this._$AL.has(r) || s === void 0 || this.C(r, void 0, a, s);
      }
    }
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (o = this._$EO) == null || o.forEach((n) => {
        var r;
        return (r = n.hostUpdate) == null ? void 0 : r.call(n);
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
K.elementStyles = [], K.shadowRootOptions = { mode: "open" }, K[ie("elementProperties")] = /* @__PURE__ */ new Map(), K[ie("finalized")] = /* @__PURE__ */ new Map(), Ee == null || Ee({ ReactiveElement: K }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, Xe = (t) => t, me = oe.trustedTypes, et = me ? me.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, mt = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, gt = "?" + B, Ht = `<${gt}>`, W = document, ne = () => W.createComment(""), ae = (t) => t === null || typeof t != "object" && typeof t != "function", Re = Array.isArray, Rt = (t) => Re(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", ke = `[ 	
\f\r]`, te = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, tt = /-->/g, it = />/g, L = RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ot = /'/g, nt = /"/g, vt = /^(?:script|style|textarea|title)$/i, Ft = (t) => (e, ...i) => ({ _$litType$: t, strings: e, values: i }), c = Ft(1), Y = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), at = /* @__PURE__ */ new WeakMap(), I = W.createTreeWalker(W, 129);
function yt(t, e) {
  if (!Re(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return et !== void 0 ? et.createHTML(e) : e;
}
const Lt = (t, e) => {
  const i = t.length - 1, o = [];
  let n, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = te;
  for (let l = 0; l < i; l++) {
    const s = t[l];
    let d, p, h = -1, m = 0;
    for (; m < s.length && (a.lastIndex = m, p = a.exec(s), p !== null); ) m = a.lastIndex, a === te ? p[1] === "!--" ? a = tt : p[1] !== void 0 ? a = it : p[2] !== void 0 ? (vt.test(p[2]) && (n = RegExp("</" + p[2], "g")), a = L) : p[3] !== void 0 && (a = L) : a === L ? p[0] === ">" ? (a = n ?? te, h = -1) : p[1] === void 0 ? h = -2 : (h = a.lastIndex - p[2].length, d = p[1], a = p[3] === void 0 ? L : p[3] === '"' ? nt : ot) : a === nt || a === ot ? a = L : a === tt || a === it ? a = te : (a = L, n = void 0);
    const g = a === L && t[l + 1].startsWith("/>") ? " " : "";
    r += a === te ? s + Ht : h >= 0 ? (o.push(d), s.slice(0, h) + mt + s.slice(h) + B + g) : s + B + (h === -2 ? l : g);
  }
  return [yt(t, r + (t[i] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), o];
};
class re {
  constructor({ strings: e, _$litType$: i }, o) {
    let n;
    this.parts = [];
    let r = 0, a = 0;
    const l = e.length - 1, s = this.parts, [d, p] = Lt(e, i);
    if (this.el = re.createElement(d, o), I.currentNode = this.el.content, i === 2 || i === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (n = I.nextNode()) !== null && s.length < l; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const h of n.getAttributeNames()) if (h.endsWith(mt)) {
          const m = p[a++], g = n.getAttribute(h).split(B), v = /([.?@])?(.*)/.exec(m);
          s.push({ type: 1, index: r, name: v[2], strings: g, ctor: v[1] === "." ? jt : v[1] === "?" ? Ut : v[1] === "@" ? Wt : _e }), n.removeAttribute(h);
        } else h.startsWith(B) && (s.push({ type: 6, index: r }), n.removeAttribute(h));
        if (vt.test(n.tagName)) {
          const h = n.textContent.split(B), m = h.length - 1;
          if (m > 0) {
            n.textContent = me ? me.emptyScript : "";
            for (let g = 0; g < m; g++) n.append(h[g], ne()), I.nextNode(), s.push({ type: 2, index: ++r });
            n.append(h[m], ne());
          }
        }
      } else if (n.nodeType === 8) if (n.data === gt) s.push({ type: 2, index: r });
      else {
        let h = -1;
        for (; (h = n.data.indexOf(B, h + 1)) !== -1; ) s.push({ type: 7, index: r }), h += B.length - 1;
      }
      r++;
    }
  }
  static createElement(e, i) {
    const o = W.createElement("template");
    return o.innerHTML = e, o;
  }
}
function q(t, e, i = t, o) {
  var a, l;
  if (e === Y) return e;
  let n = o !== void 0 ? (a = i._$Co) == null ? void 0 : a[o] : i._$Cl;
  const r = ae(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== r && ((l = n == null ? void 0 : n._$AO) == null || l.call(n, !1), r === void 0 ? n = void 0 : (n = new r(t), n._$AT(t, i, o)), o !== void 0 ? (i._$Co ?? (i._$Co = []))[o] = n : i._$Cl = n), n !== void 0 && (e = q(t, n._$AS(t, e.values), n, o)), e;
}
class It {
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
    const { el: { content: i }, parts: o } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? W).importNode(i, !0);
    I.currentNode = n;
    let r = I.nextNode(), a = 0, l = 0, s = o[0];
    for (; s !== void 0; ) {
      if (a === s.index) {
        let d;
        s.type === 2 ? d = new ce(r, r.nextSibling, this, e) : s.type === 1 ? d = new s.ctor(r, s.name, s.strings, this, e) : s.type === 6 && (d = new Gt(r, this, e)), this._$AV.push(d), s = o[++l];
      }
      a !== (s == null ? void 0 : s.index) && (r = I.nextNode(), a++);
    }
    return I.currentNode = W, n;
  }
  p(e) {
    let i = 0;
    for (const o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(e, o, i), i += o.strings.length - 2) : o._$AI(e[i])), i++;
  }
}
class ce {
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
    e = q(this, e, i), ae(e) ? e === u || e == null || e === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : e !== this._$AH && e !== Y && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Rt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== u && ae(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var r;
    const { values: i, _$litType$: o } = e, n = typeof o == "number" ? this._$AC(e) : (o.el === void 0 && (o.el = re.createElement(yt(o.h, o.h[0]), this.options)), o);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === n) this._$AH.p(i);
    else {
      const a = new It(n, this), l = a.u(this.options);
      a.p(i), this.T(l), this._$AH = a;
    }
  }
  _$AC(e) {
    let i = at.get(e.strings);
    return i === void 0 && at.set(e.strings, i = new re(e)), i;
  }
  k(e) {
    Re(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let o, n = 0;
    for (const r of e) n === i.length ? i.push(o = new ce(this.O(ne()), this.O(ne()), this, this.options)) : o = i[n], o._$AI(r), n++;
    n < i.length && (this._$AR(o && o._$AB.nextSibling, n), i.length = n);
  }
  _$AR(e = this._$AA.nextSibling, i) {
    var o;
    for ((o = this._$AP) == null ? void 0 : o.call(this, !1, !0, i); e !== this._$AB; ) {
      const n = Xe(e).nextSibling;
      Xe(e).remove(), e = n;
    }
  }
  setConnected(e) {
    var i;
    this._$AM === void 0 && (this._$Cv = e, (i = this._$AP) == null || i.call(this, e));
  }
}
class _e {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, i, o, n, r) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = e, this.name = i, this._$AM = n, this.options = r, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = u;
  }
  _$AI(e, i = this, o, n) {
    const r = this.strings;
    let a = !1;
    if (r === void 0) e = q(this, e, i, 0), a = !ae(e) || e !== this._$AH && e !== Y, a && (this._$AH = e);
    else {
      const l = e;
      let s, d;
      for (e = r[0], s = 0; s < r.length - 1; s++) d = q(this, l[o + s], i, s), d === Y && (d = this._$AH[s]), a || (a = !ae(d) || d !== this._$AH[s]), d === u ? e = u : e !== u && (e += (d ?? "") + r[s + 1]), this._$AH[s] = d;
    }
    a && !n && this.j(e);
  }
  j(e) {
    e === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class jt extends _e {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === u ? void 0 : e;
  }
}
class Ut extends _e {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== u);
  }
}
class Wt extends _e {
  constructor(e, i, o, n, r) {
    super(e, i, o, n, r), this.type = 5;
  }
  _$AI(e, i = this) {
    if ((e = q(this, e, i, 0) ?? u) === Y) return;
    const o = this._$AH, n = e === u && o !== u || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive, r = e !== u && (o === u || n);
    n && this.element.removeEventListener(this.name, this, o), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Gt {
  constructor(e, i, o) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    q(this, e);
  }
}
const Se = oe.litHtmlPolyfillSupport;
Se == null || Se(re, ce), (oe.litHtmlVersions ?? (oe.litHtmlVersions = [])).push("3.3.3");
const Kt = (t, e, i) => {
  const o = (i == null ? void 0 : i.renderBefore) ?? e;
  let n = o._$litPart$;
  if (n === void 0) {
    const r = (i == null ? void 0 : i.renderBefore) ?? null;
    o._$litPart$ = n = new ce(e.insertBefore(ne(), r), r, void 0, i ?? {});
  }
  return n._$AI(t), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = globalThis;
class R extends K {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Kt(i, this.renderRoot, this.renderOptions);
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
    return Y;
  }
}
var dt;
R._$litElement$ = !0, R.finalized = !0, (dt = j.litElementHydrateSupport) == null || dt.call(j, { LitElement: R });
const De = j.litElementPolyfillSupport;
De == null || De({ LitElement: R });
(j.litElementVersions ?? (j.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = (t) => (e, i) => {
  i !== void 0 ? i.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vt = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: He }, Yt = (t = Vt, e, i) => {
  const { kind: o, metadata: n } = i;
  let r = globalThis.litPropertyMetadata.get(n);
  if (r === void 0 && globalThis.litPropertyMetadata.set(n, r = /* @__PURE__ */ new Map()), o === "setter" && ((t = Object.create(t)).wrapped = !0), r.set(i.name, t), o === "accessor") {
    const { name: a } = i;
    return { set(l) {
      const s = e.get.call(this);
      e.set.call(this, l), this.requestUpdate(a, s, t, !0, l);
    }, init(l) {
      return l !== void 0 && this.C(a, void 0, t, l), l;
    } };
  }
  if (o === "setter") {
    const { name: a } = i;
    return function(l) {
      const s = this[a];
      e.call(this, l), this.requestUpdate(a, s, t, !0, l);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function _(t) {
  return (e, i) => typeof i == "object" ? Yt(t, e, i) : ((o, n, r) => {
    const a = n.hasOwnProperty(r);
    return n.constructor.createProperty(r, o), a ? Object.getOwnPropertyDescriptor(n, r) : void 0;
  })(t, e, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function C(t) {
  return _({ ...t, state: !0, attribute: !1 });
}
function ge(t, e = 0.16) {
  const i = (t || "").trim(), o = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i);
  if (o) {
    let a = o[1];
    a.length === 3 && (a = a.split("").map((p) => p + p).join(""));
    const l = parseInt(a.slice(0, 2), 16), s = parseInt(a.slice(2, 4), 16), d = parseInt(a.slice(4, 6), 16);
    return `rgba(${l}, ${s}, ${d}, ${e})`;
  }
  const n = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i.exec(i);
  if (n)
    return `rgba(${n[1]}, ${n[2]}, ${n[3]}, ${e})`;
  const r = Math.round(e * 100);
  return `color-mix(in srgb, ${i || "#1a73e8"} ${r}%, transparent)`;
}
function qt(t) {
  var p;
  const e = !!t.transparent, i = typeof t.background_opacity == "number" && !Number.isNaN(t.background_opacity) ? Math.max(0, Math.min(100, t.background_opacity)) : e ? 0 : 100, o = e || i === 0, n = !o && i < 100, r = (p = t.background_color) == null ? void 0 : p.trim(), a = typeof t.border_radius == "number" && !Number.isNaN(t.border_radius) ? Math.max(0, t.border_radius) : 24, l = typeof t.backdrop_blur == "number" && !Number.isNaN(t.backdrop_blur) ? Math.max(0, t.backdrop_blur) : n ? 12 : 0, s = [
    `border-radius: ${a}px`,
    `--ha-card-border-radius: ${a}px`
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
  return o && d.push("is-transparent"), n && d.push("has-opacity"), {
    className: d.join(" "),
    style: s.join("; ")
  };
}
const we = Q`
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
function b(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0);
}
function xe(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1, 0, 0, 0, 0);
}
function P(t, e) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate() + e, 0, 0, 0, 0);
}
function rt(t, e) {
  return new Date(t.getFullYear(), t.getMonth() + e, 1, 0, 0, 0, 0);
}
function T(t, e) {
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
}
function st(t) {
  const e = /^(\d{4})-(\d{2})-(\d{2})/.exec(t);
  if (!e)
    return new Date(t);
  const i = Number(e[1]), o = Number(e[2]) - 1, n = Number(e[3]);
  return new Date(i, o, n, 0, 0, 0, 0);
}
function ft(t) {
  const e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())), i = e.getUTCDay() || 7;
  e.setUTCDate(e.getUTCDate() + 4 - i);
  const o = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
  return Math.ceil(((e.getTime() - o.getTime()) / 864e5 + 1) / 7);
}
function Zt(t, e, i) {
  const o = (i % 7 + 7) % 7, n = new Date(t, e, 1, 0, 0, 0, 0), r = new Date(t, e + 1, 0, 0, 0, 0, 0), a = (n.getDay() - o + 7) % 7, l = P(n, -a), s = (o + 6 - r.getDay() + 7) % 7, d = a + r.getDate() + s, p = b(/* @__PURE__ */ new Date()), h = [];
  for (let m = 0; m < d; m++) {
    const g = P(l, m);
    h.push({
      date: g,
      isCurrentMonth: g.getMonth() === e && g.getFullYear() === t,
      isToday: T(g, p),
      weekNumber: ft(g)
    });
  }
  return h;
}
function Qt(t, e) {
  const i = (t % 7 + 7) % 7, o = new Date(2026, 10, 1), n = new Intl.DateTimeFormat(e, { weekday: "short" }), r = [];
  for (let a = 0; a < 7; a++) {
    const l = (i + a) % 7, s = P(o, l);
    r.push(V(n.format(s).replace(/\.$/, "")));
  }
  return r;
}
function Jt(t, e, i) {
  const o = t.start.getTime(), n = t.end.getTime(), r = e.getTime(), a = i.getTime();
  return n <= o ? o >= r && o < a : o < a && n > r;
}
function ve(t, e = /* @__PURE__ */ new Date()) {
  return t.allDay ? b(e).getTime() >= b(t.end).getTime() : e.getTime() >= t.end.getTime();
}
function bt(t, e = {}) {
  const i = e.showAllDay !== !1, o = e.allDayPosition === "bottom" ? "bottom" : "top", n = e.showCompleted !== !1, r = e.now || /* @__PURE__ */ new Date();
  return t.filter((a) => !(!i && a.allDay || !n && ve(a, r))).sort((a, l) => a.allDay !== l.allDay ? o === "bottom" ? a.allDay ? 1 : -1 : a.allDay ? -1 : 1 : a.start.getTime() - l.start.getTime());
}
function se(t, e, i) {
  const o = b(e), n = xe(e), r = t.filter((a) => Jt(a, o, n));
  return bt(r, i);
}
function ye(t, e) {
  return new Intl.DateTimeFormat(e, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(t);
}
function U(t) {
  const e = t.getHours(), i = String(t.getMinutes()).padStart(2, "0");
  return `${e}:${i}`;
}
function Xt(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    month: "long",
    year: "numeric"
  }).format(t);
  return V(i);
}
function Fe(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(t);
  return V(i);
}
const _t = {
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
function ei(t, e, i) {
  if (t.allDay)
    return i;
  const o = _t[e] || "to";
  return `${U(t.start)} ${o} ${U(t.end)}`;
}
function ti(t, e, i, o) {
  if (t.allDay) {
    const d = b(t.start), p = P(b(t.end), -1), h = new Intl.DateTimeFormat(e, {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    return p.getTime() > d.getTime() ? `${h.format(d)} – ${h.format(p)} (${o})` : `${h.format(d)} · ${o}`;
  }
  const n = T(t.start, t.end), r = new Intl.DateTimeFormat(e, {
    weekday: "short",
    day: "numeric",
    month: "short"
  }), a = ye(t.start, e), l = ye(t.end, e);
  if (n)
    return `${V(r.format(t.start))}, ${a} – ${l}`;
  const s = _t[i] || "to";
  return `${V(r.format(t.start))} ${a} ${s} ${V(r.format(t.end))} ${l}`;
}
function V(t) {
  return t && t.charAt(0).toUpperCase() + t.slice(1);
}
function Ce(t, e) {
  const i = Math.max(1, Math.round(t / 6e4));
  if (i >= 45) {
    const o = Math.max(1, Math.round(i / 60));
    return `${o} ${o === 1 ? e.hourRemaining : e.hoursRemaining}`;
  }
  return `${i} ${e.minutesRemaining}`;
}
function wt(t, e, i) {
  if (t.allDay) {
    const p = b(e).getTime(), h = b(t.start).getTime(), m = b(t.end).getTime();
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
  const o = t.start.getTime(), n = t.end.getTime(), r = e.getTime(), a = Math.max(6e4, n - o);
  if (r < o)
    return {
      progressPct: 0,
      label: Ce(a, i),
      isOngoing: !1,
      isPast: !1,
      isFuture: !0
    };
  if (r >= n)
    return {
      progressPct: 100,
      label: Ce(a, i),
      isOngoing: !1,
      isPast: !0,
      isFuture: !1
    };
  const l = r - o, s = Math.min(100, Math.max(0, l / a * 100)), d = n - r;
  return {
    progressPct: s,
    label: Ce(d, i),
    isOngoing: !0,
    isPast: !1,
    isFuture: !1
  };
}
function ii(t, e) {
  const i = new Intl.DateTimeFormat(e, { weekday: "short" }).format(t).replace(/\.$/, ""), o = t.getDate(), n = new Intl.DateTimeFormat(e, { month: "short" }).format(t).replace(/\.$/, "");
  return {
    weekdayDay: `${i}. ${o}`,
    month: n
  };
}
const oi = 6e4, Pe = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map();
function ni() {
  Pe.clear();
}
function ze(t, e) {
  const i = Array.isArray(t.entities) && t.entities.length > 0 ? t.entities : t.entity ? [t.entity] : [], o = [];
  return i.forEach((n, r) => {
    var h, m, g, v, E, k;
    const a = typeof n == "string" ? { entity: n } : n, l = ((a == null ? void 0 : a.entity) || "").trim();
    if (!l) return;
    const s = (h = e == null ? void 0 : e.states) == null ? void 0 : h[l], d = typeof ((m = s == null ? void 0 : s.attributes) == null ? void 0 : m.friendly_name) == "string" ? s.attributes.friendly_name : void 0, p = typeof ((g = s == null ? void 0 : s.attributes) == null ? void 0 : g.icon) == "string" ? s.attributes.icon : void 0;
    o.push({
      entity: l,
      name: ((v = a.name) == null ? void 0 : v.trim()) || d || l,
      color: ((E = a.color) == null ? void 0 : E.trim()) || A[r % A.length],
      icon: ((k = a.icon) == null ? void 0 : k.trim()) || p || Te,
      hidden: !!a.hidden
    });
  }), o;
}
function lt(t) {
  if (!t)
    return { date: /* @__PURE__ */ new Date(), isDateOnly: !1 };
  if (typeof t == "string") {
    const e = /^\d{4}-\d{2}-\d{2}$/.test(t.trim());
    return {
      date: e ? st(t.trim()) : new Date(t),
      isDateOnly: e
    };
  }
  return t.date && !t.dateTime ? {
    date: st(t.date),
    isDateOnly: !0
  } : t.dateTime ? {
    date: new Date(t.dateTime),
    isDateOnly: !1
  } : { date: /* @__PURE__ */ new Date(), isDateOnly: !1 };
}
function ai(t, e, i) {
  const o = lt(t.start), n = lt(t.end);
  if (Number.isNaN(o.date.getTime()))
    return null;
  const r = o.isDateOnly, a = o.date;
  let l = Number.isNaN(n.date.getTime()) ? new Date(a) : n.date;
  r && l.getTime() <= a.getTime() ? l = P(a, 1) : !r && l.getTime() < a.getTime() && (l = new Date(a));
  const s = t.uid || `${a.getTime()}-${i}`;
  return {
    id: `${e.entity}::${s}::${a.toISOString()}`,
    uid: t.uid || void 0,
    summary: (t.summary || "(Sin título)").trim(),
    description: (t.description || "").trim(),
    location: (t.location || "").trim(),
    start: a,
    end: l,
    allDay: r,
    calendarEntity: e.entity,
    calendarName: e.name,
    color: e.color,
    icon: e.icon
  };
}
async function ri(t, e, i, o, n = !1) {
  const r = i.toISOString(), a = o.toISOString(), l = `${e.entity}|${e.name}|${e.color}|${e.icon}|${r}|${a}`;
  if (!n) {
    const p = Pe.get(l);
    if (p && Date.now() - p.timestamp < oi)
      return p.events;
    const h = Ae.get(l);
    if (h)
      return h;
  }
  const s = `calendars/${encodeURIComponent(e.entity)}?start=${encodeURIComponent(
    r
  )}&end=${encodeURIComponent(a)}`, d = t.callApi("GET", s).then((p) => {
    const h = (Array.isArray(p) ? p : []).map((m, g) => ai(m, e, g)).filter((m) => m !== null);
    return Pe.set(l, {
      timestamp: Date.now(),
      events: h
    }), h;
  }).finally(() => {
    Ae.delete(l);
  });
  return Ae.set(l, d), d;
}
async function si(t, e, i, o, n = !1) {
  if (!t || e.length === 0)
    return { events: [], failedEntities: [] };
  const r = await Promise.allSettled(
    e.map(
      (s) => ri(t, s, i, o, n)
    )
  ), a = [], l = [];
  return r.forEach((s, d) => {
    s.status === "fulfilled" ? a.push(...s.value) : l.push(e[d].entity);
  }), a.sort((s, d) => s.start.getTime() - d.start.getTime()), { events: a, failedEntities: l };
}
var li = Object.defineProperty, di = Object.getOwnPropertyDescriptor, M = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? di(e, i) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (n = (o ? a(e, i, n) : a(n)) || n);
  return o && n && li(e, i, n), n;
};
let S = class extends R {
  constructor() {
    super(...arguments), this.cardTitle = "", this.periodLabel = "", this.entities = [], this.hiddenEntities = /* @__PURE__ */ new Set(), this.showEntityToggles = !0, this.loading = !1, this.compact = !1;
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
    var t, e, i, o, n, r, a;
    return c`
      <div class="header-root ${this.compact ? "is-compact" : ""}">
        <div class="header-top">
          <div class="title-group">
            ${this.cardTitle ? c`<div class="card-subtitle">${this.cardTitle}</div>` : u}
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
              title=${((r = this.strings) == null ? void 0 : r.refresh) || "Refresh"}
              aria-label=${((a = this.strings) == null ? void 0 : a.refresh) || "Refresh"}
              @click=${() => this._emit("cal-refresh")}
            >
              <ha-icon icon="mdi:refresh"></ha-icon>
            </button>
          </div>
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
S.styles = Q`
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
M([
  _({ type: String })
], S.prototype, "cardTitle", 2);
M([
  _({ type: String })
], S.prototype, "periodLabel", 2);
M([
  _({ type: Array })
], S.prototype, "entities", 2);
M([
  _({ attribute: !1 })
], S.prototype, "hiddenEntities", 2);
M([
  _({ type: Boolean })
], S.prototype, "showEntityToggles", 2);
M([
  _({ type: Boolean })
], S.prototype, "loading", 2);
M([
  _({ type: Boolean })
], S.prototype, "compact", 2);
M([
  _({ attribute: !1 })
], S.prototype, "strings", 2);
S = M([
  J("ha-calendar-shared-header")
], S);
var ci = Object.defineProperty, pi = Object.getOwnPropertyDescriptor, N = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? pi(e, i) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (n = (o ? a(e, i, n) : a(n)) || n);
  return o && n && ci(e, i, n), n;
};
let D = class extends R {
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
    var i, o, n, r, a, l, s;
    const e = ti(
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
                    ${((a = this.strings) == null ? void 0 : a.description) || "Description"}
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
        ${this.dayEvents.length === 0 ? c`<div class="empty-day">${((o = this.strings) == null ? void 0 : o.noEvents) || "No events"}</div>` : this.dayEvents.map((n) => {
      var l;
      const r = this.dimCompletedEvents && ve(n, this.now), a = n.allDay ? ((l = this.strings) == null ? void 0 : l.allDay) || "All day" : `${ye(n.start, this.locale)} – ${ye(
        n.end,
        this.locale
      )}`;
      return c`
                <button
                  type="button"
                  class="day-event-row ${r ? "is-past" : ""}"
                  style="--ev-color: ${n.color}; --ev-bg: ${ge(
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
D.styles = Q`
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
N([
  _({ attribute: !1 })
], D.prototype, "event", 2);
N([
  _({ attribute: !1 })
], D.prototype, "dayDate", 2);
N([
  _({ type: Array })
], D.prototype, "dayEvents", 2);
N([
  _({ type: String })
], D.prototype, "locale", 2);
N([
  _({ type: String })
], D.prototype, "lang", 2);
N([
  _({ attribute: !1 })
], D.prototype, "strings", 2);
N([
  _({ type: Boolean })
], D.prototype, "dimCompletedEvents", 2);
N([
  _({ attribute: !1 })
], D.prototype, "now", 2);
D = N([
  J("ha-calendar-event-dialog")
], D);
var hi = Object.defineProperty, z = (t, e, i, o) => {
  for (var n = void 0, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (n = a(e, i, n) || n);
  return n && hi(e, i, n), n;
};
function Le(t) {
  const e = Object.keys((t == null ? void 0 : t.states) || {}).filter((i) => i.startsWith("calendar.")).slice(0, 3);
  return e.length > 0 ? e.map((i, o) => {
    var l, s, d;
    const n = (l = t == null ? void 0 : t.states) == null ? void 0 : l[i], r = typeof ((s = n == null ? void 0 : n.attributes) == null ? void 0 : s.friendly_name) == "string" ? n.attributes.friendly_name : void 0, a = typeof ((d = n == null ? void 0 : n.attributes) == null ? void 0 : d.icon) == "string" ? n.attributes.icon : "mdi:calendar";
    return {
      entity: i,
      name: r,
      color: A[o % A.length],
      icon: a
    };
  }) : [
    {
      entity: "calendar.personal",
      name: "Personal",
      color: A[0],
      icon: "mdi:calendar-account"
    },
    {
      entity: "calendar.trabajo",
      name: "Trabajo",
      color: A[1],
      icon: "mdi:briefcase-outline"
    }
  ];
}
const je = class je extends R {
  constructor() {
    super(...arguments), this._anchorDate = b(/* @__PURE__ */ new Date()), this._events = [], this._loading = !1, this._failedEntities = [], this._hiddenEntities = /* @__PURE__ */ new Set(), this._selectedEvent = null, this._selectedDayDate = null, this._currentNow = /* @__PURE__ */ new Date(), this._lastFetchKey = "", this._fetchRequestId = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    const e = this._currentNow, i = /* @__PURE__ */ new Date();
    this._currentNow = i, this.handleDayRollover(e, i), this._tickerId = window.setInterval(() => {
      const o = this._currentNow, n = /* @__PURE__ */ new Date();
      this._currentNow = n, this.handleDayRollover(o, n);
    }, 3e4);
  }
  autoFollowToday() {
    return !1;
  }
  handleDayRollover(e, i) {
    if (this.autoFollowToday() && !T(this._anchorDate, i)) {
      this._anchorDate = b(i);
      return;
    }
    !T(e, i) && T(this._anchorDate, e) && (this._anchorDate = b(i));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._tickerId !== void 0 && (window.clearInterval(this._tickerId), this._tickerId = void 0);
  }
  static async getConfigElement() {
    var e, i, o;
    try {
      const n = window, r = await ((e = n.loadCardHelpers) == null ? void 0 : e.call(n));
      if (r && !customElements.get("ha-selector")) {
        const a = await r.createCardElement({ type: "entities", entities: [] });
        await ((o = (i = a == null ? void 0 : a.constructor) == null ? void 0 : i.getConfigElement) == null ? void 0 : o.call(i));
      }
    } catch {
    }
    return document.createElement(ct);
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
  isCompactHeader() {
    return !1;
  }
  shouldDimCompletedEvents() {
    var e;
    return ((e = this._config) == null ? void 0 : e.dim_completed_events) !== !1;
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
  renderMinimalDayBlock(e, i, o, n, r = !0) {
    var m, g;
    const a = ii(e, o), l = !!((m = this._config) != null && m.use_entity_color), s = ((g = this._config) == null ? void 0 : g.show_current_day) !== !1, d = this.shouldDimCompletedEvents(), p = bt(
      i,
      this.getDayFilterOptions()
    ), h = T(e, this._currentNow) ? n.noEvents : n.noEventsDay;
    return c`
      <div class="min-day-row">
        ${s ? c`
              <div class="min-date-col">
                <span class="min-date-day">${a.weekdayDay}</span>
                <span class="min-date-month">${a.month}</span>
              </div>
            ` : u}

        <div class="min-events-col">
          ${p.length === 0 ? c`<div class="min-empty-text">${h}</div>` : p.map((v) => {
      const E = wt(
        v,
        this._currentNow,
        n
      ), k = d && E.isPast, O = v.allDay ? n.allDay : `${U(v.start)} - ${U(v.end)}`, G = l ? `--min-ev-accent: ${v.color};` : "", w = v.summary && v.summary !== "(Sin título)" ? v.summary : v.calendarName;
      return c`
                  <button
                    type="button"
                    class="min-event-item ${k ? "is-past" : ""}"
                    style=${G}
                    @click=${($) => {
        $.stopPropagation(), this._selectedEvent = v;
      }}
                  >
                    <div class="min-event-top">
                      <div class="min-event-title-wrap">
                        <ha-icon class="min-event-icon" .icon=${v.icon}></ha-icon>
                        <span class="min-event-title">${w}</span>
                      </div>
                      <span class="min-event-time">${O}</span>
                    </div>

                    <div class="min-event-sub">
                      <span class="min-event-duration">${E.label}</span>
                      ${r ? c`
                            <div
                              class="min-progress-track"
                              role="progressbar"
                              aria-valuenow=${Math.round(E.progressPct)}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div
                                class="min-progress-fill"
                                style="width: ${E.progressPct}%;"
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
    const { start: o, end: n } = this.getFetchRange(), a = `${i.map((l) => `${l.entity}|${l.name}|${l.color}|${l.icon}`).join(";")}::${o.toISOString()}::${n.toISOString()}`;
    !e && a === this._lastFetchKey || (this._lastFetchKey = a, this._loadEvents(i, o, n, e));
  }
  async _loadEvents(e, i, o, n) {
    if (!this.hass) return;
    const r = ++this._fetchRequestId;
    this._loading = !0;
    try {
      const a = await si(
        this.hass,
        e,
        i,
        o,
        n
      );
      if (r !== this._fetchRequestId) return;
      this._events = a.events, this._failedEntities = a.failedEntities;
    } catch {
      if (r !== this._fetchRequestId) return;
      this._failedEntities = e.map((a) => a.entity);
    } finally {
      r === this._fetchRequestId && (this._loading = !1);
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
    return this._selectedDayDate ? se(
      e,
      this._selectedDayDate,
      this.getDayFilterOptions()
    ) : [];
  }
  render() {
    if (!this._config) return u;
    const e = ht(this._config.language, this.hass), i = St(e, this.hass), o = pt[e], n = ze(this._config, this.hass), r = this._events.filter(
      (p) => !this._hiddenEntities.has(p.calendarEntity)
    ), a = this.useSharedHeader(), l = this._config.show_entity_toggles !== !1, s = this.isMinimalSurface(), d = qt(this._config);
    return c`
      <ha-card class=${d.className} style=${d.style}>
        ${!s || this._loading ? c`<div class="loading-bar ${this._loading ? "active" : ""}"></div>` : u}

        ${a ? c`
              <ha-calendar-shared-header
                .cardTitle=${this._config.title || ""}
                .periodLabel=${this.getPeriodLabel(i)}
                .entities=${n}
                .hiddenEntities=${this._hiddenEntities}
                .showEntityToggles=${l}
                .loading=${this._loading}
                .compact=${this.isCompactHeader()}
                .strings=${o}
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
                  ${o.errorLoading}: ${this._failedEntities.join(", ")}
                </span>
              </div>
            ` : u}

        ${n.length === 0 ? c`
              <div class="empty-state">
                <ha-icon icon="mdi:calendar-blank-multiple"></ha-icon>
                <div class="empty-state-title">${o.noCalendars}</div>
                <div class="empty-state-hint">${o.noCalendarsHint}</div>
              </div>
            ` : c`
              <div
                class="card-content-wrap ${s ? "minimal-pad" : ""}"
                @cal-event-click=${this._handleEventClick}
              >
                ${this.renderCalendarBody(
      r,
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
        .dayEvents=${this._getDayDialogEvents(r)}
        .dimCompletedEvents=${this.shouldDimCompletedEvents()}
        .now=${this._currentNow}
        .locale=${i}
        .lang=${e}
        .strings=${o}
        @cal-dialog-close=${this._handleDialogClose}
        @cal-select-event=${this._handleSelectEventFromDay}
      ></ha-calendar-event-dialog>
    `;
  }
};
je.styles = [we];
let x = je;
z([
  _({ attribute: !1 })
], x.prototype, "hass");
z([
  C()
], x.prototype, "_config");
z([
  C()
], x.prototype, "_anchorDate");
z([
  C()
], x.prototype, "_events");
z([
  C()
], x.prototype, "_loading");
z([
  C()
], x.prototype, "_failedEntities");
z([
  C()
], x.prototype, "_hiddenEntities");
z([
  C()
], x.prototype, "_selectedEvent");
z([
  C()
], x.prototype, "_selectedDayDate");
z([
  C()
], x.prototype, "_currentNow");
var ui = Object.defineProperty, mi = Object.getOwnPropertyDescriptor, xt = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? mi(e, i) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (n = (o ? a(e, i, n) : a(n)) || n);
  return o && n && ui(e, i, n), n;
};
let fe = class extends x {
  constructor() {
    super(...arguments), this._focusedDay = b(/* @__PURE__ */ new Date());
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
  static getStubConfig(t) {
    return {
      type: `custom:${be}`,
      entities: Le(t),
      first_day_of_week: 1,
      calendar_size: "normal",
      event_display: "pills",
      max_events_per_day: 3,
      show_header: !0,
      show_entity_toggles: !1,
      show_week_numbers: !1,
      show_day_summary: !0,
      show_progress_bar: !0,
      dim_completed_events: !0,
      transparent: !1,
      background_opacity: 100
    };
  }
  getCardSize() {
    var i;
    const t = this._getCalendarSize(), e = ((i = this._config) == null ? void 0 : i.show_day_summary) !== !1;
    return t === "compact" ? e ? 4 : 3 : t === "large" ? e ? 7 : 6 : e ? 5 : 4;
  }
  getGridOptions() {
    var o;
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
  getFetchRange() {
    const t = this._getGridDays();
    return {
      start: t[0].date,
      end: xe(t[t.length - 1].date)
    };
  }
  getPeriodLabel(t) {
    return Xt(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = rt(this._anchorDate, -1), this._focusedDay = new Date(
      this._anchorDate.getFullYear(),
      this._anchorDate.getMonth(),
      1
    );
  }
  navigateNext() {
    this._anchorDate = rt(this._anchorDate, 1), this._focusedDay = new Date(
      this._anchorDate.getFullYear(),
      this._anchorDate.getMonth(),
      1
    );
  }
  navigateToday() {
    const t = /* @__PURE__ */ new Date();
    this._anchorDate = new Date(t.getFullYear(), t.getMonth(), 1, 0, 0, 0, 0), this._focusedDay = b(t);
  }
  handleDayRollover(t, e) {
    T(t, e) || (T(this._focusedDay, t) && (this._focusedDay = b(e)), this._anchorDate.getFullYear() === t.getFullYear() && this._anchorDate.getMonth() === t.getMonth() && (e.getFullYear() !== t.getFullYear() || e.getMonth() !== t.getMonth()) && (this._anchorDate = new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0)));
  }
  _getGridDays() {
    return Zt(
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
    const r = this._getCalendarSize(), a = this._getEventDisplay(), l = !!this._config.show_week_numbers, s = this._config.show_day_summary !== !1, d = this._config.show_progress_bar !== !1, p = a === "dots" ? 4 : r === "compact" ? 2 : 3, h = Math.max(1, this._config.max_events_per_day ?? p), m = this._config.show_current_day !== !1, g = this.shouldDimCompletedEvents(), v = this.getDayFilterOptions(), E = Qt(this.getFirstDayOfWeek(), i), k = this._getGridDays(), O = [];
    for (let w = 0; w < k.length; w += 7)
      O.push(k.slice(w, w + 7));
    const G = se(t, this._focusedDay, v);
    return c`
      <div class="month-root size-${r} display-${a}">
        <div class="month-grid-wrap">
          <div
            class="weekday-row ${l ? "with-weeks" : ""}"
            role="row"
          >
            ${l ? c`<div class="week-col-header">${n.weekAbbr}</div>` : u}
            ${E.map(
      (w) => c`<div class="weekday-cell">${w}</div>`
    )}
          </div>

          <div
            class="weeks-container"
            style="--mc-week-count: ${O.length};"
          >
            ${O.map(
      (w) => c`
                <div class="week-row ${l ? "with-weeks" : ""}">
                  ${l ? c`<div class="week-number-cell">${w[0].weekNumber}</div>` : u}
                  ${w.map(($) => {
        const F = se(t, $.date, v), X = F.slice(0, h), y = F.length - X.length, $e = T($.date, this._focusedDay), Ue = m && $.isToday;
        return c`
                      <div
                        class="day-cell ${$.isCurrentMonth ? "" : "outside-month"} ${Ue ? "is-today" : ""} ${$e ? "is-focused" : ""}"
                        @click=${() => {
          this._focusedDay = $.date, !s && F.length > 0 && this._openDayList($.date);
        }}
                      >
                        <div class="day-cell-top">
                          <span class="day-num ${Ue ? "today-circle" : ""}">
                            ${$.date.getDate()}
                          </span>
                        </div>

                        <div class="day-events">
                          ${a === "dots" ? c`
                                <div class="day-dots">
                                  ${X.map((f) => {
          const pe = g && ve(f, this._currentNow), ee = f.allDay ? `${f.calendarName}: ${f.summary}` : `${U(f.start)} ${f.summary} (${f.calendarName})`;
          return c`
                                      <span
                                        class="event-dot ${f.allDay ? "all-day" : "timed"} ${pe ? "is-past" : ""}"
                                        style="--ev-color: ${f.color};"
                                        title=${ee}
                                      ></span>
                                    `;
        })}
                                  ${y > 0 ? c`<span class="dots-more">+${y}</span>` : u}
                                </div>
                              ` : c`
                                ${X.map((f) => {
          const pe = g && ve(f, this._currentNow);
          return f.allDay ? c`
                                        <button
                                          type="button"
                                          class="event-pill all-day ${pe ? "is-past" : ""}"
                                          style="--ev-color: ${f.color};"
                                          title=${`${f.calendarName}: ${f.summary}`}
                                          @click=${(ee) => this._onEventPillClick(ee, f)}
                                        >
                                          <ha-icon class="pill-icon" .icon=${f.icon}></ha-icon>
                                          <span class="pill-text">${f.summary}</span>
                                        </button>
                                      ` : c`
                                        <button
                                          type="button"
                                          class="event-pill timed ${pe ? "is-past" : ""}"
                                          style="--ev-color: ${f.color}; --ev-bg: ${ge(
            f.color,
            0.14
          )};"
                                          title=${`${U(f.start)} ${f.summary} (${f.calendarName})`}
                                          @click=${(ee) => this._onEventPillClick(ee, f)}
                                        >
                                          <span class="pill-dot"></span>
                                          <span class="pill-time">
                                            ${U(f.start)}
                                          </span>
                                          <span class="pill-text">${f.summary}</span>
                                        </button>
                                      `;
        })}

                                ${y > 0 ? c`
                                      <button
                                        type="button"
                                        class="more-btn"
                                        @click=${(f) => {
          f.stopPropagation(), this._openDayList($.date);
        }}
                                      >
                                        +<span class="more-num">${y}</span><span class="more-word"> ${n.moreEvents}</span>
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

        ${s ? c`
              <div class="month-focused-summary">
                ${this.renderMinimalDayBlock(
      this._focusedDay,
      G,
      i,
      n,
      d
    )}
              </div>
            ` : u}
      </div>
    `;
  }
};
fe.styles = [
  we,
  Q`
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
    `
];
xt([
  C()
], fe.prototype, "_focusedDay", 2);
fe = xt([
  J(be)
], fe);
var gi = Object.getOwnPropertyDescriptor, vi = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? gi(e, i) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (n = a(n) || n);
  return n;
};
let Me = class extends x {
  static getStubConfig(t) {
    return {
      type: `custom:${de}`,
      entities: Le(t),
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
      start: b(this._anchorDate),
      end: xe(this._anchorDate)
    };
  }
  getPeriodLabel(t) {
    return Fe(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = P(this._anchorDate, -1);
  }
  navigateNext() {
    this._anchorDate = P(this._anchorDate, 1);
  }
  navigateToday() {
    this._anchorDate = b(/* @__PURE__ */ new Date());
  }
  renderCalendarBody(t, e, i, o, n) {
    const r = se(
      t,
      this._anchorDate,
      this.getDayFilterOptions()
    ), a = this._config.show_week_number !== !1, l = this._config.show_progress_bar !== !1, s = !!this._config.show_navigation, d = ft(this._anchorDate);
    return c`
      ${a || s ? c`
            <div class="minimal-top-bar">
              ${a ? c`<span class="week-pill">${Dt(d, o, n)}</span>` : c`<span></span>`}

              ${s ? c`
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
      r,
      i,
      n,
      l
    )}
      </div>
    `;
  }
};
Me.styles = [we];
Me = vi([
  J(de)
], Me);
var yi = Object.getOwnPropertyDescriptor, fi = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? yi(e, i) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (n = a(n) || n);
  return n;
};
let Ne = class extends x {
  static getStubConfig(t) {
    return {
      type: `custom:${Z}`,
      title: "Focus Agenda",
      entities: Le(t),
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
      start: b(this._anchorDate),
      end: xe(this._anchorDate)
    };
  }
  getPeriodLabel(t) {
    return Fe(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = P(this._anchorDate, -1);
  }
  navigateNext() {
    this._anchorDate = P(this._anchorDate, 1);
  }
  navigateToday() {
    this._anchorDate = b(/* @__PURE__ */ new Date());
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
  _renderCompactEventRow(t, e, i, o) {
    var d;
    const r = !!((d = this._config) != null && d.use_entity_color) ? `--min-ev-accent: ${t.color};` : "", a = t.summary && t.summary !== "(Sin título)" ? t.summary : t.calendarName, l = ei(t, e, i.allDay), s = o.isCurrent ? wt(t, this._currentNow, i) : null;
    return c`
      <button
        type="button"
        class="evcard-row ${o.isCurrent ? "is-current" : ""} ${o.isPrevious ? "is-previous" : ""} ${o.isPast ? "is-past" : ""}"
        style=${r}
        @click=${(p) => {
      p.stopPropagation(), this._selectedEvent = t;
    }}
      >
        <div class="evcard-row-line">
          <ha-icon class="evcard-ev-icon" .icon=${t.icon}></ha-icon>
          <span class="evcard-ev-summary">${a}</span>
          <span class="evcard-ev-sep">-</span>
          <span class="evcard-ev-time">${l}</span>
        </div>

        ${o.isCurrent && o.showProgressBar && s ? c`
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
    const r = this._currentNow.getTime(), a = this._config.show_all_day_events !== !1, l = this._config.all_day_position === "bottom" ? "bottom" : "top", s = this._config.show_completed_events !== !1, d = this.shouldDimCompletedEvents(), p = this._config.show_progress_bar !== !1, h = !!this._config.show_entity_toggles, m = typeof this._config.max_previous_events == "number" ? Math.max(0, Math.floor(this._config.max_previous_events)) : 2, g = typeof this._config.max_upcoming_events == "number" ? Math.max(0, Math.floor(this._config.max_upcoming_events)) : 2, v = se(t, this._anchorDate, {
      showAllDay: a,
      allDayPosition: l,
      showCompleted: !0,
      now: this._currentNow
    }), E = v.filter(
      (y) => !y.allDay && y.end.getTime() <= r
    ), k = s && m > 0 ? E.slice(-m) : [], O = v.filter(
      (y) => !y.allDay && y.start.getTime() <= r && y.end.getTime() > r
    ), G = v.filter((y) => y.allDay), w = l === "bottom" ? [...O, ...G] : [...G, ...O], $ = v.filter(
      (y) => !y.allDay && y.start.getTime() > r
    ), F = g > 0 ? $.slice(0, g) : [], X = k.length > 0 || w.length > 0 || F.length > 0;
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
      const $e = this._hiddenEntities.has(y.entity);
      return c`
                            <button
                              type="button"
                              class="evcard-chip ${$e ? "is-hidden" : ""}"
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

        ${X ? c`
              <div class="evcard-sections">
                ${k.length > 0 ? c`
                      <div class="evcard-section">
                        ${this._renderSectionHeader(n.previousEventsSection)}
                        <div class="evcard-list">
                          ${k.map(
      (y) => this._renderCompactEventRow(y, o, n, {
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
                  ${this._renderSectionHeader(n.currentEventsSection)}
                  ${w.length === 0 ? c`
                        <div class="evcard-empty-inline">
                          ${n.noCurrentEvents}
                        </div>
                      ` : c`
                        <div class="evcard-list">
                          ${w.map(
      (y) => this._renderCompactEventRow(y, o, n, {
        isCurrent: !0,
        showProgressBar: p
      })
    )}
                        </div>
                      `}
                </div>

                ${F.length > 0 ? c`
                      <div class="evcard-section">
                        ${this._renderSectionHeader(n.upcomingEventsSection)}
                        <div class="evcard-list">
                          ${F.map(
      (y) => this._renderCompactEventRow(y, o, n, {
        isCurrent: !1,
        showProgressBar: p
      })
    )}
                        </div>
                      </div>
                    ` : u}
              </div>
            ` : c`<div class="evcard-empty">${n.noEvents}</div>`}
      </div>
    `;
  }
};
Ne.styles = [
  we,
  Q`
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
Ne = fi([
  J(Z)
], Ne);
var bi = Object.defineProperty, _i = Object.getOwnPropertyDescriptor, Ie = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? _i(e, i) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (n = (o ? a(e, i, n) : a(n)) || n);
  return o && n && bi(e, i, n), n;
};
let le = class extends R {
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
    var r;
    const t = this._getEntities(), e = new Set(t.map((a) => a.entity)), i = Object.keys(((r = this.hass) == null ? void 0 : r.states) || {}).filter((a) => a.startsWith("calendar.")).sort(), o = i.find((a) => !e.has(a)) || i[0] || "", n = A[t.length % A.length];
    t.push({
      entity: o,
      color: n,
      icon: Te
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
    return t.includes(Z) || t.includes("event") ? "focus-event" : t.includes(de) || t.includes("day") ? "day" : "month";
  }
  _normalizeHexForColorInput(t, e = 0) {
    const i = (t || "").trim();
    return /^#[0-9a-f]{6}$/i.test(i) ? i : A[e % A.length];
  }
  _renderEntitySelector(t, e) {
    var n;
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
    const o = Object.keys(((n = this.hass) == null ? void 0 : n.states) || {}).filter((r) => r.startsWith("calendar.")).sort();
    return c`
      <div class="entity-fallback-inputs">
        ${o.length > 0 ? c`
              <select
                .value=${o.includes(t.entity) ? t.entity : ""}
                @change=${(r) => {
      const a = r.target.value;
      a && this._updateEntityAt(e, { entity: a });
    }}
              >
                <option value="">-- calendar.* --</option>
                ${o.map((r) => {
      var l, s, d, p;
      const a = (p = (d = (s = (l = this.hass) == null ? void 0 : l.states) == null ? void 0 : s[r]) == null ? void 0 : d.attributes) == null ? void 0 : p.friendly_name;
      return c`
                    <option value=${r} ?selected=${t.entity === r}>
                      ${a ? `${a} (${r})` : r}
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
          @value-changed=${(o) => this._updateEntityAt(e, { icon: o.detail.value })}
        ></ha-icon-picker>
      ` : c`
      <div class="icon-preview-input">
        <ha-icon .icon=${t.icon || Te}></ha-icon>
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
    const t = ht(this._config.language, this.hass), e = pt[t], i = this._getCardKind(), o = this._getEntities(), n = this._config.first_day_of_week ?? 1, r = this._config.language, a = i !== "month", l = typeof this._config.background_opacity == "number" ? this._config.background_opacity : this._config.transparent ? 0 : 100;
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
                ${Object.keys(Ye).map(
      (s) => c`
                    <option value=${s} ?selected=${r === s}>
                      ${Ye[s]}
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
                ` : a ? c`
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

          ${o.length === 0 ? c`<div class="empty-entities">${e.editorNoEntities}</div>` : c`
                <div class="entities-list">
                  ${o.map((s, d) => {
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
                              ?disabled=${d === o.length - 1}
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
    const i = t.calendar_size || (t.compact === !0 ? "compact" : "normal"), o = t.event_display === "dots" ? "dots" : "pills", n = o === "dots" ? 4 : i === "compact" ? 2 : 3;
    return c`
      <div class="two-col">
        <div class="field">
          <label>${e.editorCalendarSize}</label>
          <select
            .value=${i}
            @change=${(r) => {
      const a = r.target.value;
      if (!this._config) return;
      const l = {
        ...this._config,
        calendar_size: a
      };
      delete l.compact, this._emitConfig(l);
    }}
          >
            <option value="compact" ?selected=${i === "compact"}>
              ${e.editorSizeCompact}
            </option>
            <option value="normal" ?selected=${i === "normal"}>
              ${e.editorSizeNormal}
            </option>
            <option value="large" ?selected=${i === "large"}>
              ${e.editorSizeLarge}
            </option>
          </select>
        </div>

        <div class="field">
          <label>${e.editorEventDisplay}</label>
          <select
            .value=${o}
            @change=${(r) => this._updateField(
      "event_display",
      r.target.value
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
      </div>

      <div class="field">
        <label>${e.editorMaxEvents}</label>
        <input
          type="number"
          min="1"
          max="12"
          .value=${String(t.max_events_per_day ?? n)}
          @change=${(r) => this._updateField(
      "max_events_per_day",
      Math.max(1, Number(r.target.value) || n)
    )}
        />
      </div>

      <div class="toggles-list">
        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${!!t.show_week_numbers}
            @change=${(r) => this._updateField(
      "show_week_numbers",
      r.target.checked
    )}
          />
          <span>${e.editorShowWeekNumbers}</span>
        </label>

        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${t.show_day_summary !== !1}
            @change=${(r) => this._updateField(
      "show_day_summary",
      r.target.checked
    )}
          />
          <span>${e.editorShowDaySummary}</span>
        </label>

        ${t.show_day_summary !== !1 ? c`
              <label class="checkbox-row sub-option">
                <input
                  type="checkbox"
                  .checked=${t.show_progress_bar !== !1}
                  @change=${(r) => this._updateField(
      "show_progress_bar",
      r.target.checked
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
le.styles = Q`
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
Ie([
  _({ attribute: !1 })
], le.prototype, "hass", 2);
Ie([
  C()
], le.prototype, "_config", 2);
le = Ie([
  J(ct)
], le);
if (!customElements.get(We)) {
  const t = customElements.get(be);
  t && customElements.define(We, class extends t {
  });
}
if (!customElements.get(Ge)) {
  const t = customElements.get(de);
  t && customElements.define(Ge, class extends t {
  });
}
if (!customElements.get(Ke)) {
  const t = customElements.get(Z);
  t && customElements.define(Ke, class extends t {
  });
}
if (!customElements.get(Ve)) {
  const t = customElements.get(Z);
  t && customElements.define(Ve, class extends t {
  });
}
const wi = [
  {
    type: be,
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
    type: Z,
    name: "Simple Calendar - Focus Event (Multi-Entity)",
    description: "Compact now/next event tracker displaying previous, current (with progress bar), and upcoming events.",
    preview: !0
  }
];
window.customCards = window.customCards || [];
for (const t of wi)
  window.customCards.some((e) => e.type === t.type) || window.customCards.push(t);
console.info(
  `%c SIMPLE-CALENDARS %c v${$t} `,
  "color: white; background: #1a73e8; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;",
  "color: #1a73e8; background: #e8f0fe; font-weight: 700; border-radius: 0 4px 4px 0; padding: 2px 6px;"
);
