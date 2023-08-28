import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Input } from './Input';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
