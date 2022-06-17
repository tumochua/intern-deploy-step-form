<template>
  <div>
    <div class="header">
      <div v-for="header in getHeaderData" :key="header.stepPage">
        <div :class="{ active: header.stepPage === active }">
          <div class="header-container">
            <div class="header-step-page">{{ header.stepPage }}</div>
            <div class="header-text">{{ header.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "HeaderVue",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      active: (state) => state.currentPage,
    }),

    ...mapGetters(["dataForm", "handleValidation"]),

    getHeaderData() {
      return this.$store.state.listStep;
    },
    // getHeaderData() {
    //   return this.$store.state.listStep;
    // },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  margin-top: 15px;
  padding: 20px;
  .active {
    border: 2px solid #32683c;
    border-radius: 12px;
  }
  .header-container {
    display: flex;
    padding: 8px 20px;
    border-radius: 12px;
    background-color: #f3f3f3;
    border: 1px solid transparent;
    .header-step-page {
      display: inline-block;
      font-size: 16px;
      width: 24px;
      height: 24px;
      line-height: 24px;
      border-radius: 50%;
      color: #f7f7f7;
      background-color: #969899;
      margin-right: 8px;
    }
    .header-text {
      color: #8f9294;
      align-self: center;
      font-weight: 500;
    }
    .test {
      background: red;
    }
  }
}
</style>
