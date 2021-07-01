<template>
  <v-row
    dense
    class="row ma-2 mb-4 pa-2 ancintestazionefine"
  >
    <v-container>
      <v-flex xs12>
        <v-img
          class="my-3"
          contain
          height="50"
        ></v-img>
      </v-flex>

      <v-layout
        text-xs-center
        wrap
      >
        <v-flex xs12>
          <v-img
            :src="require('../assets/images/Icone/busS.png')"
            class="my-3"
            contain
            height="100"
            id="bustina"
          ></v-img>
        </v-flex>
      </v-layout>

      <v-layout justify-center>
        <p class="my-2">
          <!-- contattaci... Per qualsiasi informazione non presente in questa pagina non esitare a contattarci  -->
          {{ lang.t[0].lista[0].t[0].text }}
          <br />
          <!--            @click="gotoR('contatti/')"-->
          <v-chip
            class="ma-4 cnt"
            color="red"
            text-color="white"
            @click="gotoRcontatti"
          >
            <!--Contatti-->
            <a>{{ lang.t[0].lista[0].t[2].text }}</a>
          </v-chip>
          <!-- class="headline font-weight-bold" -->
        </p>
      </v-layout>
      <!-- contattaci... -->

      <!-- links -->
      <v-layout
        justify-center
        text-center
      >
        <div>
          <v-row
            justify="center"
            align="center"
            class="mx-auto"
          >
            <!-- Potrebbero interessarti... -->
            <a class="text-center mb-3 headline font-weight-bold">{{
              lang.t[0].lista[0].t[1].text
            }}</a>
            <!--h3 class="text-center">{{lang.t[0].lista[0].t[1].text}}</h3-->
          </v-row>

          <!-- @dblclick="gotoR(link.link)" -->
          <a
            class="subheading mx-3"
            target="_blank"
            style="color:green"
            v-for="(link, i) in categorie[C / 10 - 1].linksFP"
            :key="i"
            @click="gotoRlinksFP(link)"
            @mouseover="selectBtn(link)"
            @mouseleave="deselectBtn(link)"
          >
            <!--{{ link.descrizione }}
            v-show="link.link"
            {{ link.r[0].C }}-->
            <v-chip
              class="ma-2 cnt"
              color="green"
              text-color="white"
            >
              <!-- Categoria-->
              <div v-if="link.r[1].CS === '0'">
                {{ categorie[link.r[0].C / 10 - 1].descrizione }}
              </div>
              <!-- SottoCategoria-->
              <div v-else>
                {{
                  categorie[link.r[0].C / 10 - 1].sottocategorie[
                    link.r[1].CS - link.r[0].C - 1
                  ].descrizione
                }}
              </div>
            </v-chip>
          </a>
        </div>
      </v-layout>

      <div class="mb-4"></div>
      <!-- links -->
    </v-container>
  </v-row>
</template>

<script>
//import router       from "../router";
import $ from "jquery";
export default {
  name: "ancIntestazioneFine",

  props: {
    linksFP: { type: Array },
    alignment: { type: String },
    justify: { type: String }
    /*
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array }
    */
  },

  data: () => ({
    btnsel: [{ C: "10" }, { CS: "0" }, { CatSel: "" }, { CatSottoSel: "" }],
    dark: "true",
    rgb1: "rgb(56, 25, 7)",
    mini: true,
    ico: "/static/images/Icone/anclogo2012.gif",
    iconsrc: "",
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuetifyjs.com"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ]
  }),

  computed: {
    lang () {
      return this.$store.getters.getCurrentLanguage;
    },
    languages () {
      return this.$store.getters.getLanguages;
    },
    languagesShow () {
      return this.$store.getters.getLanguagesShow;
    },
    /*  -----------------------------------------------------------------------   */
    categorie () {
      return this.$store.getters.categorie;
    },
    C () {
      return this.$store.getters.getC;
    },
    CS () {
      return this.$store.getters.getCS;
    },
    Cs () {
      /*Categoria*/
      return this.$store.getters.getCs;
    },
    CSs () {
      /*SottoCategoria*/
      return this.$store.getters.getCSs;
    }
  },

  methods: {
    /* TEST OK 2020 05 03 */
    /*
    gotoR (r) {
      console.log("Intestazione FINE gotoR", r);
      this.$store.dispatch("gotoR", r);
    },
    */

    /*2020 06 16*/
    /*
    gotoR (r) {
      console.log("Intestazione FINE gotoR", r);
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    */

    /*2021 01 16*/
    gotoRlinksFP (link) {
      console.log("Intestazione FINE gotoR linkFP", link.r[0].C, link.r[1].CS);

      var r;
      if (link.r[1].CS === "0") {
        r = this.categorie[link.r[0].C / 10 - 1].link;
      } else {
        r = this.categorie[link.r[0].C / 10 - 1].sottocategorie[
          link.r[1].CS - link.r[0].C - 1
        ].link;
      }

      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },

    gotoRcontatti () {
      var r;
      r = this.categorie[2].link;

      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },

    gotoR0 (r) {
      console.log("intestazionefine goto ... ", r);
      this.$emit("gotoR", r);
    },

    /*2020 06 27*/

    selectBtn (link) {
      /*ncat*/
      console.log("intestazionefine selectBtn ... ", link);
      var ncat = [];
      this.btnsel[0] = 0;
      this.btnsel[1] = 0;

      ncat[0] = this.categorie[link.r[0].C / 10 - 1].n;
      this.btnsel[0] = ncat[0];
      this.btnsel[2] = this.categorie[link.r[0].C / 10 - 1].descrizione;

      if (link.r[1].CS === "0") {
      } else {
        ncat[1] = this.categorie[link.r[0].C / 10 - 1].sottocategorie[
          link.r[1].CS - link.r[0].C - 1
        ].n;
        this.btnsel[1] = ncat[1];
        this.btnsel[3] = this.categorie[link.r[0].C / 10 - 1].sottocategorie[
          link.r[1].CS - link.r[0].C - 1
        ].descrizione;
      }

      this.$store.dispatch("selectncat", ncat);

      if (
        //this.drawerSCM &&
        this.categorie[this.Cs / 10 - 1].sottocategorie.length > 1
      ) {
        this.$store.dispatch("setCatcl", "open"); //  setta in moduleA/CatCL : CclSEL
      } else {
        this.$store.dispatch("setCatcl", "sel"); //  setta in moduleA/CatCL : CclSEL
      }
    },

    deselectBtn (ncat) {
      this.btnsel = ncat;
      this.$store.dispatch("selectncat", 0);
      this.$store.dispatch("setCatcl", "desel");
      /*  setta in moduleA/CatCL : CclDESEL  */
    }
  }
};
</script>

<style>
.ancintestazionefine {
  margin-bottom: 400px;
}
.cnt {
  transform: scale(1, 1) rotate(0deg);
}
.cnt:hover {
  transform: scale(1.1, 1.1) rotate(5deg);
}
#bustina {
  transform: scale(1, 1) rotate(0deg);
}
#bustina:hover {
  transform: scale(1.05, 1.05) rotate(2deg);
}
</style>
