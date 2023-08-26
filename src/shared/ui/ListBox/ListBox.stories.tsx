import type { Meta, StoryObj } from '@storybook/react';
import { ListBox, ListBoxItem } from './ListBox';

const items: ListBoxItem[] = [
  {
    value: '1',
    content: 'option 1',
  },
  {
    value: '2',
    content: 'option 2',
  },
  {
    value: '3',
    content: 'option 3',
    disabled: true,
  },
];

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  args: {
    items,
    value: '1',
    onChange: () => {},
    label: 'Label',
  },
  decorators: [
    Story => <div style={{ padding: 100 }}><Story /></div>,
  ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Nornal: Story = {
};

export const TopLeft: Story = {
  args: {
    direction: 'top left',
  },
};

export const TopRight: Story = {
  args: {
    direction: 'top right',
  },
};

export const BottomLeft: Story = {
  args: {
    direction: 'bottom left',
  },
};

export const BottonRight: Story = {
  args: {
    direction: 'bottom right',
  },
};
