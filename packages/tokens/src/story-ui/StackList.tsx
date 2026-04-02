import type { ReactNode } from 'react';

interface StackListProps {
  title: string;
  children: ReactNode;
}

export function StackList({ title, children }: StackListProps) {
  return (
    <div>
      <p style={{ marginBottom: 8, fontWeight: 600 }}>{title}</p>
      {children}
    </div>
  );
}
