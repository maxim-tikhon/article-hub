import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation();

  return (
    <Page dataTestId="ForbiddenPage">
      {t('You don\'t have permissions to the page')}
    </Page>
  );
};

export default ForbiddenPage;
