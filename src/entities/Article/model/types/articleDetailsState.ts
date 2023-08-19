import { Article } from './article';

export interface ArticleDetailsState {
    isLoading: boolean;
    error?: string;
    data?: Article;
}
