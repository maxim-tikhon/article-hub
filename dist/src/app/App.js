import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInitiated, userActions } from 'entities/User';
import { AppRouter } from './providers/router';
var App = function () {
    var dispatch = useDispatch();
    var userInitiated = useSelector(getUserInitiated);
    useEffect(function () {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (_jsx("div", { className: classNames('app'), children: _jsxs(Suspense, { fallback: "", children: [_jsx(Navbar, {}), _jsxs("div", { className: "page-content", children: [_jsx(Sidebar, { className: "sidebar" }), userInitiated && _jsx(AppRouter, {})] })] }) }));
};
export default App;
