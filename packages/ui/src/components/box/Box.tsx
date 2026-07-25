import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { SpacingProps } from '../../types';
import { getSpacingPropsClassNames } from '../../utils';

export type BoxAs =
  | 'div'
  | 'span'
  | 'main'
  | 'header'
  | 'footer'
  | 'aside'
  | 'nav';

export type BoxProps = SpacingProps &
  Omit<ComponentPropsWithoutRef<BoxAs>, keyof SpacingProps | 'as'> & {
    as?: BoxAs;
    className?: string;
    children?: ReactNode;
  };

/**
 * - 패딩·마진을 가지는 가장 기본적인 블록 컨테이너입니다. 기본적으로 `<div>`를 렌더링합니다.
 * - `display: flex`/`grid` 같은 레이아웃 속성은 갖지 않습니다. 필요하다면 Flex/Grid 컴포넌트를 사용하세요.
 * - 색상·장식 등 시각 속성은 기본적으로 `className`(SCSS)으로 처리합니다. `style`은 런타임에만 정해지는 값(가상화·드래그 라이브러리 연동 등)을 위해 열어두었지만,
 *   고정된 값은 가급적 className(SCSS)으로 처리해 주세요. 반응형 미디어쿼리는 특이도상 `style`이 항상 이기므로 `style`로 반응형 값을 주지 마세요.
 * - `as="span"`처럼 인라인 태그를 사용하는 경우, 수직(top/bottom) padding·margin이 브라우저 box model상 기대대로 적용되지 않을 수 있습니다.
 *   이 경우 `className`으로 `display: inline-block` 등을 함께 지정하세요.
 * - spacing 값으로 `"null"`을 주면 해당 padding/margin을 명시적으로 0으로 리셋합니다.
 */
export const Box = ({
  as: Component = 'div',
  className,
  children,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  ...rest
}: BoxProps) => {
  const spacingProps = {
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
  };
  const boxClassName = clsx(getSpacingPropsClassNames(spacingProps), className);

  return (
    <Component className={boxClassName} {...rest}>
      {children}
    </Component>
  );
};
