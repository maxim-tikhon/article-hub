import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta = {
  title: 'pages/Articles/ArticlesPageFilters',
  component: ArticlesPageFilters,
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};
