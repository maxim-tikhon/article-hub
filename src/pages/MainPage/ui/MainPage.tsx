import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('Main page')}
      <RatingCard title="How?" feedbackTitle="Add review" hasFeedback />
    </Page>
  );
};

export default MainPage;
