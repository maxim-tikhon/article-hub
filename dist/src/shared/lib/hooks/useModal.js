import { useCallback, useEffect, useRef, useState, } from 'react';
export function useModal(_a) {
    var animationDelay = _a.animationDelay, isOpen = _a.isOpen, onClose = _a.onClose;
    var _b = useState(false), isClosing = _b[0], setIsClosing = _b[1];
    var _c = useState(false), isMounted = _c[0], setIsMounted = _c[1];
    var timerRef = useRef();
    var close = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(function () {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [onClose, animationDelay]);
    useEffect(function () {
        var onKeyDown = function (e) {
            if (e.key === 'Escape') {
                close();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return function () {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [close, isOpen]);
    useEffect(function () {
        if (isOpen) {
            setIsMounted(true);
        }
        return function () {
            setIsMounted(false);
        };
    }, [isOpen]);
    return {
        isClosing: isClosing,
        isMounted: isMounted,
        close: close,
    };
}
