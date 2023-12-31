import { Suspense, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/commentsSelectors';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <VStack gap="16" max className={classNames(className)}>
      <Text
        size={TextSize.L}
        title={t('Comments')}
      />
      <Suspense fallback="">
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </VStack>
  );
});
