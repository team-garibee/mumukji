import { IconArrowRight } from '@mumukji/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof IconArrowRight> = {
  title: 'Iconography/Icons',
  component: IconArrowRight,
};

export default meta;

export const Icons: StoryObj<typeof IconArrowRight> = {
  args: {
    size: 24,
    color: 'gray',
  },
};
