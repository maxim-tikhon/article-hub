import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
export var CommentList = memo(function (props) {
    var className = props.className, comments = props.comments, isLoading = props.isLoading;
    var t = useTranslation().t;
    if (isLoading) {
        return (_jsxs(VStack, { gap: "16", max: true, className: classNames(className), children: [_jsx(CommentCard, { isLoading: true }), _jsx(CommentCard, { isLoading: true }), _jsx(CommentCard, { isLoading: true })] }));
    }
    return (_jsx(VStack, { gap: "16", max: true, className: classNames(className), children: (comments === null || comments === void 0 ? void 0 : comments.length)
            ? comments.map(function (comment) { return (_jsx(CommentCard, { isLoading: isLoading, comment: comment }, comment.id)); })
            : _jsx(Text, { text: t('No comments') }) }));
});
