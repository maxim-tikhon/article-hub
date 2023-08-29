import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AbotuPage = () => {
  const { t } = useTranslation('about');

  return (
    <Page dataTestId="AboutPage">{t('About')}</Page>
  );
};

export default AbotuPage;
