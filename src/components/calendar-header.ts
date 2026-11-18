import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { TranslationStrings } from '../constants';
import { toTranslucentColor } from '../styles/shared-styles';
import type { NormalizedCalendarEntity } from '../types';

@customElement('ha-calendar-shared-header')
export class HaCalendarSharedHeader extends LitElement {
  @property({ type: String }) public cardTitle = '';
  @property({ type: String }) public periodLabel = '';
  @property({ type: Array }) public entities: NormalizedCalendarEntity[] = [];
  @property({ attribute: false }) public hiddenEntities: Set<string> = new Set();
  @property({ type: Boolean }) public showEntityToggles = true;
  @property({ type: Boolean }) public loading = false;
  @property({ attribute: false }) public strings!: TranslationStrings;

  private _emit(eventName: string, detail?: unknown): void {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
        bubbles: true,
        composed: true,
      }),
    );
  }

  protected render() {
    return html`
      <div class="header-root">
        <div class="header-top">
          <div class="title-group">
            ${this.cardTitle
              ? html`<div class="card-subtitle">${this.cardTitle}</div>`
              : nothing}
            <div class="period-title">${this.periodLabel}</div>
          </div>

          <div class="nav-controls">
            <button
              class="icon-btn"
              type="button"
              title=${this.strings?.prev || 'Previous'}
              aria-label=${this.strings?.prev || 'Previous'}
              @click=${() => this._emit('cal-prev')}
            >
              <ha-icon icon="mdi:chevron-left"></ha-icon>
            </button>

            <button
              class="today-btn"
              type="button"
              @click=${() => this._emit('cal-today')}
            >
              ${this.strings?.today || 'Today'}
            </button>

            <button
              class="icon-btn"
              type="button"
              title=${this.strings?.next || 'Next'}
              aria-label=${this.strings?.next || 'Next'}
              @click=${() => this._emit('cal-next')}
            >
              <ha-icon icon="mdi:chevron-right"></ha-icon>
            </button>

            <button
              class="icon-btn ${this.loading ? 'spinning' : ''}"
              type="button"
              title=${this.strings?.refresh || 'Refresh'}
              aria-label=${this.strings?.refresh || 'Refresh'}
              @click=${() => this._emit('cal-refresh')}
            >
              <ha-icon icon="mdi:refresh"></ha-icon>
            </button>
          </div>
        </div>

        ${this.showEntityToggles && this.entities.length > 0
          ? html`
              <div class="entity-chips">
                ${this.entities.map((entity) => {
                  const isHidden = this.hiddenEntities.has(entity.entity);
                  return html`
                    <button
                      type="button"
                      class="entity-chip ${isHidden ? 'is-hidden' : ''}"
                      style="--chip-color: ${entity.color}; --chip-bg: ${toTranslucentColor(
                        entity.color,
                        0.14,
                      )};"
                      aria-pressed=${!isHidden}
                      @click=${() =>
                        this._emit('cal-toggle-entity', { entity: entity.entity })}
                    >
                      <span class="chip-dot"></span>
                      <ha-icon class="chip-icon" .icon=${entity.icon}></ha-icon>
                      <span class="chip-name">${entity.name}</span>
                    </button>
                  `;
                })}
              </div>
            `
          : nothing}
      </div>
    `;
  }

  static styles = css`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'ha-calendar-shared-header': HaCalendarSharedHeader;
  }
}
