<template>
  <div class="menuS">
    <agenda1xs v-if="currentres == 'xs'"></agenda1xs>
    <agenda2sm v-if="currentres == 'sm'"></agenda2sm>
    <agenda3md v-if="currentres == 'md'"></agenda3md>
    <agenda4lg v-if="currentres == 'lg'"></agenda4lg>
    <agenda5xl v-if="currentres == 'xl'"></agenda5xl>
  </div>
</template>
<script>
import agenda1xs from "@/views/agenda/Agenda1xs.vue";
import agenda2sm from "@/views/agenda/Agenda2sm.vue";
import agenda3md from "@/views/agenda/Agenda3md.vue";
import agenda4lg from "@/views/agenda/Agenda4lg.vue";
import agenda5xl from "@/views/agenda/Agenda5xl.vue";

export default {
  name: "agenda",

  components: {
    /*menu res*/
    agenda1xs,
    agenda2sm,
    agenda3md,
    agenda4lg,
    agenda5xl
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
.ancagenda {
  background-color: blue !important;
  background-image: url("~@/assets/images/bg/bg7.jpg");
  opacity: 0.3;
}
.SfParallaxagenda {
  /* Sfondo Parallax */
  position: relative;
  z-index: 1;
  opacity: 0.15;
  /* height: 900px; */
  width: 100%;
}
.ancagendar {
  position: absolute;
  z-index: 5;
}
.AncTrasparenzaagenda {
  /* position: absolute;  z-index: 6;  */
  background-color: rgb(3, 44, 3) !important;
  width: 100%;
  opacity: 0.7;
}
.agenda-view {
  position: relative;
  z-index: 1;
}
.agendacard {
  border-radius: 15px;
}
.agendacardtop {
  border-radius: 15px 15px 0px 0px;
}
.agendacardbottom {
  border-radius: 0px 0px 15px 15px;
}
</style>
