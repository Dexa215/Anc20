<template>
  <v-row
    id="r0c0sxr1c1sxr2"
    class="mx-auto my-auto"
    justify="start"
    align="center"
  >
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated fadeOutUp"
    >
      <!--TODO: RIPRISTINARE V-BTN-->
      <!--@mouseenter="DSCset('true')"-->
      <v-btn
        rounded
        class="ml-3 my-auto"
        v-if="categorie[C / 10 - 1].descrizione"
        @click="gotoR(categorie[C / 10 - 1].link)"
      >
        <a class="mx-1">
          <!--span
                      v-if="categorie[C/10-1].descrizione.length < 15"
                      class="mr-2"
                      style="color:lightblue;"
                      ></span-->

          <span
            class="mx-1"
            style="color:white;"
          >{{
            categorie[C / 10 - 1].descrizione
          }}</span>
          <span
            class="mx-1"
            v-if="CS != 0"
            style="color:white;"
          >\</span>
          <span
            class="mx-1"
            v-if="CS != 0"
            style="color:burlywood;"
          >{{
            categorie[C / 10 - 1].sottocategorie[CS - C - 1].descrizione
          }}</span>
        </a>
      </v-btn>

      <!-- TODO: RIPRISTINARE V-BTN-->
    </transition>
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
  }
};
</script>
<style media="screen">
#r0c0sxr1c1sxr2 {
  /*background-color: aqua;*/
  height: 100%;
  width: 99%;
  background-color: darkgreen;
}
</style>
