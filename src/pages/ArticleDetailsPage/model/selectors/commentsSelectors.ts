import { State } from '@/app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: State) => state.articleDetailsPage?.comments?.isLoading;
export const getArticleCommentsError = (state: State) => state.articleDetailsPage?.comments?.error;
