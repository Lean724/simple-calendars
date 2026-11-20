import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('--- RUNNING SIMPLE-CALENDARS VERIFICATION ---');

// 1. Verify compiled bundle parity between dist/ and repository root
const distBundlePath = path.join(rootDir, 'dist', 'simple-calendars.js');
const rootBundlePath = path.join(rootDir, 'simple-calendars.js');

assert(fs.existsSync(distBundlePath), `Missing bundle: ${distBundlePath}`);
assert(fs.existsSync(rootBundlePath), `Missing root bundle: ${rootBundlePath}`);

const distBytes = fs.readFileSync(distBundlePath);
const rootBytes = fs.readFileSync(rootBundlePath);
assert(
  distBytes.equals(rootBytes),
  'dist/simple-calendars.js and root simple-calendars.js must be identical',
);
console.log('✓ Compiled bundle exists in dist/ and root and matches byte-for-byte.');

// 2. Verify 10-language i18n parity in src/constants.ts and src/utils/date-utils.ts
const expectedLangs = ['en', 'es', 'zh-Hans', 'de', 'it', 'fr', 'pt', 'ru', 'pl', 'nl'];
const constantsSrc = fs.readFileSync(path.join(rootDir, 'src', 'constants.ts'), 'utf8');
const dateUtilsSrc = fs.readFileSync(path.join(rootDir, 'src', 'utils', 'date-utils.ts'), 'utf8');

const ifaceMatch = /export interface TranslationStrings\s*\{([\s\S]*?)\n\}/.exec(constantsSrc);
assert(ifaceMatch, 'Could not find TranslationStrings interface in src/constants.ts');
const interfaceKeys = [...ifaceMatch[1].matchAll(/^\s*([A-Za-z0-9_]+)\s*:\s*string\s*;/gm)].map(
  (m) => m[1],
);
assert(interfaceKeys.length > 50, `Expected >50 translation keys, found ${interfaceKeys.length}`);
assert(
  interfaceKeys.includes('editorDimCompletedEvents'),
  'TranslationStrings missing editorDimCompletedEvents',
);

const translationsMatch =
  /export const TRANSLATIONS:\s*Record<SupportedLanguage,\s*TranslationStrings>\s*=\s*(\{[\s\S]*?\n\});/.exec(
    constantsSrc,
  );
assert(translationsMatch, 'Could not parse TRANSLATIONS object in src/constants.ts');
const translationsObj = new Function(`return (${translationsMatch[1]});`)();

const labelsMatch =
  /export const LANGUAGE_LABELS:\s*Record<SupportedLanguage,\s*string>\s*=\s*(\{[\s\S]*?\n\});/.exec(
    constantsSrc,
  );
assert(labelsMatch, 'Could not parse LANGUAGE_LABELS object in src/constants.ts');
const labelsObj = new Function(`return (${labelsMatch[1]});`)();

const connectorMatch =
  /const CONNECTOR_BY_LANG:\s*Record<SupportedLanguage,\s*string>\s*=\s*(\{[\s\S]*?\n\});/.exec(
    dateUtilsSrc,
  );
assert(connectorMatch, 'Could not parse CONNECTOR_BY_LANG object in src/utils/date-utils.ts');
const connectorObj = new Function(`return (${connectorMatch[1]});`)();

assert.deepEqual(
  Object.keys(labelsObj).sort(),
  [...expectedLangs].sort(),
  'LANGUAGE_LABELS must cover all 10 required languages',
);
assert.deepEqual(
  Object.keys(translationsObj).sort(),
  [...expectedLangs].sort(),
  'TRANSLATIONS must cover all 10 required languages',
);
assert.deepEqual(
  Object.keys(connectorObj).sort(),
  [...expectedLangs].sort(),
  'CONNECTOR_BY_LANG must cover all 10 required languages',
);

