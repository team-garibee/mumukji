import type { GapProps, Spacing, SpacingProps } from '../types';

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

export const getSpacingPropsClassNames = ({
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
}: SpacingProps) => [
  getSpacingClassName('SpacingP', p),
  getSpacingClassName('SpacingPx', px),
  getSpacingClassName('SpacingPy', py),
  getSpacingClassName('SpacingPt', pt),
  getSpacingClassName('SpacingPr', pr),
  getSpacingClassName('SpacingPb', pb),
  getSpacingClassName('SpacingPl', pl),
  getSpacingClassName('SpacingM', m),
  getSpacingClassName('SpacingMx', mx),
  getSpacingClassName('SpacingMy', my),
  getSpacingClassName('SpacingMt', mt),
  getSpacingClassName('SpacingMr', mr),
  getSpacingClassName('SpacingMb', mb),
  getSpacingClassName('SpacingMl', ml),
];

export const getGapPropsClassNames = ({ gap, columnGap, rowGap }: GapProps) => [
  getSpacingClassName('SpacingGap', gap),
  getSpacingClassName('SpacingColumnGap', columnGap),
  getSpacingClassName('SpacingRowGap', rowGap),
];
