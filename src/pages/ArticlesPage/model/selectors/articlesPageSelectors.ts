import { State } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: State) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: State) => state.articlesPage?.error;
export const getArticlesPageView = (state: State) => state.articlesPage?.view || ArticleView.GRID;