for (const lang of expectedLangs) {
  const dict = translationsObj[lang];
  const keys = Object.keys(dict);
  for (const key of interfaceKeys) {
    assert(key in dict, `Language '${lang}' missing key '${key}'`);
    assert(
      typeof dict[key] === 'string' && dict[key].trim().length > 0,
      `Language '${lang}' has empty value for '${key}'`,
    );
  }
  for (const extraKey of keys) {
    assert(
      interfaceKeys.includes(extraKey),
      `Language '${lang}' has unexpected key '${extraKey}'`,
    );
  }
  assert(
    typeof connectorObj[lang] === 'string' && connectorObj[lang].trim().length > 0,
    `CONNECTOR_BY_LANG missing non-empty string for '${lang}'`,
  );
}
console.log(
  `✓ All 10 languages (${expectedLangs.join(', ')}) have 100% key parity (${interfaceKeys.length} keys each) and non-empty connectors.`,
);

// 3. Setup minimal DOM shim and import compiled bundle
function setupDomShim() {
  const registry = new Map();
  const windowListeners = new Map();
  globalThis.window = globalThis;
  globalThis.window.addEventListener = (type, fn) => {
    if (!windowListeners.has(type)) windowListeners.set(type, []);
    windowListeners.get(type).push(fn);
  };
  globalThis.window.removeEventListener = (type, fn) => {
    const list = windowListeners.get(type);
    if (!list) return;
    const idx = list.indexOf(fn);
    if (idx !== -1) list.splice(idx, 1);
  };
  globalThis.HTMLElement = class HTMLElement {
    constructor() {
      this.isConnected = false;
      this._attrs = new Map();
      this._listeners = new Map();
    }
    setAttribute(k, v) {
      this._attrs.set(k, v);
    }
    removeAttribute(k) {
      this._attrs.delete(k);
    }
    addEventListener(type, fn) {
      if (!this._listeners.has(type)) this._listeners.set(type, []);
      this._listeners.get(type).push(fn);
    }
    removeEventListener(type, fn) {
      const list = this._listeners.get(type);
      if (!list) return;
      const idx = list.indexOf(fn);
      if (idx !== -1) list.splice(idx, 1);
    }
    dispatchEvent(event) {
      const list = this._listeners.get(event.type) || [];
      for (const fn of list) fn(event);
      return true;
    }
    attachShadow() {
      return {
        adoptedStyleSheets: [],
        firstChild: null,
        appendChild() {},
        insertBefore(n) {
          return n;
        },
        querySelector() {
          return null;
        },
      };
    }
  };
  globalThis.Element = globalThis.HTMLElement;
  globalThis.Node = { ELEMENT_NODE: 1, TEXT_NODE: 3, COMMENT_NODE: 8 };
  globalThis.Document = class Document {};
  globalThis.CSSStyleSheet = class CSSStyleSheet {
    replaceSync() {}
  };
  globalThis.ShadowRoot = class ShadowRoot {};
  globalThis.document = Object.assign(new globalThis.Document(), {
    adoptedStyleSheets: [],
    createElement: (tag) => ({
      tagName: tag,
      content: { cloneNode: () => ({}) },
      appendChild() {},
    }),
    createComment: () => ({}),
    createTreeWalker: () => ({ nextNode: () => null }),
    importNode: (n) => n,
  });
  globalThis.customElements = {
    define(name, ctor) {
      registry.set(name, ctor);
    },
    get(name) {
      return registry.get(name);
    },
  };
  return registry;
}

function flattenTemplate(value) {
  if (value === null || value === undefined || typeof value === 'boolean' || typeof value === 'symbol') {
    return '';
  }
  if (Array.isArray(value)) return value.map(flattenTemplate).join('');
  if (
    typeof value === 'object' &&
    Array.isArray(value.strings) &&
    Array.isArray(value.values)
  ) {
    let out = value.strings[0];
    for (let i = 0; i < value.values.length; i++) {
      out += flattenTemplate(value.values[i]) + value.strings[i + 1];
    }
    return out;
  }
  return String(value);
}

function getReactiveElementProto(instance) {
  let proto = Object.getPrototypeOf(instance);
  while (proto && Object.getPrototypeOf(proto) !== globalThis.HTMLElement.prototype) {
    proto = Object.getPrototypeOf(proto);
  }
  return proto;
}

function mountElement(registry, tagName) {
  const Ctor = registry.get(tagName);
  assert(Ctor, `Custom element '${tagName}' was not registered`);
  const el = new Ctor();
  const reactiveProto = getReactiveElementProto(el);
  el._lastTemplate = null;
  el._rendered = '';
  el.update = function (changedProps) {
    this._lastTemplate = this.render();
    this._rendered = flattenTemplate(this._lastTemplate);
    reactiveProto.update.call(this, changedProps);
  };
  return el;
}

