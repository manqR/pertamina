import HomePage from './components/pages/HomePage';
import Splash from './components/pages/Splash';
import LoginPage from './components/pages/LoginPage';
import FormPage from './components/pages/FormPage';
import RegisterPage from './components/pages/RegisterPage';
import DynamicRoutePage from './components/pages/DynamicRoutePage';
import NotFoundPage from './components/pages/NotFoundPage';
import PanelLeftPage from './components/pages/PanelLeftPage';
import PanelRightPage from './components/pages/PanelRightPage';

export default [
  {
    path: '/',
    component: Splash,
  },
  {
    path: '/home/',
    component: HomePage,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/register/',    
    component: RegisterPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
