import type { ComponentPropsWithoutRef, SubmitEvent } from 'react';

export type FormValues = Record<string, string>;

export type FormProps = Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'> & {
  onSubmit?: (values: FormValues, event: SubmitEvent<HTMLFormElement>) => void;
};

/**
 * - 항상 `<form>` 태그로 렌더링하며, `preventDefault`와 값 수집(`Record<string, string>`)을 대신 처리합니다.
 * - `name` 없는 input은 수집 대상에서 제외되고, `<input type="file">`은 지원하지 않습니다(`event.currentTarget`에서 직접 처리).
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
