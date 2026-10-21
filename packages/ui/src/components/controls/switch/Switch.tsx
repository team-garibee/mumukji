import clsx from 'clsx';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import styles from './Switch.module.scss';

export type SwitchTone = 'interactive' | 'neutral';

export type SwitchProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'children' | 'type' | 'role'
> & {
  children?: ReactNode;
  tone?: SwitchTone;
  className?: string;
};

/**
 * 켜짐/꺼짐 상태를 즉시 전환하는 네이티브 체크박스 기반 스위치입니다.
 *
 * `checked`와 `onChange`를 함께 전달하면 제어 컴포넌트로
 * `defaultChecked`를 전달하면 비제어 컴포넌트로 사용할 수 있습니다.
 * `children`이 없으면 접근성을 위해 `aria-label`로 이름을 지정해야 합니다.
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ children, className, disabled, tone = 'interactive', ...props }, ref) => (
    <label
      className={clsx(
        styles.Switch,
        styles[`Switch-${tone}`],
        disabled && styles.SwitchDisabled,
        className,
      )}>
      <input
        ref={ref}
        type='checkbox'
        role='switch'
        disabled={disabled}
        {...props}
      />
      {children && (
        <span className={clsx('typo-label-sm', styles.SwitchLabel)}>
          {children}
        </span>
      )}
      <span className={styles.SwitchTrack} aria-hidden='true'>
        <span className={styles.SwitchThumb} />
      </span>
    </label>
  ),
);

Switch.displayName = 'Switch';
