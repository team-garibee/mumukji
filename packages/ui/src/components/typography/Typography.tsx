'use client';

import clsx from 'clsx';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardRefRenderFunction,
  type ReactElement,
  type ReactNode,
  type Ref,
} from 'react';
import type { MarginProps } from '@/types';
import { getSpacingPropsClassNames } from '@/utils';
import './Typography.scss';

export type TypographyAs =
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label'
  | 'strong'
  | 'em'
  | 'small'
  | 'time'
  | 'code';

export type TypographyVariant =
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'heading-xs'
  | 'body-md-strong'
  | 'body-md'
  | 'body-sm-strong'
  | 'body-sm'
  | 'label-lg-strong'
  | 'label-lg'
  | 'label-md-strong'
  | 'label-md'
  | 'label-sm-strong'
  | 'label-sm'
  | 'caption-md'
  | 'caption-sm';

export type TypographyFontSize =
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 22
  | 24
  | 28
  | 30
  | 32
  | 36
  | 40
  | 48
  | 60;

export type TypographyFontWeight = 300 | 400 | 500 | 600 | 700 | 800;

export type TypographyLineHeight = 100 | 140 | 160;

export type TypographyColor =
  | 'fg-brand'
  | 'fg-brand-contrast'
  | 'fg-interactive'
  | 'fg-interactive-contrast'
  | 'fg-informative'
  | 'fg-informative-subtle'
  | 'fg-informative-contrast'
  | 'fg-negative'
  | 'fg-highlight'
  | 'fg-neutral'
  | 'fg-neutral-muted'
  | 'fg-neutral-subtle'
  | 'fg-neutral-faint'
  | 'fg-placeholder'
  | 'fg-disabled'
  | 'fg-on-solid';

export interface TypographyOwnProps<
  C extends TypographyAs,
> extends MarginProps {
  as?: C;
  children?: ReactNode;
  className?: string;
  variant?: TypographyVariant;
  size?: TypographyFontSize;
  weight?: TypographyFontWeight;
  color?: TypographyColor;
  lineHeight?: TypographyLineHeight;
}

export type TypographyProps<C extends TypographyAs = 'span'> =
  TypographyOwnProps<C> &
    Omit<ComponentPropsWithoutRef<C>, keyof TypographyOwnProps<C> | 'style'>;

type TypographyComponent = {
  <C extends TypographyAs = 'span'>(
    props: TypographyProps<C> & {
      ref?: ComponentPropsWithRef<C>['ref'];
    },
  ): ReactElement | null;
  displayName?: string;
};

/**
 * 디자인 토큰으로 정의된 텍스트 스타일을 적용하는 Primitive 컴포넌트입니다.
 *
 * - `variant`는 Figma typography 토큰의 완성형 스타일을 적용합니다.
 * - `size`, `weight`, `lineHeight`, `color`는 전달된 경우 variant보다 우선합니다.
 * - `as`로 텍스트의 의미에 맞는 HTML 태그를 지정합니다. 기본값은 `span`입니다.
 * - `m`, `mt` 등의 margin prop은 공통 spacing 클래스로 적용합니다.
 */
const TypographyRender = <C extends TypographyAs = 'span'>(
  {
    as,
    children,
    className,
    variant = 'body-md',
    size,
    weight,
    color,
    lineHeight,
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    ...rest
  }: TypographyProps<C>,
  ref: ComponentPropsWithRef<C>['ref'],
) => {
  const Component = (as ?? 'span') as ElementType;

  const typographyClassName = clsx(
    'Typography',
    `typo-${variant}`,
    size && `TypographySize-${size}`,
    weight && `TypographyWeight-${weight}`,
    color && `TypographyColor-${color}`,
    lineHeight && `TypographyLineHeight-${lineHeight}`,
    getSpacingPropsClassNames({ m, mt, mr, mb, ml, mx, my }),
    className,
  );

  return (
    <Component
      ref={ref as Ref<never>}
      className={typographyClassName}
      {...rest}>
      {children}
    </Component>
  );
};

export const Typography = forwardRef(
  TypographyRender as unknown as ForwardRefRenderFunction<
    HTMLElement,
    TypographyOwnProps<TypographyAs>
  >,
) as unknown as TypographyComponent;

Typography.displayName = 'Typography';
