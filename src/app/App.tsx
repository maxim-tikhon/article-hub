import classNames from 'classnames';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from '@/widgets/Sidebar';
import { Navbar } from '@/widgets/Navbar';
import { getUserInitiated, userActions } from '@/entities/User';
import { AppRouter } from './providers/router';

const App = () => {
  const dispatch = useDispatch();
  const userInitiated = useSelector(getUserInitiated);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app')}>
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