async function flushMicrotasks(ticks = 6) {
  for (let i = 0; i < ticks; i++) {
    await Promise.resolve();
  }
}

async function settleCard(el) {
  await el.updateComplete;
  await flushMicrotasks();
  await el.updateComplete;
}

function extractButtonBlock(renderedHtml, titleText) {
  const buttons = renderedHtml.match(/<button[\s\S]*?<\/button>/g) || [];
  const found = buttons.find((b) => b.includes(titleText));
  assert(found, `Could not find rendered <button> containing '${titleText}'`);
  return found;
}

function getButtonClassAttr(buttonHtml) {
  const match = /class="([^"]*)"/.exec(buttonHtml);
  return match ? match[1].trim().split(/\s+/) : [];
}

const registry = setupDomShim();
await import(pathToFileURL(distBundlePath).href);

const expectedTags = [
  'simple-calendar-month-card',
  'simple-calendar-week-card',
  'simple-calendar-day-card',
  'simple-calendar-event-card',
  'ha-calendar-month-card',
  'ha-calendar-week-card',
  'ha-calendar-day-card',
  'ha-calendar-event-card',
  'simple-calendar-card-editor',
  'ha-calendar-shared-header',
  'ha-calendar-event-dialog',
];

for (const tag of expectedTags) {
  assert(registry.has(tag), `Missing customElements registration for '${tag}'`);
}
for (const mainType of [
  'simple-calendar-month-card',
  'simple-calendar-week-card',
  'simple-calendar-day-card',
  'simple-calendar-event-card',
]) {
  assert(
    globalThis.window.customCards.some((c) => c.type === mainType),
    `window.customCards missing '${mainType}'`,
  );
}
console.log('✓ All 4 cards, 4 legacy aliases, editor, header, and dialog register cleanly.');

// Helper to construct deterministic dates in local time: 2026-11-20 is a Friday
const fixedNow = new Date(2026, 10, 20, 14, 0, 0, 0);
const day19Start = new Date(2026, 10, 19, 0, 0, 0, 0);
const day20Start = new Date(2026, 10, 20, 0, 0, 0, 0);
const day21Start = new Date(2026, 10, 21, 0, 0, 0, 0);

function createMockHass(eventsByEntity, lang = 'en') {
  return {
    language: lang,
    locale: { language: lang },
    states: {},
    async callApi(_method, apiPath) {
      for (const [entityId, events] of Object.entries(eventsByEntity)) {
        if (apiPath.startsWith(`calendars/${encodeURIComponent(entityId)}?`)) {
          return events;
        }
      }
      return [];
    },
  };
}

