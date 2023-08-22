import {
  ReducersMapObject, AnyAction, CombinedState, Reducer,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { ArticleDetailsState } from 'entities/Article';
import { CounterState } from 'entities/Counter';
import { ProfileState } from 'entities/Profile';
import { UserState } from 'entities/User';
import { LoginState } from 'features/AuthByUserName';
import { AddCommentFormState } from 'features/addCommentForm';
import { ArticleCommentsState } from 'pages/ArticleDetailsPage';
import { ArticlesPageState } from 'pages/ArticlesPage';

export interface State {
  counter: CounterState;
  user: UserState;

  // async reducers
  loginForm?: LoginState;
  profile?: ProfileState;
  articleDetails?: ArticleDetailsState;
  articleComments?: ArticleCommentsState;
  addCommentForm?: AddCommentFormState;
  articlesPage?: ArticlesPageState;
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

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: State;
}
