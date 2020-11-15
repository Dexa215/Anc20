{% load l10n %}

  <template>
  <div class="SfBase">
    <v-row class="rT rT_lv rThMD rTbg2 mx-auto" v-show="drawerLeft"></v-row>
    <div class="SfSpazio home3SfShUp AncAppBar_BC">spazio Up home3md</div>

    <v-row justify="center" align="center" class="anchomerMD mx-auto">
      <!--sx-->
      <v-col cols="2" class="carcol carcolsx"></v-col>
      <!--cx-->
      <v-col cols="8" class="carcol carcolcx">
        <!---->
        <v-row>
          <v-col cols="12">
            <v-card class="pa-4 cardround" light>
              <!--  * -->
              <v-row dense class="row ma-2 pa-2" align="center" justify="center">
                <!--h3>Sei un collega in congedo e non ti sei ancora iscritto all'ANC?</h3-->
                <!--h3 class="font-weight-thin colorBlue"></h3-->
                <h5 class="colorBlue">{{lang.t[1].lista[6].t[1].text}}</h5>
                <br />
              </v-row>
              <!--  * -->
              <!--  * -->
              <v-row dense class="row ma-2 pa-2" align="center" justify="center">
                <v-img src="/static/images/Materiale/carrozza.png" max-width="250px"></v-img>
              </v-row>
              <!--  * -->
              <!--  * -->
              <v-row dense class="row ma-2 pa-2" align="center" justify="center">
                <h2 class="display-2 colorBlue">
                  <!--strong>E cosa aspetti, la carrozza?</strong-->
                  <strong>{{lang.t[1].lista[6].t[2].text}}</strong>
                </h2>
              </v-row>
              <!--  * -->
              <!--  * -->
              <v-row dense class="row ma-2 pa-2" align="center" justify="center">
                <!--h3>Bastano 2 foto formato tessera. Facile no?</h3-->
              </v-row>
              <v-row dense class="row ma-2 pa-2" align="center" justify="center">
                <!--come fare-->
                <!--raised outlined-->
                <v-btn
                  @click="gotoR('/tesseramentoprassi')"
                  elevation="2"
                  rounded
                  color="success"
                >{{lang.t[1].lista[6].t[3].text}}</v-btn>
              </v-row>
              <!--  * -->
            </v-card>
          </v-col>
        </v-row>
        <!-- row 00 -->
        <!--cx-->
      </v-col>
      <!--dx-->
      <v-col cols="2" class="carcol carcoldx"></v-col>
    </v-row>
    <v-parallax class="SfParallax" src="/static/images/bg/bg8.jpg" height="650"></v-parallax>
    <!-- <span>spiegone:</span>-->
    <span v-if="CS==0">{{ categorie[(C/10)-1].descrizione }}</span>
    <span v-else>{{ categorie[(C/10)-1].sottocategorie[(CS-C)-1].descrizione }}</span>
    <!--<div class="SfImmagine">sfondo Immagine</div>-->
    <div class="container-fluid text-center">
      <AncIntestazioneFine :C="C" :CS="CS" :categorie="categorie" @gotoR="gotoR"></AncIntestazioneFine>
    </div>
    <div class="SfSpazio home3SfShDown AncAppBar_BC">spazio Down</div>
    <!--/* *** */-->
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
  name: "links3md",

  components: {
    //ancEventsPast,
    //ancEventsFuture,
    AncIntestazioneHome,
    AncIntestazioneFine,
    AncCard,
  },

  props: {},

  data() {
    return {
      scr: "",
      focusOn: false,
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

    // Events ...
    getEventsPast() {
      this.$store.dispatch("getEventsPast");
    },
    getEventsFuture() {
      this.$store.dispatch("getEventsFuture");
    },
    // change href with link
    v(link) {
      this.$store.dispatch("vola", link);
    },
  },
  created() {
    console.log("home 5 xl oncreate --> start");
  },
  updated() {},

  mounted() {},
};
</script>

<style media="screen" scoped>
.home3SfShUp {
  height: 150px;
}
.home3SfShDown {
  height: 78px;
}
.anchomerMD {
  position: absolute;
  z-index: 5;
  height: 600px;
  width: 100%;
  background-color: transparent;
}
.cardround {
  border-radius: 25px; /*TL-TR-BR-BL*/
}
.rT_lv {
  /* row Transparent level  */
  position: absolute;
  z-index: 6;
}
</style>