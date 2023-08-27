import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ArticlesPage from './ArticlesPage';

const meta = {
  title: 'pages/Articles/Articles Page',
  component: ArticlesPage,
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};
