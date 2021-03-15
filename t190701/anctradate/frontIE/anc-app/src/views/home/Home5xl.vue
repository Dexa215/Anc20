{% load l10n %}

<template>
  <div class="SfBase">
    <h1></h1>
    <v-row class="rT rT_lv rThXL rTbg2 mx-auto" v-show="drawerLeft"></v-row
    ><!--menu/txp-->
    <!--rr-->
    <v-parallax
      class="SfParallax"
      height="850"
      src="/static/images/bg/bg8.jpg"
    ></v-parallax>
    <v-row class="r_main r_main_h_LG mx-auto" justify="start" align="start"
      ><!--rr-->
      <!--sx-->
      <v-col cols="4" class="carcol carcolsx">
        <carP></carP>
      </v-col>
      <!--cx-->
      <v-col cols="4" class="carcol carcolcx">
        <ancClock></ancClock>
        <AncIntestazioneFine></AncIntestazioneFine>
        <div class="r_main_hsDown_LG">spazio Down lg</div>
      </v-col>
      <!--dx-->
      <v-col cols="4" class="carcol carcoldx">
        <carF></carF>
      </v-col>
    </v-row>
    <div
      class="container-fluid text-center"
      style="background-color:transparent "
    >
      <span v-if="CS == 0">{{ categorie[C / 10 - 1].descrizione }}</span>
      <span v-else>{{
        categorie[C / 10 - 1].sottocategorie[CS - C - 1].descrizione
      }}</span>
    </div>
  </div>
</template>

<script>
import { apiService } from "@/common/api.service";
import router from "@/router";

/*home.vue*/
//import ancEventsPast from "@/components/AncEventsPast";
//import ancEventsFuture from "@/components/AncEventsFuture";
import AncIntestazioneHome from "@/components/AncIntestazioneHome.vue";
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import AncCard from "@/components/AncCard.vue";
import carP from "@/components/AncCarousels/Past/Car.vue";
import carF from "@/components/AncCarousels/Future/Car.vue";
import ancClock from "@/components/AncObjects/AncClock.vue";

import m4lgSottocategorie from "@/components/AncM/CatSotto/M4lgSottocategorie.vue";
import m4lgAdmin from "@/components/AncM/Admin/M4lgAdmin.vue";

export default {
  name: "home5xl",
  components: {
    //ancEventsPast,
    //ancEventsFuture,
    AncIntestazioneHome,
    AncIntestazioneFine,
    AncCard,
    carP,
    carF,
    ancClock
  },
  props: {},
  data() {
    return {
      scr: "",
      focusOn: false
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
    },

    // Events ...
    getEventsPast() {
      this.$store.dispatch("getEventsPast");
    },
    getEventsFuture() {
      this.$store.dispatch("getEventsFuture");
    }
  },
  created() {
    console.log("home 5 xl oncreate --> start");
  },
  updated() {
    //this.getEventsPast(); // !!store - moduleE
    //this.getEventsFuture(); // !!store - moduleE
  },
  mounted() {}
};
</script>

<style media="screen" scoped>
/*20201204*/
/*general...*/
.rT_lv {
  position: absolute;
  z-index: 6;
} /*Row semi-Transparent level on MENU */
.SfParallax {
  position: absolute;
  z-index: 1;
  opacity: 0.15;
  width: 100%;
}
.r_main {
  position: absolute;
  z-index: 5;
  opacity: 1;
  background-color: transparent;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.cx_main {
  opacity: 1;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
}
.card_main {
  opacity: 0.8;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 45px;
}

/*responsive...*/
.r_main_h_LG {
  margin-top: 150px;
  height: 600px;
}
.r_main_hsUp_LG {
  height: 150px;
}
.r_main_hsDown_LG {
  height: 100px;
}
/**/
.Anc_BC_BlueDark {
  background-color: rgb(1, 4, 20);
  color: blanchedalmond;
}
</style>