// 4. Behavioral tests for simple-calendar-day-card
{
  const dayEventsFixture = [
    {
      uid: 'yest-allday',
      start: { date: '2026-11-19' },
      end: { date: '2026-11-20' },
      summary: 'Yesterday All Day',
    },
    {
      uid: 'today-allday',
      start: { date: '2026-11-20' },
      end: { date: '2026-11-21' },
      summary: 'Company Holiday',
    },
    {
      uid: 'past-timed',
      start: { dateTime: new Date(2026, 10, 20, 9, 0, 0, 0).toISOString() },
      end: { dateTime: new Date(2026, 10, 20, 10, 0, 0, 0).toISOString() },
      summary: 'Morning Sync',
    },
    {
      uid: 'active-timed',
      start: { dateTime: new Date(2026, 10, 20, 13, 30, 0, 0).toISOString() },
      end: { dateTime: new Date(2026, 10, 20, 15, 0, 0, 0).toISOString() },
      summary: 'Active Workshop',
    },
    {
      uid: 'future-timed',
      start: { dateTime: new Date(2026, 10, 20, 16, 0, 0, 0).toISOString() },
      end: { dateTime: new Date(2026, 10, 20, 17, 0, 0, 0).toISOString() },
      summary: 'Evening Review',
    },
  ];

  const el = mountElement(registry, 'simple-calendar-day-card');
  el.hass = createMockHass({ 'calendar.day_test': dayEventsFixture });
  el.setConfig({
    type: 'custom:simple-calendar-day-card',
    entities: [{ entity: 'calendar.day_test', color: '#1a73e8' }],
    use_entity_color: true,
  });
  el.isConnected = true;
  el.connectedCallback();
  el._anchorDate = new Date(day20Start);
  el._currentNow = new Date(fixedNow);
  await settleCard(el);

  assert(
    getButtonClassAttr(extractButtonBlock(el._rendered, 'Morning Sync')).includes('is-past'),
    'Day card should dim past timed event by default (dim_completed_events omitted -> true)',
  );
  assert(
    !getButtonClassAttr(extractButtonBlock(el._rendered, 'Active Workshop')).includes('is-past'),
    'Day card must not dim ongoing timed event',
  );
  assert(
    !getButtonClassAttr(extractButtonBlock(el._rendered, 'Evening Review')).includes('is-past'),
    'Day card must not dim future timed event',
  );
  assert(
    !getButtonClassAttr(extractButtonBlock(el._rendered, 'Company Holiday')).includes('is-past'),
    'Day card must not dim today all-day event while day is ongoing',
  );
  assert(
    !el._rendered.includes('Yesterday All Day'),
    'Day card must not show yesterday single-day all-day event on today',
  );

  // dim_completed_events: false removes is-past while keeping event visible
  el.setConfig({
    type: 'custom:simple-calendar-day-card',
    entities: [{ entity: 'calendar.day_test', color: '#1a73e8' }],
    dim_completed_events: false,
  });
  await settleCard(el);
  assert(
    !getButtonClassAttr(extractButtonBlock(el._rendered, 'Morning Sync')).includes('is-past'),
    'Day card with dim_completed_events: false must render past event without is-past',
  );

  // show_completed_events: false hides past event completely
  el.setConfig({
    type: 'custom:simple-calendar-day-card',
    entities: [{ entity: 'calendar.day_test', color: '#1a73e8' }],
    show_completed_events: false,
    dim_completed_events: true,
  });
  await settleCard(el);
  assert(
    !el._rendered.includes('Morning Sync'),
    'Day card with show_completed_events: false must hide finished event',
  );
  assert(
    el._rendered.includes('Company Holiday') && el._rendered.includes('Active Workshop'),
    'Day card with show_completed_events: false must still show all-day and ongoing events',
  );

  // Next day: today single-day all-day event must NOT appear on day 21
  el.setConfig({
    type: 'custom:simple-calendar-day-card',
    entities: [{ entity: 'calendar.day_test', color: '#1a73e8' }],
  });
  el._anchorDate = new Date(day21Start);
  el._currentNow = new Date(2026, 10, 21, 9, 0, 0, 0);
  await settleCard(el);
  assert(
    !el._rendered.includes('Company Holiday'),
    'Single-day all-day event must not appear on the next day',
  );

  // Viewing yesterday (day 19) when current time is day 20: yesterday all-day is past & dimmed
  el._anchorDate = new Date(day19Start);
  el._currentNow = new Date(fixedNow);
  await settleCard(el);
  assert(
    getButtonClassAttr(extractButtonBlock(el._rendered, 'Yesterday All Day')).includes('is-past'),
    'Yesterday all-day event viewed on day 19 after midnight must have is-past',
  );

  // Midnight rollover behavior
  el.setConfig({
    type: 'custom:simple-calendar-day-card',
    entities: [{ entity: 'calendar.day_test' }],
    show_navigation: false,
  });
  el._anchorDate = new Date(day19Start);
  el.handleDayRollover(day20Start, day21Start);
  assert.equal(
    el._anchorDate.getDate(),
    21,
    'Day card without navigation must always follow today on rollover',
  );

  el.setConfig({
    type: 'custom:simple-calendar-day-card',
    entities: [{ entity: 'calendar.day_test' }],
    show_navigation: true,
  });
  el._anchorDate = new Date(day20Start);
  el.handleDayRollover(day20Start, day21Start);
  assert.equal(
    el._anchorDate.getDate(),
    21,
    'Day card with navigation anchored on prevNow must advance on midnight rollover',
  );
  el._anchorDate = new Date(day19Start);
  el.handleDayRollover(day20Start, day21Start);
  assert.equal(
    el._anchorDate.getDate(),
    19,
    'Day card with navigation manually positioned on another day must not jump on rollover',
  );

  el.isConnected = false;
  el.disconnectedCallback();
  console.log('✓ simple-calendar-day-card tests passed (dimming, all-day, hide, midnight rollover).');
}

