{% load l10n %}

<template>
  <div>
    <v-row
      dense
      class="row ma-2 pa-2"
    >
      <v-col cols="12">
        <v-card class="pa-4  cTop Anc_BC">
          <h2>{{ t1 }}</h2>
        </v-card>
        <v-card class="pa-4 cBottom Anc_BC">
          <h3>{{ t2 }}</h3>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "rc2h3",
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
    /*<Decoding...>*/
    c_langt () {
      return parseInt(this.langCode / 100);
    },
    c_lista () {
      return parseInt((this.langCode % 100) / 10);
    },
    c_sc () {
      return parseInt(this.langCode % 10);
    },
    /*</Decoding...>*/
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

    /*  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    lang () {
      return this.$store.getters.getCurrentLanguage;
    },
    languages () {
      return this.$store.getters.getLanguages;
    },
    languagesShow () {
      return this.$store.getters.getLanguagesShow;
    }
  },

  methods: {
    gotoR (r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    v (link) {
      this.$store.dispatch("vola", link);
    }
  },
  created () { },
  updated () { },
  mounted () { }
};
</script>

<style scoped>
/*<Color/Global>*/
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
/*</Color/Global>*/

/*<Cards...css>*/
.c {
  border-radius: 45px; /*TL-TR-BR-BL*/
}
.cTop {
  border-radius: 45px 45px 0px 0px; /*TL-TR-BR-BL*/
}
.cBottom {
  border-radius: 0px 0px 45px 45px; /*TL-TR-BR-BL*/
}
/*</Cards...css>*/
</style>
