import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';
export var ArticleImageBlockComponent = memo(function (props) {
    var className = props.className, block = props.block;
    return (_jsxs("div", { className: classNames(cls.articleImageBlockComponent, className), children: [_jsx("img", { src: block.src, alt: block.title, className: cls.img }), block.title && _jsx(Text, { text: block.title, align: TextAlign.CENTER })] }));
});
