<template>
  <!-- @@@ -->
  <!-- Selezione Sottocategoria -->

  <!--  
  <div class="menuSC" v-if="currentres == 'xs'">
    <m1xsSottocategorie></m1xsSottocategorie>
  </div>
  -->
  <div class="menuSC" v-if="currentres == 'xs'">
    <m1xsSottocategorie></m1xsSottocategorie>
  </div>

  <div class="menuSC" v-else-if="currentres == 'sm'">
    <m2smSottocategorie></m2smSottocategorie>
  </div>
  <div class="menuSC" v-else-if="currentres == 'md'">
    <m3mdSottocategorie></m3mdSottocategorie>
  </div>
  <div class="menuSC" v-else-if="currentres == 'lg'">
    <m4lgSottocategorie></m4lgSottocategorie>
  </div>
  <div class="menuSC" v-else-if="currentres == 'xl'">
    <m5xlSottocategorie></m5xlSottocategorie>
  </div>
  <!-- @@@ -->
</template>

<script>
import m1xsSottocategorie from "@/components/AncM/CatSotto/M1xsSottocategorie.vue";
import m2smSottocategorie from "@/components/AncM/CatSotto/M2smSottocategorie.vue";
import m3mdSottocategorie from "@/components/AncM/CatSotto/M3mdSottocategorie.vue";
import m4lgSottocategorie from "@/components/AncM/CatSotto/M4lgSottocategorie.vue";
import m5xlSottocategorie from "@/components/AncM/CatSotto/M5xlSottocategorie.vue";

export default {
  name: "menuSC",

  components: {
    m1xsSottocategorie,
    m2smSottocategorie,
    m3mdSottocategorie,
    m4lgSottocategorie,
    m5xlSottocategorie
  },

  props: {},
  data: () => ({}),
  computed: {
    currentres() {
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
  updated() {},
  mounted() {}
};
</script>

<style media="screen" scoped>
.box {
  position: absolute;
  height: 200px;
  text-align: right;
  padding-left: 70px;
  padding-right: 0px;
  background-color: transparent;
}

.itemSC {
  padding-right: 20px;
}

.listSC {
  height: 30px;
  padding-right: 70px;
}
</style>
