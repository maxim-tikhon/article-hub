import {
  ReducersMapObject, AnyAction, CombinedState, Reducer,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { CounterState } from 'entities/Counter';
import { UserState } from 'entities/User';
import { LoginState } from 'features/AuthByUserName';

export interface State {
  counter: CounterState;
  user: UserState;

  // async reducers
  loginForm?: LoginState;
}

export type StateKey = keyof State;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<State>;
  reduce: (state: State, action: AnyAction) => CombinedState<State>;
  add: (key: StateKey, reducer: Reducer) => void;
  remove: (key: StateKey) => void;
}

export interface ReduxStoreWithManager extends ToolkitStore<State> {
  reducerManager: ReducerManager;
}
