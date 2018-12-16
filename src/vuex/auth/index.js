import { auth } from '../../firebase/exports';
import firebase from 'firebase';

const state = {
  user: null,
  token: null
};

const getters = {
  user: (s) => s.user,
  token: (s) => s.token
};

const actions = {
  authWithGithub: async ({commit}, username) => {
    const provider = new firebase.auth.GithubAuthProvider();
    const { credential, user } = await firebase.auth().signInWithPopup(provider)
    commit('setUser', user);
    commit('setToken', credential.accessToken);
  },
  signOut: async ({commit}) => {
    await auth.signOut();
    commit('setUser', null);
    commit('setToken', null);
    commit('stars/setStarsTotal', 0, { root: true });
    commit('stars/setTotalForked', 0, { root: true });
    commit('stars/setTotalOwned', 0, { root: true });
    commit('stars/setStarsTotal', 0, { root: true });
    commit('stars/setTopRepos', [], { root: true });
  }
};

const mutations = {
  setUser: (s, val) => { s.user = val; },
  setToken: (s, val) => { s.token = val; },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
