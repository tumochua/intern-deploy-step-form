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
    state.listStep.map((item) => {
      item.form.map((list) => {
        return (list.model = "");
      });
    });
  },
};

export default mutations;
