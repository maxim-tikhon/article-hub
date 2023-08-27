import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

const meta = {
  title: 'features/Login Form',
  component: LoginForm,
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [StoreDecorator({
    loginForm: { username: 'admin', password: '321' },
  })],
};

export const WithError: Story = {
  decorators: [StoreDecorator({
    loginForm: { username: 'admin', password: '321', error: 'Error' },
  })],
};

export const Loading: Story = {
  decorators: [StoreDecorator({
    loginForm: { isLoading: true },
  })],
};

export const Dark: Story = {
  decorators: [StoreDecorator({
    loginForm: { username: 'admin', password: '321' },
  }), ThemeDecorator(Theme.DARK)],
};
