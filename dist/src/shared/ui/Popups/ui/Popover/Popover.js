import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popover as HPopover } from '@headlessui/react';
import classNames from 'classnames';
import { Button, ButtonTheme } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
export function Popover(props) {
    var className = props.className, trigger = props.trigger, _a = props.direction, direction = _a === void 0 ? 'bottom right' : _a, children = props.children, _b = props.buttonTheme, buttonTheme = _b === void 0 ? ButtonTheme.CLEAR : _b;
    var menuClasses = [mapDirectionClass[direction]];
    return (_jsxs(HPopover, { className: classNames(cls.popover, className, popupCls.popup), children: [_jsx(HPopover.Button, { as: Button, theme: buttonTheme, className: popupCls.trigger, children: trigger }), _jsx(HPopover.Panel, { className: classNames(cls.panel, menuClasses), children: children })] }));
}
