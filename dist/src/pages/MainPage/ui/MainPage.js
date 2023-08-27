import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
var MainPage = function () {
    var t = useTranslation().t;
    return (_jsx(Page, { children: t('Main page') }));
};
export default MainPage;
