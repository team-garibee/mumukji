import { Input, type InputProps, type InputVariant } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Input> = {
  title: 'UI/03. Controls/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '텍스트 입력 칸 단독 컴포넌트입니다. dropdown variant는 없으며, 드롭다운 선택은 chip이 담당합니다. field에서 재사용됩니다. default/focused/typing/disabled는 CSS(:focus-within, :disabled)로 처리되며, error만 prop으로 직접 제어합니다.',
      },
    },
  },
  args: {
    variant: 'outline',
    placeholder: 'placeholder',
    'aria-label': '입력',
    maxLength: 20,
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['outline', 'underline'],
    },
    error: {
      control: 'boolean',
      description: '외부 검증 로직에서 판단한 에러 상태만 prop으로 제어합니다.',
    },
    errorMessage: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Typing: Story = {
  args: {
    defaultValue: 'Input text',
  },
};

export const Error: Story = {
  args: {
    error: true,
    defaultValue: 'Input text',
    errorMessage: 'help massage',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Input text',
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: '수정하면 안 되는 값',
  },
};

// ── variant × 상태 매트릭스 ──
const variants: InputVariant[] = ['outline', 'underline'];
const cases: {
  label: string;
  defaultValue?: string;
  error?: boolean;
  disabled?: boolean;
}[] = [
  { label: 'default' },
  { label: 'typing', defaultValue: 'Input text' },
  { label: 'error', defaultValue: 'Input text', error: true },
  { label: 'disabled', defaultValue: 'Input text', disabled: true },
];

export const VariantStateMatrix: Story = {
  parameters: { controls: { disable: true } },
  render: (args: InputProps) => (
    <div style={{ display: 'flex', gap: 32 }}>
      {variants.map((variant) => (
        <div
          key={variant}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            width: 280,
          }}>
          <strong>{variant}</strong>
          {cases.map(({ label, defaultValue, error, disabled }) => (
            <div key={label}>
              <Input
                {...args}
                variant={variant}
                defaultValue={defaultValue}
                error={error}
                disabled={disabled}
                errorMessage={error ? 'help massage' : undefined}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
