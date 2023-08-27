import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { memo } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { Button, ButtonTheme } from '../../shared/ui/Button/Button';
export var ThemeSwitcher = memo(function (props) {
    var className = props.className;
    var _a = useTheme(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (_jsx(Button, { className: classNames(className), theme: ButtonTheme.CLEAR, onClick: toggleTheme, children: theme === Theme.LIGHT ? _jsx(LightIcon, {}) : _jsx(DarkIcon, {}) }));
});
