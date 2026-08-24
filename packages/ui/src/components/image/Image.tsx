'use client';

import { IconImage } from '@mumukji/icons';
import clsx from 'clsx';
import {
  createElement,
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardRefRenderFunction,
  type ReactElement,
  type ReactNode,
  type Ref,
  type SyntheticEvent,
} from 'react';
import type { MarginProps } from '../../types';
import { getSpacingPropsClassNames } from '../../utils';
import './Image.scss';

export type ImageOwnProps<C extends ElementType> = {
  as?: C;
  fallback?: ReactNode;
  className?: string;
  onError?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
} & MarginProps;

export type ImageProps<C extends ElementType = 'img'> = ImageOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof ImageOwnProps<C>>;

type ImageComponent = {
  <C extends ElementType = 'img'>(
    props: ImageProps<C> & {
      ref?: ComponentPropsWithRef<C>['ref'];
    },
  ): ReactElement | null;
  displayName?: string;
};

/**
 * - `img` 태그를 추상화한 폴리모픽(Polymorphic) 이미지 컴포넌트
 * - 기본적으로 `<img>` 렌더링, `as` prop으로 `next/image` 등 다른 이미지 컴포넌트 주입 가능.
 *   이때 주입된 컴포넌트의 props 타입 그대로 추론
 *   (예: `as={NextImage}` 사용 시 `next/image`의 `src`, `fill`, `sizes` 등 고유 prop 타입 안전하게 전달 가능)
 * - 이미지 로드 실패 시 실패한 요소 대신 `fallback`으로 전달된 요소로 대체.
 *   `fallback` 없으면 기본 폴백 노출
 * - `src`를 `key`로 사용해 src가 바뀌면 컴포넌트를 리마운트하고 에러 상태를 초기화한다.
 *   (useEffect로 초기화하면 렌더링 이후에나 반영되어 한 프레임 깜빡이는 타이밍 이슈가 있어 key 방식으로 대체)
 * - `margin`(레이아웃)은 Props로 받고, 실제 값은 scss spacing 유틸리티 클래스로 주입.
 *   컴포넌트 코드에는 값 하드코딩 금지
 * - `radius` 등 Visual 속성은 prop으로 받지 않음.
 *   필요하면 `className`으로 `Radius-*` 같은 scss 유틸리티 클래스를 직접 전달할 것
 *   (Layout → Props, Visual → SCSS/className 정책)
 * - 기본 폴백의 배경/보더/컬러 등 고정 시각 값은 `Image.scss`(`.Image-fallback`)로 분리.
 *   `width`/`height`만 인스턴스별로 달라지는 레이아웃 값이라 `style`로 유지.
 */
const ImageInnerRender = <C extends ElementType = 'img'>(
  {
    as,
    fallback,
    className,
    onError,
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    ...rest
  }: ImageProps<C>,
  ref: ComponentPropsWithRef<C>['ref'],
) => {
  const [hasError, setHasError] = useState(false);
  const Component = (as ?? 'img') as ElementType;

  const handleError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(event);
  };

  const imageClassName = clsx(
    getSpacingPropsClassNames({ m, mt, mr, mb, ml, mx, my }),
    className,
  );

  if (hasError) {
    if (fallback) {
      return fallback;
    }

    const { style, width, height } = rest as {
      style?: React.CSSProperties;
      width?: number | string;
      height?: number | string;
    };

    return (
      <span
        ref={ref as Ref<never>}
        role='img'
        aria-label='이미지를 불러오지 못했습니다'
        className={clsx('Image-fallback', imageClassName)}
        style={{
          width: style?.width ?? width,
          height: style?.height ?? height,
          ...style,
        }}>
        <IconImage size={24} />
      </span>
    );
  }

  // `Component`를 JSX 태그로 직접 사용하면 `ElementType`이 함수/문자열 유니온이라
  // "JSX element type ... is not a valid JSX element" 형태의 타입 에러(ts(2786))가 발생할 수 있어, `createElement`로 우회.
  return createElement(Component, {
    ref,
    className: imageClassName,
    onError: handleError,
    ...rest,
  });
};

const ImageInner = forwardRef(
  ImageInnerRender as unknown as ForwardRefRenderFunction<
    HTMLElement,
    ImageOwnProps<ElementType>
  >,
) as unknown as ImageComponent;

const ImageRender = <C extends ElementType = 'img'>(
  props: ImageProps<C>,
  ref: ComponentPropsWithRef<C>['ref'],
) => {
  // C가 커스텀 컴포넌트일 때 src의 실제 타입을 알 수 없으므로(문자열일 수도, next/image의
  // StaticImageData일 수도 있음), key 생성(String(src))에만 쓸 수 있게 unknown으로 안전하게 좁혀서 접근한다.
  const { src } = props as { src?: unknown };

  // src가 바뀌면 새 이미지이므로 key를 통해 컴포넌트를 리마운트하고
  // 이전 실패(hasError) 상태를 다시 초기화한다.
  return <ImageInner key={String(src)} ref={ref} {...props} />;
};

export const Image = forwardRef(
  ImageRender as unknown as ForwardRefRenderFunction<
    HTMLElement,
    ImageOwnProps<ElementType>
  >,
) as unknown as ImageComponent;

Image.displayName = 'Image';
