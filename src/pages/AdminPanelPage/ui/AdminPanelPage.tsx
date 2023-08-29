import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
  const { t } = useTranslation();

  return (
    <Page dataTestId="AdminPanelPage">
      {t('Admin panel')}
    </Page>
  );
};

export default AdminPanelPage;
