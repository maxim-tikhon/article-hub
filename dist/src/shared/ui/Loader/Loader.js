import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import './Loader.scss';
export var Loader = function (props) {
    var className = props.className;
    return (_jsxs("div", { className: classNames('lds-ellipsis', className), children: [_jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {})] }));
};
