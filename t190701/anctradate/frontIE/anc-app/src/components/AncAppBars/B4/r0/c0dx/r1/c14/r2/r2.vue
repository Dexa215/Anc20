<template>
  <v-row
    id="r0c0dxr1c1-14r2"
    class="mx-auto my-auto"
    justify="center"
    align="center"
  >
    <!-- BUTTON MENU on-off ... -->
    <v-btn icon>
      <a>LG</a>
    </v-btn>
    <v-btn
      icon
      v-model="iconX"
      @click.stop="setD"
    >
      <v-icon
        v-if="drawerLeft"
        large
      >{{ iconO }}</v-icon>
      <v-icon
        v-else
        large
      >{{ iconC }}</v-icon>
    </v-btn>
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
    setD () {
      this.$store.dispatch("setD");
    }
  }
};
</script>
<style media="screen">
#r0c0dxr1c1-14r2 {
  /*background-color: aqua;*/
  height: 100%;
  width: 99%;
  background-color: green;
}
</style>
