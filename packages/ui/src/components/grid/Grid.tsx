import clsx from 'clsx';
import type { CSSProperties } from 'react';
import type { GapProps } from '../../types';
import { getGapPropsClassNames } from '../../utils';
import { Box, type BoxProps } from '../box/Box';

export type GridProps = BoxProps &
  GapProps & {
    columns?: number;
    rows?: number;
  };

/**
 * - Box를 확장한 2차원 Layout Primitive Component입니다. `display: grid`를 기본으로 갖습니다.
 * - columns/rows로 그리드의 열·행 개수를, gap/columnGap/rowGap으로 자식 간 간격을 제어합니다.
 * - grid-template-areas, 셀 위치 지정, justify/align 등 세부 배치는 prop으로 제공하지 않습니다. 필요하다면 className(SCSS)으로 처리하세요.
 */
export const Grid = ({
  as,
  className,
  children,
  columns,
  rows,
  gap,
  columnGap,
  rowGap,
  style,
  ...rest
}: GridProps) => {
  const gridClassName = clsx(
    'grid',
    getGapPropsClassNames({ gap, columnGap, rowGap }),
    className,
  );

  const gridStyle = {
    ...style,
    '--grid-columns': columns,
    '--grid-rows': rows,
  } as CSSProperties;

  return (
    <Box as={as} className={gridClassName} style={gridStyle} {...rest}>
      {children}
    </Box>
  );
};
