import type { Meta, StoryObj } from '@storybook/react';
import Select from '.';

const meta: Meta<typeof Select> = {
  title: 'Example/Select',
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const DefaultTheme: Story = {};
