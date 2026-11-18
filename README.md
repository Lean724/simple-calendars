# Simple-Calendars (Month, Week & Day)

Suite de **3 tarjetas personalizadas de Lovelace para Home Assistant** con soporte **multi-entidad** nativo (`calendar.*`), colores, nombres e íconos personalizables, filtros interactivos en vivo y editor visual completo.

Compatible con **Home Assistant Marketplace** (anteriormente **HACS**) y con vistas **Sections** y **Masonry**.

## Tarjetas incluidas

| Tarjeta | Tipo YAML | Descripción |
| :--- | :--- | :--- |
| **Calendario Mensual** | `custom:simple-calendar-month-card` | Grilla mensual completa con eventos de todo el día, eventos horarios, números de semana opcionales y modal `+N más`. |
| **Calendario Semanal** | `custom:simple-calendar-week-card` | Grilla horaria tipo Google Calendar con barra superior de todo el día, columnas paralelas para eventos solapados e indicador de hora actual. |
| **Calendario Diario** | `custom:simple-calendar-day-card` | Agenda diaria detallada con resumen de eventos por calendario, barra de todo el día y detalle de ubicación/descripción en los bloques horarios. |

> *(Nota: para máxima retrocompatibilidad también se aceptan los alias `custom:ha-calendar-month-card`, `custom:ha-calendar-week-card` y `custom:ha-calendar-day-card`).*

## Características principales

- **Multi-entidad sin límites**: combina cualquier cantidad de entidades `calendar.*` en una misma tarjeta.
- **Personalización por calendario**: asigna `color`, `name` e `icon` propios a cada entidad (o usa la paleta automática y el nombre/ícono del estado de Home Assistant).
- **Filtros interactivos**: activa o desactiva calendarios al instante desde los chips de la cabecera.
- **Editor visual completo**: configura títulos, opciones de vista, orden, colores, íconos y entidades directamente desde la interfaz de Lovelace sin escribir YAML.
- **Modal de detalles**: haz clic en cualquier evento para ver horario completo, ubicación, descripción, calendario de origen y acceso directo al diálogo nativo de la entidad.
- **Multi-idioma**: detección automática de **Español** e **Inglés** según el perfil de Home Assistant (o configurable manualmente).

---

## Instalación

### Mediante Marketplace / HACS (Recomendado)

1. Abre **Marketplace** (antes **HACS**) en Home Assistant.
2. Ve a **Frontend** → menú superior derecho **⋮** → **Repositorios personalizados** (*Custom repositories*).
3. Agrega la URL de este repositorio con categoría **Lovelace** / **Dashboard**.
4. Busca **Simple-Calendars (Month, Week & Day)** e instálalo.
5. Recarga el navegador cuando Home Assistant lo solicite.

### Instalación manual

1. Descarga `simple-calendars.js` desde la carpeta `dist/` (o desde los *Releases*).
2. Cópialo en `/config/www/simple-calendars.js`.
3. En Home Assistant ve a **Ajustes → Dashboards → ⋮ → Recursos** y añade:
   - URL: `/local/simple-calendars.js`
   - Tipo: **Módulo JavaScript**

---

## Configuración

### Configuración compartida de entidades (`entities`)

Cada elemento dentro de `entities` puede ser un `string` simple (ej. `calendar.personal`) o un objeto con propiedades personalizadas:

| Opción | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `entity` | `string` | **Requerido** | ID de la entidad de calendario (`calendar.*`). |
| `name` | `string` | `friendly_name` | Nombre mostrado en filtros y modales. |
| `color` | `string` | Automático | Color hexadecimal o CSS (ej. `#1a73e8`). |
| `icon` | `string` | `mdi:calendar` | Ícono MDI para el calendario y sus eventos. |
| `hidden` | `boolean` | `false` | Inicia oculto en el filtro rápido de la cabecera. |

### Opciones comunes a las 3 tarjetas

