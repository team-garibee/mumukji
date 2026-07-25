import * as UI from '@mumukji/ui';

export default function Home() {
  // @mumukji/ui에서 export된 컴포넌트 목록 (dist의 exports map을 통해 해석됨).
  const exportNames = Object.keys(UI);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Mumukji UI Playground</h1>
      <p>
        빌드된 <code>@mumukji/ui</code> 패키지를 실제 소비자(Next.js)처럼
        import해서 확인하는 곳이에요.
      </p>

      <section style={{ marginTop: '1.5rem' }}>
        <h2>현재 export된 항목</h2>
        {exportNames.length === 0 ? (
          <p>
            아직 export된 컴포넌트가 없어요. <code>packages/ui/src</code>에서
            컴포넌트를 만들고 <code>index.ts</code>에서 export한 뒤
            <code> pnpm --filter @mumukji/ui watch</code>로 다시 빌드하면 여기에
            나타납니다.
          </p>
        ) : (
          <ul>
            {exportNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      </section>

      {/* 컴포넌트가 생기면 아래에 직접 렌더해서 확인하세요.
          예) <UI.Button>눌러보기</UI.Button> */}
    </main>
  );
}
