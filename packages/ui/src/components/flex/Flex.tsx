import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { GapProps, MarginProps, PaddingProps } from '../../types';
import type { BoxAs } from '../box/Box';

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

export type FlexProps = PaddingProps &
  MarginProps &
  GapProps &
  Omit<
    ComponentPropsWithoutRef<BoxAs>,
    keyof PaddingProps | keyof MarginProps | keyof GapProps | 'as'
  > & {
    as?: BoxAs;
    justify?: FlexJustify;
    align?: FlexAlign;
    wrap?: FlexWrap;
    className?: string;
    children?: ReactNode;
  };
