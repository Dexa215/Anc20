<template>
  <!-- MACRO COLONNA SINISTRA ************************************************************************************************************ -->
  <v-col :class="rcS">
    <r1></r1>
    <!-- test 2021 03 13 OK
    <r1></r1>
    -->

    <!-- test 2021 03 13 OK
    xxxx
    {{ rcS }}
    -->
  </v-col>
</template>
<script>
import r1 from "@/components/AncAppBars/B4/r0/c0sx/r1/r1.vue";
export default {
  name: "c0sx",
  components: {
    r1
  },
  computed: {
    /* DINAMIC CSS */
    /*  rcS rcX rcLat rcLat_BC_Visitor  */
    bb () {
      var bb = this.$store.getters.getbarBIG;
      if (bb === true) {
        return " si BB ATTIVA !!!! ";
      } else {
        return "BB inattiva...";
      }
    },

    rcS () {
      var rcS = this.$store.getters.rcS;
      var bb = this.$store.getters.getbarBIG;
      if (bb === true) {
        rcS += " BBclass ANCbrd";
      } else {
        rcS += " SSclass ANCbrd";
      }
      return rcS;
      /*
      return this.$store.getters.rcS;
      */
    }
  }
};
</script>
<style media="screen" scoped>
.BBclass {
  height: 98%;
  border-radius: 80px 160px 0px 80px;
  transition: height 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.5), border-radius 0.5s;
}
.SSclass {
  /*background-color: yellowgreen !important;*/
  height: 75px;
  border-radius: 48px 48px 48px 48px;
  transition: height 0.8s, background-color 2s, border-radius 0.5s;
}
</style>
