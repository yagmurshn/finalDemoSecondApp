import VueRouter from 'vue-router';
import routes from './routerLoader';

const options = {
  mode: 'history',
  useFrameWrapper: true,
  routes,
};

const router = new VueRouter(options);
export default router;
