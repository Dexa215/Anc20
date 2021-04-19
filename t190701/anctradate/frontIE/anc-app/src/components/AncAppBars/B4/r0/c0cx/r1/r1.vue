<template>
  <v-row
    id="r0c0cxr1"
    class="mx-auto"
    justify="center"
    align="center"
  >
    <c1sx></c1sx>
    <c1cx></c1cx>
    <c1dx></c1dx>

    <v-col
      v-if="barBIG === true"
      class=""
      cols="12"
    >
      <v-row
        id="r0c0cxr1if"
        justify="center"
        align="center"
      >ciao</v-row>
    </v-col>
  </v-row>
</template>
<script>
import c1sx from "@/components/AncAppBars/B4/r0/c0cx/r1/c1sx/c1sx.vue";
import c1cx from "@/components/AncAppBars/B4/r0/c0cx/r1/c1cx/c1cx.vue";
import c1dx from "@/components/AncAppBars/B4/r0/c0cx/r1/c1dx/c1dx.vue";

export default {
  name: "r1",
  components: {
    c1sx,
    c1cx,
    c1dx
  },
  computed: {
    barBIG () {
      return this.$store.getters.getbarBIG;
    }
  }
};
</script>
<style media="screen">
#r0c0cxr1 {
  /*background-color: chartreuse;*/
  height: 75px;
}
#r0c0cxr1if {
  background-color: blanchedalmond;
  height: 76px;
}
</style>
