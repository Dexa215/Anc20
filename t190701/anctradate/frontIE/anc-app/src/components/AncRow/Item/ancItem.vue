{% load l10n %}

<template>
  <v-row
    class="row ma-2 pa-2 dark"
    dense
    align="center"
    justify="center"
    id="rci"
    dark
  >
    <v-col cols="2">
      <v-img
        :src="item.icon"
        :height="height"
        :width="width"
        style="border:0;"
        allowfullscreen="false"
        @click="v(item.link)"
        @mouseenter="icoBIG()"
        @mouseleave="icoSMALL"
        class="linkicon"
        :id="itemid"
      >
      </v-img>
    </v-col>
    <v-divider dark vertical></v-divider>
    <v-col cols="4" @mouseenter="icoBIG()" @mouseleave="icoSMALL">{{
      item.descrizione
    }}</v-col>
    <v-divider dark vertical></v-divider>
    <v-col cols="4" @mouseenter="icoBIG()" @mouseleave="icoSMALL">{{
      item.link
    }}</v-col>
  </v-row>
</template>
<!--
<v-alert color="#2A3B4D" dark icon="mdi-firework" dense v-if="msg1">
    <v-row>
      <v-col cols="6">itemid: "" </v-col>
      <v-col cols="6">{{ itemid }}</v-col>
    </v-row>

    <v-row>
      <v-col cols="6">itemidtxt: "" </v-col>
      <v-col cols="6">{{ itemidtxt }}</v-col>
    </v-row>
  </v-alert>
-->

<script>
/*import $ from "jquery";
 */
export default {
  name: "ancItem",
  components: {},

  props: {
    item: { type: Array }
  },
  data() {
    return {
      text: `Hello`,
      msg1: false,
      height: "45",
      width: "45",
      itemid: "",
      itemidtxt: ""
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
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    categorie() {
      return this.$store.getters.categorie;
    },
    C() {
      return this.$store.getters.getC;
    },
    CS() {
      return this.$store.getters.getCS;
    }
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
  },

  methods: {
    /*2020 06 16*/

    gotoR(r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    v(link) {
      /*this.$emit("vola", link);*/
      this.$store.dispatch("vola", link);
    },

    /*css changes*/
    icoBIG() {
      this.msg1 = true;
      /*$(this.itemidtxt).css({
        transform: "scale(1.2, 1.2) rotate(5deg)"
      });*/

      /*$("#id")    .css({ transform: "scale(1.5, 1.5)" });*/
      /*$(".class") .css({ transform: "scale(1.5, 1.5)" });*/
      /*this.msg1 = true;*/
    },
    icoSMALL() {
      /*$(this.itemidtxt).css({ transform: "scale(1, 1) rotate(0deg)" });*/
      /*this.msg1 = false;*/
    },

    chgcol() {
      /*$("linkicon").css("background-color", "yellow");*/
      this.msg1 = !this.msg1;
      /* 2020 12 19 TEST JQUERY OK*/
      /*$(".linkicon").css({ transform: "scale(1.2, 2)", color: "red" });*/
      /* 2020 12 19 TEST JQUERY OK*/
      /*$("#rci").css({ color: "red" });*/
    }
  },

  created() {
    this.itemid = this.item.id;
    this.itemidtxt = "#" + this.item.id;
  },
  updated() {},
  mounted() {}
};
</script>

<style media="screen" scoped>
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
.w100 {
  width: 90%;
}
#rci {
  width: 80%;
  /*background-color: darkseagreen;*/
  background-color: rgb(1, 4, 20);
  opacity: 0.95;
  color: blanchedalmond;
  border-radius: 5px 15px 5px 15px;
}
#rci:hover {
  width: 90%;
  /*background-color: darkseagreen;*/
  background-color: rgb(11, 45, 68);
  opacity: 0.95;
  color: blanchedalmond;
  border-radius: 5px 20px 5px 20px;
}
#rci:active {
  width: 90%;
  /*background-color: darkseagreen;*/
  background-color: rgb(3, 46, 5);
  color: blanchedalmond;
  border-radius: 5px 20px 5px 20px;
}
.linkicon {
  transform: scale(1, 1);
}
.linkicon:hover {
  transform: scale(1.2, 1.2);
}
</style>
