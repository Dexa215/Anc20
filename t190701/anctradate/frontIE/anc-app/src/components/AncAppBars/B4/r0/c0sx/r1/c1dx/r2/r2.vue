<template>
  <v-row
    id="r0c0sxr1c1dxr2"
    class="mx-auto my-auto"
    justify="center"
    align="center"
    @click="gotoR(categorie[C / 10 - 1].link)"
  >
    <!--  {{ categorie[C / 10 - 1].link }}  -->
    <!-- categoria corrente -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated fadeOutUp"
    >
      <v-icon
        class="AncIconColor"
        large
        dark
        @mouseenter="DSCset('true')"
        @click="gotoR(categorie[C / 10 - 1].link)"
      >{{ categorie[C / 10 - 1].icona }}</v-icon>
    </transition>
    <!-- categoria corrente -->
  </v-row>
</template>
<script>
import $ from "jquery";
export default {
  name: "r0c0sxr1c1dxr2",
  components: {},
  data () {
    return {
      expand: "true",
      expandSC: "false"
    };
  },

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
      console.log("r0c0sxr1c1dxr2 gotor ", r);

      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    DSCset (state) {
      this.$store.dispatch("DSCset", state);
    }
    /*
    DSCset (state) {
      this.$emit("DSCset", state);
    }*/
    /*css changes*/
    /*  .Anc_BC           ...  rgb(19, 21, 36); */
    /*  .Anc_BC_Blue      ...  rgb(4, 11, 46);  */
    /*  .Anc_BC_BlueDark  ...  rgb(1, 4, 20);   */
  }
};
</script>
<style media="screen">
#r0c0sxr1c1dxr2 {
  /*background-color: aqua;*/
  background-color: darkmagenta;
  height: 100%;
  width: 99%;
}
</style>
