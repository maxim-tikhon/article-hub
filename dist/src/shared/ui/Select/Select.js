import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useMemo } from 'react';
import cls from './Select.module.scss';
export var Select = function (props) {
    var className = props.className, label = props.label, options = props.options, onChange = props.onChange, value = props.value, readonly = props.readonly;
    var onChangeHandler = function (e) {
        if (onChange) {
            onChange(e.target.value);
        }
    };
    var optionsList = useMemo(function () { return options === null || options === void 0 ? void 0 : options.map(function (opt) { return (_jsx("option", { className: cls.option, value: opt.value, children: opt.content }, opt.value)); }); }, [options]);
    return (_jsxs("div", { className: classNames(cls.wrapper, className), children: [label && (_jsx("span", { className: cls.label, children: label })), _jsx("select", { disabled: readonly, className: cls.select, value: value, onChange: onChangeHandler, children: optionsList })] }));
};
