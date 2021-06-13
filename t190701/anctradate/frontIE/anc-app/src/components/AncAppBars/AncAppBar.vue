<template>
  <!--div class="aAb" @mouseover="setDF()" @mouseenter="setbarBIG('true')"-->
  <!--test 2021 03 10-->
  <div class="aAb">
    <!--
    @mouseover="setDF()"
    @mouseenter="setSc(false)"
    -->

    <!--@mouseleave="setbarBIG('false')"-->

    <!-- test ok 2021 01 06 -->
    <!-- @@@ -->
    <b1xs
      v-if="currentres == 'xs'"
      :height="hsm"
    ></b1xs>
    <b2sm
      v-else-if="currentres == 'sm'"
      :height="hsm"
    ></b2sm>
    <b3md
      v-else-if="currentres == 'md'"
      :height="hlg"
      @mouseover="setDF()"
    ></b3md>

    <!-- IN TEST -->
    <b4lg v-else-if="currentres == 'lg'"></b4lg>
    <!-- IN TEST -->

    <b5xl
      v-else-if="currentres == 'xl'"
      :height="hlg"
      @mouseover="setDF()"
    ></b5xl>

    <!-- INFO -- TEST 2020.04.20 -- *********************************************** -->

    <!-- TODO: computed su store <ancNews :C="C" :CS="CS" :categorie="categorie"></ancNews>-->

    <!-- 2020 07 15 -- TODO: RIPRISTINARE SE TEST NG-->
    <!--
    <menuS></menuS>
    <menuSC class="Mx1"></menuSC>
    <ancNews></ancNews>
    -->
    <!-- 2020 07 15 -- TODO: RIPRISTINARE SE TEST NG-->

    <!-- menu Sottocategorie 
      :C="C"
      :CS="CS"
      :categorie="categorie"
    -- ******************************************************************-->

    <!--test 2021 02 20
    <transition name="dexo3"
      ><div id="divtest2021if" v-if="barBIG"></div>
    </transition>

    <transition name="dexo3"
      ><div id="divtest2021else" v-if="!barBIG"></div
    ></transition>
    -->
  </div>
  <!-- @@@ -->
</template>

<script>
/*import { apiService } from "@/common/api.service";
import router from "@/router";
*/
/*import ancNews from "@/components/AncNews/AncNews.vue";*/
//AncAppBars...
import b1xs from "@/components/AncAppBars/B1xs.vue";
import b2sm from "@/components/AncAppBars/B2sm.vue";
import b3md from "@/components/AncAppBars/B3md.vue";
//import b4lg from "@/components/AncAppBars/B4lg.vue";
import b5xl from "@/components/AncAppBars/B5xl.vue";
// menuS

//2021

//<!-- IN TEST -->
import b4lg from "@/components/AncAppBars/B4/B4lg.vue";
//<!-- IN TEST -->

import menuS from "@/components/AncM/MenuS/MenuS.vue";
import menuSC from "@/components/AncM/CatSotto/MenuSottoCategorie.vue";

import u4lg from "@/components/AncM/User/U4lg.vue";
import m4lg from "@/components/AncM/Cat/M4lg.vue";

import m4lgSottocategorie from "@/components/AncM/CatSotto/M4lgSottocategorie.vue";

import m4lgAdmin from "@/components/AncM/Admin/M4lgAdmin.vue";

import $ from "jquery";

