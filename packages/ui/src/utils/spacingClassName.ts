import type { Spacing } from '../types';

export type SpacingClassPrefix =
  | 'SpacingP'
  | 'SpacingPx'
  | 'SpacingPy'
  | 'SpacingPt'
  | 'SpacingPr'
  | 'SpacingPb'
  | 'SpacingPl'
  | 'SpacingM'
  | 'SpacingMx'
  | 'SpacingMy'
  | 'SpacingMt'
  | 'SpacingMr'
  | 'SpacingMb'
  | 'SpacingMl'
  | 'SpacingGap'
  | 'SpacingColumnGap'
  | 'SpacingRowGap';

export const getSpacingClassName = (
  prefix: SpacingClassPrefix,
  spacing?: Spacing,
) => {
  if (!spacing) {
    return undefined;
  }

  return `${prefix}-${spacing}`;
};
