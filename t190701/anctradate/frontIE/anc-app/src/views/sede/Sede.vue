<template>
  <div class="menuS">
    <!-- tess1xs @vola="vola" v-if="currentres == 'xs'"></tess1xs-->
    <sede1xs v-if="currentres == 'xs'"></sede1xs>
    <sede2sm v-if="currentres == 'sm'"></sede2sm>
    <sede3md v-if="currentres == 'md'"></sede3md>
    <sede4lg v-if="currentres == 'lg'"></sede4lg>
    <sede5xl v-if="currentres == 'xl'"></sede5xl>
  </div>
  <!-- @@@ -->
  <!-- lista[1]>sede sc[0]>ubicazione-->
  <!-- TEXTS:  lang.t[1].lista[1].sc[0].t[0,2,3,4,5,...,N].text -->
</template>
<script>
/*Res Menu*/
import sede1xs from "@/views/sede/Sede1xs.vue";
import sede2sm from "@/views/sede/Sede2sm.vue";
import sede3md from "@/views/sede/Sede3md.vue";
import sede4lg from "@/views/sede/Sede4lg.vue";
import sede5xl from "@/views/sede/Sede5xl.vue";

export default {
  name: "sede",

  components: {
    /*menu res*/
    sede1xs,
    sede2sm,
    sede3md,
    sede4lg,
    sede5xl
  },
  props: {},
  data: () => ({}),
  computed: {
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    lang() {
      return this.$store.getters.getCurrentLanguage;
    },
    languages() {
      return this.$store.getters.getLanguages;
    },
    languagesShow() {
      return this.$store.getters.getLanguagesShow;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    drawer() {
      return this.$store.getters.getDrawer;
    },
    drawerLeft() {
      return this.$store.getters.getDrawerLeft;
    },
    drawerRight() {
      return this.$store.getters.getDrawerRight;
    },
    drawerSottocategoria() {
      return this.$store.getters.getDrawerSottocategoria;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    iconX() {
      return this.$store.getters.getIconX;
    },
    iconO() {
      return this.$store.getters.getIconO;
    },
    iconOdx() {
      return this.$store.getters.getIconOdx;
    },
    iconC() {
      return this.$store.getters.getIconC;
    },
    iconCdx() {
      return this.$store.getters.getIconCdx;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    categorie() {
      return this.$store.getters.categorie;
    },
    C() {
      return this.$store.getters.getC;
    },
    CS() {
      return this.$store.getters.getCS;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    requestUser() {
      return this.$store.getters.requestUser;
    },
    requestUserIsStaff() {
      return this.$store.getters.requestUserIsStaff;
    },
    requestUserIsSuper() {
      return this.$store.getters.requestUserIsSuper;
    },
    requestUserAvatar() {
      return this.$store.getters.requestUserAvatar;
    },
    requestUserBio() {
      return this.$store.getters.requestUserBio;
    },
    requestToken() {
      return this.$store.getters.requestToken;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    rcS() {
      return this.$store.getters.rcS;
    },
    rcD() {
      return this.$store.getters.rcD;
    },
    rcU() {
      return this.$store.getters.rcU;
    },
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    admin() {
      return this.$store.getters.admin;
    },
    admincommands() {
      return this.$store.getters.admincommands;
    },
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
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
  methods: {
    /*2020 06 16*/
    gotoR(r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    v(link) {
      this.$store.dispatch("vola", link);
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
  },
  updated() {},
  mounted() {},
  created() {}
};
</script>
<style media="screen">
.ancSede {
  background-color: blue !important;
  background-image: url("~@/assets/images/bg/bg7.jpg");
  opacity: 0.3;
}
.SfParallaxSede {
  /* Sfondo Parallax */
  position: relative;
  z-index: 1;
  opacity: 0.15;
  /* height: 900px; */
  width: 100%;
}
.ancSeder {
  position: absolute;
  z-index: 5;
}
.AncTrasparenzaSede {
  /* position: absolute;  z-index: 6;  */
  background-color: rgb(3, 44, 3) !important;
  width: 100%;
  opacity: 0.7;
}
.sede-view {
  position: relative;
  z-index: 1;
}
</style>
