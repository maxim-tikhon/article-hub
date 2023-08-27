import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import AboutPage from './AboutPage';
var meta = {
    title: 'pages/About Page',
    component: AboutPage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};
export default meta;
export var Light = {};
export var Dark = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
