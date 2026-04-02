import type { ReactNode } from 'react';
import styles from './story.module.scss';

interface StackListProps {
  title: string;
  children: ReactNode;
}

export function StackList({ title, children }: StackListProps) {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
}
