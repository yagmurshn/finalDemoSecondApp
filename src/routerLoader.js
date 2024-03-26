import cloneDeep from 'lodash-es/cloneDeep';
import Routes from './routes.json';
import ErrorComponent from './components/ErrorComponent';

const paths = [];

for (const route of Routes) {
  const processedViews = route.views.reduce((a, view) => {
    // eslint-disable-next-line import/no-dynamic-require
    a[view] = cloneDeep(require(`./components/pages/${route.componentName}${view}.vue`).default);
    return a;
  }, {});
  paths.push({
    path: route.uri,
    name: route.ref,
    alias: `/${route.ref}`,
    meta: {
      ref: route.ref,
      views: processedViews,
      activeView: null,
    },
    // eslint-disable-next-line import/no-dynamic-require
    component: cloneDeep(require(`./components/pages/${route.componentName}.vue`).default),
    timeout: 3000,
    error: ErrorComponent,
  });
}

export default paths;
