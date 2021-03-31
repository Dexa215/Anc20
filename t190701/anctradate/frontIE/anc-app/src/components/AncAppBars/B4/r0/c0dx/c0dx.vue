<template>
  <!-- MACRO COLONNA DESTRA ************************************************************************************************************ -->
  <v-col :class="rcD">
    <r1></r1>
    <!-- test 2021 03 13
    <r1></r1>
    -->
  </v-col>
</template>
<script>
import r1 from "@/components/AncAppBars/B4/r0/c0dx/r1/r1.vue";
export default {
  name: "c0dx",
  components: {
    r1
  },
  computed: {
    /* DINAMIC CSS */
    /* rcD(){return this.$store.getters.rcD;},*/
    rcD () {
      var rcD = this.$store.getters.rcD;
      var bb = this.$store.getters.getbarBIG;
      if (bb === true) {
        rcD += " BBclass ANCbrd";
      } else {
        rcD += " SSclass ANCbrd";
      }
      return rcD;
    }
  }
};
</script>
<style media="screen" scoped>
.BBclass {
  height: 98%;

  border-radius: 160px 80px 80px 0px;
  transition: height 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.5), border-radius 0.5s;
}
.SSclass {
  /*background-color: yellowgreen !important;*/
  height: 75px;
  border-radius: 48px 48px 48px 48px;
  transition: height 0.8s, background-color 2s, border-radius 0.5s;
}
</style>
