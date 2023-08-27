import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
export var Sidebar = memo(function (_a) {
    var _b;
    var className = _a.className;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var onToggle = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    var sidebarItemsList = useSelector(getSidebarItems);
    var itemsList = useMemo(function () { return sidebarItemsList.map(function (item) { return (_jsx(SidebarItem, { item: item, collapsed: collapsed }, item.path)); }); }, [collapsed, sidebarItemsList]);
    return (_jsxs("aside", { "data-testid": "sidebar", className: classNames(cls.sidebar, className, (_b = {}, _b[cls.collapsed] = collapsed, _b)), children: [_jsx(Button, { "data-testid": "sidebar-toggle", onClick: onToggle, className: cls.collapseBtn, theme: ButtonTheme.BACKGROUND_INVERTED, size: ButtonSize.L, square: true, children: collapsed ? '>' : '<' }), _jsx(VStack, { role: "navigation", gap: "8", className: cls.items, children: itemsList }), _jsxs("div", { className: cls.switchers, children: [_jsx(ThemeSwitcher, {}), _jsx(LangSwitcher, { short: collapsed, className: cls.lang })] })] }));
});
