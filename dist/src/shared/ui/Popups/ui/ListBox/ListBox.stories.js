import { jsx as _jsx } from "react/jsx-runtime";
import { ListBox } from './ListBox';
var items = [
    {
        value: '1',
        content: 'option 1',
    },
    {
        value: '2',
        content: 'option 2',
    },
    {
        value: '3',
        content: 'option 3',
        disabled: true,
    },
];
var meta = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    args: {
        items: items,
        value: '1',
        onChange: function () { },
        label: 'Label',
    },
    decorators: [
        function (Story) { return _jsx("div", { style: { padding: 100 }, children: _jsx(Story, {}) }); },
    ],
};
export default meta;
export var Nornal = {};
export var TopLeft = {
    args: {
        direction: 'top left',
    },
};
export var TopRight = {
    args: {
        direction: 'top right',
    },
};
export var BottomLeft = {
    args: {
        direction: 'bottom left',
    },
};
export var BottonRight = {
    args: {
        direction: 'bottom right',
    },
};
