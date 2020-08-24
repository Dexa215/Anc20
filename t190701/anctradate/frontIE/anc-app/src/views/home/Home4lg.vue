{% load l10n %}

  <template>
  <div class="SfBase">
    <v-row class="AncTrasparenza" v-show="drawerLeft"></v-row>
    <div class="SfSpazio home4SfShUp AncAppBar_BC">spazio Up</div>
    <v-row
      justify="center"
      align="center"
      class="anchomer mx-auto"
      style="height:600px; width:100%; background-color:transparent; "
    >
      <!--sx-->
      <v-col cols="4" class="carcol carcolsx">
        <carP></carP>
      </v-col>
      <!--cx-->
      <v-col cols="4" class="carcol carcolcx">
        <ancClock></ancClock>
      </v-col>
      <!--dx-->
      <v-col cols="4" class="carcol carcoldx">
        <carF></carF>
      </v-col>
    </v-row>

    <v-parallax class="SfParallax" src="/static/images/bg/bg8.jpg" height="650"></v-parallax>
    <!-- <span>spiegone:</span>-->
    <span v-if="CS==0">{{ categorie[(C/10)-1].descrizione }}</span>
    <span v-else>{{ categorie[(C/10)-1].sottocategorie[(CS-C)-1].descrizione }}</span>
    <!--<div class="SfImmagine">sfondo Immagine</div>-->
    <div class="container-fluid text-center">
      <AncIntestazioneFine :C="C" :CS="CS" :categorie="categorie" @gotoR="gotoR"></AncIntestazioneFine>
    </div>
    <div class="SfSpazio home4SfShDown AncAppBar_BC">spazio Down</div>
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
  name: "home4lg",

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
    console.log("home oncreate --> start");
    //this.getEventsPast(); // !!store - moduleE
    //this.getEventsFuture(); // !!store - moduleE
    //this.getRequestUser();
    //this.getEvents();
    //DA RIPRISTINARE
    //this.getEvidenza();
    //this.getEventsPast();
    //this.getEventsFuture();
    //this.clock();
    //this.setMyPar();
  },

  updated() {
    //this.getEventsPast(); // !!store - moduleE
    //this.getEventsFuture(); // !!store - moduleE
  },

  mounted() {}
};
</script>

<style media="screen" scoped>
.home4SfShUp {
  height: 350px;
  background-color: transparent;
}
.home4SfShDown {
  height: 78px;
}
</style>


      <!--
        :Pevents="Pevents"
        :Pnext="Pnext"
        :PloadingEvents="PloadingEvents"
      -->

      <!--
        :Fevents="Fevents"
        :Fnext="Fnext"
        :FloadingEvents="FloadingEvents"
      -->

      <!-- ex data
            // * EVIDENZA
      //Computed: >>> Eevents: [],
      //Computed: >>> Enext: null,
      //Computed: >>> EloadingEvents: false,
      //Computed: >>> Titolone: null,
      // * PAST
      //Computed: >>> Pevents: [],
      //Computed: >>> Pnext: null,
      //Computed: >>> PloadingEvents: false,
      // * FUTURE
      //Computed: >>> Fevents: [],
      //Computed: >>> Fnext: null,
      //Computed: >>> FloadingEvents: false
      -->

      <!--
          /*
    Titolone() {
      return this.$store.getters.get_Titolone;
    },
    */

    // * EVIDENZA
    Eevents() {
      return this.$store.getters.get_Eevents;
    },
    Enext() {
      return this.$store.getters.get_Enext;
    },
    EloadingEvents() {
      return this.$store.getters.get_EloadingEvents;
    },
    -->

    <!--
        // * PAST
    Pevents() {
      return this.$store.getters.get_Pevents;
    },
    Pnext() {
      return this.$store.getters.get_Pnext;
    },
    PloadingEvents() {
      return this.$store.getters.get_PloadingEvents;
    },

    // * FUTURE
    Fevents() {
      return this.$store.getters.get_Fevents;
    },
    Fnext() {
      return this.$store.getters.get_Fnext;
    },
    FloadingEvents() {
      return this.$store.getters.get_FloadingEvents;
    },
    -->

