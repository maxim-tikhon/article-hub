var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { getUserAuthData, isUserAdmin, isUserManager, userActions, } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useCallback } from 'react';
import { Dropdown } from 'shared/ui/Popups';
export var AvatarDropdown = function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var dispatch = useDispatch();
    var authData = useSelector(getUserAuthData);
    var isAdmin = useSelector(isUserAdmin);
    var isManager = useSelector(isUserManager);
    var isAdminPanelAvailable = isAdmin || isManager;
    var logout = useCallback(function () {
        dispatch(userActions.logout());
    }, [dispatch]);
    if (!authData) {
        return null;
    }
    return (_jsx(Dropdown, { direction: "bottom left", className: classNames(className), items: __spreadArray(__spreadArray([], (isAdminPanelAvailable ? [{
                content: t('Admin panel'),
                href: RoutePath.admin_panel,
            }] : []), true), [
            {
                content: t('Profile'),
                href: RoutePath.profile + authData.id,
            },
            {
                content: t('Logout'),
                onClick: logout,
            },
        ], false), trigger: _jsx(Avatar, { size: 30, src: authData.avatar }) }));
};
