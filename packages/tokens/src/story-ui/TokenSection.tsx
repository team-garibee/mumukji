import type { ReactNode } from 'react';

interface TokenSectionProps {
  title: string;
  children: ReactNode;
}

export function TokenSection({ title, children }: TokenSectionProps) {
  return (
    <div>
      <p style={{ marginBottom: 8, fontWeight: 600 }}>{title}</p>
      {children}
    </div>
  );
}
