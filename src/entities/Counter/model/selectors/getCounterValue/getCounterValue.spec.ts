import { State } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<State> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as State)).toEqual(10);
  });
});
