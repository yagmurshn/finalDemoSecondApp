import VueRouter from 'vue-router';
import Vue from 'vue';
import router from './router';
import registerComponents from './componentRegisterer';
import './assets/styles/main.scss';
import store from './store';

document.title = 'NUCAL | UI as a Service';
Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.config.devtools = true;
registerComponents(Vue);

async function initApp() {
  await store.dispatch('source/fetchOnload');
  const vue = new Vue({
    store,
    router,
    render: (h) => h('router-view'),
  });
  vue.$mount('#app');
}

initApp().then(() => {});
