import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';
var meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Button',
    },
};
export default meta;
export var Primary = {};
export var Clear = {
    args: {
        theme: ButtonTheme.CLEAR,
    },
};
export var ClearInverted = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};
export var Outline = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
};
export var OutlineDisabled = {
    args: {
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};
export var OutlineSizeL = {
    args: {
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};
export var OutlineSizeXl = {
    args: {
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};
export var OutlineDark = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var Background = {
    args: {
        theme: ButtonTheme.BACKGROUND,
    },
};
export var BackgroundInverted = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};
export var Square = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};
export var SquareSizeL = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
export var SquareSizeXl = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
