<template>
  <div class="archivio">
    <v-row
      class="AncTrasparenza"
      v-show="drawerLeft"
    ></v-row>
    <!-- Ai  -->
    <AncIntestazione
      :C="60"
      :CS="61"
      :categorie="categorie"
      @gotoR="gotoR"
    ></AncIntestazione>
    <!-- Ai  -->

    <div>
      <!-- div 00 -->
      <div class="my-4 pb-2 container-fluid text-center">
        <!--container-fluid -->
        <!-- Titolo -->
        <AncCard
          :C="60"
          :CS="61"
          :categorie="categorie"
          :evidenza="Eevents"
          :Titolone="Titolone"
          @gotoR="gotoR"
        ></AncCard>
        <!-- Titolo -->

        <!-- **** -->

        <v-row
          dense
          class="row ma-2 pa-2"
        >
          <!-- row 00 -->
          <!-- Riassunto Sede -->
          <v-col cols="12"></v-col>
        </v-row>
        <!-- row 00 -->
        <!-- Riassunto Sede -->

        <v-row
          dense
          class="row ma-2 pa-2"
        >
          <!-- row 01 -->
          <!-- x -->
          <v-col cols="3">
            <!--column 1-->

            <h2 class="display-1 font-weight-bold AncTitleColorDark">Anni</h2>

            <v-timeline
              class="my-6 py-2"
              style="background-color:#ECEFF1;"
            >
              <v-timeline-item
                v-for="(year, i) in yearsList"
                :key="i"
                :color="year.color"
                small
                right
                class="ma-10"
                style="background-color:#ECEFF1;"
              >
                <template v-slot:icon>
                  <v-avatar
                    v-show="!YfocusOn | (Yy != year)"
                    size="100"
                  >
                    <v-img
                      v-if="year.preview"
                      :src="year.preview"
                      @click="sety(year)"
                    ></v-img>
                    <v-img
                      v-else
                      src="../../src/assets/images/Icone/anclogo2012.gif"
                      @click="sety(year)"
                    ></v-img>
                  </v-avatar>
                </template>

                <template v-slot:opposite>
                  <div v-show="Yy != year">
                    <span
                      style="color: #1A237E;"
                      :class="
                        `display-2 headline font-weight-bold ${year.color}--text mx-4`
                      "
                      v-text="year.anno"
                    ></span>
                  </div>
                </template>
                <div class="py-4">
                  <h2 :class="
                      `headline font-weight-light mb-4 ${year.color}--text mx-4`
                    "></h2>
                </div>
              </v-timeline-item>
            </v-timeline>

            <div class="my-4">
              <p v-show="loadingYears">...loading...</p>
            </div>
            <button
              v-show="next"
              @click="getYears"
              class="btn btn-sm btn-outline-success"
            >
              Carica anni precedenti
            </button>
          </v-col>
          <!--column 1-->
          <v-col cols="6">
            <!--column 2-->

            <!--  <div v-if= "Yy && Yy==year" > -->
            <div v-if="Yy">
              <ancArchiveYear
                @newEvent="eventPost"
                @getNextEvent="getEvents(Yy)"
                :YyPREV="YyPREV"
                :Yevents="Yevents"
                :Ynext="Ynext"
                :YloadingEvents="YloadingEvents"
                :Yy="Yy"
                :YfocusOn="YfocusOn"
              ></ancArchiveYear>
            </div>
            <!-- v-if -->
          </v-col>
          <!--column 2-->
        </v-row>
        <!-- row 01 -->
        <!-- x -->

        <!-- **** -->

        <v-row
          dense
          class="row ma-2 pa-2"
        >
          <!-- row 7 -->
          <!-- The end -->
          <!-- AiF -->
          <div class="container-fluid text-center">
            <AncIntestazioneFine
              :C="C"
              :CS="CS"
              :categorie="categorie"
              @gotoR="gotoR"
            ></AncIntestazioneFine>
          </div>
          <!-- AiF -->
        </v-row>
        <!-- row 7 -->
        <!-- The end -->
      </div>
      <!-- container-fluid -->
    </div>
    <!-- div 00 -->
  </div>
  <!-- archivio -->
</template>
<script>
import { apiService } from "../../../common/api.service";
import { axiosServicePost } from "../../../common/axios_calls";

import router from "../../../router";
import ancArchiveYear from "../components/AncArchiveYear";

import AncIntestazione from "@/components/AncIntestazione.vue";
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import AncCard from "@/components/AncCard.vue";

export default {
  name: "Archivio",

  components: {
    ancArchiveYear,
    AncIntestazione,
    AncIntestazioneFine,
    AncCard
  },

  props: {
    requestUser: { type: String },

    categorie: { type: Array },
    C: { type: Number },
    CS: { type: Number },
    drawerLeft: { type: Boolean }
  },

  data () {
    return {
      Eevents: [],
      Titolone: null,

      years: [],
      yearsList: [],
      next: null,
      loadingYears: false,

      YfocusOn: false,
      Yy: null,
      YyPREV: null,
      Yyanno: null,

      Yevents: [],
      Ynext: null,
      YloadingEvents: false,

      error: null
    };
  },

  methods: {
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
    /*
        getYearsList() {
          let endpoint = "api/events/crud/listPastYears/";
          apiService(endpoint).then(data => {
            console.log(data.results);
            this.years.push(...data.results);
          });
        },
*/
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
      //          console.log("store"+this.$store.state);

      if (NEbody) {
        let data = {
          //              user:this.$store.state.authUser.user_id,
          post: NEbody
        };

        //            let url =`/api/events/`;
        //            let url = `/api/events/cyc/`;
        //            let url = `/api/events/crudCreate/`;
        let url = `/api/events/crudCreateOLD/`;

        /*
Fetch test            
            apiService(endpoint, "post", { body: NEbody });
*/
        //axios test post
        axiosServicePost(url, data);
        //axios test post
      } else {
        this.error = "NEbody non valido";
      }
    },

    gotoR (r) {
      let anno = r.toString();
      let endpoint = "api/events/archive/" + anno + "/";
      this.$emit("gotoR", "endpoint");

      /*
            console.log("anno..."+anno);
            
            console.log("rotta per...");
            router.push('/')
            router.push(endpoint)
 */
    }
  },

  created () {
    //this.getRequestUser();
    this.getYears();
    //this.getYearsList();
    document.title = "ANC Tradate - Archivio";
  }
};
</script>

<style media="screen">
.column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

.row:after {
  content: "";
  display: table;
  clear: both;
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

#cf1 {
  background-color: blue;
}
#cf2 {
  background-color: aqua;
}
#cf3 {
  background-color: yellow;
}
#r1 {
  background-color: #dc3545;
}
#r2 {
  background-color: coral;
}
</style>
