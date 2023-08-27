import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import classNames from 'classnames';
import cls from './Skeleton.module.scss';
export var Skeleton = memo(function (props) {
    var className = props.className, height = props.height, width = props.width, border = props.border;
    var styles = {
        width: width,
        height: height,
        borderRadius: border,
    };
    return (_jsx("div", { className: classNames(cls.skeleton, className), style: styles }));
});
