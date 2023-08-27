import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import classNames from 'classnames';
import cls from './Icon.module.scss';
export var Icon = memo(function (props) {
    var className = props.className, Svg = props.Svg, inverted = props.inverted;
    return (_jsx(Svg, { className: classNames(inverted ? cls.inverted : cls.icon, className) }));
});
