import { Flex, Switch } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof Switch> = {
  title: 'UI/03. Controls/Switch',
  component: Switch,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '켜짐/꺼짐 상태를 즉시 전환하는 네이티브 체크박스 기반 스위치입니다. checked와 onChange로 제어하거나 defaultChecked로 비제어 사용할 수 있습니다. children이 없으면 접근성을 위해 aria-label로 이름을 지정해야 합니다.',
      },
    },
  },
  args: {
    tone: 'interactive',
    disabled: false,
  },
  argTypes: {
    children: { control: 'text', description: '스위치 상단에 표시할 라벨' },
    tone: {
      control: 'inline-radio',
      options: ['interactive', 'neutral'],
      description: '스위치 색상 톤',
    },
    checked: { control: 'boolean', description: '스위치 켜짐 여부' },
    disabled: { control: 'boolean', description: '스위치 비활성화 여부' },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = { args: { 'aria-label': '편집 모드' } };

export const Selected: Story = {
  args: { 'aria-label': '편집 모드', defaultChecked: true },
};

export const WithLabel: Story = { args: { children: 'label' } };

export const Neutral: Story = {
  args: { tone: 'neutral', defaultChecked: true, children: 'label' },
};

export const Disabled: Story = {
  render: () => (
    <Flex gap='xl'>
      <Switch disabled>label</Switch>
      <Switch defaultChecked disabled>
        label
      </Switch>
    </Flex>
  ),
};

const ToggleExample = () => {
  const [isInteractiveChecked, setIsInteractiveChecked] = useState(false);
  const [isNeutralChecked, setIsNeutralChecked] = useState(false);

  return (
    <Flex gap='xl'>
      <Switch
        tone='interactive'
        checked={isInteractiveChecked}
        onChange={(event) => setIsInteractiveChecked(event.target.checked)}>
        label
      </Switch>
      <Switch
        tone='neutral'
        checked={isNeutralChecked}
        onChange={(event) => setIsNeutralChecked(event.target.checked)}>
        label
      </Switch>
    </Flex>
  );
};

export const Usage: Story = {
  parameters: { controls: { disable: true } },
  render: () => <ToggleExample />,
};
