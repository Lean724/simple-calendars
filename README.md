# Simple-Calendars (Month, Day & Focus Event)

A suite of **3 minimalist Home Assistant Lovelace calendar cards** — Monthly, Daily, and Focus Event. Designed with clean typography, scalable layouts for `4x12` and larger Sections slots, native multi-entity `calendar.*` support, frosted glass transparency controls, automatic midnight day rollover, built-in translations in **10 languages**, and a full visual editor.

<p align="center">
  <img src="docs/preview-daily.jpg" alt="Simple-Calendars Daily Card - Completed Events Dimmed & Live Progress" width="48%" />
  <img src="docs/preview-month.jpg" alt="Simple-Calendars Monthly Card - Scalable 4x12 Grid with Dots & Bottom Summary" width="48%" />
</p>

<p align="center">
  <img src="docs/preview-focus-event-editor.png" alt="Simple-Calendars Visual Configuration Editor & Focus Event Preview" width="100%" />
</p>

Compatible with **Home Assistant Marketplace** (**HACS**) and both **Sections** and **Masonry** dashboard views.

## Included Cards

| Card | YAML Type | Description |
| :--- | :--- | :--- |
| **Focus Event Card** | `custom:simple-calendar-focus-event-card` | Compact now/next tracker displaying **Previous events**, **Current events** (with live progress bar), and **Upcoming events**, plus optional title bar and calendar filters. |
| **Daily Calendar** | `custom:simple-calendar-day-card` | Minimalist daily agenda widget with week pill (`Week 47`), day summary, remaining time, and real-time progress bar. |
| **Monthly Calendar** | `custom:simple-calendar-month-card` | Scalable monthly grid (`compact`, `normal`, `large`) with **pills** or **dots**, plus a minimalist focused-day summary matching the Daily Card. |

> *(Note: Legacy aliases `custom:simple-calendar-event-card`, `custom:ha-calendar-event-card`, `custom:ha-calendar-month-card`, and `custom:ha-calendar-day-card` remain supported for backward compatibility. In v2.0.0, Weekly Card was removed for future refinement and Event Card was renamed to Focus Event Card.)*

## Key Features

- **Real-time event tracking & past-event dimming**: Finished timed events and past all-day events are automatically dimmed, grayed out, and struck through across **Daily**, **Monthly** (grid pills/dots, focused summary, and day dialog), and **Focus Event** (`dim_completed_events: true` by default), or hidden completely with `show_completed_events: false`.
- **Scalable Monthly Card (`4x12` ready)**: Choose between `compact`, `normal`, and `large` grid scales, switch cell events between `pills` (default) and `dots`, and toggle the Daily-style bottom summary (`show_day_summary`).
- **Automatic midnight rollover**: Cards anchored to today automatically advance at midnight while respecting manual navigation when `show_navigation: true`.
- **Advanced display options**: Toggle the current day highlight/column (`show_current_day`), toggle all-day events (`show_all_day_events`), place all-day events at the top or bottom (`all_day_position`), and show a clean empty-day message when no events are scheduled.
- **Unlimited multi-entity calendars**: Combine any number of `calendar.*` entities into a single card with custom names, MDI icons, and colors.
- **Transparency & frosted glass**: Configure `transparent: true`, `background_opacity` (`0–100%`), `backdrop_blur`, `background_color`, `border_radius`, `hide_border`, and `hide_shadow`.
- **Full visual editor**: Configure every option, entity, color, and icon directly from the Lovelace UI without editing YAML.
- **10 built-in languages**: English (`en`), Spanish (`es`), Simplified Chinese (`zh-Hans`), German (`de`), Italian (`it`), French (`fr`), Portuguese (`pt`), Russian (`ru`), Polish (`pl`), and Dutch (`nl`), with automatic detection from Home Assistant.

---

## Installation

### Via HACS / Home Assistant Marketplace (Recommended)

1. Open **HACS** (or **Home Assistant Marketplace**) in Home Assistant.
2. Go to **Frontend** and search for **Simple-Calendars (Month, Day & Focus Event)**.
   - If the repository is not yet in the default catalog, open the top-right **⋮** menu → **Custom repositories**, add `https://github.com/Lean724/simple-calendars` with category **Dashboard** / **Lovelace**, and then search for it.
3. Click **Download** / **Install**.
4. Reload your browser when prompted by Home Assistant.

### Manual Installation

1. Download `simple-calendars.js` from Releases or from `dist/simple-calendars.js`.
2. Copy it to `/config/www/simple-calendars.js`.
3. In Home Assistant go to **Settings → Dashboards → ⋮ → Resources** and add:
   - URL: `/local/simple-calendars.js`
   - Resource type: **JavaScript Module**

---

## Configuration

### Shared Entity Configuration (`entities`)

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `entity` | `string` | **Required** | Calendar entity ID (`calendar.*`). |
| `name` | `string` | `friendly_name` | Custom name shown in filters and dialogs. |
| `color` | `string` | Auto | Hex or CSS color (e.g. `#1a73e8`). |
| `icon` | `string` | `mdi:calendar` | MDI icon for the calendar and its events. |
| `hidden` | `boolean` | `false` | Starts hidden in quick entity toggles. |

