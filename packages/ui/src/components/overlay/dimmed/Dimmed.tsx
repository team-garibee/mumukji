import clsx from 'clsx';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import styles from './Dimmed.module.scss';

export type DimmedProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children' | 'dangerouslySetInnerHTML' | 'aria-hidden' | 'tabIndex'
>;

/** 모달과 바텀시트에 사용하는 반투명 검정 배경 */
export const Dimmed = forwardRef<HTMLDivElement, DimmedProps>(
  ({ className, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={clsx(styles.Dimmed, className)}
      aria-hidden='true'
      tabIndex={-1}
    />
  ),
);

Dimmed.displayName = 'Dimmed';
