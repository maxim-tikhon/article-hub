import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import classNames from 'classnames';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/consts/articleConsts';
var viewTypes = [
    {
        view: ArticleView.GRID,
        icon: TiledIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];
export var ArticleViewSelector = memo(function (props) {
    var className = props.className, view = props.view, onViewClick = props.onViewClick;
    var click = function (newView) {
        onViewClick === null || onViewClick === void 0 ? void 0 : onViewClick(newView);
    };
    return (_jsx("div", { className: classNames(cls.articleViewSelector, className), children: viewTypes.map(function (viewType) {
            var _a;
            return (_jsx(Button, { theme: ButtonTheme.CLEAR, onClick: function () { return click(viewType.view); }, children: _jsx(Icon, { Svg: viewType.icon, className: classNames((_a = {}, _a[cls.notSelected] = viewType.view !== view, _a)) }) }, viewType.view));
        }) }));
});
