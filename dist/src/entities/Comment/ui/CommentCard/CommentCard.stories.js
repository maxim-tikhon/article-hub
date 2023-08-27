import { CommentCard } from './CommentCard';
var meta = {
    title: 'entities/Comment/Cooment Card',
    component: CommentCard,
    tags: ['autodocs'],
};
export default meta;
export var Normal = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
    },
};
export var Loading = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
        isLoading: true,
    },
};
