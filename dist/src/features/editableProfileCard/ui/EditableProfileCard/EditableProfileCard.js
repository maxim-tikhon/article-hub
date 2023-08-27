import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/Profile';
import { VStack } from 'shared/ui/Stack';
import { useDynamicReducurLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
import classNames from 'classnames';
import { getProfileForm } from '../../model/selectors/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateError';
import { fetchProfileData } from '../../model/services/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ValidateProfileError } from '../../model/consts/consts';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
var reducers = {
    profile: profileReducer,
};
export var EditableProfileCard = memo(function (props) {
    var _a;
    useDynamicReducurLoad(reducers);
    var className = props.className, id = props.id;
    var t = useTranslation('profile').t;
    var dispatch = useAppDispatch();
    var formData = useSelector(getProfileForm);
    var isLoading = useSelector(getProfileIsLoading);
    var error = useSelector(getProfileError);
    var readonly = useSelector(getProfileReadonly);
    var validateErrors = useSelector(getProfileValidateErrors);
    var validateErrorTranslates = (_a = {},
        _a[ValidateProfileError.SERVER_ERROR] = t('Server error'),
        _a[ValidateProfileError.INCORRECT_COUNTRY] = t('Incorrect region'),
        _a[ValidateProfileError.NO_DATA] = t('Data is not provided'),
        _a[ValidateProfileError.INCORRECT_USER_DATA] = t('Name and last name are required'),
        _a[ValidateProfileError.INCORRECT_AGE] = t('Incorrect age'),
        _a);
    useInitialEffect(function () {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });
    var onChangeFirstname = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);
    var onChangeLastname = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);
    var onChangeCity = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    var onChangeAge = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);
    var onChangeUsername = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);
    var onChangeAvatar = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);
    var onChangeCurrency = useCallback(function (currency) {
        dispatch(profileActions.updateProfile({ currency: currency }));
    }, [dispatch]);
    var onChangeCountry = useCallback(function (country) {
        dispatch(profileActions.updateProfile({ country: country }));
    }, [dispatch]);
    return (_jsxs(VStack, { gap: "8", max: true, className: classNames(className), children: [_jsx(EditableProfileCardHeader, {}), (validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.length) && validateErrors.map(function (err) { return (_jsx(Text, { theme: TextTheme.ERROR, text: validateErrorTranslates[err], "data-testid": "EditableProfileCard.Error" }, err)); }), _jsx(ProfileCard, { data: formData, isLoading: isLoading, error: error, readOnly: readonly, onChangeFirstname: onChangeFirstname, onChangeLastname: onChangeLastname, onChangeAge: onChangeAge, onChangeCity: onChangeCity, onChangeUsername: onChangeUsername, onChangeAvatar: onChangeAvatar, onChangeCurrency: onChangeCurrency, onChangeCountry: onChangeCountry })] }));
});
