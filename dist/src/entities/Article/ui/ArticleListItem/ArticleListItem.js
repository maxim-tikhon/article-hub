import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
export var ArticleListItem = memo(function (props) {
    var className = props.className, article = props.article, view = props.view, target = props.target;
    var t = useTranslation().t;
    var types = _jsx(Text, { text: article.type.join(', '), className: cls.types });
    var views = (_jsxs(_Fragment, { children: [_jsx(Text, { text: String(article.views), className: cls.views }), _jsx(Icon, { Svg: EyeIcon })] }));
    if (view === ArticleView.LIST) {
        var textBlock = article.blocks.find(function (block) { return block.type === ArticleBlockType.TEXT; });
        return (_jsx("div", { className: classNames(cls.articleListItem, className, cls[view.toLowerCase()]), children: _jsxs(Card, { className: cls.card, children: [_jsxs("div", { className: cls.header, children: [_jsx(Avatar, { size: 30, src: article.user.avatar }), _jsx(Text, { text: article.user.username, className: cls.username }), _jsx(Text, { text: article.createdAt, className: cls.date })] }), _jsx(Text, { title: article.title, className: cls.title }), types, _jsx("img", { src: article.img, className: cls.img, alt: article.title }), textBlock && _jsx(ArticleTextBlockComponent, { block: textBlock, className: cls.textBlock }), _jsxs("div", { className: cls.footer, children: [_jsx(AppLink, { target: target, to: RoutePath.article_details + article.id, children: _jsx(Button, { theme: ButtonTheme.OUTLINE, children: t('Read') }) }), views] })] }) }));
    }
    return (_jsx(AppLink, { target: target, to: RoutePath.article_details + article.id, className: classNames(cls.articleListItem, className, cls[view.toLowerCase()]), children: _jsxs(Card, { className: cls.card, children: [_jsxs("div", { className: cls.imageWrapper, children: [_jsx("img", { alt: article.title, src: article.img, className: cls.img }), _jsx(Text, { text: article.createdAt, className: cls.date })] }), _jsxs("div", { className: cls.infoWrapper, children: [types, views] }), _jsx(Text, { text: article.title, className: cls.title })] }) }));
});
