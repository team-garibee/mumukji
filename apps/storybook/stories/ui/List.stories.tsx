import { List, ListItem } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { spacingControl } from '../constants/spacing';

const menuItems = ['비빔밥', '된장찌개', '제육볶음'];

const meta: Meta<typeof List> = {
  title: 'UI/List',
  component: List,
  subcomponents: { ListItem },
  parameters: {
    layout: 'padded',
  },
  args: {
    as: 'ul',
  },
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['ul', 'ol'],
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

type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    children: menuItems.map((item) => <ListItem key={item}>{item}</ListItem>),
  },
};

export const Ordered: Story = {
  args: {
    as: 'ol',
    children: menuItems.map((item) => <ListItem key={item}>{item}</ListItem>),
  },
};
