import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from './auth';
import rank from './rank';
import stars from './stars';

Vue.use(Vuex);

const modules = {
  auth,
  rank,
  stars
};

export default new Vuex.Store({
  modules,
  plugins: [createPersistedState()]
});
