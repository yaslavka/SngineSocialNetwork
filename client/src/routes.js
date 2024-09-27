import routesLik from './constants/routes.constants';
import LoginPages from './Pages/Public/LoginPage';
import RegisterPage from './Pages/Public/RegisterPage';
import StartedPage from './Pages/Private/StartedPage';
import FeedPage from './Pages/Private/FeedPage';
import UserProfile from './Pages/Private/UserProfile';
export const publicRouteConfig = [
  {
    id: 0,
    path: routesLik.root,
    component: LoginPages,
    exact: true,
  },
  {
    id: 2,
    path: routesLik.register,
    component: RegisterPage,
    exact: true,
  },
];

export const privateRouteConfig = [
  {
    id: 0,
    path: routesLik.feed,
    component: FeedPage,
    exact: true,
  },
  {
    id: 1,
    path: routesLik.profile,
    component: UserProfile,
    exact: true,
  },
];
export const privateStartRouteConfig = [
  {
    id: 0,
    path: routesLik.started,
    component: StartedPage,
    exact: true,
  },
];