| Opción | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `title` | `string` | — | Subtítulo opcional encima del período actual. |
| `entities` | `list` | **Requerido** | Lista de entidades de calendario. |
| `first_day_of_week` | `number` | `1` | `1` para Lunes, `0` para Domingo. |
| `language` | `'es' \| 'en'` | Automático | Fuerza el idioma de la tarjeta. |
| `show_header` | `boolean` | `true` | Muestra la barra de navegación y título. |
| `show_entity_toggles` | `boolean` | `true` | Muestra los chips para filtrar calendarios. |
| `transparent` | `boolean` | `false` | Fondo 100% transparente sin bordes ni sombras. |
| `background_opacity` | `number` | `100` | Opacidad del fondo de la tarjeta (`0` a `100`) con efecto cristal translúcido (*frosted glass*). |

### Opciones de la tarjeta Mensual (`custom:simple-calendar-month-card`)

| Opción | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `max_events_per_day` | `number` | `3` | Cantidad máxima de eventos visibles por celda antes de mostrar `+N más`. |
| `show_week_numbers` | `boolean` | `false` | Muestra la columna izquierda con el número de semana ISO. |
| `compact` | `boolean` | `false` | Reduce la altura mínima de las celdas del mes. |

```yaml
type: custom:simple-calendar-month-card
title: Agenda del Hogar
transparent: false
background_opacity: 85
first_day_of_week: 1
max_events_per_day: 3
show_week_numbers: true
entities:
  - entity: calendar.personal
    name: Personal
    color: "#1a73e8"
    icon: mdi:account
  - entity: calendar.trabajo
    name: Trabajo
    color: "#e67c73"
    icon: mdi:briefcase-outline
  - entity: calendar.feriados
    name: Feriados
    color: "#33b679"
    icon: mdi:party-popper
```

### Opciones de la tarjeta Semanal (`custom:simple-calendar-week-card`)

| Opción | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `start_hour` | `number` | `0` | Hora inicial visible en la grilla (`0`–`23`). |
| `end_hour` | `number` | `24` | Hora final visible en la grilla (`1`–`24`). |
| `days_to_show` | `number` | `7` | Cantidad de días a mostrar (`1`–`14`). |
| `compact_all_day` | `boolean` | `false` | Limita la altura de la fila de eventos de todo el día con scroll interno. |

```yaml
type: custom:simple-calendar-week-card
title: Semana
start_hour: 7
end_hour: 23
days_to_show: 7
entities:
  - entity: calendar.personal
    name: Personal
    color: "#1a73e8"
  - entity: calendar.familia
    name: Familia
    color: "#8e24aa"
    icon: mdi:home-heart
```

### Opciones de la tarjeta Diaria (`custom:simple-calendar-day-card`)

Por defecto adopta el diseño **widget estilizado compacto** (con píldora de número de semana, columna de día/mes, barra de progreso en tiempo real y tiempo restante), y puede alternarse a grilla horaria completa.

| Opción | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `layout` | `'compact' \| 'grid'` | `'compact'` | Modo de visualización: widget compacto o grilla horaria. |
| `show_week_number` | `boolean` | `true` | Muestra la píldora con el número de semana (ej. `Semana 47`). |
| `show_progress_bar` | `boolean` | `true` | Muestra la barra de progreso animada para eventos del día. |
| `start_hour` | `number` | `0` | Hora inicial visible (solo modo `grid`, `0`–`23`). |
| `end_hour` | `number` | `24` | Hora final visible (solo modo `grid`, `1`–`24`). |
| `show_agenda_summary` | `boolean` | `true` | Barra superior con totales y desglose (solo modo `grid`). |

```yaml
# Modo widget compacto por defecto (estilizado con barra de progreso)
type: custom:simple-calendar-day-card
layout: compact
show_week_number: true
show_progress_bar: true
transparent: false
entities:
  - entity: calendar.personal
    name: Fer trabajo
    color: "#ffffff"
    icon: mdi:briefcase
  - entity: calendar.trabajo
    color: "#f4511e"
    icon: mdi:laptop
```

---

## Desarrollo

```bash
npm install
npm run build
```

El bundle compilado listo para distribución se genera en `dist/simple-calendars.js`.
