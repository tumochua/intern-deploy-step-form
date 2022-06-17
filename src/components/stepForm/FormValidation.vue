<template>
  <div class="body-form">
    <Form @submit="onSubmit">
      <keep-alive>
        <div v-if="currentPage === 1" class="step">
          <div>
            <div class="title">Full Name</div>
            <Field
              name="name"
              type="text"
              v-model="step.name"
              :rules="isRequiredName"
              class="form-control"
              :class="{ isValidation: step.errorForm }"
            />

            <p class="error-form">
              <ErrorMessage name="name" />
            </p>
          </div>
          <div>
            <div class="title">Your Email</div>
            <Field
              name="email"
              type="email"
              v-model="step.email"
              :rules="validateEmail"
              class="form-control"
              :class="{ isValidation: step.errorForm }"
            />
            <p class="error-form"><ErrorMessage name="email" /></p>
          </div>
          <div>
            <button
              v-if="currentPage === 2"
              @click="handleStepEnd"
              class="btn-previous"
            >
              PREVIOUS
            </button>

            <button @click="handleStepBack(step)" class="btn-next">NEXT</button>
          </div>
        </div>
      </keep-alive>
      <div v-if="currentPage === 2" class="step">
        <keep-alive>
          <div>
            <div>
              <div class="title">Your Company Name</div>
              <Field
                name="companyname"
                type="email"
                v-model="step.companyname"
                :rules="isRequiredCompanyname"
                class="form-control"
              />
              <p class="error-form">
                <ErrorMessage name="companyname" />
              </p>
            </div>
            <div>
              <div class="title">Number of Employees</div>
              <Field
                name="numberofemployee"
                type="number"
                v-model.number="step.numberofemployee"
                :rules="isRequiredNumbe"
                class="form-control"
              />
              <br />
              <p class="error-form">
                <ErrorMessage name="numberofemployee" />
              </p>
              <br />
              <button @click="handleStepEnd" class="btn-previous">
                PREVIOUS
              </button>

              <button @click="handleStepBack2(step)" class="btn-next">
                NEXT
              </button>
            </div>
          </div>
        </keep-alive>
      </div>
      <div v-if="currentPage === 3">
        <label class="title">From Where did you hear about us</label><br />
        <select
          name="cars"
          id="cars"
          v-model="step.selectOption"
          class="select-step3"
        >
          <option value="volvo" selected>Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <div class="error-form" v-if="step.selectRequid">This is required</div>
        <div>
          <div>
            <label for="terms">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                v-model="step.termsState"
                @change="handleTermsState"
              />
              {{ termsState }}
              <label>I accept terms & conditions</label>
            </label>
            <p
              style="color: red"
              class="for-error terms-error"
              v-if="termsError"
            >
              The field is required!
            </p>
            <div>
              <button @click="hanldeReset">RESET</button>
              <button type="submit" @click="handleSubmit">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  name: "FormValidation",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      step: {
        errorForm: false,

        name: "",
        email: "",

        companyname: "",
        numberofemployee: "",

        selectOption: "",

        selectRequid: false,

        termsState: false,
        validated: false,
      },
    };
  },
  computed: {
    ...mapState({
      currentPage: (state) => state.currentPage,
    }),
    termsError() {
      return this.step.validated && !this.step.termsState;
    },
  },
  methods: {
    onSubmit(values) {
      console.log(JSON.stringify(values, null, 2));
    },

    handleStepBack(value) {
      if (value.name.trim() === "" && value.email.trim() === "") {
        this.step.errorForm = true;
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (value.name.trim() && regex.test(value.email)) {
        this.$store.dispatch("backStep");
        this.step.errorForm = false;
      }
    },
    handleStepBack2(value) {
      const validation =
        isNaN(value.numberofemployee) || value.numberofemployee > 1;

      if (value.companyname.trim() && validation) {
        this.$store.dispatch("backStep");

        return false;
      }
    },
    handleStepEnd() {
      this.$store.dispatch("endStep");
    },

    isRequiredName(value) {
      if (value) {
        this.step.errorForm = false;
      }
      if (value && value.trim()) {
        return true;
      }

      return "This is required name";
    },
    isRequiredCompanyname(value) {
      if (value && value.trim()) {
        return true;
      }
      return "This is required";
    },
    validateEmail(value) {
      if (!value) {
        return "This field is required Email";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      return true;
    },
    isRequiredNumbe(value) {
      if (+value && value.trim()) {
        return true;
      }

      return "This is required";
    },

    handleTermsState() {
      this.step.validated = false;
    },

    handleSubmit() {
      this.step.validated = true;
      if (!this.step.selectOption) {
        this.step.selectRequid = true;
      } else {
        this.step.selectRequid = false;
      }
    },
    hanldeReset() {
      this.$store.dispatch("reset");
      this.step = {};
    },
  },
};
</script>

<style scoped lang="scss">
.body-form {
  margin-top: 20px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  margin-top: 15px;
  padding: 20px;

  .btn-next {
    margin: 0 auto;
    display: inline-block;
    border: unset;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    padding: 8px 24px;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
    transition: box-shadow 0.35s ease-out;
    margin-left: 16px;
    background-color: #1e68cf;
  }
  .title {
    width: 94%;
    text-align: left;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .btn-previous {
    background-color: #72e6b1;
    display: inline-block;
    border: unset;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    padding: 8px 24px;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
    transition: box-shadow 0.35s ease-out;
  }

  .form-control {
    color: #586068;
    font-size: 16px;
    width: 90%;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: 3px solid transparent;
    transition: all 0.2s ease;
  }
  .select-step3 {
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px 12px;
    border-radius: 5px;
    margin: 10px 0px;
  }
  .errform {
    border: 1px solid red;
  }
  .error-form {
    color: red;
  }
  .isValidation {
    border: 1px solid red;
  }
}
</style>
