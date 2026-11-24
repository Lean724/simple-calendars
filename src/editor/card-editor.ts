import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  DAY_CARD_TYPE,
  DEFAULT_CALENDAR_COLORS,
  DEFAULT_ICON,
  EDITOR_TAG,
  FOCUS_EVENT_CARD_TYPE,
  LANGUAGE_LABELS,
  TRANSLATIONS,
  resolveLanguage,
  type TranslationStrings,
} from '../constants';
import type {
  AllDayPosition,
  AnyCalendarCardConfig,
  CalendarEntityConfig,
  DayCardConfig,
  FocusEventCardConfig,
  HomeAssistant,
  MonthCalendarSize,
  MonthCardConfig,
  MonthEventDisplay,
  MonthLayout,
  SupportedLanguage,
} from '../types';

@customElement(EDITOR_TAG)
export class HaCalendarCardEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: AnyCalendarCardConfig;

  public setConfig(config: AnyCalendarCardConfig): void {
    this._config = { ...config };
  }

  private _getEntities(): CalendarEntityConfig[] {
    if (!this._config) return [];
    const raw =
      Array.isArray(this._config.entities) && this._config.entities.length > 0
        ? this._config.entities
        : this._config.entity
          ? [this._config.entity]
          : [];

    return raw.map((item) =>
      typeof item === 'string' ? { entity: item } : { ...item },
    );
  }

  private _emitConfig(nextConfig: AnyCalendarCardConfig): void {
    this._config = nextConfig;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: nextConfig },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _updateField(key: string, value: unknown): void {
    if (!this._config) return;
    const next: Record<string, unknown> = { ...this._config };
    if (value === undefined || value === '') {
      delete next[key];
    } else {
      next[key] = value;
    }
    this._emitConfig(next as unknown as AnyCalendarCardConfig);
  }

  private _updateEntities(nextEntities: CalendarEntityConfig[]): void {
    if (!this._config) return;
    const next: Record<string, unknown> = {
      ...this._config,
      entities: nextEntities,
    };
    delete next.entity;
    this._emitConfig(next as unknown as AnyCalendarCardConfig);
  }

  private _updateEntityAt(
    index: number,
    patch: Partial<CalendarEntityConfig>,
  ): void {
    const list = this._getEntities();
    const updated = { ...list[index], ...patch };
    if (!updated.name) delete updated.name;
    if (!updated.icon) delete updated.icon;
    if (!updated.color) delete updated.color;
    list[index] = updated;
    this._updateEntities(list);
  }

  private _addEntity(): void {
    const list = this._getEntities();
    const existingIds = new Set(list.map((e) => e.entity));
    const availableIds = Object.keys(this.hass?.states || {})
      .filter((id) => id.startsWith('calendar.'))
      .sort();
    const nextId =
      availableIds.find((id) => !existingIds.has(id)) || availableIds[0] || '';
    const nextColor =
      DEFAULT_CALENDAR_COLORS[list.length % DEFAULT_CALENDAR_COLORS.length];

    list.push({
      entity: nextId,
      color: nextColor,
      icon: DEFAULT_ICON,
    });
    this._updateEntities(list);
  }

  private _removeEntity(index: number): void {
    const list = this._getEntities();
    list.splice(index, 1);
    this._updateEntities(list);
  }

  private _moveEntity(index: number, delta: -1 | 1): void {
    const list = this._getEntities();
    const target = index + delta;
    if (target < 0 || target >= list.length) return;
    const [item] = list.splice(index, 1);
    list.splice(target, 0, item);
    this._updateEntities(list);
  }

  private _getCardKind(): 'month' | 'day' | 'focus-event' {
    const type = (this._config?.type || '').toLowerCase();
    if (type.includes(FOCUS_EVENT_CARD_TYPE) || type.includes('event')) {
      return 'focus-event';
    }
    if (type.includes(DAY_CARD_TYPE) || type.includes('day')) return 'day';
    return 'month';
  }

  private _normalizeHexForColorInput(color?: string, idx = 0): string {
    const trimmed = (color || '').trim();
    if (/^#[0-9a-f]{6}$/i.test(trimmed)) {
      return trimmed;
    }
    return DEFAULT_CALENDAR_COLORS[idx % DEFAULT_CALENDAR_COLORS.length];
  }

  private _renderEntitySelector(entry: CalendarEntityConfig, index: number) {
    const hasHaEntityPicker = Boolean(customElements.get('ha-entity-picker'));
    if (hasHaEntityPicker) {
      return html`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${entry.entity || ''}
          .includeDomains=${['calendar']}
          allow-custom-entity
          @value-changed=${(e: CustomEvent<{ value: string }>) =>
            this._updateEntityAt(index, { entity: e.detail.value })}
        ></ha-entity-picker>
      `;
    }

    const calendarIds = Object.keys(this.hass?.states || {})
      .filter((id) => id.startsWith('calendar.'))
      .sort();

    return html`
      <div class="entity-fallback-inputs">
        ${calendarIds.length > 0
          ? html`
              <select
                .value=${calendarIds.includes(entry.entity) ? entry.entity : ''}
                @change=${(e: Event) => {
                  const val = (e.target as HTMLSelectElement).value;
                  if (val) this._updateEntityAt(index, { entity: val });
                }}
              >
                <option value="">-- calendar.* --</option>
                ${calendarIds.map((id) => {
                  const name = this.hass?.states?.[id]?.attributes?.friendly_name;
                  return html`
                    <option value=${id} ?selected=${entry.entity === id}>
                      ${name ? `${name} (${id})` : id}
                    </option>
                  `;
                })}
              </select>
            `
          : nothing}
        <input
          type="text"
          .value=${entry.entity || ''}
          placeholder="calendar.personal"
          @change=${(e: Event) =>
            this._updateEntityAt(index, {
              entity: (e.target as HTMLInputElement).value.trim(),
            })}
        />
      </div>
    `;
  }

  private _renderIconInput(entry: CalendarEntityConfig, index: number) {
    const hasHaIconPicker = Boolean(customElements.get('ha-icon-picker'));
    if (hasHaIconPicker) {
      return html`
        <ha-icon-picker
          .hass=${this.hass}
          .value=${entry.icon || ''}
          @value-changed=${(e: CustomEvent<{ value: string }>) =>
            this._updateEntityAt(index, { icon: e.detail.value })}
        ></ha-icon-picker>
      `;
    }

    return html`
      <div class="icon-preview-input">
        <ha-icon .icon=${entry.icon || DEFAULT_ICON}></ha-icon>
        <input
          type="text"
          .value=${entry.icon || ''}
          placeholder="mdi:calendar"
          @change=${(e: Event) =>
            this._updateEntityAt(index, {
              icon: (e.target as HTMLInputElement).value.trim(),
            })}
        />
      </div>
    `;
  }

  protected render() {
    if (!this._config) return nothing;

    const lang = resolveLanguage(this._config.language, this.hass);
    const strings = TRANSLATIONS[lang];
    const kind = this._getCardKind();
    const entities = this._getEntities();
    const firstDay = this._config.first_day_of_week ?? 1;
    const selectedLang = this._config.language;
    const isMinimalLayout = kind !== 'month';
    const opacityValue =
      typeof this._config.background_opacity === 'number'
        ? this._config.background_opacity
        : this._config.transparent
          ? 0
          : 100;

    return html`
      <div class="editor-root">
        <!-- General Section -->
        <div class="section">
          <div class="section-title">${strings.editorGeneralSection}</div>

          <div class="field">
            <label>${strings.editorTitle}</label>
            <input
              type="text"
              .value=${this._config.title || ''}
              placeholder=${strings.editorTitlePlaceholder}
              @change=${(e: Event) =>
                this._updateField('title', (e.target as HTMLInputElement).value)}
            />
          </div>

          <div class="two-col">
            <div class="field">
              <label>${strings.editorFirstDay}</label>
              <select
                .value=${String(firstDay)}
                @change=${(e: Event) =>
                  this._updateField(
                    'first_day_of_week',
                    Number((e.target as HTMLSelectElement).value),
                  )}
              >
                <option value="1" ?selected=${firstDay === 1}>
                  ${strings.editorMonday}
                </option>
                <option value="0" ?selected=${firstDay === 0}>
                  ${strings.editorSunday}
                </option>
              </select>
            </div>

            <div class="field">
              <label>${strings.editorLanguage}</label>
              <select
                .value=${this._config.language || ''}
                @change=${(e: Event) =>
                  this._updateField(
                    'language',
                    ((e.target as HTMLSelectElement).value || undefined) as
                      | SupportedLanguage
                      | undefined,
                  )}
              >
                <option value="">${strings.editorLangAuto}</option>
                ${(Object.keys(LANGUAGE_LABELS) as SupportedLanguage[]).map(
                  (code) => html`
                    <option value=${code} ?selected=${selectedLang === code}>
                      ${LANGUAGE_LABELS[code]}
                    </option>
                  `,
                )}
              </select>
            </div>
          </div>

          <div class="toggles-list">
            ${kind === 'focus-event'
              ? html`
                  <label class="checkbox-row">
                    <input
                      type="checkbox"
                      .checked=${Boolean(this._config.show_entity_toggles)}
                      @change=${(e: Event) =>
                        this._updateField(
                          'show_entity_toggles',
                          (e.target as HTMLInputElement).checked,
                        )}
                    />
                    <span>${strings.editorShowToggles}</span>
                  </label>
                `
              : isMinimalLayout
                ? html`
                    <label class="checkbox-row">
                      <input
                        type="checkbox"
                        .checked=${Boolean(this._config.show_navigation)}
                        @change=${(e: Event) =>
                          this._updateField(
                            'show_navigation',
                            (e.target as HTMLInputElement).checked,
                          )}
                      />
                      <span>${strings.editorShowNavigation}</span>
                    </label>
                  `
                : html`
                    <label class="checkbox-row">
                      <input
                        type="checkbox"
                        .checked=${this._config.show_header !== false}
                        @change=${(e: Event) =>
                          this._updateField(
                            'show_header',
                            (e.target as HTMLInputElement).checked,
                          )}
                      />
                      <span>${strings.editorShowHeader}</span>
                    </label>

                    ${this._config.show_header !== false
                      ? html`
                          <label class="checkbox-row sub-option">
                            <input
                              type="checkbox"
                              .checked=${this._config.show_navigation !== false}
                              @change=${(e: Event) =>
                                this._updateField(
                                  'show_navigation',
                                  (e.target as HTMLInputElement).checked,
                                )}
                            />
                            <span>${strings.editorShowNavigation}</span>
                          </label>
                        `
                      : nothing}

                    <label class="checkbox-row">
                      <input
                        type="checkbox"
                        .checked=${this._config.show_entity_toggles !== false}
                        @change=${(e: Event) =>
                          this._updateField(
                            'show_entity_toggles',
                            (e.target as HTMLInputElement).checked,
                          )}
                      />
                      <span>${strings.editorShowToggles}</span>
                    </label>
                  `}
          </div>
        </div>

        <!-- Appearance & Transparency Section -->
        <div class="section">
          <div class="section-title">${strings.editorAppearanceSection}</div>

          <div class="toggles-list">
            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${Boolean(this._config.transparent)}
                @change=${(e: Event) =>
                  this._updateField(
                    'transparent',
                    (e.target as HTMLInputElement).checked,
                  )}
              />
              <span>${strings.editorTransparent}</span>
            </label>

            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${Boolean(this._config.use_entity_color)}
                @change=${(e: Event) =>
                  this._updateField(
                    'use_entity_color',
                    (e.target as HTMLInputElement).checked,
                  )}
              />
              <span>${strings.editorUseEntityColor}</span>
            </label>
          </div>

          <div class="two-col">
            <div class="field">
              <label>${strings.editorBackgroundOpacity}: ${opacityValue}%</label>
              <input
                type="range"
                min="0"
                max="100"
                .value=${String(opacityValue)}
                @input=${(e: Event) =>
                  this._updateField(
                    'background_opacity',
                    Math.max(0, Math.min(100, Number((e.target as HTMLInputElement).value) || 0)),
                  )}
              />
            </div>

            <div class="field">
              <label>${strings.editorBackdropBlur}</label>
              <input
                type="number"
                min="0"
                max="40"
                .value=${String(this._config.backdrop_blur ?? 0)}
                @change=${(e: Event) =>
                  this._updateField(
                    'backdrop_blur',
                    Math.max(0, Math.min(40, Number((e.target as HTMLInputElement).value) || 0)),
                  )}
              />
            </div>
          </div>

          <div class="two-col">
            <div class="field">
              <label>${strings.editorBackgroundColor}</label>
              <input
                type="text"
                .value=${this._config.background_color || ''}
                placeholder="#1c1d21"
                @change=${(e: Event) =>
                  this._updateField(
                    'background_color',
                    (e.target as HTMLInputElement).value.trim(),
                  )}
              />
            </div>

            <div class="field">
              <label>${strings.editorBorderRadius}</label>
              <input
                type="number"
                min="0"
                max="48"
                .value=${String(this._config.border_radius ?? 24)}
                @change=${(e: Event) =>
                  this._updateField(
                    'border_radius',
                    Math.max(0, Math.min(48, Number((e.target as HTMLInputElement).value) || 0)),
                  )}
              />
            </div>
          </div>

          <div class="two-col">
            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${Boolean(this._config.hide_border)}
                @change=${(e: Event) =>
                  this._updateField(
                    'hide_border',
                    (e.target as HTMLInputElement).checked,
                  )}
              />
              <span>${strings.editorHideBorder}</span>
            </label>

            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${Boolean(this._config.hide_shadow)}
                @change=${(e: Event) =>
                  this._updateField(
                    'hide_shadow',
                    (e.target as HTMLInputElement).checked,
                  )}
              />
              <span>${strings.editorHideShadow}</span>
            </label>
          </div>
        </div>

        <!-- Card View Section -->
        <div class="section">
          <div class="section-title">${strings.editorViewSection}</div>

          <div class="toggles-list">
            ${kind !== 'focus-event'
              ? html`
                  <label class="checkbox-row">
                    <input
                      type="checkbox"
                      .checked=${this._config.show_current_day !== false}
                      @change=${(e: Event) =>
                        this._updateField(
                          'show_current_day',
                          (e.target as HTMLInputElement).checked,
                        )}
                    />
                    <span>${strings.editorShowCurrentDay}</span>
                  </label>
                `
              : nothing}

            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${this._config.show_all_day_events !== false}
                @change=${(e: Event) =>
                  this._updateField(
                    'show_all_day_events',
                    (e.target as HTMLInputElement).checked,
                  )}
              />
              <span>${strings.editorShowAllDayEvents}</span>
            </label>

            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${this._config.show_completed_events !== false}
                @change=${(e: Event) =>
                  this._updateField(
                    'show_completed_events',
                    (e.target as HTMLInputElement).checked,
                  )}
              />
              <span>${strings.editorShowCompletedEvents}</span>
            </label>

            ${this._config.show_completed_events !== false
              ? html`
                  <label class="checkbox-row sub-option">
                    <input
                      type="checkbox"
                      .checked=${this._config.dim_completed_events !== false}
                      @change=${(e: Event) =>
                        this._updateField(
                          'dim_completed_events',
                          (e.target as HTMLInputElement).checked,
                        )}
                    />
                    <span>${strings.editorDimCompletedEvents}</span>
                  </label>
                `
              : nothing}
          </div>

          ${this._config.show_all_day_events !== false
            ? html`
                <div class="field">
                  <label>${strings.editorAllDayPosition}</label>
                  <select
                    .value=${this._config.all_day_position || 'top'}
                    @change=${(e: Event) =>
                      this._updateField(
                        'all_day_position',
                        (e.target as HTMLSelectElement).value as AllDayPosition,
                      )}
                  >
                    <option
                      value="top"
                      ?selected=${(this._config.all_day_position || 'top') === 'top'}
                    >
                      ${strings.editorPositionTop}
                    </option>
                    <option
                      value="bottom"
                      ?selected=${this._config.all_day_position === 'bottom'}
                    >
                      ${strings.editorPositionBottom}
                    </option>
                  </select>
                </div>
              `
            : nothing}

          ${kind === 'month'
            ? this._renderMonthOptions(this._config as MonthCardConfig, strings)
            : kind === 'focus-event'
              ? this._renderFocusEventOptions(this._config as FocusEventCardConfig, strings)
              : this._renderDayOptions(this._config as DayCardConfig, strings)}
        </div>

        <!-- Multi-entity Section -->
        <div class="section">
          <div class="section-header-row">
            <div class="section-title">${strings.editorEntitiesTitle}</div>
            <button
              type="button"
              class="add-btn"
              @click=${() => this._addEntity()}
            >
              <ha-icon icon="mdi:plus"></ha-icon>
              <span>${strings.editorAddEntity}</span>
            </button>
          </div>

          ${entities.length === 0
            ? html`<div class="empty-entities">${strings.editorNoEntities}</div>`
            : html`
                <div class="entities-list">
                  ${entities.map((entry, idx) => {
                    const colorHex = this._normalizeHexForColorInput(
                      entry.color,
                      idx,
                    );
                    return html`
                      <div class="entity-card">
                        <div class="entity-card-top">
                          <span
                            class="entity-badge"
                            style="--badge-color: ${colorHex};"
                          >
                            #${idx + 1}
                          </span>
                          <div class="entity-actions">
                            <button
                              type="button"
                              class="mini-icon-btn"
                              ?disabled=${idx === 0}
                              @click=${() => this._moveEntity(idx, -1)}
                            >
                              <ha-icon icon="mdi:arrow-up"></ha-icon>
                            </button>
                            <button
                              type="button"
                              class="mini-icon-btn"
                              ?disabled=${idx === entities.length - 1}
                              @click=${() => this._moveEntity(idx, 1)}
                            >
                              <ha-icon icon="mdi:arrow-down"></ha-icon>
                            </button>
                            <button
                              type="button"
                              class="mini-icon-btn danger"
                              title=${strings.editorRemove}
                              @click=${() => this._removeEntity(idx)}
                            >
                              <ha-icon icon="mdi:delete-outline"></ha-icon>
                            </button>
                          </div>
                        </div>

                        <div class="field">
                          <label>${strings.editorEntity}</label>
                          ${this._renderEntitySelector(entry, idx)}
                        </div>

                        <div class="two-col">
                          <div class="field">
                            <label>${strings.editorCustomName}</label>
                            <input
                              type="text"
                              .value=${entry.name || ''}
                              placeholder="Ej. Personal"
                              @change=${(e: Event) =>
                                this._updateEntityAt(idx, {
                                  name: (e.target as HTMLInputElement).value.trim(),
                                })}
                            />
                          </div>

                          <div class="field">
                            <label>${strings.editorCustomColor}</label>
                            <div class="color-row">
                              <input
                                type="color"
                                .value=${colorHex}
                                @input=${(e: Event) =>
                                  this._updateEntityAt(idx, {
                                    color: (e.target as HTMLInputElement).value,
                                  })}
                              />
                              <input
                                type="text"
                                .value=${entry.color || colorHex}
                                @change=${(e: Event) =>
                                  this._updateEntityAt(idx, {
                                    color: (e.target as HTMLInputElement).value.trim(),
                                  })}
                              />
                            </div>
                          </div>
                        </div>

                        <div class="field">
                          <label>${strings.editorCustomIcon}</label>
                          ${this._renderIconInput(entry, idx)}
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

  private _renderMonthOptions(
    cfg: MonthCardConfig,
    strings: TranslationStrings,
  ) {
    const currentLayout: MonthLayout =
      cfg.layout === 'compact' ? 'compact' : 'classic';
    const currentSize: MonthCalendarSize =
      cfg.calendar_size || (cfg.compact === true ? 'compact' : 'normal');
    const currentDisplay: MonthEventDisplay =
      cfg.event_display === 'dots' ? 'dots' : 'pills';
    const defaultMax =
      currentLayout === 'compact' || currentDisplay === 'dots'
        ? 4
        : currentSize === 'compact'
          ? 2
          : 3;

    return html`
      <div class="two-col">
        <div class="field">
          <label>${strings.editorLayout}</label>
          <select
            .value=${currentLayout}
            @change=${(e: Event) =>
              this._updateField(
                'layout',
                (e.target as HTMLSelectElement).value as MonthLayout,
              )}
          >
            <option value="classic" ?selected=${currentLayout === 'classic'}>
              ${strings.editorLayoutClassic}
            </option>
            <option value="compact" ?selected=${currentLayout === 'compact'}>
              ${strings.editorLayoutCompact}
            </option>
          </select>
        </div>

        <div class="field">
          <label>${strings.editorCalendarSize}</label>
          <select
            .value=${currentSize}
            @change=${(e: Event) => {
              const size = (e.target as HTMLSelectElement).value as MonthCalendarSize;
              if (!this._config) return;
              const next: Record<string, unknown> = {
                ...this._config,
                calendar_size: size,
              };
              delete next.compact;
              this._emitConfig(next as unknown as AnyCalendarCardConfig);
            }}
          >
            <option value="compact" ?selected=${currentSize === 'compact'}>
              ${strings.editorSizeCompact}
            </option>
            <option value="normal" ?selected=${currentSize === 'normal'}>
              ${strings.editorSizeNormal}
            </option>
            <option value="large" ?selected=${currentSize === 'large'}>
              ${strings.editorSizeLarge}
            </option>
          </select>
        </div>
      </div>

      <div class="two-col">
        ${currentLayout === 'classic'
          ? html`
              <div class="field">
                <label>${strings.editorEventDisplay}</label>
                <select
                  .value=${currentDisplay}
                  @change=${(e: Event) =>
                    this._updateField(
                      'event_display',
                      (e.target as HTMLSelectElement).value as MonthEventDisplay,
                    )}
                >
                  <option value="pills" ?selected=${currentDisplay === 'pills'}>
                    ${strings.editorDisplayPills}
                  </option>
                  <option value="dots" ?selected=${currentDisplay === 'dots'}>
                    ${strings.editorDisplayDots}
                  </option>
                </select>
              </div>
            `
          : nothing}

        <div class="field">
          <label>${strings.editorMaxEvents}</label>
          <input
            type="number"
            min="1"
            max="12"
            .value=${String(cfg.max_events_per_day ?? defaultMax)}
            @change=${(e: Event) =>
              this._updateField(
                'max_events_per_day',
                Math.max(1, Number((e.target as HTMLInputElement).value) || defaultMax),
              )}
          />
        </div>
      </div>

      <div class="toggles-list">
        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${Boolean(cfg.show_week_numbers)}
            @change=${(e: Event) =>
              this._updateField(
                'show_week_numbers',
                (e.target as HTMLInputElement).checked,
              )}
          />
          <span>${strings.editorShowWeekNumbers}</span>
        </label>

        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${cfg.show_month_grid !== false}
            @change=${(e: Event) =>
              this._updateField(
                'show_month_grid',
                (e.target as HTMLInputElement).checked,
              )}
          />
          <span>${strings.editorShowMonthGrid}</span>
        </label>

        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${cfg.show_day_summary !== false}
            @change=${(e: Event) =>
              this._updateField(
                'show_day_summary',
                (e.target as HTMLInputElement).checked,
              )}
          />
          <span>${strings.editorShowDaySummary}</span>
        </label>

        ${cfg.show_day_summary !== false
          ? html`
              <label class="checkbox-row sub-option">
                <input
                  type="checkbox"
                  .checked=${cfg.show_progress_bar !== false}
                  @change=${(e: Event) =>
                    this._updateField(
                      'show_progress_bar',
                      (e.target as HTMLInputElement).checked,
                    )}
                />
                <span>${strings.editorShowProgressBar}</span>
              </label>
            `
          : nothing}
      </div>
    `;
  }

  private _renderDayOptions(
    cfg: DayCardConfig,
    strings: TranslationStrings,
  ) {
    return html`
      <div class="toggles-list">
        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${cfg.show_week_number !== false}
            @change=${(e: Event) =>
              this._updateField(
                'show_week_number',
                (e.target as HTMLInputElement).checked,
              )}
          />
          <span>${strings.editorShowWeekNumber}</span>
        </label>

        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${cfg.show_progress_bar !== false}
            @change=${(e: Event) =>
              this._updateField(
                'show_progress_bar',
                (e.target as HTMLInputElement).checked,
              )}
          />
          <span>${strings.editorShowProgressBar}</span>
        </label>
      </div>
    `;
  }

  private _renderFocusEventOptions(
    cfg: FocusEventCardConfig,
    strings: TranslationStrings,
  ) {
    return html`
      <div class="two-col">
        <div class="field">
          <label>${strings.editorMaxPreviousEvents}</label>
          <input
            type="number"
            min="0"
            max="10"
            .value=${String(cfg.max_previous_events ?? 2)}
            @change=${(e: Event) =>
              this._updateField(
                'max_previous_events',
                Math.max(0, Math.min(10, Number((e.target as HTMLInputElement).value) || 0)),
              )}
          />
        </div>

        <div class="field">
          <label>${strings.editorMaxUpcomingEvents}</label>
          <input
            type="number"
            min="0"
            max="10"
            .value=${String(cfg.max_upcoming_events ?? 2)}
            @change=${(e: Event) =>
              this._updateField(
                'max_upcoming_events',
                Math.max(0, Math.min(10, Number((e.target as HTMLInputElement).value) || 0)),
              )}
          />
        </div>
      </div>

      <div class="toggles-list">
        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${cfg.show_progress_bar !== false}
            @change=${(e: Event) =>
              this._updateField(
                'show_progress_bar',
                (e.target as HTMLInputElement).checked,
              )}
          />
          <span>${strings.editorShowProgressBar}</span>
        </label>
      </div>
    `;
  }

  static styles = css`
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
}

declare global {
  interface HTMLElementTagNameMap {
    [EDITOR_TAG]: HaCalendarCardEditor;
  }
}
