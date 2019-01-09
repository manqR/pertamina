import HomePage from './components/pages/HomePage';
import Splash from './components/pages/Splash';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import DynamicRoutePage from './components/pages/DynamicRoutePage';
import NotFoundPage from './components/pages/NotFoundPage';
import KerusakanPage from './components/pages/KerusakanPage';
import KerusakanDetail from './components/pages/KerusakanDetailPage';
import KerusakanDetailPage from './components/pages/KerusakanDetailPage';


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
    path: '/kerusakan/',    
    component: KerusakanPage,
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
    path: '/detail/id/:detailId/',
    component: KerusakanDetailPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