export default {
  name: "ancAppBar",
  components: {
    b1xs,
    b2sm,
    b3md,
    b4lg,
    b5xl
    /*
    menuS,
    menuSC,
    u4lg,
    m4lg,
    m4lgSottocategorie,
    m4lgAdmin,
    ancNews
    */
  },
  props: {
    iconX: { type: String }
    /*  2020 04 26 test sostituzione con computed su $store - TEST OK /*
    requestUser: { type: String },
    requestUserIsStaff: { type: Boolean },
    requestUserIsSuper: { type: Boolean },
    requestUserAvatar: { type: String },
    requestUserBio: { type: String },
    */

    /*TODO: 2020 05 10 test sostituzione con computed su 
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array },
    TODO:*/
    /*
    drawer: { type: Boolean },
    drawerLeft: { type: Boolean },
    drawerRight: { type: Boolean },
    drawerSottocategoria: { type: Boolean }
*/
  },
  data: () => ({
    rgb2: "#241518",
    rgb3: "",
    hsm: "84px",
    hlg: "84px",

    /*TODO: DA RI-ESCLUDERE PER ATTIVARE CON COMPUTED E STORE*/

    //rcU: "rcS rcX rcLat rcLat_BC_Visitor",
    //rcLat_BC: "",

    /*
    rcS: "rcS rcX rcLat rcLat_BC_Visitor",
    rcD: "rcD rcX rcLat rcLat_BC_Visitor",
    rcU: "rcS rcX rcLat rcLat_BC_Visitor",
*/

    admin: false,
    admincommands: false
  }),
  computed: {
    barBIG () {
      return this.$store.getters.getbarBIG;
    },
    barBIGsem () {
      return this.$store.getters.getbarBIGsem;
    },

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
    categorie () {
      return this.$store.getters.categorie;
    },

    C () {
      return this.$store.getters.C;
    },
    Cs () {
      return this.$store.getters.CS;
    },
    rcS () {
      return this.$store.getters.rcS;
    },
    rcD () {
      return this.$store.getters.rcD;
    },
    rcU () {
      return this.$store.getters.rcU;
    },

    imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          // eslint-disable-next-line no-console
          console.log("xs");
          return "220px";
        case "sm":
          // eslint-disable-next-line no-console
          console.log("sm");
          return "400px";
        case "md":
          // eslint-disable-next-line no-console
          console.log("md");
          return "500px";
        case "lg":
          // eslint-disable-next-line no-console
          console.log("lg");
          return "600px";
        case "xl":
          // eslint-disable-next-line no-console
          console.log("lg");
          return "800px";
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    currentres () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          //console.log("xs");
          return "xs";
        case "sm":
          //onsole.log("sm");
          return "sm";
        case "md":
          //console.log("md");
          return "md";
        case "lg":
          //console.log("lg");
          return "lg";
        case "xl":
          //console.log("xl");
          return "xl";
      }
    }
  },

  methods: {
    /* old...
    gotoR(r) {
      // eslint-disable-next-line no-console
      console.log("AppBar * rotta per...", r);
      this.$emit("gotoR", r);
    },
    */

    setbarBIG (val) {
      this.$store.dispatch("setBB", val);
      if (val === "true") {
        console.log("set bar BIG -- VAL TRUE");
        this.bB();
        this.$store.dispatch("setScrolling", false);
      } else {
        console.log("set bar BIG -- VAL FALSE");
        this.bS();
      }
    },
    /*barBIG*/
    bB () {
      console.log("AncAppBar -- bB");
      if (this.barBIGsem === false) {
        var mr = $(".mr");
        mr.css("background-color", "rgb(4,4,4)");

        var rR = $(".r0B4");
        rR.css("background-color", "rgb(1, 4, 20)");
        rR.css("opacity", "1");
        rR.animate({ height: "125px" }, "fast");
        rR.animate({ height: "120px" }, "slow");

        var rRi = $(".r0B4int");
        rRi.animate({ height: "114px" }, "fast");
        rRi.animate({ height: "110px" }, "slow");
        rRi.css("border-radius", "55px");
      }
    },
    /*barSMALL*/
    bS () {
      console.log("AncAppBar -- bS");
      if (this.barBIGsem === false) {
        var mr = $(".mr");
        mr.css("background-color", "rgb(100,100,100)");
        var rR = $(".r0B4");
        var rRi = $(".r0B4int");
        rR.css("background-color", "rgb(19, 21, 36)");
        rR.css("opacity", "0.95");
        rRi.animate({ height: "85px" }, "slow");
        rRi.animate({ height: "80px" }, "slow");
        rR.animate({ height: "90px" }, "slow");

        /*setTimeout(() => { }, 1000);*/
      }
    },

    gotoR (r) {
      this.$store.dispatch("gotoR", r);
    },

    adminCommandSwitch () {
      this.admincommands = !this.admincommands;
    },

    setD () {
      // eslint-disable-next-line no-console
      console.log("AncAppBar ricevuto setD");

      let d = this.drawerLeft;
      if (d === false) {
        this.iconX = this.iconC;
        // eslint-disable-next-line no-console
        console.log("d true");
      } else {
        this.iconX = this.iconO;
        // eslint-disable-next-line no-console
        console.log("d false");
      }

      this.$emit("setD");
    },

    setDF () {
      this.$emit("setDF");
    },

    setC () {
      // eslint-disable-next-line no-console
      console.log("1 analizzo DATA this.requestUserIsStaff");
      // eslint-disable-next-line no-console
      console.log(this.requestUserIsStaff);
      // eslint-disable-next-line no-console
      console.log("2 analizzo DATA this.x");
      // eslint-disable-next-line no-console
      console.log(this.x);
      // eslint-disable-next-line no-console
      console.log("3 analizzo PROP {requestuserisstaff}...");
      // eslint-disable-next-line no-console
      console.log("4 analizzo PROP requestUserIsStaff...");
      // eslint-disable-next-line no-undef
      if (requestUserIsStaff === "true") {
        this.navbarcolor = "red";
      } else {
        this.navbarcolor = "grey";
      }
    },

    setcolor () {
      //this.$store.dispatch(setcolor);

      var x = this;
      console.log(
        "AncAppBAr...  setcolor analizzo this.requestuserisstaff...",
        x.requestUserIsStaff
      );

      console.log(
        "setcolor analizzo computed requestuserisstaff...",
        requestUserIsStaff
      );
      /*TODO: TRASPORTARE TUTTE QUESTE CLASSI IN STORE*/

      //if (x.requestUserIsSuper === true) {
      if (this.$store.getters.requestUserIsSuper === true) {
        this.rcS = "rcS rcX rcLat rcLat_BC_Admin";
        this.rcD = "rcD rcX rcLat rcLat_BC_Admin";

        this.nbc = "#212121"; //dark-grey
        this.rcU = "rmvcolD rmH   rcLat_BC_Admin"; //menu USER
        this.admin = true;
      } else {
        //if (x.requestUserIsStaff === true) {
        if (this.$store.getters.requestUserIsStaff === true) {
          this.rcS = "rcS rcX rcLat rcLat_BC_Staff";
          this.rcD = "rcD rcX rcLat rcLat_BC_Staff";
          this.nbc = "black";
          this.rcU = "rmvcolD rmH   rcLat_BC_Staff"; /*menu USER*/
          this.admin = false;
        } else {
          this.rcS = "rcS rcX rcLat rcLat_BC_Visitor";
          this.rcD = "rcD rcX rcLat rcLat_BC_Visitor";
          this.nbc = "#212121"; //dark-grey
          this.rcU = "rmvcolD rmH   rcLat_BC_Visitor"; /*menu USER*/
          this.admin = false;
        }
      }
    },

    DSCset (state) {
      this.$emit("DSCset", state);
    },

    setSc (val) {
      this.$store.dispatch("setScrolling", val);
    }

    /*css changes*/

    /*  .Anc_BC           ...  rgb(19, 21, 36); */
    /*  .Anc_BC_Blue      ...  rgb(4, 11, 46);  */
    /*  .Anc_BC_BlueDark  ...  rgb(1, 4, 20);   */
  },

  updated () {
    //TODO: RIPRISTINARE    this.setcolor();
  },

  mounted () {
    //TODO: RIPRISTINARE    this.setcolor();

    // eslint-disable-next-line no-console
    console.log(this.$vuetify.breakpoint);
  }

  /*
    _computed: {  
      localAttrs() {
        const attrs = {};
        if (this.variant === "default") {
          attrs.absolute = false;
          attrs.fixed = false;
        } else {
          attrs[this.variant] = true;
        }
        return attrs;
      }
    },
  
    get computed() {
      return this._computed;
    },
  
    set computed(value) {
      this._computed = value;
    }
    */
};
</script>

