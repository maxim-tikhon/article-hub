import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [StoreDecorator({})],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const LoggedIn: Story = {
  decorators: [StoreDecorator({ user: { authData: {} } })],
};
