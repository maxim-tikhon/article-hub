import {
  CombinedState, Reducer, ReducersMapObject, configureStore,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { scrollReducer } from 'features/scrollSave';
import { State, ThunkExtraArg } from './state';
import { createReducerManager } from './reducerManager';
import { rtkApi } from 'shared/api/rtkApi';

export function createReduxStore(initialStae?: State, asyncReducers?: ReducersMapObject<State>) {
  const rootReducers: ReducersMapObject<State> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scroll: scrollReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<State>>,
    devTools: __IS_DEV__,
    preloadedState: initialStae,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
          extraArgument: extraArg,
      },
    }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
