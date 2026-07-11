import type { Radius } from '../types';

/**
 * radius 값을 `Radius-{token}` 형태의 유틸리티 클래스명으로 변환.
 * 실제 값은 styles/radius.scss에서 `var(--radius-{token})`으로 주입,
 * 컴포넌트 코드에는 radius 값 하드코딩 금지.
 */
export const getRadiusClassName = (radius?: Radius) => {
  if (!radius) {
    return undefined;
  }

  return `Radius-${radius}`;
};
