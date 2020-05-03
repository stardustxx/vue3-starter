const state = {
  storeCounter: 0,
};

const mutations = {
  incrementCounter(state) {
    state.storeCounter++;
  },
};

export const store = {
  state,
  mutations,
};