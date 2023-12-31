import { Suspense, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { AppRoutesProps } from '@/shared/types/router';

const renderWithWrapper = (route: AppRoutesProps) => {
  const element = (
    <Suspense fallback={<PageLoader />}>
      {route.element}
    </Suspense>
  );

  return (
    <Route
      key={route.path}
      path={route.path}
      element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
    />
  );
};

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(renderWithWrapper)}
  </Routes>
);

export default memo(AppRouter);
