import { State } from 'app/providers/StoreProvider';

// eslint-disable-next-line max-len
export const getArticleRecommendationsIsLoading = (state: State) => state.articleDetailsPage?.recommendations?.isLoading;

export const getArticleRecommendationsError = (state: State) => state.articleDetailsPage?.recommendations?.error;
