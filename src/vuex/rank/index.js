const state = {
  rankLocal: null,
  rankGlobal: null
};

const getters = {
  rankLocal: (s) => s.rankLocal,
  rankGlobal: (s) => s.rankGlobal,
};

const actions = {
  // TODO: Get ranking of user via stars
  getRanking: async ({commit}, {username, token}) => {
  }
};

const mutations = {
  // setUser: (s, val) => { s.user = val; },
  // setToken: (s, val) => { s.token = val; },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
