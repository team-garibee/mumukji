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
 *
 * 접근성
 * - `onClose`가 없으면 `role="tooltip"`이 적용됩니다. 툴팁에 `id`를 주고,
 *   가리키는 대상 요소에 `aria-describedby`로 연결해 설명으로 읽히게 해 주세요.
 * - `onClose`가 있으면 툴팁 안에 조작 요소(닫기 버튼)가 생기므로 `role="tooltip"`을 적용하지 않습니다.
 *   필요하면 `role`을 직접 지정할 수 있습니다.
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
      // tooltip 역할 안에는 조작 요소를 둘 수 없어 닫기 버튼이 없을 때만 지정
      role={onClose ? undefined : 'tooltip'}
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
            aria-label='닫기'
            onClick={onClose}
          />
        </span>
      )}
    </div>
  ),
);

Tooltip.displayName = 'Tooltip';
