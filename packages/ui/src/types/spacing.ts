export const SPACING_TOKENS = [
  'null',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
  '10xl',
  '11xl',
] as const;

export type Spacing = (typeof SPACING_TOKENS)[number];

export interface PaddingProps {
  p?: Spacing;
  px?: Spacing;
  py?: Spacing;
  pt?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
}

export interface MarginProps {
  m?: Spacing;
  mx?: Spacing;
  my?: Spacing;
  mt?: Spacing;
  mr?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
}

export interface GapProps {
  gap?: Spacing;
  columnGap?: Spacing;
  rowGap?: Spacing;
}

export type SpacingProps = PaddingProps & MarginProps;
