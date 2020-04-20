<template>
  <div>
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
      <!--div class="rmblock">ciao</div-->

      <b4lg
        :rcS="rcS"
        :rcD="rcD"
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

    <!-- INFO -- TEST 2020.04.20 -- *********************************************** -->
    <div class="rmNews">
      <ancNews :C="C" :CS="CS" :categorie="categorie"></ancNews>
    </div>
    <!-- INFO -- ****************************************************************** -->

    <!-- menu -- ****************************************************************** -->

    <!-- div -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <v-row class="rmvrow" v-show="drawerLeft" text-align="center">
        <v-row v-show="categorie[C/10-1].sottocategorie.length > 1" class="sottocategorieList">
          <v-col cols="1" class="sottocategorieListr1"></v-col>
          <v-col cols="3" class="sottocategorieListr2 rcLat_BC_Visitor">
            <!-- Finestra sottocategorie -->
            <v-col v-show="drawerSottocategoria" class="m4lgSottocategorie">
              <m4lgSottocategorie
                :C="C"
                :CS="CS"
                :categorie="categorie"
                :drawerRight="drawerRight"
                :drawerSottocategoria="drawerSottocategoria"
                @gotoR="gotoR"
                @setD="setD"
                @setDF="setDF"
                @mouseover="setDF()"
              ></m4lgSottocategorie>
            </v-col>
            <!-- Finestra sottocategorie -->

            <!--
            <v-icon
              v-for="item in categorie[C/10-1].sottocategorie"
              :key="item.n"
              class="mx-2 AncIconColor"
              large
              dark
              @click="gotoR(item.link)"
              style="height: 30px;"
            >{{item.icona}}</v-icon>

            -->
          </v-col>
          <v-col cols="8" class="sottocategorieListr3 rcLat_BC_Visitor"></v-col>
        </v-row>

        <!-- menu sottocategorie... -->

        <v-col class="rmH" cols="4"></v-col>

        <!-- {{admincommands}} -->
        <!--
        <v-col v-if="admin" class="rmH">{{admincommands}}</v-col>
        <v-col v-else class="rmH">Visitor</v-col>
        -->

        <!--  finestra amministatore 
        <v-col v-if="admin" class="rmH"></v-col>
        <!--  finestra amministatore-->

        <!--  finestra comandi amministatore -->
        <transition
          name="custom-classes-transition2"
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutLeft"
        >
          <v-col v-show="admin & admincommands" class="rmvcolSadmin rmH" cols="12">
            <m4lgAdmin @gotoR="gotoR" @setDF="setDF"></m4lgAdmin>
          </v-col>
        </transition>
        <!--  finestra amministatore -->

        <!--  finestra dati untente -->
        <v-col class="rmvcolC rmH rcC_BC" cols="4">
          <u4lg
            :requestUser="requestUser"
            :requestUserIsStaff="requestUserIsStaff"
            :requestUserIsSuper="requestUserIsSuper"
            :requestUserAvatar="requestUserAvatar"
            :requestUserBio="requestUserBio"
            @adminCommandSwitch="adminCommandSwitch"
            @gotoR="gotoR"
          ></u4lg>
        </v-col>
        <!--  finestra dati untente -->

        <!-- old ok
        <v-col class="rmvcolD rmH rcLat_BC">
        -->
        <v-col :class="rcU">
          <m4lg
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
            :drawerSottocategoria="drawerSottocategoria"
            :rcLat_BC="rcLat_BC"
            :iconX="iconX"
            @gotoR="gotoR"
            @setD="setD"
            @setDF="setDF"
            @mouseover="setDF()"
            @DSCset="DSCset()"
          ></m4lg>
        </v-col>
      </v-row>
    </transition>
    <!-- ****************************************************************** -->
  </div>
  <!-- @@@ -->
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { apiService } from "@/common/api.service";
// eslint-disable-next-line no-unused-vars
import router from "@/router";
import ancNews from "@/components/AncNews.vue";

