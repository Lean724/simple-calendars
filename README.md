# Simple-Calendars (Month, Week & Day)

Suite de **3 tarjetas personalizadas de Lovelace para Home Assistant** con diseño **minimalista**, control avanzado de **transparencias**, soporte **multi-entidad** nativo (`calendar.*`) y editor visual completo.

![Simple-Calendars Daily Minimalist Card Preview](docs/preview-day.svg)

Compatible con **Home Assistant Marketplace** (anteriormente **HACS**) y con vistas **Sections** y **Masonry**.

## Tarjetas incluidas

| Tarjeta | Tipo YAML | Descripción |
| :--- | :--- | :--- |
| **Calendario Diario** | `custom:simple-calendar-day-card` | Widget minimalista con píldora de semana (`Semana 47`), resumen del día, tiempo restante y barra de progreso en tiempo real. |
| **Calendario Semanal** | `custom:simple-calendar-week-card` | Resumen minimalista semanal por días con píldora de semana, horarios y barras de progreso. |
| **Calendario Mensual** | `custom:simple-calendar-month-card` | Grilla mensual limpia con píldoras por color y resumen minimalista inferior del día seleccionado. |

> *(Nota: para máxima retrocompatibilidad también se aceptan los alias `custom:ha-calendar-month-card`, `custom:ha-calendar-week-card` y `custom:ha-calendar-day-card`).*

## Características principales

- **Diseño minimalista limpio**: las tarjetas Diaria y Semanal muestran únicamente el resumen minimalista compacto con altura automática y ancho completo (`12` columnas en *Sections*).
- **Multi-entidad sin límites**: combina cualquier cantidad de entidades `calendar.*` en una misma tarjeta.
- **Transparencias y efecto cristal (*frosted glass*)**: configura `transparent: true`, `background_opacity` (`0–100%`), `backdrop_blur`, `background_color`, `border_radius`, `hide_border` y `hide_shadow`.
- **Personalización por calendario**: asigna `color`, `name` e `icon` propios a cada entidad (o usa la paleta automática y el nombre/ícono del estado de Home Assistant).
- **Editor visual completo**: configura transparencias, opciones de vista, orden, colores, íconos y entidades directamente desde la interfaz de Lovelace sin escribir YAML.
- **Modal de detalles**: haz clic en cualquier evento para ver horario completo, ubicación, descripción, calendario de origen y acceso directo al diálogo nativo de la entidad.
- **Multi-idioma**: detección automática de **Español** e **Inglés** según el perfil de Home Assistant (o configurable manualmente).

---

## Instalación

### Mediante Marketplace / HACS (Recomendado)

1. Abre **Marketplace** (antes **HACS**) en Home Assistant.
2. Ve a **Frontend** → menú superior derecho **⋮** → **Repositorios personalizados** (*Custom repositories*).
3. Agrega `https://github.com/Lean724/simple-calendars` con categoría **Lovelace** / **Dashboard**.
4. Busca **Simple-Calendars (Month, Week & Day)** e instálalo.
5. Recarga el navegador cuando Home Assistant lo solicite.

### Instalación manual

1. Descarga `simple-calendars.js` desde los *Releases* o desde `dist/simple-calendars.js`.
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
| `hidden` | `boolean` | `false` | Inicia oculto en el filtro rápido. |

### Opciones comunes, Apariencia y Transparencia

| Opción | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `title` | `string` | — | Subtítulo opcional (tarjeta mensual). |
| `entities` | `list` | **Requerido** | Lista de entidades de calendario. |
| `first_day_of_week` | `number` | `1` | `1` para Lunes, `0` para Domingo. |
| `language` | `'es' \| 'en'` | Automático | Fuerza el idioma de la tarjeta. |
| `transparent` | `boolean` | `false` | Fondo 100% transparente sin bordes ni sombras. |
| `background_opacity` | `number` | `100` | Opacidad del fondo de la tarjeta (`0` a `100`). |
| `background_color` | `string` | Tema HA | Color base personalizado para el fondo. |
| `backdrop_blur` | `number` | `0` | Desenfoque de fondo en `px` (`12` automático si `background_opacity < 100`). |
| `border_radius` | `number` | `24` | Radio de las esquinas de la tarjeta en `px`. |
| `hide_border` | `boolean` | `false` | Oculta el borde exterior de la tarjeta. |
| `hide_shadow` | `boolean` | `false` | Oculta la sombra de la tarjeta. |
| `show_navigation` | `boolean` | `false` | Muestra flechas compactas `< Hoy >` en la vista minimalista. |
| `use_entity_color` | `boolean` | `false` | Colorea el ícono y la barra de progreso con el color del calendario en modo minimalista. |

### Opciones de la tarjeta Diaria (`custom:simple-calendar-day-card`)

| Opción | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `show_week_number` | `boolean` | `true` | Muestra la píldora `Semana XX` arriba a la izquierda. |
| `show_progress_bar` | `boolean` | `true` | Muestra la barra de progreso y tiempo restante/duración. |

```yaml
type: custom:simple-calendar-day-card
show_week_number: true
show_progress_bar: true
background_opacity: 85
backdrop_blur: 12
border_radius: 24
entities:
  - entity: calendar.fer_trabajo
    name: Fer trabajo
    icon: mdi:briefcase
  - entity: calendar.casa
    name: Casa
    icon: mdi:home
```

### Opciones de la tarjeta Semanal (`custom:simple-calendar-week-card`)

| Opción | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `days_to_show` | `number` | `7` | Cantidad de días a mostrar (`1`–`14`). |
| `show_week_number` | `boolean` | `true` | Muestra la píldora de semana. |
| `show_progress_bar` | `boolean` | `true` | Muestra la barra de progreso por evento. |
| `show_empty_days` | `boolean` | `false` | Incluye días sin eventos en el resumen semanal. |

```yaml
type: custom:simple-calendar-week-card
days_to_show: 7
show_empty_days: false
entities:
  - entity: calendar.personal
    icon: mdi:account
  - entity: calendar.trabajo
    icon: mdi:briefcase
```

### Opciones de la tarjeta Mensual (`custom:simple-calendar-month-card`)

| Opción | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `max_events_per_day` | `number` | `3` | Cantidad máxima de eventos visibles por celda antes de mostrar `+N más`. |
| `show_week_numbers` | `boolean` | `false` | Muestra la columna izquierda con el número de semana ISO. |
| `compact` | `boolean` | `true` | Celda compacta de altura ajustada. |
| `show_header` | `boolean` | `true` | Muestra la barra de navegación del mes. |
| `show_entity_toggles` | `boolean` | `false` | Muestra chips interactivos para filtrar calendarios. |

```yaml
type: custom:simple-calendar-month-card
first_day_of_week: 1
max_events_per_day: 3
compact: true
entities:
  - entity: calendar.personal
    color: "#1a73e8"
  - entity: calendar.trabajo
    color: "#e67c73"
```

---

## Desarrollo

```bash
npm install
npm run build
```

El bundle compilado listo para distribución se genera en `dist/simple-calendars.js` y `simple-calendars.js`.
