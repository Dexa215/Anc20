{% load l10n %}

<template>
  <div class="SfBase">
    <v-row      class="rT rT_lv rThXS rTbg2 mx-auto" v-show="drawerLeft"></v-row><!--menu/txp-->
    <div        class="r_main_hsUp_XS">spazio Up xs</div>
    <v-parallax class="SfParallax" src="/static/images/bg/bg8.jpg" height="850"></v-parallax>
    <v-row      class="r_main r_main_h_XS mx-auto" justify="start" align="start">

      <v-col cols="2" class="carcol carcolsx"></v-col><!--sx-->
      <v-col cols="8" class="cx_main"><!--cx-->
        <v-card class="card_main Anc_BC_BlueDark">
          <rc3            :langCode="121"       :tn="[{ id: '0' }, { id: '1' }, { id: '2' }, { id: '3' }]"></rc3>
          <rc1Img         :imgtype="'iframe'"   :src="mappa1" :height="550"></rc1Img>
          <rc2pTOP        :langCode="121"       :tn="[{ id: '6' }, { id: '16' }]"></rc2pTOP>
          <rc1pBOTTOMlink :langCode="121"       :tn="[{ id: '10' }]" :link="link2"></rc1pBOTTOMlink>
          <rc1Img         :imgtype="'img'"      :src="img1"   :height="550"></rc1Img>
          <rc1p           :langCode="121"       :tn="[{ id: '7' }]"></rc1p>
          <rc1Img         :imgtype="'iframe'"   :src="mappa2" :height="550" ></rc1Img>
          <rc3pTOP        :langCode="121"       :tn="[{ id: '8' }, { id: '15' }, { id: '9' }]"></rc3pTOP>
          <rc1pBOTTOMlink :langCode="121"       :tn="[{ id: '12' }]" :link="link1"></rc1pBOTTOMlink>
          <rc1Img         :imgtype="'imgSmall'" :src="img3"   :height="250" :width="250"></rc1Img>
          <rc1p           :langCode="121"       :tn="[{ id: '13' }]" ></rc1p>
        </v-card>
        <AncIntestazioneFine></AncIntestazioneFine>
        <div class="r_main_hsDown_XS">spazio Down xs</div>
      </v-col><!--cx-->
      <v-col cols="2" class="carcol carcoldx" ></v-col><!--dx-->

    </v-row>
  </div>
</template>

<script>
  import { apiService } from "@/common/api.service";
  import router from "@/router";

  import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
  import ancClock from "@/components/AncObjects/AncClock.vue";
  /*Titles...*/
  import rc1 from "@/components/AncRow/Text/rc1.vue";
  import rc2 from "@/components/AncRow/Text/rc2.vue";
  import rc3 from "@/components/AncRow/Text/rc3.vue";
  import rc4 from "@/components/AncRow/Text/rc4.vue";
  /*texts*/
  import rc1p from "@/components/AncRow/Text/rc1p.vue";
  /*Immages*/
  import rc1Img from "@/components/AncRow/Text/rc1Img.vue";
  /*Combinded...*/
  import rc1pTOP from "@/components/AncRow/Text/rc1pTOP.vue";
  import rc2pTOP from "@/components/AncRow/Text/rc2pTOP.vue";
  import rc3pTOP from "@/components/AncRow/Text/rc3pTOP.vue";
  import rc1pBOTTOM from "@/components/AncRow/Text/rc1pBOTTOM.vue";
  import rc1pBOTTOMlink from "@/components/AncRow/Text/rc1pBOTTOMlink.vue";
  

export default {
  name: "sedeorari1xs",

  components: {
    AncIntestazioneFine,
    ancClock,
    rc1Img,
    rc1,
    rc1p,
    rc1pTOP,
    rc1pBOTTOM,
    rc1pBOTTOMlink,
    rc2,
    rc2pTOP,
    rc3,
    rc3pTOP,
    rc4
  },

  props: {},

  data() {
    return {
      tn1: [],
      mappa1:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.15881154439!2d8.905701070027497!3d45.71332899343703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478685f126a1ea85%3A0x7c16b78535fb871a!2sVia%20Carlo%20de%20Simoni%2C%201%2C%2021049%20Tradate%20VA!5e0!3m2!1sit!2sit!4v1576285621978!5m2!1sit!2sit",
      mappa2:
        "https://www.google.com/maps/embed?pb=!4v1576284624812!6m8!1m7!1sXkQU4fJD85BZziGDdsNGNw!2m2!1d45.71363123189879!2d8.906257580735!3f290.300251927189!4f2.186880441983959!5f1.1924812503605782",
      img1: "/static/images/Foto/tradatecomune.jpg",
      img2: "/static/images/Foto/xxx.jpg",
      img3: "/static/images/Foto/sopracolletto.jpg",
      link1: "https://www.inps.it/nuovoportaleinps/default.aspx",
      link2: "http://www.comune.tradate.va.it/"
    };
  },

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
    },
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
    }
  },
  created () { },
  updated () {
    console.log("Sede3md oncreate-- > start");
  },
  mounted () { }
};
</script>

<style media="screen" scoped>

/*20201204*/
/*general...*/
.rT_lv          {position: absolute;  z-index: 6;}/*Row semi-Transparent level on MENU */
.SfParallax     {position: absolute;  z-index: 1; opacity: 0.15; width: 100%;}
.r_main         {position: absolute;  z-index: 5; opacity: 1; background-color: transparent;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;}
.cx_main        {opacity: 1;  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;}
.card_main      {opacity: 0.8;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 45px;}

/*responsive...*/
.r_main_h_MD      {height: 600px;}
.r_main_hsUp_MD   {height: 150px;}
.r_main_hsDown_MD {height: 50px;}
/**/
.Anc_BC_BlueDark {background-color: rgb(1, 4, 20);color: blanchedalmond;}

</style>
