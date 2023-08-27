import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
export var useDynamicReducurLoad = function (reducerList, removeAfterUnmount) {
    if (removeAfterUnmount === void 0) { removeAfterUnmount = true; }
    var dispatch = useDispatch();
    var store = useStore();
    useEffect(function () {
        var mountedReducers = store.reducerManager.getReducerMap();
        Object.entries(reducerList).forEach(function (_a) {
            var stateKey = _a[0], reducer = _a[1];
            var mounted = mountedReducers[stateKey];
            if (!mounted) {
                store.reducerManager.add(stateKey, reducer);
                dispatch({ type: "@INIT ".concat(stateKey, " reducer") });
            }
        });
        return function () {
            if (removeAfterUnmount) {
                Object.entries(reducerList).forEach(function (_a) {
                    var stateKey = _a[0], reducer = _a[1];
                    store.reducerManager.remove(stateKey);
                    dispatch({ type: "@DESTROY ".concat(stateKey, " reducer") });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
