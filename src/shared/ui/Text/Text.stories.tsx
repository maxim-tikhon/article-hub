import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'Text',
  },
};

export const Error: Story = {
  args: {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Text',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
  ...Primary,
  args: {
    size: TextSize.L,
  },
};
