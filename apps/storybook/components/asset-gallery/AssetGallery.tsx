import { type ReactNode } from 'react';
import Copy from '../copy/Copy';
import styles from './AssetGallery.module.css';

interface AssetItemProps {
  exportName: string;
  size?: number;
  children: ReactNode;
}

export const AssetItem = ({
  exportName,
  size = 120,
  children,
}: AssetItemProps) => (
  <Copy copyText={exportName}>
    <div className={styles.item} style={{ width: size + 32 }}>
      <div className={styles.visual} style={{ width: size, height: size }}>
        {children}
      </div>
      <code className={styles.name}>{exportName}</code>
    </div>
  </Copy>
);

interface AssetGroupProps {
  label: string;
  children: ReactNode;
}

export const AssetGroup = ({ label, children }: AssetGroupProps) => (
  <div className={styles.section}>
    <p className={styles.label}>{label}</p>
    <div className={styles.grid}>{children}</div>
  </div>
);
