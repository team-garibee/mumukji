# @mumukji/tokens

머먹지(Mumukji) 서비스의 디자인 시스템을 구성하는 공식 디자인 토큰 패키지입니다.
컬러, 타이포그래피, 스페이싱 등 디자인의 기초가 되는 값들을 제공합니다.

## Features

- **CSS Custom Properties**: CSS 커스텀 프로퍼티로 제공되어 CSS/SCSS에서 바로 사용 가능
- **Simple**: import 한 줄로 모든 토큰을 `var(--토큰명)` 형식으로 사용 가능

---

## 설치

```bash
# npm 사용 시
npm install @mumukji/tokens

# pnpm 사용 시
pnpm add @mumukji/tokens
```

---

## 사용

```css
/* CSS 사용 시 */
@import '@mumukji/tokens/css';
```

```scss
// SCSS 사용 시
@use '@mumukji/tokens/css';
```

이후 `var(--토큰명)` 형식으로 사용할 수 있습니다.

```css
.button {
  background-color: var(--color-vermilion-500);
  font-size: var(--font-size-16);
  padding: var(--spacing-16);
  border-radius: var(--radius-8);
}
```

---

## Primitive vs Semantic

토큰은 두 계층으로 나뉩니다.

- **Primitive**: 색상 스케일, 크기 등 원시값 그 자체 (`--color-vermilion-500`, `--spacing-16`, `--radius-16`)
- **Semantic**: 원시값을 용도에 맞게 참조하는 토큰 (`--color-bg-brand-solid`, `--spacing-md`, `--radius-m`)

컴포넌트를 만들 때는 primitive를 직접 쓰기보다 **semantic 토큰 사용을 권장**합니다. 디자인이 바뀌어 참조하는 primitive 값이 달라져도 semantic 토큰명은 그대로 유지되기 때문입니다.

```css
.button {
  /* ❌ primitive를 직접 사용 */
  background-color: var(--color-vermilion-500);

  /* ✅ 용도에 맞는 semantic 사용 */
  background-color: var(--color-bg-brand-solid);
  border-radius: var(--radius-m);
  padding: var(--spacing-md);
}
```

---

## 제공 토큰

| CSS 변수 prefix   | 설명                                      |
| ----------------- | ----------------------------------------- |
| `--color-`        | 브랜드 컬러 (primary, secondary, gray 등) |
| `--font-size-`    | 폰트 사이즈 (10 ~ 60)                     |
| `--font-weight-`  | 폰트 굵기 (300 ~ 800)                     |
| `--font-family-`  | 폰트 패밀리                               |
| `--line-height-`  | 줄 높이 (100, 140, 160)                   |
| `--spacing-`      | 간격 (4 ~ 64, px)                         |
| `--radius-`       | 보더 라디우스 (0 ~ full, px)              |
| `--border-width-` | 보더 두께 (1, 2, px)                      |
| `--shadow-`       | 그림자 (100 ~ 400)                        |
| `--opacity-`      | 투명도 (0.1 ~ 1)                          |

---

## Storybook

Primitive/Semantic 토큰 전체는 Storybook의 `Tokens/Primitive`, `Tokens/Semantic` 스토리에서 실제 색상·간격·라디우스·그림자 값을 시각적으로 확인할 수 있습니다.

## License

`MIT`
