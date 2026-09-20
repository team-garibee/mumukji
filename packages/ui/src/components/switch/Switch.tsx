import clsx from 'clsx';
import { forwardRef, type ReactNode } from 'react';
import { ButtonBase, type ButtonBaseProps } from '../buttons/base/ButtonBase';
import styles from './Switch.module.scss';

export type SwitchTone = 'interactive' | 'neutral';

interface SwitchOwnProps {
  isSelected?: boolean;
  tone?: SwitchTone;
  label?: ReactNode;
}

export type SwitchProps = SwitchOwnProps &
  Omit<ButtonBaseProps, 'isLoading' | 'loadingText' | 'role'>;

/**
 * 켜짐/꺼짐 상태를 즉시 전환하는 스위치입니다.
 * 상태는 사용하는 화면에서 관리합니다.
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    { className, isSelected = false, tone = 'interactive', label, ...props },
    ref,
  ) => (
    <ButtonBase
      ref={ref}
      role='switch'
      aria-checked={isSelected}
      className={clsx(
        styles.Switch,
        styles[`Switch-${tone}`],
        isSelected && styles.SwitchSelected,
        className,
      )}
      {...props}>
      {label && (
        <span className={clsx('typo-label-sm', styles.SwitchLabel)}>
          {label}
        </span>
      )}
      <span className={styles.SwitchTrack} aria-hidden='true'>
        <span className={styles.SwitchThumb} />
      </span>
    </ButtonBase>
  ),
);

Switch.displayName = 'Switch';
