import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
export var StoreProvider = function (props) {
    var children = props.children, initialState = props.initialState, asyncReducers = props.asyncReducers;
    var store = createReduxStore(initialState, asyncReducers);
    return (_jsx(Provider, { store: store, children: children }));
};
