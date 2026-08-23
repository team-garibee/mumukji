import { IconArrowRight } from '@mumukji/icons';
import { ActionButton, ActionLink } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const exampleStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'flex-start',
  gap: 16,
  maxWidth: 640,
};

const meta: Meta<typeof ActionButton> = {
  title: 'UI/02. Buttons/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '사용자 동작을 실행할 때는 ActionButton을 페이지나 화면을 이동할 때는 동일한 스타일 API를 제공하는 ActionLink를 사용합니다.',
      },
    },
  },
  args: {
    children: '버튼',
    variant: 'solid',
    tone: 'brand',
    size: 'lg',
    loadingText: '로딩 중...',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['solid', 'outline', 'ghost'],
    },
    tone: {
      control: 'inline-radio',
      options: ['brand', 'interactive', 'negative', 'natural'],
    },
    size: {
      control: 'inline-radio',
      options: ['lg', 'md', 'sm', 'xs'],
    },
    icon: { control: 'text' },
    iconPosition: {
      control: 'inline-radio',
      options: ['left', 'right'],
    },
    loadingText: {
      control: 'text',
      table: {
        defaultValue: { summary: "'로딩 중...'" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <IconArrowRight />,
    iconPosition: 'right',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Usage: Story = {
  render: () => (
    <div style={exampleStyle}>
      <p style={{ margin: 0 }}>
        동작을 실행할 때는 <code>ActionButton</code>을 사용합니다.
      </p>
      <ActionButton onClick={() => undefined}>저장하기</ActionButton>

      <p style={{ margin: '16px 0 0' }}>
        내부·외부 페이지 이동에는 <code>ActionLink</code>를 사용합니다. 두
        컴포넌트는 variant, tone, size, icon API를 동일하게 지원합니다.
      </p>
      <ActionLink
        href='#action-link-example'
        tone='interactive'
        icon={<IconArrowRight />}
        iconPosition='right'>
        다음 화면으로 이동
      </ActionLink>
    </div>
  ),
};