// 5. Behavioral tests for simple-calendar-week-card
{
  const weekEventsFixture = [
    {
      uid: 'wk-yest-allday',
      start: { date: '2026-11-19' },
      end: { date: '2026-11-20' },
      summary: 'Week Yesterday AllDay',
    },
    {
      uid: 'wk-yest-timed',
      start: { dateTime: new Date(2026, 10, 19, 10, 0, 0, 0).toISOString() },
      end: { dateTime: new Date(2026, 10, 19, 11, 0, 0, 0).toISOString() },
      summary: 'Week Yesterday Timed',
    },
    {
      uid: 'wk-today-past',
      start: { dateTime: new Date(2026, 10, 20, 9, 0, 0, 0).toISOString() },
      end: { dateTime: new Date(2026, 10, 20, 10, 0, 0, 0).toISOString() },
      summary: 'Week Today Past',
    },
    {
      uid: 'wk-today-allday',
      start: { date: '2026-11-20' },
      end: { date: '2026-11-21' },
      summary: 'Week Today AllDay',
    },
    {
      uid: 'wk-today-future',
      start: { dateTime: new Date(2026, 10, 20, 16, 0, 0, 0).toISOString() },
      end: { dateTime: new Date(2026, 10, 20, 17, 0, 0, 0).toISOString() },
      summary: 'Week Today Future',
    },
  ];

  const el = mountElement(registry, 'simple-calendar-week-card');
  el.hass = createMockHass({ 'calendar.week_test': weekEventsFixture });
  el.setConfig({
    type: 'custom:simple-calendar-week-card',
    entities: [{ entity: 'calendar.week_test' }],
    first_day_of_week: 1,
    days_to_show: 7,
  });
  el.isConnected = true;
  el.connectedCallback();
  el._anchorDate = new Date(day20Start);
  el._currentNow = new Date(fixedNow);
  await settleCard(el);

  assert(
    getButtonClassAttr(extractButtonBlock(el._rendered, 'Week Yesterday AllDay')).includes('is-past'),
    'Week card must dim yesterday all-day event by default',
  );
  assert(
    getButtonClassAttr(extractButtonBlock(el._rendered, 'Week Yesterday Timed')).includes('is-past'),
    'Week card must dim yesterday timed event by default',
  );
  assert(
    getButtonClassAttr(extractButtonBlock(el._rendered, 'Week Today Past')).includes('is-past'),
    'Week card must dim today past timed event by default',
  );
  assert(
    !getButtonClassAttr(extractButtonBlock(el._rendered, 'Week Today AllDay')).includes('is-past'),
    'Week card must not dim today all-day event',
  );
  assert(
    !getButtonClassAttr(extractButtonBlock(el._rendered, 'Week Today Future')).includes('is-past'),
    'Week card must not dim future timed event',
  );

  el.setConfig({
    type: 'custom:simple-calendar-week-card',
    entities: [{ entity: 'calendar.week_test' }],
    first_day_of_week: 1,
    days_to_show: 7,
    dim_completed_events: false,
  });
  await settleCard(el);
  assert(
    !getButtonClassAttr(extractButtonBlock(el._rendered, 'Week Yesterday AllDay')).includes('is-past') &&
      !getButtonClassAttr(extractButtonBlock(el._rendered, 'Week Today Past')).includes('is-past'),
    'Week card with dim_completed_events: false must not apply is-past',
  );

  el.setConfig({
    type: 'custom:simple-calendar-week-card',
    entities: [{ entity: 'calendar.week_test' }],
    show_navigation: false,
  });
  el._anchorDate = new Date(day19Start);
  el.handleDayRollover(day20Start, day21Start);
  assert.equal(el._anchorDate.getDate(), 21, 'Week card rollover updates anchor when nav disabled');

  el.setConfig({
    type: 'custom:simple-calendar-week-card',
    entities: [{ entity: 'calendar.week_test' }],
    show_navigation: true,
  });
  el._anchorDate = new Date(day19Start);
  el.handleDayRollover(day20Start, day21Start);
  assert.equal(el._anchorDate.getDate(), 19, 'Week card preserves manual navigation on rollover');

  el.isConnected = false;
  el.disconnectedCallback();
  console.log('✓ simple-calendar-week-card tests passed (homogeneous dimming & midnight rollover).');
}

