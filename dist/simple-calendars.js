const ht = "1.0.0", ue = "simple-calendar-month-card", re = "simple-calendar-week-card", se = "simple-calendar-day-card", et = "simple-calendar-card-editor", ze = "ha-calendar-month-card", Ne = "ha-calendar-week-card", Ie = "ha-calendar-day-card", S = [
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
], xe = "mdi:calendar", tt = {
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
    editorGeneralSection: "Configuración general",
    editorViewSection: "Opciones de vista",
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
    editorGeneralSection: "General settings",
    editorViewSection: "View options",
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
  var n;
  return t === "es" || t === "en" ? t : (((n = e == null ? void 0 : e.locale) == null ? void 0 : n.language) || (e == null ? void 0 : e.language) || "es").toLowerCase().startsWith("en") ? "en" : "es";
}
function pt(t, e) {
  var n;
  const i = ((n = e == null ? void 0 : e.locale) == null ? void 0 : n.language) || (e == null ? void 0 : e.language);
  return i && i.toLowerCase().startsWith(t) ? i : t === "es" ? "es-ES" : "en-US";
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de = globalThis, De = de.ShadowRoot && (de.ShadyCSS === void 0 || de.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ce = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let nt = class {
  constructor(e, i, n) {
    if (this._$cssResult$ = !0, n !== Ce) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = i;
  }
  get styleSheet() {
    let e = this.o;
    const i = this.t;
    if (De && e === void 0) {
      const n = i !== void 0 && i.length === 1;
      n && (e = Fe.get(i)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Fe.set(i, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const ut = (t) => new nt(typeof t == "string" ? t : t + "", void 0, Ce), Y = (t, ...e) => {
  const i = t.length === 1 ? t[0] : e.reduce((n, a, r) => n + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + t[r + 1], t[0]);
  return new nt(i, t, Ce);
}, gt = (t, e) => {
  if (De) t.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of e) {
    const n = document.createElement("style"), a = de.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = i.cssText, t.appendChild(n);
  }
}, Le = De ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let i = "";
  for (const n of e.cssRules) i += n.cssText;
  return ut(i);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: mt, defineProperty: ft, getOwnPropertyDescriptor: yt, getOwnPropertyNames: vt, getOwnPropertySymbols: bt, getPrototypeOf: _t } = Object, z = globalThis, Re = z.trustedTypes, $t = Re ? Re.emptyScript : "", fe = z.reactiveElementPolyfillSupport, X = (t, e) => t, he = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? $t : null;
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
} }, Se = (t, e) => !mt(t, e), Ue = { attribute: !0, type: String, converter: he, reflect: !1, useDefault: !1, hasChanged: Se };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let K = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, i = Ue) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(e, i), !i.noAccessor) {
      const n = Symbol(), a = this.getPropertyDescriptor(e, n, i);
      a !== void 0 && ft(this.prototype, e, a);
    }
  }
  static getPropertyDescriptor(e, i, n) {
    const { get: a, set: r } = yt(this.prototype, e) ?? { get() {
      return this[i];
    }, set(o) {
      this[i] = o;
    } };
    return { get: a, set(o) {
      const s = a == null ? void 0 : a.call(this);
      r == null || r.call(this, o), this.requestUpdate(e, s, n);
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
      const i = this.properties, n = [...vt(i), ...bt(i)];
      for (const a of n) this.createProperty(a, i[a]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const i = litPropertyMetadata.get(e);
      if (i !== void 0) for (const [n, a] of i) this.elementProperties.set(n, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, n] of this.elementProperties) {
      const a = this._$Eu(i, n);
      a !== void 0 && this._$Eh.set(a, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const i = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const a of n) i.unshift(Le(a));
    } else e !== void 0 && i.push(Le(e));
    return i;
  }
  static _$Eu(e, i) {
    const n = i.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const n of i.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return gt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((i) => {
      var n;
      return (n = i.hostConnected) == null ? void 0 : n.call(i);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((i) => {
      var n;
      return (n = i.hostDisconnected) == null ? void 0 : n.call(i);
    });
  }
  attributeChangedCallback(e, i, n) {
    this._$AK(e, n);
  }
  _$ET(e, i) {
    var r;
    const n = this.constructor.elementProperties.get(e), a = this.constructor._$Eu(e, n);
    if (a !== void 0 && n.reflect === !0) {
      const o = (((r = n.converter) == null ? void 0 : r.toAttribute) !== void 0 ? n.converter : he).toAttribute(i, n.type);
      this._$Em = e, o == null ? this.removeAttribute(a) : this.setAttribute(a, o), this._$Em = null;
    }
  }
  _$AK(e, i) {
    var r, o;
    const n = this.constructor, a = n._$Eh.get(e);
    if (a !== void 0 && this._$Em !== a) {
      const s = n.getPropertyOptions(a), l = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((r = s.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? s.converter : he;
      this._$Em = a;
      const d = l.fromAttribute(i, s.type);
      this[a] = d ?? ((o = this._$Ej) == null ? void 0 : o.get(a)) ?? d, this._$Em = null;
    }
  }
  requestUpdate(e, i, n, a = !1, r) {
    var o;
    if (e !== void 0) {
      const s = this.constructor;
      if (a === !1 && (r = this[e]), n ?? (n = s.getPropertyOptions(e)), !((n.hasChanged ?? Se)(r, i) || n.useDefault && n.reflect && r === ((o = this._$Ej) == null ? void 0 : o.get(e)) && !this.hasAttribute(s._$Eu(e, n)))) return;
      this.C(e, i, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, i, { useDefault: n, reflect: a, wrapped: r }, o) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, o ?? i ?? this[e]), r !== !0 || o !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (i = void 0), this._$AL.set(e, i)), a === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    var n;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, o] of this._$Ep) this[r] = o;
        this._$Ep = void 0;
      }
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [r, o] of a) {
        const { wrapped: s } = o, l = this[r];
        s !== !0 || this._$AL.has(r) || l === void 0 || this.C(r, void 0, o, l);
      }
    }
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (n = this._$EO) == null || n.forEach((a) => {
        var r;
        return (r = a.hostUpdate) == null ? void 0 : r.call(a);
      }), this.update(i)) : this._$EM();
    } catch (a) {
      throw e = !1, this._$EM(), a;
    }
    e && this._$AE(i);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var i;
    (i = this._$EO) == null || i.forEach((n) => {
      var a;
      return (a = n.hostUpdated) == null ? void 0 : a.call(n);
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
K.elementStyles = [], K.shadowRootOptions = { mode: "open" }, K[X("elementProperties")] = /* @__PURE__ */ new Map(), K[X("finalized")] = /* @__PURE__ */ new Map(), fe == null || fe({ ReactiveElement: K }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, je = (t) => t, pe = ee.trustedTypes, We = pe ? pe.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, at = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, ot = "?" + H, xt = `<${ot}>`, j = document, ie = () => j.createComment(""), ne = (t) => t === null || typeof t != "object" && typeof t != "function", Ae = Array.isArray, wt = (t) => Ae(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", ye = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ye = /-->/g, Be = />/g, L = RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ge = /'/g, Ve = /"/g, rt = /^(?:script|style|textarea|title)$/i, Et = (t) => (e, ...i) => ({ _$litType$: t, strings: e, values: i }), h = Et(1), Z = Symbol.for("lit-noChange"), g = Symbol.for("lit-nothing"), qe = /* @__PURE__ */ new WeakMap(), R = j.createTreeWalker(j, 129);
function st(t, e) {
  if (!Ae(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return We !== void 0 ? We.createHTML(e) : e;
}
const kt = (t, e) => {
  const i = t.length - 1, n = [];
  let a, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = Q;
  for (let s = 0; s < i; s++) {
    const l = t[s];
    let d, p, c = -1, m = 0;
    for (; m < l.length && (o.lastIndex = m, p = o.exec(l), p !== null); ) m = o.lastIndex, o === Q ? p[1] === "!--" ? o = Ye : p[1] !== void 0 ? o = Be : p[2] !== void 0 ? (rt.test(p[2]) && (a = RegExp("</" + p[2], "g")), o = L) : p[3] !== void 0 && (o = L) : o === L ? p[0] === ">" ? (o = a ?? Q, c = -1) : p[1] === void 0 ? c = -2 : (c = o.lastIndex - p[2].length, d = p[1], o = p[3] === void 0 ? L : p[3] === '"' ? Ve : Ge) : o === Ve || o === Ge ? o = L : o === Ye || o === Be ? o = Q : (o = L, a = void 0);
    const u = o === L && t[s + 1].startsWith("/>") ? " " : "";
    r += o === Q ? l + xt : c >= 0 ? (n.push(d), l.slice(0, c) + at + l.slice(c) + H + u) : l + H + (c === -2 ? s : u);
  }
  return [st(t, r + (t[i] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ae {
  constructor({ strings: e, _$litType$: i }, n) {
    let a;
    this.parts = [];
    let r = 0, o = 0;
    const s = e.length - 1, l = this.parts, [d, p] = kt(e, i);
    if (this.el = ae.createElement(d, n), R.currentNode = this.el.content, i === 2 || i === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (a = R.nextNode()) !== null && l.length < s; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const c of a.getAttributeNames()) if (c.endsWith(at)) {
          const m = p[o++], u = a.getAttribute(c).split(H), f = /([.?@])?(.*)/.exec(m);
          l.push({ type: 1, index: r, name: f[2], strings: u, ctor: f[1] === "." ? Ct : f[1] === "?" ? St : f[1] === "@" ? At : ge }), a.removeAttribute(c);
        } else c.startsWith(H) && (l.push({ type: 6, index: r }), a.removeAttribute(c));
        if (rt.test(a.tagName)) {
          const c = a.textContent.split(H), m = c.length - 1;
          if (m > 0) {
            a.textContent = pe ? pe.emptyScript : "";
            for (let u = 0; u < m; u++) a.append(c[u], ie()), R.nextNode(), l.push({ type: 2, index: ++r });
            a.append(c[m], ie());
          }
        }
      } else if (a.nodeType === 8) if (a.data === ot) l.push({ type: 2, index: r });
      else {
        let c = -1;
        for (; (c = a.data.indexOf(H, c + 1)) !== -1; ) l.push({ type: 7, index: r }), c += H.length - 1;
      }
      r++;
    }
  }
  static createElement(e, i) {
    const n = j.createElement("template");
    return n.innerHTML = e, n;
  }
}
function J(t, e, i = t, n) {
  var o, s;
  if (e === Z) return e;
  let a = n !== void 0 ? (o = i._$Co) == null ? void 0 : o[n] : i._$Cl;
  const r = ne(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== r && ((s = a == null ? void 0 : a._$AO) == null || s.call(a, !1), r === void 0 ? a = void 0 : (a = new r(t), a._$AT(t, i, n)), n !== void 0 ? (i._$Co ?? (i._$Co = []))[n] = a : i._$Cl = a), a !== void 0 && (e = J(t, a._$AS(t, e.values), a, n)), e;
}
class Dt {
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
    const { el: { content: i }, parts: n } = this._$AD, a = ((e == null ? void 0 : e.creationScope) ?? j).importNode(i, !0);
    R.currentNode = a;
    let r = R.nextNode(), o = 0, s = 0, l = n[0];
    for (; l !== void 0; ) {
      if (o === l.index) {
        let d;
        l.type === 2 ? d = new le(r, r.nextSibling, this, e) : l.type === 1 ? d = new l.ctor(r, l.name, l.strings, this, e) : l.type === 6 && (d = new Mt(r, this, e)), this._$AV.push(d), l = n[++s];
      }
      o !== (l == null ? void 0 : l.index) && (r = R.nextNode(), o++);
    }
    return R.currentNode = j, a;
  }
  p(e) {
    let i = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, i), i += n.strings.length - 2) : n._$AI(e[i])), i++;
  }
}
class le {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, i, n, a) {
    this.type = 2, this._$AH = g, this._$AN = void 0, this._$AA = e, this._$AB = i, this._$AM = n, this.options = a, this._$Cv = (a == null ? void 0 : a.isConnected) ?? !0;
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
    e = J(this, e, i), ne(e) ? e === g || e == null || e === "" ? (this._$AH !== g && this._$AR(), this._$AH = g) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : wt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== g && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(j.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var r;
    const { values: i, _$litType$: n } = e, a = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ae.createElement(st(n.h, n.h[0]), this.options)), n);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === a) this._$AH.p(i);
    else {
      const o = new Dt(a, this), s = o.u(this.options);
      o.p(i), this.T(s), this._$AH = o;
    }
  }
  _$AC(e) {
    let i = qe.get(e.strings);
    return i === void 0 && qe.set(e.strings, i = new ae(e)), i;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let n, a = 0;
    for (const r of e) a === i.length ? i.push(n = new le(this.O(ie()), this.O(ie()), this, this.options)) : n = i[a], n._$AI(r), a++;
    a < i.length && (this._$AR(n && n._$AB.nextSibling, a), i.length = a);
  }
  _$AR(e = this._$AA.nextSibling, i) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, i); e !== this._$AB; ) {
      const a = je(e).nextSibling;
      je(e).remove(), e = a;
    }
  }
  setConnected(e) {
    var i;
    this._$AM === void 0 && (this._$Cv = e, (i = this._$AP) == null || i.call(this, e));
  }
}
class ge {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, i, n, a, r) {
    this.type = 1, this._$AH = g, this._$AN = void 0, this.element = e, this.name = i, this._$AM = a, this.options = r, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = g;
  }
  _$AI(e, i = this, n, a) {
    const r = this.strings;
    let o = !1;
    if (r === void 0) e = J(this, e, i, 0), o = !ne(e) || e !== this._$AH && e !== Z, o && (this._$AH = e);
    else {
      const s = e;
      let l, d;
      for (e = r[0], l = 0; l < r.length - 1; l++) d = J(this, s[n + l], i, l), d === Z && (d = this._$AH[l]), o || (o = !ne(d) || d !== this._$AH[l]), d === g ? e = g : e !== g && (e += (d ?? "") + r[l + 1]), this._$AH[l] = d;
    }
    o && !a && this.j(e);
  }
  j(e) {
    e === g ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Ct extends ge {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === g ? void 0 : e;
  }
}
class St extends ge {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== g);
  }
}
class At extends ge {
  constructor(e, i, n, a, r) {
    super(e, i, n, a, r), this.type = 5;
  }
  _$AI(e, i = this) {
    if ((e = J(this, e, i, 0) ?? g) === Z) return;
    const n = this._$AH, a = e === g && n !== g || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, r = e !== g && (n === g || a);
    a && this.element.removeEventListener(this.name, this, n), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Mt {
  constructor(e, i, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    J(this, e);
  }
}
const ve = ee.litHtmlPolyfillSupport;
ve == null || ve(ae, le), (ee.litHtmlVersions ?? (ee.litHtmlVersions = [])).push("3.3.3");
const Tt = (t, e, i) => {
  const n = (i == null ? void 0 : i.renderBefore) ?? e;
  let a = n._$litPart$;
  if (a === void 0) {
    const r = (i == null ? void 0 : i.renderBefore) ?? null;
    n._$litPart$ = a = new le(e.insertBefore(ie(), r), r, void 0, i ?? {});
  }
  return a._$AI(t), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U = globalThis;
class T extends K {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Tt(i, this.renderRoot, this.renderOptions);
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
T._$litElement$ = !0, T.finalized = !0, (Xe = U.litElementHydrateSupport) == null || Xe.call(U, { LitElement: T });
const be = U.litElementPolyfillSupport;
be == null || be({ LitElement: T });
(U.litElementVersions ?? (U.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B = (t) => (e, i) => {
  i !== void 0 ? i.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ot = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Se }, Pt = (t = Ot, e, i) => {
  const { kind: n, metadata: a } = i;
  let r = globalThis.litPropertyMetadata.get(a);
  if (r === void 0 && globalThis.litPropertyMetadata.set(a, r = /* @__PURE__ */ new Map()), n === "setter" && ((t = Object.create(t)).wrapped = !0), r.set(i.name, t), n === "accessor") {
    const { name: o } = i;
    return { set(s) {
      const l = e.get.call(this);
      e.set.call(this, s), this.requestUpdate(o, l, t, !0, s);
    }, init(s) {
      return s !== void 0 && this.C(o, void 0, t, s), s;
    } };
  }
  if (n === "setter") {
    const { name: o } = i;
    return function(s) {
      const l = this[o];
      e.call(this, s), this.requestUpdate(o, l, t, !0, s);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function $(t) {
  return (e, i) => typeof i == "object" ? Pt(t, e, i) : ((n, a, r) => {
    const o = a.hasOwnProperty(r);
    return a.constructor.createProperty(r, n), o ? Object.getOwnPropertyDescriptor(a, r) : void 0;
  })(t, e, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function M(t) {
  return $({ ...t, state: !0, attribute: !1 });
}
function W(t, e = 0.16) {
  const i = (t || "").trim(), n = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i);
  if (n) {
    let o = n[1];
    o.length === 3 && (o = o.split("").map((p) => p + p).join(""));
    const s = parseInt(o.slice(0, 2), 16), l = parseInt(o.slice(2, 4), 16), d = parseInt(o.slice(4, 6), 16);
    return `rgba(${s}, ${l}, ${d}, ${e})`;
  }
  const a = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i.exec(i);
  if (a)
    return `rgba(${a[1]}, ${a[2]}, ${a[3]}, ${e})`;
  const r = Math.round(e * 100);
  return `color-mix(in srgb, ${i || "#1a73e8"} ${r}%, transparent)`;
}
const Me = Y`
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
    background: var(--cal-surface);
    color: var(--cal-text-primary);
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
function k(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0);
}
function me(t) {
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
  const i = Number(e[1]), n = Number(e[2]) - 1, a = Number(e[3]);
  return new Date(i, n, a, 0, 0, 0, 0);
}
function Ht(t) {
  const e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())), i = e.getUTCDay() || 7;
  e.setUTCDate(e.getUTCDate() + 4 - i);
  const n = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
  return Math.ceil(((e.getTime() - n.getTime()) / 864e5 + 1) / 7);
}
function zt(t, e, i) {
  const n = (i % 7 + 7) % 7, a = new Date(t, e, 1, 0, 0, 0, 0), r = new Date(t, e + 1, 0, 0, 0, 0, 0), o = (a.getDay() - n + 7) % 7, s = D(a, -o), l = (n + 6 - r.getDay() + 7) % 7, d = o + r.getDate() + l, p = k(/* @__PURE__ */ new Date()), c = [];
  for (let m = 0; m < d; m++) {
    const u = D(s, m);
    c.push({
      date: u,
      isCurrentMonth: u.getMonth() === e && u.getFullYear() === t,
      isToday: te(u, p),
      weekNumber: Ht(u)
    });
  }
  return c;
}
function Nt(t, e) {
  const i = (e % 7 + 7) % 7, n = k(t), a = (n.getDay() - i + 7) % 7;
  return D(n, -a);
}
function It(t, e, i = 7) {
  const n = i === 7 ? Nt(t, e) : k(t), a = [];
  for (let r = 0; r < i; r++)
    a.push(D(n, r));
  return a;
}
function Ft(t, e) {
  const i = (t % 7 + 7) % 7, n = new Date(2026, 10, 1), a = new Intl.DateTimeFormat(e, { weekday: "short" }), r = [];
  for (let o = 0; o < 7; o++) {
    const s = (i + o) % 7, l = D(n, s);
    r.push(N(a.format(l).replace(/\.$/, "")));
  }
  return r;
}
function Lt(t, e, i) {
  const n = t.start.getTime(), a = t.end.getTime(), r = e.getTime(), o = i.getTime();
  return a <= n ? n >= r && n < o : n < o && a > r;
}
function Te(t, e) {
  const i = k(e), n = me(e);
  return t.filter((a) => Lt(a, i, n)).sort((a, r) => a.allDay !== r.allDay ? a.allDay ? -1 : 1 : a.start.getTime() - r.start.getTime());
}
function Rt(t, e, i, n) {
  const a = Math.max(60, (n - i) * 60), r = k(e).getTime(), o = r + i * 36e5, s = r + n * 36e5, l = 25, d = t.filter((f) => !f.allDay).map((f) => {
    const _ = f.start.getTime(), v = Math.max(f.end.getTime(), _);
    if (v <= o || _ >= s)
      return null;
    const y = Math.max(_, o), b = Math.min(v, s), E = (y - o) / 6e4, V = Math.max(E + 1, (b - o) / 6e4), q = Math.min(a, Math.max(V, E + l));
    return {
      event: f,
      startMin: E,
      endMin: V,
      visualEndMin: q,
      col: 0,
      colSpan: 1
    };
  }).filter((f) => f !== null).sort((f, _) => f.startMin !== _.startMin ? f.startMin - _.startMin : _.visualEndMin - f.visualEndMin);
  if (d.length === 0) return [];
  const p = [];
  let c = [], m = -1;
  for (const f of d)
    c.length === 0 || f.startMin < m ? (c.push(f), m = Math.max(m, f.visualEndMin)) : (p.push(c), c = [f], m = f.visualEndMin);
  c.length > 0 && p.push(c);
  const u = [];
  for (const f of p) {
    const _ = [];
    for (const y of f) {
      let b = -1;
      for (let E = 0; E < _.length; E++)
        if (_[E] <= y.startMin) {
          b = E;
          break;
        }
      b === -1 ? (b = _.length, _.push(y.visualEndMin)) : _[b] = y.visualEndMin, y.col = b;
    }
    const v = Math.max(1, _.length);
    for (const y of f) {
      let b = 1;
      for (; y.col + b < v; ) {
        const dt = y.col + b;
        if (f.some(
          (ce) => ce !== y && ce.col === dt && ce.startMin < y.visualEndMin && ce.visualEndMin > y.startMin
        )) break;
        b++;
      }
      y.colSpan = b;
      const E = y.startMin / a * 100, V = (y.visualEndMin - y.startMin) / a * 100, q = y.col / v * 100, ct = y.colSpan / v * 100;
      u.push({
        event: y.event,
        top: E,
        height: Math.max(V, 1.5),
        left: q,
        width: ct
      });
    }
  }
  return u;
}
function Ut(t, e) {
  const i = new Date(2026, 0, 1, t % 24, 0, 0, 0);
  return new Intl.DateTimeFormat(e, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(i);
}
function I(t, e) {
  return new Intl.DateTimeFormat(e, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(t);
}
function jt(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    month: "long",
    year: "numeric"
  }).format(t);
  return N(i);
}
function Wt(t, e) {
  if (t.length === 0) return "";
  const i = t[0], n = t[t.length - 1], a = i.getMonth() === n.getMonth() && i.getFullYear() === n.getFullYear(), r = i.getFullYear() === n.getFullYear();
  if (a) {
    const l = N(
      new Intl.DateTimeFormat(e, { month: "long", year: "numeric" }).format(i)
    );
    return `${i.getDate()} – ${n.getDate()} ${l}`;
  }
  if (r) {
    const l = new Intl.DateTimeFormat(e, { day: "numeric", month: "short" }).format(i), d = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(n);
    return `${l} – ${d}`;
  }
  const o = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(i), s = new Intl.DateTimeFormat(e, { day: "numeric", month: "short", year: "numeric" }).format(n);
  return `${o} – ${s}`;
}
function lt(t, e) {
  const i = new Intl.DateTimeFormat(e, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(t);
  return N(i);
}
function Yt(t, e, i, n) {
  if (t.allDay) {
    const d = k(t.start), p = D(k(t.end), -1), c = new Intl.DateTimeFormat(e, {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    return p.getTime() > d.getTime() ? `${c.format(d)} – ${c.format(p)} (${n})` : `${c.format(d)} · ${n}`;
  }
  const a = te(t.start, t.end), r = new Intl.DateTimeFormat(e, {
    weekday: "short",
    day: "numeric",
    month: "short"
  }), o = I(t.start, e), s = I(t.end, e);
  if (a)
    return `${N(r.format(t.start))}, ${o} – ${s}`;
  const l = i === "es" ? "a" : "to";
  return `${N(r.format(t.start))} ${o} ${l} ${N(r.format(t.end))} ${s}`;
}
function N(t) {
  return t && t.charAt(0).toUpperCase() + t.slice(1);
}
const Bt = 6e4, we = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map();
function Gt() {
  we.clear();
}
function $e(t, e) {
  const i = Array.isArray(t.entities) && t.entities.length > 0 ? t.entities : t.entity ? [t.entity] : [], n = [];
  return i.forEach((a, r) => {
    var c, m, u, f, _, v;
    const o = typeof a == "string" ? { entity: a } : a, s = ((o == null ? void 0 : o.entity) || "").trim();
    if (!s) return;
    const l = (c = e == null ? void 0 : e.states) == null ? void 0 : c[s], d = typeof ((m = l == null ? void 0 : l.attributes) == null ? void 0 : m.friendly_name) == "string" ? l.attributes.friendly_name : void 0, p = typeof ((u = l == null ? void 0 : l.attributes) == null ? void 0 : u.icon) == "string" ? l.attributes.icon : void 0;
    n.push({
      entity: s,
      name: ((f = o.name) == null ? void 0 : f.trim()) || d || s,
      color: ((_ = o.color) == null ? void 0 : _.trim()) || S[r % S.length],
      icon: ((v = o.icon) == null ? void 0 : v.trim()) || p || xe,
      hidden: !!o.hidden
    });
  }), n;
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
function Vt(t, e, i) {
  const n = Je(t.start), a = Je(t.end);
  if (Number.isNaN(n.date.getTime()))
    return null;
  const r = n.isDateOnly, o = n.date;
  let s = Number.isNaN(a.date.getTime()) ? new Date(o) : a.date;
  r && s.getTime() <= o.getTime() ? s = D(o, 1) : !r && s.getTime() < o.getTime() && (s = new Date(o));
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
async function qt(t, e, i, n, a = !1) {
  const r = i.toISOString(), o = n.toISOString(), s = `${e.entity}|${e.name}|${e.color}|${e.icon}|${r}|${o}`;
  if (!a) {
    const p = we.get(s);
    if (p && Date.now() - p.timestamp < Bt)
      return p.events;
    const c = _e.get(s);
    if (c)
      return c;
  }
  const l = `calendars/${encodeURIComponent(e.entity)}?start=${encodeURIComponent(
    r
  )}&end=${encodeURIComponent(o)}`, d = t.callApi("GET", l).then((p) => {
    const c = (Array.isArray(p) ? p : []).map((m, u) => Vt(m, e, u)).filter((m) => m !== null);
    return we.set(s, {
      timestamp: Date.now(),
      events: c
    }), c;
  }).finally(() => {
    _e.delete(s);
  });
  return _e.set(s, d), d;
}
async function Kt(t, e, i, n, a = !1) {
  if (!t || e.length === 0)
    return { events: [], failedEntities: [] };
  const r = await Promise.allSettled(
    e.map(
      (l) => qt(t, l, i, n, a)
    )
  ), o = [], s = [];
  return r.forEach((l, d) => {
    l.status === "fulfilled" ? o.push(...l.value) : s.push(e[d].entity);
  }), o.sort((l, d) => l.start.getTime() - d.start.getTime()), { events: o, failedEntities: s };
}
var Zt = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, F = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Jt(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = (n ? o(e, i, a) : o(a)) || a);
  return n && a && Zt(e, i, a), a;
};
let A = class extends T {
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
    var t, e, i, n, a, r, o;
    return h`
      <div class="header-root">
        <div class="header-top">
          <div class="title-group">
            ${this.cardTitle ? h`<div class="card-subtitle">${this.cardTitle}</div>` : g}
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
              title=${((n = this.strings) == null ? void 0 : n.next) || "Next"}
              aria-label=${((a = this.strings) == null ? void 0 : a.next) || "Next"}
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
            ` : g}
      </div>
    `;
  }
};
A.styles = Y`
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
], A.prototype, "cardTitle", 2);
F([
  $({ type: String })
], A.prototype, "periodLabel", 2);
F([
  $({ type: Array })
], A.prototype, "entities", 2);
F([
  $({ attribute: !1 })
], A.prototype, "hiddenEntities", 2);
F([
  $({ type: Boolean })
], A.prototype, "showEntityToggles", 2);
F([
  $({ type: Boolean })
], A.prototype, "loading", 2);
F([
  $({ attribute: !1 })
], A.prototype, "strings", 2);
A = F([
  B("ha-calendar-shared-header")
], A);
var Qt = Object.defineProperty, Xt = Object.getOwnPropertyDescriptor, G = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Xt(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = (n ? o(e, i, a) : o(a)) || a);
  return n && a && Qt(e, i, a), a;
};
let O = class extends T {
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
    var i, n, a, r, o, s, l;
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
            aria-label=${((n = this.strings) == null ? void 0 : n.close) || "Close"}
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
            <div class="detail-label">${((a = this.strings) == null ? void 0 : a.when) || "When"}</div>
            <div class="detail-value">${e}</div>
          </div>
        </div>

        ${t.location ? h`
              <div class="detail-row">
                <ha-icon icon="mdi:map-marker-outline"></ha-icon>
                <div>
                  <div class="detail-label">${((r = this.strings) == null ? void 0 : r.location) || "Location"}</div>
                  <div class="detail-value">${t.location}</div>
                </div>
              </div>
            ` : g}

        ${t.description ? h`
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
    var e, i, n;
    if (!this.dayDate) return g;
    const t = lt(this.dayDate, this.locale);
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
        ${this.dayEvents.length === 0 ? h`<div class="empty-day">${((n = this.strings) == null ? void 0 : n.noEvents) || "No events"}</div>` : this.dayEvents.map((a) => {
      var o;
      const r = a.allDay ? ((o = this.strings) == null ? void 0 : o.allDay) || "All day" : `${I(a.start, this.locale)} – ${I(
        a.end,
        this.locale
      )}`;
      return h`
                <button
                  type="button"
                  class="day-event-row"
                  style="--ev-color: ${a.color}; --ev-bg: ${W(
        a.color,
        0.12
      )};"
                  @click=${() => this._selectEventFromList(a)}
                >
                  <ha-icon class="row-icon" .icon=${a.icon}></ha-icon>
                  <div class="row-main">
                    <div class="row-title">${a.summary}</div>
                    <div class="row-sub">
                      <span>${r}</span>
                      <span>·</span>
                      <span>${a.calendarName}</span>
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
    return !(this.event || this.dayDate) ? g : h`
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
O.styles = Y`
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
  B("ha-calendar-event-dialog")
], O);
var ei = Object.defineProperty, P = (t, e, i, n) => {
  for (var a = void 0, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = o(e, i, a) || a);
  return a && ei(e, i, a), a;
};
function Oe(t) {
  const e = Object.keys((t == null ? void 0 : t.states) || {}).filter((i) => i.startsWith("calendar.")).slice(0, 3);
  return e.length > 0 ? e.map((i, n) => {
    var s, l, d;
    const a = (s = t == null ? void 0 : t.states) == null ? void 0 : s[i], r = typeof ((l = a == null ? void 0 : a.attributes) == null ? void 0 : l.friendly_name) == "string" ? a.attributes.friendly_name : void 0, o = typeof ((d = a == null ? void 0 : a.attributes) == null ? void 0 : d.icon) == "string" ? a.attributes.icon : "mdi:calendar";
    return {
      entity: i,
      name: r,
      color: S[n % S.length],
      icon: o
    };
  }) : [
    {
      entity: "calendar.personal",
      name: "Personal",
      color: S[0],
      icon: "mdi:calendar-account"
    },
    {
      entity: "calendar.trabajo",
      name: "Trabajo",
      color: S[1],
      icon: "mdi:briefcase-outline"
    }
  ];
}
const He = class He extends T {
  constructor() {
    super(...arguments), this._anchorDate = k(/* @__PURE__ */ new Date()), this._events = [], this._loading = !1, this._failedEntities = [], this._hiddenEntities = /* @__PURE__ */ new Set(), this._selectedEvent = null, this._selectedDayDate = null, this._lastFetchKey = "", this._fetchRequestId = 0;
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
    const i = $e(this._config, this.hass);
    this._hiddenEntities = new Set(
      i.filter((n) => n.hidden).map((n) => n.entity)
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
    const i = $e(this._config, this.hass);
    if (i.length === 0) {
      this._events = [], this._failedEntities = [], this._lastFetchKey = "";
      return;
    }
    const { start: n, end: a } = this.getFetchRange(), o = `${i.map((s) => `${s.entity}|${s.name}|${s.color}|${s.icon}`).join(";")}::${n.toISOString()}::${a.toISOString()}`;
    !e && o === this._lastFetchKey || (this._lastFetchKey = o, this._loadEvents(i, n, a, e));
  }
  async _loadEvents(e, i, n, a) {
    if (!this.hass) return;
    const r = ++this._fetchRequestId;
    this._loading = !0;
    try {
      const o = await Kt(
        this.hass,
        e,
        i,
        n,
        a
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
    Gt(), this._triggerFetchIfNeeded(!0);
  }
  _handleToggleEntity(e) {
    var a;
    const i = (a = e.detail) == null ? void 0 : a.entity;
    if (!i) return;
    const n = new Set(this._hiddenEntities);
    n.has(i) ? n.delete(i) : n.add(i), this._hiddenEntities = n;
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
    const i = this._selectedDayDate, n = new Date(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0, 0), a = new Date(i.getFullYear(), i.getMonth(), i.getDate() + 1, 0, 0, 0, 0);
    return e.filter((r) => {
      const o = r.start.getTime(), s = r.end.getTime();
      return s <= o ? o >= n.getTime() && o < a.getTime() : o < a.getTime() && s > n.getTime();
    });
  }
  render() {
    if (!this._config) return g;
    const e = it(this._config.language, this.hass), i = pt(e, this.hass), n = tt[e], a = $e(this._config, this.hass), r = this._events.filter(
      (l) => !this._hiddenEntities.has(l.calendarEntity)
    ), o = this._config.show_header !== !1, s = this._config.show_entity_toggles !== !1;
    return h`
      <ha-card>
        <div class="loading-bar ${this._loading ? "active" : ""}"></div>

        ${o ? h`
              <ha-calendar-shared-header
                .cardTitle=${this._config.title || ""}
                .periodLabel=${this.getPeriodLabel(i)}
                .entities=${a}
                .hiddenEntities=${this._hiddenEntities}
                .showEntityToggles=${s}
                .loading=${this._loading}
                .strings=${n}
                @cal-prev=${() => this.navigatePrev()}
                @cal-today=${() => this.navigateToday()}
                @cal-next=${() => this.navigateNext()}
                @cal-refresh=${() => this._handleRefresh()}
                @cal-toggle-entity=${this._handleToggleEntity}
              ></ha-calendar-shared-header>
            ` : g}

        ${this._failedEntities.length > 0 ? h`
              <div class="status-banner" role="status">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                <span>
                  ${n.errorLoading}: ${this._failedEntities.join(", ")}
                </span>
              </div>
            ` : g}

        ${a.length === 0 ? h`
              <div class="empty-state">
                <ha-icon icon="mdi:calendar-blank-multiple"></ha-icon>
                <div class="empty-state-title">${n.noCalendars}</div>
                <div class="empty-state-hint">${n.noCalendarsHint}</div>
              </div>
            ` : h`
              <div
                class="card-content-wrap"
                @cal-event-click=${this._handleEventClick}
              >
                ${this.renderCalendarBody(
      r,
      a,
      i,
      e,
      n
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
        .strings=${n}
        @cal-dialog-close=${this._handleDialogClose}
        @cal-select-event=${this._handleSelectEventFromDay}
      ></ha-calendar-event-dialog>
    `;
  }
};
He.styles = [Me];
let x = He;
P([
  $({ attribute: !1 })
], x.prototype, "hass");
P([
  M()
], x.prototype, "_config");
P([
  M()
], x.prototype, "_anchorDate");
P([
  M()
], x.prototype, "_events");
P([
  M()
], x.prototype, "_loading");
P([
  M()
], x.prototype, "_failedEntities");
P([
  M()
], x.prototype, "_hiddenEntities");
P([
  M()
], x.prototype, "_selectedEvent");
P([
  M()
], x.prototype, "_selectedDayDate");
var ti = Object.getOwnPropertyDescriptor, ii = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ti(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = o(a) || a);
  return a;
};
let Ee = class extends x {
  static getStubConfig(t) {
    return {
      type: `custom:${ue}`,
      entities: Oe(t),
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
      end: me(t[t.length - 1].date)
    };
  }
  getPeriodLabel(t) {
    return jt(this._anchorDate, t);
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
    return zt(
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
  renderCalendarBody(t, e, i, n, a) {
    const r = !!this._config.show_week_numbers, o = !!this._config.compact, s = Math.max(1, this._config.max_events_per_day ?? 3), l = Ft(this.getFirstDayOfWeek(), i), d = this._getGridDays(), p = [];
    for (let c = 0; c < d.length; c += 7)
      p.push(d.slice(c, c + 7));
    return h`
      <div class="month-grid-wrap ${o ? "is-compact" : ""}">
        <!-- Weekday Headers -->
        <div
          class="weekday-row ${r ? "with-weeks" : ""}"
          role="row"
        >
          ${r ? h`<div class="week-col-header">${a.weekAbbr}</div>` : g}
          ${l.map(
      (c) => h`<div class="weekday-cell">${c}</div>`
    )}
        </div>

        <!-- Month Grid Weeks -->
        <div class="weeks-container">
          ${p.map(
      (c) => h`
              <div class="week-row ${r ? "with-weeks" : ""}">
                ${r ? h`<div class="week-number-cell">${c[0].weekNumber}</div>` : g}
                ${c.map((m) => {
        const u = Te(t, m.date), f = u.slice(0, s), _ = u.length - f.length;
        return h`
                    <div
                      class="day-cell ${m.isCurrentMonth ? "" : "outside-month"} ${m.isToday ? "is-today" : ""}"
                      @click=${() => {
          u.length > 0 && this._openDayList(m.date);
        }}
                    >
                      <div class="day-cell-top">
                        <span class="day-num ${m.isToday ? "today-circle" : ""}">
                          ${m.date.getDate()}
                        </span>
                      </div>

                      <div class="day-events">
                        ${f.map(
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
                                  title=${`${I(v.start, i)} ${v.summary} (${v.calendarName})`}
                                  @click=${(y) => this._onEventPillClick(y, v)}
                                >
                                  <span class="pill-dot"></span>
                                  <span class="pill-time">
                                    ${I(v.start, i)}
                                  </span>
                                  <span class="pill-text">${v.summary}</span>
                                </button>
                              `
        )}

                        ${_ > 0 ? h`
                              <button
                                type="button"
                                class="more-btn"
                                @click=${(v) => {
          v.stopPropagation(), this._openDayList(m.date);
        }}
                              >
                                +${_} ${a.moreEvents}
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
    `;
  }
};
Ee.styles = [
  Me,
  Y`
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
Ee = ii([
  B(ue)
], Ee);
var ni = Object.defineProperty, ai = Object.getOwnPropertyDescriptor, C = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ai(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = (n ? o(e, i, a) : o(a)) || a);
  return n && a && ni(e, i, a), a;
};
let w = class extends T {
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
        const e = this._hourHeight, i = this._safeStartHour, n = Math.max(i, Math.min(8, this._safeEndHour - 2));
        t.scrollTop = Math.max(0, (n - i) * e - 16), this._hasAutoScrolled = !0;
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
    const e = te(t, this._now), i = N(
      new Intl.DateTimeFormat(this.locale, { weekday: "short" }).format(t).replace(/\.$/, "")
    ), n = t.getDate();
    return h`
      <div class="day-header-cell ${e ? "is-today" : ""}">
        <span class="day-weekday">${i}</span>
        <span class="day-number ${e ? "today-badge" : ""}">${n}</span>
      </div>
    `;
  }
  render() {
    var m;
    const t = this._safeStartHour, e = this._safeEndHour, i = this._hourHeight, n = [];
    for (let u = t; u < e; u++)
      n.push(u);
    const a = n.length * i, r = Math.max(1, this.days.length), o = r > 1 ? "82px" : "0px", s = this.days.map((u) => Te(this.events, u)), l = s.some((u) => u.some((f) => f.allDay)), d = this._now.getHours() * 60 + this._now.getMinutes(), p = d >= t * 60 && d <= e * 60, c = p ? (d - t * 60) / ((e - t) * 60) * 100 : 0;
    return h`
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

            ${l ? h`
                  <div class="all-day-row ${this.compactAllDay ? "compact" : ""}">
                    <div class="gutter-all-day">
                      <span>${((m = this.strings) == null ? void 0 : m.allDay) || "All day"}</span>
                    </div>
                    <div class="day-columns-grid all-day-columns">
                      ${s.map((u, f) => {
      const _ = u.filter((y) => y.allDay), v = te(this.days[f], this._now);
      return h`
                          <div class="all-day-cell ${v ? "is-today-col" : ""}">
                            ${_.map(
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
                ` : g}
          </div>

          <!-- Hourly schedule body -->
          <div class="time-body" style="height: ${a}px;">
            <div class="time-gutter">
              ${n.map(
      (u) => h`
                  <div class="hour-label" style="height: ${i}px;">
                    <span>${Ut(u, this.locale)}</span>
                  </div>
                `
    )}
            </div>

            <div class="day-columns-grid time-columns">
              <!-- Background hour lines -->
              <div class="hour-lines" aria-hidden="true">
                ${n.map(
      () => h`
                    <div class="hour-line" style="height: ${i}px;">
                      <div class="half-hour-line"></div>
                    </div>
                  `
    )}
              </div>

              ${this.days.map((u, f) => {
      const _ = te(u, this._now), v = Rt(
        s[f],
        u,
        t,
        e
      );
      return h`
                  <div class="day-col ${_ ? "is-today-col" : ""}">
                    ${v.map((y) => {
        const b = y.event, E = W(b.color, 0.16), V = W(b.color, 0.26), q = `${I(
          b.start,
          this.locale
        )} – ${I(b.end, this.locale)}`;
        return h`
                        <button
                          type="button"
                          class="timed-event"
                          style="
                            top: ${y.top}%;
                            height: ${y.height}%;
                            left: calc(${y.left}% + 2px);
                            width: calc(${y.width}% - 4px);
                            --ev-color: ${b.color};
                            --ev-bg: ${E};
                            --ev-bg-hover: ${V};
                          "
                          title=${`${b.summary} (${q}) · ${b.calendarName}`}
                          @click=${() => this._onEventClick(b)}
                        >
                          <div class="timed-ev-header">
                            <ha-icon class="ev-icon" .icon=${b.icon}></ha-icon>
                            <span class="timed-ev-title">${b.summary}</span>
                          </div>
                          <div class="timed-ev-time">${q}</div>
                          ${this.detailedMode && b.location ? h`
                                <div class="timed-ev-meta">
                                  <ha-icon icon="mdi:map-marker-outline"></ha-icon>
                                  <span>${b.location}</span>
                                </div>
                              ` : g}
                          ${this.detailedMode && b.description ? h`<div class="timed-ev-desc">${b.description}</div>` : g}
                        </button>
                      `;
      })}
                    ${_ && p ? h`
                          <div
                            class="now-indicator"
                            style="top: ${c}%;"
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
w.styles = Y`
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
  $({ type: Array })
], w.prototype, "days", 2);
C([
  $({ type: Array })
], w.prototype, "events", 2);
C([
  $({ type: Number })
], w.prototype, "startHour", 2);
C([
  $({ type: Number })
], w.prototype, "endHour", 2);
C([
  $({ type: String })
], w.prototype, "locale", 2);
C([
  $({ type: String })
], w.prototype, "lang", 2);
C([
  $({ attribute: !1 })
], w.prototype, "strings", 2);
C([
  $({ type: Boolean })
], w.prototype, "detailedMode", 2);
C([
  $({ type: Boolean })
], w.prototype, "compactAllDay", 2);
C([
  M()
], w.prototype, "_now", 2);
w = C([
  B("ha-calendar-time-grid")
], w);
var oi = Object.getOwnPropertyDescriptor, ri = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? oi(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = o(a) || a);
  return a;
};
let Qe = class extends x {
  static getStubConfig(t) {
    return {
      type: `custom:${re}`,
      entities: Oe(t),
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
    return It(
      this._anchorDate,
      this.getFirstDayOfWeek(),
      this._getDaysCount()
    );
  }
  getFetchRange() {
    const t = this._getVisibleDays();
    return {
      start: t[0],
      end: me(t[t.length - 1])
    };
  }
  getPeriodLabel(t) {
    return Wt(this._getVisibleDays(), t);
  }
  navigatePrev() {
    this._anchorDate = D(this._anchorDate, -this._getDaysCount());
  }
  navigateNext() {
    this._anchorDate = D(this._anchorDate, this._getDaysCount());
  }
  navigateToday() {
    this._anchorDate = k(/* @__PURE__ */ new Date());
  }
  renderCalendarBody(t, e, i, n, a) {
    const r = this._getVisibleDays(), o = this._config.start_hour ?? 0, s = this._config.end_hour ?? 24, l = !!this._config.compact_all_day;
    return h`
      <ha-calendar-time-grid
        .days=${r}
        .events=${t}
        .startHour=${o}
        .endHour=${s}
        .locale=${i}
        .lang=${n}
        .strings=${a}
        .compactAllDay=${l}
        .detailedMode=${!1}
      ></ha-calendar-time-grid>
    `;
  }
};
Qe = ri([
  B(re)
], Qe);
var si = Object.getOwnPropertyDescriptor, li = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? si(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = o(a) || a);
  return a;
};
let ke = class extends x {
  static getStubConfig(t) {
    return {
      type: `custom:${se}`,
      entities: Oe(t),
      start_hour: 0,
      end_hour: 24,
      show_header: !0,
      show_entity_toggles: !0,
      show_agenda_summary: !0
    };
  }
  getCardSize() {
    return 7;
  }
  getGridOptions() {
    return {
      columns: 6,
      min_columns: 4,
      rows: 7,
      min_rows: 5
    };
  }
  getFetchRange() {
    return {
      start: k(this._anchorDate),
      end: me(this._anchorDate)
    };
  }
  getPeriodLabel(t) {
    return lt(this._anchorDate, t);
  }
  navigatePrev() {
    this._anchorDate = D(this._anchorDate, -1);
  }
  navigateNext() {
    this._anchorDate = D(this._anchorDate, 1);
  }
  navigateToday() {
    this._anchorDate = k(/* @__PURE__ */ new Date());
  }
  renderCalendarBody(t, e, i, n, a) {
    const r = this._config.start_hour ?? 0, o = this._config.end_hour ?? 24, s = this._config.show_agenda_summary !== !1, l = Te(t, this._anchorDate), d = l.filter((c) => c.allDay).length, p = l.length - d;
    return h`
      ${s ? h`
            <div class="day-summary-bar">
              <div class="summary-totals">
                <span class="summary-pill">
                  <ha-icon icon="mdi:calendar-check-outline"></ha-icon>
                  <span>${l.length} ${a.eventsCount}</span>
                </span>
                ${l.length === 0 ? h`<span class="summary-empty">${a.noEvents}</span>` : h`
                      ${d > 0 ? h`<span class="summary-sub">${d} ${a.allDayEvents}</span>` : g}
                      ${p > 0 ? h`<span class="summary-sub">${p} ${a.timedEvents}</span>` : g}
                    `}
              </div>

              <div class="summary-calendars">
                ${e.filter((c) => !this._hiddenEntities.has(c.entity)).map((c) => {
      const m = l.filter(
        (u) => u.calendarEntity === c.entity
      ).length;
      return m === 0 ? g : h`
                      <span
                        class="cal-count-badge"
                        style="background: ${W(
        c.color,
        0.14
      )}; color: ${c.color};"
                      >
                        <ha-icon .icon=${c.icon}></ha-icon>
                        <span>${c.name}: ${m}</span>
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
        .lang=${n}
        .strings=${a}
        .detailedMode=${!0}
      ></ha-calendar-time-grid>
    `;
  }
};
ke.styles = [
  Me,
  Y`
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
ke = li([
  B(se)
], ke);
var ci = Object.defineProperty, di = Object.getOwnPropertyDescriptor, Pe = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? di(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = (n ? o(e, i, a) : o(a)) || a);
  return n && a && ci(e, i, a), a;
};
let oe = class extends T {
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
    const i = this._getEntities(), n = { ...i[t], ...e };
    n.name || delete n.name, n.icon || delete n.icon, n.color || delete n.color, i[t] = n, this._updateEntities(i);
  }
  _addEntity() {
    var r;
    const t = this._getEntities(), e = new Set(t.map((o) => o.entity)), i = Object.keys(((r = this.hass) == null ? void 0 : r.states) || {}).filter((o) => o.startsWith("calendar.")).sort(), n = i.find((o) => !e.has(o)) || i[0] || "", a = S[t.length % S.length];
    t.push({
      entity: n,
      color: a,
      icon: xe
    }), this._updateEntities(t);
  }
  _removeEntity(t) {
    const e = this._getEntities();
    e.splice(t, 1), this._updateEntities(e);
  }
  _moveEntity(t, e) {
    const i = this._getEntities(), n = t + e;
    if (n < 0 || n >= i.length) return;
    const [a] = i.splice(t, 1);
    i.splice(n, 0, a), this._updateEntities(i);
  }
  _getCardKind() {
    var e;
    const t = (((e = this._config) == null ? void 0 : e.type) || "").toLowerCase();
    return t.includes(re) || t.includes("week") ? "week" : t.includes(se) || t.includes("day") ? "day" : "month";
  }
  _normalizeHexForColorInput(t, e = 0) {
    const i = (t || "").trim();
    return /^#[0-9a-f]{6}$/i.test(i) ? i : S[e % S.length];
  }
  _renderEntitySelector(t, e) {
    var a;
    if (!!customElements.get("ha-entity-picker"))
      return h`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${t.entity || ""}
          .includeDomains=${["calendar"]}
          allow-custom-entity
          @value-changed=${(r) => this._updateEntityAt(e, { entity: r.detail.value })}
        ></ha-entity-picker>
      `;
    const n = Object.keys(((a = this.hass) == null ? void 0 : a.states) || {}).filter((r) => r.startsWith("calendar.")).sort();
    return h`
      <div class="entity-fallback-inputs">
        ${n.length > 0 ? h`
              <select
                .value=${n.includes(t.entity) ? t.entity : ""}
                @change=${(r) => {
      const o = r.target.value;
      o && this._updateEntityAt(e, { entity: o });
    }}
              >
                <option value="">-- calendar.* --</option>
                ${n.map((r) => {
      var s, l, d, p;
      const o = (p = (d = (l = (s = this.hass) == null ? void 0 : s.states) == null ? void 0 : l[r]) == null ? void 0 : d.attributes) == null ? void 0 : p.friendly_name;
      return h`
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
    return customElements.get("ha-icon-picker") ? h`
        <ha-icon-picker
          .hass=${this.hass}
          .value=${t.icon || ""}
          @value-changed=${(n) => this._updateEntityAt(e, { icon: n.detail.value })}
        ></ha-icon-picker>
      ` : h`
      <div class="icon-preview-input">
        <ha-icon .icon=${t.icon || xe}></ha-icon>
        <input
          type="text"
          .value=${t.icon || ""}
          placeholder="mdi:calendar"
          @change=${(n) => this._updateEntityAt(e, {
      icon: n.target.value.trim()
    })}
        />
      </div>
    `;
  }
  render() {
    if (!this._config) return g;
    const t = it(this._config.language, this.hass), e = tt[t], i = this._getCardKind(), n = this._getEntities(), a = this._config.first_day_of_week ?? 1;
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
              @change=${(r) => this._updateField("title", r.target.value)}
            />
          </div>

          <div class="two-col">
            <div class="field">
              <label>${e.editorFirstDay}</label>
              <select
                .value=${String(a)}
                @change=${(r) => this._updateField(
      "first_day_of_week",
      Number(r.target.value)
    )}
              >
                <option value="1" ?selected=${a === 1}>
                  ${e.editorMonday}
                </option>
                <option value="0" ?selected=${a === 0}>
                  ${e.editorSunday}
                </option>
              </select>
            </div>

            <div class="field">
              <label>${e.editorLanguage}</label>
              <select
                .value=${this._config.language || ""}
                @change=${(r) => this._updateField(
      "language",
      r.target.value || void 0
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
                @change=${(r) => this._updateField(
      "show_header",
      r.target.checked
    )}
              />
              <span>${e.editorShowHeader}</span>
            </label>

            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${this._config.show_entity_toggles !== !1}
                @change=${(r) => this._updateField(
      "show_entity_toggles",
      r.target.checked
    )}
              />
              <span>${e.editorShowToggles}</span>
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

          ${n.length === 0 ? h`<div class="empty-entities">${e.editorNoEntities}</div>` : h`
                <div class="entities-list">
                  ${n.map((r, o) => {
      const s = this._normalizeHexForColorInput(
        r.color,
        o
      );
      return h`
                      <div class="entity-card">
                        <div class="entity-card-top">
                          <span
                            class="entity-badge"
                            style="--badge-color: ${s};"
                          >
                            #${o + 1}
                          </span>
                          <div class="entity-actions">
                            <button
                              type="button"
                              class="mini-icon-btn"
                              ?disabled=${o === 0}
                              @click=${() => this._moveEntity(o, -1)}
                            >
                              <ha-icon icon="mdi:arrow-up"></ha-icon>
                            </button>
                            <button
                              type="button"
                              class="mini-icon-btn"
                              ?disabled=${o === n.length - 1}
                              @click=${() => this._moveEntity(o, 1)}
                            >
                              <ha-icon icon="mdi:arrow-down"></ha-icon>
                            </button>
                            <button
                              type="button"
                              class="mini-icon-btn danger"
                              title=${e.editorRemove}
                              @click=${() => this._removeEntity(o)}
                            >
                              <ha-icon icon="mdi:delete-outline"></ha-icon>
                            </button>
                          </div>
                        </div>

                        <div class="field">
                          <label>${e.editorEntity}</label>
                          ${this._renderEntitySelector(r, o)}
                        </div>

                        <div class="two-col">
                          <div class="field">
                            <label>${e.editorCustomName}</label>
                            <input
                              type="text"
                              .value=${r.name || ""}
                              placeholder="Ej. Personal"
                              @change=${(l) => this._updateEntityAt(o, {
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
                                @input=${(l) => this._updateEntityAt(o, {
        color: l.target.value
      })}
                              />
                              <input
                                type="text"
                                .value=${r.color || s}
                                @change=${(l) => this._updateEntityAt(o, {
        color: l.target.value.trim()
      })}
                              />
                            </div>
                          </div>
                        </div>

                        <div class="field">
                          <label>${e.editorCustomIcon}</label>
                          ${this._renderIconInput(r, o)}
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
    return h`
      <div class="two-col">
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
      </div>

      <div class="toggles-list">
        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${t.show_agenda_summary !== !1}
            @change=${(i) => this._updateField(
      "show_agenda_summary",
      i.target.checked
    )}
          />
          <span>${e.editorShowSummary}</span>
        </label>
      </div>
    `;
  }
};
oe.styles = Y`
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
Pe([
  $({ attribute: !1 })
], oe.prototype, "hass", 2);
Pe([
  M()
], oe.prototype, "_config", 2);
oe = Pe([
  B(et)
], oe);
if (!customElements.get(ze)) {
  const t = customElements.get(ue);
  t && customElements.define(ze, class extends t {
  });
}
if (!customElements.get(Ne)) {
  const t = customElements.get(re);
  t && customElements.define(Ne, class extends t {
  });
}
if (!customElements.get(Ie)) {
  const t = customElements.get(se);
  t && customElements.define(Ie, class extends t {
  });
}
const hi = [
  {
    type: ue,
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
for (const t of hi)
  window.customCards.some((e) => e.type === t.type) || window.customCards.push(t);
console.info(
  `%c SIMPLE-CALENDARS %c v${ht} `,
  "color: white; background: #1a73e8; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;",
  "color: #1a73e8; background: #e8f0fe; font-weight: 700; border-radius: 0 4px 4px 0; padding: 2px 6px;"
);
