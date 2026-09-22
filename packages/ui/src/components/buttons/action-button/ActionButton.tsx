import { forwardRef } from 'react';
import { ButtonBase, type ButtonBaseProps } from '../base/ButtonBase';
import {
  ActionButtonContent,
  getActionButtonClassName,
  type ActionButtonStyleProps,
} from './ActionButtonContent';

export type ActionButtonProps = ActionButtonStyleProps & ButtonBaseProps;

/**
 * 사용자의 동작을 실행하는 기본 button 컴포넌트입니다.
 * `isLoading`일 때 포커스를 유지한 채 클릭이 차단되고 로딩 텍스트를 표시합니다.
 */
export const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  (
    {
      className,
      children,
      variant = 'solid',
      tone = 'brand',
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
      className={getActionButtonClassName({
        className,
        variant,
        tone,
        size,
      })}
      {...props}>
      <ActionButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ActionButtonContent>
    </ButtonBase>
  ),
);

ActionButton.displayName = 'ActionButton';
