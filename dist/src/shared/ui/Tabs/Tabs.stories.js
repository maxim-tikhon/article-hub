import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';
var meta = {
    title: 'shared/Tabs',
    component: Tabs,
    tags: ['autodocs'],
};
export default meta;
export var Normal = {
    args: {
        tabs: [
            {
                value: 'tab 1',
                content: 'tab 1',
            },
            {
                value: 'tab 2',
                content: 'tab 2',
            },
            {
                value: 'tab 3',
                content: 'tab 3',
            },
        ],
        value: 'tab 2',
        onTabClick: action('onTabClick'),
    },
};
