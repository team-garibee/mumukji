import { IconClose } from '@mumukji/icons';
import clsx from 'clsx';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import { IconButton } from '../../buttons/icon-button/IconButton';
import styles from './Tooltip.module.scss';

export type TooltipTone = 'interactive' | 'neutral';

/** 말풍선 기준 꼬리 위치 */
export type TooltipArrowPlacement =
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

interface TooltipOwnProps {
  children: ReactNode;
  tone?: TooltipTone;
  arrowPlacement?: TooltipArrowPlacement;
  onClose?: () => void;
}

export type TooltipProps = TooltipOwnProps &
  Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

/**
 * 꼬리가 달린 말풍선 형태의 툴팁입니다.
 *
 * 말풍선 UI만 담당하며, 열림 여부와 트리거 기준 위치는 사용하는 쪽에서 지정합니다.
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      className,
      tone = 'interactive',
      arrowPlacement = 'left',
      onClose,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={clsx(
        styles.Tooltip,
        'typo-caption-md',
        styles[`Tooltip-${tone}`],
        styles[`Tooltip-arrow-${arrowPlacement}`],
        className,
      )}
      {...props}>
      <span className={styles.TooltipContent}>{children}</span>
      {onClose && (
        <span className={styles.TooltipCloseSlot}>
          <IconButton
            className={styles.TooltipClose}
            icon={<IconClose />}
            size='xs'
            emphasis='subtle'
            onClick={onClose}
          />
        </span>
      )}
    </div>
  ),
);

Tooltip.displayName = 'Tooltip';
