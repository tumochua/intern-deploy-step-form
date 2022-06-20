<template>
  <div>
    <div
      :class="{ progres: progress }"
      :style="{
        width:
          (progress.currentPage / Object.keys(progress).length) * 100 + '%',
      }"
    ></div>
    <!-- <div>{{ progress }}</div> -->
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "ProgressVue",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      progress: (state) => state,
    }),
    ...mapGetters([""]),
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
