import Profile from './components/profile';
import Groups from './components/groups';

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
