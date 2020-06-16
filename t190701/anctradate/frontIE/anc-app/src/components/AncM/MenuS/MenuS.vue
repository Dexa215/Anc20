<template>
  <div class="menuS">
    <!-- div BLOCCO MENU -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <!--  -->
      <v-row v-show="drawerLeft" class="rmvrow" text-align="center">
        <!-- menu sottocategorie... -->

        <v-col class="rmH0" cols="4"></v-col>

        <!--  finestra comandi amministatore **************************************************** -->
        <transition
          name="custom-classes-transition2"
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutLeft"
        >
          <v-col
            v-show="this.$store.getters.requestUserIsSuper & admincommands"
            class="rmvcolSadmin rmH"
            cols="12"
          >
            <!-- Admin Menu -->
            <div v-if="currentres == 'xs'"></div>
            <div v-else-if="currentres == 'sm'"></div>
            <div v-else-if="currentres == 'md'"></div>
            <div v-else-if="currentres == 'lg'">
              <m4lgAdmin></m4lgAdmin>
            </div>
            <div v-else-if="currentres == 'xl'"></div>
            <!-- / Admin Menu -->
          </v-col>
        </transition>

        <!--  finestra USER dati **************************************************** -->
        <!-- User Menu -->

        <!-- xs -->
        <!--
        <v-col v-if="currentres == 'xs'" class="rmvcolC1 rmH1 rcC_BC" cols="4">
          <div style="color:white">
            <u1xs></u1xs>
          </div>
        </v-col>
        -->
        <v-col v-if="currentres == 'xs'" class="rmvcolC1-m rmH1-m rcC_BC">
          <m1xs></m1xs>
        </v-col>

        <v-col v-if="currentres == 'xs'" class="rmvcolC1 rmH1 rcC_BC my-4" cols="12">
          <u1xs></u1xs>
        </v-col>

        <v-col v-if="currentres == 'xs'" class="rmvcolC1-l rmH1-l rcC_BC my-4" cols="12">
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

        <v-col v-else-if="currentres == 'sm'" class="rmvcolC2 rmH rcC_BC" cols="4">
          <div>
            <u2sm></u2sm>
          </div>
        </v-col>

        <v-col v-else-if="currentres == 'md'" class="rmvcolC3 rmH rcC_BC" cols="4">
          <div>
            <u3md></u3md>
          </div>
        </v-col>

        <v-col v-else-if="currentres == 'lg'" class="rmvcolC4 rmH rcC_BC" cols="4">
          <div>
            <u4lg></u4lg>
          </div>
        </v-col>
        <v-col v-if="currentres == 'lg'" :class="rcU">
          <m4lg></m4lg>
        </v-col>

        <v-col v-else-if="currentres == 'xl'" class="rmvcolC5 rmH rcC_BC" cols="4">
          <!--<u4lg @adminCommandSwitch="adminCommandSwitch" @gotoR="gotoR"></u4lg>-->
          <div>
            <u5xl></u5xl>
          </div>
        </v-col>
      </v-row>
    </transition>
    <!-- ****************************************************************** -->
  </div>
  <!-- @@@ -->
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
  name: "menuS",

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
.avatar {
  z-index: 5;
  transform: scale(1, 1);
}
.avatar:hover {
  transform: scale(1.1, 1.1);
}

/*  xs  */
.rmH1 {
  position: relative;
  height: 350px;
}
.rmvcolC1 {
  position: relative;
  z-index: 3;
  opacity: 0.9;
  border-radius: 280px 280px 50px 50px;
}
.rmH1-m {
  position: relative;
  height: 700px;
}
.rmvcolC1-m {
  position: relative;
  z-index: 3;
  opacity: 0.9;
  border-radius: 50px 50px 250px 250px;
}
.rmH1-l {
  position: relative;
  height: 200px;
}
.rmvcolC1-l {
  position: relative;
  z-index: 3;
  opacity: 0.9;
  padding-top: 30px;
  border-radius: 100px;
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
.rmvcolC4 {
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
</style>