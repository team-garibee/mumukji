import clsx from 'clsx';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import './ButtonBase.scss';

export type ButtonBaseProps = ComponentPropsWithoutRef<'button'> & {
  isLoading?: boolean;
  loadingText?: ReactNode;
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
      loadingText = '로딩 중...',
      onClick,
      type = 'button',
      ...rest
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      aria-disabled={disabled || isLoading || undefined}
      aria-busy={isLoading || undefined}
      onClick={isLoading ? undefined : onClick}
      className={clsx('ButtonBase', className)}
      {...rest}>
      {isLoading ? loadingText : children}
    </button>
  ),
);

ButtonBase.displayName = 'ButtonBase';
