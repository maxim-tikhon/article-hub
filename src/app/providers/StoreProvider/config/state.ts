import {
  ReducersMapObject, AnyAction, CombinedState, Reducer,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { ArticleDetailsState } from 'entities/Article';
import { CounterState } from 'entities/Counter';
import { UserState } from 'entities/User';
import { LoginState } from 'features/AuthByUserName';
import { AddCommentFormState } from 'features/addCommentForm';
import { ArticleDetailsPageState } from 'pages/ArticleDetailsPage';
import { ArticlesPageState } from 'pages/ArticlesPage';
import { ScrollState } from 'features/scrollSave';
import { rtkApi } from 'shared/api/rtkApi';
import { ProfileState } from 'features/editableProfileCard';

export interface State {
  counter: CounterState;
  user: UserState;
  scroll: ScrollState;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async reducers
  loginForm?: LoginState;
  profile?: ProfileState;
  articleDetails?: ArticleDetailsState;
  addCommentForm?: AddCommentFormState;
  articlesPage?: ArticlesPageState;
  articleDetailsPage?: ArticleDetailsPageState;
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
