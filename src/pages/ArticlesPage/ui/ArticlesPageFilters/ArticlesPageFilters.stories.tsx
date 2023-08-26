import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta = {
  title: 'pages/Articles/ArticlesPageFilters',
  component: ArticlesPageFilters,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};
