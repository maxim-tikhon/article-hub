import { memo, useCallback } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
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
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </VStack>
  );
});