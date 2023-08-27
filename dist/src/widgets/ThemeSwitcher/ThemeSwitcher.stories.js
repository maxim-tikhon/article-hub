import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';
var meta = {
    title: 'shared/Theme Switcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
};
export default meta;
export var Light = {};
export var Dark = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
