import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { NotFoundPage } from './NotFoundPage';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'pages/Not Found Page',
  component: NotFoundPage,
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
