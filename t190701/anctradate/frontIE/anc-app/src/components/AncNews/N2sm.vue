<template>
  <!--  SM  -->
  <v-row class="ancNewsr" align="center" justify="center">
    <v-col class="tc1 t_BC" align="center" cols="2">
      <v-img
        v-if="Eevents!='' && Eevents "
        style="background-color: transparent !important;"
        :src="categorie[0].imgEvidenza"
        width="50"
        height="50"
      ></v-img>
    </v-col>
    <!---->
    <v-col class="tc2 t_BC" cols="10">
      <v-row class="rc2">
        <marquee align="center" justify="center" behavior="scroll" direction="left" scrolldelay="0">
          <div
            class="display-1 font-weight-bold AncTitleColorDark"
            style="color:white; background-color:transparent;"
          >{{Titolone}}</div>
        </marquee>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { apiService } from "@/common/api.service";
import router from "@/router";

export default {
  name: "N2sm",

  data() {
    return {
      // * EVIDENZA
      //Computed: >>> Eevents: [],
      //Computed: >>> Enext: null,
      //Computed: >>> EloadingEvents: false
      //Computed: >>> Titolone: null
    };
  },
  computed: {
    categorie() {      return this.$store.getters.categorie;},
    Titolone() {       return this.$store.getters.get_Titolone;},
    Eevents() {         return this.$store.getters.get_Eevents;},
    Enext() {           return this.$store.getters.get_Enext;},
    EloadingEvents() {  return this.$store.getters.get_EloadingEvents;}
  },
  methods: {
  getEvidenza() { this.$store.dispatch("getEvidenza");}
  },
  created() {this.getEvidenza();},
  updated() {}
};
</script>

<style media="screen">
</style>
