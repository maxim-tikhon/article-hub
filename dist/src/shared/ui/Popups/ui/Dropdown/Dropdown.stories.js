import { jsx as _jsx } from "react/jsx-runtime";
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';
var meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
};
export default meta;
export var Nornal = {
    args: {
        trigger: _jsx(Button, { children: "Open" }),
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
            {
                content: 'third',
            },
        ],
    },
};
