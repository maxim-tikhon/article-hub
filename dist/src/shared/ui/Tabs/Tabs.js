import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo, useCallback } from 'react';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';
export var Tabs = memo(function (props) {
    var className = props.className, tabs = props.tabs, onTabClick = props.onTabClick, value = props.value;
    var clickHandle = useCallback(function (tab) { return function () {
        onTabClick(tab);
    }; }, [onTabClick]);
    return (_jsx("div", { className: classNames(cls.tabs, className), children: tabs.map(function (tab) { return (_jsx(Card, { theme: tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED, className: cls.tab, onClick: clickHandle(tab), children: tab.content }, tab.value)); }) }));
});
