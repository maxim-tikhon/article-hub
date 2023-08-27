import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData';
import { ProfileState } from '../types/editableProfileCardState';
import { ValidateProfileError } from '../consts/consts';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD,
};

describe('profileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileState> = { readonly: false };
    expect(profileReducer(
          state as ProfileState,
          profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileState> = { data, form: { username: '' } };

    expect(profileReducer(
          state as ProfileState,
          profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileState> = { form: { username: '123' } };

    expect(profileReducer(
          state as ProfileState,
          profileActions.updateProfile({
            username: '123456',
          }),
    )).toEqual({
      form: { username: '123456' },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileState> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(
          state as ProfileState,
          updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fullfiled', () => {
    const state: DeepPartial<ProfileState> = {
      isLoading: true,
    };

    expect(profileReducer(
          state as ProfileState,
          updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
