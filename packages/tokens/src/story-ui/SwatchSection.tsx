import type { CSSProperties } from 'react';

interface SwatchItem {
  key: string;
  boxStyle: CSSProperties;
  labels: string[];
}

interface SwatchSectionProps {
  title: string;
  items: SwatchItem[];
  gap?: number;
}

export function SwatchSection({ title, items, gap = 8 }: SwatchSectionProps) {
  return (
    <div>
      <p style={{ marginBottom: 8, fontWeight: 600 }}>{title}</p>
      <div
        style={{
          display: 'flex',
          gap,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
        {items.map(({ key, boxStyle, labels }) => (
          <div
            key={key}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}>
            <div
              style={{
                width: 48,
                height: 48,
                ...boxStyle,
              }}
            />
            {labels.map((label, i) => (
              <span
                key={i}
                style={{
                  fontSize: i === 0 ? 11 : 10,
                  color: i === 0 ? undefined : '#888',
                }}>
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
