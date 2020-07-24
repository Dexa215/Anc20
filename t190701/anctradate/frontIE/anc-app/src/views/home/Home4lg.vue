{% load l10n %}

  <template>
  <div class="SfBase">
    <v-row class="AncTrasparenza" v-show="drawerLeft"></v-row>
    <div class="SfSpazio SfShUp AncAppBar_BC">spazio Up</div>
    <v-row
      justify="center"
      align="center"
      class="anchomer mx-auto"
      style="height:600px; width:100%; background-color:transparent; "
    >
      <!--sx-->
      <carP :Pevents="Pevents" :Pnext="Pnext" :PloadingEvents="PloadingEvents"></carP>
      <!--sx-->

      <!--cx-->
      <ancClock></ancClock>
      <!--cx-->

      <!--dx-->
      <carF
        :Fevents="Fevents"
        :Fnext="Fnext"
        :FloadingEvents="FloadingEvents"
        clFcard="grey lighten-4"
        clFtitle="grey lighten-4 "
        clFevent="grey lighten-3 "
        clFeventInt="grey lighten-4 "
      ></carF>
      <!--dx-->
    </v-row>
    <!--
      <v-col cols="4" style="height:500px; background-color:blue; "></v-col>
    <dx-->

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
import carP from "@/components/AncCarousels/Past/Car.vue";
import carF from "@/components/AncCarousels/Future/Car.vue";
import ancClock from "@/components/AncObjects/AncClock.vue";

import m4lgSottocategorie from "@/components/AncM/CatSotto/M4lgSottocategorie.vue";
import m4lgAdmin from "@/components/AncM/Admin/M4lgAdmin.vue";

export default {
  name: "home4lg",

  components: {
    ancEventsPast,
    ancEventsFuture,
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
      focusOn: false,

      // * EVIDENZA
      Eevents: [],
      Enext: null,
      EloadingEvents: false,

      //Computed: >>> Titolone: null,

      // * PAST
      Pevents: [],
      Pnext: null,
      PloadingEvents: false,
      // * FUTURE
      Fevents: [],
      Fnext: null,
      FloadingEvents: false
    };
  },

  computed: {
    Titolone() {
      return this.$store.getters.get_Titolone;
    },

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
    getEvidenza() {
      var x;
      let endpoint = "api/evidenza/";
      if (this.Enext) {
        endpoint = this.Pnext;
      }
      this.EloadingEvents = true;
      apiService(endpoint).then(data => {
        console.log(data.results);
        this.Eevents.push(...data.results);
        this.EloadingEvents = false;
        if (data.next) {
          this.Enext = data.next;
        } else {
          this.Enext = null;
        }

        //ciclo per creare titolo in evidenza...
        if (this.Eevents.length == 0) {
          this.Titolone = "";
        } else {
          this.Titolone = "IN EVIDENZA: ";
          for (x of this.Eevents) {
            console.log(x.title);
            this.Titolone = this.Titolone + " - " + x.title + "   ";
          }
        }
      });
    },

    getEvents() {
      let endpoint = "api/events/";
      if (this.next) {
        endpoint = this.next;
      }
      this.loadingEvents = true;
      apiService(endpoint).then(data => {
        console.log(data.results);

        this.events.push(...data.results);
        this.loadingEvents = false;
        if (data.next) {
          this.next = data.next;
        } else {
          this.next = null;
        }
      });
    },

    getEventsPast() {
      let endpoint = "api/events/crud/listPast/";
      if (this.Pnext) {
        endpoint = this.Pnext;
      }
      this.PloadingEvents = true;
      apiService(endpoint).then(data => {
        console.log(data.results);
        this.Pevents.push(...data.results);
        this.PloadingEvents = false;
        if (data.next) {
          this.Pnext = data.next;
        } else {
          this.Pnext = null;
        }
      });
    },

    getEventsFuture() {
      let endpoint = "api/events/crud/listFuture/";
      if (this.Fnext) {
        endpoint = this.Fnext;
      }
      this.FloadingEvents = true;
      apiService(endpoint).then(data => {
        console.log(data.results);
        this.Fevents.push(...data.results);
        this.FloadingEvents = false;
        if (data.next) {
          this.Fnext = data.next;
        } else {
          this.Fnext = null;
        }
      });
    },

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
  created() {
    console.log("home oncreate --> start");

    //    this.getRequestUser();
    //    this.getEvents();

    //DA RIPRISTINARE

    this.getEvidenza();
    this.getEventsPast();
    this.getEventsFuture();
    this.clock();
    this.setMyPar();
  },

  updated() {},

  mounted() {}
};
</script>

<style media="screen">
.anchome {
  background-color: blue !important;
  background-image: url("~@/assets/images/bg/bg7.jpg");
  opacity: 0.3;
}
.SfParallax {
  /* Sfondo Parallax */
  position: relative;
  z-index: 1;
  opacity: 0.15;
  height: 600px;
  width: 100%;
}
.anchomer {
  position: absolute;
  z-index: 5;
}

.home-view {
  position: relative;
  z-index: 1;
}

.author-name {
  font-weight: bold;
  color: #dc3545;
}
.event-link {
  font-weight: bold;
  color: black;
}
.event-link:hover {
  color: cadetblue !important;
  text-decoration: none;
}
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}

.imgop {
  /*opacity: 0.4;*/
}

.bg {
  background-image: url("~@/assets/images/bg/bg8.jpg");
  opacity: 0.3;
  /*
  background-image: url("../assets/images/bg/bg1.jpg");
  background-image: url("~@/assets/images/bg/bg8.jpg");
  */
}

/* -------------------------------------------------------------------- 2020 04 22 */

.q {
  height: 50px;
}

.qd2 {
  /*finestra contenuto*/
  position: absolute;
  top: 300px;
  z-index: 4;
  opacity: 1;

  width: 80%;
}
.qd3 {
  position: relative;
  z-index: 3;
  opacity: 1;
  background-color: green;
  width: 100px;
}
.qd4 {
  position: relative;
  z-index: 4;
  opacity: 1;
  background-color: cyan;
  width: 100px;
}

.qdcrhome {
  position: absolute;
  top: 140px;
  z-index: 4;
  opacity: 1;
  width: 100%;
  height: 100%;
  background-color: yellow;
}
.qdcchome {
  position: relative;
  width: 100px;
  height: 100%;
  /* background-color: orange;*/
  background-color: transparent;
}
</style>
