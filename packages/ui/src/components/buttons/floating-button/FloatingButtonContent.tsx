import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './FloatingButton.module.scss';

export type FloatingButtonVariant = 'solid' | 'outline';
export type FloatingButtonSize = 'lg' | 'md' | 'sm' | 'xs';
export type FloatingButtonIconPosition = 'left' | 'right';

export interface FloatingButtonStyleProps {
  variant?: FloatingButtonVariant;
  size?: FloatingButtonSize;
  icon?: ReactNode;
  iconPosition?: FloatingButtonIconPosition;
}

type FloatingButtonClassNameProps = Pick<
  FloatingButtonStyleProps,
  'variant' | 'size'
> & {
  className?: string;
};

export function getFloatingButtonClassName({
  className,
  variant = 'solid',
  size = 'lg',
}: FloatingButtonClassNameProps) {
  const typographyClassName =
    size === 'lg' || size === 'md' ? 'typo-label-lg' : 'typo-label-md';

  return clsx(
    styles.FloatingButton,
    styles[`FloatingButton-${variant}`],
    styles[`FloatingButton-${size}`],
    typographyClassName,
    className,
  );
}

export const FloatingButtonContent = ({
  children,
  icon,
  iconPosition = 'left',
}: Pick<FloatingButtonStyleProps, 'icon' | 'iconPosition'> & {
  children: ReactNode;
}) => {
  const hasIcon = icon !== null && icon !== undefined;

  return (
    <>
      {hasIcon && iconPosition === 'left' && (
        <span className={styles.FloatingButtonIcon} aria-hidden='true'>
          {icon}
        </span>
      )}
      <span className={styles.FloatingButtonLabel}>{children}</span>
      {hasIcon && iconPosition === 'right' && (
        <span className={styles.FloatingButtonIcon} aria-hidden='true'>
          {icon}
        </span>
      )}
    </>
  );
};
