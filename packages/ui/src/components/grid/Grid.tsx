import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { GapProps, MarginProps, PaddingProps } from '../../types';
import type { BoxAs } from '../box/Box';

export type GridProps = PaddingProps &
  MarginProps &
  GapProps &
  Omit<
    ComponentPropsWithoutRef<BoxAs>,
    keyof PaddingProps | keyof MarginProps | keyof GapProps | 'as'
  > & {
    as?: BoxAs;
    columns?: number;
    rows?: number;
    className?: string;
    children?: ReactNode;
  };
