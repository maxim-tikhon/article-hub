import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import classNames from 'classnames';
import cls from './NotificationItem.module.scss';
export var NotificationItem = memo(function (props) {
    var className = props.className, item = props.item;
    var content = (_jsx(Card, { theme: CardTheme.OUTLINED, className: classNames(cls.NotificationItem, className), children: _jsx(Text, { title: item.title, text: item.description }) }));
    if (item.href) {
        return (_jsx("a", { className: cls.link, target: "_blank", href: item.href, rel: "noreferrer", children: content }));
    }
    return content;
});
