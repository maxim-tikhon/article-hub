import { State } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateError';

describe('getProfileValidateErrors', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<State> = {
      profile: {
        validateErrors: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.INCORRECT_AGE,
        ],
      },
    };
    expect(getProfileValidateErrors(state as State)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<State> = {};
    expect(getProfileValidateErrors(state as State)).toEqual(undefined);
  });
});
