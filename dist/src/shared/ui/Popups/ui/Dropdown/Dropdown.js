import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import classNames from 'classnames';
import { AppLink } from '../../../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';
export function Dropdown(props) {
    var className = props.className, trigger = props.trigger, items = props.items, _a = props.direction, direction = _a === void 0 ? 'bottom right' : _a;
    var menuClasses = [mapDirectionClass[direction]];
    return (_jsxs(Menu, { as: "div", className: classNames(cls.Dropdown, className, popupCls.popup), children: [_jsx(Menu.Button, { className: popupCls.trigger, children: trigger }), _jsx(Menu.Items, { className: classNames(cls.menu, menuClasses), children: items.map(function (item, index) {
                    var content = function (_a) {
                        var _b;
                        var active = _a.active;
                        return (_jsx("button", { type: "button", disabled: item.disabled, onClick: item.onClick, className: classNames(cls.item, (_b = {}, _b[popupCls.active] = active, _b)), children: item.content }));
                    };
                    if (item.href) {
                        return (_jsx(Menu.Item, { as: AppLink, to: item.href, disabled: item.disabled, children: content }, index));
                    }
                    return (_jsx(Menu.Item, { as: Fragment, disabled: item.disabled, children: content }, index));
                }) })] }));
}
