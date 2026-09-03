import clsx from 'clsx';
import { forwardRef, type ReactNode } from 'react';
import { ButtonBase, type ButtonBaseProps } from '../base/ButtonBase';
import styles from './CategoryButton.module.scss';

interface CategoryButtonOwnProps {
  icon: ReactNode;
  label: ReactNode;
  description?: ReactNode;
  isActive?: boolean;
}

export type CategoryButtonProps = CategoryButtonOwnProps & ButtonBaseProps;

/**
 * 카테고리를 다중 선택할 수 있는 토글형 버튼입니다.
 */
export const CategoryButton = forwardRef<
  HTMLButtonElement,
  CategoryButtonProps
>(
  (
    { className, icon, label, description, isActive = false, ...props },
    ref,
  ) => (
    <ButtonBase
      ref={ref}
      {...props}
      aria-pressed={isActive}
      className={clsx(
        styles.CategoryButton,
        isActive && styles.CategoryButtonActive,
        className,
      )}>
      <span className={styles.CategoryButtonIcon} aria-hidden='true'>
        {icon}
      </span>
      <span className={styles.CategoryButtonLabel}>{label}</span>
      {description && (
        <span className={styles.CategoryButtonDescription}>{description}</span>
      )}
    </ButtonBase>
  ),
);

CategoryButton.displayName = 'CategoryButton';