// 6. Behavioral tests for simple-calendar-month-card & ha-calendar-event-dialog
{
  const monthEventsFixture = [
    {
      uid: 'mo-yest-allday',
      start: { date: '2026-11-19' },
      end: { date: '2026-11-20' },
      summary: 'Yesterday Month AllDay',
    },
    {
      uid: 'mo-today-allday',
      start: { date: '2026-11-20' },
      end: { date: '2026-11-21' },
      summary: 'Today Month AllDay',
    },
    {
      uid: 'mo-today-past',
      start: { dateTime: new Date(2026, 10, 20, 8, 30, 0, 0).toISOString() },
      end: { dateTime: new Date(2026, 10, 20, 9, 30, 0, 0).toISOString() },
      summary: 'Morning Month Timed',
    },
    {
      uid: 'mo-today-future',
      start: { dateTime: new Date(2026, 10, 20, 17, 0, 0, 0).toISOString() },
      end: { dateTime: new Date(2026, 10, 20, 18, 0, 0, 0).toISOString() },
      summary: 'Future Month Timed',
    },
  ];

  const el = mountElement(registry, 'simple-calendar-month-card');
  el.hass = createMockHass({ 'calendar.month_test': monthEventsFixture });
  el.setConfig({
    type: 'custom:simple-calendar-month-card',
    entities: [{ entity: 'calendar.month_test', color: '#1a73e8' }],
  });
  el.isConnected = true;
  el.connectedCallback();
  el._anchorDate = new Date(2026, 10, 1, 0, 0, 0, 0);
  el._focusedDay = new Date(day20Start);
  el._currentNow = new Date(fixedNow);
  await settleCard(el);

  const pillsHtml = el._rendered.split('class="month-focused-summary"')[0];
  const summaryHtml = el._rendered.split('class="month-focused-summary"')[1] || '';

  assert(
    getButtonClassAttr(extractButtonBlock(pillsHtml, 'Yesterday Month AllDay')).includes('is-past'),
    'Month grid all-day pill for yesterday must have is-past',
  );
  assert(
    getButtonClassAttr(extractButtonBlock(pillsHtml, 'Morning Month Timed')).includes('is-past'),
    'Month grid timed pill for past event must have is-past',
  );
  assert(
    !getButtonClassAttr(extractButtonBlock(pillsHtml, 'Today Month AllDay')).includes('is-past'),
    'Month grid all-day pill for today must not have is-past',
  );
  assert(
    !getButtonClassAttr(extractButtonBlock(pillsHtml, 'Future Month Timed')).includes('is-past'),
    'Month grid timed pill for future event must not have is-past',
  );
  assert(
    getButtonClassAttr(extractButtonBlock(summaryHtml, 'Morning Month Timed')).includes('is-past'),
    'Month focused summary must dim past event by default',
  );
  assert(
    !getButtonClassAttr(extractButtonBlock(summaryHtml, 'Future Month Timed')).includes('is-past'),
    'Month focused summary must not dim future event',
  );

  // dim_completed_events: false
  el.setConfig({
    type: 'custom:simple-calendar-month-card',
    entities: [{ entity: 'calendar.month_test', color: '#1a73e8' }],
    dim_completed_events: false,
  });
  await settleCard(el);
  const pillsNoDim = el._rendered.split('class="month-focused-summary"')[0];
  const summaryNoDim = el._rendered.split('class="month-focused-summary"')[1] || '';
  assert(
    !getButtonClassAttr(extractButtonBlock(pillsNoDim, 'Yesterday Month AllDay')).includes('is-past') &&
      !getButtonClassAttr(extractButtonBlock(pillsNoDim, 'Morning Month Timed')).includes('is-past'),
    'Month grid pills with dim_completed_events: false must not have is-past',
  );
  assert(
    !getButtonClassAttr(extractButtonBlock(summaryNoDim, 'Morning Month Timed')).includes('is-past'),
    'Month focused summary with dim_completed_events: false must not have is-past',
  );

  // Month midnight rollover across month boundary
  const nov30 = new Date(2026, 10, 30, 0, 0, 0, 0);
  const dec01 = new Date(2026, 11, 1, 0, 0, 0, 0);
  el._anchorDate = new Date(2026, 10, 1, 0, 0, 0, 0);
  el._focusedDay = new Date(nov30);
  el.handleDayRollover(nov30, dec01);
  assert.equal(el._focusedDay.getMonth(), 11);
  assert.equal(el._focusedDay.getDate(), 1);
  assert.equal(el._anchorDate.getMonth(), 11, 'Month card advances month when crossing month boundary');

  el._focusedDay = new Date(2026, 10, 15, 0, 0, 0, 0);
  el._anchorDate = new Date(2026, 10, 1, 0, 0, 0, 0);
  el.handleDayRollover(nov30, dec01);
  assert.equal(el._focusedDay.getDate(), 15, 'Month card preserves manually focused day');

  el.isConnected = false;
  el.disconnectedCallback();

  // Event dialog day list dimming
  const dialog = mountElement(registry, 'ha-calendar-event-dialog');
  dialog.dayDate = new Date(day20Start);
  dialog.now = new Date(fixedNow);
  dialog.dimCompletedEvents = true;
  dialog.strings = translationsObj.en;
  dialog.dayEvents = [
    {
      id: 'd1',
      summary: 'Dialog Past Timed',
      description: '',
      location: '',
      start: new Date(2026, 10, 20, 8, 0, 0, 0),
      end: new Date(2026, 10, 20, 9, 0, 0, 0),
      allDay: false,
      calendarEntity: 'calendar.month_test',
      calendarName: 'Test',
      color: '#1a73e8',
      icon: 'mdi:calendar',
    },
    {
      id: 'd2',
      summary: 'Dialog Future Timed',
      description: '',
      location: '',
      start: new Date(2026, 10, 20, 18, 0, 0, 0),
      end: new Date(2026, 10, 20, 19, 0, 0, 0),
      allDay: false,
      calendarEntity: 'calendar.month_test',
      calendarName: 'Test',
      color: '#1a73e8',
      icon: 'mdi:calendar',
    },
  ];
  dialog.isConnected = true;
  dialog.connectedCallback();
  await settleCard(dialog);

  assert(
    getButtonClassAttr(extractButtonBlock(dialog._rendered, 'Dialog Past Timed')).includes('is-past'),
    'Event dialog day list must apply is-past to finished events when dimCompletedEvents is true',
  );
  assert(
    !getButtonClassAttr(extractButtonBlock(dialog._rendered, 'Dialog Future Timed')).includes('is-past'),
    'Event dialog day list must not apply is-past to upcoming events',
  );

  dialog.dimCompletedEvents = false;
  await settleCard(dialog);
  assert(
    !getButtonClassAttr(extractButtonBlock(dialog._rendered, 'Dialog Past Timed')).includes('is-past'),
    'Event dialog day list must omit is-past when dimCompletedEvents is false',
  );
  dialog.isConnected = false;
  dialog.disconnectedCallback();
  console.log('✓ simple-calendar-month-card and ha-calendar-event-dialog tests passed.');
}