<style media="screen">
/*aab anc app bar*/
.aAb {
  /*height: 100px;*/
  /*background-color: pink;*/
  opacity: 1;
  position: relative;
  z-index: 3;
  padding: 0px;
}
.ANCbrd {
  /*ANC borders*/
  border-style: solid;
  border-color: rgb(2, 23, 42);
  border-width: thin;
}

/*------------------------------------------------------------------------------------------------------*/
/*color Background AR E */
/*  Grigio scuro +4   .cBE-Vis    {  background-color: "#38282b" !important;}
/*  Grigio scuro +4   .cBE-Socio  {  background-color: "green" !important; }
/*  Grigio scuro +4   .cBE-Staff  {  background-color: "red" !important; }
/*  Grigio scuro +6   .cBI        {  background-color: "#241b1d" !important; }*/
/*------------------------------------------------------------------------------------------------------*/
/* Background Colors    --T : Test   */
/* ---------------------------------------------------------------------- */
/* MdS> 
*/
/*------------------------------------------------------------------------------------------------------*/
/*color Background AR E */
/*  Grigio scuro +4   .cBE-Vis    {  background-color: "#38282b" !important;}
/*  Grigio scuro +4   .cBE-Socio  {  background-color:  !important; }
/*  Blue    scuro +5   .cBE-Staff  {  background-color: "rgb(4, 11, 46)" !important; } */ /* App bar
/*  Blue    scuro +6   .cBI        {  background-color: "rgb(1, 4, 20)" !important; }*/ /* interno row */
/*------------------------------------------------------------------------------------------------------*/

