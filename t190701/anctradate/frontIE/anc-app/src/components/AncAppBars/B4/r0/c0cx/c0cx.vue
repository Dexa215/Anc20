<template>
  <!-- MACRO COLONNA CENTRALE ************************************************************************************************************ -->
  <v-col
    class="TEST"
    cols="4"
    align="start"
  >
    <!--TODO: ripristinare classe in v-col rcC rcX rcC_BC -->

    <r1></r1>
  </v-col>
</template>
<script>
import r1 from "@/components/AncAppBars/B4/r0/c0cx/r1/r1.vue";

export default {
  name: "c0cx",
  components: {
    r1
  }
};
</script>

<style media="screen">
.TEST {
  /*background-color: blueviolet !important;*/
  height: 100%;
  /*padding: 0px;*/
}
</style>
