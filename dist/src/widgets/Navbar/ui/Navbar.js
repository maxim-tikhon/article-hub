import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getUserAuthData, } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AvatarDropdown } from 'features/avatarDropdown';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/notificationButton';
import cls from './Navbar.module.scss';
export var Navbar = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useState(false), isAuthModalOpen = _b[0], setIsAuthModalOpen = _b[1];
    var authData = useSelector(getUserAuthData);
    var cloesAuthModal = useCallback(function () {
        setIsAuthModalOpen(false);
    }, []);
    var showAuthModal = useCallback(function () {
        setIsAuthModalOpen(true);
    }, []);
    if (authData) {
        return (_jsxs("header", { className: classNames(className, cls.navbar), children: [_jsx(Text, { className: cls.appName, title: t('Article Hub'), theme: TextTheme.INVERTED }), _jsx(AppLink, { to: RoutePath.article_create, theme: AppLinkTheme.SECONDARY, className: cls.createBtn, children: t('Create article') }), _jsxs(HStack, { gap: "16", className: cls.actions, children: [_jsx(NotificationButton, {}), _jsx(AvatarDropdown, {})] })] }));
    }
    return (_jsxs("header", { className: classNames(className, cls.navbar), children: [_jsx(Button, { theme: ButtonTheme.CLEAR_INVERTED, className: cls.links, onClick: showAuthModal, children: t('Login') }), _jsx(LoginModal, { isOpen: isAuthModalOpen, onClose: cloesAuthModal })] }));
});
