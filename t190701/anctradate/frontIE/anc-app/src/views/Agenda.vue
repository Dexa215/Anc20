<template>
  <div class="agenda">
    <v-row class="AncTrasparenza" v-show="drawerLeft"></v-row>

    <AncIntestazione :C="50" :CS="0" :categorie="categorie" @gotoR="gotoR"></AncIntestazione>
    <!-- Ai  -->

    <div>
      <!-- div 00 -->
      <div class="my-4 pb-2 container-fluid text-center">
        <!--container-fluid -->
        <!-- Titolo -->
        <AncCard
          :C="50"
          :CS="0"
          :categorie="categorie"
          :evidenza="Eevents"
          :Titolone="Titolone"
          @gotoR="gotoR"
        ></AncCard>
        <!-- Titolo -->

        <!-- **** -->

        <v-row dense class="row ma-2 pa-2">
          <!-- row 01 -->
          <!-- Descrizione Ubicazione -->

          <div>
            <v-timeline>
              <v-timeline-item v-for="event in events" :key="event.pk" color="lightgrey" large>
                <template v-slot:opposite>
                  <span :class="`headline font-weight-bold `" v-text="x"></span>
                  {{event.datainizio | formatDate}}
                </template>

                <template>
                  <div class="py-4" align="center">
                    <v-img :src="event.preview" class="white--text v-img-dexo">
                      <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                        </v-row>
                      </template>
                      <v-card-title>
                        <h5>{{ event.title }}</h5>
                      </v-card-title>
                    </v-img>
                  </div>
                </template>
              </v-timeline-item>
            </v-timeline>
          </div>
        </v-row>
        <!-- row 01 -->
        <!-- Descrizione Ubicazione -->

        <v-row dense class="row ma-2 pa-2">
          <!-- row 02 -->
        </v-row>
        <!-- row 02 -->

        <v-row dense class="row ma-2 pa-2">
          <!-- row 03 -->
        </v-row>
        <!-- row 03 -->

        <v-row dense class="row ma-2 pa-2">
          <!-- row 04 -->
        </v-row>
        <!-- row 04 -->

        <v-row dense class="row ma-2 pa-2">
          <!-- row 05 -->
          <v-card class="pa-4">
            <blockquote>
              <P class="text-justify">Appuntamenti in agenda</P>
            </blockquote>
          </v-card>
        </v-row>
        <!-- row 05 -->

        <v-row dense class="row ma-2 pa-2">
          <!-- row 06 -->
        </v-row>
        <!-- row 06 -->

        <!-- **** -->

        <v-row dense class="row ma-2 pa-2">
          <!-- row 7 -->
          <!-- The end -->
          <!-- AiF -->
          <div class="container-fluid text-center">
            <AncIntestazioneFine :C="C" :CS="CS" :categorie="categorie" @gotoR="gotoR"></AncIntestazioneFine>
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
</template>





<script>
import { apiService } from "../common/api.service";

import router from "../router";
import AncIntestazione from "@/components/AncIntestazione.vue";
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import AncCard from "@/components/AncCard.vue";

export default {
  name: "Agenda",

  components: {
    AncIntestazione,
    AncIntestazioneFine,
    AncCard
  },

  props: {
    footercolor: String,

    /*
    menuCat:        {type: String,},
    menuSubCat:     {type: String,},
    intMsg:         {type: String,},    //  "Anc Tradate",
    intMsgSubH:     {type: String,},    //  "Homepage",
    intFMsg:        {type: String,},    //  "Anc Tradate F",
    intFMsgSubH:    {type: String,},    //  "Homepage F",
    linksFP:        {type: Array,},     //
    src:            {type: String,},
    */

    categorie: { type: Array },
    C: { type: Number },
    CS: { type: Number },

    requestUser: { type: String },
    rvt: { type: Number },
    categorie: { type: Array },
    evidenza: { type: String },
    drawerLeft: { type: Boolean }
  },

  data() {
    return {
      Eevents: [],
      Titolone: null,

      events: [],
      next: null,
      loadingEvents: false
    };
  },

  methods: {
    getEventsFuture() {
      let endpoint = "api/events/crud/listFuture/";
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

    setMyPar() {
      let myparam = {
        Ccurrent: 50,
        CScurrent: 0
      };
      this.$emit("spMC", myparam); //spMC -- > sAVE pARAMETER / menu Cat
    },
    gotoR(r) {
      console.log("rotta per...");
      this.$emit("gotoR", "r");
    }
  }, //methods

  created() {
    //this.getRequestUser();
    console.log("agenda oncreate --> start");
    //this.setMyPar();
    this.getEventsFuture();
    document.title = "ANC Tradate";
  }
};
</script>

<style media="screen">
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
  opacity: 0.4;
}

.bg {
  background-image: url("../assets/images/bg/bg1.jpg");
}
</style>
