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

const FileInputDemo = () => {
  const [result, setResult] = useState<{
    values: Record<string, string>;
    fileName: string | null;
  } | null>(null);

  return (
    <Form
      style={formStyle}
      onSubmit={(values, event) => {
        const formData = new FormData(event.currentTarget);
        const file = formData.get('avatar');
        setResult({
          values,
          fileName: file instanceof File ? file.name : null,
        });
      }}>
      <p style={noticeStyle}>
        `values`의 타입은 `Record&lt;string, string&gt;`으로 고정되어 있어
        `type="file"` input의 값은 자동으로 수집되지 않습니다. file input을 함께
        다뤄야 한다면 `event.currentTarget`에서 `FormData`를 직접 생성해 꺼내
        쓰세요.
      </p>
      <label style={fieldStyle}>
        이름
        <input style={inputStyle} name='username' />
      </label>
      <label style={fieldStyle}>
        프로필 사진
        <input style={inputStyle} name='avatar' type='file' />
      </label>
      <button style={buttonStyle} type='submit'>
        제출
      </button>

      {result && (
        <pre style={resultStyle}>
          {JSON.stringify(
            { ...result.values, avatar: result.fileName },
            null,
            2,
          )}
        </pre>
      )}
    </Form>
  );
};

export const FileInputWorkaround: Story = {
  render: () => <FileInputDemo />,
};
