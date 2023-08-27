import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
var AdminPanelPage = function () {
    var t = useTranslation().t;
    return (_jsx(Page, { children: t('Admin panel') }));
};
export default AdminPanelPage;
