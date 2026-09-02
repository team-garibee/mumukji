import { IconStarFilled, IconStarOutlined } from '@mumukji/icons';
import { ReactionButton } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof ReactionButton> = {
  title: 'UI/02. Buttons/ReactionButton',
  component: ReactionButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '좋아요, 즐겨찾기처럼 사용자의 반응 상태를 전환하는 아이콘 버튼입니다. isActive 상태와 API 요청은 사용하는 화면에서 관리합니다.',
      },
    },
  },
  args: {
    'aria-label': '좋아요',
    isActive: false,
    tone: 'brand',
  },
  render: ({ isActive = false, ...args }) => (
    <ReactionButton
      {...args}
      icon={isActive ? <IconStarFilled /> : <IconStarOutlined />}
      isActive={isActive}
    />
  ),
  argTypes: {
    icon: {
      control: false,
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    isActive: { control: 'boolean' },
    tone: {
      control: 'inline-radio',
      options: ['brand'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReactionButton>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    isActive: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

const ToggleExample = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = async () => {
    const nextIsActive = !isActive;

    setIsActive(nextIsActive);

    try {
      // await reactionApi.toggleLike({ isActive: nextIsActive });
    } catch {
      setIsActive(isActive);
    }
  };

  return (
    <div>
      <ReactionButton
        aria-label={isActive ? '좋아요 취소' : '좋아요'}
        icon={isActive ? <IconStarFilled /> : <IconStarOutlined />}
        isActive={isActive}
        onClick={handleClick}
      />
      <p aria-live='polite'>좋아요 상태: {String(isActive)}</p>
    </div>
  );
};

export const Usage: Story = {
  render: () => <ToggleExample />,
};
