import {
  CARD_VERSION,
  DAY_CARD_TYPE,
  EVENT_CARD_TYPE,
  LEGACY_DAY_CARD_TYPE,
  LEGACY_EVENT_CARD_TYPE,
  LEGACY_MONTH_CARD_TYPE,
  LEGACY_WEEK_CARD_TYPE,
  MONTH_CARD_TYPE,
  WEEK_CARD_TYPE,
} from './constants';
import './cards/month-card';
import './cards/week-card';
import './cards/day-card';
import './cards/event-card';
import './editor/card-editor';

interface CustomCardRegistration {
  type: string;
  name: string;
  description: string;
  preview?: boolean;
}

declare global {
  interface Window {
    customCards?: CustomCardRegistration[];
  }
}

// Register backwards-compatible aliases
if (!customElements.get(LEGACY_MONTH_CARD_TYPE)) {
  const MonthClass = customElements.get(MONTH_CARD_TYPE);
  if (MonthClass) customElements.define(LEGACY_MONTH_CARD_TYPE, class extends MonthClass {});
}
if (!customElements.get(LEGACY_WEEK_CARD_TYPE)) {
  const WeekClass = customElements.get(WEEK_CARD_TYPE);
  if (WeekClass) customElements.define(LEGACY_WEEK_CARD_TYPE, class extends WeekClass {});
}
if (!customElements.get(LEGACY_DAY_CARD_TYPE)) {
  const DayClass = customElements.get(DAY_CARD_TYPE);
  if (DayClass) customElements.define(LEGACY_DAY_CARD_TYPE, class extends DayClass {});
}
if (!customElements.get(LEGACY_EVENT_CARD_TYPE)) {
  const EventClass = customElements.get(EVENT_CARD_TYPE);
  if (EventClass) customElements.define(LEGACY_EVENT_CARD_TYPE, class extends EventClass {});
}

const CARDS_TO_REGISTER: CustomCardRegistration[] = [
  {
    type: MONTH_CARD_TYPE,
    name: 'Simple Calendar - Month (Multi-Entity)',
    description:
      'Full monthly calendar view supporting multiple calendar entities with custom colors, icons, and filters.',
    preview: true,
  },
  {
    type: WEEK_CARD_TYPE,
    name: 'Simple Calendar - Week (Multi-Entity)',
    description:
      'Minimalist weekly summary view supporting multiple calendar entities, progress bars, and custom styling.',
    preview: true,
  },
  {
    type: DAY_CARD_TYPE,
    name: 'Simple Calendar - Day (Multi-Entity)',
    description:
      'Minimalist daily agenda widget with week pill, progress bars, and multi-calendar support.',
    preview: true,
  },
  {
    type: EVENT_CARD_TYPE,
    name: 'Simple Calendar - Event Card (Multi-Entity)',
    description:
      'Compact now/next event tracker displaying previous, current (with progress bar), and upcoming events.',
    preview: true,
  },
];

window.customCards = window.customCards || [];
for (const card of CARDS_TO_REGISTER) {
  if (!window.customCards.some((existing) => existing.type === card.type)) {
    window.customCards.push(card);
  }
}

// eslint-disable-next-line no-console
console.info(
  `%c SIMPLE-CALENDARS %c v${CARD_VERSION} `,
  'color: white; background: #1a73e8; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;',
  'color: #1a73e8; background: #e8f0fe; font-weight: 700; border-radius: 0 4px 4px 0; padding: 2px 6px;',
);
