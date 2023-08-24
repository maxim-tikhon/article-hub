import {
  createEntityAdapter,
  createSlice,
  configureStore,
  PayloadAction,
} from '@reduxjs/toolkit';
import { State } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleCommentsState } from '../types/articleCommentsState';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: comment => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<State>(
  state => state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const articleCommentsSlice = createSlice({
  name: 'articleComments',
  initialState: commentsAdapter.getInitialState<ArticleCommentsState>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCommentsByArticleId.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (
        state,
        action: PayloadAction<Comment[]>,
      ) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleCommentsReducer } = articleCommentsSlice;
