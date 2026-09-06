import {
  IconFoodChicken,
  IconFoodChinese,
  IconFoodJapanese,
  IconFoodKorean,
  IconFoodWestern,
} from '@mumukji/icons';
import { CategoryButton } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof CategoryButton> = {
  title: 'UI/02. Buttons/CategoryButton',
  component: CategoryButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '카테고리를 다중 선택할 수 있는 토글형 버튼입니다. isActive 상태는 사용하는 화면에서 관리합니다.',
      },
    },
  },
  args: {
    icon: <IconFoodKorean />,
    label: '카테고리',
    description: '메뉴 예시',
    isActive: false,
  },
  argTypes: {
    icon: {
      control: false,
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    label: { control: 'text' },
    description: { control: 'text' },
    isActive: { control: 'boolean' },
    loadingText: {
      control: 'text',
      table: {
        defaultValue: { summary: "'로딩 중...'" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CategoryButton>;

const wrapperDecorators: NonNullable<Story['decorators']> = [
  (Story) => (
    <div style={{ width: 140 }}>
      <Story />
    </div>
  ),
];

export const Default: Story = {
  decorators: wrapperDecorators,
};

export const Active: Story = {
  args: {
    isActive: true,
  },
  decorators: wrapperDecorators,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  decorators: wrapperDecorators,
};

const CATEGORIES = [
  { label: '한식', icon: <IconFoodKorean /> },
  { label: '중식', icon: <IconFoodChinese /> },
  { label: '일식', icon: <IconFoodJapanese /> },
  { label: '양식', icon: <IconFoodWestern /> },
  { label: '치킨', icon: <IconFoodChicken /> },
];

const MultiSelectExample = () => {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (label: string) => {
    setSelected((prev) => {
      const next = new Set(prev);

      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }

      return next;
    });
  };

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(144px, 1fr))',
          gap: 16,
        }}>
        {CATEGORIES.map(({ label, icon }) => (
          <CategoryButton
            key={label}
            icon={icon}
            label={label}
            description='메뉴 예시'
            isActive={selected.has(label)}
            onClick={() => toggle(label)}
          />
        ))}
      </div>
      <p aria-live='polite'>
        선택된 카테고리: {[...selected].join(', ') || '없음'}
      </p>
    </div>
  );
};

export const Usage: Story = {
  render: () => <MultiSelectExample />,
};
