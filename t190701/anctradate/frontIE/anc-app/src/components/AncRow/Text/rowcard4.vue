{% load l10n %}

<template>
  <div>
    <v-row
      dense
      class="row ma-2 pa-2"
    >
      <!-- 2020 12 01 test OK -->
      <!-- row 00 -->
      <v-col cols="12">
        <v-card class="pa-4  cTop Anc_BC">
          <!--    TEST OK 2020 12 01 
                  <h2>  {{ c_langt }} tipo {{ lang.t[c_langt].tipo }}</h2>
                  <h2>  {{ c_lista }} cat {{ lang.t[c_langt].lista[c_lista].nomecategoria }}</h2>
                  {{ c_sc }}    -->
          <!--    TEST NG 2020 12 01 
          <h2 v-if="c_sc != 0">{{ lang.t[c_langt].lista[c_lista].sc[c_sc].t[tn[0].id].text }}</h2>
          <h2 v-else>{{ lang.t[c_langt].lista[c_lista].t[tn[0].id].text }}</h2>
          -->

          <h2>{{ t1 }}</h2>
        </v-card>
        <v-card class="pa-4 cBottom Anc_BC">
          <h2>{{ t2 }}</h2>
          <h2>{{ t3 }}</h2>
          <h2>{{ t4 }}</h2>
          <!--
              {{ lang.t[c_langt].lista[c_lista].sc[c_sc].t[tn[1].id].text }}
              -
              {{ lang.t[c_langt].lista[c_lista].sc[c_sc].t[tn[2].id].text }}
              {{ lang.t[c_langt].lista[c_lista].sc[c_sc].t[tn[3].id].text }}
            -->
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
    tn: { type: Array }
  },
  data () {
    return {
      text: `Hello`
    };
  },
  computed: {
    /*  decodifica codice identificativo stringa di testo                   */
    /*  esempio:                                                            */

    /*  langCode: 110                                                      */
    /*            1    : t           Tipo:1      = views                   */
    /*             1   : c_lista     id:1        = sede                    */
    /*              0  : c_sc        sottocat/t  = t     [testi categoria] */
    /*                                                                      */
    /*                                                                      */
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

    t1 () {
      var lang = this.$store.getters.getCurrentLanguage;
      var t = this.c_langt;
      var l = this.c_lista - 1;
      var sc = this.c_sc - 1;
      if (this.c_sc == 0) return lang.t[t].lista[l].t[this.tn[0].id].text;
      else return lang.t[t].lista[l].sc[sc].t[this.tn[0].id].text;
    },
    t2 () {
      var lang = this.$store.getters.getCurrentLanguage;
      var t = this.c_langt;
      var l = this.c_lista - 1;
      var sc = this.c_sc - 1;
      if (this.c_sc == 0) return lang.t[t].lista[l].t[this.tn[1].id].text;
      else return lang.t[t].lista[l].sc[sc].t[this.tn[1].id].text;
    },
    t3 () {
      var lang = this.$store.getters.getCurrentLanguage;
      var t = this.c_langt;
      var l = this.c_lista - 1;
      var sc = this.c_sc - 1;
      if (this.c_sc == 0) return lang.t[t].lista[l].t[this.tn[2].id].text;
      else return lang.t[t].lista[l].sc[sc].t[this.tn[2].id].text;
    },
    t4 () {
      var lang = this.$store.getters.getCurrentLanguage;
      var t = this.c_langt;
      var l = this.c_lista - 1;
      var sc = this.c_sc - 1;
      if (this.c_sc == 0) return lang.t[t].lista[l].t[this.tn[3].id].text;
      else return lang.t[t].lista[l].sc[sc].t[this.tn[3].id].text;
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
