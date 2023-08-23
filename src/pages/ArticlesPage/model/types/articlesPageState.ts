import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageState extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;
    initiated: boolean;
}
