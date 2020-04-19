const state = () => ({
  storeCounter: 0,
});

export const mutations = {
  incrementCounter(state) {
    state.storeCounter++;
  },
};

export default {
  state,
  mutations,
};