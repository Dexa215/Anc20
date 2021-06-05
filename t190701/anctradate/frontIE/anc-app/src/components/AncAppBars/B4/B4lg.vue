<template>
  <!--
    prominent
  
  <v-app-bar
    shrink-on-scroll
    fixed
    fade-img-on-scroll
    scroll-target="#ancContent"
    height="100"
    color="transparent"
    class="aab"
  ></v-app-bar>
  -->
  <r0></r0>
</template>

<!-- BARRA PRINCIPALE -->
<!--
  <v-alert
    v-if="barBIG === true"
    type="success"
  >scrooooooooool {{ alON }}
  </v-alert>
-->
<script>
import r0 from "@/components/AncAppBars/B4/r0/r0.vue";
import r0b4bm from "@/components/AncAppBars/B4/r0/r0b4bm/r0b4bm.vue";

export default {
  name: "b4lg",
  components: { r0, r0b4bm },

  data () {
    return {
      alON: "true",
      langIco: "/static/icons/Nations/italy.png",

      expand: "true",
      expandSC: "false",
      h: "1280px",
      cab: "AncAppBarE cBE-Vis",

      rvt: 10,
      breweries: [],
      isLoading: false,
      tree: [],
      types: [],
      footercolor: "#0052cc",
      hoveravatar: false,
      right: false,
      left: false,
      elevateOnScroll: false,
      hideOnScroll: false,
      fadeOnScroll: false,
      fadeImgOnScroll: false,
      invertedScroll: false,
      collapse: false,
      collapseOnScroll: true,
      shrinkOnScroll: true,
      extended: true,

      AncAppBar_BC: "rgb(19, 21, 36)"
    };
  },
  props: {
    /*
    height: {
      type: String
    }
    */
    /*TODO: SOSTITUIRE CS CS categorie [ PROP CON COMPUTED DA STORE ] */
    /*
    C:{type: Number},
    CS: { type: Number },
    categorie: {type: Array},
    */
    /*TODO: SOSTITUIRE CS CS [ PROP CON COMPUTED DA STORE ] */
    /*TODO: SOSTITUIRE RCS RCD [ PROP CON COMPUTED DA STORE ] */
    /*
    rcS: { type: String },
    rcD: { type: String },
*/
    //colBarEst: { type: String }, //colBarInt: { type: String }, // eslint-disable-next-line vue/no-dupe-keys
    /*
TODO:
test sostituzione con computed su 
TODO:
*/
    /*
    requestUser: { type: String },
    requestUserIsStaff: { type: Boolean },
    requestUserIsSuper: { type: Boolean },
    requestUserAvatar: { type: String },
    requestUserBio: { type: String },
*/
    /*TODO: SOSTITUIRE RCS RCD [ PROP CON COMPUTED DA STORE ] */
    /*TODO: SOSTITUIRE drawer [ PROP CON COMPUTED DA STORE ] */
    /*
    drawer: { type: Boolean },
    drawerLeft: { type: Boolean },
    drawerRight: { type: Boolean },
    drawerSottocategoria: { type: Boolean }
    */
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
    },
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    barBIG () {
      return this.$store.getters.getbarBIG;
    }
  },
  methods: {
    /*
    barS () {
      this.alON = true;
    },
    barB () {
      this.alON = false;
    },
*/
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
  },
  updated () {
    /*this.setcolor();*/
  },
  mounted () {
    /*this.setcolor();*/
    this.h = this.height;
    //console.log(this.$vuetify.breakpoint);
  }
};
</script>

<style media="screen" scoped>
.bar2021 {
  padding: 0px;
}

/*aab anc app bar*/
.aab {
  height: 110px;
  background-color: transparent;

  opacity: 1;
  position: relative;
  z-index: 3;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;

  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>
