import { List, ListItem } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { spacingControl } from '../constants/spacing';

const meta: Meta<typeof ListItem> = {
  title: 'UI/List/ListItem',
  component: ListItem,
  parameters: {
    layout: 'padded',
  },
  args: {
    children: '목록 항목',
  },
  argTypes: {
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
  render: (args) => (
    <List>
      <ListItem {...args} />
    </List>
  ),
};

export default meta;

type Story = StoryObj<typeof ListItem>;

export const Default: Story = {};
