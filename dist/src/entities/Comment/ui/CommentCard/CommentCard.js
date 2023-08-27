import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
import cls from './CommentCard.module.scss';
export var CommentCard = memo(function (props) {
    var className = props.className, comment = props.comment, isLoading = props.isLoading;
    if (isLoading) {
        return (_jsxs(VStack, { gap: "8", max: true, className: classNames(cls.commentCard, className, cls.loading), children: [_jsxs("div", { className: cls.header, children: [_jsx(Skeleton, { width: 30, height: 30, border: "50%" }), _jsx(Skeleton, { height: 16, width: 100, className: cls.username })] }), _jsx(Skeleton, { className: cls.text, width: "100%", height: 50 })] }));
    }
    if (!comment) {
        return null;
    }
    return (_jsxs(VStack, { gap: "8", max: true, className: classNames(cls.commentCard, className), children: [_jsxs(AppLink, { to: "".concat(RoutePath.profile).concat(comment.user.id), className: cls.header, children: [comment.user.avatar ? _jsx(Avatar, { size: 30, src: comment.user.avatar }) : null, _jsx(Text, { className: cls.username, title: comment.user.username })] }), _jsx(Text, { className: cls.text, text: comment.text })] }));
});
