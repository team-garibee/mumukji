import clsx from 'clsx';
import {
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  type SyntheticEvent,
} from 'react';
import type { Radius } from '../../types';
import { getRadiusClassName } from '../../utils';

export type ImageOwnProps<C extends ElementType> = {
  as?: C;
  fallback?: ReactNode;
  radius?: Radius;
  className?: string;
  onError?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
};

export type ImageProps<C extends ElementType = 'img'> = ImageOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof ImageOwnProps<C>>;

/**
 * - `img` 태그를 추상화한 폴리모픽(Polymorphic) 이미지 컴포넌트
 * - 기본적으로 `<img>` 렌더링, `as` prop으로 `next/image` 등 다른 이미지
 *   컴포넌트 주입 가능. 이때 주입된 컴포넌트의 props 타입 그대로 추론
 *   (예: `as={NextImage}` 사용 시 `next/image`의 `src`, `fill`, `sizes` 등
 *   고유 prop 타입 안전하게 전달 가능)
 * - 이미지 로드 실패 시 실패한 요소 대신 `fallback`으로 전달된 요소로 대체.
 *   `fallback` 없으면 실패한 요소 유지
 * - `radius`는 `var(--radius-*)` 디자인 토큰만 사용, 값 하드코딩 금지
 */
export const Image = <C extends ElementType = 'img'>({
  as,
  fallback,
  radius,
  className,
  onError,
  ...rest
}: ImageProps<C>) => {
  const [hasError, setHasError] = useState(false);
  const Component = (as ?? 'img') as ElementType;

  if (hasError && fallback) {
    return fallback;
  }

  const handleError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(event);
  };

  const imageClassName = clsx(getRadiusClassName(radius), className);

  return (
    <Component className={imageClassName} onError={handleError} {...rest} />
  );
};
