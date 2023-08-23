import { StoryFn } from '@storybook/react';
import { State, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/authByUserName/model/slice/loginSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { articleCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleCommentsSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { ReducersList } from 'shared/lib/hooks/useDynamicReducerLoad';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleComments: articleCommentsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
};

export const StoreDecorator = (
  state: DeepPartial<State>,
  asyncReducers?: ReducersList,
) => (Story: StoryFn) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
