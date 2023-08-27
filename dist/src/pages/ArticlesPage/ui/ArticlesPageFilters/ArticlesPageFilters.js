import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleSortSelector, ArticleTypeTabs, ArticleViewSelector, } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import classNames from 'classnames';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import cls from './ArticlesPageFilters.module.scss';
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView, } from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../model/slices/articlePageSlice';
export var ArticlesPageFilters = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var view = useSelector(getArticlesPageView);
    var sort = useSelector(getArticlesPageSort);
    var order = useSelector(getArticlesPageOrder);
    var search = useSelector(getArticlesPageSearch);
    var type = useSelector(getArticlesPageType);
    var fetchData = useCallback(function () {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);
    var debouncedFetchData = useDebounce(fetchData, 500);
    var onChangeView = useCallback(function (view) {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);
    var onChangeSort = useCallback(function (newSort) {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    var onChangeOrder = useCallback(function (newOrder) {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    var onChangeSearch = useCallback(function (search) {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);
    var onChangeType = useCallback(function (value) {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    return (_jsxs("div", { className: classNames(cls.articlesPageFilters, className), children: [_jsxs("div", { className: cls.sortWrapper, children: [_jsx(ArticleSortSelector, { order: order, sort: sort, onChangeOrder: onChangeOrder, onChangeSort: onChangeSort }), _jsx(ArticleViewSelector, { view: view, onViewClick: onChangeView })] }), _jsx(Card, { className: cls.search, children: _jsx(Input, { onChange: onChangeSearch, value: search, placeholder: t('Search') }) }), _jsx(ArticleTypeTabs, { value: type, onChangeType: onChangeType, className: cls.tabs })] }));
});
