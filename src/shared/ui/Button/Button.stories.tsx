import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDisabled: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
};

export const OutlineSizeL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineSizeXl: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Background: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXl: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};
