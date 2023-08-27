import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
export var Code = memo(function (props) {
    var className = props.className, text = props.text;
    var onCopy = useCallback(function () {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (_jsxs("pre", { className: classNames(cls.code, className), children: [_jsx(Button, { onClick: onCopy, className: cls.copyBtn, theme: ButtonTheme.CLEAR, children: _jsx(CopyIcon, { className: cls.copyIcon }) }), _jsx("code", { children: text })] }));
});
