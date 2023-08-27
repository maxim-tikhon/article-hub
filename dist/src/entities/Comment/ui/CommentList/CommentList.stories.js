import { CommentList } from './CommentList';
var meta = {
    title: 'entities/Comment/Comment List',
    component: CommentList,
    tags: ['autodocs'],
};
export default meta;
export var Normal = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: { id: '1', username: 'Vasya' },
            },
            {
                id: '2',
                text: 'Comment 2',
                user: { id: '1', username: 'Petya' },
            },
        ],
    },
};
export var Loading = {
    args: {
        comments: [],
        isLoading: true,
    },
};
