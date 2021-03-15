{% load l10n %}

<template>
  <div>
    <v-row
      dense
      class="row ma-2 pa-2"
    >
      <v-col cols="12">
        <v-card
          class="pa-4 c Anc_BC"
          align="center"
        >
          <iframe
            v-if="imgtype == 'iframe'"
            :src="src"
            :height="height"
            width="100%"
            frameborder="0"
            style="border:0;"
            allowfullscreen="false"
          ></iframe>
          <v-img
            v-if="imgtype == 'img'"
            :src="src"
            :height="height"
            width="100%"
            style="border:0;"
            allowfullscreen="false"
          >
          </v-img>
          <v-img
            v-if="imgtype == 'imgSmall'"
            :src="src"
            :height="height"
            :width="width"
            style="border:0;"
            allowfullscreen="false"
          >
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "rc1Img",
  components: {},

  props: {
    src: { type: String },
    height: { type: Number },
    width: { type: Number },
    imgtype: { type: String }
  },
  data () {
    return {
      text: `Hello`
    };
  },
  computed: {
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
.c {
  border-radius: 45px; /*TL-TR-BR-BL*/
}
.cTop {
  border-radius: 45px 45px 0px 0px; /*TL-TR-BR-BL*/
}
.cBottom {
  border-radius: 0px 0px 45px 45px; /*TL-TR-BR-BL*/
}

.Anc_BC_GreenFluo {
  background-color: blanchedalmond;
}
</style>
