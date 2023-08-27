import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';
var meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};
export default meta;
export var Light = {
    decorators: [StoreDecorator({})],
};
export var Dark = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export var LoggedIn = {
    decorators: [StoreDecorator({ user: { authData: {} } })],
};
