import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';
export var SidebarItem = memo(function (_a) {
    var _b;
    var item = _a.item, collapsed = _a.collapsed;
    var t = useTranslation().t;
    var isAuth = useSelector(getUserAuthData);
    if (item.authOnly && !isAuth) {
        return null;
    }
    return (_jsxs(AppLink, { theme: AppLinkTheme.SECONDARY, to: item.path, className: classNames(cls.item, (_b = {}, _b[cls.collapsed] = collapsed, _b)), children: [_jsx(item.Icon, { className: cls.icon }), _jsx("span", { className: cls.link, children: t(item.text) })] }));
});
