import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ReducersList, useDynamicReducurLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../model/slice/articleCommentsSlice';
import { getArticleCommentsIsLoading } from '../model/selectors/commentsSelectors';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle';
import { getArticleRecommendations } from '../model/slice/articleRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../model/selectors/recommendationsSelectors';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../model/slice';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  useDynamicReducurLoad(reducers);

  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, className)}>
        {t('Article not found')}
      </div>
    );
  }

  return (
    <Page className={classNames(cls.articleDetailsPage, className)}>
      <VStack gap="16" max>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t('Recommended')}
        />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={cls.recommendations}
          target="_blank"
        />
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t('Comments')}
        />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </VStack>
    </Page>
  );
};

export default memo(ArticleDetailsPage);
