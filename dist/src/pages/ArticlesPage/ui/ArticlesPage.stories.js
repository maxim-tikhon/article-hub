import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import ArticlesPage from './ArticlesPage';
var meta = {
    title: 'pages/Articles/Articles Page',
    component: ArticlesPage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};
export default meta;
export var Light = {};
