<template>
  <div class="menuS">
    <!-- tess1xs @vola="vola" v-if="currentres == 'xs'"></tess1xs-->
    <tess1xs v-if="currentres == 'xs'"></tess1xs>
    <tess2sm v-if="currentres == 'sm'"></tess2sm>
    <tess3md v-if="currentres == 'md'"></tess3md>
    <tess4lg v-if="currentres == 'lg'"></tess4lg>
    <tess5xl v-if="currentres == 'xl'"></tess5xl>
  </div>
  <!-- @@@ -->
  <!-- TEXT: {{lang.t[1].lista[6].t[0,2,3,4,5,...,N].text}}  -->
</template>

<script>
//import { apiService } from "@/common/api.service";
//import router from "@/router";
/* Transitions */
/*Res Menu*/
import tess1xs from "@/views/tesseramento/Tess1xs.vue";
import tess2sm from "@/views/tesseramento/Tess2sm.vue";
import tess3md from "@/views/tesseramento/Tess3md.vue";
import tess4lg from "@/views/tesseramento/Tess4lg.vue";
import tess5xl from "@/views/tesseramento/Tess5xl.vue";

export default {
  name: "tessS",
  components: {
    /*menu res*/
    tess1xs,
    tess2sm,
    tess3md,
    tess4lg,
    tess5xl
  },
  props: {},
  data: () => ({}),
  computed: {
    /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    lang () {
      return this.$store.getters.getCurrentLanguage;
    },
    languages () {
      return;
      this.$store.getters.getLanguages;
    },
    languagesShow () {
      return;
      this.$store.getters.getLanguagesShow;
    } /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
    drawer () {
      return this.$store.getters.getDrawer;
    },
    drawerLeft () {
      return;
      this.$store.getters.getDrawerLeft;
    },
    drawerRight () {
      return;
      this.$store.getters.getDrawerRight;
    },
    drawerSottocategoria () {
      return;
      this.$store.getters.getDrawerSottocategoria;
    } /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
    iconX () {
      return this.$store.getters.getIconX;
    },
    iconO () {
      return;
      this.$store.getters.getIconO;
    },
    iconOdx () {
      return;
      this.$store.getters.getIconOdx;
    },
    iconC () {
      return;
      this.$store.getters.getIconC;
    },
    iconCdx () {
      return;
      this.$store.getters.getIconCdx;
    } /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
    categorie () {
      return this.$store.getters.categorie;
    },
    C () {
      return;
      this.$store.getters.getC;
    },
    CS () {
      return this.$store.getters.getCS;
    } /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
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
      return;
      this.$store.getters.requestUserAvatar;
    },
    requestUserBio () {
      return;
      this.$store.getters.requestUserBio;
    },
    requestToken () {
      return;
      this.$store.getters.requestToken;
    } /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
    rcS () {
      return this.$store.getters.rcS;
    },
    rcD () {
      return;
      this.$store.getters.rcD;
    },
    rcU () {
      return this.$store.getters.rcU;
    },
    /*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    admin () {
      return this.$store.getters.admin;
    },
    admincommands () {
      return;
      this.$store.getters.admincommands;
    } /*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
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
    /*2020 11 06 sostituito con store/dispatch*/

    /* vola(link) { location.href = link; this.snackbar = !this.snackbar; this.dialog = !this.dialog; }, */

    //change href with link

    v (link) {
      this.$store.dispatch("vola", link);
    },
    SDL () {
      /*Switch Drawer Language*/ this.$store.dispatch("switchDrawerLang");
    },
    ScL (val) {
      /*SET Current Language*/ this.$store.dispatch("setL", val);
    },
    DSCset (state) {
      /*SC Sotto Categoria*/ this.$store.dispatch("DSCset", state);
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

<style media="screen">
.ancTess {
  background-color: blue !important;
  background-image: url("~@/assets/images/bg/bg7.jpg");
  opacity: 0.3;
}
.SfParallaxTess {
  /* Sfondo Parallax */
  position: relative;
  z-index: 1;
  opacity: 0.15;
  /* height: 900px; */
  width: 100%;
}
.anctessr {
  position: absolute;
  z-index: 5;
}
.AncTrasparenzaTESS {
  /* position: absolute;  z-index: 6;  */
  background-color: rgb(3, 44, 3) !important;
  width: 100%;
  opacity: 0.7;
}
.tess-view {
  position: relative;
  z-index: 1;
}
/*    in controllo 2020 11 18   */

.menuS {
  position: relative;
  z-index: 4;
  background-color: yellow !important;
  height: 105px;
  /*
  padding-left: 15px;
  padding-right: 15px;
  */
}

.avatar {
  z-index: 5;
  transform: scale(1, 1);
}
.avatar:hover {
  transform: scale(1.1, 1.1);
}

/* MENU SOTTOCATEGORIE */
.menuSC {
  position: relative;
  z-index: 3;
  /*background-color: greenyellow !important;*/
  background-color: transparent !important;
  width: 100%;
}
/*  xs  */
.rmH1 {
  position: relative;
}
.rmH {
  position: relative;
  height: 540px;
}
/*  sm  */
.rmvcolC2 {
  position: relative;
  z-index: 3;
  opacity: 0.9;
  /* background-color: transparent !important; */
  border-radius: 0px 0px 0px 648px;
}
.rmvcolC3 {
  position: relative;
  z-index: 3;
  opacity: 0.9;
  /* background-color: transparent !important; */
  border-radius: 0px 0px 0px 648px;
}
.rmvcolC5 {
  position: relative;
  z-index: 3;
  opacity: 0.9;
  /* background-color: transparent !important; */
  border-radius: 0px 0px 0px 648px;
}
.CcB {
  align-content: flex-start;

  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 5px;
  margin-right: 5px;

  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 5px;
  padding-right: 5px;

  border-radius: 15;
  text-align: start;
  justify-content: start;
}
.CclDESEL {
  /*background-color: khaki;*/
  /*rcC_BC */
  background-color: rgb(4, 11, 46) !important;
  border-radius: 25px 25px 25px 25px;
  width: 100%;
  height: 45px;
  /*transform: scale(1, 1);*/
  /*background-color: khaki;*/
  /*transition-property: width, height;*/
  transition-property: height;
  transition-duration: 0.25s;
}
.CclSEL {
  color: lightcoral;
  border-radius: 25px 25px 25px 25px;

  width: 100%;
  height: 45px;
  /*transform: scale(1, 1);*/
  /*background-color: lightcoral;*/
  background-color: #083b8c;
  /*transform: rotate(0deg);*/
  /*transition-property: width, height;*/
  transition-property: height;
  transition-duration: 0.5s;
}
.CclOPEN {
  color: aqua;
  border-radius: 25px 25px 25px 25px;
  width: 60%;
  height: 160px;
  /*transform: scale(1, 1);*/
  /*background-color: aquamarine;*/
  background-color: #083b8c;
  /*
  transform: rotate(20deg);
  transform: translateX(50px);
  */
  /*transition-property: width, height;*/
  transition-property: height;
  transition-duration: 0.8s;
}
/*
.CclOPEN:active {
  height: 50px;
}
*/
/* 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888  */
.tileM4 {
  margin: 5px;
  border-radius: 4px;
  color: khaki;
  width: 100%;
  height: 40px;
  /*transform: scale(1, 1);*/
}
.tileM4sel {
  margin: 15px;
  border-radius: 4px;
  color: lightcoral;
  width: 100%;
  height: 220px;

  /*transform: scale(1, 1);*/
}
/*
.tileM4:hover {
  background: rgb(160, 108, 11);
  height: 150px;
}*/
/*transform: scale(1, 10);*/
/*background: #1f1401;*/

.tileM4:active {
  /*
  background: #ffbe4d;
  background-color: peru;
  */
}
.d1int {
  height: 85px;
  background-color: green;
}
.d1 {
  height: 80px;
  /*        background-color:   rgb(15, 10, 0);
*/
  padding-top: 20px;
  text-align: center;
  text-justify: center;
}
.dr1 {
  opacity: 0.9;
  margin-left: 20px;
  min-height: 30px;
  max-height: 700px;
  width: 70%;
  /*background-color:   rgb(29, 20, 6);*/
}
.drawercard {
  border-radius: 0px 50px 50px 5px;
}
.x {
  text-align: center;
  text-justify: center;
}

/*2020 11 08  ----------------------------------------------------------------  */
/*icone a sx nei tess*/
.linkicon {
  height: 50px;
  width: 50px;
}
.linkiconsmall {
  max-width: 25px;
  max-height: 25px;
}
.tess2smTitle {
  background-color: transparent;
  color: rgb(4, 25, 44);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px 25px 25px 10px;
}
.tess2smList {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px 25px 25px 10px;
}
/*2020 11 08  ----------------------------------------------------------------  */
.tess2smListGroup {
  background-color: transparent;
  color: wheat;
}
.tessmallTitle {
  color: thistle;
  font-family: Times;
  border-radius: 50px 50px 5px 5px;
}
.tessmallSubTitle {
  font-family: Times;
  border-radius: 5px 5px 50px 50px;
  background-color: rgb(211, 221, 192);
}
</style>
