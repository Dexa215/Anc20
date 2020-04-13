<template>
  <!-- @@@ -->
  <div v-if="currentres == 'xs'">
    <b1xs
      :height="hsm"
      :requestUser="requestUser"
      :requestUserIsStaff="requestUserIsStaff"
      :requestUserIsSuper="requestUserIsSuper"
      :requestUserAvatar="requestUserAvatar"
      :requestUserBio="requestUserBio"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      :drawer="drawer"
      :drawerLeft="drawerLeft"
      :drawerRight="drawerRight"
      :iconX="iconX"
      @gotoR="gotoR"
      @setD="setD"
      @setDF="setDF"
      @mouseover="setDF()"
    ></b1xs>
  </div>
  <div v-else-if="currentres == 'sm'">
    <b2sm
      :height="hsm"
      :requestUser="requestUser"
      :requestUserIsStaff="requestUserIsStaff"
      :requestUserIsSuper="requestUserIsSuper"
      :requestUserAvatar="requestUserAvatar"
      :requestUserBio="requestUserBio"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      :drawer="drawer"
      :drawerLeft="drawerLeft"
      :drawerRight="drawerRight"
      :iconX="iconX"
      @gotoR="gotoR"
      @setD="setD"
      @setDF="setDF"
      @mouseover="setDF()"
    ></b2sm>
  </div>
  <div v-else-if="currentres == 'md'">
    <b3md
      :height="hlg"
      :requestUser="requestUser"
      :requestUserIsStaff="requestUserIsStaff"
      :requestUserIsSuper="requestUserIsSuper"
      :requestUserAvatar="requestUserAvatar"
      :requestUserBio="requestUserBio"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      :drawer="drawer"
      :drawerLeft="drawerLeft"
      :drawerRight="drawerRight"
      :iconX="iconX"
      @gotoR="gotoR"
      @setD="setD"
      @setDF="setDF"
      @mouseover="setDF()"
    ></b3md>
  </div>

  <div v-else-if="currentres == 'lg'">
    <b4lg
      :height="hlg"
      :requestUser="requestUser"
      :requestUserIsStaff="requestUserIsStaff"
      :requestUserIsSuper="requestUserIsSuper"
      :requestUserAvatar="requestUserAvatar"
      :requestUserBio="requestUserBio"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      :drawer="drawer"
      :drawerLeft="drawerLeft"
      :drawerRight="drawerRight"
      :iconX="iconX"
      @gotoR="gotoR"
      @setD="setD"
      @setDF="setDF"
      @mouseover="setDF()"
    ></b4lg>
  </div>

  <div v-else-if="currentres == 'xl'">
    <b5xl
      :height="hlg"
      :requestUser="requestUser"
      :requestUserIsStaff="requestUserIsStaff"
      :requestUserIsSuper="requestUserIsSuper"
      :requestUserAvatar="requestUserAvatar"
      :requestUserBio="requestUserBio"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      :drawer="drawer"
      :drawerLeft="drawerLeft"
      :drawerRight="drawerRight"
      :iconX="iconX"
      @gotoR="gotoR"
      @setD="setD"
      @setDF="setDF"
      @mouseover="setDF()"
    ></b5xl>
  </div>
  <!-- @@@ -->
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { apiService } from "@/common/api.service";
// eslint-disable-next-line no-unused-vars
import router from "@/router";

import b1xs from "@/components/AncAppBars/B1xs.vue";
import b2sm from "@/components/AncAppBars/B2sm.vue";
import b3md from "@/components/AncAppBars/B3md.vue";
import b4lg from "@/components/AncAppBars/B4lg.vue";
import b5xl from "@/components/AncAppBars/B5xl.vue";

