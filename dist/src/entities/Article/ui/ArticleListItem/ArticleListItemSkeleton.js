import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import classNames from 'classnames';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/consts/articleConsts';
export var ArticleListItemSkeleton = memo(function (props) {
    var className = props.className, view = props.view;
    if (view === ArticleView.LIST) {
        return (_jsx("div", { className: classNames(cls.articleListItem, className, cls[view.toLowerCase()]), children: _jsxs(Card, { className: cls.card, children: [_jsxs("div", { className: cls.header, children: [_jsx(Skeleton, { border: "50%", height: 30, width: 30 }), _jsx(Skeleton, { width: 150, height: 16, className: cls.username }), _jsx(Skeleton, { width: 150, height: 16, className: cls.date })] }), _jsx(Skeleton, { width: 250, height: 24, className: cls.title }), _jsx(Skeleton, { height: 200, className: cls.img }), _jsx("div", { className: cls.footer, children: _jsx(Skeleton, { height: 36, width: 200 }) })] }) }));
    }
    return (_jsx("div", { className: classNames(cls.articleListItem, className, cls[view.toLowerCase()]), children: _jsxs(Card, { className: cls.card, children: [_jsx("div", { className: cls.imageWrapper, children: _jsx(Skeleton, { width: 200, height: 200, className: cls.img }) }), _jsx("div", { className: cls.infoWrapper, children: _jsx(Skeleton, { width: 130, height: 16 }) }), _jsx(Skeleton, { width: 150, height: 16, className: cls.title })] }) }));
});
