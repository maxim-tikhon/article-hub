import { combineReducers } from '@reduxjs/toolkit';
import { articleRecommendationsReducer, } from './articleRecommendationsSlice';
import { articleCommentsReducer } from './articleCommentsSlice';
export var articleDetailsPageReducer = combineReducers({
    recommendations: articleRecommendationsReducer,
    comments: articleCommentsReducer,
});
