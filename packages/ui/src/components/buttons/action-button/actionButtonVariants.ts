import clsx from 'clsx';
import type { ReactNode } from 'react';
import type { ButtonIconPosition } from '../base/ButtonContent';
import styles from './ActionButton.module.scss';

export type ActionButtonVariant = 'solid' | 'outline' | 'ghost';
export type ActionButtonTone = 'brand' | 'interactive' | 'negative' | 'neutral';
export type ActionButtonSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg';
export type ActionButtonIconPosition = ButtonIconPosition;

export interface ActionButtonStyleProps {
  variant?: ActionButtonVariant;
  tone?: ActionButtonTone;
  size?: ActionButtonSize;
  icon?: ReactNode;
  iconPosition?: ActionButtonIconPosition;
}

type ActionButtonClassNameProps = Pick<
  ActionButtonStyleProps,
  'variant' | 'tone' | 'size'
> & {
  className?: string;
};

export function getActionButtonClassName({
  className,
  variant = 'solid',
  tone = 'brand',
  size = 'lg',
}: ActionButtonClassNameProps) {
  const typographyClassName =
    size === '2xs'
      ? 'typo-label-sm'
      : size === 'lg' || size === 'md'
        ? 'typo-label-lg'
        : 'typo-label-md';

  return clsx(
    styles.ActionButton,
    styles[`ActionButton-${variant}`],
    styles[`ActionButton-${tone}`],
    styles[`ActionButton-${size}`],
    typographyClassName,
    className,
  );
}