// 7. Behavioral tests for simple-calendar-event-card
{
  const evCardFixture = [
    {
      uid: 'ec-prev',
      start: { dateTime: new Date(2026, 10, 20, 9, 0, 0, 0).toISOString() },
      end: { dateTime: new Date(2026, 10, 20, 10, 0, 0, 0).toISOString() },
      summary: 'Prev Event',
    },
    {
      uid: 'ec-now',
      start: { dateTime: new Date(2026, 10, 20, 13, 0, 0, 0).toISOString() },
      end: { dateTime: new Date(2026, 10, 20, 15, 0, 0, 0).toISOString() },
      summary: 'Now Event',
    },
    {
      uid: 'ec-next',
      start: { dateTime: new Date(2026, 10, 20, 16, 0, 0, 0).toISOString() },
      end: { dateTime: new Date(2026, 10, 20, 17, 0, 0, 0).toISOString() },
      summary: 'Next Event',
    },
  ];

  const el = mountElement(registry, 'simple-calendar-event-card');
  el.hass = createMockHass({ 'calendar.event_test': evCardFixture });
  el.setConfig({
    type: 'custom:simple-calendar-event-card',
    entities: [{ entity: 'calendar.event_test' }],
  });
  el.isConnected = true;
  el.connectedCallback();
  el._anchorDate = new Date(day20Start);
  el._currentNow = new Date(fixedNow);
  await settleCard(el);

  assert(
    getButtonClassAttr(extractButtonBlock(el._rendered, 'Prev Event')).includes('is-past'),
    'Event card must apply is-past to previous events by default',
  );
  assert(
    !getButtonClassAttr(extractButtonBlock(el._rendered, 'Now Event')).includes('is-past'),
    'Event card must not apply is-past to current events',
  );
  assert(
    !getButtonClassAttr(extractButtonBlock(el._rendered, 'Next Event')).includes('is-past'),
    'Event card must not apply is-past to upcoming events',
  );

  el.setConfig({
    type: 'custom:simple-calendar-event-card',
    entities: [{ entity: 'calendar.event_test' }],
    dim_completed_events: false,
  });
  await settleCard(el);
  assert(
    !getButtonClassAttr(extractButtonBlock(el._rendered, 'Prev Event')).includes('is-past'),
    'Event card with dim_completed_events: false must not apply is-past to previous events',
  );

  el.setConfig({
    type: 'custom:simple-calendar-event-card',
    entities: [{ entity: 'calendar.event_test' }],
    show_completed_events: false,
  });
  await settleCard(el);
  assert(
    !el._rendered.includes('Prev Event'),
    'Event card with show_completed_events: false must hide previous events',
  );

  el.isConnected = false;
  el.disconnectedCallback();
  console.log('✓ simple-calendar-event-card tests passed.');
}

