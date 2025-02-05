// Card.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'INPUTS/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    variant: 'contained',
    children: 'hello world',
  },
};
