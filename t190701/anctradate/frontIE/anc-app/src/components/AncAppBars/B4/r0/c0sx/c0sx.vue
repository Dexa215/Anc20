<template>
  <!-- MACRO COLONNA SINISTRA ************************************************************************************************************ -->
  <v-col :class="rcS">
    <r1></r1>
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
    rcS () {
      return this.$store.getters.rcS;
    }
  }
};
</script>
<style media="screen"></style>
