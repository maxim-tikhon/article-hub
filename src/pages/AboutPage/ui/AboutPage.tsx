import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AbotuPage = () => {
  const { t } = useTranslation('about');

  return (
    <Page>{t('About')}</Page>
  );
};

export default AbotuPage;
