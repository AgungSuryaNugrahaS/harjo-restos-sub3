import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';

export default {
  '/': Home,
  '/detail/:id': Detail,
  '/favorites': Favorite,
};