/*  Colori Globali        Background        */
/*  .Anc_BC           ...  rgb(19, 21, 36); */
/*  .Anc_BC_Blue      ...  rgb(4, 11, 46);  */
/*  .Anc_BC_BlueDark  ...  rgb(1, 4, 20);   */

.testx2 {
  background-color: pink !important;
  height: 800px;
  width: 100%;
}
.AncAppBarE {
  position: fixed;
  z-index: 6;
  /*height: 250px;*/
  width: 100%;
  padding-top: 6px;
  padding-bottom: 0px;
  text-align: end;
  text-justify: end;
}
/* MdS ---------------------------------------------------------------------- */

.r0 {
  animation-name: r0an;
  animation-duration: 3.5s;

  background-color: rgb(19, 21, 36);
  opacity: 0.95;
  position: fixed;
  z-index: 7;
  /*RESPONSIVE {r0B1,r0B2,r0B3,r0B4,r0B5}*/
  /*es: r0B4 => height: 74px;*/
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;

  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;

  border-radius: 1px;
}
.r0int {
  background-color: whitesmoke;
  /*  background-color: rgb(4, 11, 46);*/
  opacity: 0.95;
  position: relative;
  z-index: 7;
  border-radius: 35px;
}
.rh100 {
  height: 100%;
}
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++*/
.c0 {
  background-color: pink !important;
  position: relative;
  z-index: 8;
  height: 100%;
  width: 100%;
}
.r {
  background-color: green !important;
  /*.AncRowBarEst / ARBI */
  /*relative
   margin-left: 10px;
  margin-right: 10px;
  */
  position: relative;
  z-index: 7;
  /*height: 70px;*/
  height: 50px;
  width: 100%;

  margin-left: 10px;
  margin-right: 10px;

  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 0px;
  padding-right: 0px;

  text-align: center;
  text-justify: center;
  border-radius: 50px 50px 50px 50px;
}
.r_BC {
  /*ANC APP BAR Row                         */ /* AncColor Blue +6 */
  background-color: rgb(4, 11, 46) !important;
}
.r_BC--T {
  background-color: ORANGE !important;
}
/* MdS ---------------------------------------------------------------------- */
.rm {
  /*menu a discesa*/
  position: fixed;
  top: 66px;
  /* left: 578px; */
  z-index: 3;
  height: 50px;
  /*width: 368px;*/
}
/*Menu*/
.rmH0 {
  position: relative;
  height: 400px;
  background-color: grey !important;
}
.rmvcolS {
  margin-left: 0px;
  margin-right: 0px;
  background-color: transparent !important; /*test*/
  opacity: 0.5;
  /*background-color: transparent !important;*/
}
.rmvcolrSadmin {
  position: absolute;
  text-align: center;
  text-justify: center;
  z-index: 7;
  width: 100%;
  height: 100%;
  background-color: transparent !important;
}
.rmvcolSadmin {
  position: absolute;
  top: 0px;
  /*left: 1000px;*/
  z-index: 3;
  margin-left: 0px;
  margin-right: 0px;
  height: 600px;
  border-radius: 0px 0px 0px 100px;
  background-color: transparent !important;
}
/*    colonna categorie   */
.rmvcolD {
  /*test 2020 07 18 */
  width: 100%;
  height: 100%;

  margin-left: 0px;
  margin-right: 0px;
  padding-left: 0px;
  padding-right: 0px;

  /*opacity: 0.9;*/
  opacity: 1;
  background-color: yellow !important; /*test*/
  /*background-color: transparent !important;*/
  border-radius: 0px 0px 50px 0px;
}
.rmvcolC {
  position: relative;
  z-index: 7;
  opacity: 0.9;
  /* background-color: transparent !important; */
  border-radius: 0px 0px 0px 648px;
}

