import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { action } from '@storybook/addon-actions';
import AddCommentForm from './AddCommentForm';
var meta = {
    title: 'features/Add Comment Form',
    component: AddCommentForm,
    tags: ['autodocs'],
};
export default meta;
export var Normal = {
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [
        StoreDecorator({}),
    ],
};
