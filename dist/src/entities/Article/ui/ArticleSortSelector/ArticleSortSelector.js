import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Select } from 'shared/ui/Select/Select';
import classNames from 'classnames';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '../../model/consts/articleConsts';
export var ArticleSortSelector = memo(function (props) {
    var className = props.className, onChangeOrder = props.onChangeOrder, onChangeSort = props.onChangeSort, order = props.order, sort = props.sort;
    var t = useTranslation().t;
    var orderOptions = useMemo(function () { return [
        {
            value: 'asc',
            content: t('ascending'),
        },
        {
            value: 'desc',
            content: t('descending'),
        },
    ]; }, [t]);
    var sortFieldOptions = useMemo(function () { return [
        {
            value: ArticleSortField.CREATED,
            content: t('date created'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views'),
        },
    ]; }, [t]);
    return (_jsxs("div", { className: classNames(cls.articleSortSelector, className), children: [_jsx(Select, { options: sortFieldOptions, label: t('Sort by'), value: sort, onChange: onChangeSort }), _jsx(Select, { options: orderOptions, label: t('by'), value: order, onChange: onChangeOrder, className: cls.order })] }));
});
