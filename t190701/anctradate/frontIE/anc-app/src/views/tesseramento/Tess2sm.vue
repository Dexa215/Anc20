{% load l10n %}

  <template>
  <div class="SfBase">
    <v-row class="AncTrasparenzaSM mx-auto" v-show="drawerLeft"></v-row>
    <div class="SfSpazio home2SfShUp AncAppBar_BC">spazio Up</div>

    <v-row justify="center" align="center" class="anchomerSM mx-auto">
      <!--sx-->
      <v-col cols="1" class="carcol carcolsx"></v-col>
      <!--cx-->
      <v-col cols="10" class="carcol carcolcx2sm">
        <div class="links2smTitle">
          <span>{{lang.t[1].lista[7].t[0].text}}</span>
        </div>
        <!-- LISTA TESS-->
        <div>test tesseramento SM</div>
        <!-- LISTA TESS-->
      </v-col>
      <!--dx-->
      <v-col cols="1" class="carcol carcoldx"></v-col>
    </v-row>

    <v-parallax class="SfParallax" src="/static/images/bg/bg8.jpg" height="650"></v-parallax>

    <!-- <span>spiegone:</span>-->

    <span v-if="CS==0">{{ categorie[(C/10)-1].descrizione }}</span>
    <span v-else>{{ categorie[(C/10)-1].sottocategorie[(CS-C)-1].descrizione }}</span>

    <!--
    <div class="SfImmagine">sfondo Immagine</div>
    -->
    <div class="container-fluid text-center">
      <AncIntestazioneFine :C="C" :CS="CS" :categorie="categorie" @gotoR="gotoR"></AncIntestazioneFine>
    </div>
    <div class="SfSpazio SfShDown AncAppBar_BC">spazio Down</div>

    <!--
/* ********************************************************************************************************** */
    -->
  </div>
</template>

<script>
import { apiService } from "@/common/api.service";
import router from "@/router";

/*home.vue*/
import ancEventsPast from "@/components/AncEventsPast";
import ancEventsFuture from "@/components/AncEventsFuture";
import AncIntestazioneHome from "@/components/AncIntestazioneHome.vue";
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import AncCard from "@/components/AncCard.vue";
import m4lgSottocategorie from "@/components/AncM/CatSotto/M4lgSottocategorie.vue";
import m4lgAdmin from "@/components/AncM/Admin/M4lgAdmin.vue";

export default {
  name: "link2sm",

  components: {
    ancEventsPast,
    ancEventsFuture,
    AncIntestazioneHome,
    AncIntestazioneFine,
    AncCard,
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
    // change href with link
    v(link) {
      this.$store.dispatch("vola", link);
    },
  },
  updated() {},
  mounted() {},
};
</script>

<style media="screen">
.home2SfShUp {
  height: 150px;
  background-color: transparent;
}
.home2SfShDown {
  height: 78px;
}
.anchomerSM {
  position: absolute;
  /*relative;*/
  z-index: 5;
  height: 600px;
  width: 100%;
  background-color: transparent;
}
.anchomerSMnext {
  position: relative;
  z-index: 5;
  height: 600px;
  width: 100%;
  background-color: transparent;
}
.AncTrasparenzaSM {
  position: absolute;
  z-index: 6;
  background-color: rgb(44, 3, 12) !important;
  height: 3000px;
  width: 100%;
  opacity: 0.7;
}

.carcolcx2sm {
  background-color: transparent;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 2px;
}
</style>
