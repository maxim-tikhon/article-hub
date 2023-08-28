import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { PageError } from './PageError';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'widgets/Page Error',
  component: PageError,
  tags: ['autodocs'],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
