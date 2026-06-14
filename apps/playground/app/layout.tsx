import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// 빌드된 패키지의 CSS를 실제 소비자처럼 가져온다.
// 토큰 CSS 변수(--primitive-*, --semantic-* 등)와 폰트가 먼저 로드되어야
// @mumukji/ui 컴포넌트가 올바른 토큰 값을 참조한다.
import '@mumukji/tokens';
import '@mumukji/tokens/font-cdn';
// 아직 @mumukji/ui에 스타일이 없어 dist/index.css가 생성되지 않는다.
// 컴포넌트에 (S)CSS를 추가해 빌드하면 dist/index.css가 생기니, 그때 아래 주석을 해제하세요.
// import '@mumukji/ui/style.css';

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
