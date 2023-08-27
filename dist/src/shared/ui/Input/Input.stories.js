import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';
var meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    args: {
        placeholder: 'Enter text',
    },
};
export default meta;
export var Primary = {};
export var Dark = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
