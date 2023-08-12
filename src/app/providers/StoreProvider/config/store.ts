import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { State } from './state';

export function createReduxStore(initialStae?: State) {
  return configureStore<State>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialStae,
  });
}
