# @mumukji/ui

Mumukji에서 공통으로 사용하는 React UI 컴포넌트 패키지입니다.

## Component structure

`src/components`는 Storybook의 UI 분류와 같은 기준으로 구성합니다.

```text
components/
├── primitive/  # UI/01. Primitive
│   ├── box/
│   ├── flex/
│   ├── form/
│   ├── grid/
│   ├── image/
│   ├── list/
│   ├── section/
│   └── typography/
├── buttons/    # UI/02. Buttons
│   ├── action-button/
│   ├── base/
│   └── reaction-button/
└── controls/   # UI/03. Controls
    └── checkbox/
```

모든 컴포넌트는 패키지 루트에서 export합니다. 내부 경로 대신 `@mumukji/ui`를 사용하세요.

```tsx
import { Box, Checkbox } from '@mumukji/ui';
```
