import { State } from '@/app/providers/StoreProvider';

export const getCounter = (state: State) => state.counter;
