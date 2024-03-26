import Vue from 'vue';
import Vuex from 'vuex';
import source from './modules/source';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    source,
  },
});
