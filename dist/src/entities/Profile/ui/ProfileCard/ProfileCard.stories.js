import avatar from 'shared/assets/tests/storybook.jpg';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';
var meta = {
    title: 'entities/Profile Card',
    component: ProfileCard,
    tags: ['autodocs'],
    args: {},
};
export default meta;
export var Primary = {
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
            avatar: avatar,
        },
    },
};
export var WithError = {
    args: {
        error: 'error',
    },
};
export var Loading = {
    args: {
        isLoading: true,
    },
};
