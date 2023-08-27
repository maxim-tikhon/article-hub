var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Skeleton } from './Skeleton';
var meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
};
export default meta;
export var Normal = {
    args: {
        width: '100%',
        height: 200,
    },
};
export var Circle = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};
export var NormalDark = __assign(__assign({}, Normal), { decorators: [ThemeDecorator(Theme.DARK)] });
export var CircleDark = __assign(__assign({}, Circle), { decorators: [ThemeDecorator(Theme.DARK)] });
