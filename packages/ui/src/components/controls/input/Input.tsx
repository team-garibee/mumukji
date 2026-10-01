'use client';

import { IconClose } from '@mumukji/icons';
import clsx from 'clsx';
import {
  forwardRef,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type FocusEvent,
  type ForwardedRef,
  type MutableRefObject,
  type ReactNode,
} from 'react';
import { IconButton } from '../../buttons/icon-button/IconButton';
import styles from './Input.module.scss';

export type InputStyle = 'outline' | 'underline';

export type InputState =
  | 'default'
  | 'focused'
  | 'typing'
  | 'error'
  | 'completed'
  | 'disabled';

interface InputOwnProps extends Omit<
  ComponentPropsWithoutRef<'input'>,
  'size' | 'style'
> {
  style?: InputStyle;
  /**
   * 상태를 외부에서 강제로 지정합니다. 생략하면 focus·입력 여부·disabled로
   * 자동 계산됩니다(default / focused / typing). `error` · `completed`는
   * 외부 검증 로직에서만 판단할 수 있으므로 직접 지정해서 사용합니다.
   */
  state?: InputState;
  maxLength?: number;
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
      style = 'outline',
      state,
      value,
      defaultValue,
      maxLength = 20,
      disabled = false,
      errorMessage,
      clearButtonLabel = '입력값 지우기',
      onClear,
      onFocus,
      onBlur,
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
    const [isFocused, setIsFocused] = useState(false);

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const currentValue = isControlled ? value : internalValue;
    const currentLength = String(currentValue ?? '').length;
    const hasValue = currentLength > 0;

    const isDisabled = disabled || state === 'disabled';
    // blur 상태에서는 값 유무와 상관없이 default 테두리로 돌아온다.
    // (값이 있는 채로 blur된 상태를 구분해야 하면 state="completed"를 직접 지정한다.)
    const autoState: InputState = isFocused
      ? hasValue
        ? 'typing'
        : 'focused'
      : 'default';
    const resolvedState: InputState = isDisabled
      ? 'disabled'
      : (state ?? autoState);

    const isError = resolvedState === 'error';

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(event.target.value);
      }
      onChange?.(event);
    };

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(event);
    };

    const handleClear = () => {
      if (isDisabled) {
        return;
      }

      // controlled/uncontrolled 갱신 로직을 handleChange에 그대로 위임한다.
      handleChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
      innerRef.current?.focus();
      onClear?.();
    };

    return (
      <div className={styles.InputRoot}>
        <div
          className={clsx(
            styles.Input,
            styles[`Input-${style}`],
            styles[`Input-${resolvedState}`],
            className,
          )}>
          <input
            ref={(node) => {
              innerRef.current = node;
              setRef(ref, node);
            }}
            id={inputId}
            className={clsx(styles.InputField, 'typo-body-md')}
            value={currentValue}
            maxLength={maxLength}
            disabled={isDisabled}
            aria-invalid={isError || undefined}
            aria-describedby={
              isError && errorMessage
                ? [errorMessageId, ariaDescribedBy].filter(Boolean).join(' ')
                : ariaDescribedBy
            }
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />

          {hasValue && (
            <IconButton
              type='button'
              className={styles.InputClearButton}
              icon={<IconClose />}
              aria-label={clearButtonLabel}
              size='xs'
              tone='neutral'
              emphasis='subtle'
              disabled={isDisabled}
              onClick={handleClear}
            />
          )}

          <span className={clsx(styles.InputCounter, 'typo-caption-sm')}>
            {currentLength}/{maxLength}
          </span>
        </div>

        {isError && errorMessage && (
          <p
            id={errorMessageId}
            className={clsx(styles.InputErrorMessage, 'typo-caption-sm')}
            role='alert'>
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
