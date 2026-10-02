import { Chip } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useId, useRef } from 'react';

const meta: Meta<typeof Chip> = {
  title: 'UI/03. Controls/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '기본 칩은 텍스트 span입니다. dropdown suffix를 지정하면 버튼이 되며, 바텀시트는 onClick에서 연결합니다.',
      },
    },
  },
  args: {
    children: '종류 선택',
    suffix: null,
  },
  argTypes: {
    children: {
      control: 'text',
      type: { name: 'other', value: 'ReactNode', required: true },
      table: { type: { summary: 'ReactNode' } },
    },
    suffix: { control: 'inline-radio', options: [null, 'dropdown'] },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const DropdownDefault: Story = {
  args: { suffix: 'dropdown', disabled: false },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'suffix가 dropdown일 때만 동작하며, 버튼을 비활성화합니다.',
    },
  },
};

export const DropdownDisabled: Story = {
  args: { suffix: 'dropdown', disabled: true },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'suffix가 dropdown일 때만 동작하며, 버튼을 비활성화합니다.',
    },
  },
};

const BottomSheetExample = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const sheetId = useId();

  return (
    <>
      <Chip
        suffix='dropdown'
        aria-controls={sheetId}
        onClick={() => dialogRef.current?.showModal()}>
        종류 선택
      </Chip>
      <dialog
        ref={dialogRef}
        id={sheetId}
        aria-label='종류 선택'
        style={{
          position: 'fixed',
          top: 'auto',
          bottom: 0,
          width: '100%',
          maxWidth: '100%',
          margin: 0,
          padding: 24,
          border: 0,
          borderRadius: '16px 16px 0 0',
        }}>
        <p>종류를 선택하세요</p>
        <button type='button' onClick={() => dialogRef.current?.close()}>
          닫기
        </button>
      </dialog>
    </>
  );
};

export const Usage: Story = {
  render: () => <BottomSheetExample />,
};
