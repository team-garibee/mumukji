import { forwardRef } from 'react';
import { ButtonBase, type ButtonBaseProps } from '../base/ButtonBase';
import {
  FloatingButtonContent,
  getFloatingButtonClassName,
  type FloatingButtonStyleProps,
} from './FloatingButtonContent';

export type FloatingButtonProps = FloatingButtonStyleProps & ButtonBaseProps;

/**
 * 화면 위에 떠 있는 캡슐(pill) 형태의 버튼입니다.
 * 화면상 위치(fixed 등)는 컴포넌트 책임 범위 밖이며, 사용하는 쪽에서 처리해야 합니다.
 */
export const FloatingButton = forwardRef<
  HTMLButtonElement,
  FloatingButtonProps
>(
  (
    {
      className,
      children,
      variant = 'solid',
      size = 'lg',
      icon,
      iconPosition = 'left',
      ...props
    },
    ref,
  ) => (
    <ButtonBase
      ref={ref}
      {...props}
      className={getFloatingButtonClassName({
        className,
        variant,
        size,
      })}>
      <FloatingButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </FloatingButtonContent>
    </ButtonBase>
  ),
);

FloatingButton.displayName = 'FloatingButton';
