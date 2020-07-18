<template>
  <div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <v-row v-show="drawerLeft" class="m3r" text-align="center">
        <!-- /*lg*/ system... -->
        <v-col class="rmH3 m3cL" cols="4"></v-col>
        <!-- user -->
        <v-col class="rmH3 m3cC rcC_BC" cols="4">
          <u3md></u3md>
        </v-col>
        <!-- cats menu -->
        <v-col class="rmH3 m3cR" cols="4">
          <div :class="rcU">
            <m3md></m3md>
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

/* Transitions */

/*User Menu*/

import u3md from "@/components/AncM/User/U3md.vue";

/*Categorie*/

import m3md from "@/components/AncM/Cat/M3md.vue";

import m4lgSottocategorie from "@/components/AncM/CatSotto/M4lgSottocategorie.vue";
import m4lgAdmin from "@/components/AncM/Admin/M4lgAdmin.vue";

export default {
  name: "menu3md",

  components: {
    /*user*/
    u3md,
    /*cat*/
    m3md,
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
.rmH3 {
  position: relative;
  z-index: 7;
  height: 420px;
}

.m3r {
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

.m3cL {
  /*menu 4 - lg - Column Left - Servizio*/
  position: relative;
  height: 10px;
  /* srv... */
  /*height: 400px;*/
  /*background-color: cyan !important;*/
}
.m3cC {
  /*menu 4 - lg - Column Central - User*/
  background-color: grey !important;
  border-radius: 0px 0px 0px 450px;
}
.m3cR {
  position: relative;
  z-index: 3;
  /*menu 4 - lg - Column Right - Menu Categorie */
  background-color: black !important;
  border-radius: 0px 0px 25px 0px;
  padding: 0px;
}
</style>