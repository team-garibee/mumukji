import { IconCheck } from '@mumukji/icons';
import clsx from 'clsx';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import styles from './Checkbox.module.scss';

export type CheckboxProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'children' | 'type'
> & {
  children: ReactNode;
  className?: string;
};

/**
 * 네이티브 체크박스 동작을 유지하면서 디자인 시스템 스타일을 적용한 checkbox 컴포넌트입니다.
 *
 * `checked`와 `onChange`를 함께 전달하면 제어 컴포넌트로
 * `defaultChecked`를 전달하면 비제어 컴포넌트로 사용할 수 있습니다.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, className, disabled, ...props }, ref) => (
    <label
      className={clsx(
        styles.Checkbox,
        disabled && styles.CheckboxDisabled,
        className,
      )}>
      <input ref={ref} type='checkbox' disabled={disabled} {...props} />
      <span className={styles.CheckboxControl} aria-hidden='true'>
        <IconCheck />
      </span>
      <span className='typo-label-md'>{children}</span>
    </label>
  ),
);

Checkbox.displayName = 'Checkbox';
