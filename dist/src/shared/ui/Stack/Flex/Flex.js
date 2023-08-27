import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import cls from './Flex.module.scss';
var justifyClasses = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};
var alignClasses = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};
var directionClasses = {
    row: cls.directionRow,
    column: cls.directionColumn,
};
var gapClasses = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};
export var Flex = function (props) {
    var _a;
    var className = props.className, children = props.children, _b = props.justify, justify = _b === void 0 ? 'start' : _b, _c = props.align, align = _c === void 0 ? 'center' : _c, _d = props.direction, direction = _d === void 0 ? 'row' : _d, gap = props.gap, max = props.max;
    var classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];
    return (_jsx("div", { className: classNames(cls.flex, classes, (_a = {}, _a[cls.max] = max, _a)), children: children }));
};
