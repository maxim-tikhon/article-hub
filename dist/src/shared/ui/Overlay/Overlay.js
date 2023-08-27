import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import classNames from 'classnames';
import cls from './Overlay.module.scss';
export var Overlay = memo(function (props) {
    var className = props.className, onClick = props.onClick;
    return (_jsx("div", { onClick: onClick, className: classNames(cls.overlay, className) }));
});
