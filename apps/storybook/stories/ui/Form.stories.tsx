import { Form } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, SubmitEventHandler } from 'react';
import { useState } from 'react';

const formStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  maxWidth: 320,
};

const fieldStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  fontSize: 14,
  fontWeight: 500,
};

const inputStyle: CSSProperties = {
  height: 36,
  padding: '0 12px',
  border: '1px solid #d1d5db',
  borderRadius: 6,
  fontSize: 14,
};

const buttonStyle: CSSProperties = {
  alignSelf: 'flex-start',
  height: 36,
  padding: '0 16px',
  border: 'none',
  borderRadius: 6,
  background: '#111827',
  color: '#fff',
  fontSize: 14,
  fontWeight: 500,
  cursor: 'pointer',
};

const resultStyle: CSSProperties = {
  padding: 12,
  background: '#f3f4f6',
  borderRadius: 6,
  fontSize: 13,
};

const noticeStyle: CSSProperties = {
  margin: 0,
  fontSize: 13,
  color: '#6b7280',
};

const meta: Meta<typeof Form> = {
  title: 'UI/01. Primitive/Form',
  component: Form,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Form>;

const SubmitDemo = () => {
  const [values, setValues] = useState<Record<string, string> | null>(null);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    setValues(Object.fromEntries(formData) as Record<string, string>);
  };

  return (
    <Form style={formStyle} onSubmit={handleSubmit}>
      <p style={noticeStyle}>
        `Form`은 `preventDefault`와 값 수집을 대신 처리하지 않습니다. 사용하는
        쪽에서 `onSubmit` 안에 원하는 방식(`FormData`, 상태 관리, 폼 라이브러리
        등)으로 직접 구현하세요. `ref`를 넘기면 form DOM 엘리먼트에 직접 접근할
        수 있습니다(`reset()`, `requestSubmit()` 등).
      </p>
      <label style={fieldStyle}>
        이름
        <input style={inputStyle} name='username' />
      </label>
      <label style={fieldStyle}>
        이메일
        <input style={inputStyle} name='email' type='email' />
      </label>
      <button style={buttonStyle} type='submit'>
        제출
      </button>

      {values && (
        <pre style={resultStyle}>{JSON.stringify(values, null, 2)}</pre>
      )}
    </Form>
  );
};

export const Default: Story = {
  render: () => <SubmitDemo />,
};
