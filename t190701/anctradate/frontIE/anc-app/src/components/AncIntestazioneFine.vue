<template>
  <v-row dense class="row ma-2 pa-2">
    <v-container>
      <v-flex xs12>
        <v-img class="my-3" contain height="50"></v-img>
      </v-flex>

      <v-layout text-xs-center wrap>
        <v-flex xs12>
          <v-img
            :src="require('../assets/images/Icone/busS.png')"
            class="my-3"
            contain
            height="100"
          ></v-img>
        </v-flex>
      </v-layout>

      <!-- contattaci... -->
      <v-layout justify-center>
        <p class="my-2">
          Per qualsiasi informazione non presente in questa pagina non esitare a contattarci
          <br />
          <v-chip class="ma-4" color="red" text-color="white" @click="gotoR('contatti/')">
            <a>Contatti</a>
          </v-chip>
          <!-- class="headline font-weight-bold" -->
        </p>
      </v-layout>
      <!-- contattaci... -->

      <!-- links -->
      <v-layout justify-center text-center>
        <div>
          <h3 class="headline font-weight-bold mb-3 text-center">Potrebbero interessarti...</h3>
          <a
            style="color:green"
            v-for="(link, i) in categorie[C/10-1].linksFP"
            :key="i"
            @click="gotoR(link.link)"
            class="subheading mx-3"
            target="_blank"
          >
            <v-chip
              v-show="link.link"
              class="ma-2"
              color="green"
              text-color="white"
            >{{ link.descrizione }}</v-chip>
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

export default {
  name: "ancIntestazioneFine",

  props: {
    linksFP: { type: Array },
    alignment: { type: String },
    justify: { type: String },

    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array }
  },

  data: () => ({
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

  methods: {
    gotoR(r) {
      console.log("intestazionefine goto ... ", r);
      this.$emit("gotoR", r);
    }
  }
};
</script>

<style>
</style>