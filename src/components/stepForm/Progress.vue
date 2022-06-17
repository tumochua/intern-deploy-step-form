<template>
  <div
    :class="{ progres: progress }"
    :style="{ width: (progress / 3) * 100 + '%' }"
  ></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProgressVue",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      progress: (state) => state.currentPage,
    }),
  },
};
</script>

<style>
.progres {
  background-color: #437fe8;
  border-radius: 12px;
  transition: width 0.5s ease;
  height: 20px;
}
</style>
