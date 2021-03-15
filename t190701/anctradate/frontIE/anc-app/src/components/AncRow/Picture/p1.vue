{% load l10n %}

<template>
  <div class="rxt">
    <v-row dense class="row ma-2 pa-2" justify="center">
      <!--
        text
        type="info"
        color="rgb(1, 4, 20)"-->
      <v-alert
        class="infogrado"
        v-show="grado"
        transition="scale-transition"
        dense
        >Grado in servizio
      </v-alert>
      <v-alert
        class="infogrado mx-auto"
        v-show="carica"
        transition="scale-transition"
        dense
        >Carica Sociale</v-alert
      >
      <v-card
        infinite
        dark
        class="pa-4 c Anc_BC mx-auto anccard"
        max-width="344"
      >
        <v-img
          v-if="small == true"
          class="foto fotosmall"
          :src="src"
          height="100px"
          width="150"
        ></v-img>
        <v-img
          v-else
          class="foto"
          :src="src"
          height="200px"
          width="300"
        ></v-img>

        <v-row class="gradorow" align="center" justify="center"
          ><v-col cols="2"
            ><v-row align="center" justify="center"
              ><v-btn icon @mouseover="Grado(true)" @mouseleave="Grado(false)">
                <v-icon>mdi-shield-star</v-icon>
              </v-btn></v-row
            >
          </v-col>

          <v-divider vertical></v-divider>

          <v-col cols="2"
            ><v-row align="center" justify="center">
              <v-btn icon @mouseover="Carica(true)" @mouseleave="Carica(false)">
                <v-icon>mdi-account-tie</v-icon>
              </v-btn>
            </v-row></v-col
          >
          <v-col
            ><v-row v-show="lastcarica" align="center" justify="center">{{
              t2
            }}</v-row>
            <v-row v-show="lastgrado" align="center" justify="center">{{
              t6
            }}</v-row>
          </v-col>
        </v-row>

        <v-card-title>
          {{ t1 }}
        </v-card-title>

        <v-card-subtitle></v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text @mouseenter="show = !show">
            {{ t3 }}
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show" @mouseenter="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <!--phone-->
            <v-card-text>
              {{ t4 }}
            </v-card-text>
            <!--@mail-->
            <v-chip
              class="ma-4 pa-4"
              color="darkblue"
              text-color="white"
              @click="gotoR('contatti/')"
            >
              <v-row align="center" justify="center" id="rci" dark>
                <a class="mt" href="mailto:posta@anctradate.it">{{
                  lang.t[1].lista[2].t[13].text
                }}</a>
              </v-row>
            </v-chip>
          </div>
        </v-expand-transition>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "p1",
  components: {},

  props: {
    langCode: { type: Number },
    tn: { type: Array },
    src: { type: String },
    small: { type: Boolean }
  },
  data() {
    return {
      text: `Hello`,
      show: false,
      grado: false,
      carica: false,
      lastgrado: false,
      lastcarica: true
    };
  },
  computed: {
    c_langt() {
      return parseInt(this.langCode / 100);
    },
    c_lista() {
      return parseInt((this.langCode % 100) / 10);
    },
    c_sc() {
      return parseInt(this.langCode % 10);
    },

    t1() {
      var lang = this.$store.getters.getCurrentLanguage;
      var t = this.c_langt;
      var l = this.c_lista - 1;
      var sc = this.c_sc - 1;
      if (this.c_sc == 0) return lang.t[t].lista[l].t[this.tn[0].id].text;
      else return lang.t[t].lista[l].sc[sc].t[this.tn[0].id].text;
    },
    t2() {
      var lang = this.$store.getters.getCurrentLanguage;
      var t = this.c_langt;
      var l = this.c_lista - 1;
      var sc = this.c_sc - 1;
      if (this.c_sc == 0) return lang.t[t].lista[l].t[this.tn[1].id].text;
      else return lang.t[t].lista[l].sc[sc].t[this.tn[1].id].text;
    },
    t3() {
      var lang = this.$store.getters.getCurrentLanguage;
      var t = this.c_langt;
      var l = this.c_lista - 1;
      var sc = this.c_sc - 1;
      if (this.c_sc == 0) return lang.t[t].lista[l].t[this.tn[2].id].text;
      else return lang.t[t].lista[l].sc[sc].t[this.tn[2].id].text;
    },
    t4() {
      var lang = this.$store.getters.getCurrentLanguage;
      var t = this.c_langt;
      var l = this.c_lista - 1;
      var sc = this.c_sc - 1;
      if (this.c_sc == 0) return lang.t[t].lista[l].t[this.tn[3].id].text;
      else return lang.t[t].lista[l].sc[sc].t[this.tn[3].id].text;
    },
    t5() {
      var lang = this.$store.getters.getCurrentLanguage;
      var t = this.c_langt;
      var l = this.c_lista - 1;
      var sc = this.c_sc - 1;
      if (this.c_sc == 0) return lang.t[t].lista[l].t[this.tn[4].id].text;
      else return lang.t[t].lista[l].sc[sc].t[this.tn[4].id].text;
    },
    t6() {
      var lang = this.$store.getters.getCurrentLanguage;
      var t = this.c_langt;
      var l = this.c_lista - 1;
      var sc = this.c_sc - 1;
      if (this.c_sc == 0) return lang.t[t].lista[l].t[this.tn[5].id].text;
      else return lang.t[t].lista[l].sc[sc].t[this.tn[5].id].text;
    },
    /*  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    lang() {
      return this.$store.getters.getCurrentLanguage;
    },
    languages() {
      return this.$store.getters.getLanguages;
    },
    languagesShow() {
      return this.$store.getters.getLanguagesShow;
    },
    currentres() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "xs";
        case "sm":
          return "sm";
        case "md":
          return "md";
        case "lg":
          return "lg";
        case "xl":
          return "xl";
      }
    }
  },

  methods: {
    /*2020 06 16*/

    gotoR(r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    v(link) {
      /*tis.$emit("vola", link);*/

      this.$store.dispatch("vola", link);
    },
    Grado(d) {
      this.grado = d;
      if (d == true) {
        this.lastgrado = true;
        this.lastcarica = false;
      } else {
        this.lastgrado = false;
        this.lastcarica = true;
      }
    },

    Carica(d) {
      this.carica = d;
      if (d == true) {
        this.lastcarica = true;
      }
    },
    Mt() {}
  },
  created() {},
  updated() {},
  mounted() {}
};
</script>

<style scoped>
/*  Colori Globali        Background        */
.Anc_BC {
  background-color: rgb(19, 21, 36);
  color: antiquewhite;
}
.Anc_BC_Blue {
  background-color: rgb(4, 11, 46);
  color: aliceblue;
}
.Anc_BC_BlueDark {
  background-color: rgb(1, 4, 20);
  color: blanchedalmond;
}

/*Cards...*/
.c {
  border-radius: 45px;
}

/*alerts*/
.foto {
  position: relative;
  z-index: 4;
  border-radius: 25px;
}
.fotosmall {
  border-radius: 15px;
}
.infogrado {
  position: absolute;
  z-index: 5;
  margin-top: 170px;
  /*border-left: 80px;*/
  border-radius: 35px, 35px, 50px, 35px;
  width: 40%;
  /*background-color: red;*/
  background-color: rgb(1, 4, 20);
  color: antiquewhite;
  /*color="rgb(1, 4, 20)*/
  opacity: 0.5;
}
.anccard {
  animation: pulse 1s;
}
.gradorow {
}
.rxt {
  /*background-color: darkgoldenrod;*/
  border-radius: 15px;
  text-justify: center;
}
.mt {
  color: antiquewhite;
}
</style>
