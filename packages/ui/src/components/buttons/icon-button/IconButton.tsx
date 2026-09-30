import clsx from 'clsx';
import { cloneElement, forwardRef, type ReactElement } from 'react';
import { ButtonBase, type ButtonBaseProps } from '../base/ButtonBase';
import styles from './IconButton.module.scss';

export type IconButtonTone = 'brand' | 'neutral';
export type IconButtonEmphasis = 'default' | 'muted' | 'subtle' | 'faint';
export type IconButtonSize = 'md' | 'sm' | 'xs';

/** 버튼 size별 아이콘 크기(px) */
const ICON_SIZE: Record<IconButtonSize, number> = {
  md: 24,
  sm: 20,
  xs: 16,
};

interface IconButtonOwnProps {
  /** 버튼에 표시할 아이콘 (size는 버튼 size에 맞춰 자동 적용됩니다) */
  icon: ReactElement<{ size?: number | string }>;
  /** 버튼 색상 톤 */
  tone?: IconButtonTone;
  /** neutral 톤일 때만 적용되는 색상 강도. brand에서는 무시됩니다. */
  emphasis?: IconButtonEmphasis;
  size?: IconButtonSize;
  /** 텍스트가 없는 아이콘 단독 버튼이므로 필수입니다. */
  'aria-label': string;
}

export type IconButtonProps = IconButtonOwnProps &
  Omit<ButtonBaseProps, 'children'>;

/**
 * 아이콘만 표시하는 ghost 스타일 버튼입니다. style은 ghost로 고정입니다.
 * `tone="neutral"`일 때 `emphasis`로 색상 강도를 4단계로 조정할 수 있습니다.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      icon,
      tone = 'neutral',
      emphasis = 'default',
      size = 'md',
      'aria-label': ariaLabel,
      // 아이콘 버튼은 스피너 도입 전까지 '로딩 중...' 대신 '...'을 기본값으로 사용
      loadingText = '...',
      onClick,
      ...props
    },
    ref,
  ) => (
    <ButtonBase
      ref={ref}
      aria-label={ariaLabel}
      loadingText={loadingText}
      onClick={onClick}
      className={clsx(
        styles.IconButton,
        styles[`IconButton-${tone}`],
        tone === 'neutral' && styles[`IconButton-${emphasis}`],
        styles[`IconButton-${size}`],
        className,
      )}
      {...props}>
      {cloneElement(icon, { size: ICON_SIZE[size] })}
    </ButtonBase>
  ),
);

IconButton.displayName = 'IconButton';
