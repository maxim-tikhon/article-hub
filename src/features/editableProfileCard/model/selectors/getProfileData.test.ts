import { State } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
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
        data,
      },
    };
    expect(getProfileData(state as State)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<State> = {};
    expect(getProfileData(state as State)).toEqual(undefined);
  });
});