import b1xs from "@/components/AncAppBars/B1xs.vue";
import b2sm from "@/components/AncAppBars/B2sm.vue";
import b3md from "@/components/AncAppBars/B3md.vue";
import b4lg from "@/components/AncAppBars/B4lg.vue";
import b5xl from "@/components/AncAppBars/B5xl.vue";
/* Transitions */

import u4lg from "@/components/AncM/User/U4lg.vue";
import m4lg from "@/components/AncM/Cat/M4lg.vue";
import m4lgSottocategorie from "@/components/AncM/CatSotto/M4lgSottocategorie.vue";
import m4lgAdmin from "@/components/AncM/Admin/M4lgAdmin.vue";

export default {
  name: "ancAppBar",

  components: {
    b1xs,
    b2sm,
    b3md,
    b4lg,
    b5xl,

    u4lg,
    m4lg,
    m4lgSottocategorie,
    m4lgAdmin,
    ancNews
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
    hlg: "84px",
    rcS: "rcS rcX rcLat rcLat_BC_Visitor",
    rcD: "rcD rcX rcLat rcLat_BC_Visitor",
    rcU: "rcS rcX rcLat rcLat_BC_Visitor",
    admin: false,
    admincommands: false,
    drawerSottocategoria: true
  }),

  methods: {
    gotoR(r) {
      // eslint-disable-next-line no-console
      console.log("AppBar rotta per...");
      this.$emit("gotoR", r);
    },

    adminCommandSwitch() {
      this.admincommands = !this.admincommands;
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
      if (x.requestUserIsSuper === true) {
        this.rcS = "rcS rcX rcLat rcLat_BC_Admin";
        this.rcD = "rcD rcX rcLat rcLat_BC_Admin";
        this.nbc = "#212121"; //dark-grey
        this.rcU = "rmvcolD rmH   rcLat_BC_Admin"; /*menu USER*/
        this.admin = true;
      } else {
        if (x.requestUserIsStaff === true) {
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

    /* Drawer Sotto Categoria */
    DSCset(state) {
      switch (state) {
        case "true":
          this.drawerSottocategoria = true;
          break;
        case "false":
          this.drawerSottocategoria = false;
          break;
        default:
          this.drawerSottocategoria = !this.drawerSottocategoria;
          break;
      }
    }
  },

  updated() {
    this.setcolor();
  },

  mounted() {
    this.setcolor();
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
.AncAppBarE {
  position: fixed;
  z-index: 2;
  height: 150px;
  width: 100%;
  padding-top: 6px;
  padding-bottom: 0px;
  text-align: auto;
  text-justify: auto;
}

/* ---------------------------------------------------------------------- */
/* MdS> 
*/
.r {
  /*.AncRowBarEst / ARBI */
  position: relative;
  z-index: 3;
  height: 70px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  text-justify: center;
  border-radius: 50px 50px 50px 50px;
}
.r_BC {
  background-color: rgb(
    4,
    11,
    46
  ) !important; /* AncColor Blue +6
  /*

  
  rgb(
    36,
    17,
    6
  )*/

  /* AncColor2
  
  /*background-color: #241518 !important;   */
  /*background-color: #2b2b29 !important;*/
  /*background-color: #241518 !important;*/
}
.r_BC--T {
  background-color: ORANGE !important;
}
/* ---------------------------------------------------------------------- */
.rmNews {
  /* ... comunicazioni ...*/
  position: absolute;
  top: 80px;
  z-index: 3;
  height: 100px;
  width: 100%;
  background-color: rgb(146, 0, 0) !important; /*test*/
}

/* ---------------------------------------------------------------------- */
/* MdS> 
*/
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
.rmH {
  position: relative;
  height: 600px;
}
.rmvrow {
  position: relative;
  z-index: 3;
  height: 10px;
  margin-left: 25px;
  margin-right: 25px;
  text-align: center;
  text-justify: center;
  border-radius: 0px 0px 50px 50px;
  background-image: url("/static/images/HomePageCarousel/dsc32.jpg");

  /*background-color: orange !important; /*test*/

  /*background-color: transparent !important;*/
  top: 70px; /*width: 578px; */
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
  z-index: 3;
  width: 100%;
  height: 95%;
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

.rmvcolD {
  margin-left: 0px;
  margin-right: 0px;
  opacity: 0.9;
  /* background-color: yellow !important; /*test*/
  /*background-color: transparent !important;*/
  border-radius: 0px 0px 25px 0px;
}
.rmvcolC {
  position: relative;
  z-index: 3;
  opacity: 0.9;
  /* background-color: transparent !important; */
  border-radius: 0px 0px 0px 648px;
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

.rcX {
  position: relative;
  z-index: 4;
  /*    per rcS - rcC - rcD  */
  height: 66px;
  text-justify: auto;
}
.rcLat {
  /*    add:  rcX rcLat_BC   */
  margin-top: 4px;
  margin-bottom: 1px;
}
.rcLat_BC {
  background-color: rgb(1, 4, 20) !important; /* Blue */
  /*  background-color: rgb(20, 9, 2) !important;*/
}
.rcLat_BC_Visitor {
  /*    EX:   .arbcs-Visitor    */
  background-color: rgb(1, 4, 20) !important; /* Blue */

  /*background-color: #1a0408 !important; */ /* Marrone */
  /*background-color: pink !important;*/
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
.rcS {
  /*    add:  rcX rcLat   */
  text-align: left;
  margin-left: 2px;
  margin-right: 0px;

  padding: 0px 8px 0px 8px; /*T-R-B-L*/

  border-radius: 48px 85px 0px 48px;
}
/*------------------------------------------------------------------------------------------------------*/
.rcD {
  /*    add:  rcX rcLat   */
  text-align: right;
  margin-left: 0px;
  margin-right: 2px;

  padding: 0px 8px 0px 8px; /*T-R-B-L*/

  border-radius: 85px 48px 48px 0px;
}
/*------------------------------------------------------------------------------------------------------*/
.rcC {
  /*    add:  rcX    */
  position: relative;
  z-index: 5;
  /*width: 368px; RIFERIMENTO*/
  padding: 0px 0px;
  text-align: center;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 4px;
  margin-bottom: 0px;
  border-radius: 0px 0px 0px 0px;
}
.rcC_BC {
  background-color: rgb(
    4,
    11,
    46
  ) !important; /* AncColor Blue +6  /*
  background-color: rgb(36, 17, 6) !important; /* Marrone */
}
.rcC_BC--T {
  background-color: salmon !important;
}
/*------------------------------------------------------------------------------------------------------*/
.rcCr {
  position: relative;
  z-index: 5;
  /*    add:  rcCr_BC       */
  /*    EX:   AncRowBarColccxRowInt */
  height: 64px;
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
  z-index: 6;
  text-justify: auto;
}
/*------------------------------------------------------------------------------------------------------*/
.rcCrcLat {
  /*    add:    rcCrcX  rcCrcLat_BC       */
  /*    per:    rcCrcS  / rcCrcD    */
}
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
  z-index: 5;
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

.sottocategorieList {
  position: absolute;

  background-color: transparent !important;
  height: 600px;
  width: 100%;
  border-radius: 0px 0px 0px 0px;
}

.sottocategorieListr1 {
  position: relative;
  background-color: transparent !important;
  height: 600px;
  border-radius: 0px 0px 0px 0px;
}

.sottocategorieListr2 {
  position: relative;
  height: 300px;
  border-radius: 0px 0px 0px 650px;
}

.sottocategorieListr3 {
  position: relative;
  text-align: left;
  /* background-color: green !important;*/
  height: 300px;
  border-radius: 0px 0px 0px 0px;
}
.m4lgSottocategorie {
  position: absolute;
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
/* -------------------------------------------------------------------- */
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
/* -------------------------------------------------------------------- */
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

  /* animation-delay: -2s; test ok*/
}
/* -------------------------------------------------------------------- */
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
/* -------------------------------------------------------------------- */
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
/* -------------------------------------------------------------------- */
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
</style>
