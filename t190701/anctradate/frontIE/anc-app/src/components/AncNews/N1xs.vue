<template>
  <!--  XS  -->
  <v-row class="ancNewsr" align="center" justify="center">
    <!--
  <v-row v-if="currentres == 'xs'" class="ancNewsr" align="center" justify="center">
    -->
    <marquee align="center" justify="center" behavior="scroll" direction="left" scrolldelay="0">
      <div
        class="display-2 font-weight-bold AncTitleColorDark"
        style="color:yellow; background-color:transparent;"
      >{{Titolone}}</div>
    </marquee>
  </v-row>
</template>

<script>
import { apiService } from "@/common/api.service";
import router from "@/router";

export default {
  name: "N1xs",

  data() {
    return {
      // * EVIDENZA
      Eevents: [],
      Enext: null,
      EloadingEvents: false
      //Titolone: null
    };
  },
  computed: {
    Titolone() {
      return this.$store.getters.get_Titolone;
    },
    categorie() {
      return this.$store.getters.categorie;
    }
  },

  methods: {
    getEvidenza() {
      this.$store.dispatch("getEvidenza");
    }
  },
  beforecreated() {
    //this.getEvidenza();
  },
  created() {
    this.getEvidenza();
  },
  updated() {
    //this.getEvidenza();
  }
};
</script>

<style media="screen">
</style>