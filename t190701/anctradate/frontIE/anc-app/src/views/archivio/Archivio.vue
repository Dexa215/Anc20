<template>
  <div class="menuS">
    <archivio1xs v-if="currentres == 'xs'"></archivio1xs>
    <archivio2sm v-if="currentres == 'sm'"></archivio2sm>
    <archivio3md v-if="currentres == 'md'"></archivio3md>
    <archivio4lg v-if="currentres == 'lg'"></archivio4lg>
    <archivio5xl v-if="currentres == 'xl'"></archivio5xl>
  </div>
</template>
<script>
/*
import archivio1xs from "@/views/archivio/Archivio1xs.vue";
import archivio2sm from "@/views/archivio/Archivio2sm.vue";
import archivio3md from "@/views/archivio/Archivio3md.vue";
import archivio4lg from "@/views/archivio/4lg/A4lg.vue";
import archivio5xl from "@/views/archivio/Archivio5xl.vue";
*/

export default {
  name: "archivio",

  components: {
    /*menu res*/
    archivio1xs,
    archivio2sm,
    archivio3md,
    archivio4lg,
    archivio5xl
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
.ancarchivio {
  background-color: blue !important;
  background-image: url("~@/assets/images/bg/bg7.jpg");
  opacity: 0.3;
}
.SfParallaxarchivio {
  /* Sfondo Parallax */
  position: relative;
  z-index: 1;
  opacity: 0.15;
  /* height: 900px; */
  width: 100%;
}
.ancarchivior {
  position: absolute;
  z-index: 5;
}
.AncTrasparenzaarchivio {
  /* position: absolute;  z-index: 6;  */
  background-color: rgb(3, 44, 3) !important;
  width: 100%;
  opacity: 0.7;
}
.archivio-view {
  position: relative;
  z-index: 1;
}
.archiviocard {
  border-radius: 15px;
}
.archiviocardtop {
  border-radius: 15px 15px 0px 0px;
}
.archiviocardbottom {
  border-radius: 0px 0px 15px 15px;
}
</style>
