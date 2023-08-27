import { useEffect, useRef } from 'react';
export function useThrottle(callback, delay) {
    var throttleRef = useRef(false);
    var timeoutRef = useRef();
    useEffect(function () { return function () {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }; }, []);
    function throttledCallback() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!throttleRef.current) {
            callback.apply(void 0, args);
            throttleRef.current = true;
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(function () {
                throttleRef.current = false;
            }, delay);
        }
    }
    return throttledCallback;
}
