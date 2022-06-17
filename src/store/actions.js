const actions = {
  backStep({ commit }) {
    commit("backStep");
  },
  endStep({ commit }) {
    commit("endStep");
  },
  reset({ commit }) {
    commit("reset");
  },
};

export default actions;
