import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import classNames from 'classnames';
import { useArticleRecommendationsList, } from '../../api/aritcleRecommendationsApi';
export var ArticleRecommendationsList = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var _a = useArticleRecommendationsList(3), isLoading = _a.isLoading, articles = _a.data, error = _a.error;
    if (isLoading || error || !articles) {
        return null;
    }
    return (_jsxs(VStack, { gap: "8", className: classNames(className), children: [_jsx(Text, { size: TextSize.L, title: t('Recommended') }), _jsx(ArticleList, { articles: articles, target: "_blank" })] }));
});
