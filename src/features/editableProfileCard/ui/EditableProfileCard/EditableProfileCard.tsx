import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/Profile';
import { VStack } from 'shared/ui/Stack';
import { ReducersList, useDynamicReducurLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
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

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  useDynamicReducurLoad(reducers);

  const { className, id } = props;
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();
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

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

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
    <VStack
      gap="8"
      max
      className={classNames(className)}
    >
      <EditableProfileCardHeader />
      {validateErrors?.length && validateErrors.map(err => (
        <Text
          key={err}
          theme={TextTheme.ERROR}
          text={validateErrorTranslates[err]}
          data-testid="EditableProfileCard.Error"
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
    </VStack>
  );
});
