import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { State } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleRecommendationsState } from '../types/articleRecommendationsState';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: article => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<State>(
  state => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleRecommendationsSlice = createSlice({
  name: 'articleRecommendations',
  initialState: recommendationsAdapter.getInitialState<ArticleRecommendationsState>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArticleRecommendations.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: articleRecommendationsReducer,
} = articleRecommendationsSlice;
