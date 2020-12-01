{% load l10n %}

<template>
  <div>
    <v-row
      dense
      class="row ma-2 pa-2"
    >
      <!-- row 00 -->
      <v-col cols="12">
        <v-card class="pa-4  Anc_BC">
          <h2>
            {{ lang.t[t1langt].lista[t1lista].sc[t1sc].t[t1t].text }}
          </h2>
        </v-card>
        <v-card class="pa-4 Anc_BC">
          <h2>
            {{ lang.t[t2langt].lista[t2lista].sc[t2sc].t[t2t].text }}
          </h2>
        </v-card>
      </v-col>
    </v-row>
    <!-- row 00 -->
  </div>
</template>

<script>
export default {
  name: "rowcard2",
  components: {},

  props: {
    /* testo 1 */
    t1langt: { type: Number },
    t1lista: { type: Number },
    t1sc: { type: Number },
    t1t: { type: Number },

    /* testo 2 */
    t2langt: { type: Number },
    t2lista: { type: Number },
    t2sc: { type: Number },
    t2t: { type: Number }
  },
  data () {
    return {
      text: `Hello`
    };
  },
  computed: {
    /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    lang () {
      return this.$store.getters.getCurrentLanguage;
    },
    languages () {
      return this.$store.getters.getLanguages;
    },
    languagesShow () {
      return this.$store.getters.getLanguagesShow;
    },
    currentres () {
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

    gotoR (r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    v (link) {
      /*tis.$emit("vola", link);*/

      this.$store.dispatch("vola", link);
    }
  },
  created () { },
  updated () { },
  mounted () { }
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
</style>
