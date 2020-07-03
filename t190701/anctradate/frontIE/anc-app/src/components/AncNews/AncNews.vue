<template>
  <div class="rmNews">
    <!-- @@@ -->
    <div v-if="currentres=='xs'">
      <n1xs></n1xs>
    </div>
    <div v-else-if="currentres=='sm'">
      <n2sm></n2sm>
    </div>
    <div v-else-if="currentres=='md'">
      <n3md></n3md>
    </div>
    <div v-else-if="currentres=='lg'">
      <n4lg></n4lg>
    </div>
    <div v-else-if="currentres=='xl'">
      <n5xl></n5xl>
    </div>
  </div>

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
</template>

<script>
import { apiService } from "@/common/api.service";
import router from "@/router";

import n1xs from "@/components/AncNews/N1xs.vue";
import n2sm from "@/components/AncNews/N2sm.vue";
import n3md from "@/components/AncNews/N3md.vue";
import n4lg from "@/components/AncNews/N4lg.vue";
import n5xl from "@/components/AncNews/N5xl.vue";

export default {
  name: "ancNews",

  components: {
    n1xs,
    n2sm,
    n3md,
    n4lg,
    n5xl
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
  computed: {
    categorie() {
      return this.$store.getters.categorie;
    },

    // eslint-disable-next-line vue/return-in-computed-property
    currentres() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          //console.log("xs");
          return "xs";
        case "sm":
          //onsole.log("sm");
          return "sm";
        case "md":
          //console.log("md");
          return "md";
        case "lg":
          //console.log("lg");
          return "lg";
        case "xl":
          //console.log("xl");
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
.rmNews {
  /* ... comunicazioni ...*/
  position: absolute;
  top: 80px;
  z-index: 2;
  height: 70px;
  width: 100%;
  background-color: rgb(146, 0, 0) !important; /*test*/
}

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
  align-content: center;
  width: 100%;
}

.t_BC {
  background-color: transparent !important;
}
.tc1 {
  height: 80%;
  justify-content: center;
}
.tc2 {
  height: 90%;
}
.rc2 {
  height: 80%;
  background-color: transparent !important;
  align-content: center;
}
</style>