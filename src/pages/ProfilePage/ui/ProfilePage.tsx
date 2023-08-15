import classNames from 'classnames';
import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { ReducersList, useDynamicReducurLoad } from 'shared/lib/hooks/useDynamicReducerLoad';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  useDynamicReducurLoad(reducers);

  const { t } = useTranslation();

  return (
    <div className={classNames(className)}>
      {t('PROFILE PAGE')}
    </div>
  );
};

export default ProfilePage;
