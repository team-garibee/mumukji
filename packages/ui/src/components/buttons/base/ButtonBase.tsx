import clsx from 'clsx';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import './ButtonBase.scss';

export type ButtonBaseProps = ComponentPropsWithoutRef<'button'> & {
  isLoading?: boolean;
};

/**
 * 실제 button 태그를 렌더링하는 버튼 공통 기반 컴포넌트
 * 파생 버튼은 이 컴포넌트로 disabled 및 loading 동작 공유
 */
export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      className,
      children,
      disabled = false,
      isLoading = false,
      type = 'button',
      ...rest
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      className={clsx('ButtonBase', className)}
      {...rest}>
      {children}
    </button>
  ),
);

ButtonBase.displayName = 'ButtonBase';
