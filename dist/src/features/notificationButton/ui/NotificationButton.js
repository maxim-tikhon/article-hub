import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Popover } from 'shared/ui/Popups';
import classNames from 'classnames';
import { NotificationList } from 'entities/Notification';
import { useDevice } from 'shared/lib/hooks/useDevice';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import cls from './NotificationButton.module.scss';
export var NotificationButton = memo(function (props) {
    var className = props.className;
    var isMobele = useDevice();
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var onOpenDrawer = useCallback(function () {
        setIsOpen(true);
    }, []);
    var onCloseDrawer = useCallback(function () {
        setIsOpen(false);
    }, []);
    var mobileTrigger = (_jsx(Button, { onClick: onOpenDrawer, theme: ButtonTheme.CLEAR, children: _jsx(Icon, { Svg: NotificationIcon, inverted: true }) }));
    return (_jsx("div", { children: isMobele
            ? (_jsxs(_Fragment, { children: [mobileTrigger, _jsx(AnimationProvider, { children: _jsx(Drawer, { isOpen: isOpen, onClose: onCloseDrawer, children: _jsx(NotificationList, {}) }) })] }))
            : (_jsx(Popover, { className: classNames(cls.notificationButton, {}, [className]), direction: "bottom left", buttonTheme: ButtonTheme.CLEAR, trigger: (_jsx(Icon, { Svg: NotificationIcon, inverted: true })), children: _jsx(NotificationList, { className: cls.notifications }) })) }));
});
