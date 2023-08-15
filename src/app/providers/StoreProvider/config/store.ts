import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { State } from './state';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialStae?: State, asyncReducers?: ReducersMapObject<State>) {
  const rootReducers: ReducersMapObject<State> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<State>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialStae,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
