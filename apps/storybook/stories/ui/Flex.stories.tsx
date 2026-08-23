import { Flex } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { spacingControl } from '../constants/spacing';

const demoItemStyle = {
  padding: '12px 16px',
  background: '#e5e7eb',
  borderRadius: 4,
};

const DemoItems = () => (
  <>
    <div style={demoItemStyle}>Item 1</div>
    <div style={demoItemStyle}>Item 2</div>
    <div style={demoItemStyle}>Item 3</div>
  </>
);

const meta: Meta<typeof Flex> = {
  title: 'UI/01. Primitive/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  args: {
    as: 'div',
    gap: 'md',
  },
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['div', 'span', 'main', 'header', 'footer', 'aside', 'nav'],
    },
    justify: {
      control: 'inline-radio',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
      ],
    },
    align: {
      control: 'inline-radio',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    },
    wrap: {
      control: 'inline-radio',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
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

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    children: <DemoItems />,
  },
};

export const JustifyCenter: Story = {
  args: {
    justify: 'center',
    children: <DemoItems />,
  },
};

export const AlignCenter: Story = {
  args: {
    align: 'center',
    children: (
      <>
        <div style={{ ...demoItemStyle, height: 24 }}>Short</div>
        <div style={{ ...demoItemStyle, height: 64 }}>Tall</div>
      </>
    ),
  },
};

export const Wrap: Story = {
  args: {
    wrap: 'wrap',
    gap: 'sm',
    children: Array.from({ length: 10 }, (_, index) => (
      <div key={index} style={{ ...demoItemStyle, width: 120 }}>
        Item {index + 1}
      </div>
    )),
  },
};

export const WithGap: Story = {
  args: {
    gap: 'xl',
    children: <DemoItems />,
  },
};
