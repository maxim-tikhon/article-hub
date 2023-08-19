import { State } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: State) => state.articleComments?.isLoading;
export const getArticleCommentsError = (state: State) => state.articleComments?.error;
