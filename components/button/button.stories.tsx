import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['solid', 'ghost'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SolidVariant: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    size: 'large',
  }
};

export const GhostVariant: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    size: 'large',
  }
};