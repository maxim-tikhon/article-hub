import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { getArticles } from '../../model/slices/articlePageSlice';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView, } from '../../model/selectors/articlesPageSelectors';
export var ArticleInfiniteList = memo(function (props) {
    var className = props.className;
    var articles = useSelector(getArticles.selectAll);
    var isLoading = useSelector(getArticlesPageIsLoading);
    var view = useSelector(getArticlesPageView);
    var error = useSelector(getArticlesPageError);
    var t = useTranslation().t;
    if (error) {
        return _jsx(Text, { text: t('Upload error') });
    }
    return (_jsx(ArticleList, { isLoading: isLoading, view: view, articles: articles, className: className }));
});
