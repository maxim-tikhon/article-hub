import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ReducersList, useDynamicReducurLoad } from '@/shared/lib/hooks/useDynamicReducerLoad';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../model/slice';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from './ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';
import { Card } from '@/shared/ui/Card';
import { ToggleFeatures } from '@/shared/lib/features';

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

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, className)}>
        {t('Article not found')}
      </div>
    );
  }

  // const articleRatingCard = toggleFeatures({
  //   name: 'isArticleRatingEnabled',
  //   on: () => <ArticleRating articleId={id} />,
  //   off: () => <Card>{t('Rating will come soon')}</Card>,
  // });

  return (
    <Page className={classNames(cls.articleDetailsPage, className)}>
      <VStack gap="16" max>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ToggleFeatures
          feature="isArticleRatingEnabled"
          on={<ArticleRating articleId={id} />}
          off={<Card>{t('Rating will come soon')}</Card>}
        />
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </VStack>
    </Page>
  );
};

export default memo(ArticleDetailsPage);
