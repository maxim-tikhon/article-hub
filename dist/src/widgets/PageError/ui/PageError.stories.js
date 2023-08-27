import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';
var meta = {
    title: 'widgets/Page Error',
    component: PageError,
    tags: ['autodocs'],
};
export default meta;
export var Light = {};
export var Dark = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
