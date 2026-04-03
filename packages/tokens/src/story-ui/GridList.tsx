import type { CSSProperties } from 'react';
import styles from './story.module.scss';

interface GridListItem {
  key: string;
  boxStyle: CSSProperties;
  labels: string[];
}

interface GridListProps {
  title: string;
  items: GridListItem[];
  wide?: boolean;
}

export function GridList({ title, items, wide = false }: GridListProps) {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <div className={`${styles.grid}${wide ? ` ${styles.gridWide}` : ''}`}>
        {items.map(({ key, boxStyle, labels }) => (
          <div key={key} className={styles.item}>
            <div className={styles.box} style={boxStyle} />
            {labels.map((label, i) => (
              <span
                key={i}
                className={i === 0 ? styles.label : styles.subLabel}>
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
