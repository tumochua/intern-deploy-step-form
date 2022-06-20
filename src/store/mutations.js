const mutations = {
  backStep(state) {
    if (state.currentPage === 3) {
      return;
    }
    state.currentPage++;
  },
  endStep(state) {
    state.currentPage--;
  },
  reset(state) {
    state.currentPage = state.currentPage = 1;
  },
};

export default mutations;