// 8. Behavioral tests for simple-calendar-card-editor (visibility, i18n, language resolution)
{
  const editor = mountElement(registry, 'simple-calendar-card-editor');
  editor.isConnected = true;
  editor.connectedCallback();

  for (const cardType of [
    'custom:simple-calendar-day-card',
    'custom:simple-calendar-week-card',
    'custom:simple-calendar-month-card',
    'custom:simple-calendar-event-card',
  ]) {
    editor.hass = createMockHass({}, 'en');
    editor.setConfig({ type: cardType, entities: [] });
    await settleCard(editor);
    assert(
      editor._rendered.includes(translationsObj.en.editorDimCompletedEvents),
      `Editor for '${cardType}' must display dim_completed_events option when show_completed_events is enabled`,
    );

    editor.setConfig({ type: cardType, entities: [], show_completed_events: false });
    await settleCard(editor);
    assert(
      !editor._rendered.includes(translationsObj.en.editorDimCompletedEvents),
      `Editor for '${cardType}' must hide dim_completed_events option when show_completed_events is false`,
    );
  }

  // Verify all 10 language labels render in the language selector
  editor.hass = createMockHass({}, 'en');
  editor.setConfig({ type: 'custom:simple-calendar-day-card', entities: [] });
  await settleCard(editor);
  for (const label of Object.values(labelsObj)) {
    assert(
      editor._rendered.includes(label),
      `Editor language selector missing option label '${label}'`,
    );
  }

  // Verify resolveLanguage auto-detection and English fallback through editor
  const autoLangExpectations = [
    ['pl-PL', translationsObj.pl.editorDimCompletedEvents],
    ['nl-BE', translationsObj.nl.editorDimCompletedEvents],
    ['ru-RU', translationsObj.ru.editorDimCompletedEvents],
    ['es-AR', translationsObj.es.editorDimCompletedEvents],
    ['xx-ZZ', translationsObj.en.editorDimCompletedEvents],
    [undefined, translationsObj.en.editorDimCompletedEvents],
  ];

  for (const [hassLang, expectedLabel] of autoLangExpectations) {
    editor.hass = hassLang ? createMockHass({}, hassLang) : { states: {} };
    editor.setConfig({ type: 'custom:simple-calendar-day-card', entities: [] });
    await settleCard(editor);
    assert(
      editor._rendered.includes(expectedLabel),
      `Editor auto-language failed for '${String(hassLang)}': expected '${expectedLabel}'`,
    );
  }

  editor.isConnected = false;
  editor.disconnectedCallback();
  console.log('✓ simple-calendar-card-editor tests passed (all 4 card kinds, 10 languages, auto-detect & fallback).');
}

console.log('--- ALL SIMPLE-CALENDARS VERIFICATION CHECKS PASSED ---');
