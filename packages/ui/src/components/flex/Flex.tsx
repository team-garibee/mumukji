import clsx from 'clsx';
import { forwardRef } from 'react';
import { Box, type BoxProps } from '@/components/box/Box';
import type { GapProps } from '@/types';
import { getGapPropsClassNames } from '@/utils';
import './Flex.scss';

export type FlexJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around';

export type FlexAlign =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline';

export type FlexWrap = boolean | 'nowrap' | 'wrap' | 'wrap-reverse';

export type FlexProps = BoxProps &
  GapProps & {
    justify?: FlexJustify;
    align?: FlexAlign;
    wrap?: FlexWrap;
  };

const getFlexWrapValue = (wrap?: FlexWrap) => {
  if (wrap === undefined) {
    return undefined;
  }

  return typeof wrap === 'boolean' ? (wrap ? 'wrap' : 'nowrap') : wrap;
};

/**
 * - Box를 확장한 가로(Row) 방향 1차원 Layout Primitive Component입니다. `display: flex`, `flex-direction: row`를 기본으로 갖습니다.
 * - justify/align/wrap으로 정렬·배치를, gap/columnGap/rowGap으로 자식 간 간격을 제어합니다.
 * - 색상·크기 등 시각 속성은 제공하지 않습니다. 필요하다면 className(SCSS)으로 처리하세요.
 */
export const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      as,
      className,
      children,
      justify,
      align,
      wrap,
      gap,
      columnGap,
      rowGap,
      ...rest
    },
    ref,
  ) => {
    const wrapValue = getFlexWrapValue(wrap);

    const flexClassName = clsx(
      'Flex',
      justify && `FlexJustify-${justify}`,
      align && `FlexAlign-${align}`,
      wrapValue && `FlexWrap-${wrapValue}`,
      getGapPropsClassNames({ gap, columnGap, rowGap }),
      className,
    );

    return (
      <Box ref={ref} as={as} className={flexClassName} {...rest}>
        {children}
      </Box>
    );
  },
);

Flex.displayName = 'Flex';
