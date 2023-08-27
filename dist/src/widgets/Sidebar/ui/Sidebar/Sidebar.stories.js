import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Sidebar } from './Sidebar';
var meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};
export default meta;
export var Light = {
    decorators: [StoreDecorator({
            user: { authData: {} },
        })],
};
export var Dark = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
            user: { authData: {} },
        })],
};
export var NoAuth = {
    decorators: [StoreDecorator({
            user: {},
        })],
};
