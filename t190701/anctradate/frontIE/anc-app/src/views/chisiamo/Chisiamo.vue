<template>
  <div class="menuS">
    <!-- tess1xs @vola="vola" v-if="currentres == 'xs'"></tess1xs-->
    <chisiamo1xs v-if="currentres == 'xs'"></chisiamo1xs>
    <chisiamo2sm v-if="currentres == 'sm'"></chisiamo2sm>
    <chisiamo3md v-if="currentres == 'md'"></chisiamo3md>
    <chisiamo4lg v-if="currentres == 'lg'"></chisiamo4lg>
    <chisiamo5xl v-if="currentres == 'xl'"></chisiamo5xl>
  </div>
  <!-- @@@ -->
  <!-- lista[1]>chisiamo sc[0]>ubicazione-->
  <!-- TEXTS:  lang.t[1].lista[1].sc[0].t[0,2,3,4,5,...,N].text -->
</template>
<script>
/*Res Menu*/
import chisiamo1xs from "@/views/chisiamo/Chisiamo1xs.vue";
import chisiamo2sm from "@/views/chisiamo/Chisiamo2sm.vue";
import chisiamo3md from "@/views/chisiamo/Chisiamo3md.vue";
import chisiamo4lg from "@/views/chisiamo/Chisiamo4lg.vue";
import chisiamo5xl from "@/views/chisiamo/Chisiamo5xl.vue";

export default {
  name: "chisiamo",

  components: {
    /*menu res*/
    chisiamo1xs,
    chisiamo2sm,
    chisiamo3md,
    chisiamo4lg,
    chisiamo5xl
  },
  props: {},
  data: () => ({}),
  computed: {
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    lang () {
      return this.$store.getters.getCurrentLanguage;
    },
    languages () {
      return this.$store.getters.getLanguages;
    },
    languagesShow () {
      return this.$store.getters.getLanguagesShow;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    drawer () {
      return this.$store.getters.getDrawer;
    },
    drawerLeft () {
      return this.$store.getters.getDrawerLeft;
    },
    drawerRight () {
      return this.$store.getters.getDrawerRight;
    },
    drawerSottocategoria () {
      return this.$store.getters.getDrawerSottocategoria;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    iconX () {
      return this.$store.getters.getIconX;
    },
    iconO () {
      return this.$store.getters.getIconO;
    },
    iconOdx () {
      return this.$store.getters.getIconOdx;
    },
    iconC () {
      return this.$store.getters.getIconC;
    },
    iconCdx () {
      return this.$store.getters.getIconCdx;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    categorie () {
      return this.$store.getters.categorie;
    },
    C () {
      return this.$store.getters.getC;
    },
    CS () {
      return this.$store.getters.getCS;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    requestUser () {
      return this.$store.getters.requestUser;
    },
    requestUserIsStaff () {
      return this.$store.getters.requestUserIsStaff;
    },
    requestUserIsSuper () {
      return this.$store.getters.requestUserIsSuper;
    },
    requestUserAvatar () {
      return this.$store.getters.requestUserAvatar;
    },
    requestUserBio () {
      return this.$store.getters.requestUserBio;
    },
    requestToken () {
      return this.$store.getters.requestToken;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    rcS () {
      return this.$store.getters.rcS;
    },
    rcD () {
      return this.$store.getters.rcD;
    },
    rcU () {
      return this.$store.getters.rcU;
    },
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    admin () {
      return this.$store.getters.admin;
    },
    admincommands () {
      return this.$store.getters.admincommands;
    },
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
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
  methods: {
    /*2020 06 16*/
    gotoR (r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    v (link) {
      this.$store.dispatch("vola", link);
    },

    SDL () {
      /*Switch Drawer Language*/
      this.$store.dispatch("switchDrawerLang");
    },
    ScL (val) {
      /*SET Current Language*/
      this.$store.dispatch("setL", val);
    },
    DSCset (state) {
      /*SC Sotto Categoria*/
      this.$store.dispatch("DSCset", state);
    },
    setD () {
      this.$store.dispatch("setD");
    },
    setDF () {
      this.$store.dispatch("setDF");
    }
  },
  updated () { },
  mounted () {
    /*imposta menu non attivo*/
    this.$store.dispatch("setScrolling", true);
  },
  created () { }
};
</script>

<style media="screen" scoped>
/*20201204*/
/*general...*/
.rT_lv {
  position: absolute;
  z-index: 6;
} /*Row semi-Transparent level on MENU */
.SfParallax {
  position: absolute;
  z-index: 1;
  opacity: 0.15;
  width: 100%;
}
.r_main {
  position: absolute;
  z-index: 5;
  opacity: 1;
  background-color: transparent;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.cx_main {
  opacity: 1;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
}
.card_main {
  opacity: 0.8;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 45px;
}
/*general...*/
</style>
