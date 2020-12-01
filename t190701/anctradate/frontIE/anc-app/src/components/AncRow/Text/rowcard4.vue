{% load l10n %}

<template>
  <div>
    <v-row
      dense
      class="row ma-2 pa-2"
    >
      <!-- row 00 -->
      <v-col cols="12">
        <v-card class="pa-4  cTop Anc_BC">
          <h2>{{ lang.t[c_langt].lista[c_lista].sc[c_sc].t[t1].text }}</h2>

          <!-- 2020 12 01 test OK -->
          <!--
          <h2>langCode{{ langCode }}</h2>
          <h2>langt {{ parseInt(langCode / 100) }}</h2>
          <h2>lista {{ parseInt((langCode % 100) / 10) }}</h2>
          <h2>sc {{ parseInt(langCode % 10) }}</h2>
          <h2>c_langt {{ c_langt }}</h2>
          <h2>c_lista {{ c_lista }}</h2>
          <h2>c_sc {{ c_sc }}</h2>
          -->
          <!-- 2020 12 01 test OK -->
        </v-card>
        <v-card class="pa-4 cBottom Anc_BC">
          <h2>
            <h2>{{ lang.t[c_langt].lista[c_lista].sc[c_sc].t[t2].text }}</h2>
            -
            <h2>{{ lang.t[c_langt].lista[c_lista].sc[c_sc].t[t3].text }}</h2>
            <h2>{{ lang.t[c_langt].lista[c_lista].sc[c_sc].t[t4].text }}</h2>

            <!--
            {{ lang.t[langt].lista[lista].sc[sc].t[t2t].text }}
            <br />
            {{ lang.t[langt].lista[lista].sc[sc].t[t3t].text }}
            {{ lang.t[langt].lista[lista].sc[sc].t[t4t].text }}
          -->
          </h2>
        </v-card>
      </v-col>
    </v-row>
    <!-- row 00 -->
  </div>
</template>

<script>
export default {
  name: "rowcard4",
  components: {},

  props: {
    langCode: { type: Number },

    t1: { type: Number },
    t2: { type: Number },
    t3: { type: Number },
    t4: { type: Number }
  },
  data () {
    return {
      text: `Hello`
    };
  },
  computed: {
    /*  decodifica codice identificativo stringa di testo                   */
    /*  esempio:                                                            */

    /*  langCode: 110                                                       */
    /*            1   : c_lang t    Tipo:1      = views                     */
    /*             1  : c_lista     id:1        = sede                      */
    /*              0 : c_sc        sottocat/t  = t     [testi categoria]   */
    /**/
    /**/
    /*                                                                      */
    /*  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++         */
    c_langt () {
      return parseInt(this.langCode / 100);
    },
    c_lista () {
      return parseInt((this.langCode % 100) / 10);
    },
    c_sc () {
      return parseInt(this.langCode % 10);
    },
    /*  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

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

/*Cards...*/
.cTop {
  border-radius: 45px 45px 0px 0px; /*TL-TR-BR-BL*/
}
.cBottom {
  border-radius: 0px 0px 45px 45px; /*TL-TR-BR-BL*/
}
</style>
