import { useTranslation } from 'react-i18next';

const AbotuPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>{t('About')}</div>
  );
};

export default AbotuPage;
