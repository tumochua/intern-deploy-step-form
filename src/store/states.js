const state = {
  currentPage: 1,
  progress: 0,
  listStep: [
    {
      stepPage: 1,
      status: true,
      text: "about you",
      form: [
        {
          model: "",
          name: "name",
          type: "text",
          rule: "required",
        },
        {
          model: "",
          name: "email",
          type: "text",
          rule: "required|email",
        },
      ],
    },
    {
      stepPage: 2,
      status: false,
      text: "about your company",
      form: [
        {
          model: "",
          name: "companyname",
          type: "text",
          rule: "required",
        },
        {
          model: "",
          name: "numberofemployee",
          type: "text",
          rule: "required|numeric",
        },
      ],
    },
    {
      stepPage: 3,
      status: false,
      text: "finishing up",
      form: [
        {
          model: "",
          name: "select option",
          type: "select",
          rule: "required",
        },
        {
          model: "",
          name: "checkbox option",
          type: "checkbox",
          rule: "required",
        },
      ],
    },
  ],
};
export default state;