.rcLat {
  /*    add:  rcX rcLat_BC   */
  /* margin-top: 4px; */
  /* margin-bottom: 1px; */
}
.rcLat_BC {
  /*ANC APP BAR Row/Column Lateral          */ /* Blue */
  background-color: rgb(1, 4, 20) !important;
}
.rcLat_BC_Visitor {
  /*    EX:   .arbcs-Visitor    */
  /*  background-color: rgb(1, 4, 20) !important;  Blue */
  background-color: rgb(0, 3, 17) !important; /* Blue */
}
.rcLat_BC_Socio {
  /*    EX:   .arbcs-Socio      */
  background-color: #1a0408 !important;
}
.rcLat_BC_Staff {
  /*    EX:   .arbcs-Staff      */
  background-color: #470410 !important;
}
.rcLat_BC_Admin {
  background-color: #470410 !important;
}
.rcLat_BC--T {
  background-color: red !important;
}
/* TODO: Riordina classi

  /*------------------------------------------------------------------------------------------------------*/
.r_C {
  /*ANC APP BAR Row/Column                  */
  color: rgb(4, 11, 46) !important;
}
.rcX {
  position: relative;
  z-index: 8;
  text-justify: auto;
}
.rcS {
  /*    add:  rcX rcLat   */
  text-align: left;
  margin-left: 2px;
  margin-right: 0px;
  margin-bottom: 0px;
  padding: 0px 8px 0px 8px; /*T-R-B-L*/
  /*border-radius: 48px 85px 0px 48px;*/
}
/*------------------------------------------------------------------------------------------------------*/
.rcD {
  /*    add:  rcX rcLat   */
  text-align: right;
  margin-left: 0px;
  margin-right: 2px;
  margin-bottom: 0px;
  padding: 0px 8px 0px 8px; /*T-R-B-L*/
  border-radius: 85px 48px 48px 0px;
}
/*------------------------------------------------------------------------------------------------------*/
.rcC {
  /*    add:  rcX    */
  position: relative;
  z-index: 9;
  /*width: 368px; RIFERIMENTO*/
  padding: 0px 0px;
  text-align: center;
  margin-left: 0px;
  margin-right: 0px;

  /*margin-top: 4px;*/

  margin-bottom: 0px;
  border-radius: 0px 0px 0px 0px;
}
.rcC_BC {
  /*TODO: LEVATO PER TEST 2020 06 16*/

  background-color: rgb(4, 11, 46) !important;

  /* AncColor Blue +6  /*
  background-color: rgb(36, 17, 6) !important; /* Marrone */
}
.rcC_BC--T {
  background-color: salmon !important;
}
/*------------------------------------------------------------------------------------------------------*/
.rcCr {
  background-color: yellow;
  position: relative;
  z-index: 9;
  /*    add:  rcCr_BC       */
  /*    EX:   AncRowBarColccxRowInt */
  /*height: 64px;*/
  height: 100%;
  margin-left: 0px;
  margin-right: 0px;
  border-radius: 48px 48px 0px 0px;
}
.rcCr_BC {
  background-color: transparent !important;
}
.rcCr_BC--T {
  background-color: green !important;
  z-index: -1;
}
/*------------------------------------------------------------------------------------------------------*/
.rcCrcX {
  position: relative;
  z-index: 10;
  text-justify: auto;
  height: 100%;
}
/*------------------------------------------------------------------------------------------------------*/
/*
.rcCrcLat {
}
*/
/*    add:    rcCrcX  rcCrcLat_BC       */
/*    per:    rcCrcS  / rcCrcD    */
.rcCrcLat_BC {
  background-color: transparent !important;
}
.rcCrcLat_BC--T {
  background-color: red !important;
}
/*------------------------------------------------------------------------------------------------------*/
.rcCrcS {
  /*    EX:     AncRowBarColcxRowIntColsx*/
  /*    add:    rcCrcX  rcCrcLat       */
  text-align: right;
}
.rcCrcD {
  /*    EX:     AncRowBarColcxRowIntColdx*/
  /*    add:    rcCrcX  rcCrcLat       */
  text-align: left;
}
/*------------------------------------------------------------------------------------------------------*/
.rcCrcC {
  padding: 15px 2px 3px; /* T-RL-B */
  text-align: center;
}
.rcCrcC_BC {
  background-color: transparent !important;
}
.rcCrcC_BC--T {
  background-color: slateblue !important;
}
/*------------------------------------------------------------------------------------------------------*/
.rcCrcCr_BC--T {
  background-color: brown !important;
}
/*------------------------------------------------------------------------------------------------------*/
.avatar {
  z-index: 9;
  /*right: "true";*/
  /*size: 32;*/

  max-width: 48px;
  max-height: 50px;

  transform: scale(1, 1);
}
.avatar:hover {
  transform: scale(1.1, 1.1);
}
.avatar_BC {
  background-color: transparent !important;
}
.avatar_BC--T {
  background-color: green !important;
}
/*------------------------------------------------------------------------------------------------------*/

