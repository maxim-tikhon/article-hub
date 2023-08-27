import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';
var meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
};
export default meta;
export var Light = {};
export var Dark = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
