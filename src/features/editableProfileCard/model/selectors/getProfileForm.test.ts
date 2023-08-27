import { State } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return data', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'ulbi tv',
      first: 'asd',
      city: 'asf',
      currency: Currency.USD,
    };
    const state: DeepPartial<State> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as State)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<State> = {};
    expect(getProfileForm(state as State)).toEqual(undefined);
  });
});
