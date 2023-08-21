import { AboutPage } from 'pages/AboutPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    NOT_FOUND = 'not_ound'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // + :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  [AppRoutes.NOT_FOUND]: '*',
};

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
  path: RoutePath[AppRoutes.NOT_FOUND],
  element: <NotFoundPage />,
},
];
