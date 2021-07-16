<template>
  <div class="menuS">
    <archivioUltimi1xs v-if="currentres == 'xs'"></archivioUltimi1xs>
    <archivioUltimi2sm v-if="currentres == 'sm'"></archivioUltimi2sm>
    <archivioUltimi3md v-if="currentres == 'md'"></archivioUltimi3md>
    <archivioUltimi4lg v-if="currentres == 'lg'"></archivioUltimi4lg>
    <archivioUltimi5xl v-if="currentres == 'xl'"></archivioUltimi5xl>
  </div>
</template>
<script>
import archivioUltimi1xs from "@/views/archivioUltimi/1xs/A1xs.vue";
import archivioUltimi2sm from "@/views/archivioUltimi/2sm/A2sm.vue";
import archivioUltimi3md from "@/views/archivioUltimi/3md/A3md.vue";
import archivioUltimi4lg from "@/views/archivioUltimi/4lg/A4lg.vue";
import archivioUltimi5xl from "@/views/archivioUltimi/5xl/A5xl.vue";

export default {
  name: "archivioUltimi",

  components: {
    /*menu res*/
    archivioUltimi1xs,
    archivioUltimi2sm,
    archivioUltimi3md,
    archivioUltimi4lg,
    archivioUltimi5xl
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
<style media="screen">
.ancarchivioUltimi {
  background-color: blue !important;
  background-image: url("~@/assets/images/bg/bg7.jpg");
  opacity: 0.3;
}
.SfParallaxarchivioUltimi {
  /* Sfondo Parallax */
  position: relative;
  z-index: 1;
  opacity: 0.15;
  /* height: 900px; */
  width: 100%;
}
.ancarchivioUltimir {
  position: absolute;
  z-index: 5;
}
.AncTrasparenzaarchivioUltimi {
  /* position: absolute;  z-index: 6;  */
  background-color: rgb(3, 44, 3) !important;
  width: 100%;
  opacity: 0.7;
}
.archivioUltimi-view {
  position: relative;
  z-index: 1;
}
.archivioUltimicard {
  border-radius: 15px;
}
.archivioUltimicardtop {
  border-radius: 15px 15px 0px 0px;
}
.archivioUltimicardbottom {
  border-radius: 0px 0px 15px 15px;
}
</style>
