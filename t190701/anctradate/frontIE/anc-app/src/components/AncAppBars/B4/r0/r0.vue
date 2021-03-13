<template>
  <!--Anc_BC -->
  <!--v-row class="r0B4 mx-auto my-auto" justify="center" align="start"-->

  <!--v-row :class="bBcl" justify="center" align="start"-->
  <v-row :class="r0B4" justify="center" align="start">
    <v-col cols="12">
      <v-row :class="r0B4int" justify="center" align="start">
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
  computed: {
    bBcl() {
      /*bBcl = bar BIG class*/
      /*{r0B4small,r0B4Big}*/
      return this.$store.getters.getbarBIGClass;
    },
    r0B4int() {
      return this.$store.getters.getr0B4int;
    },
    r0B4() {
      return this.$store.getters.getr0B4;
    },
    barBIG() {
      return this.$store.getters.getbarBIG;
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

<style media="screen">
.r0B4x {
  position: fixed;
  z-index: 7;
  width: 100%;
  padding-top: 2px;

  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
}
.r0B4small {
  height: 90px;
  background-color: yellowgreen;
  opacity: 0.95;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 1px;
}
.r0B4smallDin {
  height: 90px;
  background-color: yellow;
  transition: height 0.5s, background-color 2s;

  animation-name: bbSMALLan;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.2, 1, 1, 1);
  animation-fill-mode: forwards;
}
.r0B4Big {
  height: 190px;
  /*  height: 120px;*/
  background-color: red;
  /*transition: height 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.5);*/
  /**/
  opacity: 1;
  /*padding-bottom: 0px;*/
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 1px;

  /*  animation-name: bbBIGan;*/
  animation-name: bbBIGan190;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  /*
  animation-delay: -2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;*/
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
.r0B4intx {
  opacity: 0.95;
  position: relative;
  z-index: 7;
  padding-top: 2px;
  padding-bottom: 0px;
  padding-left: 1px;
  padding-right: 1px;
}
.r0B4intsmall {
  height: 85px;
  /*background-color: orange;*/
  border-radius: 42px;
  transition: border-radius 1s;
}
.r0B4intsmallDin {
  height: 85px;
  /*background-color: red;*/
  transition: height 0.8s, background-color 2s, border-radius 1.5s;
}
.r0B4intBig {
  /*height: 114px;*/
  height: 164px;
  /*background-color: yellowgreen;*/
  opacity: 1;
  border-radius: 92px;
  transition: height 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.5), border-radius 0.5s;
}
</style>
