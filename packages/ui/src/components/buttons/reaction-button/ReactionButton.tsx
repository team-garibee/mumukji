import clsx from 'clsx';
import { forwardRef, type ReactNode } from 'react';
import { ButtonBase, type ButtonBaseProps } from '../base/ButtonBase';
import styles from './ReactionButton.module.scss';

export type ReactionButtonTone = 'brand';

interface ReactionButtonOwnProps {
  /** 버튼 활성화 여부 */
  isActive?: boolean;
  /** 버튼 색상 톤 */
  tone?: ReactionButtonTone;
  /** 버튼에 활용할 아이콘 */
  icon: ReactNode;
}

export type ReactionButtonProps = ReactionButtonOwnProps & ButtonBaseProps;

/**
 * 좋아요, 즐겨찾기처럼 사용자의 반응 상태를 전환하는 아이콘 버튼입니다.
 */
export const ReactionButton = forwardRef<
  HTMLButtonElement,
  ReactionButtonProps
>(({ className, icon, isActive = false, tone = 'brand', ...props }, ref) => (
  <ButtonBase
    ref={ref}
    {...props}
    aria-pressed={isActive}
    className={clsx(
      styles.ReactionButton,
      styles[`ReactionButton-${tone}`],
      isActive && styles.ReactionButtonActive,
      className,
    )}>
    <span className={styles.ReactionButtonIcon} aria-hidden='true'>
      {icon}
    </span>
  </ButtonBase>
));

ReactionButton.displayName = 'ReactionButton';
