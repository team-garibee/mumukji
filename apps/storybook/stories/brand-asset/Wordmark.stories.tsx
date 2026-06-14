import { Wordmark } from '@mumukji/brand-assets';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Wordmark> = {
  title: 'Brand Assets/Logo',
  component: Wordmark,
};

export default meta;

export const Default: StoryObj<typeof Wordmark> = {
  args: {
    width: 120,
  },
};
