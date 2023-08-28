import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AppRoutes, RoutePath } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: AppRoutesProps[] = [{
  path: RoutePath[AppRoutes.MAIN],
  element: <MainPage />,
}, {
  path: RoutePath[AppRoutes.ABOUT],
  element: <AboutPage />,
}, {
  path: `${RoutePath[AppRoutes.PROFILE]}:id`,
  element: <ProfilePage />,
  authOnly: true,
}, {
  path: RoutePath[AppRoutes.ARTICLES],
  element: <ArticlesPage />,
  authOnly: true,
}, {
  path: `${RoutePath[AppRoutes.ARTICLE_DETAILS]}:id`,
  element: <ArticleDetailsPage />,
  authOnly: true,
}, {
  path: `${RoutePath.article_create}`,
  element: <ArticleEditPage />,
  authOnly: true,
}, {
  path: `${RoutePath.article_edit}`,
  element: <ArticleEditPage />,
  authOnly: true,
}, {
  path: `${RoutePath.admin_panel}`,
  element: <AdminPanelPage />,
  authOnly: true,
  roles: [UserRole.MANAGER, UserRole.ADMIN],
}, {
  path: `${RoutePath.forbidden}`,
  element: <ForbiddenPage />,
}, {
  path: RoutePath[AppRoutes.NOT_FOUND],
  element: <NotFoundPage />,
},
];