### Common, Visibility & Appearance Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | — | Title displayed in the top bar of Focus Event Card and Month Card. |
| `entities` | `list` | **Required** | List of calendar entities (`calendar.*`). |
| `first_day_of_week` | `number` | `1` | `1` for Monday, `0` for Sunday. |
| `language` | `string` | Auto | `'en'`, `'es'`, `'zh-Hans'`, `'de'`, `'it'`, `'fr'`, `'pt'`, `'ru'`, `'pl'`, `'nl'`. |
| `show_current_day` | `boolean` | `true` | Shows or hides the current day column/highlight. |
| `show_all_day_events` | `boolean` | `true` | Shows or hides all-day events. |
| `all_day_position` | `'top' \| 'bottom'` | `'top'` | Places all-day events at the top or bottom of the day list. |
| `show_completed_events` | `boolean` | `true` | Shows or hides already finished events. |
| `dim_completed_events` | `boolean` | `true` | Dims, grays out, and strikes through finished events when visible across Day, Month, and Focus Event cards. |
| `transparent` | `boolean` | `false` | 100% transparent background with no borders or shadows. |
| `background_opacity` | `number` | `100` | Card background opacity (`0` to `100`). |
| `background_color` | `string` | HA theme | Custom base background color. |
| `backdrop_blur` | `number` | `0` | Background blur in `px` (defaults to `12` when `background_opacity < 100`). |
| `border_radius` | `number` | `24` | Card corner radius in `px`. |
| `hide_border` | `boolean` | `false` | Hides the outer card border. |
| `hide_shadow` | `boolean` | `false` | Hides the card drop shadow. |
| `use_entity_color` | `boolean` | `false` | Tints event icon and progress bar using the entity's color. |

### `Focus Event Card` Options (`custom:simple-calendar-focus-event-card`)

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `max_previous_events` | `number` | `2` | Maximum number of previous events shown (`0` hides the section). |
| `max_upcoming_events` | `number` | `2` | Maximum number of upcoming events shown (`0` hides the section). |
| `show_progress_bar` | `boolean` | `true` | Shows the live progress bar on ongoing events. |
| `show_entity_toggles` | `boolean` | `false` | Shows quick calendar filter chips in the title bar. |

```yaml
type: custom:simple-calendar-focus-event-card
title: Focus Agenda
max_previous_events: 3
max_upcoming_events: 2
show_all_day_events: true
all_day_position: top
show_completed_events: true
dim_completed_events: true
background_opacity: 85
backdrop_blur: 12
entities:
  - entity: calendar.work
    name: Work
    icon: mdi:briefcase
  - entity: calendar.personal
    name: Personal
    icon: mdi:account
```

### Daily Card Options (`custom:simple-calendar-day-card`)

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `show_week_number` | `boolean` | `true` | Shows the `Week XX` pill in the top-left corner. |
| `show_progress_bar` | `boolean` | `true` | Shows the progress bar and remaining time / duration. |
| `show_navigation` | `boolean` | `false` | Shows compact `< Today >` navigation controls. |

```yaml
type: custom:simple-calendar-day-card
show_week_number: true
show_progress_bar: true
show_current_day: true
show_all_day_events: true
all_day_position: top
show_completed_events: true
dim_completed_events: true
entities:
  - entity: calendar.work
    name: Work
    icon: mdi:briefcase
  - entity: calendar.home
    name: Home
    icon: mdi:home
```

### Monthly Card Options (`custom:simple-calendar-month-card`)

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `calendar_size` | `'compact' \| 'normal' \| 'large'` | `'normal'` | Grid row scale (`compact` fits `4x12` Sections slots cleanly). |
| `event_display` | `'pills' \| 'dots'` | `'pills'` | Renders text pills or minimal color dots inside each day cell. |
| `max_events_per_day` | `number` | `3` (`2` compact, `4` dots) | Maximum visible events per cell before showing `+N more`. |
| `show_week_numbers` | `boolean` | `false` | Shows the left ISO week number column. |
| `show_day_summary` | `boolean` | `true` | Shows the Daily-style selected day summary below the monthly grid. |
| `show_progress_bar` | `boolean` | `true` | Shows the live progress bar inside the selected day summary. |
| `show_header` | `boolean` | `true` | Shows the month navigation header. |
| `show_entity_toggles` | `boolean` | `false` | Shows interactive chips to filter calendars. |

```yaml
type: custom:simple-calendar-month-card
calendar_size: compact
event_display: pills
show_day_summary: true
show_progress_bar: true
show_completed_events: true
dim_completed_events: true
entities:
  - entity: calendar.work
    name: Work
    icon: mdi:briefcase
  - entity: calendar.personal
    name: Personal
    icon: mdi:account
```

---

## Development

```bash
npm ci
npm run build
npm test
```

The compiled bundle ready for distribution is generated in `dist/simple-calendars.js` and `simple-calendars.js`.
