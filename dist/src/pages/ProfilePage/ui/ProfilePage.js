import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/editableProfileCard';
var ProfilePage = function (_a) {
    var className = _a.className;
    var t = useTranslation('profile').t;
    var id = useParams().id;
    if (!id) {
        return _jsx(Text, { text: t('Profile not found') });
    }
    return (_jsx(Page, { className: classNames(className), children: _jsx(VStack, { gap: "16", max: true, children: _jsx(EditableProfileCard, { id: id }) }) }));
};
export default ProfilePage;
