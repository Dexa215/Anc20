{% load l10n %}

  <template>
  <div class="SfBase">
    <v-row class="AncTrasparenza" v-show="drawerLeft"></v-row>
    <div class="SfSpazio SfShUp AncAppBar_BC">spazio Up OLD</div>
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
import { apiService } from "../common/api.service";
import router from "../router";
import ancEventsPast from "../components/AncEventsPast";
import ancEventsFuture from "../components/AncEventsFuture";
import AncIntestazioneHome from "@/components/AncIntestazioneHome.vue";
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import AncCard from "@/components/AncCard.vue";

import carP from "@/components/AncCarousels/Past/Car.vue";
import carF from "@/components/AncCarousels/Future/Car.vue";

import ancClock from "@/components/AncObjects/AncClock.vue";

//import ancEventsPreview     from '../components/AncEventsPreview';

//import HelloWorld           from '../components/HelloWorld';
//import NavbarComponentDark  from '../components/NavbarDark';

export default {
  name: "home",

  components: {
    ancEventsPast,
    ancEventsFuture,
    AncIntestazioneHome,
    AncIntestazioneFine,
    AncCard,
    carP,
    carF,
    ancClock

    //  ancEventsPreview
    //  NavbarComponentDark
    //  HelloWorld
  },

  props: {
    requestUser: { type: String },
    rvt: { type: Number },
    evidenza: { type: String },

    categorie: { type: Array },
    C: { type: Number },
    CS: { type: Number },

    drawerLeft: { type: Boolean }
  },

  data() {
    return {
      scr: "",
      focusOn: false,

      // * EVIDENZA
      Eevents: [],
      Enext: null,
      EloadingEvents: false,
      Titolone: null,

      // * PAST
      Pevents: [],
      Pnext: null,
      PloadingEvents: false,
      // * FUTURE
      Fevents: [],
      Fnext: null,
      FloadingEvents: false,

      d: null,
      date: null,
      year: null,
      month: null,
      monthArr: null,
      displaydate: null,
      clF: String,
      clP: String,

      menuCat: "Home",
      menuSubCat: "Homepage",

      intMsg: "Anc Tradate",
      intMsgSubH: "Homepage",
      intFMsg: "Anc Tradate F",
      intFMsgSubH: "Homepage F",

      linksFP: [
        { descrizione: "Archivio Eventi", link: "archivio/" },
        { descrizione: "Agenda", link: "agenda/" }
      ]
    };
  },

  methods: {
    setMyPar() {
      let myparam = {
        Ccurrent: 10,
        CScurrent: 0
      };
      this.$emit("spMC", myparam); //spMC -- > sAVE pARAMETER / menu Cat
    },
    /*
    clock() {
      this.d = new Date();
      this.date = this.d.getDate();
      this.year = this.d.getFullYear();
      this.month = this.d.getMonth();
      this.monthArr = [
        "January",
        "February",
        "March",
        "April",
        "Maggio",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      this.month = this.monthArr[this.month];

      this.displaydate = this.date + " " + this.month + ", " + this.year;
      //            document.getElementById("date").innerHTML=this.date+" "+this.month+", "+this.year;
    },
*/
    getEvidenza() {
      var x;
      let endpoint = "api/evidenza/";
      if (this.Enext) {
        endpoint = this.Enext;
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

    /*
    getRequestUser() {
      let endpoint = "api/profiles/getcurrentuser/";
      apiService(endpoint).then(data => {
        console.log("chiamata rest... user:", data);
        console.log("chiamata rest... user:", data.us.name);
        //              this.requestUser = data.us.name;
      });
    },
    setRequestUser() {
      this.requestUser = window.localStorage.getItem("username");
    },
*/
    gotoR(r) {
      console.log("APP gotoR", r);
      this.$store.dispatch("gotoR", r);
    }

    /*old
    gotoR(r) {
      console.log("Home rotta per...", r);
      this.$emit("gotoR", r);
    }
    */
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
  updated() {
    this.clock();
    //    this.getRequestUser();
  }
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

<!--
<v-parallax
    height="300"
    src="../assets/images/bg/bg1.jpg"
></v-parallax>
-->


        <!-- data oggi 555555555555555555555555555555555555555555555555555555555555  -->
        <!--
            <v-row class="todayCircle" align="center" justify="center">
            <v-card
              class="mx-auto my-4 text-center ma-2 grey lighten-5"
              light
              max-width="500"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline ma-2"></div>
                  <v-list-item-subtitle>OGGI...</v-list-item-subtitle>
                  <v-list-item-title id="date" class="headline mb-1">
                    <div>{{ displaydate }}</div>

                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
        -->
        <!--              
                  {{ date }} {{month}} {{year}} 
        -->
        <!-- data oggi 555555555555555555555555555555555555555555555555555555555555  -->

        <!--
      <v-col
        cols="3"
        style="height:500px; background-color:transparent;"
        align="center"
        justify="center"
      >
        <!-- data oggi 555555555555555555555555555555555555555555555555555555555555  -->
<!--        
        <v-row class="todayCircle my-auto" align="center" justify="center">
          <v-col cols="12" class="todayCircleText">
            <v-row align="end">
              <v-col cols="12" class="todaylineup headline mt-0">Oggi...</v-col>
            </v-row>
            <v-row align="start">
              <v-col cols="12" class="todaylinedown headline mt-0">{{ displaydate }}</v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
-->


<!--
    <v-row class="qdcrhome" justify="center" align="center" style="background-color: transparent">
      <v-col class="qdcchome" cols="12">
        <v-row align="center" justify="center" style="background-color:transparent !important">
          <v-col></v-col>
          <!--
          <v-col>
            <ancEventsFuture
              :Fevents="Fevents"
              :Fnext="Fnext"
              :FloadingEvents="FloadingEvents"
              clFcard="grey lighten-3 mx-auto my-4"
              clFtitle="grey lighten-4"
              clFevent="grey lighten-2"
              clFeventInt="grey lighten-4"
            ></ancEventsFuture>
          </v-col>

         
        </v-row>
      </v-col>
    </v-row>
     -->