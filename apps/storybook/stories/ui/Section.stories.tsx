import { Section } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const SPACING_OPTIONS = [
  'null',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
] as const;

const spacingControl = {
  control: 'select',
  options: SPACING_OPTIONS,
} as const;

const meta: Meta<typeof Section> = {
  title: 'UI/Section',
  component: Section,
  parameters: {
    layout: 'padded',
  },
  args: {
    p: 'md',
    as: 'section',
  },
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['section', 'article'],
    },
    p: spacingControl,
    px: spacingControl,
    py: spacingControl,
    pt: spacingControl,
    pr: spacingControl,
    pb: spacingControl,
    pl: spacingControl,
    m: spacingControl,
    mx: spacingControl,
    my: spacingControl,
    mt: spacingControl,
    mr: spacingControl,
    mb: spacingControl,
    ml: spacingControl,
    gap: spacingControl,
    columnGap: spacingControl,
    rowGap: spacingControl,
  },
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    'aria-labelledby': 'section-default-title',
    children: (
      <>
        <h2 id='section-default-title'>오늘의 메뉴</h2>
        <p>접근 가능한 제목을 가진 기본 section 예시입니다.</p>
      </>
    ),
  },
};

export const Article: Story = {
  args: {
    as: 'article',
    p: 'lg',
    'aria-labelledby': 'section-article-title',
    children: (
      <>
        <h2 id='section-article-title'>추천 식당</h2>
        <p>
          독립적으로 배포되거나 재사용될 수 있는 콘텐츠는 article로
          렌더링합니다.
        </p>
      </>
    ),
  },
};

export const WithSpacing: Story = {
  args: {
    p: 'md',
    mt: 'lg',
    gap: 'sm',
    'aria-labelledby': 'section-spacing-title',
    children: (
      <>
        <h2 id='section-spacing-title'>스페이싱 적용</h2>
        <p>padding, margin, gap props를 함께 적용한 예시입니다.</p>
      </>
    ),
  },
};
