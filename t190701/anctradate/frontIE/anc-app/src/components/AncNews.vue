<template>
  <!-- home view -->
  <div class="rmNews">
    <v-row class="ancNewsr" align="center" justify="center">
      <v-col class="tc1 t_BC" align="center" cols="1">
        <!--
        v-if="C==10 && Eevents!='' && Eevents "
        -->

        <v-img
          v-if="Eevents!='' && Eevents "
          style="background-color: transparent !important;"
          :src="categorie[0].imgEvidenza"
          width="50"
          height="50"
        ></v-img>
      </v-col>
      <v-col class="tc2 t_BC" cols="10">
        <marquee align="center" justify="center" behavior="scroll" direction="left" scrolldelay="0">
          <div
            class="display-1 font-weight-bold AncTitleColorDark"
            style="color:white; background-color:transparent;"
          >{{Titolone}}</div>
        </marquee>
      </v-col>

      <!--
    
    <v-col>
      <v-img
        v-if="C==10 && Eevents!='' && Eevents "
        class="my-1"
        style="background-color: red !important; weight:100px; "
        :src="categorie[0].imgEvidenza"
        max-width="90"
        width="80"
        max-height="90"
        height="80"
      ></v-img>
    </v-col>
      <! img-->

      <!-- msg -->
      <!--
    <v-col
      cols="10"
      class="pa-0"
      style="z-index:1; background-color: red!important; height:50px;"
      align="center"
      justify="center"
    >
      <div v-if="C==10 && Eevents!='' ">
        <marquee align="center" justify="center" behavior="scroll" direction="left" scrolldelay="0">
          <div
            class="display-2 font-weight-bold AncTitleColorDark"
            style="color:white; background-color:transparent;"
          >{{Titolone}}</div>
        </marquee>
      </div>
    </v-col>
      -->
    </v-row>
  </div>
</template>

<script>
import router from "../router";
import { apiService } from "../common/api.service";

export default {
  name: "ancNews",
  props: {
    categorie: { type: Array },
    C: { type: Number },
    CS: { type: Number }
  },

  data() {
    return {
      // * EVIDENZA
      Eevents: [],
      Enext: null,
      EloadingEvents: false,
      Titolone: null
    };
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
    }
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
.container-fluid {
  /*    background-color:white;
*/
  width: 100%;
}

.v-img {
  background-color: white;
}

.ancNewsr {
  background-color: transparent !important;
}

.t_BC {
  background-color: transparent !important;
}
.tc1 {
  height: 100px;
}
.tc2 {
  height: 80px;
}
</style>