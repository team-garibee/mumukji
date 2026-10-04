import { Dimmed } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Dimmed> = {
  title: 'UI/04. Overlay/Dimmed',
  component: Dimmed,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `- 모달과 바텀시트에서 함께 사용하는 배경입니다.
- onClick(배경 클릭 처리), 표시 여부, 포털, 스크롤 잠금, 포커스 관리와 키보드 닫기는 상위에서 처리합니다.
- Dimmed는 항상 aria-hidden="true"로 스크린리더에서 숨겨지므로, 배경 클릭 외에 닫기 버튼 또는 Esc 키로도 닫을 수 있게 구성해주세요.`,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        style={{
          position: 'relative',
          height: context.viewMode === 'docs' ? 400 : '100dvh',
          overflow: 'hidden',
          transform: 'translateZ(0)',
        }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Dimmed>;

export const Default: Story = {};

// TODO: 바텀시트, 모달 구현 시 스토리 보충 (Usage)
