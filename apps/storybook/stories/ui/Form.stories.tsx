import { Form } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
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
  title: 'UI/Form',
  component: Form,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Form>;

const SubmitDemo = () => {
  const [values, setValues] = useState<Record<string, string> | null>(null);

  return (
    <Form
      onSubmit={(submittedValues) => setValues(submittedValues)}
      style={formStyle}>
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

const UnnamedInputDemo = () => {
  const [values, setValues] = useState<Record<string, string> | null>(null);

  return (
    <Form
      onSubmit={(submittedValues) => setValues(submittedValues)}
      style={formStyle}>
      <p style={noticeStyle}>
        `name` 속성이 없는 input은 FormData에 포함되지 않으므로 수집 대상에서
        제외됩니다.
      </p>
      <label style={fieldStyle}>
        이름 (수집됨)
        <input style={inputStyle} name='username' />
      </label>
      <label style={fieldStyle}>
        메모 (name 없음 - 수집 안 됨)
        <input style={inputStyle} />
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

export const UnnamedInputExcluded: Story = {
  render: () => <UnnamedInputDemo />,
};