.AncBtnLanguages {
  background-color: transparent !important;
  transform: scale(1, 1);
}
.AncBtnLanguages:hover {
  background-color: lightseagreen !important;
  transform: scale(1.05, 1.05);
}

.icorot {
  transform: rotate(10deg);
}
.drwOpen {
  /*transform: rotate(25deg);*/
  transform: scale(1.2, 1.2);
  height: 48px;
  width: 48px;
}
.drwClose {
  /*transform: rotate(0deg);*/
  transform: scale(1, 1);
  height: 48px;
  width: 48px;
}

.adminList {
  background-color: transparent !important;
}

/*V2*/
/*    AncAppBar                                                                                                                                */
/*  +------------------------------------------------------------------------------------------------------------------------------+ h100      */
/*  |                                                                                                                              | #38282b   */
/*  |    r                                                                                                                         |           */
/*  | +--------------------------------------------------------------------------------------------------------------------------+ | h 70      */
/*  | |                                                                                                                          | | #241518   */
/*  | |              rcS                                          rcC                                          rcD               | |           */
/*  | | +-----------------------------+----------------------------------------------------------+-----------------------------+ | |           */
/*  | | |                             |                                                          |                             | | |           */
/*  | | |                             |                           rcCr                           |                             | | |           */
/*  | | |                             | +------------------------------------------------------+ |                             | | |           */
/*  | | |                             | |                                                      | |                             | | |           */
/*  | | |                             | |      rcCrcS             rcCrcC          rcCrcD       | |                             | | |           */
/*  | | |                             | | +----------------+-----------------+---------------+ | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | |                |   +---------+   |               | | |                             | | |           */
/*  | | |                             | | |                |   |         |   |               | | |                             | | |           */
/*  | | |                             | | |                |   | Avatar  |   |               | | |                             | | |           */
/*  | | |                             | | |                |   +---------+   |               | | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | +----------------+-----------------+---------------+ | |                             | | |           */
/*  | | |                             | |                                                      | |                             | | |           */
/*  | | |                             | +------------------------------------------------------+ |                             | | |           */
/*  | | |                             |                                                          |                             | | |           */
/*  | | |                             |                                                          |                             | | |           */
/*  | | +-----------------------------+----------------------------------------------------------+-----------------------------+ | |           */
/*  | |                                                                                                                          | |           */
/*  | +--------------------------------------------------------------------------------------------------------------------------+ |           */
/*  |                                                                                                                              |           */
/*  |                                                                                                                              |           */
/*  +------------------------------------------------------------------------------------------------------------------------------+           */

/*    AncAppBarE               #38282b                                                                        */
/*  +-------------------------------------------------------------------------------------------------+ h100  */
/*    r   AncRowBarEst            #241518                                                                        */
/*    +---------------------------------------------------------------------------------------------+   h70   */
/*      +--------------         -----------------------------------------           --------------+           */
/*        rcS                     rcC                                                 rcD                   */
/*      | AncRowBar-  |           AncRowBar-Colcx-                                  | AncRowBar-  |           */
/*      |   Colssx    |                                                             |   colddx    |           */
/*      |             |         -----------------------------------------           |             |           */
/*      |             |           rcCr
/*                                RowInt-                                           |             |           */
/*      |             |         +---------------------------------------+           |             |           */
/*      |             |         | rcCrcS    | rcCrcC      | rcCrcD      |           |             |           */
/*      |             |         |           |             |             |           |             |           */
/*      |             |         |  Colssx   |   Colxccx   |   Colddx    |           |             |           */
/*      |             |         |           |             |             |           |             |           */
/*      |             |         |           | +---------+ |             |           |             |           */
/*      |             |         |           | | Avatar  | |             |           |             |           */
/*      |             |         |           | +---------+ |             |           |             |           */
/*      |             |         |           |             |             |           |             |           */
/*      |             |         +---------------------------------------+           |             |           */
/*      |             |                                                             |             |           */
/*      +-----------------------------------------------------------------------------------------+           */
/*    +---------------------------------------------------------------------------------------------+         */
/*  +-------------------------------------------------------------------------------------------------+       */

/*
.AncAppBarELG {
  text-align: auto;
  text-justify: auto;
}
*/

/*
  padding: 25px 50px 75px 100px;      T-R-B-L
  padding: 25px 50px 75px;            T-RL-B
  padding: 25px 50px;                 TB-RL
  padding: 25px;                      TBRL
*/

