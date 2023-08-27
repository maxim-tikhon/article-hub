import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, memo, useCallback } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchCommentsByArticleId, } from '../../model/services/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/commentsSelectors';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
export var ArticleDetailsComments = memo(function (props) {
    var className = props.className, id = props.id;
    var t = useTranslation().t;
    var comments = useSelector(getArticleComments.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var dispatch = useAppDispatch();
    var onSendComment = useCallback(function (text) {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    useInitialEffect(function () {
        dispatch(fetchCommentsByArticleId(id));
    });
    return (_jsxs(VStack, { gap: "16", max: true, className: classNames(className), children: [_jsx(Text, { size: TextSize.L, title: t('Comments') }), _jsx(Suspense, { fallback: "", children: _jsx(AddCommentForm, { onSendComment: onSendComment }) }), _jsx(CommentList, { isLoading: commentsIsLoading, comments: comments })] }));
});
