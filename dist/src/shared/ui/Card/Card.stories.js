import { jsx as _jsx } from "react/jsx-runtime";
import { Card } from './Card';
import { Text } from '../Text/Text';
var meta = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
};
export default meta;
export var Normal = {
    args: {
        children: _jsx(Text, { title: "title", text: "text text" }),
    },
};
