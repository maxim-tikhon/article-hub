import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleView } from '../../model/consts/articleConsts';
var getSkeletons = function (view) { return new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map(function (item, index) { return (_jsx(ArticleListItemSkeleton, { className: cls.card, view: view }, index)); }); };
export var ArticleList = memo(function (props) {
    var className = props.className, articles = props.articles, _a = props.view, view = _a === void 0 ? ArticleView.GRID : _a, isLoading = props.isLoading, target = props.target;
    var t = useTranslation().t;
    var renderArticle = function (article) { return (_jsx(ArticleListItem, { article: article, view: view, className: cls.card, target: target }, article.id)); };
    if (!isLoading && !articles.length) {
        return (_jsx("div", { className: classNames(cls.articleList, className, cls[view]), children: _jsx(Text, { size: TextSize.L, title: t('No articles were found') }) }));
    }
    return (_jsxs("div", { className: classNames(cls.articleList, className, cls[view.toLowerCase()]), children: [articles.length > 0
                ? articles.map(renderArticle)
                : null, isLoading && getSkeletons(view)] }));
});
