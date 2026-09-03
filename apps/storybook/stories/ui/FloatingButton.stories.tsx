import { IconAdd, IconEditList, IconHome, IconRice } from '@mumukji/icons';
import { FloatingButton } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof FloatingButton> = {
  title: 'UI/02. Buttons/FloatingButton',
  component: FloatingButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: '버튼',
    variant: 'solid',
    size: 'lg',
    style: { position: 'static' },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['solid', 'outline'],
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

type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const WithIcon: Story = {
  args: {
    children: '그룹추가',
    icon: <IconAdd />,
    iconPosition: 'left',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

const mockTabs = [
  { label: '머먹었더라?', icon: <IconRice /> },
  { label: '홈', icon: <IconHome /> },
  { label: '그룹 목록', icon: <IconEditList />, active: true },
];

export const InContext: Story = {
  name: 'Usage',
  args: {
    children: '그룹추가',
    icon: <IconAdd />,
    size: 'md',
    style: { bottom: 64 + 20 },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'FloatingButton은 기본적으로 `position: fixed`로 화면 우하단에 고정됩니다. 아래는 하단 탭바가 있는 모바일 화면 안에서 실제로 어떻게 보이는지 보여주는 예시입니다.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: 390,
          height: 700,
          margin: '0 auto',
          border: '1px solid #ccc',
          background: '#fffaf2',
          transform: 'translateZ(0)',
        }}>
        <Story />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            display: 'flex',
            width: '100%',
            height: 64,
            borderTop: '1px solid #eee',
            background: '#fff',
          }}>
          {mockTabs.map(({ label, icon, active }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                fontSize: 11,
                color: active ? '#f9603e' : '#616161',
              }}>
              {icon}
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
  ],
};
