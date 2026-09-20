import { Flex, Switch } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof Switch> = {
  title: 'UI/02. Buttons/Switch',
  component: Switch,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '켜짐/꺼짐 상태를 즉시 전환하는 스위치입니다. isSelected 상태는 사용하는 화면에서 관리합니다. label이 없으면 접근성을 위해 aria-label로 이름을 지정해야 합니다.',
      },
    },
  },
  args: {
    isSelected: false,
    tone: 'interactive',
    disabled: false,
    onClick: () => undefined,
  },
  argTypes: {
    isSelected: { control: 'boolean', description: '스위치 켜짐 여부' },
    tone: {
      control: 'inline-radio',
      options: ['interactive', 'neutral'],
      description: '스위치 색상 톤',
    },
    label: { control: 'text', description: '스위치 상단에 표시할 라벨' },
    disabled: { control: 'boolean', description: '스위치 비활성화 여부' },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = { args: { 'aria-label': '편집 모드' } };

export const Selected: Story = {
  args: { 'aria-label': '편집 모드', isSelected: true },
};

export const WithLabel: Story = { args: { label: '편집' } };

export const Neutral: Story = {
  args: { tone: 'neutral', isSelected: true, label: '편집' },
};

export const Disabled: Story = {
  args: { disabled: true, isSelected: true, label: '편집' },
};

const ToggleExample = () => {
  const [isInteractiveSelected, setIsInteractiveSelected] = useState(false);
  const [isNeutralSelected, setIsNeutralSelected] = useState(false);

  return (
    <Flex gap='xl'>
      <Switch
        tone='interactive'
        label='편집'
        isSelected={isInteractiveSelected}
        onClick={() => setIsInteractiveSelected((prev) => !prev)}
      />
      <Switch
        tone='neutral'
        label='편집'
        isSelected={isNeutralSelected}
        onClick={() => setIsNeutralSelected((prev) => !prev)}
      />
    </Flex>
  );
};

export const Usage: Story = {
  parameters: { controls: { disable: true } },
  render: () => <ToggleExample />,
};
