<template>
  <!--Anc_BC -->
  <v-row class="r0B4 mx-auto my-auto" justify="center" align="start">
    <v-col cols="12">
      <v-row class="r0B4int Anc_BC_Blue" justify="center" align="start">
        <c0sx></c0sx>
        <c0cx></c0cx>
        <c0dx></c0dx>
        <!--
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
        -->
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import c0sx from "@/components/AncAppBars/B4/r0/c0sx/c0sx.vue";
import c0cx from "@/components/AncAppBars/B4/r0/c0cx/c0cx.vue";
import c0dx from "@/components/AncAppBars/B4/r0/c0dx/c0dx.vue";

export default {
  name: "r0",

  components: {
    c0sx,
    c0cx,
    c0dx
  },

  data() {
    return {};
  },

  props: {
    height: {
      type: String
    }
  },

  methods: {},
  updated() {
    /*this.setcolor();*/
  },
  mounted() {
    /*this.setcolor();*/
    this.h = this.height;
    //console.log(this.$vuetify.breakpoint);
  }
};
</script>

<style media="screen"></style>
