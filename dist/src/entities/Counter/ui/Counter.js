import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
export var Counter = function () {
    var dispatch = useDispatch();
    var counterValue = useSelector(getCounterValue);
    var t = useTranslation().t;
    var incremant = function () {
        dispatch(counterActions.increment());
    };
    var decremant = function () {
        dispatch(counterActions.decrement());
    };
    return (_jsxs("div", { children: [_jsx("h1", { "data-testid": "value-title", children: counterValue }), _jsx(Button, { "data-testid": "increment-btn", onClick: incremant, children: t('Increment') }), _jsx(Button, { "data-testid": "decrement-btn", onClick: decremant, children: t('Decremant') })] }));
};
