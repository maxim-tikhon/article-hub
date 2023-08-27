import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useDynamicReducurLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../model/slice';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from './ArticleDetailsComments/ArticleDetailsComments';
var reducers = {
    articleDetailsPage: articleDetailsPageReducer,
};
var ArticleDetailsPage = function (props) {
    useDynamicReducurLoad(reducers);
    var className = props.className;
    var t = useTranslation('article-details').t;
    var id = useParams().id;
    if (!id) {
        return (_jsx("div", { className: classNames(cls.articleDetailsPage, className), children: t('Article not found') }));
    }
    return (_jsx(Page, { className: classNames(cls.articleDetailsPage, className), children: _jsxs(VStack, { gap: "16", max: true, children: [_jsx(ArticleDetailsPageHeader, {}), _jsx(ArticleDetails, { id: id }), _jsx(ArticleRecommendationsList, {}), _jsx(ArticleDetailsComments, { id: id })] }) }));
};
export default memo(ArticleDetailsPage);
