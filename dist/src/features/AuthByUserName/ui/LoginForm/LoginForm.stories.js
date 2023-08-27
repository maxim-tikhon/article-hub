import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';
var meta = {
    title: 'features/Login Form',
    component: LoginForm,
    tags: ['autodocs'],
    args: {},
};
export default meta;
export var Primary = {
    decorators: [StoreDecorator({
            loginForm: { username: 'admin', password: '321' },
        })],
};
export var WithError = {
    decorators: [StoreDecorator({
            loginForm: { username: 'admin', password: '321', error: 'Error' },
        })],
};
export var Loading = {
    decorators: [StoreDecorator({
            loginForm: { isLoading: true },
        })],
};
export var Dark = {
    decorators: [StoreDecorator({
            loginForm: { username: 'admin', password: '321' },
        }), ThemeDecorator(Theme.DARK)],
};
