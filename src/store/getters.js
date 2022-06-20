const getters = {
  getDataFroms(state) {
    return state.listStep.filter((item) => item.form);
  },
  handleValidation(state) {
    return state.listStep.filter((item, index) => item.form[index + 1]);
  },
  // handleProgress(state) {
  //   Object.keys(state.currentPage).length;
  //   return state;
  // },
};

export default getters;
