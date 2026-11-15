import { DropdownItem, List } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof DropdownItem> = {
  title: 'UI/03. Controls/DropdownItem',
  component: DropdownItem,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'ListItem 기반 드롭다운 항목입니다. List 안에서 사용하며 selected와 onClick으로 선택 상태를 제어합니다. 선택된 항목은 강조색과 체크 아이콘으로 표시합니다.',
      },
    },
  },
  args: {
    children: 'label',
    selected: false,
    disabled: false,
  },
  argTypes: {
    children: { control: 'text', description: '항목 라벨' },
    className: { control: 'text' },
    selected: { control: 'boolean', description: '항목 선택 여부' },
    disabled: { control: 'boolean', description: '항목 비활성화 여부' },
  },
  render: (args) => (
    <List>
      <DropdownItem {...args} />
    </List>
  ),
};

export default meta;

type Story = StoryObj<typeof DropdownItem>;

export const Default: Story = {};

export const Selected: Story = { args: { selected: true } };

export const Disabled: Story = {
  render: (args) => (
    <List>
      <DropdownItem {...args} disabled selected={false} />
      <DropdownItem {...args} disabled selected />
    </List>
  ),
};

const SelectionExample = () => {
  const [selected, setSelected] = useState('추천순');

  return (
    <List aria-label='정렬 기준'>
      {['추천순', '최신순', '인기순'].map((label) => (
        <DropdownItem
          key={label}
          selected={selected === label}
          onClick={() => setSelected(label)}>
          {label}
        </DropdownItem>
      ))}
    </List>
  );
};

export const Usage: Story = {
  parameters: { controls: { disable: true } },
  render: () => <SelectionExample />,
};
