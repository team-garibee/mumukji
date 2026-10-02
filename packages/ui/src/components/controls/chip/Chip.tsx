import { IconArrowDown } from '@mumukji/icons';
import clsx from 'clsx';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type Ref,
} from 'react';
import styles from './Chip.module.scss';

interface ChipCommonProps {
  children: ReactNode;
}

export type ChipProps =
  | (ChipCommonProps &
      Omit<ComponentPropsWithoutRef<'button'>, 'children'> & {
        suffix: 'dropdown';
      })
  | (ChipCommonProps &
      Omit<ComponentPropsWithoutRef<'span'>, 'children' | 'onClick'> & {
        suffix?: null;
      });

/** 기본 칩은 텍스트 dropdown 칩은 외부 바텀시트를 여는 버튼으로 활용 */
export const Chip = forwardRef<HTMLButtonElement | HTMLSpanElement, ChipProps>(
  (props, ref) => {
    if (props.suffix === 'dropdown') {
      const {
        children,
        className,
        disabled = false,
        suffix: chipSuffix,
        type = 'button',
        ...buttonProps
      } = props;

      return (
        <button
          {...buttonProps}
          ref={ref as Ref<HTMLButtonElement>}
          type={type}
          disabled={disabled}
          aria-disabled={disabled || undefined}
          aria-haspopup={buttonProps['aria-haspopup'] ?? 'dialog'}
          data-suffix={chipSuffix}
          className={clsx(styles.Chip, 'typo-label-md', className)}>
          {children}
          <IconArrowDown size={16} />
        </button>
      );
    }

    const { children, className, suffix: chipSuffix, ...spanProps } = props;

    return (
      <span
        {...spanProps}
        ref={ref as Ref<HTMLSpanElement>}
        data-suffix={chipSuffix ?? undefined}
        className={clsx(styles.Chip, 'typo-label-md', className)}>
        {children}
      </span>
    );
  },
);

Chip.displayName = 'Chip';
