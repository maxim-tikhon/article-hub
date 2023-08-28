import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'shared/Theme Switcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
