import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import classNames from 'classnames';
import { HStack } from '../../../Stack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
export function ListBox(props) {
    var className = props.className, items = props.items, value = props.value, defaultValue = props.defaultValue, onChange = props.onChange, readonly = props.readonly, _a = props.direction, direction = _a === void 0 ? 'bottom right' : _a, label = props.label;
    var optionsClasses = [mapDirectionClass[direction]];
    return (_jsxs(HStack, { gap: "4", children: [label && _jsx("span", { children: label }), _jsxs(HListBox, { disabled: readonly, as: "div", className: classNames(popupCls.popup, className), value: value, onChange: onChange, children: [_jsx(HListBox.Button, { as: Button, "aria-disabled": readonly, className: popupCls.trigger, children: value !== null && value !== void 0 ? value : defaultValue }), _jsx(HListBox.Options, { className: classNames(cls.options, optionsClasses), children: items === null || items === void 0 ? void 0 : items.map(function (item) { return (_jsx(HListBox.Option, { value: item.value, disabled: item.disabled, as: Fragment, children: function (_a) {
                                var _b;
                                var active = _a.active, selected = _a.selected;
                                return (_jsxs("li", { className: classNames(cls.item, (_b = {},
                                        _b[popupCls.active] = active,
                                        _b[popupCls.disabled] = item.disabled,
                                        _b)), children: [selected && '!!!', item.content] }));
                            } }, item.value)); }) })] })] }));
}
