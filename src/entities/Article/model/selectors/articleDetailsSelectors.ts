import { State } from '@/app/providers/StoreProvider';

export const getArticleDetailsData = (state: State) => state.articleDetails?.data;
export const getArticleDetailsIsLoading = (state: State) => state.articleDetails?.isLoading || false;
export const getArticleDetailsError = (state: State) => state.articleDetails?.error;
