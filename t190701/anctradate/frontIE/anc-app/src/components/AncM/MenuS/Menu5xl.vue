<template>
  <div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInDownBig"
      leave-active-class="animated fadeOutUp"
    >
      <v-row v-show="drawerLeft" class="m5r" text-align="center">
        <!-- /*xl*/ system... -->
        <v-col class="rmH5 m5cL" cols="4"></v-col>
        <!-- user -->
        <v-col class="rmH5 m5cC rcC_BC" cols="4">
          <u5xl></u5xl>
        </v-col>
        <!-- cats menu -->
        <v-col class="rmH5 m5cR" cols="4">
          <div :class="rcU">
            <m5xl></m5xl>
          </div>
        </v-col>
        <!-- admin commands -->
        <m4lgAdmin></m4lgAdmin>
        <!-- admin commands -->
      </v-row>
    </transition>
  </div>
</template>

<script>
import { apiService } from "@/common/api.service";
import router from "@/router";

import b5xl from "@/components/AncAppBars/B5xl.vue";
/*User Menu*/
import u5xl from "@/components/AncM/User/U5xl.vue";
/*Categorie*/
import m5xl from "@/components/AncM/Cat/M5xl.vue";

import m4lgSottocategorie from "@/components/AncM/CatSotto/M4lgSottocategorie.vue";
import m4lgAdmin from "@/components/AncM/Admin/M4lgAdmin.vue";

export default {
  name: "menu5xl",

  components: {
    b5xl,
    /*user*/
    u5xl,
    /*cat*/
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
.rmH5 {
  position: relative;
  z-index: 7;
  height: 740px;
}

.rmvcolC4 {
  position: relative;
  z-index: 3;
  opacity: 0.9;
  /* background-color: transparent !important; */
  border-radius: 0px 0px 0px 648px;
}
.m5r {
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

.m5cL {
  /*menu 4 - lg - Column Left - Servizio*/
  position: relative;
  /*height: 10px;*/
  /* srv... */
  /*height: 400px;*/
  /*background-color: cyan !important;*/
}
.m5cC {
  /*menu 4 - lg - Column Central - User*/
  background-color: grey !important;
  border-radius: 0px 0px 0px 450px;
}
.m5cR {
  position: relative;
  z-index: 3;
  /*menu 5 - xl - Column Right - Menu Categorie */
  background-color: black !important;
  border-radius: 0px 0px 25px 0px;
  padding: 0px;
}
</style>