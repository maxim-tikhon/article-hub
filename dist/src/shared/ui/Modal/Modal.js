import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useModal } from 'shared/lib/hooks/useModal';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
var ANIMATION_DELAY = 300;
export var Modal = function (props) {
    var _a;
    var className = props.className, children = props.children, isOpen = props.isOpen, onClose = props.onClose, lazy = props.lazy;
    var _b = useModal({ animationDelay: ANIMATION_DELAY, onClose: onClose, isOpen: isOpen }), close = _b.close, isClosing = _b.isClosing, isMounted = _b.isMounted;
    var mods = (_a = {}, _a[cls.opened] = isOpen, _a[cls.isClosing] = isClosing, _a);
    if (lazy && !isMounted) {
        return null;
    }
    return (_jsx(Portal, { children: _jsxs("div", { className: classNames(cls.modal, className, mods), children: [_jsx(Overlay, { onClick: close }), _jsx("div", { className: cls.content, children: children })] }) }));
};
