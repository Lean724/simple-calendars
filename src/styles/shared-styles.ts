import { css } from 'lit';

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

export const sharedCardStyles = css`
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
