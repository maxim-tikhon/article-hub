import { counterReducer } from './model/slice/counterSlice';
import { CounterState } from './model/types/counterState';
import { Counter } from './ui/Counter';

export {
  counterReducer,
  Counter,
};

export type {
  CounterState,
};
