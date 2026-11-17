import {
  Tooltip,
  type TooltipArrowPlacement,
  type TooltipProps,
  type TooltipTone,
} from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const ARROW_PLACEMENTS: TooltipArrowPlacement[] = [
  'left',
  'right',
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

const TONES: TooltipTone[] = ['interactive', 'neutral'];

const LONG_TEXTS = [
  '저장하지 않은 변경 사항이 있어요. 페이지를 떠나면 작성한 내용이 사라지니 먼저 저장해 주세요.',
  'https://mumukji.example.com/restaurants/seoul/gangnam/very-long-path',
  '최대 8줄까지 보여 주고, 넘치면 마지막 줄 끝에 말줄임이 표시됩니다. 말풍선의 최대 너비는 280px이고 최대 높이 160px을 넘지 않도록 줄 수로 제한합니다. 이 문장은 여덟 줄을 넘기기 위해 충분히 길게 작성했습니다. 계속해서 문장을 이어 붙여서 아홉 줄 이상이 되도록 만들고 있습니다. 여기까지 왔다면 이미 넘쳤을 가능성이 높습니다. 마지막으로 한 문장을 더 붙입니다.',
];

const meta: Meta<typeof Tooltip> = {
  title: 'UI/04. Overlay/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '꼬리가 달린 말풍선 형태의 툴팁입니다. 말풍선 UI만 담당하며, 열림 여부와 가리키는 대상 기준 위치는 사용하는 쪽에서 지정합니다. onClose를 전달하면 닫기 버튼이 표시됩니다.',
      },
    },
  },
  // 꼬리와 그림자가 잘리지 않도록 여백 확보
  decorators: [
    (Story) => (
      <div style={{ padding: 24 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'Text Typing',
    tone: 'interactive',
    arrowPlacement: 'left',
  },
  argTypes: {
    children: { control: 'text', description: '말풍선에 표시할 내용' },
    tone: {
      control: 'inline-radio',
      options: TONES,
      description: '말풍선 색상 톤',
    },
    arrowPlacement: {
      control: 'select',
      options: ARROW_PLACEMENTS,
      description: '말풍선 기준 꼬리 위치',
    },
    onClose: {
      description: '전달하면 닫기 버튼이 표시되고, 클릭 시 호출됩니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const ToneOverview = (args: TooltipProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
      {ARROW_PLACEMENTS.map((placement) => (
        <Tooltip {...args} key={placement} arrowPlacement={placement}>
          {placement}
        </Tooltip>
      ))}
    </div>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        gap: 32,
      }}>
      {LONG_TEXTS.map((text) => (
        <Tooltip {...args} key={text}>
          {text}
        </Tooltip>
      ))}
    </div>
  </div>
);

export const Default: Story = {};

export const Interactive: Story = {
  args: { tone: 'interactive' },
  parameters: { controls: { disable: true } },
  render: ToneOverview,
};

export const Neutral: Story = {
  args: { tone: 'neutral' },
  parameters: { controls: { disable: true } },
  render: ToneOverview,
};
