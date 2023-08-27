import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ReducersList, useDynamicReducurLoad } from '@/shared/lib/hooks/useDynamicReducerLoad';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Page } from '@/widgets/Page/Page';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer } from '../model/slices/articlePageSlice';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';
import { initArticlesPage } from '../model/services/initArticlesPage';
import { ArticleInfiniteList } from './ArticleInfiniteList/ArticleInfiniteList';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  useDynamicReducurLoad(reducers, false);
  const dispatch = useAppDispatch();

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
      <ArticleInfiniteList className={cls.list} />
    </Page>
  );
};

export default memo(ArticlesPage);
