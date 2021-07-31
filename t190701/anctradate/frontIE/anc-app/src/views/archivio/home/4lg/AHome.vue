{% load l10n %}

<template>
  <div class="SfBase">
    <v-row
      class="rT rT_lv rThXL rTbg2 mx-auto"
      v-show="drawerLeft"
    ></v-row>
    <!--menu/txp-->
    <v-parallax
      class="SfParallax"
      src="/static/images/bg/bg8.jpg"
      height="850"
    ></v-parallax>

    <div class="r_main_hsUp_LG">spazio Up lg</div>

    <v-row
      class="r_main r_main_h_LG mx-auto"
      justify="start"
      align="start"
    >
      <v-col
        cols="2"
        class="carcol carcolsx"
      ></v-col>
      <!--sx-->

      <v-col
        cols="8"
        class="cx_main"
      >
        <!--cx-->
        <v-card class="card_main Anc_BC_BlueDark">
          <v-row class="ArchivioTitolo display-2">
            {{ lang.t[1].lista[5].t[0].text }}
          </v-row>
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="4">
              <!--
              <TimelineYears></TimelineYears>
              -->

              <!-- Archivio Anni -->

              <v-img
                @click="gotoR(link3)"
                :src="require('@/assets/images/Icone/cassaforte.png')"
                class="my-3 cassaF"
                contain
                id="cassaforte"
              ></v-img>
              <a @click="gotoR(link3)">
                {{ lang.t[1].lista[5].t[2].text }}
              </a>
            </v-col>
            <v-col cols="2"></v-col>
            <v-col cols="4">
              <TimelineEvents></TimelineEvents>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
        </v-card>
        <AncIntestazioneFine></AncIntestazioneFine>
        <!--spazio Down lg-->
        <div class="r_main_hsDown_LG"></div>
      </v-col>
      <!--cx-->
      <v-col
        cols="2"
        class="carcol carcoldx"
      ></v-col>
      <!--dx-->
    </v-row>
  </div>
</template>

<script>
import { apiService } from "@/common/api.service";
import { axiosServicePost } from "@/common/axios_calls";

import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import TimelineYears from "./timeline/Years.vue";
import TimelineEvents from "./timeline/Events.vue";

export default {
  name: "Home",
  components: {
    AncIntestazioneFine,
    TimelineYears,
    TimelineEvents
  },

  props: {},
  data () {
    return {
      testo1: "testo 1 ...",
      testo2: "testo 2 ...",
      scr: "",
      focusOn: false,
      snackbar: true,
      text: `Hello, I'm a snackbar`,
      dilog: false,
      tn1: [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }],
      mappa1:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.15881154439!2d8.905701070027497!3d45.71332899343703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478685f126a1ea85%3A0x7c16b78535fb871a!2sVia%20Carlo%20de%20Simoni%2C%201%2C%2021049%20Tradate%20VA!5e0!3m2!1sit!2sit!4v1576285621978!5m2!1sit!2sit",
      mappa2:
        "https://www.google.com/maps/embed?pb=!4v1576284624812!6m8!1m7!1sXkQU4fJD85BZziGDdsNGNw!2m2!1d45.71363123189879!2d8.906257580735!3f290.300251927189!4f2.186880441983959!5f1.1924812503605782",
      img1: "/static/images/Foto/tradatecomune.jpg",
      img2: "/static/images/Foto/xxx.jpg",
      img3: "/static/images/Foto/sopracolletto.jpg",

      lik1: "https://www.inps.it/nuovoportaleinps/default.aspx",
      link2: "http://www.comune.tradate.va.it/",
      link3: "/archivioanni"
    };
  },
  computed: {
    lang () {
      return this.$store.getters.getCurrentLanguage;
    }
  },

  methods: {
    /*2020 06 16*/
    /* TODO: RIPRISTINA RINOMINANDO gotoR*/
    OLDgotoR (r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      /* FROM BU ARCHIVIO...*/
      let anno = r.toString();
      let endpoint = "api/events/archive/" + anno + "/";
      this.$store.dispatch("gotoR", endpoint);
      /*this.$store.dispatch("gotoR", r);*/
    },

    /*TEST 2021 07 17*/
    gotoR (r) {
      console.log("Anc ARCHIVIO LG - gotoR", r);
      this.expand = !this.expand;
      this.$store.dispatch("gotoR", r);
    },

    v (link) {
      this.$store.dispatch("vola", link);
    },
    sety (y) {
      this.Yy = y;
      this.Yyanno = y.anno;
      this.YyPREV = y.preview;
      this.YfocusOn = true;
      this.Yevents = [];

      this.getEvents(y);
      //
      //this.gotoR(y);
    },
    getYears () {
      let endpoint = "api/events/crud/Years/";
      if (this.next) {
        endpoint = this.next;
      }
      this.loadingYears = true;
      apiService(endpoint).then(data => {
        console.log(data.results);

        this.yearsList.push(...data.results);
        this.loadingYears = false;
        if (data.next) {
          this.next = data.next;
        } else {
          this.next = null;
        }
      });
    },
    getEvents (y) {
      console.log("getEvents inizio procedura...");
      let anno = null;
      /*          if (this.y.id){
                anno = this.y.id;
            }*/
      if (y.id) {
        //anno = y.id;
        anno = y.anno;
        //    let endpoint = "/api/events/archive/"+anno+"/";
        let endpoint = "api/events/crud/listEventsYear/" + anno + "/";
        if (this.Ynext) {
          endpoint = this.Ynext;
        }
        this.YloadingEvents = true;
        apiService(endpoint).then(data => {
          console.log(data.results);
          this.Yevents.push(...data.results);
          this.YloadingEvents = false;
          if (data.next) {
            this.Ynext = data.next;
          } else {
            this.Ynext = null;
          }
        });
      } else {
        // no y set
      }
    },
    eventPost (NEbody) {
      console.log("eventPost...");
      console.log(NEbody);
      if (NEbody) {
        let data = {
          post: NEbody
        };
        let url = `/api/events/crudCreateOLD/`;
        axiosServicePost(url, data);
        //axios test post
      } else {
        this.error = "NEbody non valido";
      }
    }
  },
  created () { },
  updated () { },
  mounted () { }
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
  height: 600px;
}
.r_main_hsUp_LG {
  height: 150px;
}
.r_main_hsDown_LG {
  height: 50px;
}
/**/
.Anc_BC_BlueDark {
  background-color: rgb(1, 4, 20);
  color: blanchedalmond;
}
.ArchivioTitolo {
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 2px;
  margin-bottom: 10px;
  padding: 5px;
  height: 50px;
  justify-content: center;
  align-content: center;
}
.cassaF {
  height: 250px;
}

.cassaF:hover {
  height: 255px;
}
</style>
