import { Grid } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { spacingControl } from '../constants/spacing';

const demoItemStyle = {
  padding: '12px 16px',
  background: '#e5e7eb',
  borderRadius: 4,
};

const DemoItems = ({ count = 6 }: { count?: number }) => (
  <>
    {Array.from({ length: count }, (_, index) => (
      <div key={index} style={demoItemStyle}>
        Item {index + 1}
      </div>
    ))}
  </>
);

const meta: Meta<typeof Grid> = {
  title: 'UI/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  args: {
    as: 'div',
    columns: 3,
    gap: 'md',
  },
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['div', 'span', 'main', 'header', 'footer', 'aside', 'nav'],
    },
    columns: {
      control: { type: 'number', min: 1 },
    },
    rows: {
      control: { type: 'number', min: 1 },
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

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    children: <DemoItems />,
  },
};

export const Columns4: Story = {
  args: {
    columns: 4,
    children: <DemoItems count={8} />,
  },
};

export const ColumnsAndRows: Story = {
  args: {
    columns: 2,
    rows: 3,
    style: { height: 300 },
    children: <DemoItems count={6} />,
  },
};

export const WithGap: Story = {
  args: {
    columns: 3,
    gap: 'xl',
    children: <DemoItems />,
  },
};

export const SeparateColumnRowGap: Story = {
  args: {
    columns: 3,
    columnGap: '2xl',
    rowGap: 'xs',
    children: <DemoItems count={9} />,
  },
};