/*  Colori barra... */
/*  background-color:"#38282b" !important;   Grigio scuro +4  */
/*  background-color:"#241518" !important;   Grigio scuro +5  */
/*  background-color:"#1a0408" !important;   Grigio scuro +6  */

/*  ---------------------------------------------------------------------   */
/*  | colbarsx |                  colbarcx                  | colbardx  |   */
/*  |          |   colAvSx   |     avatar      |   colAvDx  |           |   */
/*  ---------------------------------------------------------------------   */

/*  ---------------------------------------------------------------------   */
/*  | colbarsx |                  colbarcx                  | colbardx  |   */
/*  |          |   colAvSx   |     avatar      |   colAvDx  |           |   */
/*  ---------------------------------------------------------------------   */

/*
padding
    padding: 25px 50px 75px 100px;      T-R-B-L
    padding: 25px 50px 75px;            T-RL-B
    padding: 25px 50px;                 TB-RL
    padding: 25px;                      TBRL
border-radius
    border-radius: 15px 50px 30px 5px;  TL-TR-BR-BL
    border-radius: 15px 50px 30px;      TL-TRBL-BR
    border-radius: 15px 50px;           TLBR-TRBL
    border-radius: 15px;                TLBRTRBL
*/

/*
.menubtnd1 {
  z-index: 7;
  background-color: darkorchid !important;

  max-width: 75px;
  max-height: 45px;

  border-radius: 2px 2px 40px 40px;

  text-align: center;
  text-justify: center;
  padding-bottom: 15px;
  margin-top: 5px;
}
*/

/* TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT */
/* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */

/*

@keyframes slideInDown {
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
.slideInDown {
  animation-name: slideInDown;
}
@keyframes fadeOutUp {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.fadeOutUp {
  animation-name: fadeOutUp;
  animation-duration: 1s;
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.fadeInDown {
  animation-name: fadeInDown;
  animation-duration: 1s;
*/

/* animation-delay: -2s; test ok*/
/*

}
@keyframes flipOutX {
  from {
    transform: perspective(200px);
  }

  30% {
    transform: perspective(200px) rotate3d(1, 0, 0, -50deg);
    opacity: 1;
  }

  to {
    transform: perspective(200px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  animation-duration: 0.75s;
  animation-name: flipOutX;
  backface-visibility: visible !important;
}
@keyframes zoomOutDown {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomOutDown {
  animation-name: zoomOutDown;
}
@keyframes zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}
.zoomOut {
  animation-name: zoomOut;
}

@keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-300px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }

  75% {
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    transform: translate3d(5px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.bounceInLeft {
  animation-name: bounceInLeft;
}

@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-400px, 0, 0);
  }
}

.bounceOutLeft {
  animation-name: bounceOutLeft;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInRight {
  animation-name: fadeInRight;
}
@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}

.fadeOutLeft {
  animation-name: fadeOutLeft;
}
@keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}

.fadeOutRight {
  animation-name: fadeOutRight;
}
*/

/* TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT */
/* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */

/* -------------------------------------------------------------------- */

/*
v-enter:          Starting state for enter. Added before element is inserted, removed one frame after element is inserted.
v-enter-active:   Active state for enter. Applied during the entire entering phase. Added before element is inserted, removed when transition/animation finishes. This class can be used to define the duration, delay and easing curve for the entering transition.
v-enter-to:       Only available in versions 2.1.8+. Ending state for enter. Added one frame after element is inserted (at the same time v-enter is removed), removed when transition/animation finishes.

v-leave:          Starting state for leave. Added immediately when a leaving transition is triggered, removed after one frame.
v-leave-active:   Active state for leave. Applied during the entire leaving phase. Added immediately when leave transition is triggered, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the leaving transition.
v-leave-to:       Only available in versions 2.1.8+. Ending state for leave. Added one frame after a leaving transition is triggered (at the same time v-leave is removed), removed when the transition/animation finishes.
*/

/*
CAT2020...
padding
    padding: 25px 50px 75px 100px;      T-R-B-L
    padding: 25px 50px 75px;            T-RL-B
    padding: 25px 50px;                 TB-RL
    padding: 25px;                      TBRL
border-radius
    border-radius: 15px 50px 30px 5px;  TL-TR-BR-BL
    border-radius: 15px 50px 30px;      TL-TRBL-BR
    border-radius: 15px 50px;           TLBR-TRBL
    border-radius: 15px;                TLBRTRBL
*/

