import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Tabs } from 'shared/ui/Tabs/Tabs';
import classNames from 'classnames';
import { ArticleType } from '../../model/consts/articleConsts';
export var ArticleTypeTabs = memo(function (props) {
    var className = props.className, value = props.value, onChangeType = props.onChangeType;
    var t = useTranslation().t;
    var typeTabs = useMemo(function () { return [
        {
            value: ArticleType.ALL,
            content: t('All'),
        },
        {
            value: ArticleType.IT,
            content: t('IT'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Economics'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Science'),
        },
    ]; }, [t]);
    var onTabClick = useCallback(function (tab) {
        onChangeType(tab.value);
    }, [onChangeType]);
    return (_jsx(Tabs, { tabs: typeTabs, value: value, onTabClick: onTabClick, className: classNames(className) }));
});
