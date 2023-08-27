import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import classNames from 'classnames';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';
export var NotificationList = memo(function (props) {
    var className = props.className;
    var _a = useNotifications(null, {
        pollingInterval: 10000,
    }), data = _a.data, isLoading = _a.isLoading;
    if (isLoading) {
        return (_jsxs(VStack, { gap: "16", max: true, className: classNames(cls.NotificationList, {}, [className]), children: [_jsx(Skeleton, { width: "100%", border: "8px", height: "80px" }), _jsx(Skeleton, { width: "100%", border: "8px", height: "80px" }), _jsx(Skeleton, { width: "100%", border: "8px", height: "80px" })] }));
    }
    return (_jsx(VStack, { gap: "16", max: true, className: classNames(cls.NotificationList, {}, [className]), children: data === null || data === void 0 ? void 0 : data.map(function (item) { return (_jsx(NotificationItem, { item: item }, item.id)); }) }));
});
