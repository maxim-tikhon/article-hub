import classNames from 'classnames';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Sidebar } from '@/widgets/Sidebar';
import { Navbar } from '@/widgets/Navbar';
import { getUserInitiated, initAuthData } from '@/entities/User';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { useTheme } from '@/shared/lib/hooks/useTheme';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const userInitiated = useSelector(getUserInitiated);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!userInitiated) {
    return <PageLoader />;
  }

  return (
    <div className={classNames('app', theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className="page-content">
          <Sidebar className="sidebar" />
          {userInitiated && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
