import { css } from 'lit';
import type { BaseCalendarCardConfig } from '../types';

export function toTranslucentColor(color: string, alpha = 0.16): string {
  const trimmed = (color || '').trim();
  const hexMatch = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(trimmed);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map((c) => c + c)
        .join('');
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  const rgbMatch = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i.exec(trimmed);
  if (rgbMatch) {
    return `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${alpha})`;
  }
  const pct = Math.round(alpha * 100);
  return `color-mix(in srgb, ${trimmed || '#1a73e8'} ${pct}%, transparent)`;
}

export interface CardSurfaceResult {
  className: string;
  style: string;
}

export function computeCardSurfaceStyle(
  config: BaseCalendarCardConfig,
): CardSurfaceResult {
  const isTransparent = Boolean(config.transparent);
  const rawOpacity =
    typeof config.background_opacity === 'number' &&
    !Number.isNaN(config.background_opacity)
      ? Math.max(0, Math.min(100, config.background_opacity))
      : isTransparent
        ? 0
        : 100;

  const fullyTransparent = isTransparent || rawOpacity === 0;
  const hasPartialOpacity = !fullyTransparent && rawOpacity < 100;
  const customBg = config.background_color?.trim();
  const radius =
    typeof config.border_radius === 'number' && !Number.isNaN(config.border_radius)
      ? Math.max(0, config.border_radius)
      : 24;

  const explicitBlur =
    typeof config.backdrop_blur === 'number' && !Number.isNaN(config.backdrop_blur)
      ? Math.max(0, config.backdrop_blur)
      : hasPartialOpacity
        ? 12
        : 0;

  const styles: string[] = [
    `border-radius: ${radius}px`,
    `--ha-card-border-radius: ${radius}px`,
  ];

  if (fullyTransparent) {
    styles.push(
      'background: transparent !important',
      'border-width: 0px',
      'border-color: transparent',
      '--ha-card-border-width: 0px',
      'box-shadow: none',
      '--ha-card-box-shadow: none',
    );
  } else {
    if (hasPartialOpacity) {
      const base =
        customBg || 'var(--ha-card-background, var(--card-background-color, #1c1d21))';
      styles.push(`background: color-mix(in srgb, ${base} ${rawOpacity}%, transparent)`);
    } else if (customBg) {
      styles.push(`background: ${customBg}`);
    }

    if (explicitBlur > 0) {
      styles.push(
        `backdrop-filter: blur(${explicitBlur}px)`,
        `-webkit-backdrop-filter: blur(${explicitBlur}px)`,
      );
    }

    if (config.hide_border) {
      styles.push(
        'border-width: 0px',
        'border-color: transparent',
        '--ha-card-border-width: 0px',
      );
    }

    if (config.hide_shadow) {
      styles.push('box-shadow: none', '--ha-card-box-shadow: none');
    }
  }

  const classes: string[] = [];
  if (fullyTransparent) classes.push('is-transparent');
  if (hasPartialOpacity) classes.push('has-opacity');

  return {
    className: classes.join(' '),
    style: styles.join('; '),
  };
}

export const sharedCardStyles = css`
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
    transition: opacity 0.15s ease, filter 0.15s ease;
  }

  .min-event-item:hover {
    opacity: 0.86;
  }

  .min-event-item.is-past {
    opacity: 0.48;
    filter: grayscale(1);
  }

  .min-event-item.is-past:hover {
    opacity: 0.78;
  }

  .min-event-item.is-past .min-event-title {
    text-decoration: line-through;
    text-decoration-thickness: 1.5px;
    color: var(--cal-text-secondary);
  }

  .min-event-item.is-past .min-event-icon,
  .min-event-item.is-past .min-event-time,
  .min-event-item.is-past .min-event-duration {
    color: var(--cal-text-secondary);
  }

  .min-event-item.is-past .min-progress-track {
    background: color-mix(in srgb, var(--cal-text-secondary) 22%, transparent);
  }

  .min-event-item.is-past .min-progress-fill {
    background: var(--cal-text-secondary);
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
