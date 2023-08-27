import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getUserAuthData } from 'entities/User';
import classNames from 'classnames';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData';
export var EditableProfileCardHeader = memo(function (props) {
    var className = props.className;
    var t = useTranslation('profile').t;
    var authData = useSelector(getUserAuthData);
    var profileData = useSelector(getProfileData);
    var canEdit = (authData === null || authData === void 0 ? void 0 : authData.id) === (profileData === null || profileData === void 0 ? void 0 : profileData.id);
    var readonly = useSelector(getProfileReadonly);
    var dispatch = useAppDispatch();
    var onEdit = useCallback(function () {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    var onCancelEdit = useCallback(function () {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    var onSave = useCallback(function () {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (_jsxs(HStack, { max: true, justify: "between", className: classNames(className), children: [_jsx(Text, { title: t('Profile') }), canEdit && (_jsx("div", { children: readonly
                    ? (_jsx(Button, { theme: ButtonTheme.OUTLINE, onClick: onEdit, "data-testid": "EditableProfileCardHeader.EditButton", children: t('Edit') }))
                    : (_jsxs(HStack, { gap: "8", children: [_jsx(Button, { theme: ButtonTheme.OUTLINE_RED, onClick: onCancelEdit, "data-testid": "EditableProfileCardHeader.CancelButton", children: t('Cancel') }), _jsx(Button, { theme: ButtonTheme.OUTLINE, onClick: onSave, "data-testid": "EditableProfileCardHeader.SaveButton", children: t('Save') })] })) }))] }));
});
