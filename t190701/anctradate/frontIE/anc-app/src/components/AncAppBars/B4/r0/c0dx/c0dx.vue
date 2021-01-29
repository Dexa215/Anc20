<template>
  <!-- MACRO COLONNA DESTRA ************************************************************************************************************ -->
  <v-col :class="rcD">
    <r1></r1>
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
    rcD () {
      return this.$store.getters.rcD;
    }
  }
};
</script>
<style media="screen"></style>
