import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/fav': Favorite,
};

export default routes;
