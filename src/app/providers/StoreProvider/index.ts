import {
  ReduxStoreWithManager, State, StateKey, ThunkConfig,
} from './config/state';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
  StoreProvider, createReduxStore,
};

export type {
  State,
  AppDispatch,
  ThunkConfig,
  ReduxStoreWithManager,
  StateKey,
};
