<template>
  <div class="menuS">
    <home1xs v-if="currentres == 'xs'"></home1xs>
    <home2sm v-if="currentres == 'sm'"></home2sm>
    <home3md v-if="currentres == 'md'"></home3md>
    <home4lg v-if="currentres == 'lg'"></home4lg>
    <home5xl v-if="currentres == 'xl'"></home5xl>
  </div>
  <!-- @@@ -->
</template>

<script>
import { apiService } from "@/common/api.service";
import router from "@/router";
/* Transitions */

/*Res Menu*/
import home1xs from "@/views/home/Home1xs.vue";
import home2sm from "@/views/home/Home2sm.vue";
import home3md from "@/views/home/Home3md.vue";
import home4lg from "@/views/home/Home4lg.vue";
import home5xl from "@/views/home/Home5xl.vue";

export default {
  name: "homeS",

  components: {
    /*menu res*/
    home1xs,
    home2sm,
    home3md,
    home4lg,
    home5xl,
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
    },
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
    },
  },

  updated() {},

  mounted() {},

  created() {},
};
</script>


<style media="screen">
.anchome {
  background-color: blue !important;
  background-image: url("~@/assets/images/bg/bg7.jpg");
  opacity: 0.3;
}
.SfParallax {
  /* Sfondo Parallax */
  position: relative;
  z-index: 1;
  opacity: 0.15;
  height: 600px;
  width: 100%;
}
.anchomer {
  position: absolute;
  z-index: 5;
}

.AncTrasparenzaHOME {
  /*
  position: absolute;
  z-index: 6; 
  */
  background-color: rgb(44, 3, 12) !important;
  width: 100%;
  opacity: 0.7;
}
.rT_HOME {
  background-color: rgb(44, 3, 12) !important;
  width: 100%;
  opacity: 0.7;
}

.home-view {
  position: relative;
  z-index: 1;
}
.author-name {
  font-weight: bold;
  color: #dc3545;
}
.event-link {
  font-weight: bold;
  color: black;
}
.event-link:hover {
  color: cadetblue !important;
  text-decoration: none;
}
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
.imgop {
  /*opacity: 0.4;*/
}
.bg {
  background-image: url("~@/assets/images/bg/bg8.jpg");
  opacity: 0.3;
  /*
  background-image: url("../assets/images/bg/bg1.jpg");
  background-image: url("~@/assets/images/bg/bg8.jpg");
  */
}
/* 2020 04 22 */
.q {
  height: 50px;
}
.qd2 {
  /*finestra contenuto*/
  position: absolute;
  top: 300px;
  z-index: 4;
  opacity: 1;

  width: 80%;
}
.qd3 {
  position: relative;
  z-index: 3;
  opacity: 1;
  background-color: green;
  width: 100px;
}
.qd4 {
  position: relative;
  z-index: 4;
  opacity: 1;
  background-color: cyan;
  width: 100px;
}
.qdcrhome {
  position: absolute;
  top: 140px;
  z-index: 4;
  opacity: 1;
  width: 100%;
  height: 100%;
  background-color: yellow;
}
.qdcchome {
  position: relative;
  width: 100px;
  height: 100%;
  /* background-color: orange;*/
  background-color: transparent;
}

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
.rmvrow {
  /*inizia row sotto la barra*/
  top: 80px; /*width: 578px; */

  position: relative;
  z-index: 3;
  height: 250px;

  margin-left: 0px;
  margin-right: 0px;

  text-align: center;
  text-justify: center;
  border-radius: 0px 0px 0px 5px;

  /*background-image: url("/static/images/HomePageCarousel/dsc32.jpg");*/

  background-color: green !important;

  /*background-color: transparent !important;*/

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
.ancM4 {
  position: fixed;
  z-index: 1;
  opacity: 0.95;
  padding-top: 20px;
  margin-top: 0px;
  border-radius: 0px 0px 50px 50px;
  height: 600px;
  width: 100%;
  /*width: 368px;*/
  /*background-image: url("/static/images/HomePageCarousel/dsc32.jpg");*/
}
.ancM4r {
  position: relative;
  z-index: 1;
  margin-top: 0px;
  text-align: center;
  text-justify: center;
}
.ancM4l {
  position: relative;
  z-index: 2;
  margin: 0px;
  padding: 0px;

  /*list*/
}
.ancM4l_BC {
  background-color: transparent !important;
}
.McU {
  /* Menu column User...*/
  padding-left: 0px;
  padding-right: 0px;
}
.mr {
  background-color: transparent !important;
}
.caticon {
  transform: scale(1, 1);
}
.caticon:hover {
  transform: scale(1.7, 1.7);
}
.catdescrizione {
  transform: scale(1, 1);
}
.catdescrizione:hover {
  transform: scale(1.5, 1.5);
}
.vlistitem {
  background-color: transparent;
  border-radius: 20px 20px 20px 20px;
}
.vlistitem:hover {
  background-color: transparent;
  border-radius: 20px 20px 20px 20px;
}
.mbtn {
  margin: 1px;
  border-radius: 20px 20px 20px 20px;
  background-color: transparent;
}
.mbtn:hover {
  margin: 1px;
  background-color: mediumturquoise;
}

.carcol {
  position: relative;
  z-index: 5;
  height: 500px;
  width: 100%;
}

/*  colonna sx eventi passati */
.carcolsx {
  background-color: transparent;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 25px 10px 10px 25px;
}

/*  colonna cx clock */
.carcolcx {
  background-color: transparent;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 25px;
}

/*  colonna dx eventi futuri */
.carcoldx {
  background-color: transparent;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px 25px 25px 10px;
}
</style>