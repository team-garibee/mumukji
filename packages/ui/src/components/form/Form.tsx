import type { ComponentPropsWithoutRef, SubmitEvent } from 'react';

export type FormValues = Record<string, string>;

export type FormProps = Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'> & {
  onSubmit?: (values: FormValues, event: SubmitEvent<HTMLFormElement>) => void;
};

/**
 * - 폼 제출과 관련된 기능적 책임을 갖는 컴포넌트입니다. 항상 `<form>` 태그로 렌더링하며, `Box as="form"`으로 대체할 수 없습니다.
 * - `onSubmit` 실행 시 `event.preventDefault()`를 자동으로 처리하므로 사용 측에서 별도로 호출할 필요가 없습니다.
 * - `FormData(event.currentTarget)`로 하위 input 값을 수집해 `Record<string, string>` 형태로 `onSubmit`에 전달합니다.
 * - `name` 속성이 없는 input은 `FormData` 특성상 수집 대상에서 제외됩니다.
 * - 레이아웃/스타일은 children 쪽 책임이므로 `spacingProps` 등 스타일 관련 prop은 받지 않습니다.
 */
export const Form = ({ onSubmit, ...rest }: FormProps) => {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!onSubmit) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const values = Array.from(formData.entries()).reduce<FormValues>(
      (acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      },
      {},
    );

    onSubmit(values, event);
  };

  return <form onSubmit={handleSubmit} {...rest} />;
};
