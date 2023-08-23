import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { ReducersList, useDynamicReducurLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer, getArticles } from '../model/slices/articlePageSlice';
import {
  getArticlesPageIsLoading, getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';
import { initArticlesPage } from '../model/services/initArticlesPage';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  useDynamicReducurLoad(reducers, false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <Page className={classNames(cls.articlePage, className)} onScrollEnd={onLoadNextPart}>
      <ArticlesPageFilters />

      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
        className={cls.list}
      />
    </Page>
  );
};

export default memo(ArticlesPage);
