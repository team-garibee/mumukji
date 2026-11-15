import { IconCheck } from '@mumukji/icons';
import clsx from 'clsx';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { ButtonBase } from '@/components/buttons/base/ButtonBase';
import styles from '@/components/controls/dropdown-item/DropdownItem.module.scss';
import { ListItem } from '@/components/primitive/list/List';

export type DropdownItemProps = ComponentPropsWithoutRef<'button'> & {
  selected?: boolean;
};

/**
 * List 안에서 사용하는 선택 가능한 드롭다운 아이템입니다.
 * selected와 onClick으로 선택 상태를 제어하고, ref는 내부 버튼을 가리킵니다.
 */
export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ children, className, selected = false, disabled, ...props }, ref) => (
    <ListItem className={styles.DropdownItem}>
      <ButtonBase
        {...props}
        ref={ref}
        disabled={disabled}
        aria-pressed={selected}
        className={clsx(
          styles.DropdownItemButton,
          selected ? 'typo-body-md-strong' : 'typo-body-md',
          className,
        )}>
        <span className={styles.DropdownItemLabel}>{children}</span>
        {selected && (
          <span className={styles.DropdownItemCheck} aria-hidden='true'>
            <IconCheck size={20} />
          </span>
        )}
      </ButtonBase>
    </ListItem>
  ),
);

DropdownItem.displayName = 'DropdownItem';
