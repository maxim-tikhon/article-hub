import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useDynamicReducurLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { getArticleDetailsIsLoading, getArticleDetailsData, getArticleDetailsError, } from '../../model/selectors/articleDetailsSelectors';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
var reducers = {
    articleDetails: articleDetailsReducer,
};
export var ArticleDetails = memo(function (props) {
    useDynamicReducurLoad(reducers);
    var className = props.className, id = props.id;
    var t = useTranslation('article-details').t;
    var dispatch = useAppDispatch();
    var isLoading = useSelector(getArticleDetailsIsLoading);
    var article = useSelector(getArticleDetailsData);
    var error = useSelector(getArticleDetailsError);
    var renderBlock = useCallback(function (block) {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (_jsx(ArticleCodeBlockComponent, { block: block, className: cls.block }, block.id));
            case ArticleBlockType.IMAGE:
                return (_jsx(ArticleImageBlockComponent, { block: block, className: cls.block }, block.id));
            case ArticleBlockType.TEXT:
                return (_jsx(ArticleTextBlockComponent, { className: cls.block, block: block }, block.id));
            default:
                return null;
        }
    }, []);
    useEffect(function () {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);
    var content;
    if (isLoading) {
        content = (_jsxs(_Fragment, { children: [_jsx(Skeleton, { className: cls.avatar, width: 200, height: 200, border: "50%" }), _jsx(Skeleton, { className: cls.title, width: 300, height: 32 }), _jsx(Skeleton, { className: cls.skeleton, width: 600, height: 24 }), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 }), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 })] }));
    }
    else if (error) {
        content = (_jsx(Text, { align: TextAlign.CENTER, title: t('Upload error') }));
    }
    else {
        content = (_jsxs(_Fragment, { children: [_jsx(HStack, { justify: "center", max: true, className: cls.avatarWrapper, children: _jsx(Avatar, { size: 200, src: article === null || article === void 0 ? void 0 : article.img, className: cls.avatar }) }), _jsxs(VStack, { gap: "4", max: true, children: [_jsx(Text, { className: cls.title, title: article === null || article === void 0 ? void 0 : article.title, text: article === null || article === void 0 ? void 0 : article.subtitle, size: TextSize.L }), _jsxs(HStack, { gap: "8", children: [_jsx(Icon, { className: cls.icon, Svg: EyeIcon }), _jsx(Text, { text: String(article === null || article === void 0 ? void 0 : article.views) })] }), _jsxs(HStack, { gap: "8", children: [_jsx(Icon, { className: cls.icon, Svg: CalendarIcon }), _jsx(Text, { text: article === null || article === void 0 ? void 0 : article.createdAt })] })] }), article === null || article === void 0 ? void 0 : article.blocks.map(renderBlock)] }));
    }
    return (_jsx(VStack, { gap: "16", max: true, className: classNames(cls.articleDetails, className), children: content }));
});
