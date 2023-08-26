import { State } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<State> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as State)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<State> = {};
    expect(getProfileIsLoading(state as State)).toEqual(undefined);
  });
});
