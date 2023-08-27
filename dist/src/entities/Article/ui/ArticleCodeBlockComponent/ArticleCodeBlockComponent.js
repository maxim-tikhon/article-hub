import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';
export var ArticleCodeBlockComponent = memo(function (props) {
    var className = props.className, block = props.block;
    return (_jsx("div", { className: classNames(cls.articleCodeBlockComponent, className), children: _jsx(Code, { text: block.code }) }));
});
