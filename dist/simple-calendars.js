const ut = "1.0.0", me = "simple-calendar-month-card", re = "simple-calendar-week-card", se = "simple-calendar-day-card", et = "simple-calendar-card-editor", Ne = "ha-calendar-month-card", He = "ha-calendar-week-card", Ie = "ha-calendar-day-card", A = [
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
], ke = "mdi:calendar", tt = {
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
    editorTransparent: "Fondo transparente",
    editorBackgroundOpacity: "Opacidad del fondo (%)",
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
    editorTransparent: "Transparent background",
    editorBackgroundOpacity: "Background opacity (%)",
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
function it(t, e) {
  var a;
  return t === "es" || t === "en" ? t : (((a = e == null ? void 0 : e.locale) == null ? void 0 : a.language) || (e == null ? void 0 : e.language) || "es").toLowerCase().startsWith("en") ? "en" : "es";
}
function gt(t, e) {
  var a;
  const i = ((a = e == null ? void 0 : e.locale) == null ? void 0 : a.language) || (e == null ? void 0 : e.language);
  return i && i.toLowerCase().startsWith(t) ? i : t === "es" ? "es-ES" : "en-US";
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de = globalThis, Ce = de.ShadowRoot && (de.ShadyCSS === void 0 || de.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Se = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let at = class {
  constructor(e, i, a) {
    if (this._$cssResult$ = !0, a !== Se) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = i;
  }
  get styleSheet() {
    let e = this.o;
    const i = this.t;
    if (Ce && e === void 0) {
      const a = i !== void 0 && i.length === 1;
      a && (e = Fe.get(i)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), a && Fe.set(i, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const mt = (t) => new at(typeof t == "string" ? t : t + "", void 0, Se), B = (t, ...e) => {
  const i = t.length === 1 ? t[0] : e.reduce((a, n, o) => a + ((r) => {
    if (r._$cssResult$ === !0) return r.cssText;
    if (typeof r == "number") return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[o + 1], t[0]);
  return new at(i, t, Se);
}, ft = (t, e) => {
  if (Ce) t.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of e) {
    const a = document.createElement("style"), n = de.litNonce;
    n !== void 0 && a.setAttribute("nonce", n), a.textContent = i.cssText, t.appendChild(a);
  }
}, Re = Ce ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let i = "";
  for (const a of e.cssRules) i += a.cssText;
  return mt(i);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: yt, defineProperty: vt, getOwnPropertyDescriptor: bt, getOwnPropertyNames: xt, getOwnPropertySymbols: $t, getPrototypeOf: _t } = Object, H = globalThis, Le = H.trustedTypes, wt = Le ? Le.emptyScript : "", ve = H.reactiveElementPolyfillSupport, X = (t, e) => t, he = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? wt : null;
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
} }, Ae = (t, e) => !yt(t, e), Ue = { attribute: !0, type: String, converter: he, reflect: !1, useDefault: !1, hasChanged: Ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let K = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, i = Ue) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(e, i), !i.noAccessor) {
      const a = Symbol(), n = this.getPropertyDescriptor(e, a, i);
      n !== void 0 && vt(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, i, a) {
    const { get: n, set: o } = bt(this.prototype, e) ?? { get() {
      return this[i];
    }, set(r) {
      this[i] = r;
    } };
    return { get: n, set(r) {
      const s = n == null ? void 0 : n.call(this);
      o == null || o.call(this, r), this.requestUpdate(e, s, a);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ue;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const e = _t(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const i = this.properties, a = [...xt(i), ...$t(i)];
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
      for (const n of a) i.unshift(Re(n));
    } else e !== void 0 && i.push(Re(e));
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
    return ft(e, this.constructor.elementStyles), e;
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
    var o;
    const a = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, a);
    if (n !== void 0 && a.reflect === !0) {
      const r = (((o = a.converter) == null ? void 0 : o.toAttribute) !== void 0 ? a.converter : he).toAttribute(i, a.type);
      this._$Em = e, r == null ? this.removeAttribute(n) : this.setAttribute(n, r), this._$Em = null;
    }
  }
  _$AK(e, i) {
    var o, r;
    const a = this.constructor, n = a._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const s = a.getPropertyOptions(n), l = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((o = s.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? s.converter : he;
      this._$Em = n;
      const d = l.fromAttribute(i, s.type);
      this[n] = d ?? ((r = this._$Ej) == null ? void 0 : r.get(n)) ?? d, this._$Em = null;
    }
  }
  requestUpdate(e, i, a, n = !1, o) {
    var r;
    if (e !== void 0) {
      const s = this.constructor;
      if (n === !1 && (o = this[e]), a ?? (a = s.getPropertyOptions(e)), !((a.hasChanged ?? Ae)(o, i) || a.useDefault && a.reflect && o === ((r = this._$Ej) == null ? void 0 : r.get(e)) && !this.hasAttribute(s._$Eu(e, a)))) return;
      this.C(e, i, a);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, i, { useDefault: a, reflect: n, wrapped: o }, r) {
    a && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, r ?? i ?? this[e]), o !== !0 || r !== void 0) || (this._$AL.has(e) || (this.hasUpdated || a || (i = void 0), this._$AL.set(e, i)), n === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [o, r] of this._$Ep) this[o] = r;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [o, r] of n) {
        const { wrapped: s } = r, l = this[o];
        s !== !0 || this._$AL.has(o) || l === void 0 || this.C(o, void 0, r, l);
      }
    }
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (a = this._$EO) == null || a.forEach((n) => {
        var o;
        return (o = n.hostUpdate) == null ? void 0 : o.call(n);
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
K.elementStyles = [], K.shadowRootOptions = { mode: "open" }, K[X("elementProperties")] = /* @__PURE__ */ new Map(), K[X("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: K }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, je = (t) => t, pe = ee.trustedTypes, We = pe ? pe.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, nt = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, ot = "?" + N, kt = `<${ot}>`, j = document, ie = () => j.createComment(""), ae = (t) => t === null || typeof t != "object" && typeof t != "function", Me = Array.isArray, Et = (t) => Me(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", be = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Be = /-->/g, Ye = />/g, R = RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ge = /'/g, Ve = /"/g, rt = /^(?:script|style|textarea|title)$/i, Dt = (t) => (e, ...i) => ({ _$litType$: t, strings: e, values: i }), h = Dt(1), Z = Symbol.for("lit-noChange"), f = Symbol.for("lit-nothing"), qe = /* @__PURE__ */ new WeakMap(), L = j.createTreeWalker(j, 129);
function st(t, e) {
  if (!Me(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return We !== void 0 ? We.createHTML(e) : e;
}
const Ct = (t, e) => {
  const i = t.length - 1, a = [];
  let n, o = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", r = Q;
  for (let s = 0; s < i; s++) {
    const l = t[s];
    let d, p, c = -1, g = 0;
    for (; g < l.length && (r.lastIndex = g, p = r.exec(l), p !== null); ) g = r.lastIndex, r === Q ? p[1] === "!--" ? r = Be : p[1] !== void 0 ? r = Ye : p[2] !== void 0 ? (rt.test(p[2]) && (n = RegExp("</" + p[2], "g")), r = R) : p[3] !== void 0 && (r = R) : r === R ? p[0] === ">" ? (r = n ?? Q, c = -1) : p[1] === void 0 ? c = -2 : (c = r.lastIndex - p[2].length, d = p[1], r = p[3] === void 0 ? R : p[3] === '"' ? Ve : Ge) : r === Ve || r === Ge ? r = R : r === Be || r === Ye ? r = Q : (r = R, n = void 0);
    const u = r === R && t[s + 1].startsWith("/>") ? " " : "";
    o += r === Q ? l + kt : c >= 0 ? (a.push(d), l.slice(0, c) + nt + l.slice(c) + N + u) : l + N + (c === -2 ? s : u);
  }
  return [st(t, o + (t[i] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), a];
};
class ne {
  constructor({ strings: e, _$litType$: i }, a) {
    let n;
    this.parts = [];
    let o = 0, r = 0;
    const s = e.length - 1, l = this.parts, [d, p] = Ct(e, i);
    if (this.el = ne.createElement(d, a), L.currentNode = this.el.content, i === 2 || i === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (n = L.nextNode()) !== null && l.length < s; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const c of n.getAttributeNames()) if (c.endsWith(nt)) {
          const g = p[r++], u = n.getAttribute(c).split(N), m = /([.?@])?(.*)/.exec(g);
          l.push({ type: 1, index: o, name: m[2], strings: u, ctor: m[1] === "." ? At : m[1] === "?" ? Mt : m[1] === "@" ? Tt : fe }), n.removeAttribute(c);
        } else c.startsWith(N) && (l.push({ type: 6, index: o }), n.removeAttribute(c));
        if (rt.test(n.tagName)) {
          const c = n.textContent.split(N), g = c.length - 1;
          if (g > 0) {
            n.textContent = pe ? pe.emptyScript : "";
            for (let u = 0; u < g; u++) n.append(c[u], ie()), L.nextNode(), l.push({ type: 2, index: ++o });
            n.append(c[g], ie());
          }
        }
      } else if (n.nodeType === 8) if (n.data === ot) l.push({ type: 2, index: o });
      else {
        let c = -1;
        for (; (c = n.data.indexOf(N, c + 1)) !== -1; ) l.push({ type: 7, index: o }), c += N.length - 1;
      }
      o++;
    }
  }
  static createElement(e, i) {
    const a = j.createElement("template");
    return a.innerHTML = e, a;
  }
}
function J(t, e, i = t, a) {
  var r, s;
  if (e === Z) return e;
  let n = a !== void 0 ? (r = i._$Co) == null ? void 0 : r[a] : i._$Cl;
  const o = ae(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== o && ((s = n == null ? void 0 : n._$AO) == null || s.call(n, !1), o === void 0 ? n = void 0 : (n = new o(t), n._$AT(t, i, a)), a !== void 0 ? (i._$Co ?? (i._$Co = []))[a] = n : i._$Cl = n), n !== void 0 && (e = J(t, n._$AS(t, e.values), n, a)), e;
}
class St {
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
    const { el: { content: i }, parts: a } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? j).importNode(i, !0);
    L.currentNode = n;
    let o = L.nextNode(), r = 0, s = 0, l = a[0];
    for (; l !== void 0; ) {
      if (r === l.index) {
        let d;
        l.type === 2 ? d = new le(o, o.nextSibling, this, e) : l.type === 1 ? d = new l.ctor(o, l.name, l.strings, this, e) : l.type === 6 && (d = new Pt(o, this, e)), this._$AV.push(d), l = a[++s];
      }
      r !== (l == null ? void 0 : l.index) && (o = L.nextNode(), r++);
    }
    return L.currentNode = j, n;
  }
  p(e) {
    let i = 0;
    for (const a of this._$AV) a !== void 0 && (a.strings !== void 0 ? (a._$AI(e, a, i), i += a.strings.length - 2) : a._$AI(e[i])), i++;
  }
}
class le {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, i, a, n) {
    this.type = 2, this._$AH = f, this._$AN = void 0, this._$AA = e, this._$AB = i, this._$AM = a, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
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
    e = J(this, e, i), ae(e) ? e === f || e == null || e === "" ? (this._$AH !== f && this._$AR(), this._$AH = f) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Et(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== f && ae(this._$AH) ? this._$AA.nextSibling.data = e : this.T(j.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var o;
    const { values: i, _$litType$: a } = e, n = typeof a == "number" ? this._$AC(e) : (a.el === void 0 && (a.el = ne.createElement(st(a.h, a.h[0]), this.options)), a);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === n) this._$AH.p(i);
    else {
      const r = new St(n, this), s = r.u(this.options);
      r.p(i), this.T(s), this._$AH = r;
    }
  }
  _$AC(e) {
    let i = qe.get(e.strings);
    return i === void 0 && qe.set(e.strings, i = new ne(e)), i;
  }
  k(e) {
    Me(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let a, n = 0;
    for (const o of e) n === i.length ? i.push(a = new le(this.O(ie()), this.O(ie()), this, this.options)) : a = i[n], a._$AI(o), n++;
    n < i.length && (this._$AR(a && a._$AB.nextSibling, n), i.length = n);
  }
  _$AR(e = this._$AA.nextSibling, i) {
    var a;
    for ((a = this._$AP) == null ? void 0 : a.call(this, !1, !0, i); e !== this._$AB; ) {
      const n = je(e).nextSibling;
      je(e).remove(), e = n;
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
  constructor(e, i, a, n, o) {
    this.type = 1, this._$AH = f, this._$AN = void 0, this.element = e, this.name = i, this._$AM = n, this.options = o, a.length > 2 || a[0] !== "" || a[1] !== "" ? (this._$AH = Array(a.length - 1).fill(new String()), this.strings = a) : this._$AH = f;
  }
  _$AI(e, i = this, a, n) {
    const o = this.strings;
    let r = !1;
    if (o === void 0) e = J(this, e, i, 0), r = !ae(e) || e !== this._$AH && e !== Z, r && (this._$AH = e);
    else {
      const s = e;
      let l, d;
      for (e = o[0], l = 0; l < o.length - 1; l++) d = J(this, s[a + l], i, l), d === Z && (d = this._$AH[l]), r || (r = !ae(d) || d !== this._$AH[l]), d === f ? e = f : e !== f && (e += (d ?? "") + o[l + 1]), this._$AH[l] = d;
    }
    r && !n && this.j(e);
  }
  j(e) {
    e === f ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class At extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === f ? void 0 : e;
  }
}
class Mt extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== f);
  }
}
class Tt extends fe {
  constructor(e, i, a, n, o) {
    super(e, i, a, n, o), this.type = 5;
  }
  _$AI(e, i = this) {
    if ((e = J(this, e, i, 0) ?? f) === Z) return;
    const a = this._$AH, n = e === f && a !== f || e.capture !== a.capture || e.once !== a.once || e.passive !== a.passive, o = e !== f && (a === f || n);
    n && this.element.removeEventListener(this.name, this, a), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Pt {
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
const xe = ee.litHtmlPolyfillSupport;
xe == null || xe(ne, le), (ee.litHtmlVersions ?? (ee.litHtmlVersions = [])).push("3.3.3");
const Ot = (t, e, i) => {
  const a = (i == null ? void 0 : i.renderBefore) ?? e;
  let n = a._$litPart$;
  if (n === void 0) {
    const o = (i == null ? void 0 : i.renderBefore) ?? null;
    a._$litPart$ = n = new le(e.insertBefore(ie(), o), o, void 0, i ?? {});
  }
  return n._$AI(t), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U = globalThis;
class P extends K {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ot(i, this.renderRoot, this.renderOptions);
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
var Xe;
P._$litElement$ = !0, P.finalized = !0, (Xe = U.litElementHydrateSupport) == null || Xe.call(U, { LitElement: P });
const $e = U.litElementPolyfillSupport;
$e == null || $e({ LitElement: P });
(U.litElementVersions ?? (U.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = (t) => (e, i) => {
  i !== void 0 ? i.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zt = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Ae }, Nt = (t = zt, e, i) => {
  const { kind: a, metadata: n } = i;
  let o = globalThis.litPropertyMetadata.get(n);
  if (o === void 0 && globalThis.litPropertyMetadata.set(n, o = /* @__PURE__ */ new Map()), a === "setter" && ((t = Object.create(t)).wrapped = !0), o.set(i.name, t), a === "accessor") {
    const { name: r } = i;
    return { set(s) {
      const l = e.get.call(this);
      e.set.call(this, s), this.requestUpdate(r, l, t, !0, s);
    }, init(s) {
      return s !== void 0 && this.C(r, void 0, t, s), s;
    } };
  }
  if (a === "setter") {
    const { name: r } = i;
    return function(s) {
      const l = this[r];
      e.call(this, s), this.requestUpdate(r, l, t, !0, s);
    };
  }
  throw Error("Unsupported decorator location: " + a);
};
function $(t) {
  return (e, i) => typeof i == "object" ? Nt(t, e, i) : ((a, n, o) => {
    const r = n.hasOwnProperty(o);
    return n.constructor.createProperty(o, a), r ? Object.getOwnPropertyDescriptor(n, o) : void 0;
  })(t, e, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function C(t) {
  return $({ ...t, state: !0, attribute: !1 });
}
function W(t, e = 0.16) {
  const i = (t || "").trim(), a = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i);
  if (a) {
    let r = a[1];
    r.length === 3 && (r = r.split("").map((p) => p + p).join(""));
    const s = parseInt(r.slice(0, 2), 16), l = parseInt(r.slice(2, 4), 16), d = parseInt(r.slice(4, 6), 16);
    return `rgba(${s}, ${l}, ${d}, ${e})`;
  }
  const n = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i.exec(i);
  if (n)
    return `rgba(${n[1]}, ${n[2]}, ${n[3]}, ${e})`;
  const o = Math.round(e * 100);
  return `color-mix(in srgb, ${i || "#1a73e8"} ${o}%, transparent)`;
}
const Te = B`
  :host {
    display: block;
    --cal-border-color: var(--divider-color, rgba(127, 127, 127, 0.22));
    --cal-surface: var(--ha-card-background, var(--card-background-color, #ffffff));
    --cal-surface-alt: var(--secondary-background-color, rgba(127, 127, 127, 0.06));
    --cal-text-primary: var(--primary-text-color, #212121);
    --cal-text-secondary: var(--secondary-text-color, #727272);
    --cal-accent: var(--primary-color, #03a9f4);
    --cal-today-ring: var(--primary-color, #1a73e8);
    --cal-now-line: #ea4335;
  }

  ha-card {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: var(--cal-card-bg, var(--cal-surface));
    color: var(--cal-text-primary);
    border-radius: var(--ha-card-border-radius, 18px);
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  ha-card.is-transparent {
    background: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
  }

  ha-card.has-opacity {
    background: var(--cal-card-bg) !important;
    backdrop-filter: blur(var(--cal-backdrop-blur, 16px));
    -webkit-backdrop-filter: blur(var(--cal-backdrop-blur, 16px));
  }

  .card-content-wrap {
    padding: 0 12px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
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
    padding: 28px 16px;
    color: var(--cal-text-secondary);
    gap: 8px;
  }

  .empty-state ha-icon {
    --mdc-icon-size: 36px;
    opacity: 0.65;
  }

  .empty-state-title {
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--cal-text-primary);
  }

  .empty-state-hint {
    font-size: 0.85rem;
    max-width: 340px;
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
`;
function _(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0);
}
function ye(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1, 0, 0, 0, 0);
}
function D(t, e) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate() + e, 0, 0, 0, 0);
}
function Ke(t, e) {
  return new Date(t.getFullYear(), t.getMonth() + e, 1, 0, 0, 0, 0);
}
function te(t, e) {
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
}
function Ze(t) {
  const e = /^(\d{4})-(\d{2})-(\d{2})/.exec(t);
  if (!e)
    return new Date(t);
  const i = Number(e[1]), a = Number(e[2]) - 1, n = Number(e[3]);
  return new Date(i, a, n, 0, 0, 0, 0);
}
function lt(t) {
  const e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())), i = e.getUTCDay() || 7;
  e.setUTCDate(e.getUTCDate() + 4 - i);
  const a = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
  return Math.ceil(((e.getTime() - a.getTime()) / 864e5 + 1) / 7);
}
function Ht(t, e, i) {
  const a = (i % 7 + 7) % 7, n = new Date(t, e, 1, 0, 0, 0, 0), o = new Date(t, e + 1, 0, 0, 0, 0, 0), r = (n.getDay() - a + 7) % 7, s = D(n, -r), l = (a + 6 - o.getDay() + 7) % 7, d = r + o.getDate() + l, p = _(/* @__PURE__ */ new Date()), c = [];
  for (let g = 0; g < d; g++) {
    const u = D(s, g);
    c.push({
      date: u,
      isCurrentMonth: u.getMonth() === e && u.getFullYear() === t,
      isToday: te(u, p),
      weekNumber: lt(u)
    });
  }
  return c;
}
function It(t, e) {
  const i = (e % 7 + 7) % 7, a = _(t), n = (a.getDay() - i + 7) % 7;
  return D(a, -n);
}
function Ft(t, e, i = 7) {
  const a = i === 7 ? It(t, e) : _(t), n = [];
  for (let o = 0; o < i; o++)
    n.push(D(a, o));
  return n;
}
function Rt(t, e) {
  const i = (t % 7 + 7) % 7, a = new Date(2026, 10, 1), n = new Intl.DateTimeFormat(e, { weekday: "short" }), o = [];
  for (let r = 0; r < 7; r++) {
    const s = (i + r) % 7, l = D(a, s);
    o.push(I(n.format(l).replace(/\.$/, "")));
  }
  return o;
}
function Lt(t, e, i) {
  const a = t.start.getTime(), n = t.end.getTime(), o = e.getTime(), r = i.getTime();
  return n <= a ? a >= o && a < r : a < r && n > o;
}
function ue(t, e) {
  const i = _(e), a = ye(e);
  return t.filter((n) => Lt(n, i, a)).sort((n, o) => n.allDay !== o.allDay ? n.allDay ? -1 : 1 : n.start.getTime() - o.start.getTime());
}
function Ut(t, e, i, a) {
  const n = Math.max(60, (a - i) * 60), o = _(e).getTime(), r = o + i * 36e5, s = o + a * 36e5, l = 25, d = t.filter((m) => !m.allDay).map((m) => {
    const b = m.start.getTime(), v = Math.max(m.end.getTime(), b);
    if (v <= r || b >= s)
      return null;
    const y = Math.max(b, r), x = Math.min(v, s), E = (y - r) / 6e4, V = Math.max(E + 1, (x - r) / 6e4), q = Math.min(n, Math.max(V, E + l));
    return {
      event: m,
      startMin: E,
      endMin: V,
      visualEndMin: q,
      col: 0,
      colSpan: 1
    };
  }).filter((m) => m !== null).sort((m, b) => m.startMin !== b.startMin ? m.startMin - b.startMin : b.visualEndMin - m.visualEndMin);
  if (d.length === 0) return [];
  const p = [];
  let c = [], g = -1;
  for (const m of d)
    c.length === 0 || m.startMin < g ? (c.push(m), g = Math.max(g, m.visualEndMin)) : (p.push(c), c = [m], g = m.visualEndMin);
  c.length > 0 && p.push(c);
  const u = [];
  for (const m of p) {
    const b = [];
    for (const y of m) {
      let x = -1;
      for (let E = 0; E < b.length; E++)
        if (b[E] <= y.startMin) {
          x = E;
          break;
        }
      x === -1 ? (x = b.length, b.push(y.visualEndMin)) : b[x] = y.visualEndMin, y.col = x;
    }
    const v = Math.max(1, b.length);
    for (const y of m) {
      let x = 1;
      for (; y.col + x < v; ) {
        const pt = y.col + x;
        if (m.some(
          (ce) => ce !== y && ce.col === pt && ce.startMin < y.visualEndMin && ce.visualEndMin > y.startMin
        )) break;
        x++;
      }
      y.colSpan = x;
      const E = y.startMin / n * 100, V = (y.visualEndMin - y.startMin) / n * 100, q = y.col / v * 100, ht = y.colSpan / v * 100;
      u.push({
        event: y.event,
        top: E,
        height: Math.max(V, 1.5),
        left: q,
        width: ht
      });
    }
  }
  return u;
}
function jt(t, e) {
  const i = new Date(2026, 0, 1, t % 24, 0, 0, 0);
  return new Intl.DateTimeFormat(e, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(i);
}
function M(t, e) {
  return new Intl.DateTimeFormat(e, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(t);
}
function Wt(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    month: "long",
    year: "numeric"
  }).format(t);
  return I(i);
}
function Bt(t, e) {
  if (t.length === 0) return "";
  const i = t[0], a = t[t.length - 1], n = i.getMonth() === a.getMonth() && i.getFullYear() === a.getFullYear(), o = i.getFullYear() === a.getFullYear();
  if (n) {
    const l = I(
      new Intl.DateTimeFormat(e, { month: "long", year: "numeric" }).format(i)
    );
    return `${i.getDate()} – ${a.getDate()} ${l}`;
  }
  if (o) {
    const l = new Intl.DateTimeFormat(e, { day: "numeric", month: "short" }).format(i), d = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(a);
    return `${l} – ${d}`;
  }
  const r = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(i), s = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(a);
  return `${r} – ${s}`;
}
function ct(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(t);
  return I(i);
}
function Yt(t, e, i, a) {
  if (t.allDay) {
    const d = _(t.start), p = D(_(t.end), -1), c = new Intl.DateTimeFormat(e, {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    return p.getTime() > d.getTime() ? `${c.format(d)} – ${c.format(p)} (${a})` : `${c.format(d)} · ${a}`;
  }
  const n = te(t.start, t.end), o = new Intl.DateTimeFormat(e, {
    weekday: "short",
    day: "numeric",
    month: "short"
  }), r = M(t.start, e), s = M(t.end, e);
  if (n)
    return `${I(o.format(t.start))}, ${r} – ${s}`;
  const l = i === "es" ? "a" : "to";
  return `${I(o.format(t.start))} ${r} ${l} ${I(o.format(t.end))} ${s}`;
}
function I(t) {
  return t && t.charAt(0).toUpperCase() + t.slice(1);
}
function Gt(t, e, i) {
  if (t.allDay) {
    const u = _(e).getTime(), m = _(t.start).getTime(), b = _(t.end).getTime();
    if (u < m)
      return {
        progressPct: 0,
        label: i.allDay,
        isOngoing: !1,
        isPast: !1,
        isFuture: !0
      };
    if (u >= b)
      return {
        progressPct: 100,
        label: i.completed,
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
  const a = t.start.getTime(), n = t.end.getTime(), o = e.getTime(), r = Math.max(6e4, n - a);
  if (o < a) {
    const u = a - o, m = Math.floor(u / 36e5), b = Math.round(u % 36e5 / 6e4), v = m > 0 ? `${m} ${m === 1 ? i.hourRemaining : i.hoursRemaining}` : `${Math.max(1, b)} ${i.minutesRemaining}`;
    return {
      progressPct: 0,
      label: `${i.startsIn} ${v}`,
      isOngoing: !1,
      isPast: !1,
      isFuture: !0
    };
  }
  if (o >= n)
    return {
      progressPct: 100,
      label: i.completed,
      isOngoing: !1,
      isPast: !0,
      isFuture: !1
    };
  const s = o - a, l = Math.min(100, Math.max(0, s / r * 100)), d = n - o, p = Math.floor(d / 36e5), c = Math.round(d % 36e5 / 6e4);
  let g = "";
  return p >= 1 ? g = `${p} ${p === 1 ? i.hourRemaining : i.hoursRemaining}` : g = `${Math.max(1, c)} ${i.minutesRemaining}`, {
    progressPct: l,
    label: g,
    isOngoing: !0,
    isPast: !1,
    isFuture: !1
  };
}
function Vt(t, e) {
  const i = new Intl.DateTimeFormat(e, { weekday: "short" }).format(t).replace(/\.$/, ""), a = t.getDate(), n = new Intl.DateTimeFormat(e, { month: "short" }).format(t).replace(/\.$/, "");
  return {
    weekdayDay: `${i}. ${a}`,
    month: n
  };
}
const qt = 6e4, Ee = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map();
function Kt() {
  Ee.clear();
}
function we(t, e) {
  const i = Array.isArray(t.entities) && t.entities.length > 0 ? t.entities : t.entity ? [t.entity] : [], a = [];
  return i.forEach((n, o) => {
    var c, g, u, m, b, v;
    const r = typeof n == "string" ? { entity: n } : n, s = ((r == null ? void 0 : r.entity) || "").trim();
    if (!s) return;
    const l = (c = e == null ? void 0 : e.states) == null ? void 0 : c[s], d = typeof ((g = l == null ? void 0 : l.attributes) == null ? void 0 : g.friendly_name) == "string" ? l.attributes.friendly_name : void 0, p = typeof ((u = l == null ? void 0 : l.attributes) == null ? void 0 : u.icon) == "string" ? l.attributes.icon : void 0;
    a.push({
      entity: s,
      name: ((m = r.name) == null ? void 0 : m.trim()) || d || s,
      color: ((b = r.color) == null ? void 0 : b.trim()) || A[o % A.length],
      icon: ((v = r.icon) == null ? void 0 : v.trim()) || p || ke,
      hidden: !!r.hidden
    });
  }), a;
}
function Je(t) {
  if (!t)
    return { date: /* @__PURE__ */ new Date(), isDateOnly: !1 };
  if (typeof t == "string") {
    const e = /^\d{4}-\d{2}-\d{2}$/.test(t.trim());
    return {
      date: e ? Ze(t.trim()) : new Date(t),
      isDateOnly: e
    };
  }
  return t.date && !t.dateTime ? {
    date: Ze(t.date),
    isDateOnly: !0
  } : t.dateTime ? {
    date: new Date(t.dateTime),
    isDateOnly: !1
  } : { date: /* @__PURE__ */ new Date(), isDateOnly: !1 };
}
function Zt(t, e, i) {
  const a = Je(t.start), n = Je(t.end);
  if (Number.isNaN(a.date.getTime()))
    return null;
  const o = a.isDateOnly, r = a.date;
  let s = Number.isNaN(n.date.getTime()) ? new Date(r) : n.date;
  o && s.getTime() <= r.getTime() ? s = D(r, 1) : !o && s.getTime() < r.getTime() && (s = new Date(r));
  const l = t.uid || `${r.getTime()}-${i}`;
  return {
    id: `${e.entity}::${l}::${r.toISOString()}`,
    uid: t.uid || void 0,
    summary: (t.summary || "(Sin título)").trim(),
    description: (t.description || "").trim(),
    location: (t.location || "").trim(),
    start: r,
    end: s,
    allDay: o,
    calendarEntity: e.entity,
    calendarName: e.name,
    color: e.color,
    icon: e.icon
  };
}
async function Jt(t, e, i, a, n = !1) {
  const o = i.toISOString(), r = a.toISOString(), s = `${e.entity}|${e.name}|${e.color}|${e.icon}|${o}|${r}`;
  if (!n) {
    const p = Ee.get(s);
    if (p && Date.now() - p.timestamp < qt)
      return p.events;
    const c = _e.get(s);
    if (c)
      return c;
  }
  const l = `calendars/${encodeURIComponent(e.entity)}?start=${encodeURIComponent(
    o
  )}&end=${encodeURIComponent(r)}`, d = t.callApi("GET", l).then((p) => {
    const c = (Array.isArray(p) ? p : []).map((g, u) => Zt(g, e, u)).filter((g) => g !== null);
    return Ee.set(s, {
      timestamp: Date.now(),
      events: c
    }), c;
  }).finally(() => {
    _e.delete(s);
  });
  return _e.set(s, d), d;
}
async function Qt(t, e, i, a, n = !1) {
  if (!t || e.length === 0)
    return { events: [], failedEntities: [] };
  const o = await Promise.allSettled(
    e.map(
      (l) => Jt(t, l, i, a, n)
    )
  ), r = [], s = [];
  return o.forEach((l, d) => {
    l.status === "fulfilled" ? r.push(...l.value) : s.push(e[d].entity);
  }), r.sort((l, d) => l.start.getTime() - d.start.getTime()), { events: r, failedEntities: s };
}
var Xt = Object.defineProperty, ei = Object.getOwnPropertyDescriptor, F = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? ei(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = (a ? r(e, i, n) : r(n)) || n);
  return a && n && Xt(e, i, n), n;
};
let T = class extends P {
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
    var t, e, i, a, n, o, r;
    return h`
      <div class="header-root">
        <div class="header-top">
          <div class="title-group">
            ${this.cardTitle ? h`<div class="card-subtitle">${this.cardTitle}</div>` : f}
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
              title=${((o = this.strings) == null ? void 0 : o.refresh) || "Refresh"}
              aria-label=${((r = this.strings) == null ? void 0 : r.refresh) || "Refresh"}
              @click=${() => this._emit("cal-refresh")}
            >
              <ha-icon icon="mdi:refresh"></ha-icon>
            </button>
          </div>
        </div>

        ${this.showEntityToggles && this.entities.length > 0 ? h`
              <div class="entity-chips">
                ${this.entities.map((s) => {
      const l = this.hiddenEntities.has(s.entity);
      return h`
                    <button
                      type="button"
                      class="entity-chip ${l ? "is-hidden" : ""}"
                      style="--chip-color: ${s.color}; --chip-bg: ${W(
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
            ` : f}
      </div>
    `;
  }
};
T.styles = B`
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
F([
  $({ type: String })
], T.prototype, "cardTitle", 2);
F([
  $({ type: String })
], T.prototype, "periodLabel", 2);
F([
  $({ type: Array })
], T.prototype, "entities", 2);
F([
  $({ attribute: !1 })
], T.prototype, "hiddenEntities", 2);
F([
  $({ type: Boolean })
], T.prototype, "showEntityToggles", 2);
F([
  $({ type: Boolean })
], T.prototype, "loading", 2);
F([
  $({ attribute: !1 })
], T.prototype, "strings", 2);
T = F([
  Y("ha-calendar-shared-header")
], T);
var ti = Object.defineProperty, ii = Object.getOwnPropertyDescriptor, G = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? ii(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = (a ? r(e, i, n) : r(n)) || n);
  return a && n && ti(e, i, n), n;
};
let O = class extends P {
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
    var i, a, n, o, r, s, l;
    const e = Yt(
      t,
      this.locale,
      this.lang,
      ((i = this.strings) == null ? void 0 : i.allDay) || "All day"
    );
    return h`
      <div class="dialog-header" style="--ev-color: ${t.color};">
        <div class="header-badge-row">
          <span
            class="calendar-badge"
            style="background: ${W(t.color, 0.16)}; color: ${t.color};"
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

        ${t.location ? h`
              <div class="detail-row">
                <ha-icon icon="mdi:map-marker-outline"></ha-icon>
                <div>
                  <div class="detail-label">${((o = this.strings) == null ? void 0 : o.location) || "Location"}</div>
                  <div class="detail-value">${t.location}</div>
                </div>
              </div>
            ` : f}

        ${t.description ? h`
              <div class="detail-row">
                <ha-icon icon="mdi:text"></ha-icon>
                <div>
                  <div class="detail-label">
                    ${((r = this.strings) == null ? void 0 : r.description) || "Description"}
                  </div>
                  <div class="detail-value description-text">${t.description}</div>
                </div>
              </div>
            ` : f}
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
    if (!this.dayDate) return f;
    const t = ct(this.dayDate, this.locale);
    return h`
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
        ${this.dayEvents.length === 0 ? h`<div class="empty-day">${((a = this.strings) == null ? void 0 : a.noEvents) || "No events"}</div>` : this.dayEvents.map((n) => {
      var r;
      const o = n.allDay ? ((r = this.strings) == null ? void 0 : r.allDay) || "All day" : `${M(n.start, this.locale)} – ${M(
        n.end,
        this.locale
      )}`;
      return h`
                <button
                  type="button"
                  class="day-event-row"
                  style="--ev-color: ${n.color}; --ev-bg: ${W(
        n.color,
        0.12
      )};"
                  @click=${() => this._selectEventFromList(n)}
                >
                  <ha-icon class="row-icon" .icon=${n.icon}></ha-icon>
                  <div class="row-main">
                    <div class="row-title">${n.summary}</div>
                    <div class="row-sub">
                      <span>${o}</span>
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
    return !(this.event || this.dayDate) ? f : h`
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
O.styles = B`
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
G([
  $({ attribute: !1 })
], O.prototype, "event", 2);
G([
  $({ attribute: !1 })
], O.prototype, "dayDate", 2);
G([
  $({ type: Array })
], O.prototype, "dayEvents", 2);
G([
  $({ type: String })
], O.prototype, "locale", 2);
G([
  $({ type: String })
], O.prototype, "lang", 2);
G([
  $({ attribute: !1 })
], O.prototype, "strings", 2);
O = G([
  Y("ha-calendar-event-dialog")
], O);
var ai = Object.defineProperty, z = (t, e, i, a) => {
  for (var n = void 0, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = r(e, i, n) || n);
  return n && ai(e, i, n), n;
};
function Pe(t) {
  const e = Object.keys((t == null ? void 0 : t.states) || {}).filter((i) => i.startsWith("calendar.")).slice(0, 3);
  return e.length > 0 ? e.map((i, a) => {
    var s, l, d;
    const n = (s = t == null ? void 0 : t.states) == null ? void 0 : s[i], o = typeof ((l = n == null ? void 0 : n.attributes) == null ? void 0 : l.friendly_name) == "string" ? n.attributes.friendly_name : void 0, r = typeof ((d = n == null ? void 0 : n.attributes) == null ? void 0 : d.icon) == "string" ? n.attributes.icon : "mdi:calendar";
    return {
      entity: i,
      name: o,
      color: A[a % A.length],
      icon: r
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
const ze = class ze extends P {
  constructor() {
    super(...arguments), this._anchorDate = _(/* @__PURE__ */ new Date()), this._events = [], this._loading = !1, this._failedEntities = [], this._hiddenEntities = /* @__PURE__ */ new Set(), this._selectedEvent = null, this._selectedDayDate = null, this._lastFetchKey = "", this._fetchRequestId = 0;
  }
  static getConfigElement() {
    return document.createElement(et);
  }
  setConfig(e) {
    if (!e)
      throw new Error("Invalid configuration");
    this._config = {
      show_header: !0,
      show_entity_toggles: !0,
      first_day_of_week: 1,
      ...e
    };
    const i = we(this._config, this.hass);
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
  _triggerFetchIfNeeded(e) {
    if (!this.hass || !this._config) return;
    const i = we(this._config, this.hass);
    if (i.length === 0) {
      this._events = [], this._failedEntities = [], this._lastFetchKey = "";
      return;
    }
    const { start: a, end: n } = this.getFetchRange(), r = `${i.map((s) => `${s.entity}|${s.name}|${s.color}|${s.icon}`).join(";")}::${a.toISOString()}::${n.toISOString()}`;
    !e && r === this._lastFetchKey || (this._lastFetchKey = r, this._loadEvents(i, a, n, e));
  }
  async _loadEvents(e, i, a, n) {
    if (!this.hass) return;
    const o = ++this._fetchRequestId;
    this._loading = !0;
    try {
      const r = await Qt(
        this.hass,
        e,
        i,
        a,
        n
      );
      if (o !== this._fetchRequestId) return;
      this._events = r.events, this._failedEntities = r.failedEntities;
    } catch {
      if (o !== this._fetchRequestId) return;
      this._failedEntities = e.map((r) => r.entity);
    } finally {
      o === this._fetchRequestId && (this._loading = !1);
    }
  }
  _handleRefresh() {
    Kt(), this._triggerFetchIfNeeded(!0);
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
    return e.filter((o) => {
      const r = o.start.getTime(), s = o.end.getTime();
      return s <= r ? r >= a.getTime() && r < n.getTime() : r < n.getTime() && s > a.getTime();
    });
  }
  render() {
    if (!this._config) return f;
    const e = it(this._config.language, this.hass), i = gt(e, this.hass), a = tt[e], n = we(this._config, this.hass), o = this._events.filter(
      (u) => !this._hiddenEntities.has(u.calendarEntity)
    ), r = this._config.show_header !== !1, s = this._config.show_entity_toggles !== !1, l = !!this._config.transparent, d = typeof this._config.background_opacity == "number" && !Number.isNaN(this._config.background_opacity), p = d ? Math.max(0, Math.min(100, this._config.background_opacity)) : l ? 0 : 100, c = d && p < 100 && !l, g = l ? "background: transparent !important; border-color: transparent !important; box-shadow: none !important;" : c ? `--cal-card-bg: rgba(var(--rgb-card-background-color, 32, 33, 36), ${p / 100});` : "";
    return h`
      <ha-card
        class="${l ? "is-transparent" : ""} ${c ? "has-opacity" : ""}"
        style="${g}"
      >
        <div class="loading-bar ${this._loading ? "active" : ""}"></div>

        ${r ? h`
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
            ` : f}

        ${this._failedEntities.length > 0 ? h`
              <div class="status-banner" role="status">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                <span>
                  ${a.errorLoading}: ${this._failedEntities.join(", ")}
                </span>
              </div>
            ` : f}

        ${n.length === 0 ? h`
              <div class="empty-state">
                <ha-icon icon="mdi:calendar-blank-multiple"></ha-icon>
                <div class="empty-state-title">${a.noCalendars}</div>
                <div class="empty-state-hint">${a.noCalendarsHint}</div>
              </div>
            ` : h`
              <div
                class="card-content-wrap"
                @cal-event-click=${this._handleEventClick}
              >
                ${this.renderCalendarBody(
      o,
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
        .dayEvents=${this._getDayDialogEvents(o)}
        .locale=${i}
        .lang=${e}
        .strings=${a}
        @cal-dialog-close=${this._handleDialogClose}
        @cal-select-event=${this._handleSelectEventFromDay}
      ></ha-calendar-event-dialog>
    `;
  }
};
ze.styles = [Te];
let w = ze;
z([
  $({ attribute: !1 })
], w.prototype, "hass");
z([
  C()
], w.prototype, "_config");
z([
  C()
], w.prototype, "_anchorDate");
z([
  C()
], w.prototype, "_events");
z([
  C()
], w.prototype, "_loading");
z([
  C()
], w.prototype, "_failedEntities");
z([
  C()
], w.prototype, "_hiddenEntities");
z([
  C()
], w.prototype, "_selectedEvent");
z([
  C()
], w.prototype, "_selectedDayDate");
var ni = Object.getOwnPropertyDescriptor, oi = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? ni(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = r(n) || n);
  return n;
};
let De = class extends w {
  static getStubConfig(t) {
    return {
      type: `custom:${me}`,
      entities: Pe(t),
      first_day_of_week: 1,
      max_events_per_day: 3,
      show_header: !0,
      show_entity_toggles: !0,
      show_week_numbers: !1,
      compact: !1
    };
  }
  getCardSize() {
    return 7;
  }
  getGridOptions() {
    return {
      columns: 12,
      min_columns: 6,
      rows: 7,
      min_rows: 5
    };
  }
  getFetchRange() {
    const t = this._getGridDays();
    return {
      start: t[0].date,
      end: ye(t[t.length - 1].date)
    };
  }
  getPeriodLabel(t) {
    return Wt(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = Ke(this._anchorDate, -1);
  }
  navigateNext() {
    this._anchorDate = Ke(this._anchorDate, 1);
  }
  navigateToday() {
    const t = /* @__PURE__ */ new Date();
    this._anchorDate = new Date(t.getFullYear(), t.getMonth(), 1, 0, 0, 0, 0);
  }
  _getGridDays() {
    return Ht(
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
    const o = !!this._config.show_week_numbers, r = !!this._config.compact, s = Math.max(1, this._config.max_events_per_day ?? 3), l = Rt(this.getFirstDayOfWeek(), i), d = this._getGridDays(), p = [];
    for (let c = 0; c < d.length; c += 7)
      p.push(d.slice(c, c + 7));
    return h`
      <div class="month-grid-wrap ${r ? "is-compact" : ""}">
        <!-- Weekday Headers -->
        <div
          class="weekday-row ${o ? "with-weeks" : ""}"
          role="row"
        >
          ${o ? h`<div class="week-col-header">${n.weekAbbr}</div>` : f}
          ${l.map(
      (c) => h`<div class="weekday-cell">${c}</div>`
    )}
        </div>

        <!-- Month Grid Weeks -->
        <div class="weeks-container">
          ${p.map(
      (c) => h`
              <div class="week-row ${o ? "with-weeks" : ""}">
                ${o ? h`<div class="week-number-cell">${c[0].weekNumber}</div>` : f}
                ${c.map((g) => {
        const u = ue(t, g.date), m = u.slice(0, s), b = u.length - m.length;
        return h`
                    <div
                      class="day-cell ${g.isCurrentMonth ? "" : "outside-month"} ${g.isToday ? "is-today" : ""}"
                      @click=${() => {
          u.length > 0 && this._openDayList(g.date);
        }}
                    >
                      <div class="day-cell-top">
                        <span class="day-num ${g.isToday ? "today-circle" : ""}">
                          ${g.date.getDate()}
                        </span>
                      </div>

                      <div class="day-events">
                        ${m.map(
          (v) => v.allDay ? h`
                                <button
                                  type="button"
                                  class="event-pill all-day"
                                  style="--ev-color: ${v.color};"
                                  title=${`${v.calendarName}: ${v.summary}`}
                                  @click=${(y) => this._onEventPillClick(y, v)}
                                >
                                  <ha-icon class="pill-icon" .icon=${v.icon}></ha-icon>
                                  <span class="pill-text">${v.summary}</span>
                                </button>
                              ` : h`
                                <button
                                  type="button"
                                  class="event-pill timed"
                                  style="--ev-color: ${v.color}; --ev-bg: ${W(
            v.color,
            0.14
          )};"
                                  title=${`${M(v.start, i)} ${v.summary} (${v.calendarName})`}
                                  @click=${(y) => this._onEventPillClick(y, v)}
                                >
                                  <span class="pill-dot"></span>
                                  <span class="pill-time">
                                    ${M(v.start, i)}
                                  </span>
                                  <span class="pill-text">${v.summary}</span>
                                </button>
                              `
        )}

                        ${b > 0 ? h`
                              <button
                                type="button"
                                class="more-btn"
                                @click=${(v) => {
          v.stopPropagation(), this._openDayList(g.date);
        }}
                              >
                                +${b} ${n.moreEvents}
                              </button>
                            ` : f}
                      </div>
                    </div>
                  `;
      })}
              </div>
            `
    )}
        </div>
      </div>
    `;
  }
};
De.styles = [
  Te,
  B`
      .month-grid-wrap {
        border: 1px solid var(--cal-border-color);
        border-radius: 10px;
        overflow: hidden;
        background: var(--cal-surface);
      }

      .weekday-row,
      .week-row {
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
      }

      .weekday-row.with-weeks,
      .week-row.with-weeks {
        grid-template-columns: 34px repeat(7, minmax(0, 1fr));
      }

      .weekday-row {
        background: var(--cal-surface-alt);
        border-bottom: 1px solid var(--cal-border-color);
      }

      .week-col-header,
      .weekday-cell {
        padding: 8px 4px;
        text-align: center;
        font-size: 0.74rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        color: var(--cal-text-secondary);
      }

      .week-row {
        border-bottom: 1px solid var(--cal-border-color);
      }

      .week-row:last-child {
        border-bottom: none;
      }

      .week-number-cell {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 8px;
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--cal-text-secondary);
        background: var(--cal-surface-alt);
        border-right: 1px solid var(--cal-border-color);
      }

      .day-cell {
        min-height: 98px;
        padding: 4px;
        border-right: 1px solid var(--cal-border-color);
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-width: 0;
        cursor: default;
        transition: background-color 0.12s ease;
      }

      .month-grid-wrap.is-compact .day-cell {
        min-height: 70px;
        padding: 3px;
      }

      .day-cell:last-child {
        border-right: none;
      }

      .day-cell:hover {
        background: var(--cal-surface-alt);
      }

      .day-cell.outside-month {
        opacity: 0.52;
      }

      .day-cell.is-today {
        background: rgba(26, 115, 232, 0.05);
      }

      .day-cell-top {
        display: flex;
        justify-content: flex-end;
        padding: 1px 2px;
      }

      .day-num {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
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
        padding: 2px 5px;
        border-radius: 4px;
        font-family: inherit;
        font-size: 0.73rem;
        line-height: 1.3;
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
        --mdc-icon-size: 12px;
        flex-shrink: 0;
      }

      .pill-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--ev-color);
        flex-shrink: 0;
      }

      .pill-time {
        font-size: 0.68rem;
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
        font-size: 0.71rem;
        font-weight: 600;
        text-align: left;
        padding: 1px 4px;
        cursor: pointer;
        border-radius: 4px;
      }

      .more-btn:hover {
        background: var(--cal-surface-alt);
      }

      @media (max-width: 560px) {
        .day-cell {
          min-height: 76px;
          padding: 2px;
        }

        .pill-time {
          display: none;
        }

        .event-pill {
          padding: 2px 3px;
          font-size: 0.68rem;
        }
      }
    `
];
De = oi([
  Y(me)
], De);
var ri = Object.defineProperty, si = Object.getOwnPropertyDescriptor, S = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? si(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = (a ? r(e, i, n) : r(n)) || n);
  return a && n && ri(e, i, n), n;
};
let k = class extends P {
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
    const e = te(t, this._now), i = I(
      new Intl.DateTimeFormat(this.locale, { weekday: "short" }).format(t).replace(/\.$/, "")
    ), a = t.getDate();
    return h`
      <div class="day-header-cell ${e ? "is-today" : ""}">
        <span class="day-weekday">${i}</span>
        <span class="day-number ${e ? "today-badge" : ""}">${a}</span>
      </div>
    `;
  }
  render() {
    var g;
    const t = this._safeStartHour, e = this._safeEndHour, i = this._hourHeight, a = [];
    for (let u = t; u < e; u++)
      a.push(u);
    const n = a.length * i, o = Math.max(1, this.days.length), r = o > 1 ? "82px" : "0px", s = this.days.map((u) => ue(this.events, u)), l = s.some((u) => u.some((m) => m.allDay)), d = this._now.getHours() * 60 + this._now.getMinutes(), p = d >= t * 60 && d <= e * 60, c = p ? (d - t * 60) / ((e - t) * 60) * 100 : 0;
    return h`
      <div
        class="grid-scroll"
        style="--day-count: ${o}; --col-min-width: ${r}; --hour-height: ${i}px;"
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

            ${l ? h`
                  <div class="all-day-row ${this.compactAllDay ? "compact" : ""}">
                    <div class="gutter-all-day">
                      <span>${((g = this.strings) == null ? void 0 : g.allDay) || "All day"}</span>
                    </div>
                    <div class="day-columns-grid all-day-columns">
                      ${s.map((u, m) => {
      const b = u.filter((y) => y.allDay), v = te(this.days[m], this._now);
      return h`
                          <div class="all-day-cell ${v ? "is-today-col" : ""}">
                            ${b.map(
        (y) => h`
                                <button
                                  type="button"
                                  class="all-day-pill"
                                  style="--ev-color: ${y.color};"
                                  title=${`${y.calendarName}: ${y.summary}`}
                                  @click=${() => this._onEventClick(y)}
                                >
                                  <ha-icon class="ev-icon" .icon=${y.icon}></ha-icon>
                                  <span class="ev-summary">${y.summary}</span>
                                </button>
                              `
      )}
                          </div>
                        `;
    })}
                    </div>
                  </div>
                ` : f}
          </div>

          <!-- Hourly schedule body -->
          <div class="time-body" style="height: ${n}px;">
            <div class="time-gutter">
              ${a.map(
      (u) => h`
                  <div class="hour-label" style="height: ${i}px;">
                    <span>${jt(u, this.locale)}</span>
                  </div>
                `
    )}
            </div>

            <div class="day-columns-grid time-columns">
              <!-- Background hour lines -->
              <div class="hour-lines" aria-hidden="true">
                ${a.map(
      () => h`
                    <div class="hour-line" style="height: ${i}px;">
                      <div class="half-hour-line"></div>
                    </div>
                  `
    )}
              </div>

              ${this.days.map((u, m) => {
      const b = te(u, this._now), v = Ut(
        s[m],
        u,
        t,
        e
      );
      return h`
                  <div class="day-col ${b ? "is-today-col" : ""}">
                    ${v.map((y) => {
        const x = y.event, E = W(x.color, 0.16), V = W(x.color, 0.26), q = `${M(
          x.start,
          this.locale
        )} – ${M(x.end, this.locale)}`;
        return h`
                        <button
                          type="button"
                          class="timed-event"
                          style="
                            top: ${y.top}%;
                            height: ${y.height}%;
                            left: calc(${y.left}% + 2px);
                            width: calc(${y.width}% - 4px);
                            --ev-color: ${x.color};
                            --ev-bg: ${E};
                            --ev-bg-hover: ${V};
                          "
                          title=${`${x.summary} (${q}) · ${x.calendarName}`}
                          @click=${() => this._onEventClick(x)}
                        >
                          <div class="timed-ev-header">
                            <ha-icon class="ev-icon" .icon=${x.icon}></ha-icon>
                            <span class="timed-ev-title">${x.summary}</span>
                          </div>
                          <div class="timed-ev-time">${q}</div>
                          ${this.detailedMode && x.location ? h`
                                <div class="timed-ev-meta">
                                  <ha-icon icon="mdi:map-marker-outline"></ha-icon>
                                  <span>${x.location}</span>
                                </div>
                              ` : f}
                          ${this.detailedMode && x.description ? h`<div class="timed-ev-desc">${x.description}</div>` : f}
                        </button>
                      `;
      })}
                    ${b && p ? h`
                          <div
                            class="now-indicator"
                            style="top: ${c}%;"
                            aria-hidden="true"
                          >
                            <span class="now-dot"></span>
                            <span class="now-line"></span>
                          </div>
                        ` : f}
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
k.styles = B`
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
S([
  $({ type: Array })
], k.prototype, "days", 2);
S([
  $({ type: Array })
], k.prototype, "events", 2);
S([
  $({ type: Number })
], k.prototype, "startHour", 2);
S([
  $({ type: Number })
], k.prototype, "endHour", 2);
S([
  $({ type: String })
], k.prototype, "locale", 2);
S([
  $({ type: String })
], k.prototype, "lang", 2);
S([
  $({ attribute: !1 })
], k.prototype, "strings", 2);
S([
  $({ type: Boolean })
], k.prototype, "detailedMode", 2);
S([
  $({ type: Boolean })
], k.prototype, "compactAllDay", 2);
S([
  C()
], k.prototype, "_now", 2);
k = S([
  Y("ha-calendar-time-grid")
], k);
var li = Object.getOwnPropertyDescriptor, ci = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? li(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = r(n) || n);
  return n;
};
let Qe = class extends w {
  static getStubConfig(t) {
    return {
      type: `custom:${re}`,
      entities: Pe(t),
      first_day_of_week: 1,
      start_hour: 0,
      end_hour: 24,
      days_to_show: 7,
      show_header: !0,
      show_entity_toggles: !0,
      compact_all_day: !1
    };
  }
  getCardSize() {
    return 8;
  }
  getGridOptions() {
    return {
      columns: 12,
      min_columns: 6,
      rows: 8,
      min_rows: 6
    };
  }
  _getDaysCount() {
    var e;
    const t = (e = this._config) == null ? void 0 : e.days_to_show;
    return typeof t == "number" && !Number.isNaN(t) ? Math.max(1, Math.min(14, Math.floor(t))) : 7;
  }
  _getVisibleDays() {
    return Ft(
      this._anchorDate,
      this.getFirstDayOfWeek(),
      this._getDaysCount()
    );
  }
  getFetchRange() {
    const t = this._getVisibleDays();
    return {
      start: t[0],
      end: ye(t[t.length - 1])
    };
  }
  getPeriodLabel(t) {
    return Bt(this._getVisibleDays(), t);
  }
  navigatePrev() {
    this._anchorDate = D(this._anchorDate, -this._getDaysCount());
  }
  navigateNext() {
    this._anchorDate = D(this._anchorDate, this._getDaysCount());
  }
  navigateToday() {
    this._anchorDate = _(/* @__PURE__ */ new Date());
  }
  renderCalendarBody(t, e, i, a, n) {
    const o = this._getVisibleDays(), r = this._config.start_hour ?? 0, s = this._config.end_hour ?? 24, l = !!this._config.compact_all_day;
    return h`
      <ha-calendar-time-grid
        .days=${o}
        .events=${t}
        .startHour=${r}
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
Qe = ci([
  Y(re)
], Qe);
var di = Object.defineProperty, hi = Object.getOwnPropertyDescriptor, dt = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? hi(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = (a ? r(e, i, n) : r(n)) || n);
  return a && n && di(e, i, n), n;
};
let ge = class extends w {
  constructor() {
    super(...arguments), this._currentNow = /* @__PURE__ */ new Date();
  }
  connectedCallback() {
    super.connectedCallback(), this._currentNow = /* @__PURE__ */ new Date(), this._tickerId = window.setInterval(() => {
      this._currentNow = /* @__PURE__ */ new Date();
    }, 3e4);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._tickerId !== void 0 && (window.clearInterval(this._tickerId), this._tickerId = void 0);
  }
  static getStubConfig(t) {
    return {
      type: `custom:${se}`,
      entities: Pe(t),
      layout: "compact",
      show_week_number: !0,
      show_progress_bar: !0,
      show_header: !1,
      transparent: !1
    };
  }
  getCardSize() {
    return this._isCompact ? 3 : 7;
  }
  getGridOptions() {
    return {
      columns: 6,
      min_columns: 3,
      rows: this._isCompact ? 3 : 7,
      min_rows: 2
    };
  }
  get _isCompact() {
    var t;
    return ((t = this._config) == null ? void 0 : t.layout) !== "grid";
  }
  getFetchRange() {
    return {
      start: _(this._anchorDate),
      end: ye(this._anchorDate)
    };
  }
  getPeriodLabel(t) {
    return ct(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = D(this._anchorDate, -1);
  }
  navigateNext() {
    this._anchorDate = D(this._anchorDate, 1);
  }
  navigateToday() {
    this._anchorDate = _(/* @__PURE__ */ new Date());
  }
  _onEventClick(t, e) {
    t.stopPropagation(), this._selectedEvent = e;
  }
  _renderCompactWidget(t, e, i) {
    const a = this._config.show_week_number !== !1, n = this._config.show_progress_bar !== !1, o = lt(this._anchorDate), r = Vt(this._anchorDate, e);
    return h`
      <div class="compact-widget">
        <!-- Top Row: Week Badge & Embedded Navigation -->
        <div class="widget-top-bar">
          ${a ? h`
                <span class="week-pill-badge">
                  ${i.weekLabel} ${o}
                </span>
              ` : h`<span></span>`}

          <div class="widget-nav">
            <button
              type="button"
              class="widget-nav-btn"
              title=${i.prev}
              aria-label=${i.prev}
              @click=${() => this.navigatePrev()}
            >
              <ha-icon icon="mdi:chevron-left"></ha-icon>
            </button>
            <button
              type="button"
              class="widget-today-btn"
              title=${i.today}
              @click=${() => this.navigateToday()}
            >
              ${i.today}
            </button>
            <button
              type="button"
              class="widget-nav-btn"
              title=${i.next}
              aria-label=${i.next}
              @click=${() => this.navigateNext()}
            >
              <ha-icon icon="mdi:chevron-right"></ha-icon>
            </button>
          </div>
        </div>

        <!-- Main Content Area: Date Column + Events List -->
        <div class="widget-main">
          <div class="date-col">
            <span class="date-day">${r.weekdayDay}</span>
            <span class="date-month">${r.month}</span>
          </div>

          <div class="events-col">
            ${t.length === 0 ? h`
                  <div class="empty-event-row">
                    <ha-icon icon="mdi:calendar-check-outline"></ha-icon>
                    <span>${i.noEvents}</span>
                  </div>
                ` : t.map((s) => {
      const l = Gt(
        s,
        this._currentNow,
        i
      ), d = s.allDay ? i.allDay : `${M(s.start, e)} - ${M(
        s.end,
        e
      )}`;
      return h`
                    <div
                      class="event-row-card"
                      style="--ev-accent-color: ${s.color};"
                      @click=${(p) => this._onEventClick(p, s)}
                    >
                      <div class="event-row-top">
                        <div class="event-title-group">
                          <ha-icon
                            class="event-icon"
                            .icon=${s.icon}
                            style="color: ${s.color};"
                          ></ha-icon>
                          <span class="event-title">${s.summary}</span>
                        </div>
                        <span class="event-time-range">${d}</span>
                      </div>

                      <div class="event-progress-wrap">
                        <span class="event-time-remaining">${l.label}</span>
                        ${n ? h`
                              <div
                                class="progress-track"
                                role="progressbar"
                                aria-valuenow=${Math.round(l.progressPct)}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div
                                  class="progress-fill ${l.isOngoing ? "is-active" : ""}"
                                  style="width: ${l.progressPct}%; background-color: ${s.color || "#ffffff"};"
                                ></div>
                              </div>
                            ` : f}
                      </div>
                    </div>
                  `;
    })}
          </div>
        </div>
      </div>
    `;
  }
  _renderDetailedGrid(t, e, i, a, n) {
    const o = this._config.start_hour ?? 0, r = this._config.end_hour ?? 24, s = this._config.show_agenda_summary !== !1, l = ue(t, this._anchorDate), d = l.filter((c) => c.allDay).length, p = l.length - d;
    return h`
      ${s ? h`
            <div class="day-summary-bar">
              <div class="summary-totals">
                <span class="summary-pill">
                  <ha-icon icon="mdi:calendar-check-outline"></ha-icon>
                  <span>${l.length} ${n.eventsCount}</span>
                </span>
                ${l.length === 0 ? h`<span class="summary-empty">${n.noEvents}</span>` : h`
                      ${d > 0 ? h`<span class="summary-sub">${d} ${n.allDayEvents}</span>` : f}
                      ${p > 0 ? h`<span class="summary-sub">${p} ${n.timedEvents}</span>` : f}
                    `}
              </div>

              <div class="summary-calendars">
                ${e.filter((c) => !this._hiddenEntities.has(c.entity)).map((c) => {
      const g = l.filter(
        (u) => u.calendarEntity === c.entity
      ).length;
      return g === 0 ? f : h`
                      <span
                        class="cal-count-badge"
                        style="background: ${W(
        c.color,
        0.14
      )}; color: ${c.color};"
                      >
                        <ha-icon .icon=${c.icon}></ha-icon>
                        <span>${c.name}: ${g}</span>
                      </span>
                    `;
    })}
              </div>
            </div>
          ` : f}

      <ha-calendar-time-grid
        .days=${[this._anchorDate]}
        .events=${t}
        .startHour=${o}
        .endHour=${r}
        .locale=${i}
        .lang=${a}
        .strings=${n}
        .detailedMode=${!0}
      ></ha-calendar-time-grid>
    `;
  }
  renderCalendarBody(t, e, i, a, n) {
    if (this._isCompact) {
      const o = ue(t, this._anchorDate);
      return this._renderCompactWidget(o, i, n);
    }
    return this._renderDetailedGrid(t, e, i, a, n);
  }
};
ge.styles = [
  Te,
  B`
      /* Compact Widget Styles */
      .compact-widget {
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 4px 2px 2px;
      }

      .widget-top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }

      .week-pill-badge {
        display: inline-flex;
        align-items: center;
        padding: 3px 10px;
        border-radius: 6px;
        border: 1.5px solid var(--divider-color, rgba(255, 255, 255, 0.35));
        font-size: 0.84rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        color: var(--primary-text-color, #ffffff);
        background: rgba(127, 127, 127, 0.08);
      }

      .widget-nav {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .widget-nav-btn,
      .widget-today-btn {
        appearance: none;
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25));
        background: transparent;
        color: var(--primary-text-color, #ffffff);
        border-radius: 6px;
        height: 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-family: inherit;
        transition: background-color 0.15s ease;
      }

      .widget-nav-btn {
        width: 28px;
        padding: 0;
        --mdc-icon-size: 18px;
      }

      .widget-today-btn {
        padding: 0 10px;
        font-size: 0.76rem;
        font-weight: 600;
      }

      .widget-nav-btn:hover,
      .widget-today-btn:hover {
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.15));
      }

      .widget-main {
        display: flex;
        align-items: flex-start;
        gap: 16px;
      }

      .date-col {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-width: 68px;
        flex-shrink: 0;
        padding-top: 2px;
      }

      .date-day {
        font-size: 1.15rem;
        font-weight: 600;
        line-height: 1.25;
        color: var(--primary-text-color, #ffffff);
      }

      .date-month {
        font-size: 0.98rem;
        font-weight: 500;
        line-height: 1.25;
        color: var(--secondary-text-color, rgba(255, 255, 255, 0.75));
      }

      .events-col {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .empty-event-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 0;
        color: var(--secondary-text-color, rgba(255, 255, 255, 0.6));
        font-size: 0.9rem;
        --mdc-icon-size: 20px;
      }

      .event-row-card {
        display: flex;
        flex-direction: column;
        gap: 4px;
        cursor: pointer;
        padding: 4px 6px;
        border-radius: 8px;
        transition: background-color 0.15s ease;
      }

      .event-row-card:hover {
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.1));
      }

      .event-row-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
      }

      .event-title-group {
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
      }

      .event-icon {
        --mdc-icon-size: 18px;
        flex-shrink: 0;
      }

      .event-title {
        font-size: 1.12rem;
        font-weight: 600;
        line-height: 1.3;
        color: var(--primary-text-color, #ffffff);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .event-time-range {
        font-size: 1.05rem;
        font-weight: 500;
        color: var(--primary-text-color, #ffffff);
        white-space: nowrap;
        flex-shrink: 0;
      }

      .event-progress-wrap {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-top: 1px;
      }

      .event-time-remaining {
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--secondary-text-color, rgba(255, 255, 255, 0.75));
        line-height: 1.25;
      }

      .progress-track {
        width: 100%;
        height: 3.5px;
        background: var(--divider-color, rgba(255, 255, 255, 0.22));
        border-radius: 999px;
        overflow: hidden;
        position: relative;
      }

      .progress-fill {
        height: 100%;
        border-radius: 999px;
        transition: width 0.3s ease;
      }

      .progress-fill.is-active {
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
      }

      /* Detailed Grid Styles */
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

      @media (max-width: 480px) {
        .widget-main {
          gap: 10px;
        }

        .date-col {
          min-width: 56px;
        }

        .date-day {
          font-size: 1rem;
        }

        .date-month {
          font-size: 0.88rem;
        }

        .event-title {
          font-size: 1rem;
        }

        .event-time-range {
          font-size: 0.92rem;
        }

        .event-time-remaining {
          font-size: 0.85rem;
        }
      }
    `
];
dt([
  C()
], ge.prototype, "_currentNow", 2);
ge = dt([
  Y(se)
], ge);
var pi = Object.defineProperty, ui = Object.getOwnPropertyDescriptor, Oe = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? ui(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = (a ? r(e, i, n) : r(n)) || n);
  return a && n && pi(e, i, n), n;
};
let oe = class extends P {
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
    var o;
    const t = this._getEntities(), e = new Set(t.map((r) => r.entity)), i = Object.keys(((o = this.hass) == null ? void 0 : o.states) || {}).filter((r) => r.startsWith("calendar.")).sort(), a = i.find((r) => !e.has(r)) || i[0] || "", n = A[t.length % A.length];
    t.push({
      entity: a,
      color: n,
      icon: ke
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
    return t.includes(re) || t.includes("week") ? "week" : t.includes(se) || t.includes("day") ? "day" : "month";
  }
  _normalizeHexForColorInput(t, e = 0) {
    const i = (t || "").trim();
    return /^#[0-9a-f]{6}$/i.test(i) ? i : A[e % A.length];
  }
  _renderEntitySelector(t, e) {
    var n;
    if (!!customElements.get("ha-entity-picker"))
      return h`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${t.entity || ""}
          .includeDomains=${["calendar"]}
          allow-custom-entity
          @value-changed=${(o) => this._updateEntityAt(e, { entity: o.detail.value })}
        ></ha-entity-picker>
      `;
    const a = Object.keys(((n = this.hass) == null ? void 0 : n.states) || {}).filter((o) => o.startsWith("calendar.")).sort();
    return h`
      <div class="entity-fallback-inputs">
        ${a.length > 0 ? h`
              <select
                .value=${a.includes(t.entity) ? t.entity : ""}
                @change=${(o) => {
      const r = o.target.value;
      r && this._updateEntityAt(e, { entity: r });
    }}
              >
                <option value="">-- calendar.* --</option>
                ${a.map((o) => {
      var s, l, d, p;
      const r = (p = (d = (l = (s = this.hass) == null ? void 0 : s.states) == null ? void 0 : l[o]) == null ? void 0 : d.attributes) == null ? void 0 : p.friendly_name;
      return h`
                    <option value=${o} ?selected=${t.entity === o}>
                      ${r ? `${r} (${o})` : o}
                    </option>
                  `;
    })}
              </select>
            ` : f}
        <input
          type="text"
          .value=${t.entity || ""}
          placeholder="calendar.personal"
          @change=${(o) => this._updateEntityAt(e, {
      entity: o.target.value.trim()
    })}
        />
      </div>
    `;
  }
  _renderIconInput(t, e) {
    return customElements.get("ha-icon-picker") ? h`
        <ha-icon-picker
          .hass=${this.hass}
          .value=${t.icon || ""}
          @value-changed=${(a) => this._updateEntityAt(e, { icon: a.detail.value })}
        ></ha-icon-picker>
      ` : h`
      <div class="icon-preview-input">
        <ha-icon .icon=${t.icon || ke}></ha-icon>
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
    if (!this._config) return f;
    const t = it(this._config.language, this.hass), e = tt[t], i = this._getCardKind(), a = this._getEntities(), n = this._config.first_day_of_week ?? 1;
    return h`
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
              @change=${(o) => this._updateField("title", o.target.value)}
            />
          </div>

          <div class="two-col">
            <div class="field">
              <label>${e.editorFirstDay}</label>
              <select
                .value=${String(n)}
                @change=${(o) => this._updateField(
      "first_day_of_week",
      Number(o.target.value)
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
                @change=${(o) => this._updateField(
      "language",
      o.target.value || void 0
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
            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${this._config.show_header !== !1}
                @change=${(o) => this._updateField(
      "show_header",
      o.target.checked
    )}
              />
              <span>${e.editorShowHeader}</span>
            </label>

            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${this._config.show_entity_toggles !== !1}
                @change=${(o) => this._updateField(
      "show_entity_toggles",
      o.target.checked
    )}
              />
              <span>${e.editorShowToggles}</span>
            </label>
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
                @change=${(o) => this._updateField(
      "transparent",
      o.target.checked
    )}
              />
              <span>${e.editorTransparent}</span>
            </label>
          </div>

          <div class="field">
            <label>${e.editorBackgroundOpacity}</label>
            <input
              type="number"
              min="0"
              max="100"
              .value=${String(
      typeof this._config.background_opacity == "number" ? this._config.background_opacity : this._config.transparent ? 0 : 100
    )}
              @change=${(o) => this._updateField(
      "background_opacity",
      Math.max(0, Math.min(100, Number(o.target.value) || 0))
    )}
            />
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

          ${a.length === 0 ? h`<div class="empty-entities">${e.editorNoEntities}</div>` : h`
                <div class="entities-list">
                  ${a.map((o, r) => {
      const s = this._normalizeHexForColorInput(
        o.color,
        r
      );
      return h`
                      <div class="entity-card">
                        <div class="entity-card-top">
                          <span
                            class="entity-badge"
                            style="--badge-color: ${s};"
                          >
                            #${r + 1}
                          </span>
                          <div class="entity-actions">
                            <button
                              type="button"
                              class="mini-icon-btn"
                              ?disabled=${r === 0}
                              @click=${() => this._moveEntity(r, -1)}
                            >
                              <ha-icon icon="mdi:arrow-up"></ha-icon>
                            </button>
                            <button
                              type="button"
                              class="mini-icon-btn"
                              ?disabled=${r === a.length - 1}
                              @click=${() => this._moveEntity(r, 1)}
                            >
                              <ha-icon icon="mdi:arrow-down"></ha-icon>
                            </button>
                            <button
                              type="button"
                              class="mini-icon-btn danger"
                              title=${e.editorRemove}
                              @click=${() => this._removeEntity(r)}
                            >
                              <ha-icon icon="mdi:delete-outline"></ha-icon>
                            </button>
                          </div>
                        </div>

                        <div class="field">
                          <label>${e.editorEntity}</label>
                          ${this._renderEntitySelector(o, r)}
                        </div>

                        <div class="two-col">
                          <div class="field">
                            <label>${e.editorCustomName}</label>
                            <input
                              type="text"
                              .value=${o.name || ""}
                              placeholder="Ej. Personal"
                              @change=${(l) => this._updateEntityAt(r, {
        name: l.target.value.trim()
      })}
                            />
                          </div>

                          <div class="field">
                            <label>${e.editorCustomColor}</label>
                            <div class="color-row">
                              <input
                                type="color"
                                .value=${s}
                                @input=${(l) => this._updateEntityAt(r, {
        color: l.target.value
      })}
                              />
                              <input
                                type="text"
                                .value=${o.color || s}
                                @change=${(l) => this._updateEntityAt(r, {
        color: l.target.value.trim()
      })}
                              />
                            </div>
                          </div>
                        </div>

                        <div class="field">
                          <label>${e.editorCustomIcon}</label>
                          ${this._renderIconInput(o, r)}
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
    return h`
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
            .checked=${!!t.compact}
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
    return h`
      <div class="three-col">
        <div class="field">
          <label>${e.editorStartHour}</label>
          <input
            type="number"
            min="0"
            max="23"
            .value=${String(t.start_hour ?? 0)}
            @change=${(i) => this._updateField(
      "start_hour",
      Math.max(0, Math.min(23, Number(i.target.value) || 0))
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
            @change=${(i) => this._updateField(
      "end_hour",
      Math.max(1, Math.min(24, Number(i.target.value) || 24))
    )}
          />
        </div>
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
      </div>
    `;
  }
  _renderDayOptions(t, e) {
    const i = t.layout !== "grid";
    return h`
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

      ${i ? h`
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
          ` : h`
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
oe.styles = B`
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
Oe([
  $({ attribute: !1 })
], oe.prototype, "hass", 2);
Oe([
  C()
], oe.prototype, "_config", 2);
oe = Oe([
  Y(et)
], oe);
if (!customElements.get(Ne)) {
  const t = customElements.get(me);
  t && customElements.define(Ne, class extends t {
  });
}
if (!customElements.get(He)) {
  const t = customElements.get(re);
  t && customElements.define(He, class extends t {
  });
}
if (!customElements.get(Ie)) {
  const t = customElements.get(se);
  t && customElements.define(Ie, class extends t {
  });
}
const gi = [
  {
    type: me,
    name: "Simple Calendar - Month (Multi-Entity)",
    description: "Full monthly calendar view supporting multiple calendar entities with custom colors, icons, and filters.",
    preview: !0
  },
  {
    type: re,
    name: "Simple Calendar - Week (Multi-Entity)",
    description: "Weekly hourly time-grid calendar view supporting multiple calendar entities, all-day events, and current time indicator.",
    preview: !0
  },
  {
    type: se,
    name: "Simple Calendar - Day (Multi-Entity)",
    description: "Detailed daily schedule view supporting multiple calendar entities, summary badges, and hourly blocks.",
    preview: !0
  }
];
window.customCards = window.customCards || [];
for (const t of gi)
  window.customCards.some((e) => e.type === t.type) || window.customCards.push(t);
console.info(
  `%c SIMPLE-CALENDARS %c v${ut} `,
  "color: white; background: #1a73e8; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;",
  "color: #1a73e8; background: #e8f0fe; font-weight: 700; border-radius: 0 4px 4px 0; padding: 2px 6px;"
);
