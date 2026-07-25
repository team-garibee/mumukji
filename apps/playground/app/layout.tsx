import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@mumukji/ui/style.css';

export const metadata: Metadata = {
  title: 'Mumukji UI Playground',
  description: 'Test surface for the built @mumukji/ui package.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
