import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { NotFoundPage } from './NotFoundPage';
var meta = {
    title: 'pages/Not Found Page',
    component: NotFoundPage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};
export default meta;
export var Light = {};
export var Dark = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
