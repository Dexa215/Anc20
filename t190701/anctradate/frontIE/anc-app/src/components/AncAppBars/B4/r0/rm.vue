<template>
  <!--Anc_BC -->
  <!--v-row class="r0B4 mx-auto my-auto" justify="center" align="start"-->

  <!--v-row :class="bBcl" justify="center" align="start"-->
  <v-row
    class="rmB4"
    justify="center"
    align="start"
  > </v-row>
</template>
<script>
import c0sx from "@/components/AncAppBars/B4/r0/c0sx/c0sx.vue";
import c0cx from "@/components/AncAppBars/B4/r0/c0cx/c0cx.vue";
import c0dx from "@/components/AncAppBars/B4/r0/c0dx/c0dx.vue";

export default {
  name: "rm",

  components: {
    c0sx,
    c0cx,
    c0dx
  },

  data () {
    return {};
  },

  props: {
    height: {
      type: String
    }
  },
  computed: {},

  methods: {},
  updated () {
    /*this.setcolor();*/
  },
  mounted () {
    /*this.setcolor();*/
    this.h = this.height;
    //console.log(this.$vuetify.breakpoint);
  }
};
</script>

<style media="screen">
.rmB4 {
  position: fixed;
  z-index: 7;
  background-color: aquamarine;
  height: 200px;
  width: 100%;
  padding-top: 2px;

  margin-top: 400px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
}
</style>
