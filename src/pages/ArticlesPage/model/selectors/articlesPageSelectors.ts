import { State } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: State) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: State) => state.articlesPage?.error;
export const getArticlesPageView = (state: State) => state.articlesPage?.view || ArticleView.GRID;
export const getArticlesPageNum = (state: State) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: State) => state.articlesPage?.limit || 12;
export const getArticlesPageHasMore = (state: State) => state.articlesPage?.hasMore;
export const getArticlesPageInitiated = (state: State) => state.articlesPage?.initiated;
