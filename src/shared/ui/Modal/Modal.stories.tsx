import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolore, ipsum blanditiis quis, aliquam amet eos tempora voluptatibus iusto nihil deserunt accusantium a quia ea optio ipsam. Nostrum, sint eligendi.',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
