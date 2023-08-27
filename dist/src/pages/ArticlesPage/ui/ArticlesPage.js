import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { useDynamicReducurLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer } from '../model/slices/articlePageSlice';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';
import { initArticlesPage } from '../model/services/initArticlesPage';
import { ArticleInfiniteList } from './ArticleInfiniteList/ArticleInfiniteList';
var reducers = {
    articlesPage: articlesPageReducer,
};
var ArticlesPage = function (props) {
    var className = props.className;
    useDynamicReducurLoad(reducers, false);
    var dispatch = useAppDispatch();
    var searchParams = useSearchParams()[0];
    useInitialEffect(function () {
        dispatch(initArticlesPage(searchParams));
    });
    var onLoadNextPart = useCallback(function () {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    return (_jsxs(Page, { className: classNames(cls.articlePage, className), onScrollEnd: onLoadNextPart, children: [_jsx(ArticlesPageFilters, {}), _jsx(ArticleInfiniteList, { className: cls.list })] }));
};
export default memo(ArticlesPage);
