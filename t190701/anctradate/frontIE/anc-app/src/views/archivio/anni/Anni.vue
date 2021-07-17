<template>
  <div class="menuS">
    <anni1xs v-if="currentres == 'xs'"></anni1xs>
    <anni2sm v-if="currentres == 'sm'"></anni2sm>
    <anni3md v-if="currentres == 'md'"></anni3md>
    <anni4lg v-if="currentres == 'lg'"></anni4lg>
    <anni5xl v-if="currentres == 'xl'"></anni5xl>
  </div>
</template>
<script>
import anni1xs from "./1xs/Anni.vue";
import anni2sm from "./2sm/Anni.vue";
import anni3md from "./3md/Anni.vue";
import anni4lg from "./4lg/Anni.vue";
import anni5xl from "./5xl/Anni.vue";

export default {
  name: "archiviohome",
  components: {
    /*menu res*/
    anni1xs,
    anni2sm,
    anni3md,
    anni4lg,
    anni5xl
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
<style media="screen" scoped></style>
