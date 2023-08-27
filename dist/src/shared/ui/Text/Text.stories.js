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
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';
var meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
};
export default meta;
export var Primary = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};
export var Error = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
};
export var OnlyTitle = {
    args: {
        title: 'Title',
    },
};
export var OnlyText = {
    args: {
        text: 'Text',
    },
};
export var PrimaryDark = {
    args: {
        title: 'Title',
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var OnlyTitleDark = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var OnlyTextDark = {
    args: {
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var SizeL = __assign(__assign({}, Primary), { args: {
        size: TextSize.L,
    } });
