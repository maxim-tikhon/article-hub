import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';
export var ArticleTextBlockComponent = memo(function (props) {
    var className = props.className, block = props.block;
    return (_jsxs("div", { className: classNames(cls.articleTextBlockComponent, {}, [className]), children: [block.title && _jsx(Text, { title: block.title, className: cls.title }), block.paragraphs.map(function (paragraph) { return (_jsx(Text, { text: paragraph, className: cls.paragraph }, paragraph)); })] }));
});
