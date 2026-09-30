import { IconClose } from '@mumukji/icons';
import {
  IconButton,
  type IconButtonEmphasis,
  type IconButtonProps,
  type IconButtonTone,
} from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof IconButton> = {
  title: 'UI/02. Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '아이콘만 표시하는 ghost 스타일 버튼입니다. nav-bar의 back-caret, group-default의 수정·삭제 등에서 재사용합니다.',
      },
    },
  },
  args: {
    icon: <IconClose />,
    'aria-label': '닫기',
    tone: 'neutral',
    emphasis: 'default',
    size: 'md',
    onClick: () => undefined,
  },
  argTypes: {
    icon: {
      control: false,
      table: {
        type: { summary: 'ReactElement' },
      },
    },
    'aria-label': {
      description: '텍스트가 없는 아이콘 단독 버튼이므로 필수입니다.',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    tone: {
      control: 'inline-radio',
      options: ['brand', 'neutral'],
    },
    emphasis: {
      control: 'inline-radio',
      options: ['default', 'muted', 'subtle', 'faint'],
      description: 'tone이 neutral일 때만 적용됩니다.',
    },
    size: {
      control: 'inline-radio',
      options: ['md', 'sm', 'xs'],
    },
    loadingText: {
      control: 'text',
      table: {
        defaultValue: { summary: "'...'" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Brand: Story = {
  args: {
    tone: 'brand',
  },
};

const colorPresets: {
  label: string;
  tone: IconButtonTone;
  emphasis?: IconButtonEmphasis;
}[] = [
  { label: 'brand', tone: 'brand' },
  { label: 'neutral / default', tone: 'neutral', emphasis: 'default' },
  { label: 'neutral / muted', tone: 'neutral', emphasis: 'muted' },
  { label: 'neutral / subtle', tone: 'neutral', emphasis: 'subtle' },
  { label: 'neutral / faint', tone: 'neutral', emphasis: 'faint' },
];

export const ColorPresets: Story = {
  parameters: { controls: { disable: true } },
  render: (args: IconButtonProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {colorPresets.map(({ label, tone, emphasis }) => (
        <div
          key={label}
          style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 140, fontSize: 12 }}>{label}</span>
          <IconButton {...args} tone={tone} emphasis={emphasis ?? 'default'} />
        </div>
      ))}
    </div>
  ),
};

export const NeutralEmphasis: Story = {
  render: (args: IconButtonProps) => (
    <div style={{ display: 'flex', gap: 8 }}>
      <IconButton {...args} emphasis='default' />
      <IconButton {...args} emphasis='muted' />
      <IconButton {...args} emphasis='subtle' />
      <IconButton {...args} emphasis='faint' />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args: IconButtonProps) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <IconButton {...args} size='md' />
      <IconButton {...args} size='sm' />
      <IconButton {...args} size='xs' />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
