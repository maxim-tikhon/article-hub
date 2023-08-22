import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageState extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
}
