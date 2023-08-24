import { ArticleCommentsState } from './articleCommentsState';
import { ArticleRecommendationsState } from './articleRecommendationsState';

export interface ArticleDetailsPageState {
    comments: ArticleCommentsState;
    recommendations: ArticleRecommendationsState;
}
