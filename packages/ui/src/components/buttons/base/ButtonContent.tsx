import type { ReactNode } from 'react';
import './ButtonBase.scss';

export type ButtonIconPosition = 'left' | 'right';

export interface ButtonContentProps {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
}

/**
 * 버튼·링크 내부의 아이콘과 라벨을 렌더링하는 공통 컴포넌트
 * 아이콘 크기는 부모에서 정의한 `--button-icon-size`를 따름
 */
export const ButtonContent = ({
  children,
  icon,
  iconPosition = 'left',
}: ButtonContentProps) => {
  const hasIcon = icon !== null && icon !== undefined;

  return (
    <>
      {hasIcon && iconPosition === 'left' && (
        <span className='ButtonContentIcon' aria-hidden='true'>
          {icon}
        </span>
      )}
      <span className='ButtonContentLabel'>{children}</span>
      {hasIcon && iconPosition === 'right' && (
        <span className='ButtonContentIcon' aria-hidden='true'>
          {icon}
        </span>
      )}
    </>
  );
};
