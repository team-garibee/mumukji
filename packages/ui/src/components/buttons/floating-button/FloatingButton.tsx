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
 * position: fixed로 화면 우측 하단에 고정되며, 위치는 컴포넌트가 직접 관리합니다.
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
      onClick,
      ...props
    },
    ref,
  ) => (
    <ButtonBase
      ref={ref}
      onClick={onClick}
      className={getFloatingButtonClassName({
        className,
        variant,
        size,
      })}
      {...props}>
      <FloatingButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </FloatingButtonContent>
    </ButtonBase>
  ),
);

FloatingButton.displayName = 'FloatingButton';
