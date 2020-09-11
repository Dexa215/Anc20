<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeInDownBig"
    leave-active-class="animated fadeOutUp"
  >
    <!--enter-active-class="animated fadeInDown"
    -->
    <v-row v-show="drawerLeft" class="m4r" text-align="center">
      <!-- /*lg*/ system... -->
      <v-col class="rmH4 m4cL" cols="4"></v-col>
      <!-- user -->
      <v-col class="rmH4 m4cC rcC_BC" cols="4">
        <u4lg></u4lg>
      </v-col>
      <!-- cats menu -->
      <v-col class="rmH4 m4cR" cols="4">
        <div :class="rcU">
          <m4lg></m4lg>
        </div>
      </v-col>
      <!-- admin commands -->
      <m4lgAdmin></m4lgAdmin>
      <!-- admin commands -->
    </v-row>
  </transition>
</template>

<script>
import { apiService } from "@/common/api.service";
import router from "@/router";

import b1xs from "@/components/AncAppBars/B1xs.vue";
import b2sm from "@/components/AncAppBars/B2sm.vue";
import b3md from "@/components/AncAppBars/B3md.vue";
import b4lg from "@/components/AncAppBars/B4lg.vue";
import b5xl from "@/components/AncAppBars/B5xl.vue";
/* Transitions */

/*User Menu*/
import u1xs from "@/components/AncM/User/U1xs.vue";
import u2sm from "@/components/AncM/User/U2sm.vue";
import u3md from "@/components/AncM/User/U3md.vue";
import u4lg from "@/components/AncM/User/U4lg.vue";
import u5xl from "@/components/AncM/User/U5xl.vue";
/*Categorie*/
import m1xs from "@/components/AncM/Cat/M1xs.vue";
import m2sm from "@/components/AncM/Cat/M2sm.vue";
import m3md from "@/components/AncM/Cat/M3md.vue";
import m4lg from "@/components/AncM/Cat/M4lg.vue";
import m5xl from "@/components/AncM/Cat/M5xl.vue";

import m4lgSottocategorie from "@/components/AncM/CatSotto/M4lgSottocategorie.vue";
import m4lgAdmin from "@/components/AncM/Admin/M4lgAdmin.vue";

export default {
  name: "menu4lg",
  components: {
    b1xs,
    b2sm,
    b3md,
    b4lg,
    b5xl,

    /*user*/
    u1xs,
    u2sm,
    u3md,
    u4lg,
    u5xl,

    /*cat*/
    m1xs,
    m2sm,
    m3md,
    m4lg,
    m5xl,

    m4lgSottocategorie,
    m4lgAdmin
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
    }
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
    }
  },
  updated() {},
  mounted() {}
};
</script>
<style media="screen">
.rmH4 {
  position: relative;
  z-index: 7;
  height: 540px;
}

.m4r {
  position: relative;
  height: 0px;
  z-index: 7;
  opacity: 0.96;
  /* background-color: transparent !important; */
  border-radius: 0px 0px 5px 5px;
  /*inizia row sotto la barra*/
  top: 80px; /*width: 578px; */
  margin-left: 26px;
  margin-right: 26px;

  padding-left: 0px;
  padding-right: 0px;

  background-color: orangered !important;
}

.m4cL {
  /*menu 4 - lg - Column Left - Servizio*/
  position: relative;
  height: 10px;
  /* srv... */
  /*height: 400px;*/
  /*background-color: cyan !important;*/
}
.m4cC {
  /*menu 4 - lg - Column Central - User*/
  background-color: grey !important;
  border-radius: 0px 0px 0px 450px;
}
.m4cR {
  position: relative;
  z-index: 3;
  /*menu 4 - lg - Column Right - Menu Categorie */
  background-color: black !important;
  border-radius: 0px 0px 25px 0px;
  padding: 0px;
}
</style>