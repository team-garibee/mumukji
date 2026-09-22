import { Typography } from '@mumukji/ui';
import type { TypographyAs, TypographyVariant } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

type TypographySample = {
  variant: TypographyVariant;
  as: TypographyAs;
  description: string;
  text: string;
};

const headingSamples: TypographySample[] = [
  {
    variant: 'heading-xl',
    as: 'h1',
    description: '주요 화면 제목에 사용됩니다.',
    text: '머먹을지 안 정했어?',
  },
  {
    variant: 'heading-lg',
    as: 'h2',
    description: '랜딩 페이지의 큰 제목에 사용됩니다.',
    text: '랜덤으로 추천해줄게',
  },
  {
    variant: 'heading-md',
    as: 'h3',
    description: '화면 제목에 사용됩니다.',
    text: '오늘의 메뉴',
  },
  {
    variant: 'heading-sm',
    as: 'h4',
    description: '섹션의 메인 강조에 사용됩니다.',
    text: '추천 메뉴',
  },
  {
    variant: 'heading-xs',
    as: 'h5',
    description: '섹션의 작은 강조에 사용됩니다.',
    text: '인기 메뉴',
  },
];

const bodySamples: TypographySample[] = [
  {
    variant: 'body-md-strong',
    as: 'p',
    description: '중간 강조 본문에 사용됩니다.',
    text: '멤버들이 고른 메뉴를 확인해 보세요.',
  },
  {
    variant: 'body-md',
    as: 'p',
    description: '일반 본문에 사용됩니다.',
    text: '멤버들이 고른 메뉴를 확인해 보세요.',
  },
  {
    variant: 'body-sm-strong',
    as: 'p',
    description: '강조 본문에 사용됩니다.',
    text: '메뉴를 추가할 수 있어요.',
  },
  {
    variant: 'body-sm',
    as: 'p',
    description: '안내문에 사용됩니다.',
    text: '메뉴를 추가할 수 있어요.',
  },
];

const labelSamples: TypographySample[] = [
  {
    variant: 'label-lg',
    as: 'span',
    description: '큰 라벨에 사용됩니다.',
    text: '서울 사무실 점심',
  },
  {
    variant: 'label-lg-strong',
    as: 'span',
    description: 'CTA 및 헤드라인 강조에 사용됩니다.',
    text: '이거 먹을래!',
  },
  {
    variant: 'label-md',
    as: 'span',
    description: '중간 라벨에 사용됩니다.',
    text: '먹지추천받기',
  },
  {
    variant: 'label-md-strong',
    as: 'span',
    description: '중간 라벨 강조에 사용됩니다.',
    text: '전체선택',
  },
  {
    variant: 'label-sm',
    as: 'span',
    description: '작은 라벨에 사용됩니다.',
    text: '편집',
  },
  {
    variant: 'label-sm-strong',
    as: 'span',
    description: '탭과 단일 라인 인터랙티브 강조에 사용됩니다.',
    text: '홈',
  },
];

const captionSamples: TypographySample[] = [
  {
    variant: 'caption-md',
    as: 'span',
    description: '툴팁 본문에 사용됩니다.',
    text: '처음 사용하시나요?',
  },
  {
    variant: 'caption-sm',
    as: 'span',
    description: '부가 메타에 사용됩니다.',
    text: '머먹지 · 맛집탐험',
  },
];

const TypographyList = ({ samples }: { samples: TypographySample[] }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
    }}>
    {samples.map(({ variant, as, description, text }) => (
      <div
        key={variant}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}>
        <Typography variant='label-md-strong'>{`typo/${variant}`}</Typography>
        <Typography variant='caption-md' color='fg-neutral-subtle'>
          {description}
        </Typography>
        <Typography as={as} variant={variant}>
          {text}
        </Typography>
      </div>
    ))}
  </div>
);

const meta: Meta<typeof Typography> = {
  title: 'UI/01. Primitive/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  args: {
    as: 'span',
    variant: 'body-md',
    color: 'fg-neutral',
    children: '먹고 싶은 메뉴를 기록해 보세요.',
  },
  argTypes: {
    as: {
      control: 'select',
      options: [
        'span',
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'label',
        'strong',
        'em',
        'small',
        'time',
        'code',
      ],
    },
    variant: {
      control: 'select',
      options: [
        'heading-xl',
        'heading-lg',
        'heading-md',
        'heading-sm',
        'heading-xs',
        'body-md-strong',
        'body-md',
        'body-sm-strong',
        'body-sm',
        'label-lg-strong',
        'label-lg',
        'label-md-strong',
        'label-md',
        'label-sm-strong',
        'label-sm',
        'caption-md',
        'caption-sm',
      ],
    },
    size: {
      control: 'select',
      options: [10, 12, 14, 16, 18, 20, 22, 24, 28, 30, 32, 36, 40, 48, 60],
    },
    weight: {
      control: 'inline-radio',
      options: [300, 400, 500, 600, 700, 800],
    },
    color: {
      control: 'select',
      options: [
        'fg-brand',
        'fg-brand-contrast',
        'fg-interactive',
        'fg-interactive-contrast',
        'fg-informative',
        'fg-informative-subtle',
        'fg-informative-contrast',
        'fg-negative',
        'fg-highlight',
        'fg-neutral',
        'fg-neutral-muted',
        'fg-neutral-subtle',
        'fg-neutral-faint',
        'fg-placeholder',
        'fg-disabled',
        'fg-on-solid',
      ],
    },
    lineHeight: {
      control: 'inline-radio',
      options: [100, 140, 160],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {};

export const Headings: Story = {
  render: () => <TypographyList samples={headingSamples} />,
};

export const Body: Story = {
  render: () => <TypographyList samples={bodySamples} />,
};

export const Labels: Story = {
  render: () => <TypographyList samples={labelSamples} />,
};

export const Captions: Story = {
  render: () => <TypographyList samples={captionSamples} />,
};

export const OverrideVariant: Story = {
  args: {
    variant: 'heading-xl',
    size: 16,
    weight: 400,
    lineHeight: 160,
    color: 'fg-interactive',
    children: 'heading-xl을 개별 prop으로 재정의한 텍스트입니다.',
  },
};
