import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';
var meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolore, ipsum blanditiis quis, aliquam amet eos tempora voluptatibus iusto nihil deserunt accusantium a quia ea optio ipsam. Nostrum, sint eligendi.',
    },
};
export default meta;
export var Primary = {};
export var Dark = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
