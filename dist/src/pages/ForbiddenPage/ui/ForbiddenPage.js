import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
var ForbiddenPage = function () {
    var t = useTranslation().t;
    return (_jsx(Page, { children: t('You don\'t have permissions to the page') }));
};
export default ForbiddenPage;
