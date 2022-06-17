const getters = {
  getDataFroms(state) {
    console.log("check state getter :", state);
    return state.listStep.filter((item) => item.form);
  },
  handleValidation(state) {
    return state.listStep.filter((item, index) => item.form[index + 1]);
  },
};

export default getters;
