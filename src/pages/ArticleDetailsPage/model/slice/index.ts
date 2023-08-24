import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageState } from '../types';
import {
  articleRecommendationsReducer,
} from './articleRecommendationsSlice';
import { articleCommentsReducer } from './articleCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageState>({
  recommendations: articleRecommendationsReducer,
  comments: articleCommentsReducer,
});
