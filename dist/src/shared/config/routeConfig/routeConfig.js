var _a;
import { jsx as _jsx } from "react/jsx-runtime";
import { UserRole } from 'entities/User';
import { AboutPage } from 'pages/AboutPage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ForbiddenPage } from 'pages/ForbiddenPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["PROFILE"] = "profile";
    AppRoutes["ARTICLES"] = "articles";
    AppRoutes["ARTICLE_DETAILS"] = "article_details";
    AppRoutes["ARTICLE_CREATE"] = "article_create";
    AppRoutes["ARTICLE_EDIT"] = "article_edit";
    AppRoutes["ADMIN_PANEL"] = "admin_panel";
    AppRoutes["FORBIDDEN"] = "forbidden";
    AppRoutes["NOT_FOUND"] = "not_ound";
})(AppRoutes || (AppRoutes = {}));
export var RoutePath = (_a = {},
    _a[AppRoutes.MAIN] = '/',
    _a[AppRoutes.ABOUT] = '/about',
    _a[AppRoutes.PROFILE] = '/profile/',
    _a[AppRoutes.ARTICLES] = '/articles',
    _a[AppRoutes.ARTICLE_DETAILS] = '/articles/',
    _a[AppRoutes.ARTICLE_CREATE] = '/articles/new',
    _a[AppRoutes.ARTICLE_EDIT] = '/articles/:id/edit',
    _a[AppRoutes.ADMIN_PANEL] = '/admin',
    _a[AppRoutes.FORBIDDEN] = '/forbidden',
    _a[AppRoutes.NOT_FOUND] = '*',
    _a);
export var routeConfig = [{
        path: RoutePath[AppRoutes.MAIN],
        element: _jsx(MainPage, {}),
    }, {
        path: RoutePath[AppRoutes.ABOUT],
        element: _jsx(AboutPage, {}),
    }, {
        path: "".concat(RoutePath[AppRoutes.PROFILE], ":id"),
        element: _jsx(ProfilePage, {}),
        authOnly: true,
    }, {
        path: RoutePath[AppRoutes.ARTICLES],
        element: _jsx(ArticlesPage, {}),
        authOnly: true,
    }, {
        path: "".concat(RoutePath[AppRoutes.ARTICLE_DETAILS], ":id"),
        element: _jsx(ArticleDetailsPage, {}),
        authOnly: true,
    }, {
        path: "".concat(RoutePath.article_create),
        element: _jsx(ArticleEditPage, {}),
        authOnly: true,
    }, {
        path: "".concat(RoutePath.article_edit),
        element: _jsx(ArticleEditPage, {}),
        authOnly: true,
    }, {
        path: "".concat(RoutePath.admin_panel),
        element: _jsx(AdminPanelPage, {}),
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    }, {
        path: "".concat(RoutePath.forbidden),
        element: _jsx(ForbiddenPage, {}),
    }, {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: _jsx(NotFoundPage, {}),
    },
];
