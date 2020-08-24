<template>
  <!--  MD  -->
  <v-row class="ancNewsr" align="center" justify="center">
    <marquee align="center" justify="center" behavior="scroll" direction="left" scrolldelay="0">
      <div
        class="display-4 font-weight-bold AncTitleColorDark"
        style="color:green; background-color:transparent;"
      >{{Titolone}}</div>
    </marquee>
  </v-row>
</template>

<script>
import { apiService } from "@/common/api.service";
import router from "@/router";

export default {
  name: "N3md",

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

    /*
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
    }*/
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