import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import AboutPage from './AboutPage';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'pages/About Page',
  component: AboutPage,
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
