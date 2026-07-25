import { Box } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { spacingControl } from '../constants/spacing';

const meta: Meta<typeof Box> = {
  title: 'UI/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
  args: {
    p: 'md',
    as: 'div',
  },
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['div', 'span', 'main', 'header', 'footer', 'aside', 'nav'],
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
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: '기본 div로 렌더링되는 Box입니다.',
  },
};

export const Spacing: Story = {
  args: {
    p: 'md',
    mt: 'lg',
    children: 'padding, margin props를 함께 적용한 예시입니다.',
  },
};

export const AsSpan: Story = {
  args: {
    as: 'span',
    p: 'md',
    children:
      'span은 인라인 요소라 수직(top/bottom) padding·margin이 기대대로 적용되지 않을 수 있습니다. 필요하다면 className으로 display를 조정하세요.',
  },
};

export const AsHeader: Story = {
  args: {
    as: 'header',
    p: 'lg',
    children: 'header 태그로 렌더링되는 Box입니다.',
  },
};
