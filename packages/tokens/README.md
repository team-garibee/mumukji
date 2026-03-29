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
  background-color: var(--color-primary-500);
  font-size: var(--font-size-16);
  padding: var(--spacing-16);
  border-radius: var(--radius-8);
}
```

---

## 제공 토큰

| CSS 변수 prefix  | 설명                                      |
| ---------------- | ----------------------------------------- |
| `--color-`       | 브랜드 컬러 (primary, secondary, gray 등) |
| `--font-size-`   | 폰트 사이즈 (10 ~ 60)                     |
| `--font-weight-` | 폰트 굵기 (300 ~ 800)                     |
| `--font-family-` | 폰트 패밀리                               |
| `--line-height-` | 줄 높이 (100, 140, 160)                   |
| `--spacing-`     | 간격 (4 ~ 64, px)                         |
| `--radius-`      | 보더 라디우스 (0 ~ full, px)              |
| `--opacity-`     | 투명도 (0.1 ~ 1)                          |

## License

`MIT`
