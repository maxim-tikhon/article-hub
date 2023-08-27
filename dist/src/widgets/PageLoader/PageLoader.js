import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import cls from './PageLoader.module.scss';
import { Loader } from '../../shared/ui/Loader/Loader';
export var PageLoader = function (props) {
    var className = props.className;
    return (_jsx("div", { className: classNames(cls.pageLoader, className), children: _jsx(Loader, {}) }));
};
