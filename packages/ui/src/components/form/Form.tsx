import { forwardRef, type ComponentPropsWithoutRef } from 'react';

export type FormProps = ComponentPropsWithoutRef<'form'>;

/**
 * - `Box`가 다루지 않는 `<form>` 태그를 이 컴포넌트를 통해서만 렌더링하도록 강제합니다.
 * - `onSubmit`, 값 수집(`preventDefault` 포함) 등 폼 동작은 전부 사용하는 쪽에서 정의합니다.
 */
export const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => (
  <form ref={ref} {...props} />
));

// forwardRef로 감싼 컴포넌트는 DevTools에 이름이 안 뜰 수 있어 명시적으로 지정
Form.displayName = 'Form';
