import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import cls from './NotFoundPage.module.scss';
export var NotFoundPage = function (props) {
    var className = props.className;
    var t = useTranslation().t;
    return (_jsx(Page, { className: classNames(cls.notFoundPage, className), children: t('Page not found') }));
};
