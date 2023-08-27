import AvatarImg from './storybook.jpg';
import { Avatar } from './Avatar';
var meta = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    args: {
        src: AvatarImg,
    },
};
export default meta;
export var Primary = {
    args: {
        size: 150,
    },
};
export var Small = {
    args: {
        size: 50,
    },
};
