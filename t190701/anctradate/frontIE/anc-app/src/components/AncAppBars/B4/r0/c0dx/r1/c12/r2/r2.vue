<template>
  <v-row
    id="r0c0dxr1c1-12r2"
    class="mx-auto my-auto"
    justify="center"
    align="center"
  >
    <v-btn
      v-show="!languagesShow && drawerLeft"
      class="mx-3"
      icon
      @click="gotoR('/')"
    >
      <v-icon
        class="mx-3 IconLang"
        large
        dark
      >mdi-bank</v-icon>
    </v-btn>

    <!-- Language btn ...
        
    <!-- Language... -->
    <v-expand-x-transition>
      <v-btn
        class="mx-1"
        icon
        v-show="!drawerLeft && !languagesShow"
        fab
        rounded
        style="background-color: transparent"
        @click="SDL"
      >
        <v-img
          class="mx-1 IconLang"
          large
          dark
          :src="lang.icona"
        ></v-img>
      </v-btn>
    </v-expand-x-transition>
    <!-- Language... -->
  </v-row>
</template>
<script>
export default {
  name: "r2",
  components: {},
  computed: {
    lang () {
      return this.$store.getters.getCurrentLanguage;
    },
    languages () {
      return this.$store.getters.getLanguages;
    },
    languagesShow () {
      return this.$store.getters.getLanguagesShow;
    },
    /*  -----------------------------------------------------------------------   */
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
    /*  -----------------------------------------------------------------------   */
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
    /*  -----------------------------------------------------------------------   */
    categorie () {
      return this.$store.getters.categorie;
    },
    C () {
      return this.$store.getters.getC;
    },
    CS () {
      return this.$store.getters.getCS;
    },
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
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* DINAMIC CSS */
    rcS () {
      return this.$store.getters.rcS;
    },
    rcD () {
      return this.$store.getters.rcD;
    },
    rcU () {
      return this.$store.getters.rcU;
    }
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  },
  methods: {
    gotoR (r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    SDL () {
      /*Switch Drawer Language*/
      this.$store.dispatch("switchDrawerLang");
    },
    ScL (val) {
      /*Set Current Language*/
      this.$store.dispatch("setL", val);
    },
    DSCset (state) {
      this.$store.dispatch("DSCset", state);
    },
    setD () {
      this.$store.dispatch("setD");
    },
    setDF () {
      this.$store.dispatch("setDF");
    }
  }
};
</script>
<style media="screen">
#r0c0dxr1c1-12r2 {
  animation-name: c12r2an;
  animation-duration: 3.3s;
  /*background-color: aqua;*/
  height: 100%;
  width: 99%;
  background-color: crimson;
}
@keyframes c12r2an {
  0% {
    transform: translateX(40px);
    height: 100%;
    /*width: 0%;*/
    background-color: rgb(4, 11, 46) !important;
  }

  100% {
    transform: translateX(0px);
    /*width: 100%;*/
    background-color: rgb(19, 21, 36);
    opacity: 0.95;
  }
}
.IconLang {
  height: 48px;
  width: 48px;
  transform: scale(1, 1);
}
.IconLang:hover {
  transform: scale(1.1, 1.1);
}
</style>
