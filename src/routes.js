import Profile from './pages/profile';
import Groups from './pages/groups';

export default [
  {
    path: '/',
    exact: true,
    component: Profile  
  },
  {
    path: '/groups',
    exact: true,
    component: Groups
  }
];