/* classi necessarie al 2002 07 17 prelevate da B4lg */

.AncIconLang {
  height: 38px;
  width: 38px;
  transform: scale(1, 1);
}
.AncIconLang:hover {
  transform: scale(1.2, 1.2);
}
.iconavR {
  height: 100%;
  /*background-color: transparent !important;*/
  background-color: greenyellow !important;

  /*
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  */
}
.rIco {
  /* row - fila di icone parte sinistra */
  height: 100%;
  width: 95%;
  /*background-color: transparent !important;*/
  background-color: blue !important;
}
/*  sostituite in c1sx */
.icoSx {
  position: relative;
  height: 100%;
  padding-top: 0px;
  padding-bottom: 0px;
  /*padding-top: 5px;*/
  background-color: transparent !important;
}
.iconavcSbassa {
  /* background-color: yellow !important;*/
  text-align: left;
  padding-left: 5px;
}
.iconavcSbtnCategoriaCorrente {
  /* background-color: burlywood !important; */
  background-color: transparent !important;
  text-align: center;
}

.iconavcSbtnMENU {
  background-color: transparent !important;
  text-align: center;
}
.iconavcS {
  text-align: left;
  padding-left: 15px;
}
.iconavcDD {
  background-color: transparent !important;
}
.ct {
  position: relative;
  background-color: aqua;
  height: 100%;
}
/*  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
/*  Responsive... */
/*  B4  */
.r0B4 {
  height: 90px;
  animation-name: r0B4an;
  animation-duration: 2.5s;
  background-color: yellow;
  /* background-color: rgb(19, 21, 36); */
  opacity: 0.95;
  position: fixed;
  z-index: 7;
  /*RESPONSIVE {r0B1,r0B2,r0B3,r0B4,r0B5}*/
  /*es: r0B4 => height: 74px;*/
  width: 100%;

  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;

  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;

  border-radius: 1px;
}

/* The animation code */
@keyframes r0B4an {
  0% {
    height: 0px;
    background-color: rgb(4, 11, 46) !important;
  }
  60% {
    height: 94px;
  }
  100% {
    height: 90px;
    background-color: rgb(19, 21, 36);
    opacity: 0.95;
  }
}

/*  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
/* The animation code */
@keyframes r0an {
  0% {
    height: 0px;
    background-color: rgb(4, 11, 46) !important;
  }
  15% {
    height: 125px;
  }
  100% {
    height: 74px;
    background-color: rgb(19, 21, 36);
    opacity: 0.95;
  }
}

.r0B4int {
  height: 80px;
  /*animation-name: r0B4anint;*/
  /*animation-duration: 2.5s;*/

  /* background-color: rgb(4, 11, 46);*/
  /* background-color: wheat;*/
  opacity: 0.95;
  position: relative;
  z-index: 7;

  padding-top: 2px;
  padding-bottom: 0px;
  padding-left: 1px;
  padding-right: 1px;

  border-radius: 40px;
}
@keyframes r0B4anint {
  0% {
    height: 0px;
  }
  60% {
    height: 84px;
  }
  100% {
    height: 80px;
  }
}

#divtest2021 {
  background-color: red;
  height: 300px;
}

/*test 2021 02 20*/
#divtest2021if {
  position: relative;
  z-index: 10;
  background-color: red;
  height: 300px;
}
#divtest2021else {
  position: relative;
  z-index: 10;
  background-color: darkred;
  height: 300px;
}

/*dexo21 transition*/
.dexo21-enter-active {
  animation: dexoAn 1.5s;
}
.dexo21-leave-active {
  animation: dexoAn 1.5s reverse;
}
/*
.dexo21-enter,
.dexo21-leave-to{			        opacity: 	0;}
*/
@keyframes dexoAn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

/*animation: dexoAn2 1.5s;*/

/*dexo3 transition*/
.dexo3-enter-active {
  animation-name: dexoAn2;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  /*animation-delay: -2s;*/
  /*animation-iteration-count: infinite;*/
  /*animation-direction: alternate;*/
  animation-fill-mode: both; /*None{default},forwards,backwards,both*/
}
.dexo3-leave-active {
  animation-name: dexoAn2;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  /*animation-delay: -2s;*/
  /*animation-iteration-count: infinite;*/
  animation-direction: reverse;
  animation-fill-mode: both; /*None{default},forwards,backwards,both*/
}

@keyframes dexoAn2 {
  0% {
    height: 300px;
  }
  100% {
    height: 400px;
  }
}
</style>
