<template>
  <div>
    <!--  xs -->
    <v-col v-if="currentres == 'xs'" class="xsEl xsElMenu rcC_BC" cols="12">
      <m1xs></m1xs>
    </v-col>

    <v-col v-if="currentres == 'xs'" class="xsEl xsElUtente rcC_BC my-4" cols="12">
      <u1xs></u1xs>
    </v-col>

    <v-col v-if="currentres == 'xs'" class="xsEl xsElLingua rcC_BC my-4" cols="12">
      <!-- Language... -->
      <h3 style="color:white" v-show="drawerLeft && !languagesShow">Lingua corrente:</h3>
      <v-expand-x-transition>
        <v-btn
          class="mx-1"
          icon
          v-show="drawerLeft && !languagesShow"
          fab
          rounded
          style="background-color: transparent"
          @click="SDL"
        >
          <v-img class="mx-1 AncIconLang" large dark :src="lang.icona"></v-img>
        </v-btn>
      </v-expand-x-transition>

      <h3 style="color:white" v-show="drawerLeft && languagesShow">Seleziona:</h3>
      <v-btn
        v-show="drawerLeft && languagesShow"
        v-for="lang in languages"
        :key="lang.pk"
        class="mx-1 AncBtnLanguages"
        icon
        fab
        rounded
        @click="ScL(lang.code)"
      >
        <v-img class="mx-1 AncIconLang" large dark :src="lang.icona"></v-img>
      </v-btn>
    </v-col>
  </div>

  <!--  xs -->
</template>

<script>
import { apiService } from "@/common/api.service";
import router from "@/router";

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
  name: "menu1xs",

  components: {
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
/*XS Elementi menu  ********************************************************  */
.xsEl {
  position: relative;
  z-index: 3;
  opacity: 0.9;
}
.xsElMenu {
  border-radius: 50px 50px 80px 80px;
  height: 600px;
}
.xsElUtente {
  border-radius: 280px;
  height: 350px;
}
.xsElLingua {
  padding-top: 50px;
  border-radius: 280px;
  height: 200px;
}
/*XS Elementi menu  ********************************************************  */
</style>