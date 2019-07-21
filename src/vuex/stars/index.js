import { getStars } from '../../axios';
import { ref } from '../../firebase';

const state = {
  starsTotal: 0,
  totalForked: 0,
  totalOwned: 0,
  topRepos: []
};

const getters = {
  starsTotal: (s) => s.starsTotal,
  topRepos: (s) => s.topRepos,
  totalForked: (s) => s.totalForked,
  totalOwned: (s) => s.totalOwned,
};

const actions = {
  getStars: async ({commit}, {username, token}) => {
    const repos = await getStars(username, token);
    const totalStars = repos.map(item => item.stargazers_count).reduce((a, b) => a + b);
    const topRepos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    const totalForked = repos.filter(item => item.fork).length;
    const totalOwned = repos.filter(item => !item.fork).length;
    commit('setStarsTotal', totalStars);
    commit('setTotalForked', totalForked);
    commit('setTotalOwned', totalOwned);
    commit('setTopRepos', topRepos);
    await ref.child(username)
      .child('total-stars')
      .set(totalStars);
    await ref.child(username)
      .child('total-forked')
      .set(totalForked);
  }
};

const mutations = {
  setStarsTotal: (s, val) => { s.starsTotal = val; },
  setTotalForked: (s, val) => { s.totalForked = val; },
  setTotalOwned: (s, val) => { s.totalOwned = val; },
  setTopRepos: (s, val) => { s.topRepos = val; },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
