const ct = "1.3.0", le = "simple-calendar-month-card", J = "simple-calendar-week-card", Q = "simple-calendar-day-card", Qe = "simple-calendar-card-editor", Ne = "ha-calendar-month-card", Oe = "ha-calendar-week-card", Fe = "ha-calendar-day-card", w = [
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
], _e = "mdi:calendar", Xe = {
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
function et(t, e) {
  var a;
  return t === "es" || t === "en" ? t : (((a = e == null ? void 0 : e.locale) == null ? void 0 : a.language) || (e == null ? void 0 : e.language) || "es").toLowerCase().startsWith("en") ? "en" : "es";
}
function dt(t, e) {
  var a;
  const i = ((a = e == null ? void 0 : e.locale) == null ? void 0 : a.language) || (e == null ? void 0 : e.language);
  return i && i.toLowerCase().startsWith(t) ? i : t === "es" ? "es-ES" : "en-US";
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, ke = ee.ShadowRoot && (ee.ShadyCSS === void 0 || ee.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), ze = /* @__PURE__ */ new WeakMap();
let tt = class {
  constructor(e, i, a) {
    if (this._$cssResult$ = !0, a !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = i;
  }
  get styleSheet() {
    let e = this.o;
    const i = this.t;
    if (ke && e === void 0) {
      const a = i !== void 0 && i.length === 1;
      a && (e = ze.get(i)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), a && ze.set(i, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const ht = (t) => new tt(typeof t == "string" ? t : t + "", void 0, Ee), B = (t, ...e) => {
  const i = t.length === 1 ? t[0] : e.reduce((a, n, o) => a + ((r) => {
    if (r._$cssResult$ === !0) return r.cssText;
    if (typeof r == "number") return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[o + 1], t[0]);
  return new tt(i, t, Ee);
}, pt = (t, e) => {
  if (ke) t.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of e) {
    const a = document.createElement("style"), n = ee.litNonce;
    n !== void 0 && a.setAttribute("nonce", n), a.textContent = i.cssText, t.appendChild(a);
  }
}, Ie = ke ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let i = "";
  for (const a of e.cssRules) i += a.cssText;
  return ht(i);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ut, defineProperty: mt, getOwnPropertyDescriptor: gt, getOwnPropertyNames: ft, getOwnPropertySymbols: yt, getPrototypeOf: vt } = Object, C = globalThis, He = C.trustedTypes, bt = He ? He.emptyScript : "", ue = C.reactiveElementPolyfillSupport, Y = (t, e) => t, te = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? bt : null;
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
} }, De = (t, e) => !ut(t, e), Re = { attribute: !0, type: String, converter: te, reflect: !1, useDefault: !1, hasChanged: De };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), C.litPropertyMetadata ?? (C.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let H = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, i = Re) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(e, i), !i.noAccessor) {
      const a = Symbol(), n = this.getPropertyDescriptor(e, a, i);
      n !== void 0 && mt(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, i, a) {
    const { get: n, set: o } = gt(this.prototype, e) ?? { get() {
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
    return this.elementProperties.get(e) ?? Re;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const e = vt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const i = this.properties, a = [...ft(i), ...yt(i)];
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
      for (const n of a) i.unshift(Ie(n));
    } else e !== void 0 && i.push(Ie(e));
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
    return pt(e, this.constructor.elementStyles), e;
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
      const r = (((o = a.converter) == null ? void 0 : o.toAttribute) !== void 0 ? a.converter : te).toAttribute(i, a.type);
      this._$Em = e, r == null ? this.removeAttribute(n) : this.setAttribute(n, r), this._$Em = null;
    }
  }
  _$AK(e, i) {
    var o, r;
    const a = this.constructor, n = a._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const s = a.getPropertyOptions(n), l = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((o = s.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? s.converter : te;
      this._$Em = n;
      const c = l.fromAttribute(i, s.type);
      this[n] = c ?? ((r = this._$Ej) == null ? void 0 : r.get(n)) ?? c, this._$Em = null;
    }
  }
  requestUpdate(e, i, a, n = !1, o) {
    var r;
    if (e !== void 0) {
      const s = this.constructor;
      if (n === !1 && (o = this[e]), a ?? (a = s.getPropertyOptions(e)), !((a.hasChanged ?? De)(o, i) || a.useDefault && a.reflect && o === ((r = this._$Ej) == null ? void 0 : r.get(e)) && !this.hasAttribute(s._$Eu(e, a)))) return;
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
H.elementStyles = [], H.shadowRootOptions = { mode: "open" }, H[Y("elementProperties")] = /* @__PURE__ */ new Map(), H[Y("finalized")] = /* @__PURE__ */ new Map(), ue == null || ue({ ReactiveElement: H }), (C.reactiveElementVersions ?? (C.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis, Le = (t) => t, ie = G.trustedTypes, Be = ie ? ie.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, it = "$lit$", S = `lit$${Math.random().toFixed(9).slice(2)}$`, nt = "?" + S, _t = `<${nt}>`, z = document, V = () => z.createComment(""), q = (t) => t === null || typeof t != "object" && typeof t != "function", Se = Array.isArray, $t = (t) => Se(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, W = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ue = /-->/g, je = />/g, P = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), We = /'/g, Ye = /"/g, at = /^(?:script|style|textarea|title)$/i, xt = (t) => (e, ...i) => ({ _$litType$: t, strings: e, values: i }), h = xt(1), R = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), Ge = /* @__PURE__ */ new WeakMap(), N = z.createTreeWalker(z, 129);
function rt(t, e) {
  if (!Se(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Be !== void 0 ? Be.createHTML(e) : e;
}
const wt = (t, e) => {
  const i = t.length - 1, a = [];
  let n, o = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", r = W;
  for (let s = 0; s < i; s++) {
    const l = t[s];
    let c, d, p = -1, m = 0;
    for (; m < l.length && (r.lastIndex = m, d = r.exec(l), d !== null); ) m = r.lastIndex, r === W ? d[1] === "!--" ? r = Ue : d[1] !== void 0 ? r = je : d[2] !== void 0 ? (at.test(d[2]) && (n = RegExp("</" + d[2], "g")), r = P) : d[3] !== void 0 && (r = P) : r === P ? d[0] === ">" ? (r = n ?? W, p = -1) : d[1] === void 0 ? p = -2 : (p = r.lastIndex - d[2].length, c = d[1], r = d[3] === void 0 ? P : d[3] === '"' ? Ye : We) : r === Ye || r === We ? r = P : r === Ue || r === je ? r = W : (r = P, n = void 0);
    const g = r === P && t[s + 1].startsWith("/>") ? " " : "";
    o += r === W ? l + _t : p >= 0 ? (a.push(c), l.slice(0, p) + it + l.slice(p) + S + g) : l + S + (p === -2 ? s : g);
  }
  return [rt(t, o + (t[i] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), a];
};
class K {
  constructor({ strings: e, _$litType$: i }, a) {
    let n;
    this.parts = [];
    let o = 0, r = 0;
    const s = e.length - 1, l = this.parts, [c, d] = wt(e, i);
    if (this.el = K.createElement(c, a), N.currentNode = this.el.content, i === 2 || i === 3) {
      const p = this.el.content.firstChild;
      p.replaceWith(...p.childNodes);
    }
    for (; (n = N.nextNode()) !== null && l.length < s; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const p of n.getAttributeNames()) if (p.endsWith(it)) {
          const m = d[r++], g = n.getAttribute(p).split(S), f = /([.?@])?(.*)/.exec(m);
          l.push({ type: 1, index: o, name: f[2], strings: g, ctor: f[1] === "." ? Et : f[1] === "?" ? Dt : f[1] === "@" ? St : ce }), n.removeAttribute(p);
        } else p.startsWith(S) && (l.push({ type: 6, index: o }), n.removeAttribute(p));
        if (at.test(n.tagName)) {
          const p = n.textContent.split(S), m = p.length - 1;
          if (m > 0) {
            n.textContent = ie ? ie.emptyScript : "";
            for (let g = 0; g < m; g++) n.append(p[g], V()), N.nextNode(), l.push({ type: 2, index: ++o });
            n.append(p[m], V());
          }
        }
      } else if (n.nodeType === 8) if (n.data === nt) l.push({ type: 2, index: o });
      else {
        let p = -1;
        for (; (p = n.data.indexOf(S, p + 1)) !== -1; ) l.push({ type: 7, index: o }), p += S.length - 1;
      }
      o++;
    }
  }
  static createElement(e, i) {
    const a = z.createElement("template");
    return a.innerHTML = e, a;
  }
}
function L(t, e, i = t, a) {
  var r, s;
  if (e === R) return e;
  let n = a !== void 0 ? (r = i._$Co) == null ? void 0 : r[a] : i._$Cl;
  const o = q(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== o && ((s = n == null ? void 0 : n._$AO) == null || s.call(n, !1), o === void 0 ? n = void 0 : (n = new o(t), n._$AT(t, i, a)), a !== void 0 ? (i._$Co ?? (i._$Co = []))[a] = n : i._$Cl = n), n !== void 0 && (e = L(t, n._$AS(t, e.values), n, a)), e;
}
class kt {
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
    const { el: { content: i }, parts: a } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? z).importNode(i, !0);
    N.currentNode = n;
    let o = N.nextNode(), r = 0, s = 0, l = a[0];
    for (; l !== void 0; ) {
      if (r === l.index) {
        let c;
        l.type === 2 ? c = new X(o, o.nextSibling, this, e) : l.type === 1 ? c = new l.ctor(o, l.name, l.strings, this, e) : l.type === 6 && (c = new Ct(o, this, e)), this._$AV.push(c), l = a[++s];
      }
      r !== (l == null ? void 0 : l.index) && (o = N.nextNode(), r++);
    }
    return N.currentNode = z, n;
  }
  p(e) {
    let i = 0;
    for (const a of this._$AV) a !== void 0 && (a.strings !== void 0 ? (a._$AI(e, a, i), i += a.strings.length - 2) : a._$AI(e[i])), i++;
  }
}
class X {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, i, a, n) {
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = e, this._$AB = i, this._$AM = a, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
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
    e = L(this, e, i), q(e) ? e === u || e == null || e === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : e !== this._$AH && e !== R && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : $t(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== u && q(this._$AH) ? this._$AA.nextSibling.data = e : this.T(z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var o;
    const { values: i, _$litType$: a } = e, n = typeof a == "number" ? this._$AC(e) : (a.el === void 0 && (a.el = K.createElement(rt(a.h, a.h[0]), this.options)), a);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === n) this._$AH.p(i);
    else {
      const r = new kt(n, this), s = r.u(this.options);
      r.p(i), this.T(s), this._$AH = r;
    }
  }
  _$AC(e) {
    let i = Ge.get(e.strings);
    return i === void 0 && Ge.set(e.strings, i = new K(e)), i;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let a, n = 0;
    for (const o of e) n === i.length ? i.push(a = new X(this.O(V()), this.O(V()), this, this.options)) : a = i[n], a._$AI(o), n++;
    n < i.length && (this._$AR(a && a._$AB.nextSibling, n), i.length = n);
  }
  _$AR(e = this._$AA.nextSibling, i) {
    var a;
    for ((a = this._$AP) == null ? void 0 : a.call(this, !1, !0, i); e !== this._$AB; ) {
      const n = Le(e).nextSibling;
      Le(e).remove(), e = n;
    }
  }
  setConnected(e) {
    var i;
    this._$AM === void 0 && (this._$Cv = e, (i = this._$AP) == null || i.call(this, e));
  }
}
class ce {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, i, a, n, o) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = e, this.name = i, this._$AM = n, this.options = o, a.length > 2 || a[0] !== "" || a[1] !== "" ? (this._$AH = Array(a.length - 1).fill(new String()), this.strings = a) : this._$AH = u;
  }
  _$AI(e, i = this, a, n) {
    const o = this.strings;
    let r = !1;
    if (o === void 0) e = L(this, e, i, 0), r = !q(e) || e !== this._$AH && e !== R, r && (this._$AH = e);
    else {
      const s = e;
      let l, c;
      for (e = o[0], l = 0; l < o.length - 1; l++) c = L(this, s[a + l], i, l), c === R && (c = this._$AH[l]), r || (r = !q(c) || c !== this._$AH[l]), c === u ? e = u : e !== u && (e += (c ?? "") + o[l + 1]), this._$AH[l] = c;
    }
    r && !n && this.j(e);
  }
  j(e) {
    e === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Et extends ce {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === u ? void 0 : e;
  }
}
class Dt extends ce {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== u);
  }
}
class St extends ce {
  constructor(e, i, a, n, o) {
    super(e, i, a, n, o), this.type = 5;
  }
  _$AI(e, i = this) {
    if ((e = L(this, e, i, 0) ?? u) === R) return;
    const a = this._$AH, n = e === u && a !== u || e.capture !== a.capture || e.once !== a.once || e.passive !== a.passive, o = e !== u && (a === u || n);
    n && this.element.removeEventListener(this.name, this, a), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Ct {
  constructor(e, i, a) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = a;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    L(this, e);
  }
}
const ge = G.litHtmlPolyfillSupport;
ge == null || ge(K, X), (G.litHtmlVersions ?? (G.litHtmlVersions = [])).push("3.3.3");
const At = (t, e, i) => {
  const a = (i == null ? void 0 : i.renderBefore) ?? e;
  let n = a._$litPart$;
  if (n === void 0) {
    const o = (i == null ? void 0 : i.renderBefore) ?? null;
    a._$litPart$ = n = new X(e.insertBefore(V(), o), o, void 0, i ?? {});
  }
  return n._$AI(t), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const O = globalThis;
class A extends H {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = At(i, this.renderRoot, this.renderOptions);
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
    return R;
  }
}
var Je;
A._$litElement$ = !0, A.finalized = !0, (Je = O.litElementHydrateSupport) == null || Je.call(O, { LitElement: A });
const fe = O.litElementPolyfillSupport;
fe == null || fe({ LitElement: A });
(O.litElementVersions ?? (O.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U = (t) => (e, i) => {
  i !== void 0 ? i.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Tt = { attribute: !0, type: String, converter: te, reflect: !1, hasChanged: De }, Mt = (t = Tt, e, i) => {
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
function v(t) {
  return (e, i) => typeof i == "object" ? Mt(t, e, i) : ((a, n, o) => {
    const r = n.hasOwnProperty(o);
    return n.constructor.createProperty(o, a), r ? Object.getOwnPropertyDescriptor(n, o) : void 0;
  })(t, e, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function x(t) {
  return v({ ...t, state: !0, attribute: !1 });
}
function ne(t, e = 0.16) {
  const i = (t || "").trim(), a = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i);
  if (a) {
    let r = a[1];
    r.length === 3 && (r = r.split("").map((d) => d + d).join(""));
    const s = parseInt(r.slice(0, 2), 16), l = parseInt(r.slice(2, 4), 16), c = parseInt(r.slice(4, 6), 16);
    return `rgba(${s}, ${l}, ${c}, ${e})`;
  }
  const n = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i.exec(i);
  if (n)
    return `rgba(${n[1]}, ${n[2]}, ${n[3]}, ${e})`;
  const o = Math.round(e * 100);
  return `color-mix(in srgb, ${i || "#1a73e8"} ${o}%, transparent)`;
}
function Pt(t) {
  var d;
  const e = !!t.transparent, i = typeof t.background_opacity == "number" && !Number.isNaN(t.background_opacity) ? Math.max(0, Math.min(100, t.background_opacity)) : e ? 0 : 100, a = e || i === 0, n = !a && i < 100, o = (d = t.background_color) == null ? void 0 : d.trim(), r = typeof t.border_radius == "number" && !Number.isNaN(t.border_radius) ? Math.max(0, t.border_radius) : 24, s = typeof t.backdrop_blur == "number" && !Number.isNaN(t.backdrop_blur) ? Math.max(0, t.backdrop_blur) : n ? 12 : 0, l = [
    `border-radius: ${r}px`,
    `--ha-card-border-radius: ${r}px`
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
      const p = o || "var(--ha-card-background, var(--card-background-color, #1c1d21))";
      l.push(`background: color-mix(in srgb, ${p} ${i}%, transparent)`);
    } else o && l.push(`background: ${o}`);
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
const de = B`
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
function b(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0);
}
function he(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1, 0, 0, 0, 0);
}
function $(t, e) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate() + e, 0, 0, 0, 0);
}
function Ve(t, e) {
  return new Date(t.getFullYear(), t.getMonth() + e, 1, 0, 0, 0, 0);
}
function Ce(t, e) {
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
}
function qe(t) {
  const e = /^(\d{4})-(\d{2})-(\d{2})/.exec(t);
  if (!e)
    return new Date(t);
  const i = Number(e[1]), a = Number(e[2]) - 1, n = Number(e[3]);
  return new Date(i, a, n, 0, 0, 0, 0);
}
function Ae(t) {
  const e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())), i = e.getUTCDay() || 7;
  e.setUTCDate(e.getUTCDate() + 4 - i);
  const a = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
  return Math.ceil(((e.getTime() - a.getTime()) / 864e5 + 1) / 7);
}
function Nt(t, e, i) {
  const a = (i % 7 + 7) % 7, n = new Date(t, e, 1, 0, 0, 0, 0), o = new Date(t, e + 1, 0, 0, 0, 0, 0), r = (n.getDay() - a + 7) % 7, s = $(n, -r), l = (a + 6 - o.getDay() + 7) % 7, c = r + o.getDate() + l, d = b(/* @__PURE__ */ new Date()), p = [];
  for (let m = 0; m < c; m++) {
    const g = $(s, m);
    p.push({
      date: g,
      isCurrentMonth: g.getMonth() === e && g.getFullYear() === t,
      isToday: Ce(g, d),
      weekNumber: Ae(g)
    });
  }
  return p;
}
function Ot(t, e) {
  const i = (e % 7 + 7) % 7, a = b(t), n = (a.getDay() - i + 7) % 7;
  return $(a, -n);
}
function Ft(t, e, i = 7) {
  const a = i === 7 ? Ot(t, e) : b(t), n = [];
  for (let o = 0; o < i; o++)
    n.push($(a, o));
  return n;
}
function zt(t, e) {
  const i = (t % 7 + 7) % 7, a = new Date(2026, 10, 1), n = new Intl.DateTimeFormat(e, { weekday: "short" }), o = [];
  for (let r = 0; r < 7; r++) {
    const s = (i + r) % 7, l = $(a, s);
    o.push(F(n.format(l).replace(/\.$/, "")));
  }
  return o;
}
function It(t, e, i) {
  const a = t.start.getTime(), n = t.end.getTime(), o = e.getTime(), r = i.getTime();
  return n <= a ? a >= o && a < r : a < r && n > o;
}
function ae(t, e) {
  const i = b(e), a = he(e);
  return t.filter((n) => It(n, i, a)).sort((n, o) => n.allDay !== o.allDay ? n.allDay ? -1 : 1 : n.start.getTime() - o.start.getTime());
}
function re(t, e) {
  return new Intl.DateTimeFormat(e, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(t);
}
function oe(t) {
  const e = t.getHours(), i = String(t.getMinutes()).padStart(2, "0");
  return `${e}:${i}`;
}
function Ht(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    month: "long",
    year: "numeric"
  }).format(t);
  return F(i);
}
function Ke(t, e) {
  if (t.length === 0) return "";
  const i = t[0], a = t[t.length - 1], n = i.getMonth() === a.getMonth() && i.getFullYear() === a.getFullYear(), o = i.getFullYear() === a.getFullYear();
  if (n) {
    const l = F(
      new Intl.DateTimeFormat(e, { month: "long", year: "numeric" }).format(i)
    );
    return `${i.getDate()} – ${a.getDate()} ${l}`;
  }
  if (o) {
    const l = new Intl.DateTimeFormat(e, { day: "numeric", month: "short" }).format(i), c = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(a);
    return `${l} – ${c}`;
  }
  const r = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(i), s = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(a);
  return `${r} – ${s}`;
}
function ot(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(t);
  return F(i);
}
function Rt(t, e, i, a) {
  if (t.allDay) {
    const c = b(t.start), d = $(b(t.end), -1), p = new Intl.DateTimeFormat(e, {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    return d.getTime() > c.getTime() ? `${p.format(c)} – ${p.format(d)} (${a})` : `${p.format(c)} · ${a}`;
  }
  const n = Ce(t.start, t.end), o = new Intl.DateTimeFormat(e, {
    weekday: "short",
    day: "numeric",
    month: "short"
  }), r = re(t.start, e), s = re(t.end, e);
  if (n)
    return `${F(o.format(t.start))}, ${r} – ${s}`;
  const l = i === "es" ? "a" : "to";
  return `${F(o.format(t.start))} ${r} ${l} ${F(o.format(t.end))} ${s}`;
}
function F(t) {
  return t && t.charAt(0).toUpperCase() + t.slice(1);
}
function ye(t, e) {
  const i = Math.max(1, Math.round(t / 6e4));
  if (i >= 45) {
    const a = Math.max(1, Math.round(i / 60));
    return `${a} ${a === 1 ? e.hourRemaining : e.hoursRemaining}`;
  }
  return `${i} ${e.minutesRemaining}`;
}
function Lt(t, e, i) {
  if (t.allDay) {
    const d = b(e).getTime(), p = b(t.start).getTime(), m = b(t.end).getTime();
    if (d < p)
      return {
        progressPct: 0,
        label: i.allDay,
        isOngoing: !1,
        isPast: !1,
        isFuture: !0
      };
    if (d >= m)
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
  const a = t.start.getTime(), n = t.end.getTime(), o = e.getTime(), r = Math.max(6e4, n - a);
  if (o < a)
    return {
      progressPct: 0,
      label: ye(r, i),
      isOngoing: !1,
      isPast: !1,
      isFuture: !0
    };
  if (o >= n)
    return {
      progressPct: 100,
      label: ye(r, i),
      isOngoing: !1,
      isPast: !0,
      isFuture: !1
    };
  const s = o - a, l = Math.min(100, Math.max(0, s / r * 100)), c = n - o;
  return {
    progressPct: l,
    label: ye(c, i),
    isOngoing: !0,
    isPast: !1,
    isFuture: !1
  };
}
function Bt(t, e) {
  const i = new Intl.DateTimeFormat(e, { weekday: "short" }).format(t).replace(/\.$/, ""), a = t.getDate(), n = new Intl.DateTimeFormat(e, { month: "short" }).format(t).replace(/\.$/, "");
  return {
    weekdayDay: `${i}. ${a}`,
    month: n
  };
}
const Ut = 6e4, $e = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map();
function jt() {
  $e.clear();
}
function be(t, e) {
  const i = Array.isArray(t.entities) && t.entities.length > 0 ? t.entities : t.entity ? [t.entity] : [], a = [];
  return i.forEach((n, o) => {
    var p, m, g, f, M, j;
    const r = typeof n == "string" ? { entity: n } : n, s = ((r == null ? void 0 : r.entity) || "").trim();
    if (!s) return;
    const l = (p = e == null ? void 0 : e.states) == null ? void 0 : p[s], c = typeof ((m = l == null ? void 0 : l.attributes) == null ? void 0 : m.friendly_name) == "string" ? l.attributes.friendly_name : void 0, d = typeof ((g = l == null ? void 0 : l.attributes) == null ? void 0 : g.icon) == "string" ? l.attributes.icon : void 0;
    a.push({
      entity: s,
      name: ((f = r.name) == null ? void 0 : f.trim()) || c || s,
      color: ((M = r.color) == null ? void 0 : M.trim()) || w[o % w.length],
      icon: ((j = r.icon) == null ? void 0 : j.trim()) || d || _e,
      hidden: !!r.hidden
    });
  }), a;
}
function Ze(t) {
  if (!t)
    return { date: /* @__PURE__ */ new Date(), isDateOnly: !1 };
  if (typeof t == "string") {
    const e = /^\d{4}-\d{2}-\d{2}$/.test(t.trim());
    return {
      date: e ? qe(t.trim()) : new Date(t),
      isDateOnly: e
    };
  }
  return t.date && !t.dateTime ? {
    date: qe(t.date),
    isDateOnly: !0
  } : t.dateTime ? {
    date: new Date(t.dateTime),
    isDateOnly: !1
  } : { date: /* @__PURE__ */ new Date(), isDateOnly: !1 };
}
function Wt(t, e, i) {
  const a = Ze(t.start), n = Ze(t.end);
  if (Number.isNaN(a.date.getTime()))
    return null;
  const o = a.isDateOnly, r = a.date;
  let s = Number.isNaN(n.date.getTime()) ? new Date(r) : n.date;
  o && s.getTime() <= r.getTime() ? s = $(r, 1) : !o && s.getTime() < r.getTime() && (s = new Date(r));
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
async function Yt(t, e, i, a, n = !1) {
  const o = i.toISOString(), r = a.toISOString(), s = `${e.entity}|${e.name}|${e.color}|${e.icon}|${o}|${r}`;
  if (!n) {
    const d = $e.get(s);
    if (d && Date.now() - d.timestamp < Ut)
      return d.events;
    const p = ve.get(s);
    if (p)
      return p;
  }
  const l = `calendars/${encodeURIComponent(e.entity)}?start=${encodeURIComponent(
    o
  )}&end=${encodeURIComponent(r)}`, c = t.callApi("GET", l).then((d) => {
    const p = (Array.isArray(d) ? d : []).map((m, g) => Wt(m, e, g)).filter((m) => m !== null);
    return $e.set(s, {
      timestamp: Date.now(),
      events: p
    }), p;
  }).finally(() => {
    ve.delete(s);
  });
  return ve.set(s, c), c;
}
async function Gt(t, e, i, a, n = !1) {
  if (!t || e.length === 0)
    return { events: [], failedEntities: [] };
  const o = await Promise.allSettled(
    e.map(
      (l) => Yt(t, l, i, a, n)
    )
  ), r = [], s = [];
  return o.forEach((l, c) => {
    l.status === "fulfilled" ? r.push(...l.value) : s.push(e[c].entity);
  }), r.sort((l, c) => l.start.getTime() - c.start.getTime()), { events: r, failedEntities: s };
}
var Vt = Object.defineProperty, qt = Object.getOwnPropertyDescriptor, T = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? qt(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = (a ? r(e, i, n) : r(n)) || n);
  return a && n && Vt(e, i, n), n;
};
let k = class extends A {
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
            ${this.cardTitle ? h`<div class="card-subtitle">${this.cardTitle}</div>` : u}
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
                      style="--chip-color: ${s.color}; --chip-bg: ${ne(
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
            ` : u}
      </div>
    `;
  }
};
k.styles = B`
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
T([
  v({ type: String })
], k.prototype, "cardTitle", 2);
T([
  v({ type: String })
], k.prototype, "periodLabel", 2);
T([
  v({ type: Array })
], k.prototype, "entities", 2);
T([
  v({ attribute: !1 })
], k.prototype, "hiddenEntities", 2);
T([
  v({ type: Boolean })
], k.prototype, "showEntityToggles", 2);
T([
  v({ type: Boolean })
], k.prototype, "loading", 2);
T([
  v({ attribute: !1 })
], k.prototype, "strings", 2);
k = T([
  U("ha-calendar-shared-header")
], k);
var Kt = Object.defineProperty, Zt = Object.getOwnPropertyDescriptor, I = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? Zt(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = (a ? r(e, i, n) : r(n)) || n);
  return a && n && Kt(e, i, n), n;
};
let D = class extends A {
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
    const e = Rt(
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
            style="background: ${ne(t.color, 0.16)}; color: ${t.color};"
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
            ` : u}

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
            ` : u}
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
    if (!this.dayDate) return u;
    const t = ot(this.dayDate, this.locale);
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
      const o = n.allDay ? ((r = this.strings) == null ? void 0 : r.allDay) || "All day" : `${re(n.start, this.locale)} – ${re(
        n.end,
        this.locale
      )}`;
      return h`
                <button
                  type="button"
                  class="day-event-row"
                  style="--ev-color: ${n.color}; --ev-bg: ${ne(
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
    return !(this.event || this.dayDate) ? u : h`
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
D.styles = B`
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
I([
  v({ attribute: !1 })
], D.prototype, "event", 2);
I([
  v({ attribute: !1 })
], D.prototype, "dayDate", 2);
I([
  v({ type: Array })
], D.prototype, "dayEvents", 2);
I([
  v({ type: String })
], D.prototype, "locale", 2);
I([
  v({ type: String })
], D.prototype, "lang", 2);
I([
  v({ attribute: !1 })
], D.prototype, "strings", 2);
D = I([
  U("ha-calendar-event-dialog")
], D);
var Jt = Object.defineProperty, E = (t, e, i, a) => {
  for (var n = void 0, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = r(e, i, n) || n);
  return n && Jt(e, i, n), n;
};
function Te(t) {
  const e = Object.keys((t == null ? void 0 : t.states) || {}).filter((i) => i.startsWith("calendar.")).slice(0, 3);
  return e.length > 0 ? e.map((i, a) => {
    var s, l, c;
    const n = (s = t == null ? void 0 : t.states) == null ? void 0 : s[i], o = typeof ((l = n == null ? void 0 : n.attributes) == null ? void 0 : l.friendly_name) == "string" ? n.attributes.friendly_name : void 0, r = typeof ((c = n == null ? void 0 : n.attributes) == null ? void 0 : c.icon) == "string" ? n.attributes.icon : "mdi:calendar";
    return {
      entity: i,
      name: o,
      color: w[a % w.length],
      icon: r
    };
  }) : [
    {
      entity: "calendar.personal",
      name: "Personal",
      color: w[0],
      icon: "mdi:calendar-account"
    },
    {
      entity: "calendar.trabajo",
      name: "Trabajo",
      color: w[1],
      icon: "mdi:briefcase-outline"
    }
  ];
}
const Pe = class Pe extends A {
  constructor() {
    super(...arguments), this._anchorDate = b(/* @__PURE__ */ new Date()), this._events = [], this._loading = !1, this._failedEntities = [], this._hiddenEntities = /* @__PURE__ */ new Set(), this._selectedEvent = null, this._selectedDayDate = null, this._currentNow = /* @__PURE__ */ new Date(), this._lastFetchKey = "", this._fetchRequestId = 0;
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
      const n = window, o = await ((e = n.loadCardHelpers) == null ? void 0 : e.call(n));
      if (o && !customElements.get("ha-selector")) {
        const r = await o.createCardElement({ type: "entities", entities: [] });
        await ((a = (i = r == null ? void 0 : r.constructor) == null ? void 0 : i.getConfigElement) == null ? void 0 : a.call(i));
      }
    } catch {
    }
    return document.createElement(Qe);
  }
  setConfig(e) {
    if (!e)
      throw new Error("Invalid configuration");
    this._config = {
      first_day_of_week: 1,
      ...e
    };
    const i = be(this._config, this.hass);
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
  renderMinimalDayBlock(e, i, a, n, o = !0) {
    var l;
    const r = Bt(e, a), s = !!((l = this._config) != null && l.use_entity_color);
    return h`
      <div class="min-day-row">
        <div class="min-date-col">
          <span class="min-date-day">${r.weekdayDay}</span>
          <span class="min-date-month">${r.month}</span>
        </div>

        <div class="min-events-col">
          ${i.length === 0 ? h`<div class="min-empty-text">${n.noEvents}</div>` : i.map((c) => {
      const d = Lt(
        c,
        this._currentNow,
        n
      ), p = c.allDay ? n.allDay : `${oe(c.start)} - ${oe(c.end)}`, m = s ? `--min-ev-accent: ${c.color};` : "", g = c.summary && c.summary !== "(Sin título)" ? c.summary : c.calendarName;
      return h`
                  <button
                    type="button"
                    class="min-event-item"
                    style=${m}
                    @click=${(f) => {
        f.stopPropagation(), this._selectedEvent = c;
      }}
                  >
                    <div class="min-event-top">
                      <div class="min-event-title-wrap">
                        <ha-icon class="min-event-icon" .icon=${c.icon}></ha-icon>
                        <span class="min-event-title">${g}</span>
                      </div>
                      <span class="min-event-time">${p}</span>
                    </div>

                    <div class="min-event-sub">
                      <span class="min-event-duration">${d.label}</span>
                      ${o ? h`
                            <div
                              class="min-progress-track"
                              role="progressbar"
                              aria-valuenow=${Math.round(d.progressPct)}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div
                                class="min-progress-fill"
                                style="width: ${d.progressPct}%;"
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
    const i = be(this._config, this.hass);
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
      const r = await Gt(
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
    jt(), this._triggerFetchIfNeeded(!0);
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
    if (!this._config) return u;
    const e = et(this._config.language, this.hass), i = dt(e, this.hass), a = Xe[e], n = be(this._config, this.hass), o = this._events.filter(
      (d) => !this._hiddenEntities.has(d.calendarEntity)
    ), r = this.useSharedHeader(), s = this._config.show_entity_toggles !== !1, l = this.isMinimalSurface(), c = Pt(this._config);
    return h`
      <ha-card class=${c.className} style=${c.style}>
        ${!l || this._loading ? h`<div class="loading-bar ${this._loading ? "active" : ""}"></div>` : u}

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
            ` : u}

        ${this._failedEntities.length > 0 ? h`
              <div class="status-banner" role="status">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                <span>
                  ${a.errorLoading}: ${this._failedEntities.join(", ")}
                </span>
              </div>
            ` : u}

        ${n.length === 0 ? h`
              <div class="empty-state">
                <ha-icon icon="mdi:calendar-blank-multiple"></ha-icon>
                <div class="empty-state-title">${a.noCalendars}</div>
                <div class="empty-state-hint">${a.noCalendarsHint}</div>
              </div>
            ` : h`
              <div
                class="card-content-wrap ${l ? "minimal-pad" : ""}"
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
Pe.styles = [de];
let _ = Pe;
E([
  v({ attribute: !1 })
], _.prototype, "hass");
E([
  x()
], _.prototype, "_config");
E([
  x()
], _.prototype, "_anchorDate");
E([
  x()
], _.prototype, "_events");
E([
  x()
], _.prototype, "_loading");
E([
  x()
], _.prototype, "_failedEntities");
E([
  x()
], _.prototype, "_hiddenEntities");
E([
  x()
], _.prototype, "_selectedEvent");
E([
  x()
], _.prototype, "_selectedDayDate");
E([
  x()
], _.prototype, "_currentNow");
var Qt = Object.defineProperty, Xt = Object.getOwnPropertyDescriptor, st = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? Xt(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = (a ? r(e, i, n) : r(n)) || n);
  return a && n && Qt(e, i, n), n;
};
let se = class extends _ {
  constructor() {
    super(...arguments), this._focusedDay = b(/* @__PURE__ */ new Date());
  }
  static getStubConfig(t) {
    return {
      type: `custom:${le}`,
      entities: Te(t),
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
      end: he(t[t.length - 1].date)
    };
  }
  getPeriodLabel(t) {
    return Ht(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = Ve(this._anchorDate, -1), this._focusedDay = new Date(
      this._anchorDate.getFullYear(),
      this._anchorDate.getMonth(),
      1
    );
  }
  navigateNext() {
    this._anchorDate = Ve(this._anchorDate, 1), this._focusedDay = new Date(
      this._anchorDate.getFullYear(),
      this._anchorDate.getMonth(),
      1
    );
  }
  navigateToday() {
    const t = /* @__PURE__ */ new Date();
    this._anchorDate = new Date(t.getFullYear(), t.getMonth(), 1, 0, 0, 0, 0), this._focusedDay = b(t);
  }
  _getGridDays() {
    return Nt(
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
    const o = !!this._config.show_week_numbers, r = this._config.compact !== !1, s = Math.max(1, this._config.max_events_per_day ?? 3), l = zt(this.getFirstDayOfWeek(), i), c = this._getGridDays(), d = [];
    for (let m = 0; m < c.length; m += 7)
      d.push(c.slice(m, m + 7));
    const p = ae(t, this._focusedDay);
    return h`
      <div class="month-grid-wrap ${r ? "is-compact" : ""}">
        <div
          class="weekday-row ${o ? "with-weeks" : ""}"
          role="row"
        >
          ${o ? h`<div class="week-col-header">${n.weekAbbr}</div>` : u}
          ${l.map(
      (m) => h`<div class="weekday-cell">${m}</div>`
    )}
        </div>

        <div class="weeks-container">
          ${d.map(
      (m) => h`
              <div class="week-row ${o ? "with-weeks" : ""}">
                ${o ? h`<div class="week-number-cell">${m[0].weekNumber}</div>` : u}
                ${m.map((g) => {
        const f = ae(t, g.date), M = f.slice(0, s), j = f.length - M.length, lt = Ce(g.date, this._focusedDay);
        return h`
                    <div
                      class="day-cell ${g.isCurrentMonth ? "" : "outside-month"} ${g.isToday ? "is-today" : ""} ${lt ? "is-focused" : ""}"
                      @click=${() => {
          this._focusedDay = g.date;
        }}
                    >
                      <div class="day-cell-top">
                        <span class="day-num ${g.isToday ? "today-circle" : ""}">
                          ${g.date.getDate()}
                        </span>
                      </div>

                      <div class="day-events">
                        ${M.map(
          (y) => y.allDay ? h`
                                <button
                                  type="button"
                                  class="event-pill all-day"
                                  style="--ev-color: ${y.color};"
                                  title=${`${y.calendarName}: ${y.summary}`}
                                  @click=${(pe) => this._onEventPillClick(pe, y)}
                                >
                                  <ha-icon class="pill-icon" .icon=${y.icon}></ha-icon>
                                  <span class="pill-text">${y.summary}</span>
                                </button>
                              ` : h`
                                <button
                                  type="button"
                                  class="event-pill timed"
                                  style="--ev-color: ${y.color}; --ev-bg: ${ne(
            y.color,
            0.14
          )};"
                                  title=${`${oe(y.start)} ${y.summary} (${y.calendarName})`}
                                  @click=${(pe) => this._onEventPillClick(pe, y)}
                                >
                                  <span class="pill-dot"></span>
                                  <span class="pill-time">
                                    ${oe(y.start)}
                                  </span>
                                  <span class="pill-text">${y.summary}</span>
                                </button>
                              `
        )}

                        ${j > 0 ? h`
                              <button
                                type="button"
                                class="more-btn"
                                @click=${(y) => {
          y.stopPropagation(), this._openDayList(g.date);
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

      ${p.length > 0 ? h`
            <div class="month-focused-summary">
              ${this.renderMinimalDayBlock(
      this._focusedDay,
      p,
      i,
      n,
      !0
    )}
            </div>
          ` : u}
    `;
  }
};
se.styles = [
  de,
  B`
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
st([
  x()
], se.prototype, "_focusedDay", 2);
se = st([
  U(le)
], se);
var ei = Object.getOwnPropertyDescriptor, ti = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? ei(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = r(n) || n);
  return n;
};
let xe = class extends _ {
  static getStubConfig(t) {
    return {
      type: `custom:${J}`,
      entities: Te(t),
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
      end: he(t[t.length - 1])
    };
  }
  getPeriodLabel(t) {
    return Ke(this._getVisibleDays(), t);
  }
  navigatePrev() {
    this._anchorDate = $(this._anchorDate, -this._getDaysCount());
  }
  navigateNext() {
    this._anchorDate = $(this._anchorDate, this._getDaysCount());
  }
  navigateToday() {
    this._anchorDate = b(/* @__PURE__ */ new Date());
  }
  renderCalendarBody(t, e, i, a, n) {
    const o = this._getVisibleDays(), r = this._config.show_week_number !== !1, s = this._config.show_progress_bar !== !1, l = !!this._config.show_navigation, c = !!this._config.show_empty_days, d = Ae(o[0] || this._anchorDate), p = o.map((f) => ({
      day: f,
      events: ae(t, f)
    })), m = c ? p : p.filter((f) => f.events.length > 0), g = m.length > 0 ? m : [p[0]];
    return h`
      ${r || l ? h`
            <div class="minimal-top-bar">
              <div class="week-header-left">
                ${r ? h`<span class="week-pill">${n.weekLabel} ${d}</span>` : u}
                <span class="week-range-sub">${Ke(o, i)}</span>
              </div>

              ${l ? h`
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
        ${g.map(
      (f, M) => h`
            <div class="week-day-entry ${M > 0 ? "has-divider" : ""}">
              ${this.renderMinimalDayBlock(
        f.day,
        f.events,
        i,
        n,
        s
      )}
            </div>
          `
    )}
      </div>
    `;
  }
};
xe.styles = [
  de,
  B`
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
xe = ti([
  U(J)
], xe);
var ii = Object.getOwnPropertyDescriptor, ni = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? ii(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = r(n) || n);
  return n;
};
let we = class extends _ {
  static getStubConfig(t) {
    return {
      type: `custom:${Q}`,
      entities: Te(t),
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
      start: b(this._anchorDate),
      end: he(this._anchorDate)
    };
  }
  getPeriodLabel(t) {
    return ot(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = $(this._anchorDate, -1);
  }
  navigateNext() {
    this._anchorDate = $(this._anchorDate, 1);
  }
  navigateToday() {
    this._anchorDate = b(/* @__PURE__ */ new Date());
  }
  renderCalendarBody(t, e, i, a, n) {
    const o = ae(t, this._anchorDate), r = this._config.show_week_number !== !1, s = this._config.show_progress_bar !== !1, l = !!this._config.show_navigation, c = Ae(this._anchorDate);
    return h`
      ${r || l ? h`
            <div class="minimal-top-bar">
              ${r ? h`<span class="week-pill">${n.weekLabel} ${c}</span>` : h`<span></span>`}

              ${l ? h`
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
      o,
      i,
      n,
      s
    )}
      </div>
    `;
  }
};
we.styles = [de];
we = ni([
  U(Q)
], we);
var ai = Object.defineProperty, ri = Object.getOwnPropertyDescriptor, Me = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? ri(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (n = (a ? r(e, i, n) : r(n)) || n);
  return a && n && ai(e, i, n), n;
};
let Z = class extends A {
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
    const t = this._getEntities(), e = new Set(t.map((r) => r.entity)), i = Object.keys(((o = this.hass) == null ? void 0 : o.states) || {}).filter((r) => r.startsWith("calendar.")).sort(), a = i.find((r) => !e.has(r)) || i[0] || "", n = w[t.length % w.length];
    t.push({
      entity: a,
      color: n,
      icon: _e
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
    return t.includes(J) || t.includes("week") ? "week" : t.includes(Q) || t.includes("day") ? "day" : "month";
  }
  _normalizeHexForColorInput(t, e = 0) {
    const i = (t || "").trim();
    return /^#[0-9a-f]{6}$/i.test(i) ? i : w[e % w.length];
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
      var s, l, c, d;
      const r = (d = (c = (l = (s = this.hass) == null ? void 0 : s.states) == null ? void 0 : l[o]) == null ? void 0 : c.attributes) == null ? void 0 : d.friendly_name;
      return h`
                    <option value=${o} ?selected=${t.entity === o}>
                      ${r ? `${r} (${o})` : o}
                    </option>
                  `;
    })}
              </select>
            ` : u}
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
        <ha-icon .icon=${t.icon || _e}></ha-icon>
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
    const t = et(this._config.language, this.hass), e = Xe[t], i = this._getCardKind(), a = this._getEntities(), n = this._config.first_day_of_week ?? 1, o = i !== "month", r = typeof this._config.background_opacity == "number" ? this._config.background_opacity : this._config.transparent ? 0 : 100;
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
            ${o ? h`
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
                ` : h`
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
              <label>${e.editorBackgroundOpacity}: ${r}%</label>
              <input
                type="range"
                min="0"
                max="100"
                .value=${String(r)}
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

          ${a.length === 0 ? h`<div class="empty-entities">${e.editorNoEntities}</div>` : h`
                <div class="entities-list">
                  ${a.map((s, l) => {
      const c = this._normalizeHexForColorInput(
        s.color,
        l
      );
      return h`
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
                              @change=${(d) => this._updateEntityAt(l, {
        name: d.target.value.trim()
      })}
                            />
                          </div>

                          <div class="field">
                            <label>${e.editorCustomColor}</label>
                            <div class="color-row">
                              <input
                                type="color"
                                .value=${c}
                                @input=${(d) => this._updateEntityAt(l, {
        color: d.target.value
      })}
                              />
                              <input
                                type="text"
                                .value=${s.color || c}
                                @change=${(d) => this._updateEntityAt(l, {
        color: d.target.value.trim()
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
    return h`
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
    return h`
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
};
Z.styles = B`
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
Me([
  v({ attribute: !1 })
], Z.prototype, "hass", 2);
Me([
  x()
], Z.prototype, "_config", 2);
Z = Me([
  U(Qe)
], Z);
if (!customElements.get(Ne)) {
  const t = customElements.get(le);
  t && customElements.define(Ne, class extends t {
  });
}
if (!customElements.get(Oe)) {
  const t = customElements.get(J);
  t && customElements.define(Oe, class extends t {
  });
}
if (!customElements.get(Fe)) {
  const t = customElements.get(Q);
  t && customElements.define(Fe, class extends t {
  });
}
const oi = [
  {
    type: le,
    name: "Simple Calendar - Month (Multi-Entity)",
    description: "Full monthly calendar view supporting multiple calendar entities with custom colors, icons, and filters.",
    preview: !0
  },
  {
    type: J,
    name: "Simple Calendar - Week (Multi-Entity)",
    description: "Weekly hourly time-grid calendar view supporting multiple calendar entities, all-day events, and current time indicator.",
    preview: !0
  },
  {
    type: Q,
    name: "Simple Calendar - Day (Multi-Entity)",
    description: "Detailed daily schedule view supporting multiple calendar entities, summary badges, and hourly blocks.",
    preview: !0
  }
];
window.customCards = window.customCards || [];
for (const t of oi)
  window.customCards.some((e) => e.type === t.type) || window.customCards.push(t);
console.info(
  `%c SIMPLE-CALENDARS %c v${ct} `,
  "color: white; background: #1a73e8; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;",
  "color: #1a73e8; background: #e8f0fe; font-weight: 700; border-radius: 0 4px 4px 0; padding: 2px 6px;"
);
