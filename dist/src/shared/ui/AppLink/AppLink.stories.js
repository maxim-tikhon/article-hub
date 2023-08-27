import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';
var meta = {
    title: 'shared/App Link',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
        children: 'Link',
    },
};
export default meta;
export var Primary = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};
export var PrimaryDark = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var Secondary = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
};
export var SecondaryDark = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var Red = {
    args: {
        theme: AppLinkTheme.RED,
    },
};
export var RedDark = {
    args: {
        theme: AppLinkTheme.RED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
