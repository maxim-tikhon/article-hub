import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';
export var PageError = function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var reloadPage = function () {
        window.location.reload();
    };
    return (_jsxs("div", { className: classNames(cls.pageError, className), children: [_jsx("p", { children: t('Something went wrong') }), _jsx(Button, { onClick: reloadPage, children: t('Refresh page') })] }));
};
