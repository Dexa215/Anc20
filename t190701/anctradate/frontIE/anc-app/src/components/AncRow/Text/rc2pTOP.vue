{% load l10n %}

<template>
  <v-row
    dense
    class="row mx-3 mt-2 px-2 pt-4"
  >
    <!-- class="cTop Anc_BC h100" -->
    <v-col
      cols="12"
      class="px-4 pt-4 cTop Anc_BC"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-row
          align="end"
          justify="center"
          class="w100"
        >
          <p>{{ t1 }}</p>
        </v-row>
        <v-row
          align="center"
          justify="center"
          class="w100"
        >
          <p>{{ t2 }}</p>
        </v-row>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "rc1pTOP",
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
.Anc_BC_GreenFluo {
  background-color: blanchedalmond;
}

/*Cards...*/
.c {
  border-radius: 45px; /*TL-TR-BR-BL*/
}
.cTop {
  border-radius: 45px 45px 0px 0px; /*TL-TR-BR-BL*/
}
.cBottom {
  border-radius: 0px 0px 45px 45px; /*TL-TR-BR-BL*/
}

.h100 {
  height: 100%;
}
.w100 {
  width: 100%;
}
</style>
