import classNames from 'classnames';
import {
  ProfileCard, ValidateProfileError, fetchProfileData, getProfileReadonly, profileActions, profileReducer,
} from 'entities/Profile';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicReducurLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileValidateErrors } from 'entities/Profile/model/selectors/getProfileValidateError';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  useDynamicReducurLoad(reducers);
  const { t } = useTranslation('profile');

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect region'),
    [ValidateProfileError.NO_DATA]: t('Data is not provided'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Name and last name are required'),
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <div className={classNames(className)}>
      <ProfilePageHeader />
      {validateErrors?.length && validateErrors.map(err => (
        <Text
          key={err}
          theme={TextTheme.ERROR}
          text={validateErrorTranslates[err]}
        />
      ))}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readOnly={readonly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </div>
  );
};

export default ProfilePage;
