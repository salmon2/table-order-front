import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'INPUTS/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const DefaultSelect: Story = {
  args: {
    options: [],
    value: undefined,
    placeholder: '',
  },
};

export const Select1: Story = {
  args: {
    options: [
      { label: '커피', value: 'coffee' },
      { label: '빵', value: 'bread' },
      { label: '밥', value: 'rice' },
    ],
    value: undefined,
    placeholder: '',
  },
};
