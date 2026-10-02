import { Checkbox } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/03. Controls/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '여러 항목 중 복수 선택을 받을 때 사용하는 네이티브 체크박스 기반 입력 컴포넌트입니다.',
      },
    },
  },
  args: {
    children: '체크박스',
    name: 'checkbox-example',
  },
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
    checked: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox disabled>체크박스</Checkbox>
      <Checkbox defaultChecked disabled>
        체크박스
      </Checkbox>
    </div>
  ),
};

const ToggleExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <Checkbox
        checked={isChecked}
        onChange={(event) => setIsChecked(event.target.checked)}>
        약관에 동의합니다
      </Checkbox>
      <p aria-live='polite'>동의 상태: {String(isChecked)}</p>
    </div>
  );
};

export const Usage: Story = {
  render: () => <ToggleExample />,
};
