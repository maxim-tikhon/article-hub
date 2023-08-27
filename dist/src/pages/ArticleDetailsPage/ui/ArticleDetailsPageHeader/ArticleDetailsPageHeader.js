import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { getArticleDetailsData } from 'entities/Article';
import { HStack } from 'shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/articleSelectors';
export var ArticleDetailsPageHeader = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var navigate = useNavigate();
    var canEdit = useSelector(getCanEditArticle);
    var article = useSelector(getArticleDetailsData);
    var onBackToList = useCallback(function () {
        navigate(RoutePath.articles);
    }, [navigate]);
    var onEditArticle = useCallback(function () {
        navigate("".concat(RoutePath.article_details).concat(article === null || article === void 0 ? void 0 : article.id, "/edit"));
    }, [article === null || article === void 0 ? void 0 : article.id, navigate]);
    return (_jsxs(HStack, { max: true, justify: "between", className: classNames(className), children: [_jsx(Button, { theme: ButtonTheme.OUTLINE, onClick: onBackToList, children: t('Back to the list') }), canEdit && (_jsx(Button, { theme: ButtonTheme.OUTLINE, onClick: onEditArticle, children: t('Edit') }))] }));
});
