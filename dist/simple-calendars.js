const ft = "1.2.0", fe = "simple-calendar-month-card", se = "simple-calendar-week-card", le = "simple-calendar-day-card", nt = "simple-calendar-card-editor", Le = "ha-calendar-month-card", Re = "ha-calendar-week-card", Be = "ha-calendar-day-card", A = [
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
], Se = "mdi:calendar", ot = {
  es: {
    today: "Hoy",
    prev: "Anterior",
    next: "Siguiente",
    refresh: "Actualizar",
    allDay: "Todo el día",
    noEvents: "Sin eventos programados",
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
    editorShowEmptyDays: "Mostrar días sin eventos",
    editorViewSection: "Opciones de vista",
    editorLayout: "Diseño de la tarjeta",
    editorLayoutCompact: "Widget estilizado (compacto)",
    editorLayoutGrid: "Grilla horaria detallada",
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
    editorStartHour: "Hora de inicio",
    editorEndHour: "Hora de fin",
    editorDaysToShow: "Días a mostrar",
    editorShowSummary: "Mostrar resumen de calendarios",
    editorAddEntity: "Añadir calendario",
    editorEntity: "Entidad de calendario",
    editorCustomName: "Nombre personalizado",
    editorCustomIcon: "Ícono (mdi:...)",
    editorCustomColor: "Color",
    editorRemove: "Quitar calendario",
    editorNoEntities: "No has agregado calendarios todavía."
  },
  en: {
    today: "Today",
    prev: "Previous",
    next: "Next",
    refresh: "Refresh",
    allDay: "All day",
    noEvents: "No scheduled events",
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
    editorShowEmptyDays: "Show days without events",
    editorViewSection: "View options",
    editorLayout: "Card layout",
    editorLayoutCompact: "Stylized widget (compact)",
    editorLayoutGrid: "Detailed hourly grid",
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
    editorStartHour: "Start hour",
    editorEndHour: "End hour",
    editorDaysToShow: "Days to show",
    editorShowSummary: "Show calendar summary",
    editorAddEntity: "Add calendar",
    editorEntity: "Calendar entity",
    editorCustomName: "Custom name",
    editorCustomIcon: "Icon (mdi:...)",
    editorCustomColor: "Color",
    editorRemove: "Remove calendar",
    editorNoEntities: "No calendars added yet."
  }
};
function rt(t, e) {
  var a;
  return t === "es" || t === "en" ? t : (((a = e == null ? void 0 : e.locale) == null ? void 0 : a.language) || (e == null ? void 0 : e.language) || "es").toLowerCase().startsWith("en") ? "en" : "es";
}
function yt(t, e) {
  var a;
  const i = ((a = e == null ? void 0 : e.locale) == null ? void 0 : a.language) || (e == null ? void 0 : e.language);
  return i && i.toLowerCase().startsWith(t) ? i : t === "es" ? "es-ES" : "en-US";
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, Te = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ne = Symbol(), Ue = /* @__PURE__ */ new WeakMap();
let st = class {
  constructor(e, i, a) {
    if (this._$cssResult$ = !0, a !== Ne) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = i;
  }
  get styleSheet() {
    let e = this.o;
    const i = this.t;
    if (Te && e === void 0) {
      const a = i !== void 0 && i.length === 1;
      a && (e = Ue.get(i)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), a && Ue.set(i, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const vt = (t) => new st(typeof t == "string" ? t : t + "", void 0, Ne), F = (t, ...e) => {
  const i = t.length === 1 ? t[0] : e.reduce((a, n, r) => a + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[r + 1], t[0]);
  return new st(i, t, Ne);
}, bt = (t, e) => {
  if (Te) t.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of e) {
    const a = document.createElement("style"), n = he.litNonce;
    n !== void 0 && a.setAttribute("nonce", n), a.textContent = i.cssText, t.appendChild(a);
  }
}, je = Te ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let i = "";
  for (const a of e.cssRules) i += a.cssText;
  return vt(i);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: _t, defineProperty: xt, getOwnPropertyDescriptor: $t, getOwnPropertyNames: wt, getOwnPropertySymbols: kt, getPrototypeOf: Et } = Object, H = globalThis, We = H.trustedTypes, Dt = We ? We.emptyScript : "", _e = H.reactiveElementPolyfillSupport, te = (t, e) => t, pe = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Dt : null;
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
} }, Pe = (t, e) => !_t(t, e), Ye = { attribute: !0, type: String, converter: pe, reflect: !1, useDefault: !1, hasChanged: Pe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let q = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, i = Ye) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(e, i), !i.noAccessor) {
      const a = Symbol(), n = this.getPropertyDescriptor(e, a, i);
      n !== void 0 && xt(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, i, a) {
    const { get: n, set: r } = $t(this.prototype, e) ?? { get() {
      return this[i];
    }, set(o) {
      this[i] = o;
    } };
    return { get: n, set(o) {
      const s = n == null ? void 0 : n.call(this);
      r == null || r.call(this, o), this.requestUpdate(e, s, a);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ye;
  }
  static _$Ei() {
    if (this.hasOwnProperty(te("elementProperties"))) return;
    const e = Et(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(te("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(te("properties"))) {
      const i = this.properties, a = [...wt(i), ...kt(i)];
      for (const n of a) this.createProperty(n, i[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const i = litPropertyMetadata.get(e);
      if (i !== void 0) for (const [a, n] of i) this.elementProperties.set(a, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, a] of this.elementProperties) {
      const n = this._$Eu(i, a);
      n !== void 0 && this._$Eh.set(n, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const i = [];
    if (Array.isArray(e)) {
      const a = new Set(e.flat(1 / 0).reverse());
      for (const n of a) i.unshift(je(n));
    } else e !== void 0 && i.push(je(e));
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
    return bt(e, this.constructor.elementStyles), e;
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
    const a = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, a);
    if (n !== void 0 && a.reflect === !0) {
      const o = (((r = a.converter) == null ? void 0 : r.toAttribute) !== void 0 ? a.converter : pe).toAttribute(i, a.type);
      this._$Em = e, o == null ? this.removeAttribute(n) : this.setAttribute(n, o), this._$Em = null;
    }
  }
  _$AK(e, i) {
    var r, o;
    const a = this.constructor, n = a._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const s = a.getPropertyOptions(n), l = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((r = s.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? s.converter : pe;
      this._$Em = n;
      const c = l.fromAttribute(i, s.type);
      this[n] = c ?? ((o = this._$Ej) == null ? void 0 : o.get(n)) ?? c, this._$Em = null;
    }
  }
  requestUpdate(e, i, a, n = !1, r) {
    var o;
    if (e !== void 0) {
      const s = this.constructor;
      if (n === !1 && (r = this[e]), a ?? (a = s.getPropertyOptions(e)), !((a.hasChanged ?? Pe)(r, i) || a.useDefault && a.reflect && r === ((o = this._$Ej) == null ? void 0 : o.get(e)) && !this.hasAttribute(s._$Eu(e, a)))) return;
      this.C(e, i, a);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, i, { useDefault: a, reflect: n, wrapped: r }, o) {
    a && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, o ?? i ?? this[e]), r !== !0 || o !== void 0) || (this._$AL.has(e) || (this.hasUpdated || a || (i = void 0), this._$AL.set(e, i)), n === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [r, o] of this._$Ep) this[r] = o;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [r, o] of n) {
        const { wrapped: s } = o, l = this[r];
        s !== !0 || this._$AL.has(r) || l === void 0 || this.C(r, void 0, o, l);
      }
    }
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (a = this._$EO) == null || a.forEach((n) => {
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
    (i = this._$EO) == null || i.forEach((a) => {
      var n;
      return (n = a.hostUpdated) == null ? void 0 : n.call(a);
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
q.elementStyles = [], q.shadowRootOptions = { mode: "open" }, q[te("elementProperties")] = /* @__PURE__ */ new Map(), q[te("finalized")] = /* @__PURE__ */ new Map(), _e == null || _e({ ReactiveElement: q }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = globalThis, Ge = (t) => t, ue = ie.trustedTypes, Ve = ue ? ue.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, lt = "$lit$", O = `lit$${Math.random().toFixed(9).slice(2)}$`, ct = "?" + O, St = `<${ct}>`, U = document, ae = () => U.createComment(""), ne = (t) => t === null || typeof t != "object" && typeof t != "function", Oe = Array.isArray, Ct = (t) => Oe(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", xe = `[ 	
\f\r]`, ee = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, qe = /-->/g, Ke = />/g, L = RegExp(`>|${xe}(?:([^\\s"'>=/]+)(${xe}*=${xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ze = /'/g, Je = /"/g, dt = /^(?:script|style|textarea|title)$/i, At = (t) => (e, ...i) => ({ _$litType$: t, strings: e, values: i }), d = At(1), Z = Symbol.for("lit-noChange"), g = Symbol.for("lit-nothing"), Qe = /* @__PURE__ */ new WeakMap(), R = U.createTreeWalker(U, 129);
function ht(t, e) {
  if (!Oe(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ve !== void 0 ? Ve.createHTML(e) : e;
}
const Mt = (t, e) => {
  const i = t.length - 1, a = [];
  let n, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = ee;
  for (let s = 0; s < i; s++) {
    const l = t[s];
    let c, h, p = -1, m = 0;
    for (; m < l.length && (o.lastIndex = m, h = o.exec(l), h !== null); ) m = o.lastIndex, o === ee ? h[1] === "!--" ? o = qe : h[1] !== void 0 ? o = Ke : h[2] !== void 0 ? (dt.test(h[2]) && (n = RegExp("</" + h[2], "g")), o = L) : h[3] !== void 0 && (o = L) : o === L ? h[0] === ">" ? (o = n ?? ee, p = -1) : h[1] === void 0 ? p = -2 : (p = o.lastIndex - h[2].length, c = h[1], o = h[3] === void 0 ? L : h[3] === '"' ? Je : Ze) : o === Je || o === Ze ? o = L : o === qe || o === Ke ? o = ee : (o = L, n = void 0);
    const u = o === L && t[s + 1].startsWith("/>") ? " " : "";
    r += o === ee ? l + St : p >= 0 ? (a.push(c), l.slice(0, p) + lt + l.slice(p) + O + u) : l + O + (p === -2 ? s : u);
  }
  return [ht(t, r + (t[i] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), a];
};
class oe {
  constructor({ strings: e, _$litType$: i }, a) {
    let n;
    this.parts = [];
    let r = 0, o = 0;
    const s = e.length - 1, l = this.parts, [c, h] = Mt(e, i);
    if (this.el = oe.createElement(c, a), R.currentNode = this.el.content, i === 2 || i === 3) {
      const p = this.el.content.firstChild;
      p.replaceWith(...p.childNodes);
    }
    for (; (n = R.nextNode()) !== null && l.length < s; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const p of n.getAttributeNames()) if (p.endsWith(lt)) {
          const m = h[o++], u = n.getAttribute(p).split(O), y = /([.?@])?(.*)/.exec(m);
          l.push({ type: 1, index: r, name: y[2], strings: u, ctor: y[1] === "." ? Nt : y[1] === "?" ? Pt : y[1] === "@" ? Ot : ye }), n.removeAttribute(p);
        } else p.startsWith(O) && (l.push({ type: 6, index: r }), n.removeAttribute(p));
        if (dt.test(n.tagName)) {
          const p = n.textContent.split(O), m = p.length - 1;
          if (m > 0) {
            n.textContent = ue ? ue.emptyScript : "";
            for (let u = 0; u < m; u++) n.append(p[u], ae()), R.nextNode(), l.push({ type: 2, index: ++r });
            n.append(p[m], ae());
          }
        }
      } else if (n.nodeType === 8) if (n.data === ct) l.push({ type: 2, index: r });
      else {
        let p = -1;
        for (; (p = n.data.indexOf(O, p + 1)) !== -1; ) l.push({ type: 7, index: r }), p += O.length - 1;
      }
      r++;
    }
  }
  static createElement(e, i) {
    const a = U.createElement("template");
    return a.innerHTML = e, a;
  }
}
function J(t, e, i = t, a) {
  var o, s;
  if (e === Z) return e;
  let n = a !== void 0 ? (o = i._$Co) == null ? void 0 : o[a] : i._$Cl;
  const r = ne(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== r && ((s = n == null ? void 0 : n._$AO) == null || s.call(n, !1), r === void 0 ? n = void 0 : (n = new r(t), n._$AT(t, i, a)), a !== void 0 ? (i._$Co ?? (i._$Co = []))[a] = n : i._$Cl = n), n !== void 0 && (e = J(t, n._$AS(t, e.values), n, a)), e;
}
class Tt {
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
    const { el: { content: i }, parts: a } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? U).importNode(i, !0);
    R.currentNode = n;
    let r = R.nextNode(), o = 0, s = 0, l = a[0];
    for (; l !== void 0; ) {
      if (o === l.index) {
        let c;
        l.type === 2 ? c = new ce(r, r.nextSibling, this, e) : l.type === 1 ? c = new l.ctor(r, l.name, l.strings, this, e) : l.type === 6 && (c = new Ht(r, this, e)), this._$AV.push(c), l = a[++s];
      }
      o !== (l == null ? void 0 : l.index) && (r = R.nextNode(), o++);
    }
    return R.currentNode = U, n;
  }
  p(e) {
    let i = 0;
    for (const a of this._$AV) a !== void 0 && (a.strings !== void 0 ? (a._$AI(e, a, i), i += a.strings.length - 2) : a._$AI(e[i])), i++;
  }
}
class ce {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, i, a, n) {
    this.type = 2, this._$AH = g, this._$AN = void 0, this._$AA = e, this._$AB = i, this._$AM = a, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
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
    e = J(this, e, i), ne(e) ? e === g || e == null || e === "" ? (this._$AH !== g && this._$AR(), this._$AH = g) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Ct(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== g && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(U.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var r;
    const { values: i, _$litType$: a } = e, n = typeof a == "number" ? this._$AC(e) : (a.el === void 0 && (a.el = oe.createElement(ht(a.h, a.h[0]), this.options)), a);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === n) this._$AH.p(i);
    else {
      const o = new Tt(n, this), s = o.u(this.options);
      o.p(i), this.T(s), this._$AH = o;
    }
  }
  _$AC(e) {
    let i = Qe.get(e.strings);
    return i === void 0 && Qe.set(e.strings, i = new oe(e)), i;
  }
  k(e) {
    Oe(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let a, n = 0;
    for (const r of e) n === i.length ? i.push(a = new ce(this.O(ae()), this.O(ae()), this, this.options)) : a = i[n], a._$AI(r), n++;
    n < i.length && (this._$AR(a && a._$AB.nextSibling, n), i.length = n);
  }
  _$AR(e = this._$AA.nextSibling, i) {
    var a;
    for ((a = this._$AP) == null ? void 0 : a.call(this, !1, !0, i); e !== this._$AB; ) {
      const n = Ge(e).nextSibling;
      Ge(e).remove(), e = n;
    }
  }
  setConnected(e) {
    var i;
    this._$AM === void 0 && (this._$Cv = e, (i = this._$AP) == null || i.call(this, e));
  }
}
class ye {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, i, a, n, r) {
    this.type = 1, this._$AH = g, this._$AN = void 0, this.element = e, this.name = i, this._$AM = n, this.options = r, a.length > 2 || a[0] !== "" || a[1] !== "" ? (this._$AH = Array(a.length - 1).fill(new String()), this.strings = a) : this._$AH = g;
  }
  _$AI(e, i = this, a, n) {
    const r = this.strings;
    let o = !1;
    if (r === void 0) e = J(this, e, i, 0), o = !ne(e) || e !== this._$AH && e !== Z, o && (this._$AH = e);
    else {
      const s = e;
      let l, c;
      for (e = r[0], l = 0; l < r.length - 1; l++) c = J(this, s[a + l], i, l), c === Z && (c = this._$AH[l]), o || (o = !ne(c) || c !== this._$AH[l]), c === g ? e = g : e !== g && (e += (c ?? "") + r[l + 1]), this._$AH[l] = c;
    }
    o && !n && this.j(e);
  }
  j(e) {
    e === g ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Nt extends ye {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === g ? void 0 : e;
  }
}
class Pt extends ye {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== g);
  }
}
class Ot extends ye {
  constructor(e, i, a, n, r) {
    super(e, i, a, n, r), this.type = 5;
  }
  _$AI(e, i = this) {
    if ((e = J(this, e, i, 0) ?? g) === Z) return;
    const a = this._$AH, n = e === g && a !== g || e.capture !== a.capture || e.once !== a.once || e.passive !== a.passive, r = e !== g && (a === g || n);
    n && this.element.removeEventListener(this.name, this, a), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Ht {
  constructor(e, i, a) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = a;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    J(this, e);
  }
}
const $e = ie.litHtmlPolyfillSupport;
$e == null || $e(oe, ce), (ie.litHtmlVersions ?? (ie.litHtmlVersions = [])).push("3.3.3");
const zt = (t, e, i) => {
  const a = (i == null ? void 0 : i.renderBefore) ?? e;
  let n = a._$litPart$;
  if (n === void 0) {
    const r = (i == null ? void 0 : i.renderBefore) ?? null;
    a._$litPart$ = n = new ce(e.insertBefore(ae(), r), r, void 0, i ?? {});
  }
  return n._$AI(t), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B = globalThis;
class N extends q {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = zt(i, this.renderRoot, this.renderOptions);
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
var at;
N._$litElement$ = !0, N.finalized = !0, (at = B.litElementHydrateSupport) == null || at.call(B, { LitElement: N });
const we = B.litElementPolyfillSupport;
we == null || we({ LitElement: N });
(B.litElementVersions ?? (B.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = (t) => (e, i) => {
  i !== void 0 ? i.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ft = { attribute: !0, type: String, converter: pe, reflect: !1, hasChanged: Pe }, It = (t = Ft, e, i) => {
  const { kind: a, metadata: n } = i;
  let r = globalThis.litPropertyMetadata.get(n);
  if (r === void 0 && globalThis.litPropertyMetadata.set(n, r = /* @__PURE__ */ new Map()), a === "setter" && ((t = Object.create(t)).wrapped = !0), r.set(i.name, t), a === "accessor") {
    const { name: o } = i;
    return { set(s) {
      const l = e.get.call(this);
      e.set.call(this, s), this.requestUpdate(o, l, t, !0, s);
    }, init(s) {
      return s !== void 0 && this.C(o, void 0, t, s), s;
    } };
  }
  if (a === "setter") {
    const { name: o } = i;
    return function(s) {
      const l = this[o];
      e.call(this, s), this.requestUpdate(o, l, t, !0, s);
    };
  }
  throw Error("Unsupported decorator location: " + a);
};
function _(t) {
  return (e, i) => typeof i == "object" ? It(t, e, i) : ((a, n, r) => {
    const o = n.hasOwnProperty(r);
    return n.constructor.createProperty(r, a), o ? Object.getOwnPropertyDescriptor(n, r) : void 0;
  })(t, e, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function D(t) {
  return _({ ...t, state: !0, attribute: !1 });
}
function j(t, e = 0.16) {
  const i = (t || "").trim(), a = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i);
  if (a) {
    let o = a[1];
    o.length === 3 && (o = o.split("").map((h) => h + h).join(""));
    const s = parseInt(o.slice(0, 2), 16), l = parseInt(o.slice(2, 4), 16), c = parseInt(o.slice(4, 6), 16);
    return `rgba(${s}, ${l}, ${c}, ${e})`;
  }
  const n = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i.exec(i);
  if (n)
    return `rgba(${n[1]}, ${n[2]}, ${n[3]}, ${e})`;
  const r = Math.round(e * 100);
  return `color-mix(in srgb, ${i || "#1a73e8"} ${r}%, transparent)`;
}
function Lt(t) {
  var h;
  const e = !!t.transparent, i = typeof t.background_opacity == "number" && !Number.isNaN(t.background_opacity) ? Math.max(0, Math.min(100, t.background_opacity)) : e ? 0 : 100, a = e || i === 0, n = !a && i < 100, r = (h = t.background_color) == null ? void 0 : h.trim(), o = typeof t.border_radius == "number" && !Number.isNaN(t.border_radius) ? Math.max(0, t.border_radius) : 24, s = typeof t.backdrop_blur == "number" && !Number.isNaN(t.backdrop_blur) ? Math.max(0, t.backdrop_blur) : n ? 12 : 0, l = [
    `border-radius: ${o}px`,
    `--ha-card-border-radius: ${o}px`
  ];
  if (a)
    l.push(
      "background: transparent !important",
      "border-width: 0px",
      "border-color: transparent",
      "--ha-card-border-width: 0px",
      "box-shadow: none",
      "--ha-card-box-shadow: none"
    );
  else {
    if (n) {
      const p = r || "var(--ha-card-background, var(--card-background-color, #1c1d21))";
      l.push(`background: color-mix(in srgb, ${p} ${i}%, transparent)`);
    } else r && l.push(`background: ${r}`);
    s > 0 && l.push(
      `backdrop-filter: blur(${s}px)`,
      `-webkit-backdrop-filter: blur(${s}px)`
    ), t.hide_border && l.push(
      "border-width: 0px",
      "border-color: transparent",
      "--ha-card-border-width: 0px"
    ), t.hide_shadow && l.push("box-shadow: none", "--ha-card-box-shadow: none");
  }
  const c = [];
  return a && c.push("is-transparent"), n && c.push("has-opacity"), {
    className: c.join(" "),
    style: l.join("; ")
  };
}
const ve = F`
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
function w(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0);
}
function be(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1, 0, 0, 0, 0);
}
function S(t, e) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate() + e, 0, 0, 0, 0);
}
function Xe(t, e) {
  return new Date(t.getFullYear(), t.getMonth() + e, 1, 0, 0, 0, 0);
}
function K(t, e) {
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
}
function et(t) {
  const e = /^(\d{4})-(\d{2})-(\d{2})/.exec(t);
  if (!e)
    return new Date(t);
  const i = Number(e[1]), a = Number(e[2]) - 1, n = Number(e[3]);
  return new Date(i, a, n, 0, 0, 0, 0);
}
function He(t) {
  const e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())), i = e.getUTCDay() || 7;
  e.setUTCDate(e.getUTCDate() + 4 - i);
  const a = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
  return Math.ceil(((e.getTime() - a.getTime()) / 864e5 + 1) / 7);
}
function Rt(t, e, i) {
  const a = (i % 7 + 7) % 7, n = new Date(t, e, 1, 0, 0, 0, 0), r = new Date(t, e + 1, 0, 0, 0, 0, 0), o = (n.getDay() - a + 7) % 7, s = S(n, -o), l = (a + 6 - r.getDay() + 7) % 7, c = o + r.getDate() + l, h = w(/* @__PURE__ */ new Date()), p = [];
  for (let m = 0; m < c; m++) {
    const u = S(s, m);
    p.push({
      date: u,
      isCurrentMonth: u.getMonth() === e && u.getFullYear() === t,
      isToday: K(u, h),
      weekNumber: He(u)
    });
  }
  return p;
}
function Bt(t, e) {
  const i = (e % 7 + 7) % 7, a = w(t), n = (a.getDay() - i + 7) % 7;
  return S(a, -n);
}
function Ut(t, e, i = 7) {
  const a = i === 7 ? Bt(t, e) : w(t), n = [];
  for (let r = 0; r < i; r++)
    n.push(S(a, r));
  return n;
}
function jt(t, e) {
  const i = (t % 7 + 7) % 7, a = new Date(2026, 10, 1), n = new Intl.DateTimeFormat(e, { weekday: "short" }), r = [];
  for (let o = 0; o < 7; o++) {
    const s = (i + o) % 7, l = S(a, s);
    r.push(z(n.format(l).replace(/\.$/, "")));
  }
  return r;
}
function Wt(t, e, i) {
  const a = t.start.getTime(), n = t.end.getTime(), r = e.getTime(), o = i.getTime();
  return n <= a ? a >= r && a < o : a < o && n > r;
}
function Q(t, e) {
  const i = w(e), a = be(e);
  return t.filter((n) => Wt(n, i, a)).sort((n, r) => n.allDay !== r.allDay ? n.allDay ? -1 : 1 : n.start.getTime() - r.start.getTime());
}
function Yt(t, e, i, a) {
  const n = Math.max(60, (a - i) * 60), r = w(e).getTime(), o = r + i * 36e5, s = r + a * 36e5, l = 25, c = t.filter((y) => !y.allDay).map((y) => {
    const b = y.start.getTime(), x = Math.max(y.end.getTime(), b);
    if (x <= o || b >= s)
      return null;
    const v = Math.max(b, o), f = Math.min(x, s), $ = (v - o) / 6e4, G = Math.max($ + 1, (f - o) / 6e4), V = Math.min(n, Math.max(G, $ + l));
    return {
      event: y,
      startMin: $,
      endMin: G,
      visualEndMin: V,
      col: 0,
      colSpan: 1
    };
  }).filter((y) => y !== null).sort((y, b) => y.startMin !== b.startMin ? y.startMin - b.startMin : b.visualEndMin - y.visualEndMin);
  if (c.length === 0) return [];
  const h = [];
  let p = [], m = -1;
  for (const y of c)
    p.length === 0 || y.startMin < m ? (p.push(y), m = Math.max(m, y.visualEndMin)) : (h.push(p), p = [y], m = y.visualEndMin);
  p.length > 0 && h.push(p);
  const u = [];
  for (const y of h) {
    const b = [];
    for (const v of y) {
      let f = -1;
      for (let $ = 0; $ < b.length; $++)
        if (b[$] <= v.startMin) {
          f = $;
          break;
        }
      f === -1 ? (f = b.length, b.push(v.visualEndMin)) : b[f] = v.visualEndMin, v.col = f;
    }
    const x = Math.max(1, b.length);
    for (const v of y) {
      let f = 1;
      for (; v.col + f < x; ) {
        const gt = v.col + f;
        if (y.some(
          (de) => de !== v && de.col === gt && de.startMin < v.visualEndMin && de.visualEndMin > v.startMin
        )) break;
        f++;
      }
      v.colSpan = f;
      const $ = v.startMin / n * 100, G = (v.visualEndMin - v.startMin) / n * 100, V = v.col / x * 100, mt = v.colSpan / x * 100;
      u.push({
        event: v.event,
        top: $,
        height: Math.max(G, 1.5),
        left: V,
        width: mt
      });
    }
  }
  return u;
}
function Gt(t, e) {
  const i = new Date(2026, 0, 1, t % 24, 0, 0, 0);
  return new Intl.DateTimeFormat(e, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(i);
}
function X(t, e) {
  return new Intl.DateTimeFormat(e, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(t);
}
function me(t) {
  const e = t.getHours(), i = String(t.getMinutes()).padStart(2, "0");
  return `${e}:${i}`;
}
function Vt(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    month: "long",
    year: "numeric"
  }).format(t);
  return z(i);
}
function tt(t, e) {
  if (t.length === 0) return "";
  const i = t[0], a = t[t.length - 1], n = i.getMonth() === a.getMonth() && i.getFullYear() === a.getFullYear(), r = i.getFullYear() === a.getFullYear();
  if (n) {
    const l = z(
      new Intl.DateTimeFormat(e, { month: "long", year: "numeric" }).format(i)
    );
    return `${i.getDate()} – ${a.getDate()} ${l}`;
  }
  if (r) {
    const l = new Intl.DateTimeFormat(e, { day: "numeric", month: "short" }).format(i), c = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(a);
    return `${l} – ${c}`;
  }
  const o = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(i), s = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(a);
  return `${o} – ${s}`;
}
function pt(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(t);
  return z(i);
}
function qt(t, e, i, a) {
  if (t.allDay) {
    const c = w(t.start), h = S(w(t.end), -1), p = new Intl.DateTimeFormat(e, {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    return h.getTime() > c.getTime() ? `${p.format(c)} – ${p.format(h)} (${a})` : `${p.format(c)} · ${a}`;
  }
  const n = K(t.start, t.end), r = new Intl.DateTimeFormat(e, {
    weekday: "short",
    day: "numeric",
    month: "short"
  }), o = X(t.start, e), s = X(t.end, e);
  if (n)
    return `${z(r.format(t.start))}, ${o} – ${s}`;
  const l = i === "es" ? "a" : "to";
  return `${z(r.format(t.start))} ${o} ${l} ${z(r.format(t.end))} ${s}`;
}
function z(t) {
  return t && t.charAt(0).toUpperCase() + t.slice(1);
}
function ke(t, e) {
  const i = Math.max(1, Math.round(t / 6e4));
  if (i >= 45) {
    const a = Math.max(1, Math.round(i / 60));
    return `${a} ${a === 1 ? e.hourRemaining : e.hoursRemaining}`;
  }
  return `${i} ${e.minutesRemaining}`;
}
function Kt(t, e, i) {
  if (t.allDay) {
    const h = w(e).getTime(), p = w(t.start).getTime(), m = w(t.end).getTime();
    if (h < p)
      return {
        progressPct: 0,
        label: i.allDay,
        isOngoing: !1,
        isPast: !1,
        isFuture: !0
      };
    if (h >= m)
      return {
        progressPct: 100,
        label: i.allDay,
        isOngoing: !1,
        isPast: !0,
        isFuture: !1
      };
    const u = e.getHours() * 60 + e.getMinutes();
    return {
      progressPct: Math.min(100, Math.max(0, u / 1440 * 100)),
      label: i.allDay,
      isOngoing: !0,
      isPast: !1,
      isFuture: !1
    };
  }
  const a = t.start.getTime(), n = t.end.getTime(), r = e.getTime(), o = Math.max(6e4, n - a);
  if (r < a)
    return {
      progressPct: 0,
      label: ke(o, i),
      isOngoing: !1,
      isPast: !1,
      isFuture: !0
    };
  if (r >= n)
    return {
      progressPct: 100,
      label: ke(o, i),
      isOngoing: !1,
      isPast: !0,
      isFuture: !1
    };
  const s = r - a, l = Math.min(100, Math.max(0, s / o * 100)), c = n - r;
  return {
    progressPct: l,
    label: ke(c, i),
    isOngoing: !0,
    isPast: !1,
    isFuture: !1
  };
}
function Zt(t, e) {
  const i = new Intl.DateTimeFormat(e, { weekday: "short" }).format(t).replace(/\.$/, ""), a = t.getDate(), n = new Intl.DateTimeFormat(e, { month: "short" }).format(t).replace(/\.$/, "");
  return {
    weekdayDay: `${i}. ${a}`,
    month: n
  };
}
const Jt = 6e4, Ce = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
function Qt() {
  Ce.clear();
}
function De(t, e) {
  const i = Array.isArray(t.entities) && t.entities.length > 0 ? t.entities : t.entity ? [t.entity] : [], a = [];
  return i.forEach((n, r) => {
    var p, m, u, y, b, x;
    const o = typeof n == "string" ? { entity: n } : n, s = ((o == null ? void 0 : o.entity) || "").trim();
    if (!s) return;
    const l = (p = e == null ? void 0 : e.states) == null ? void 0 : p[s], c = typeof ((m = l == null ? void 0 : l.attributes) == null ? void 0 : m.friendly_name) == "string" ? l.attributes.friendly_name : void 0, h = typeof ((u = l == null ? void 0 : l.attributes) == null ? void 0 : u.icon) == "string" ? l.attributes.icon : void 0;
    a.push({
      entity: s,
      name: ((y = o.name) == null ? void 0 : y.trim()) || c || s,
      color: ((b = o.color) == null ? void 0 : b.trim()) || A[r % A.length],
      icon: ((x = o.icon) == null ? void 0 : x.trim()) || h || Se,
      hidden: !!o.hidden
    });
  }), a;
}
function it(t) {
  if (!t)
    return { date: /* @__PURE__ */ new Date(), isDateOnly: !1 };
  if (typeof t == "string") {
    const e = /^\d{4}-\d{2}-\d{2}$/.test(t.trim());
    return {
      date: e ? et(t.trim()) : new Date(t),
      isDateOnly: e
    };
  }
  return t.date && !t.dateTime ? {
    date: et(t.date),
    isDateOnly: !0
  } : t.dateTime ? {
    date: new Date(t.dateTime),
    isDateOnly: !1
  } : { date: /* @__PURE__ */ new Date(), isDateOnly: !1 };
}
function Xt(t, e, i) {
  const a = it(t.start), n = it(t.end);
  if (Number.isNaN(a.date.getTime()))
    return null;
  const r = a.isDateOnly, o = a.date;
  let s = Number.isNaN(n.date.getTime()) ? new Date(o) : n.date;
  r && s.getTime() <= o.getTime() ? s = S(o, 1) : !r && s.getTime() < o.getTime() && (s = new Date(o));
  const l = t.uid || `${o.getTime()}-${i}`;
  return {
    id: `${e.entity}::${l}::${o.toISOString()}`,
    uid: t.uid || void 0,
    summary: (t.summary || "(Sin título)").trim(),
    description: (t.description || "").trim(),
    location: (t.location || "").trim(),
    start: o,
    end: s,
    allDay: r,
    calendarEntity: e.entity,
    calendarName: e.name,
    color: e.color,
    icon: e.icon
  };
}
async function ei(t, e, i, a, n = !1) {
  const r = i.toISOString(), o = a.toISOString(), s = `${e.entity}|${e.name}|${e.color}|${e.icon}|${r}|${o}`;
  if (!n) {
    const h = Ce.get(s);
    if (h && Date.now() - h.timestamp < Jt)
      return h.events;
    const p = Ee.get(s);
    if (p)
      return p;
  }
  const l = `calendars/${encodeURIComponent(e.entity)}?start=${encodeURIComponent(
    r
  )}&end=${encodeURIComponent(o)}`, c = t.callApi("GET", l).then((h) => {
    const p = (Array.isArray(h) ? h : []).map((m, u) => Xt(m, e, u)).filter((m) => m !== null);
    return Ce.set(s, {
      timestamp: Date.now(),
      events: p
    }), p;
  }).finally(() => {
    Ee.delete(s);
  });
  return Ee.set(s, c), c;
}
async function ti(t, e, i, a, n = !1) {
  if (!t || e.length === 0)
    return { events: [], failedEntities: [] };
  const r = await Promise.allSettled(
    e.map(
      (l) => ei(t, l, i, a, n)
    )
  ), o = [], s = [];
  return r.forEach((l, c) => {
    l.status === "fulfilled" ? o.push(...l.value) : s.push(e[c].entity);
  }), o.sort((l, c) => l.start.getTime() - c.start.getTime()), { events: o, failedEntities: s };
}
var ii = Object.defineProperty, ai = Object.getOwnPropertyDescriptor, I = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? ai(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (n = (a ? o(e, i, n) : o(n)) || n);
  return a && n && ii(e, i, n), n;
};
let M = class extends N {
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
    var t, e, i, a, n, r, o;
    return d`
      <div class="header-root">
        <div class="header-top">
          <div class="title-group">
            ${this.cardTitle ? d`<div class="card-subtitle">${this.cardTitle}</div>` : g}
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
              title=${((a = this.strings) == null ? void 0 : a.next) || "Next"}
              aria-label=${((n = this.strings) == null ? void 0 : n.next) || "Next"}
              @click=${() => this._emit("cal-next")}
            >
              <ha-icon icon="mdi:chevron-right"></ha-icon>
            </button>

            <button
              class="icon-btn ${this.loading ? "spinning" : ""}"
              type="button"
              title=${((r = this.strings) == null ? void 0 : r.refresh) || "Refresh"}
              aria-label=${((o = this.strings) == null ? void 0 : o.refresh) || "Refresh"}
              @click=${() => this._emit("cal-refresh")}
            >
              <ha-icon icon="mdi:refresh"></ha-icon>
            </button>
          </div>
        </div>

        ${this.showEntityToggles && this.entities.length > 0 ? d`
              <div class="entity-chips">
                ${this.entities.map((s) => {
      const l = this.hiddenEntities.has(s.entity);
      return d`
                    <button
                      type="button"
                      class="entity-chip ${l ? "is-hidden" : ""}"
                      style="--chip-color: ${s.color}; --chip-bg: ${j(
        s.color,
        0.14
      )};"
                      aria-pressed=${!l}
                      @click=${() => this._emit("cal-toggle-entity", { entity: s.entity })}
                    >
                      <span class="chip-dot"></span>
                      <ha-icon class="chip-icon" .icon=${s.icon}></ha-icon>
                      <span class="chip-name">${s.name}</span>
                    </button>
                  `;
    })}
              </div>
            ` : g}
      </div>
    `;
  }
};
M.styles = F`
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
I([
  _({ type: String })
], M.prototype, "cardTitle", 2);
I([
  _({ type: String })
], M.prototype, "periodLabel", 2);
I([
  _({ type: Array })
], M.prototype, "entities", 2);
I([
  _({ attribute: !1 })
], M.prototype, "hiddenEntities", 2);
I([
  _({ type: Boolean })
], M.prototype, "showEntityToggles", 2);
I([
  _({ type: Boolean })
], M.prototype, "loading", 2);
I([
  _({ attribute: !1 })
], M.prototype, "strings", 2);
M = I([
  W("ha-calendar-shared-header")
], M);
var ni = Object.defineProperty, oi = Object.getOwnPropertyDescriptor, Y = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? oi(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (n = (a ? o(e, i, n) : o(n)) || n);
  return a && n && ni(e, i, n), n;
};
let P = class extends N {
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
    var i, a, n, r, o, s, l;
    const e = qt(
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
            style="background: ${j(t.color, 0.16)}; color: ${t.color};"
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
            <div class="detail-label">${((n = this.strings) == null ? void 0 : n.when) || "When"}</div>
            <div class="detail-value">${e}</div>
          </div>
        </div>

        ${t.location ? d`
              <div class="detail-row">
                <ha-icon icon="mdi:map-marker-outline"></ha-icon>
                <div>
                  <div class="detail-label">${((r = this.strings) == null ? void 0 : r.location) || "Location"}</div>
                  <div class="detail-value">${t.location}</div>
                </div>
              </div>
            ` : g}

        ${t.description ? d`
              <div class="detail-row">
                <ha-icon icon="mdi:text"></ha-icon>
                <div>
                  <div class="detail-label">
                    ${((o = this.strings) == null ? void 0 : o.description) || "Description"}
                  </div>
                  <div class="detail-value description-text">${t.description}</div>
                </div>
              </div>
            ` : g}
      </div>

      <div class="dialog-footer">
        <button
          type="button"
          class="action-btn secondary"
          @click=${() => this._openMoreInfo(t.calendarEntity)}
        >
          <ha-icon icon="mdi:open-in-new"></ha-icon>
          <span>${((s = this.strings) == null ? void 0 : s.openEntity) || "Open entity"}</span>
        </button>
        <button type="button" class="action-btn primary" @click=${this._close}>
          ${((l = this.strings) == null ? void 0 : l.close) || "Close"}
        </button>
      </div>
    `;
  }
  _renderDayList() {
    var e, i, a;
    if (!this.dayDate) return g;
    const t = pt(this.dayDate, this.locale);
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
        ${this.dayEvents.length === 0 ? d`<div class="empty-day">${((a = this.strings) == null ? void 0 : a.noEvents) || "No events"}</div>` : this.dayEvents.map((n) => {
      var o;
      const r = n.allDay ? ((o = this.strings) == null ? void 0 : o.allDay) || "All day" : `${X(n.start, this.locale)} – ${X(
        n.end,
        this.locale
      )}`;
      return d`
                <button
                  type="button"
                  class="day-event-row"
                  style="--ev-color: ${n.color}; --ev-bg: ${j(
        n.color,
        0.12
      )};"
                  @click=${() => this._selectEventFromList(n)}
                >
                  <ha-icon class="row-icon" .icon=${n.icon}></ha-icon>
                  <div class="row-main">
                    <div class="row-title">${n.summary}</div>
                    <div class="row-sub">
                      <span>${r}</span>
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
    return !(this.event || this.dayDate) ? g : d`
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
P.styles = F`
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
Y([
  _({ attribute: !1 })
], P.prototype, "event", 2);
Y([
  _({ attribute: !1 })
], P.prototype, "dayDate", 2);
Y([
  _({ type: Array })
], P.prototype, "dayEvents", 2);
Y([
  _({ type: String })
], P.prototype, "locale", 2);
Y([
  _({ type: String })
], P.prototype, "lang", 2);
Y([
  _({ attribute: !1 })
], P.prototype, "strings", 2);
P = Y([
  W("ha-calendar-event-dialog")
], P);
var ri = Object.defineProperty, T = (t, e, i, a) => {
  for (var n = void 0, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (n = o(e, i, n) || n);
  return n && ri(e, i, n), n;
};
function ze(t) {
  const e = Object.keys((t == null ? void 0 : t.states) || {}).filter((i) => i.startsWith("calendar.")).slice(0, 3);
  return e.length > 0 ? e.map((i, a) => {
    var s, l, c;
    const n = (s = t == null ? void 0 : t.states) == null ? void 0 : s[i], r = typeof ((l = n == null ? void 0 : n.attributes) == null ? void 0 : l.friendly_name) == "string" ? n.attributes.friendly_name : void 0, o = typeof ((c = n == null ? void 0 : n.attributes) == null ? void 0 : c.icon) == "string" ? n.attributes.icon : "mdi:calendar";
    return {
      entity: i,
      name: r,
      color: A[a % A.length],
      icon: o
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
const Ie = class Ie extends N {
  constructor() {
    super(...arguments), this._anchorDate = w(/* @__PURE__ */ new Date()), this._events = [], this._loading = !1, this._failedEntities = [], this._hiddenEntities = /* @__PURE__ */ new Set(), this._selectedEvent = null, this._selectedDayDate = null, this._currentNow = /* @__PURE__ */ new Date(), this._lastFetchKey = "", this._fetchRequestId = 0;
  }
  connectedCallback() {
    super.connectedCallback(), this._currentNow = /* @__PURE__ */ new Date(), this._tickerId = window.setInterval(() => {
      this._currentNow = /* @__PURE__ */ new Date();
    }, 3e4);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._tickerId !== void 0 && (window.clearInterval(this._tickerId), this._tickerId = void 0);
  }
  static async getConfigElement() {
    var e, i, a;
    try {
      const n = window, r = await ((e = n.loadCardHelpers) == null ? void 0 : e.call(n));
      if (r && !customElements.get("ha-selector")) {
        const o = await r.createCardElement({ type: "entities", entities: [] });
        await ((a = (i = o == null ? void 0 : o.constructor) == null ? void 0 : i.getConfigElement) == null ? void 0 : a.call(i));
      }
    } catch {
    }
    return document.createElement(nt);
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
  renderMinimalDayBlock(e, i, a, n, r = !0) {
    var l;
    const o = Zt(e, a), s = !!((l = this._config) != null && l.use_entity_color);
    return d`
      <div class="min-day-row">
        <div class="min-date-col">
          <span class="min-date-day">${o.weekdayDay}</span>
          <span class="min-date-month">${o.month}</span>
        </div>

        <div class="min-events-col">
          ${i.length === 0 ? d`<div class="min-empty-text">${n.noEvents}</div>` : i.map((c) => {
      const h = Kt(
        c,
        this._currentNow,
        n
      ), p = c.allDay ? n.allDay : `${me(c.start)} - ${me(c.end)}`, m = s ? `--min-ev-accent: ${c.color};` : "", u = c.summary && c.summary !== "(Sin título)" ? c.summary : c.calendarName;
      return d`
                  <button
                    type="button"
                    class="min-event-item"
                    style=${m}
                    @click=${(y) => {
        y.stopPropagation(), this._selectedEvent = c;
      }}
                  >
                    <div class="min-event-top">
                      <div class="min-event-title-wrap">
                        <ha-icon class="min-event-icon" .icon=${c.icon}></ha-icon>
                        <span class="min-event-title">${u}</span>
                      </div>
                      <span class="min-event-time">${p}</span>
                    </div>

                    <div class="min-event-sub">
                      <span class="min-event-duration">${h.label}</span>
                      ${r ? d`
                            <div
                              class="min-progress-track"
                              role="progressbar"
                              aria-valuenow=${Math.round(h.progressPct)}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div
                                class="min-progress-fill"
                                style="width: ${h.progressPct}%;"
                              ></div>
                            </div>
                          ` : g}
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
    const { start: a, end: n } = this.getFetchRange(), o = `${i.map((s) => `${s.entity}|${s.name}|${s.color}|${s.icon}`).join(";")}::${a.toISOString()}::${n.toISOString()}`;
    !e && o === this._lastFetchKey || (this._lastFetchKey = o, this._loadEvents(i, a, n, e));
  }
  async _loadEvents(e, i, a, n) {
    if (!this.hass) return;
    const r = ++this._fetchRequestId;
    this._loading = !0;
    try {
      const o = await ti(
        this.hass,
        e,
        i,
        a,
        n
      );
      if (r !== this._fetchRequestId) return;
      this._events = o.events, this._failedEntities = o.failedEntities;
    } catch {
      if (r !== this._fetchRequestId) return;
      this._failedEntities = e.map((o) => o.entity);
    } finally {
      r === this._fetchRequestId && (this._loading = !1);
    }
  }
  _handleRefresh() {
    Qt(), this._triggerFetchIfNeeded(!0);
  }
  _handleToggleEntity(e) {
    var n;
    const i = (n = e.detail) == null ? void 0 : n.entity;
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
    if (!this._selectedDayDate) return [];
    const i = this._selectedDayDate, a = new Date(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0, 0), n = new Date(i.getFullYear(), i.getMonth(), i.getDate() + 1, 0, 0, 0, 0);
    return e.filter((r) => {
      const o = r.start.getTime(), s = r.end.getTime();
      return s <= o ? o >= a.getTime() && o < n.getTime() : o < n.getTime() && s > a.getTime();
    });
  }
  render() {
    if (!this._config) return g;
    const e = rt(this._config.language, this.hass), i = yt(e, this.hass), a = ot[e], n = De(this._config, this.hass), r = this._events.filter(
      (h) => !this._hiddenEntities.has(h.calendarEntity)
    ), o = this.useSharedHeader(), s = this._config.show_entity_toggles !== !1, l = this.isMinimalSurface(), c = Lt(this._config);
    return d`
      <ha-card class=${c.className} style=${c.style}>
        ${!l || this._loading ? d`<div class="loading-bar ${this._loading ? "active" : ""}"></div>` : g}

        ${o ? d`
              <ha-calendar-shared-header
                .cardTitle=${this._config.title || ""}
                .periodLabel=${this.getPeriodLabel(i)}
                .entities=${n}
                .hiddenEntities=${this._hiddenEntities}
                .showEntityToggles=${s}
                .loading=${this._loading}
                .strings=${a}
                @cal-prev=${() => this.navigatePrev()}
                @cal-today=${() => this.navigateToday()}
                @cal-next=${() => this.navigateNext()}
                @cal-refresh=${() => this._handleRefresh()}
                @cal-toggle-entity=${this._handleToggleEntity}
              ></ha-calendar-shared-header>
            ` : g}

        ${this._failedEntities.length > 0 ? d`
              <div class="status-banner" role="status">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                <span>
                  ${a.errorLoading}: ${this._failedEntities.join(", ")}
                </span>
              </div>
            ` : g}

        ${n.length === 0 ? d`
              <div class="empty-state">
                <ha-icon icon="mdi:calendar-blank-multiple"></ha-icon>
                <div class="empty-state-title">${a.noCalendars}</div>
                <div class="empty-state-hint">${a.noCalendarsHint}</div>
              </div>
            ` : d`
              <div
                class="card-content-wrap ${l ? "minimal-pad" : ""}"
                @cal-event-click=${this._handleEventClick}
              >
                ${this.renderCalendarBody(
      r,
      n,
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
        .locale=${i}
        .lang=${e}
        .strings=${a}
        @cal-dialog-close=${this._handleDialogClose}
        @cal-select-event=${this._handleSelectEventFromDay}
      ></ha-calendar-event-dialog>
    `;
  }
};
Ie.styles = [ve];
let k = Ie;
T([
  _({ attribute: !1 })
], k.prototype, "hass");
T([
  D()
], k.prototype, "_config");
T([
  D()
], k.prototype, "_anchorDate");
T([
  D()
], k.prototype, "_events");
T([
  D()
], k.prototype, "_loading");
T([
  D()
], k.prototype, "_failedEntities");
T([
  D()
], k.prototype, "_hiddenEntities");
T([
  D()
], k.prototype, "_selectedEvent");
T([
  D()
], k.prototype, "_selectedDayDate");
T([
  D()
], k.prototype, "_currentNow");
var si = Object.defineProperty, li = Object.getOwnPropertyDescriptor, ut = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? li(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (n = (a ? o(e, i, n) : o(n)) || n);
  return a && n && si(e, i, n), n;
};
let ge = class extends k {
  constructor() {
    super(...arguments), this._focusedDay = w(/* @__PURE__ */ new Date());
  }
  static getStubConfig(t) {
    return {
      type: `custom:${fe}`,
      entities: ze(t),
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
      end: be(t[t.length - 1].date)
    };
  }
  getPeriodLabel(t) {
    return Vt(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = Xe(this._anchorDate, -1), this._focusedDay = new Date(
      this._anchorDate.getFullYear(),
      this._anchorDate.getMonth(),
      1
    );
  }
  navigateNext() {
    this._anchorDate = Xe(this._anchorDate, 1), this._focusedDay = new Date(
      this._anchorDate.getFullYear(),
      this._anchorDate.getMonth(),
      1
    );
  }
  navigateToday() {
    const t = /* @__PURE__ */ new Date();
    this._anchorDate = new Date(t.getFullYear(), t.getMonth(), 1, 0, 0, 0, 0), this._focusedDay = w(t);
  }
  _getGridDays() {
    return Rt(
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
  renderCalendarBody(t, e, i, a, n) {
    const r = !!this._config.show_week_numbers, o = this._config.compact !== !1, s = Math.max(1, this._config.max_events_per_day ?? 3), l = jt(this.getFirstDayOfWeek(), i), c = this._getGridDays(), h = [];
    for (let m = 0; m < c.length; m += 7)
      h.push(c.slice(m, m + 7));
    const p = Q(t, this._focusedDay);
    return d`
      <div class="month-grid-wrap ${o ? "is-compact" : ""}">
        <div
          class="weekday-row ${r ? "with-weeks" : ""}"
          role="row"
        >
          ${r ? d`<div class="week-col-header">${n.weekAbbr}</div>` : g}
          ${l.map(
      (m) => d`<div class="weekday-cell">${m}</div>`
    )}
        </div>

        <div class="weeks-container">
          ${h.map(
      (m) => d`
              <div class="week-row ${r ? "with-weeks" : ""}">
                ${r ? d`<div class="week-number-cell">${m[0].weekNumber}</div>` : g}
                ${m.map((u) => {
        const y = Q(t, u.date), b = y.slice(0, s), x = y.length - b.length, v = K(u.date, this._focusedDay);
        return d`
                    <div
                      class="day-cell ${u.isCurrentMonth ? "" : "outside-month"} ${u.isToday ? "is-today" : ""} ${v ? "is-focused" : ""}"
                      @click=${() => {
          this._focusedDay = u.date;
        }}
                    >
                      <div class="day-cell-top">
                        <span class="day-num ${u.isToday ? "today-circle" : ""}">
                          ${u.date.getDate()}
                        </span>
                      </div>

                      <div class="day-events">
                        ${b.map(
          (f) => f.allDay ? d`
                                <button
                                  type="button"
                                  class="event-pill all-day"
                                  style="--ev-color: ${f.color};"
                                  title=${`${f.calendarName}: ${f.summary}`}
                                  @click=${($) => this._onEventPillClick($, f)}
                                >
                                  <ha-icon class="pill-icon" .icon=${f.icon}></ha-icon>
                                  <span class="pill-text">${f.summary}</span>
                                </button>
                              ` : d`
                                <button
                                  type="button"
                                  class="event-pill timed"
                                  style="--ev-color: ${f.color}; --ev-bg: ${j(
            f.color,
            0.14
          )};"
                                  title=${`${me(f.start)} ${f.summary} (${f.calendarName})`}
                                  @click=${($) => this._onEventPillClick($, f)}
                                >
                                  <span class="pill-dot"></span>
                                  <span class="pill-time">
                                    ${me(f.start)}
                                  </span>
                                  <span class="pill-text">${f.summary}</span>
                                </button>
                              `
        )}

                        ${x > 0 ? d`
                              <button
                                type="button"
                                class="more-btn"
                                @click=${(f) => {
          f.stopPropagation(), this._openDayList(u.date);
        }}
                              >
                                +${x} ${n.moreEvents}
                              </button>
                            ` : g}
                      </div>
                    </div>
                  `;
      })}
              </div>
            `
    )}
        </div>
      </div>

      ${p.length > 0 ? d`
            <div class="month-focused-summary">
              ${this.renderMinimalDayBlock(
      this._focusedDay,
      p,
      i,
      n,
      !0
    )}
            </div>
          ` : g}
    `;
  }
};
ge.styles = [
  ve,
  F`
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
ut([
  D()
], ge.prototype, "_focusedDay", 2);
ge = ut([
  W(fe)
], ge);
var ci = Object.defineProperty, di = Object.getOwnPropertyDescriptor, C = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? di(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (n = (a ? o(e, i, n) : o(n)) || n);
  return a && n && ci(e, i, n), n;
};
let E = class extends N {
  constructor() {
    super(...arguments), this.days = [], this.events = [], this.startHour = 0, this.endHour = 24, this.locale = "es-ES", this.lang = "es", this.detailedMode = !1, this.compactAllDay = !1, this._now = /* @__PURE__ */ new Date(), this._hasAutoScrolled = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._now = /* @__PURE__ */ new Date(), this._timerId = window.setInterval(() => {
      this._now = /* @__PURE__ */ new Date();
    }, 6e4);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._timerId !== void 0 && (window.clearInterval(this._timerId), this._timerId = void 0);
  }
  updated() {
    if (!this._hasAutoScrolled) {
      const t = this.renderRoot.querySelector(".grid-scroll");
      if (t) {
        const e = this._hourHeight, i = this._safeStartHour, a = Math.max(i, Math.min(8, this._safeEndHour - 2));
        t.scrollTop = Math.max(0, (a - i) * e - 16), this._hasAutoScrolled = !0;
      }
    }
  }
  get _safeStartHour() {
    return Math.max(0, Math.min(23, Math.floor(this.startHour || 0)));
  }
  get _safeEndHour() {
    const t = this._safeStartHour;
    return Math.max(t + 1, Math.min(24, Math.floor(this.endHour || 24)));
  }
  get _hourHeight() {
    return this.detailedMode ? 60 : 52;
  }
  _onEventClick(t) {
    this.dispatchEvent(
      new CustomEvent("cal-event-click", {
        detail: { event: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _renderDayHeader(t) {
    const e = K(t, this._now), i = z(
      new Intl.DateTimeFormat(this.locale, { weekday: "short" }).format(t).replace(/\.$/, "")
    ), a = t.getDate();
    return d`
      <div class="day-header-cell ${e ? "is-today" : ""}">
        <span class="day-weekday">${i}</span>
        <span class="day-number ${e ? "today-badge" : ""}">${a}</span>
      </div>
    `;
  }
  render() {
    var m;
    const t = this._safeStartHour, e = this._safeEndHour, i = this._hourHeight, a = [];
    for (let u = t; u < e; u++)
      a.push(u);
    const n = a.length * i, r = Math.max(1, this.days.length), o = r > 1 ? "82px" : "0px", s = this.days.map((u) => Q(this.events, u)), l = s.some((u) => u.some((y) => y.allDay)), c = this._now.getHours() * 60 + this._now.getMinutes(), h = c >= t * 60 && c <= e * 60, p = h ? (c - t * 60) / ((e - t) * 60) * 100 : 0;
    return d`
      <div
        class="grid-scroll"
        style="--day-count: ${r}; --col-min-width: ${o}; --hour-height: ${i}px;"
      >
        <div class="grid-canvas">
          <!-- Sticky header: days + all-day events -->
          <div class="sticky-top">
            <div class="header-row">
              <div class="gutter-corner"></div>
              <div class="day-columns-grid">
                ${this.days.map((u) => this._renderDayHeader(u))}
              </div>
            </div>

            ${l ? d`
                  <div class="all-day-row ${this.compactAllDay ? "compact" : ""}">
                    <div class="gutter-all-day">
                      <span>${((m = this.strings) == null ? void 0 : m.allDay) || "All day"}</span>
                    </div>
                    <div class="day-columns-grid all-day-columns">
                      ${s.map((u, y) => {
      const b = u.filter((v) => v.allDay), x = K(this.days[y], this._now);
      return d`
                          <div class="all-day-cell ${x ? "is-today-col" : ""}">
                            ${b.map(
        (v) => d`
                                <button
                                  type="button"
                                  class="all-day-pill"
                                  style="--ev-color: ${v.color};"
                                  title=${`${v.calendarName}: ${v.summary}`}
                                  @click=${() => this._onEventClick(v)}
                                >
                                  <ha-icon class="ev-icon" .icon=${v.icon}></ha-icon>
                                  <span class="ev-summary">${v.summary}</span>
                                </button>
                              `
      )}
                          </div>
                        `;
    })}
                    </div>
                  </div>
                ` : g}
          </div>

          <!-- Hourly schedule body -->
          <div class="time-body" style="height: ${n}px;">
            <div class="time-gutter">
              ${a.map(
      (u) => d`
                  <div class="hour-label" style="height: ${i}px;">
                    <span>${Gt(u, this.locale)}</span>
                  </div>
                `
    )}
            </div>

            <div class="day-columns-grid time-columns">
              <!-- Background hour lines -->
              <div class="hour-lines" aria-hidden="true">
                ${a.map(
      () => d`
                    <div class="hour-line" style="height: ${i}px;">
                      <div class="half-hour-line"></div>
                    </div>
                  `
    )}
              </div>

              ${this.days.map((u, y) => {
      const b = K(u, this._now), x = Yt(
        s[y],
        u,
        t,
        e
      );
      return d`
                  <div class="day-col ${b ? "is-today-col" : ""}">
                    ${x.map((v) => {
        const f = v.event, $ = j(f.color, 0.16), G = j(f.color, 0.26), V = `${X(
          f.start,
          this.locale
        )} – ${X(f.end, this.locale)}`;
        return d`
                        <button
                          type="button"
                          class="timed-event"
                          style="
                            top: ${v.top}%;
                            height: ${v.height}%;
                            left: calc(${v.left}% + 2px);
                            width: calc(${v.width}% - 4px);
                            --ev-color: ${f.color};
                            --ev-bg: ${$};
                            --ev-bg-hover: ${G};
                          "
                          title=${`${f.summary} (${V}) · ${f.calendarName}`}
                          @click=${() => this._onEventClick(f)}
                        >
                          <div class="timed-ev-header">
                            <ha-icon class="ev-icon" .icon=${f.icon}></ha-icon>
                            <span class="timed-ev-title">${f.summary}</span>
                          </div>
                          <div class="timed-ev-time">${V}</div>
                          ${this.detailedMode && f.location ? d`
                                <div class="timed-ev-meta">
                                  <ha-icon icon="mdi:map-marker-outline"></ha-icon>
                                  <span>${f.location}</span>
                                </div>
                              ` : g}
                          ${this.detailedMode && f.description ? d`<div class="timed-ev-desc">${f.description}</div>` : g}
                        </button>
                      `;
      })}
                    ${b && h ? d`
                          <div
                            class="now-indicator"
                            style="top: ${p}%;"
                            aria-hidden="true"
                          >
                            <span class="now-dot"></span>
                            <span class="now-line"></span>
                          </div>
                        ` : g}
                  </div>
                `;
    })}
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
E.styles = F`
    :host {
      display: block;
    }

    .grid-scroll {
      overflow: auto;
      max-height: 580px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.22));
      border-radius: 10px;
      background: var(--ha-card-background, var(--card-background-color, #ffffff));
      position: relative;
    }

    .grid-canvas {
      min-width: fit-content;
      width: 100%;
    }

    .sticky-top {
      position: sticky;
      top: 0;
      z-index: 6;
      background: var(--ha-card-background, var(--card-background-color, #ffffff));
      border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.22));
    }

    .header-row,
    .all-day-row,
    .time-body {
      display: flex;
      width: 100%;
    }

    .gutter-corner,
    .gutter-all-day,
    .time-gutter {
      width: 54px;
      min-width: 54px;
      flex-shrink: 0;
      position: sticky;
      left: 0;
      z-index: 4;
      background: var(--ha-card-background, var(--card-background-color, #ffffff));
      border-right: 1px solid var(--divider-color, rgba(127, 127, 127, 0.22));
      box-sizing: border-box;
    }

    .gutter-all-day {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      font-size: 0.68rem;
      text-align: center;
      color: var(--secondary-text-color, #727272);
      line-height: 1.15;
    }

    .day-columns-grid {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(var(--day-count), minmax(var(--col-min-width), 1fr));
      position: relative;
    }

    .day-header-cell {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 8px 4px;
      gap: 3px;
      border-right: 1px solid var(--divider-color, rgba(127, 127, 127, 0.16));
    }

    .day-header-cell:last-child {
      border-right: none;
    }

    .day-weekday {
      font-size: 0.72rem;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--secondary-text-color, #727272);
    }

    .day-header-cell.is-today .day-weekday {
      color: var(--primary-color, #1a73e8);
    }

    .day-number {
      width: 28px;
      height: 28px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--primary-text-color, #212121);
    }

    .day-number.today-badge {
      background: var(--primary-color, #1a73e8);
      color: var(--text-primary-color, #ffffff);
    }

    .all-day-row {
      border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.16));
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.04));
    }

    .all-day-cell {
      padding: 4px;
      display: flex;
      flex-direction: column;
      gap: 3px;
      border-right: 1px solid var(--divider-color, rgba(127, 127, 127, 0.16));
      min-height: 28px;
    }

    .all-day-cell:last-child {
      border-right: none;
    }

    .all-day-row.compact .all-day-cell {
      max-height: 68px;
      overflow-y: auto;
    }

    .all-day-pill {
      appearance: none;
      border: none;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 3px 6px;
      border-radius: 5px;
      background: var(--ev-color);
      color: #ffffff;
      font-family: inherit;
      font-size: 0.75rem;
      font-weight: 600;
      text-align: left;
      cursor: pointer;
      box-sizing: border-box;
      transition: filter 0.15s ease;
    }

    .all-day-pill:hover {
      filter: brightness(1.08);
    }

    .all-day-pill .ev-icon {
      --mdc-icon-size: 13px;
      flex-shrink: 0;
    }

    .ev-summary {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .time-body {
      position: relative;
    }

    .hour-label {
      box-sizing: border-box;
      position: relative;
      display: flex;
      justify-content: flex-end;
      padding-right: 8px;
      font-size: 0.72rem;
      color: var(--secondary-text-color, #727272);
    }

    .hour-label span {
      transform: translateY(-7px);
      background: var(--ha-card-background, var(--card-background-color, #ffffff));
      padding: 0 2px;
    }

    .hour-label:first-child span {
      transform: translateY(2px);
    }

    .time-columns {
      position: relative;
    }

    .hour-lines {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }

    .hour-line {
      box-sizing: border-box;
      border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.18));
      position: relative;
    }

    .hour-line:first-child {
      border-top: none;
    }

    .half-hour-line {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      border-top: 1px dashed var(--divider-color, rgba(127, 127, 127, 0.1));
    }

    .day-col {
      position: relative;
      height: 100%;
      border-right: 1px solid var(--divider-color, rgba(127, 127, 127, 0.16));
      z-index: 1;
    }

    .day-col:last-child {
      border-right: none;
    }

    .is-today-col {
      background: rgba(26, 115, 232, 0.035);
    }

    .timed-event {
      appearance: none;
      position: absolute;
      z-index: 2;
      border: none;
      border-left: 3px solid var(--ev-color);
      background: var(--ev-bg);
      color: var(--primary-text-color, #212121);
      border-radius: 6px;
      padding: 3px 6px;
      text-align: left;
      font-family: inherit;
      cursor: pointer;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 1px;
      box-sizing: border-box;
      transition: background-color 0.15s ease, box-shadow 0.15s ease;
    }

    .timed-event:hover {
      background: var(--ev-bg-hover);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      z-index: 3;
    }

    .timed-ev-header {
      display: flex;
      align-items: center;
      gap: 4px;
      min-width: 0;
    }

    .timed-ev-header .ev-icon {
      --mdc-icon-size: 13px;
      color: var(--ev-color);
      flex-shrink: 0;
    }

    .timed-ev-title {
      font-size: 0.76rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .timed-ev-time {
      font-size: 0.69rem;
      color: var(--secondary-text-color, #727272);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .timed-ev-meta {
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: 0.71rem;
      color: var(--secondary-text-color, #727272);
      margin-top: 2px;
      --mdc-icon-size: 13px;
    }

    .timed-ev-meta span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .timed-ev-desc {
      font-size: 0.71rem;
      color: var(--secondary-text-color, #727272);
      margin-top: 2px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .now-indicator {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 4;
      pointer-events: none;
      display: flex;
      align-items: center;
      transform: translateY(-50%);
    }

    .now-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #ea4335;
      margin-left: -4.5px;
      flex-shrink: 0;
    }

    .now-line {
      height: 2px;
      flex: 1;
      background: #ea4335;
    }

    @media (max-width: 520px) {
      .gutter-corner,
      .gutter-all-day,
      .time-gutter {
        width: 44px;
        min-width: 44px;
      }

      .hour-label {
        padding-right: 4px;
        font-size: 0.66rem;
      }
    }
  `;
C([
  _({ type: Array })
], E.prototype, "days", 2);
C([
  _({ type: Array })
], E.prototype, "events", 2);
C([
  _({ type: Number })
], E.prototype, "startHour", 2);
C([
  _({ type: Number })
], E.prototype, "endHour", 2);
C([
  _({ type: String })
], E.prototype, "locale", 2);
C([
  _({ type: String })
], E.prototype, "lang", 2);
C([
  _({ attribute: !1 })
], E.prototype, "strings", 2);
C([
  _({ type: Boolean })
], E.prototype, "detailedMode", 2);
C([
  _({ type: Boolean })
], E.prototype, "compactAllDay", 2);
C([
  D()
], E.prototype, "_now", 2);
E = C([
  W("ha-calendar-time-grid")
], E);
var hi = Object.getOwnPropertyDescriptor, pi = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? hi(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (n = o(n) || n);
  return n;
};
let Ae = class extends k {
  static getStubConfig(t) {
    return {
      type: `custom:${se}`,
      entities: ze(t),
      layout: "compact",
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
    return this._isCompact ? 4 : 8;
  }
  getGridOptions() {
    return this._isCompact ? {
      columns: 6,
      min_columns: 4,
      min_rows: 2
    } : {
      columns: 12,
      min_columns: 6,
      rows: 8,
      min_rows: 6
    };
  }
  get _isCompact() {
    var t;
    return ((t = this._config) == null ? void 0 : t.layout) !== "grid";
  }
  useSharedHeader() {
    var t;
    return !this._isCompact && ((t = this._config) == null ? void 0 : t.show_header) !== !1;
  }
  isMinimalSurface() {
    return this._isCompact;
  }
  _getDaysCount() {
    var e;
    const t = (e = this._config) == null ? void 0 : e.days_to_show;
    return typeof t == "number" && !Number.isNaN(t) ? Math.max(1, Math.min(14, Math.floor(t))) : 7;
  }
  _getVisibleDays() {
    return Ut(
      this._anchorDate,
      this.getFirstDayOfWeek(),
      this._getDaysCount()
    );
  }
  getFetchRange() {
    const t = this._getVisibleDays();
    return {
      start: t[0],
      end: be(t[t.length - 1])
    };
  }
  getPeriodLabel(t) {
    return tt(this._getVisibleDays(), t);
  }
  navigatePrev() {
    this._anchorDate = S(this._anchorDate, -this._getDaysCount());
  }
  navigateNext() {
    this._anchorDate = S(this._anchorDate, this._getDaysCount());
  }
  navigateToday() {
    this._anchorDate = w(/* @__PURE__ */ new Date());
  }
  _renderCompactWeek(t, e, i, a) {
    const n = this._config.show_week_number !== !1, r = this._config.show_progress_bar !== !1, o = !!this._config.show_navigation, s = !!this._config.show_empty_days, l = He(t[0] || this._anchorDate), c = t.map((m) => ({
      day: m,
      events: Q(e, m)
    })), h = s ? c : c.filter((m) => m.events.length > 0), p = h.length > 0 ? h : [c[0]];
    return d`
      ${n || o ? d`
            <div class="minimal-top-bar">
              <div class="week-header-left">
                ${n ? d`<span class="week-pill">${a.weekLabel} ${l}</span>` : g}
                <span class="week-range-sub">${tt(t, i)}</span>
              </div>

              ${o ? d`
                    <div class="min-nav-group">
                      <button
                        type="button"
                        class="min-nav-btn"
                        title=${a.prev}
                        aria-label=${a.prev}
                        @click=${() => this.navigatePrev()}
                      >
                        <ha-icon icon="mdi:chevron-left"></ha-icon>
                      </button>
                      <button
                        type="button"
                        class="min-today-btn"
                        @click=${() => this.navigateToday()}
                      >
                        ${a.today}
                      </button>
                      <button
                        type="button"
                        class="min-nav-btn"
                        title=${a.next}
                        aria-label=${a.next}
                        @click=${() => this.navigateNext()}
                      >
                        <ha-icon icon="mdi:chevron-right"></ha-icon>
                      </button>
                    </div>
                  ` : g}
            </div>
          ` : g}

      <div class="min-days-stack">
        ${p.map(
      (m, u) => d`
            <div class="week-day-entry ${u > 0 ? "has-divider" : ""}">
              ${this.renderMinimalDayBlock(
        m.day,
        m.events,
        i,
        a,
        r
      )}
            </div>
          `
    )}
      </div>
    `;
  }
  renderCalendarBody(t, e, i, a, n) {
    const r = this._getVisibleDays();
    if (this._isCompact)
      return this._renderCompactWeek(r, t, i, n);
    const o = this._config.start_hour ?? 0, s = this._config.end_hour ?? 24, l = !!this._config.compact_all_day;
    return d`
      <ha-calendar-time-grid
        .days=${r}
        .events=${t}
        .startHour=${o}
        .endHour=${s}
        .locale=${i}
        .lang=${a}
        .strings=${n}
        .compactAllDay=${l}
        .detailedMode=${!1}
      ></ha-calendar-time-grid>
    `;
  }
};
Ae.styles = [
  ve,
  F`
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
Ae = pi([
  W(se)
], Ae);
var ui = Object.getOwnPropertyDescriptor, mi = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? ui(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (n = o(n) || n);
  return n;
};
let Me = class extends k {
  static getStubConfig(t) {
    return {
      type: `custom:${le}`,
      entities: ze(t),
      layout: "compact",
      show_week_number: !0,
      show_progress_bar: !0,
      show_navigation: !1,
      transparent: !1,
      background_opacity: 100
    };
  }
  getCardSize() {
    return this._isCompact ? 2 : 7;
  }
  getGridOptions() {
    return this._isCompact ? {
      columns: 6,
      min_columns: 3,
      min_rows: 1
    } : {
      columns: 6,
      min_columns: 4,
      rows: 7,
      min_rows: 5
    };
  }
  get _isCompact() {
    var t;
    return ((t = this._config) == null ? void 0 : t.layout) !== "grid";
  }
  useSharedHeader() {
    var t;
    return !this._isCompact && ((t = this._config) == null ? void 0 : t.show_header) !== !1;
  }
  isMinimalSurface() {
    return this._isCompact;
  }
  getFetchRange() {
    return {
      start: w(this._anchorDate),
      end: be(this._anchorDate)
    };
  }
  getPeriodLabel(t) {
    return pt(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = S(this._anchorDate, -1);
  }
  navigateNext() {
    this._anchorDate = S(this._anchorDate, 1);
  }
  navigateToday() {
    this._anchorDate = w(/* @__PURE__ */ new Date());
  }
  _renderCompactWidget(t, e, i) {
    const a = this._config.show_week_number !== !1, n = this._config.show_progress_bar !== !1, r = !!this._config.show_navigation, o = He(this._anchorDate);
    return d`
      ${a || r ? d`
            <div class="minimal-top-bar">
              ${a ? d`<span class="week-pill">${i.weekLabel} ${o}</span>` : d`<span></span>`}

              ${r ? d`
                    <div class="min-nav-group">
                      <button
                        type="button"
                        class="min-nav-btn"
                        title=${i.prev}
                        aria-label=${i.prev}
                        @click=${() => this.navigatePrev()}
                      >
                        <ha-icon icon="mdi:chevron-left"></ha-icon>
                      </button>
                      <button
                        type="button"
                        class="min-today-btn"
                        @click=${() => this.navigateToday()}
                      >
                        ${i.today}
                      </button>
                      <button
                        type="button"
                        class="min-nav-btn"
                        title=${i.next}
                        aria-label=${i.next}
                        @click=${() => this.navigateNext()}
                      >
                        <ha-icon icon="mdi:chevron-right"></ha-icon>
                      </button>
                    </div>
                  ` : g}
            </div>
          ` : g}

      <div class="min-days-stack">
        ${this.renderMinimalDayBlock(
      this._anchorDate,
      t,
      e,
      i,
      n
    )}
      </div>
    `;
  }
  _renderDetailedGrid(t, e, i, a, n) {
    const r = this._config.start_hour ?? 0, o = this._config.end_hour ?? 24, s = this._config.show_agenda_summary !== !1, l = Q(t, this._anchorDate), c = l.filter((p) => p.allDay).length, h = l.length - c;
    return d`
      ${s ? d`
            <div class="day-summary-bar">
              <div class="summary-totals">
                <span class="summary-pill">
                  <ha-icon icon="mdi:calendar-check-outline"></ha-icon>
                  <span>${l.length} ${n.eventsCount}</span>
                </span>
                ${l.length === 0 ? d`<span class="summary-empty">${n.noEvents}</span>` : d`
                      ${c > 0 ? d`<span class="summary-sub">${c} ${n.allDayEvents}</span>` : g}
                      ${h > 0 ? d`<span class="summary-sub">${h} ${n.timedEvents}</span>` : g}
                    `}
              </div>

              <div class="summary-calendars">
                ${e.filter((p) => !this._hiddenEntities.has(p.entity)).map((p) => {
      const m = l.filter(
        (u) => u.calendarEntity === p.entity
      ).length;
      return m === 0 ? g : d`
                      <span
                        class="cal-count-badge"
                        style="background: ${j(
        p.color,
        0.14
      )}; color: ${p.color};"
                      >
                        <ha-icon .icon=${p.icon}></ha-icon>
                        <span>${p.name}: ${m}</span>
                      </span>
                    `;
    })}
              </div>
            </div>
          ` : g}

      <ha-calendar-time-grid
        .days=${[this._anchorDate]}
        .events=${t}
        .startHour=${r}
        .endHour=${o}
        .locale=${i}
        .lang=${a}
        .strings=${n}
        .detailedMode=${!0}
      ></ha-calendar-time-grid>
    `;
  }
  renderCalendarBody(t, e, i, a, n) {
    if (this._isCompact) {
      const r = Q(t, this._anchorDate);
      return this._renderCompactWidget(r, i, n);
    }
    return this._renderDetailedGrid(t, e, i, a, n);
  }
};
Me.styles = [
  ve,
  F`
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
    `
];
Me = mi([
  W(le)
], Me);
var gi = Object.defineProperty, fi = Object.getOwnPropertyDescriptor, Fe = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? fi(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (n = (a ? o(e, i, n) : o(n)) || n);
  return a && n && gi(e, i, n), n;
};
let re = class extends N {
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
    const t = this._getEntities(), e = new Set(t.map((o) => o.entity)), i = Object.keys(((r = this.hass) == null ? void 0 : r.states) || {}).filter((o) => o.startsWith("calendar.")).sort(), a = i.find((o) => !e.has(o)) || i[0] || "", n = A[t.length % A.length];
    t.push({
      entity: a,
      color: n,
      icon: Se
    }), this._updateEntities(t);
  }
  _removeEntity(t) {
    const e = this._getEntities();
    e.splice(t, 1), this._updateEntities(e);
  }
  _moveEntity(t, e) {
    const i = this._getEntities(), a = t + e;
    if (a < 0 || a >= i.length) return;
    const [n] = i.splice(t, 1);
    i.splice(a, 0, n), this._updateEntities(i);
  }
  _getCardKind() {
    var e;
    const t = (((e = this._config) == null ? void 0 : e.type) || "").toLowerCase();
    return t.includes(se) || t.includes("week") ? "week" : t.includes(le) || t.includes("day") ? "day" : "month";
  }
  _normalizeHexForColorInput(t, e = 0) {
    const i = (t || "").trim();
    return /^#[0-9a-f]{6}$/i.test(i) ? i : A[e % A.length];
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
          @value-changed=${(r) => this._updateEntityAt(e, { entity: r.detail.value })}
        ></ha-entity-picker>
      `;
    const a = Object.keys(((n = this.hass) == null ? void 0 : n.states) || {}).filter((r) => r.startsWith("calendar.")).sort();
    return d`
      <div class="entity-fallback-inputs">
        ${a.length > 0 ? d`
              <select
                .value=${a.includes(t.entity) ? t.entity : ""}
                @change=${(r) => {
      const o = r.target.value;
      o && this._updateEntityAt(e, { entity: o });
    }}
              >
                <option value="">-- calendar.* --</option>
                ${a.map((r) => {
      var s, l, c, h;
      const o = (h = (c = (l = (s = this.hass) == null ? void 0 : s.states) == null ? void 0 : l[r]) == null ? void 0 : c.attributes) == null ? void 0 : h.friendly_name;
      return d`
                    <option value=${r} ?selected=${t.entity === r}>
                      ${o ? `${o} (${r})` : r}
                    </option>
                  `;
    })}
              </select>
            ` : g}
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
    return customElements.get("ha-icon-picker") ? d`
        <ha-icon-picker
          .hass=${this.hass}
          .value=${t.icon || ""}
          @value-changed=${(a) => this._updateEntityAt(e, { icon: a.detail.value })}
        ></ha-icon-picker>
      ` : d`
      <div class="icon-preview-input">
        <ha-icon .icon=${t.icon || Se}></ha-icon>
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
    if (!this._config) return g;
    const t = rt(this._config.language, this.hass), e = ot[t], i = this._getCardKind(), a = this._getEntities(), n = this._config.first_day_of_week ?? 1, r = i !== "month" && this._config.layout !== "grid", o = typeof this._config.background_opacity == "number" ? this._config.background_opacity : this._config.transparent ? 0 : 100;
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
                <option value="es" ?selected=${this._config.language === "es"}>
                  Español
                </option>
                <option value="en" ?selected=${this._config.language === "en"}>
                  English
                </option>
              </select>
            </div>
          </div>

          <div class="toggles-list">
            ${r ? d`
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
              <label>${e.editorBackgroundOpacity}: ${o}%</label>
              <input
                type="range"
                min="0"
                max="100"
                .value=${String(o)}
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
          ${i === "month" ? this._renderMonthOptions(this._config, e) : i === "week" ? this._renderWeekOptions(this._config, e) : this._renderDayOptions(this._config, e)}
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

          ${a.length === 0 ? d`<div class="empty-entities">${e.editorNoEntities}</div>` : d`
                <div class="entities-list">
                  ${a.map((s, l) => {
      const c = this._normalizeHexForColorInput(
        s.color,
        l
      );
      return d`
                      <div class="entity-card">
                        <div class="entity-card-top">
                          <span
                            class="entity-badge"
                            style="--badge-color: ${c};"
                          >
                            #${l + 1}
                          </span>
                          <div class="entity-actions">
                            <button
                              type="button"
                              class="mini-icon-btn"
                              ?disabled=${l === 0}
                              @click=${() => this._moveEntity(l, -1)}
                            >
                              <ha-icon icon="mdi:arrow-up"></ha-icon>
                            </button>
                            <button
                              type="button"
                              class="mini-icon-btn"
                              ?disabled=${l === a.length - 1}
                              @click=${() => this._moveEntity(l, 1)}
                            >
                              <ha-icon icon="mdi:arrow-down"></ha-icon>
                            </button>
                            <button
                              type="button"
                              class="mini-icon-btn danger"
                              title=${e.editorRemove}
                              @click=${() => this._removeEntity(l)}
                            >
                              <ha-icon icon="mdi:delete-outline"></ha-icon>
                            </button>
                          </div>
                        </div>

                        <div class="field">
                          <label>${e.editorEntity}</label>
                          ${this._renderEntitySelector(s, l)}
                        </div>

                        <div class="two-col">
                          <div class="field">
                            <label>${e.editorCustomName}</label>
                            <input
                              type="text"
                              .value=${s.name || ""}
                              placeholder="Ej. Personal"
                              @change=${(h) => this._updateEntityAt(l, {
        name: h.target.value.trim()
      })}
                            />
                          </div>

                          <div class="field">
                            <label>${e.editorCustomColor}</label>
                            <div class="color-row">
                              <input
                                type="color"
                                .value=${c}
                                @input=${(h) => this._updateEntityAt(l, {
        color: h.target.value
      })}
                              />
                              <input
                                type="text"
                                .value=${s.color || c}
                                @change=${(h) => this._updateEntityAt(l, {
        color: h.target.value.trim()
      })}
                              />
                            </div>
                          </div>
                        </div>

                        <div class="field">
                          <label>${e.editorCustomIcon}</label>
                          ${this._renderIconInput(s, l)}
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
    const i = t.layout !== "grid";
    return d`
      <div class="two-col">
        <div class="field">
          <label>${e.editorLayout}</label>
          <select
            .value=${t.layout || "compact"}
            @change=${(a) => this._updateField(
      "layout",
      a.target.value
    )}
          >
            <option value="compact" ?selected=${i}>
              ${e.editorLayoutCompact}
            </option>
            <option value="grid" ?selected=${t.layout === "grid"}>
              ${e.editorLayoutGrid}
            </option>
          </select>
        </div>

        <div class="field">
          <label>${e.editorDaysToShow}</label>
          <input
            type="number"
            min="1"
            max="14"
            .value=${String(t.days_to_show ?? 7)}
            @change=${(a) => this._updateField(
      "days_to_show",
      Math.max(1, Math.min(14, Number(a.target.value) || 7))
    )}
          />
        </div>
      </div>

      ${i ? d`
            <div class="toggles-list">
              <label class="checkbox-row">
                <input
                  type="checkbox"
                  .checked=${t.show_week_number !== !1}
                  @change=${(a) => this._updateField(
      "show_week_number",
      a.target.checked
    )}
                />
                <span>${e.editorShowWeekNumber}</span>
              </label>

              <label class="checkbox-row">
                <input
                  type="checkbox"
                  .checked=${t.show_progress_bar !== !1}
                  @change=${(a) => this._updateField(
      "show_progress_bar",
      a.target.checked
    )}
                />
                <span>${e.editorShowProgressBar}</span>
              </label>

              <label class="checkbox-row">
                <input
                  type="checkbox"
                  .checked=${!!t.show_empty_days}
                  @change=${(a) => this._updateField(
      "show_empty_days",
      a.target.checked
    )}
                />
                <span>${e.editorShowEmptyDays}</span>
              </label>
            </div>
          ` : d`
            <div class="two-col">
              <div class="field">
                <label>${e.editorStartHour}</label>
                <input
                  type="number"
                  min="0"
                  max="23"
                  .value=${String(t.start_hour ?? 0)}
                  @change=${(a) => this._updateField(
      "start_hour",
      Math.max(0, Math.min(23, Number(a.target.value) || 0))
    )}
                />
              </div>
              <div class="field">
                <label>${e.editorEndHour}</label>
                <input
                  type="number"
                  min="1"
                  max="24"
                  .value=${String(t.end_hour ?? 24)}
                  @change=${(a) => this._updateField(
      "end_hour",
      Math.max(1, Math.min(24, Number(a.target.value) || 24))
    )}
                />
              </div>
            </div>
          `}
    `;
  }
  _renderDayOptions(t, e) {
    const i = t.layout !== "grid";
    return d`
      <div class="field">
        <label>${e.editorLayout}</label>
        <select
          .value=${t.layout || "compact"}
          @change=${(a) => this._updateField(
      "layout",
      a.target.value
    )}
        >
          <option value="compact" ?selected=${i}>
            ${e.editorLayoutCompact}
          </option>
          <option value="grid" ?selected=${t.layout === "grid"}>
            ${e.editorLayoutGrid}
          </option>
        </select>
      </div>

      ${i ? d`
            <div class="toggles-list">
              <label class="checkbox-row">
                <input
                  type="checkbox"
                  .checked=${t.show_week_number !== !1}
                  @change=${(a) => this._updateField(
      "show_week_number",
      a.target.checked
    )}
                />
                <span>${e.editorShowWeekNumber}</span>
              </label>

              <label class="checkbox-row">
                <input
                  type="checkbox"
                  .checked=${t.show_progress_bar !== !1}
                  @change=${(a) => this._updateField(
      "show_progress_bar",
      a.target.checked
    )}
                />
                <span>${e.editorShowProgressBar}</span>
              </label>
            </div>
          ` : d`
            <div class="two-col">
              <div class="field">
                <label>${e.editorStartHour}</label>
                <input
                  type="number"
                  min="0"
                  max="23"
                  .value=${String(t.start_hour ?? 0)}
                  @change=${(a) => this._updateField(
      "start_hour",
      Math.max(0, Math.min(23, Number(a.target.value) || 0))
    )}
                />
              </div>
              <div class="field">
                <label>${e.editorEndHour}</label>
                <input
                  type="number"
                  min="1"
                  max="24"
                  .value=${String(t.end_hour ?? 24)}
                  @change=${(a) => this._updateField(
      "end_hour",
      Math.max(1, Math.min(24, Number(a.target.value) || 24))
    )}
                />
              </div>
            </div>

            <div class="toggles-list">
              <label class="checkbox-row">
                <input
                  type="checkbox"
                  .checked=${t.show_agenda_summary !== !1}
                  @change=${(a) => this._updateField(
      "show_agenda_summary",
      a.target.checked
    )}
                />
                <span>${e.editorShowSummary}</span>
              </label>
            </div>
          `}
    `;
  }
};
re.styles = F`
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
Fe([
  _({ attribute: !1 })
], re.prototype, "hass", 2);
Fe([
  D()
], re.prototype, "_config", 2);
re = Fe([
  W(nt)
], re);
if (!customElements.get(Le)) {
  const t = customElements.get(fe);
  t && customElements.define(Le, class extends t {
  });
}
if (!customElements.get(Re)) {
  const t = customElements.get(se);
  t && customElements.define(Re, class extends t {
  });
}
if (!customElements.get(Be)) {
  const t = customElements.get(le);
  t && customElements.define(Be, class extends t {
  });
}
const yi = [
  {
    type: fe,
    name: "Simple Calendar - Month (Multi-Entity)",
    description: "Full monthly calendar view supporting multiple calendar entities with custom colors, icons, and filters.",
    preview: !0
  },
  {
    type: se,
    name: "Simple Calendar - Week (Multi-Entity)",
    description: "Weekly hourly time-grid calendar view supporting multiple calendar entities, all-day events, and current time indicator.",
    preview: !0
  },
  {
    type: le,
    name: "Simple Calendar - Day (Multi-Entity)",
    description: "Detailed daily schedule view supporting multiple calendar entities, summary badges, and hourly blocks.",
    preview: !0
  }
];
window.customCards = window.customCards || [];
for (const t of yi)
  window.customCards.some((e) => e.type === t.type) || window.customCards.push(t);
console.info(
  `%c SIMPLE-CALENDARS %c v${ft} `,
  "color: white; background: #1a73e8; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;",
  "color: #1a73e8; background: #e8f0fe; font-weight: 700; border-radius: 0 4px 4px 0; padding: 2px 6px;"
);
