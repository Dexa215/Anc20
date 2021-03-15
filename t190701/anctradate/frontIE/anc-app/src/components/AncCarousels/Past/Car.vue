<template>
  <!--v-col cols="4" class="carcolsx"-->
  <!-- ///////////////////////////////////////////////////////////////////////////// -->
  <v-card elevation="24" class="anccard mx-auto my-auto r_BC darken-4" dark shaped height="465">
    <v-list two-line class="carlist r_BC darken-4" dark>
      <v-list-item>
        <router-link :to="{name: 'archivio',}" class="event-link">
          <v-list-item-avatar>
            <v-icon x-large>mdi-archive</v-icon>
          </v-list-item-avatar>
        </router-link>

        <v-list-item-content>
          <v-list-item-title>Ultimi eventi</v-list-item-title>
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!--intestazione card
elevation="24"
width="500"
height="700"
class="mx-auto my-4
light-blue lighten-1"
class="mdi-spin"
    -->

    <!--intestazione card

settaggi carousel:
        cycle="true"
        continuous="true"
        show-arrows-on-hover
    -->

    <v-carousel
      height="370"
      cycle
      continuous
      loader
      :show-arrows="sa"
      class="anccarousel mx-auto"
      hide-delimiter-background
      direction="up"
      delimiter-icon="mdi-chart-donut"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-carousel-item v-for="event in Pevents" :key="event.pk" class="anccarouselitem mx-auto">
        <v-sheet>
          <!-- class="fill-height" -->
          <v-row align="center" justify="center">
            <div v-if="event.preview">
              <v-img class="imgop1" :src="event.preview"></v-img>
            </div>
            <div v-else>
              <v-img class="imgop1" src="@/assets/images/Servizio/frecce.jpg"></v-img>
            </div>
          </v-row>
        </v-sheet>
        <!-- intestazione evento -->

        <v-list two-line class="eventrif r_BC darken-3" dark>
          <v-list-item class="r_BC darken-4">
            <v-list-item-content>
              <v-list-item-title>{{ event.datainizio | formatDate }}</v-list-item-title>
              <v-list-item-subtitle>
                <router-link
                  :to="{    name: 'event',
                                                params: { id: event.id, slug: event.slug }
                                            }"
                  class="event-link"
                >{{ event.title }}</router-link>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar>
              <v-img src="@/assets/images/Icone/anclogo2012.gif"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>

        <!-- intestazione evento -->
      </v-carousel-item>
    </v-carousel>
    <!-- future
        <v-system-bar lights-out> system bar</v-system-bar>
        <v-card-title><p color="#37474F">prossimi appuntamenti</p></v-card-title>
    -->
  </v-card>
  <!-- ///////////////////////////////////////////////////////////////////////////// -->
  <!-- /v-col-->
</template>

<script>
import { apiService } from "@/common/api.service";
import router from "@/router";

export default {
  name: "carP",

  data: () => ({
    sa: false,
    clFcard: "grey darken-4",
    clFtitle: "grey darken-4 ",
    clFeventInt: "grey darken-4 ",
    clFevent: "grey darken-3 "
  }),

  props: {
    /*
    Pevents: { type: Array },
    Pnext: { type: String },
    PloadingEvents: { type: Boolean }
    */
  },

  computed: {
    Pevents() {
      return this.$store.getters.get_Pevents;
    },
    Pnext() {
      return this.$store.getters.get_Pnext;
    },
    PloadingEvents() {
      return this.$store.getters.get_PloadingEvents;
    }
  },

  methods: {
    PastClearData() {
      this.$store.dispatch("getEventsPastClearData");
    },
    getEventsPast() {
      this.$store.dispatch("getEventsPast");
    }
  },

  beforeCreate() {
    console.log("before created");
  },

  created() {
    console.log("Car-- call to PastClearData");
    this.PastClearData();
    console.log("Car-- call to getEventsPast");
    this.getEventsPast();
  }
};
</script>

<style media="screen">
.carlist {
  border-radius: 25px 10px 10px 25px;
}

.anccard {
  width: 450px;
  border-radius: 25px 10px 10px 25px;
}
.anccarousel {
  /*background-color: hotpink;*/
  width: 445px;
}
.anccarouselitem {
  /*background-color: indigo;*/
  width: 440px;
}

.imgop1 {
  height: 320px;
  width: 440px;
}

.eventrif {
  position: absolute;
  top: 220px;
  width: 300px;
  background-color: transparent;
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
</style>

            <!--
            <ancEventsPast
              :Pevents="Pevents"
              :Pnext="Pnext"
              :PloadingEvents="PloadingEvents"
              clFcard="grey darken-4 mx-auto my-4"
              clFtitle="grey darken-4 "
              clFevent="grey darken-3 "
              clFeventInt="grey darken-4 "
            ></ancEventsPast>
            -->

