'use client';

import { IconCloseCircleFilled } from '@mumukji/icons';
import clsx from 'clsx';
import {
  forwardRef,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  type MutableRefObject,
  type ReactNode,
} from 'react';
import { IconButton } from '../../buttons/icon-button/IconButton';
import { Typography } from '../../primitive/typography/Typography';
import styles from './Input.module.scss';

export type InputVariant = 'outline' | 'underline';

interface InputOwnProps extends ComponentPropsWithoutRef<'input'> {
  /** outline / underline. 네이티브 style(CSS) 속성과 겹치지 않도록 variant로 명명합니다. */
  variant?: InputVariant;
  /**
   * default / focused / typing / disabled는 각각 CSS(:focus-within,
   * :placeholder-shown, :disabled)로 처리되는 시각적 상태라 컴포넌트가 별도로
   * 관리하지 않습니다. error만 외부 검증 로직에서만 판단 가능하므로
   * prop으로 직접 지정합니다.
   */
  error?: boolean;
  errorMessage?: ReactNode;
  /** X(clear) 버튼 aria-label. 기본값: '입력값 지우기' */
  clearButtonLabel?: string;
  onClear?: () => void;
}

export type InputProps = InputOwnProps;

function setRef<T>(ref: ForwardedRef<T> | undefined, node: T | null) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (ref) {
    (ref as MutableRefObject<T | null>).current = node;
  }
}

/**
 * 텍스트 입력 칸 단독 컴포넌트입니다. dropdown variant는 없으며,
 * 드롭다운 선택은 `chip`이 담당합니다. `field`에서 재사용됩니다.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'outline',
      error = false,
      value,
      defaultValue,
      maxLength = 20,
      disabled = false,
      readOnly = false,
      errorMessage,
      clearButtonLabel = '입력값 지우기',
      onClear,
      onChange,
      id,
      'aria-describedby': ariaDescribedBy,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorMessageId = `${inputId}-error`;

    const innerRef = useRef<HTMLInputElement>(null);

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const currentValue = isControlled ? value : internalValue;
    const currentLength = String(currentValue ?? '').length;
    const hasValue = currentLength > 0;
    // readOnly인 값은 지울 수 없어야 하므로 clear 버튼을 표출하지 않는다.
    const showClearButton = hasValue && !disabled && !readOnly;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(event.target.value);
      }
      onChange?.(event);
    };

    const handleClear = () => {
      if (disabled || readOnly) {
        return;
      }

      // 가짜 ChangeEvent를 만들어 onChange를 호출하지 않는다. 실제 입력은
      // onChange로, clear는 onClear로만 전달한다 — controlled 사용 시
      // 값 초기화는 onClear를 받은 쪽에서 처리한다.
      if (!isControlled) {
        setInternalValue('');
      }
      innerRef.current?.focus();
      onClear?.();
    };

    return (
      <div className={styles.InputRoot}>
        <div
          className={clsx(
            styles.Input,
            styles[`Input-${variant}`],
            error && styles['Input-error'],
            className,
          )}
          data-variant={variant}>
          <input
            ref={(node) => {
              innerRef.current = node;
              setRef(ref, node);
            }}
            id={inputId}
            className={clsx(styles.InputField, 'typo-label-md')}
            value={currentValue}
            maxLength={maxLength}
            disabled={disabled}
            readOnly={readOnly}
            aria-invalid={error || undefined}
            aria-describedby={
              error && errorMessage
                ? [errorMessageId, ariaDescribedBy].filter(Boolean).join(' ')
                : ariaDescribedBy
            }
            onChange={handleChange}
            {...rest}
          />

          {showClearButton && (
            <IconButton
              type='button'
              className={styles.InputClearButton}
              icon={<IconCloseCircleFilled />}
              aria-label={clearButtonLabel}
              size='sm'
              tone='neutral'
              emphasis='subtle'
              onClick={handleClear}
            />
          )}

          <Typography
            as='span'
            variant='label-sm'
            color='fg-placeholder'
            className={styles.InputCounter}>
            {currentLength}/{maxLength}
          </Typography>
        </div>

        {error && errorMessage && (
          <Typography
            as='p'
            variant='caption-md'
            color='fg-negative'
            id={errorMessageId}
            className={styles.InputErrorMessage}
            role='alert'>
            {errorMessage}
          </Typography>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
