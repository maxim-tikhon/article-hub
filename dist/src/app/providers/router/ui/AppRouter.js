import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';
var renderWithWrapper = function (route) {
    var element = (_jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: route.element }));
    return (_jsx(Route, { path: route.path, element: route.authOnly ? _jsx(RequireAuth, { roles: route.roles, children: element }) : element }, route.path));
};
var AppRouter = function () { return (_jsx(Routes, { children: Object.values(routeConfig).map(renderWithWrapper) })); };
export default memo(AppRouter);
