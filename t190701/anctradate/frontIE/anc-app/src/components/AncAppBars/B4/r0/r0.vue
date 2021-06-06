<template>
  <v-row
    :class="r0B4"
    justify="center"
    align="start"
  >
    <v-row
      :class="r0B4int"
      justify="center"
      align="center"
    >
      <!-- TODO: { 2021 04 20 - funzionante }-->
      <!--
        <c0sx></c0sx>
        <c0cx></c0cx>
        <c0dx> </c0dx>
        -->
      <!-- TODO: { 2021 04 20 - funzionante }-->
      <!-- TODO: { 2021 04 20 - TEST LIVELLI Z-10 / Z-20 }-->

      <r0b4bm></r0b4bm>
      <r0csx></r0csx>
      <r0cdx></r0cdx>
      <r0rcx></r0rcx>

      <!-- TODO: { 2021 04 20 - TEST LIVELLI Z-10 / Z-20 }-->
    </v-row>
  </v-row>
</template>
<script>
/*deprecated...
import c0sx from "@/components/AncAppBars/B4/r0/c0sx/c0sx.vue";
import c0cx from "@/components/AncAppBars/B4/r0/c0cx/c0cx.vue";
import c0dx from "@/components/AncAppBars/B4/r0/c0dx/c0dx.vue";
*/
import r0csx from "@/components/AncAppBars/B4/r0/csx/csx.vue";
import r0cdx from "@/components/AncAppBars/B4/r0/cdx/cdx.vue";
import r0rcx from "@/components/AncAppBars/B4/r0/rcx/rcx.vue";
import r0b4bm from "@/components/AncAppBars/B4/r0/r0b4bm/r0b4bm.vue";

export default {
  name: "r0",

  components: {
    /*deprecated...
    c0sx,
    c0cx,
    c0dx,
    */
    r0csx,
    r0cdx,
    r0rcx,
    r0b4bm
  },
  data () {
    return {};
  },
  props: {
    height: {
      type: String
    }
  },
  computed: {
    bBcl () {
      /*bBcl = bar BIG class*/
      /*{r0B4small,r0B4Big}*/
      return this.$store.getters.getbarBIGClass;
    },

    barBIG () {
      return this.$store.getters.getbarBIG;
    },

    /*test sostituzione 20210423*/
    /*
        r0B4int () {
          return this.$store.getters.getr0B4int;
        },
    
        r0B4 () {
          return this.$store.getters.getr0B4;
        },
    */

    r0B4 () {
      //Anc_BC

      var r0b4 = "r0B4x Anc_BC mx-auto my-auto mE ";
      var bb = this.$store.getters.getbarBIG;
      if (bb === true) {
        r0b4 += "r0B4Big ";
      } else {
        r0b4 += "r0B4small r0B4smallDin ";
      }
      return r0b4;
    },
    r0B4int () {
      var r0b4int = "r0B4intx Anc_BC_Blue mU ";
      var bb = this.$store.getters.getbarBIG;
      if (bb === true) {
        r0b4int += "r0B4intBig ";
      } else {
        r0b4int += "r0B4intsmall r0B4intsmallDin ";
      }
      return r0b4int;
    }

    /*test sostituzione 20210423*/
    /*
    r0B4int () {
      return this.$store.getters.getr0B4int;
    },

    r0B4 () {
      return this.$store.getters.getr0B4;
    },
*/
  },

  methods: {
    updated () {
      /*this.setcolor();*/
    },
    mounted () {
      /*this.setcolor();*/
      this.h = this.height;
      //console.log(this.$vuetify.breakpoint);
    }
  }
};
</script>

<style media="screen">
/*Margin - External Bar*/
.mE {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
}
.r0B4x {
  position: fixed;
  z-index: 7;
  width: 100%;
}
.r0B4small {
  height: 90px;
  background-color: yellowgreen;
  opacity: 0.95;
}
.r0B4smallDin {
  height: 90px;
  background-color: yellow;
  transition: height 0.5s, background-color 2s;
  opacity: 0.95;
  animation-name: bbSMALLan;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.2, 1, 1, 1);
  animation-fill-mode: forwards;
}
.r0B4Big {
  height: 90px;
  background-color: red;
  transition: background-color 2s;
  opacity: 1;
  border-radius: 1px;
  /*  animation-name: bbBIGan;*/
  animation-name: bbBIGan190;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.r0C4 {
  margin: 1px;
}

@keyframes bbSMALLan {
  0% {
    height: 170px;
  }
  20% {
    height: 180px;
  }
  100% {
    height: 90px;
  }
}
@keyframes bbBIGan {
  0% {
    height: 90px;
  }
  20% {
    height: 130px;
  }
  40% {
    height: 120px;
  }
  100% {
    height: 120px;
  }
}
@keyframes bbBIGan190 {
  0% {
    height: 90px;
  }
  20% {
    height: 180px;
  }
  50% {
    height: 170px;
  }
  100% {
    height: 170px;
  }
}

/*margin Up*/

.mU {
  margin-top: 2px;
  margin-left: 10px;
  margin-right: 10px;
}

.r0B4intx {
  opacity: 0.95;
  position: relative;
  z-index: 8;
  padding-top: 2px;
  padding-bottom: 0px;
  padding-left: 1px;
  padding-right: 1px;
}
.r0B4intsmall {
  margin-bottom: 2px;
  height: 85px;
  border-radius: 42px;
  transition: border-radius 1s;
}
.r0B4intsmallDin {
  margin-bottom: 2px;
  height: 85px;
  transition: height 0.8s, background-color 2s, border-radius 1.5s;
}
.r0B4intBig {
  height: 90px;
  opacity: 1;
  border-radius: 92px;
  transition: height 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.5), border-radius 0.5s;
}
</style>
