import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import cls from './ArticleEditPage.module.scss';
var ArticleEditPage = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var id = useParams().id;
    var isEdit = Boolean(id);
    return (_jsx(Page, { className: classNames(cls.articleEditPage, className), children: isEdit
            ? t('Edit article with ID = ') + id
            : t('Create') }));
});
export default ArticleEditPage;
