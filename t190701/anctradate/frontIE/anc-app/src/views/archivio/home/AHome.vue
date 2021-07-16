<template>
  <div class="menuS">
    <ahome1xs v-if="currentres == 'xs'"></ahome1xs>
    <ahome2sm v-if="currentres == 'sm'"></ahome2sm>
    <ahome3md v-if="currentres == 'md'"></ahome3md>
    <ahome4lg v-if="currentres == 'lg'"></ahome4lg>
    <ahome5xl v-if="currentres == 'xl'"></ahome5xl>
  </div>
</template>
<script>
/*
import home1xs from "@/views/archivio/home/1xs/home.vue";
import home2sm from "@/views/archivio/home/2sm/home.vue";
import home3md from "@/views/archivio/home/3md/home.vue";
import home4lg from "@/views/archivio/home/4lg/home.vue";
import home5xl from "@/views/archivio/home/5xl/home.vue";
*/

import ahome1xs from "./1xs/AHome.vue";
import ahome2sm from "./2sm/AHome.vue";
import ahome3md from "./3md/AHome.vue";
import ahome4lg from "./4lg/AHome.vue";
import ahome5xl from "./5xl/AHome.vue";

export default {
  name: "archiviohome",
  components: {
    /*menu res*/
    ahome1xs,
    ahome2sm,
    ahome3md,
    ahome4lg,
    ahome5xl
  },
  props: {},
  data: () => ({}),

  computed: {
    currentres () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "xs";
        case "sm":
          return "sm";
        case "md":
          return "md";
        case "lg":
          return "lg";
        case "xl":
          return "xl";
      }
    }
  },
  methods: {},
  updated () {
    this.$store.dispatch("setScrolling", true);
  },
  mounted () {
    /*imposta menu non attivo*/
    this.$store.dispatch("setScrolling", true);
  },
  created () { }
};
</script>
<style media="screen" scoped>
.anchome {
  background-color: blue !important;
  background-image: url("~@/assets/images/bg/bg7.jpg");
  opacity: 0.3;
}
.SfParallaxhome {
  /* Sfondo Parallax */
  position: relative;
  z-index: 1;
  opacity: 0.15;
  /* height: 900px; */
  width: 100%;
}
.anchomer {
  position: absolute;
  z-index: 5;
}
.AncTrasparenzahome {
  /* position: absolute;  z-index: 6;  */
  background-color: rgb(3, 44, 3) !important;
  width: 100%;
  opacity: 0.7;
}
.home-view {
  position: relative;
  z-index: 1;
}
.homecard {
  border-radius: 15px;
}
.homecardtop {
  border-radius: 15px 15px 0px 0px;
}
.homecardbottom {
  border-radius: 0px 0px 15px 15px;
}
</style>
