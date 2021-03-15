<template>
  <!--  LG  -->

  <v-row
    class="ancNewsrLG mx-auto"
    align="center"
    justify="center"
  >
    <v-col
      class="tc1LG p0"
      cols="1"
    >
      <div class="dc01">
        <v-row
          class="rc01 mx-auto my-auto p0"
          align="center"
          justify="center"
        >
          <v-img
            v-if="Eevents != '' && Eevents"
            style="background-color: transparent !important;"
            :src="categorie[0].imgEvidenza"
            max-width="50"
            max-height="50"
          ></v-img>
        </v-row>
      </div>
    </v-col>
    <!---->

    <v-col
      class="tc2 p0"
      cols="11"
    >
      <div class="dc01">
        <v-row
          class="rc01 mx-auto my-auto"
          align="center"
          justify="center"
        >
          <v-row
            class="rtext mx-auto"
            align="center"
            justify="center"
          >
            <!--behavior="alternate"
            behavior="alternate"
            behavior="alternate"
            behavior="alternate"
            behavior="alternate"
            
            -->
            <marquee
              align="center"
              justify="center"
              direction="left"
              scrolldelay="0"
              class="my-auto"
            >
              <div class="marint display-1 font-weight-bold AncTitleColorDark">
                {{ Titolone }}
              </div>
            </marquee>
          </v-row>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { apiService } from "@/common/api.service";
import router from "@/router";

export default {
  name: "N4lg",

  data () {
    return {
      // * EVIDENZA
      //Computed: >>> Eevents: [],
      //Computed: >>> Enext: null,
      //Computed: >>> EloadingEvents: false
      //Computed: >>> Titolone: null
    };
  },
  computed: {
    categorie () {
      return this.$store.getters.categorie;
    },
    Titolone () {
      return this.$store.getters.get_Titolone;
    },
    Eevents () {
      return this.$store.getters.get_Eevents;
    },
    Enext () {
      return this.$store.getters.get_Enext;
    },
    EloadingEvents () {
      return this.$store.getters.get_EloadingEvents;
    }
  },

  methods: {
    getEvidenza () {
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

  beforecreated () {
    //this.getEvidenza();
  },
  created () {
    this.getEvidenza();
  },
  updated () {
    //this.getEvidenza();
  }
};
</script>

<style media="screen" scoped>
.ancNewsrLG {
  /* ... comunicazioni ...*/
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 80px;
  margin-top: 90px;
  background-color: rgb(146, 0, 0) !important; /*test*/
  opacity: 0.6;
}

.tc1LG {
  height: 100%;
  width: 100%;
  background-color: transparent;
}
.dc01 {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.rc01 {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.tc2 {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.rc02 {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.mar {
  width: 100%;
  height: 100%;
  background-color: black;
}
.marint {
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: white;
}

/*style="color:white; background-color:yellow;"*/
</style>