export default {
  name: "ancAppBar",

  components: {
    b1xs,
    b2sm,
    b3md,
    b4lg,
    b5xl
  },

  props: {
    iconX: { type: String },
    requestUser: { type: String },
    requestUserIsStaff: { type: Boolean },
    requestUserIsSuper: { type: Boolean },
    requestUserAvatar: { type: String },
    requestUserBio: { type: String },
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array },
    drawer: { type: Boolean },
    drawerLeft: { type: Boolean },
    drawerRight: { type: Boolean }
  },

  data: () => ({
    rgb2: "#241518",
    rgb3: "",
    hsm: "84px",
    hlg: "84px"
  }),

  methods: {
    gotoR(r) {
      // eslint-disable-next-line no-console
      console.log("AppBar rotta per...");
      this.$emit("gotoR", r);
    },

    setD() {
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

    setDF() {
      this.$emit("setDF");
    },

    setC() {
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

    setcolor() {
      var x = this;
      //console.log("setcolor analizzo this.requestuserisstaff...", x.requestUserIsStaff);
      if (x.requestUserIsStaff === true) {
        this.nbc = "black";
      } else {
        this.nbc = "#212121"; //dark-grey
      }
    }
  },

  updated() {
    //      this.setcolor();
  },

  mounted() {
    //      this.setcolor();
    // eslint-disable-next-line no-console
    console.log(this.$vuetify.breakpoint);
  },

  _computed: {
    imageHeight() {
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
    currentres() {
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
    },
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
};
</script>

<style media="screen">
/*
.rowFot {
  background-color: orange !important;
}
.rowFotS {
  background-color: lightblue !important;
}

.colFot {
  background-color: transparent !important;
}

.colFotS {
  background-color: lightblue !important;
}

.colFotSmallUp {
  background-color: lightblue !important;
  min-height: 30px;
  max-height: 40px;
}
.colFotSmallDown {
  background-color: transparent !important;
  min-height: 30px;
  max-height: 40px;
}
*/
.AncAppBarE {
  /*background-color:  teal !important;*/
  /*height: 250px;*/
  text-align: auto;
  text-justify: auto;
  /*padding: 4px 0px 3px;*/
}
/*------------------------------------------------------------------------------------------------------*/
/*.AncRowBarEst {*/
.ARBI {
  /*background-color: #2b2b29 !important;*/
  /*background-color: #241518 !important;*/
  background-color: ORANGE !important;
  height: 70px;
  text-align: center;
  text-justify: center;
  border-radius: 50px 50px 50px 50px;
}
.ESTsm {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.ESTlg {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
}

/* Background Colors    --T : Test   */
/*------------------------------------------------------------------------------------------------------*/
/*  r   */
.r_BC {
  background-color: #2b2b29 !important;
  /*  background-color: #241518 !important;   */
}
.r_BC--T {
  background-color: ORANGE !important;
}
/*  rcLat   [rcS / rcD]  */
.rcLat_BC {
  /*background-color: rgb(194, 57, 212) !important;*/
  /*background-color: #1a0408 !important;*/
  background-color: transparent !important;
}
.rcLat_BC_Visitor {
  /*    EX:   .arbcs-Visitor    */
  background-color: #1a0408 !important;
}
.rcLat_BC_Socio {
  /*    EX:   .arbcs-Socio      */
  background-color: #1a0408 !important;
}
.rcLat_BC_Staff {
  /*    EX:   .arbcs-Staff      */
  background-color: #87011a !important;
}

/*color Background AR E */
/*  Grigio scuro +4   .cBE-Vis    {  background-color: "#38282b" !important;}
/*  Grigio scuro +4   .cBE-Socio  {  background-color: "green" !important; }
/*  Grigio scuro +4   .cBE-Staff  {  background-color: "red" !important; }
/*  Grigio scuro +6   .cBI        {  background-color: "#241b1d" !important; }*/

.rcLat_BC--T {
  background-color: red !important;
}

.AncRowBarColsxRow {
  background-color: pink !important;
  height: 32px;
}

.AncRowBarColdxRow {
  background-color: pink !important;
  height: 32px;
}

/*  rcC  */
.rcC_BC {
  background-color: #241518 !important;
}
.rcC_BC--T {
  /*background-color: SALMON !important;*/
  background-color: yellow !important;
}

/*------------------------------------------------------------------------------------------------------*/
/*  rcCr  */
.rcCr_BC {
  background-color: transparent !important;
}
.rcCr_BC--T {
  z-index: -1;
  background-color: greenyellow !important;
}
/*------------------------------------------------------------------------------------------------------*/
/*    rcCrcLat [  rcCrcS  / rcCrcD  ]    */
.rcCrcLat_BC {
  background-color: transparent !important;
}
.rcCrcLat_BC--T {
  background-color: red !important;
}

/*    rcCrcC    */
.rcCrcC_BC {
  background-color: transparent !important;
}
.rcCrcC_BC--T {
  background-color: slateblue !important;
}

.rcCrcCr_BC--T {
  background-color: brown !important;
}

/*    avatar    */
.avatar_BC {
  background-color: transparent !important;
}

.avatar_BC--T {
  background-color: green !important;
}

/*------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------*/

.r {
  /*.AncRowBarEst / ARBI */
  background-color: ORANGE !important; /*test*/
  /*background-color: #2b2b29 !important;*/
  /*background-color: #241518 !important;*/
  height: 70px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  text-justify: center;
  border-radius: 50px 50px 50px 50px;
}

/*------------------------------------------------------------------------------------------------------*/
.rcX {
  /*    per rcS - rcC - rcD  */
  height: 66px;
  text-justify: auto;
}
.rcLat {
  /*    add:  rcX rcLat_BC   */
  /*    per:  Colonne Laterali rcS - rcD  */
  padding: 8px 8px;
  margin-top: 2px;
  margin-bottom: 1px;
}
.rcS {
  /*    add:  rcX rcLat   */
  /*background-color: rgb(194, 57, 212) !important;*/
  /*background-color: #1a0408 !important;*/
  /*height: 66px;             incorporato rCx*/
  /*text-justify: auto;       incorporato rCx*/
  /*padding: 8px 8px;         incorporato rClaterale*/
  /*margin-top: 1px;*/
  /*margin-bottom: 1px;*/
  text-align: left;
  margin-left: 2px;
  margin-right: 0px;
  border-radius: 48px 85px 0px 48px;
}
/*
.AncRowBarColssx {
  /*background-color: rgb(194, 57, 212) !important;*/
/*background-color: #1a0408 !important;*/
/*
  height: 66px;
  text-align: left;
  text-justify: auto;
  padding: 8px 8px;
  margin-left: 1px;
  margin-right: 0px;
  margin-top: 1px;
  margin-bottom: 1px;
  border-radius: 48px 85px 0px 48px;
}
*/

.rcD {
  /*    add:  rcX rcLat    */
  /*background-color: rgb(194, 57, 212) !important;*/
  /*background-color: #1a0408 !important;*/
  /*height: 66px;             incorporato rCx*/
  /*text-justify: auto;       incorporato rCx*/
  /*padding: 8px 8px;         incorporato rClaterale*/
  /*margin-top: 1px;*/
  /*margin-bottom: 1px;*/
  text-align: right;
  margin-left: 0px;
  margin-right: 2px;
  border-radius: 85px 48px 48px 0px;
}
/*
.AncRowBarColddx {
  /*background-color: rgb(194, 57, 212) !important;*/
/*background-color: #1a0408 !important;*/
/*
  height: 66px;
  text-align: right;
  text-justify: auto;
  padding: 8px 8px;
  margin-left: 0px;
  margin-right: 1px;
  margin-top: 1px;
  margin-bottom: 1px;
  border-radius: 85px 48px 48px 0px;
}
*/

.rcC {
  /*    add:  rcX       */
  /*background-color: #241518 !important;*/
  /*background-color: salmon !important;*/
  /*height: 66px;             incorporato rCx*/
  /*text-justify: auto;       incorporato rCx*/
  /*padding: 8px 8px;         incorporato rClaterale*/
  /*margin-top: 1px;*/
  /*margin-bottom: 1px;*/
  padding: 0px 0px;
  text-align: center;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  /*border-radius: 0px 0px 15px 15px;*/
  border-radius: 0px 0px 0px 15px;
}
/*
.AncRowBarColccx {
  background-color: #241518 !important;
  /*background-color: salmon !important;*/
/*
  height: 66px;
  text-align: center;
  text-justify: auto;

  padding: 0px 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;

  border-radius: 0px 0px 15px 15px;
}
*/

/*------------------------------------------------------------------------------------------------------*/
.rcCr {
  /*    add:  rcCr_BC       */
  /*    EX:   AncRowBarColccxRowInt */
  /*background-color: transparent !important;
  z-index: -1;
  background-color: greenyellow !important;*/
  height: 64px;
  margin-left: 0px;
  margin-right: 0px;
  border-radius: 0px 0px 15px 15px;
  z-index: 2;
}
/*
.AncRowBarColccxRowInt {
  /*background-color: transparent !important;
  z-index: -1;
  background-color: greenyellow !important;
  margin-left: 0px;
  margin-right: 0px;
  border-radius: 0px 0px 15px 15px;
}
*/
/*------------------------------------------------------------------------------------------------------*/
.rcCrcX {
  text-justify: auto;
}
.rcCrcLat {
  /*    add:    rcCrcX  rcCrcLat_BC       */
  /*    per:    rcCrcS  / rcCrcD    */
}
.rcCrcS {
  /*    add:    rcCrcX  rcCrcLat       */
  /*    EX:     AncRowBarColcxRowIntColsx*/
  text-align: right;
}
/*
.AncRowBarColcxRowIntColsx {
  background-color: transparent !important;
  background-color: red !important;
  text-justify: auto;
  text-align: right;
}
/*
.colAvSx {
  background-color: orange !important;
  text-align: end;
  min-height: 22px;
  max-height: 80px;
  padding: 22px 10px;
}
*/

.rcCrcD {
  /*    add:    rcCrcX  rcCrcLat       */
  /*    EX:     AncRowBarColcxRowIntColdx*/
  text-align: left;
}
/*
.AncRowBarColcxRowIntColdx {
  background-color: transparent !important;
  background-color: red !important;
  text-justify: auto;
  text-align: left;
}
.colAvDx {
  background-color: orange !important;
  text-align: start;
  min-height: 22px;
  max-height: 80px;
  padding: 22px 10px;
}
*/

.rcCrcC {
  /*    add:    rcCrcC_BC       */
  /*    EX:     AncRowBarColcxRowIntColccx    */
  /*    text-justify: auto;   */
  /* height: 60px; */
  padding: 15px 2px 3px; /* T-RL-B */
  text-align: center;
}

.avatar {
  /* background-color: green !important; */
  /* color: green; */
  /*right: "true";*/
  size: 48;
  max-width: 48px;
  /*max-height: 48px;*/
  max-height: 50px;
  transform: scale(1, 1);
}
.avatar:hover {
  transform: scale(1.1, 1.1);
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

/*
.AncRowBarColcxRowIntColccx {
  background-color: transparent !important;
  background-color: slateblue !important;
  /*height: 70px;*/
/*
  height: 80px;
  padding: 2px 0px;
  text-align: center;
  text-justify: auto;
}
.Avatar {
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

.AncAppBarI {
  z-index: 3;
  background-color: yellowgreen !important;

  height: 45px;

  text-align: center;
  text-justify: center;

  border-radius: 48px 48px 48px 48px;
}

.AncAppBar {
  z-index: 3;
  background-color: yellowgreen !important;

  height: 45px;

  text-align: center;
  text-justify: center;

  border-radius: 48px 48px 48px 48px;
}

/*  ---------------------------------------------------------------------   */
/*  | colbarsx |                  colbarcx                  | colbardx  |   */
/*  |          |   colAvSx   |     avatar      |   colAvDx  |           |   */
/*  ---------------------------------------------------------------------   */

/*OLD
.colbarsx {
  background-color: purple !important;
  min-height: 76px;
  text-align: start;
  padding: 12px 10px;
}
.colbarcx {
  background-color: navy !important;
  min-height: 76px;
  text-align: start;
  padding: 12px 10px;
}
.colbardx {
  background-color: purple !important;
  min-height: 76px;
  text-align: end;
  padding: 12px 10px;
}
*/

/*
.colAvSx {
  background-color: darkorange !important;
  text-align: end;
  text-justify: center;
  height: 22px;
  padding: 22px 10px;
}

.colAvDx {
  background-color: orange !important;
  text-align: start;
  text-justify: center;
  height: 22px;
  padding: 22px 10px;
}

.colAvatar {
  background-color: pink !important;
  height: 48px;
  max-width: 80px;

  text-align: center;
  text-justify: center;

  padding: 1px;
}
*/

/*  ---------------------------------------------------------------------   */
/*  | colbarsx |                  colbarcx                  | colbardx  |   */
/*  |          |   colAvSx   |     avatar      |   colAvDx  |           |   */
/*  ---------------------------------------------------------------------   */

/*
col {
  padding: 20px 0px 0px;
}

.t {
  background-color: transparent !important;
}

.colBar {
  background-color: transparent !important;
}
.coltest {
  background-color: red !important;
}
*/

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
.AncRowBarColcxRowIntColcx {
  background-color: darkred !important;
  height: 66px;
  text-align: center;
}
*/

/*
.AncRowBarColcxRowIntColsxsx {
  background-color: darkred !important;
  height: 50px;
  text-align: left;
  text-justify: auto;
}
*/

.AncRowBarColdx {
  background-color: deeppink !important;
  height: 66px;
  text-align: start;

  padding: 2px 2px;
  margin-left: 0px;
  margin-right: 1px;
  margin-top: 1px;
  margin-bottom: 1px;
  border-radius: 40px 40px 40px 0px;
}

/*
.avatar {
  background-color: green !important;
  color: green;
  right: "true";
  size: 62;
  min-width: 65px;
  max-height: 75px;
  max-width: 75px;
}
*/

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
</style>
