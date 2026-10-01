import {
  Input,
  type InputProps,
  type InputState,
  type InputStyle,
} from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Input> = {
  title: 'UI/03. Controls/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '텍스트 입력 칸 단독 컴포넌트입니다. dropdown variant는 없으며, 드롭다운 선택은 chip이 담당합니다. field에서 재사용됩니다.',
      },
    },
  },
  args: {
    style: 'outline',
    placeholder: 'placeholder',
    'aria-label': '입력',
    maxLength: 20,
  },
  argTypes: {
    style: {
      control: 'inline-radio',
      options: ['outline', 'underline'],
    },
    state: {
      control: 'inline-radio',
      options: [
        undefined,
        'default',
        'focused',
        'typing',
        'error',
        'completed',
        'disabled',
      ],
      description: '생략하면 focus·입력 여부로 자동 계산됩니다.',
    },
    errorMessage: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Typing: Story = {
  args: {
    state: 'typing',
    defaultValue: 'Input text',
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    defaultValue: 'Input text',
    errorMessage: 'help massage',
  },
};

export const Completed: Story = {
  args: {
    state: 'completed',
    defaultValue: 'Input text',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    defaultValue: 'Input text',
  },
};

// ── style × state 매트릭스 ──
const styles: InputStyle[] = ['outline', 'underline'];
const states: { label: string; state?: InputState; defaultValue?: string }[] = [
  { label: 'default' },
  { label: 'focused', state: 'focused' },
  { label: 'typing', state: 'typing', defaultValue: 'Input text' },
  {
    label: 'error',
    state: 'error',
    defaultValue: 'Input text',
  },
  { label: 'completed', state: 'completed', defaultValue: 'Input text' },
  { label: 'disabled', state: 'disabled', defaultValue: 'Input text' },
];

export const StyleStateMatrix: Story = {
  parameters: { controls: { disable: true } },
  render: (args: InputProps) => (
    <div style={{ display: 'flex', gap: 32 }}>
      {styles.map((style) => (
        <div
          key={style}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            width: 280,
          }}>
          <strong>{style}</strong>
          {states.map(({ label, state, defaultValue }) => (
            <div key={label}>
              <Input
                {...args}
                style={style}
                state={state}
                defaultValue={defaultValue}
                errorMessage={state === 'error' ? 'help massage' : undefined}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
