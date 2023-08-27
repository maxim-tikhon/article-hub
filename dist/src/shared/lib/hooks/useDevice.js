import { useState, useEffect } from 'react';
export var useDevice = function () {
    var _a = useState(false), isMobile = _a[0], setIsMobile = _a[1];
    useEffect(function () {
        var handleResize = function () { return setIsMobile(window.matchMedia('(pointer:coarse)').matches); };
        handleResize();
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    return isMobile;
};
