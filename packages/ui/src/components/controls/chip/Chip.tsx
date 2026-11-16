import { IconArrowDown } from '@mumukji/icons';
import clsx from 'clsx';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type Ref,
} from 'react';
import { ButtonBase } from '@/components/buttons/base/ButtonBase';
import styles from '@/components/controls/chip/Chip.module.scss';

interface ChipCommonProps {
  children: ReactNode;
}

export type ChipProps =
  | (ChipCommonProps &
      Omit<ComponentPropsWithoutRef<'button'>, 'children'> & {
        dropdown: true;
      })
  | (ChipCommonProps &
      Omit<ComponentPropsWithoutRef<'span'>, 'children' | 'onClick'> & {
        dropdown?: false;
      });

/** 기본 칩은 텍스트 dropdown 칩은 외부 바텀시트를 여는 버튼으로 활용 */
export const Chip = forwardRef<HTMLButtonElement | HTMLSpanElement, ChipProps>(
  (props, ref) => {
    if (props.dropdown) {
      const {
        children,
        className,
        dropdown: _dropdown,
        ...buttonProps
      } = props;

      return (
        <ButtonBase
          {...buttonProps}
          ref={ref as Ref<HTMLButtonElement>}
          aria-haspopup={buttonProps['aria-haspopup'] ?? 'dialog'}
          className={clsx(styles.Chip, 'typo-label-md', className)}>
          {children}
          <IconArrowDown size={16} />
        </ButtonBase>
      );
    }

    const { children, className, dropdown: _dropdown, ...spanProps } = props;

    return (
      <span
        {...spanProps}
        ref={ref as Ref<HTMLSpanElement>}
        className={clsx(styles.Chip, 'typo-label-md', className)}>
        {children}
      </span>
    );
  },
);

Chip.displayName = 'Chip';
