import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { State } from './state';

export function createReduxStore(initialStae?: State) {
  const rootReducers: ReducersMapObject<State> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<State>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialStae,
  });
}
