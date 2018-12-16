import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
import stars from './stars';

Vue.use(Vuex);

const modules = {
  stars
};

export default new Vuex.Store({
  modules,
  // plugins: [createPersistedState()]
});
