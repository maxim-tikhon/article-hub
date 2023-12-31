import { State } from '@/app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<State> = {
      counter: { value: 10 },
    };

    expect(getCounter(state as State)).toEqual({ value: 10 });
  });
});
