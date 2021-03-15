<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutUp"
  >
    <v-row
      v-show="categorie[Cs/10-1].sottocategorie.length > 1 && drawerSCM"
      class="scList2 mx-auto"
    >
      <v-col cols="12">
        <!-- chip -->
        <v-chip
          v-for="item in categorie[Cs/10-1].sottocategorie"
          :key="item.n"
          @click="gotoR(item.link)"
          link
          class="ma-1"
          color="indigo"
          text-color="white"
        >
          <v-avatar left>
            <v-icon>{{item.icona}}</v-icon>
          </v-avatar>
          {{ item.descrizione }}
        </v-chip>
        <!-- chip -->
      </v-col>
    </v-row>
  </transition>

  <!-- -------------------------------------------------------------------------------------------------------------------------- -->
</template>
<script>
import router from "@/router";

export default {
  name: "m2smSottocategorieSel",

  props: {
    btnsel: { type: Number }
  },

  computed: {
    drawerSCM() {
      return this.$store.getters.drawerSCMget;
    },
    drawerSottocategoria() {
      return this.$store.getters.getDrawerSottocategoria;
    },
    drawerRight() {
      return this.$store.getters.getDrawerRight;
    },
    categorie() {
      return this.$store.getters.categorie;
    },
    C() {
      return this.$store.getters.getC;
    },
    CS() {
      return this.$store.getters.getCS;
    },
    /*In selezione nel menu...*/
    Cs() {
      return this.$store.getters.getCs;
    },
    CSs() {
      return this.$store.getters.getCSs;
    }
  },
  data() {
    return {};
  },
  methods: {
    /*2020 06 16*/
    gotoR(r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    SDL() {
      /*Switch Drawer Language*/
      this.$store.dispatch("switchDrawerLang");
    },
    ScL(val) {
      /*SET Current Language*/
      this.$store.dispatch("setL", val);
    },
    DSCset(state) {
      /*SC Sotto Categoria*/
      this.$store.dispatch("DSCset", state);
    },
    setD() {
      this.$store.dispatch("setD");
    },
    setDF() {
      this.$store.dispatch("setDF");
    }
  }
};
</script>

<style media="screen" scoped>
.scList2 {
  position: relative;
  z-index: 3;
  /*top: 150px;*/
  left: 0px;
  background-color: rgb(4, 11, 46) !important;
  /*background-color: blue !important;*/
  height: 150px;
  width: 90%;
  margin: 2px;
  border-radius: 25px 25px 25px 25px;
}
</style>





