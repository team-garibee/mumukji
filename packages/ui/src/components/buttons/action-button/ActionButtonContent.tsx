import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './ActionButton.module.scss';

export type ActionButtonVariant = 'solid' | 'outline' | 'ghost';
export type ActionButtonTone = 'brand' | 'interactive' | 'negative' | 'neutral';
export type ActionButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ActionButtonIconPosition = 'left' | 'right';

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
    size === 'lg' || size === 'md' ? 'typo-label-lg' : 'typo-label-md';

  return clsx(
    styles.ActionButton,
    styles[`ActionButton-${variant}`],
    styles[`ActionButton-${tone}`],
    styles[`ActionButton-${size}`],
    typographyClassName,
    className,
  );
}

export const ActionButtonContent = ({
  children,
  icon,
  iconPosition = 'left',
}: Pick<ActionButtonStyleProps, 'icon' | 'iconPosition'> & {
  children: ReactNode;
}) => {
  const hasIcon = icon !== null && icon !== undefined;

  return (
    <>
      {hasIcon && iconPosition === 'left' && (
        <span className={styles.ActionButtonIcon} aria-hidden='true'>
          {icon}
        </span>
      )}
      <span className={styles.ActionButtonLabel}>{children}</span>
      {hasIcon && iconPosition === 'right' && (
        <span className={styles.ActionButtonIcon} aria-hidden='true'>
          {icon}
        </span>
      )}
    </>
  );
};
