import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';
var meta = {
    title: 'pages/Profile Page',
    component: ProfilePage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 22,
                    country: Country.Ukraine,
                    lastname: 'ulbi tv',
                    first: 'asd',
                    city: 'asf',
                    currency: Currency.USD,
                },
            },
        })],
};
export default meta;
export var Light = {};
export var Dark = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
