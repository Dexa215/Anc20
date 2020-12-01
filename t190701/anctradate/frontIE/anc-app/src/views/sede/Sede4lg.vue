{% load l10n %}

<template>
  <div class="SfBase">
    <!---->
    <v-row
      class="rT rT_lv rThLG rTbg2 mx-auto"
      v-show="drawerLeft"
    ></v-row>
    <div class="SfSpazio home4SfShUp AncAppBar_BC">spazio Up</div>
    <v-parallax
      class="SfParallaxSede"
      src="/static/images/bg/bg8.jpg"
      height="750"
    ></v-parallax>

    <v-row
      justify="start"
      align="start"
      class="ancsederLG mx-auto"
    >
      <!--sx-->
      <v-col
        cols="2"
        class="carcol carcolsx"
      >sx</v-col>
      <!--sx-->
      <!--cx--  ----------------------------------------  cx-->
      <v-col
        cols="8"
        class="sedecolcx"
      >
        <v-card class="sedecardcx Anc_BC_BlueDark">
          <rowcard4
            :langCode="110"
            :t1="0"
            :t2="1"
            :t3="2"
            :t4="3"
          ></rowcard4>

          cx
          <v-row
            dense
            class="row ma-2 pa-2"
          >
            <!-- row 00 -->
            <!-- Riassunto Sede -->
            <v-col cols="12">
              <v-card class="pa-4  Anc_BC">
                <h2>
                  {{ lang.t[1].lista[1].sc[0].t[0].text }}
                </h2>
              </v-card>
              <v-card class="pa-4 Anc_BC">
                <h2>
                  {{ lang.t[1].lista[1].sc[0].t[1].text }} /
                  {{ lang.t[1].lista[1].sc[0].t[2].text }}
                  {{ lang.t[1].lista[1].sc[0].t[3].text }}
                </h2>
              </v-card>
            </v-col>
          </v-row>
          <!-- row 00 -->
        </v-card>
      </v-col>
      <!--cx--  ----------------------------------------  cx-->
      <!--dx-->
      <v-col
        cols="2"
        class="carcol carcoldx"
      >dx</v-col>
      <!--dx-->
    </v-row>

    <!--/* *** */-->
  </div>
</template>

<script>
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import ancClock from "@/components/AncObjects/AncClock.vue";
import rowcard4 from "@/components/AncRow/Text/rowcard4.vue";

export default {
  name: "sedeubi4lg",
  components: {
    AncIntestazioneFine,
    ancClock,
    rowcard4
  },

  props: {},
  data () {
    return {
      testo1: "testo 1 ...",
      testo2: "testo 2 ...",
      scr: "",
      focusOn: false,
      snackbar: true,
      text: `Hello, I'm a snackbar`,
      dilog: false
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
    } /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
    drawer () {
      return this.$store.getters.getDrawer;
    },
    drawerLeft () {
      return this.$store.getters.getDrawerLeft;
    },
    drawerRight () {
      return this.$store.getters.getDrawerRight;
    },
    drawerSottocategoria () {
      return this.$store.getters.getDrawerSottocategoria;
    } /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
    iconX () {
      return this.$store.getters.getIconX;
    },
    iconO () {
      return this.$store.getters.getIconO;
    },
    iconOdx () {
      return this.$store.getters.getIconOdx;
    },
    iconC () {
      return this.$store.getters.getIconC;
    },
    iconCdx () {
      return this.$store.getters.getIconCdx;
    } /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
    caegorie () {
      return this.$store.getters.categorie;
    },
    C () {
      return this.$store.getters.getC;
    },
    CS () {
      return this.$stoe.getters.getCS;
    } /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
    requestUser () {
      return this.$store.getters.requestUser;
    },
    requestUserIsStaf () {
      return this.$store.getters.requestUserIsStaff;
    },
    requestUserIsSper () {
      return this.$store.getters.requestUserIsSuper;
    },
    requestUserAatar () {
      return this.$store.getters.requestUserAvatar;
    },
    requestUserBio () {
      return this.$store.getters.requestUserBio;
    },
    requestToken () {
      return this.$store.getters.requestToken;
    } /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
    rcS () {
      return this.$store.getters.rcS;
    },
    rcD () {
      return this.$store.getters.rcD;
    },
    rcU () {
      return this.$store.getters.rcU;
    },
    /*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ admin () {
      return this.$store.getters.admin;
    },
    admincommands () {
      return this.$store.getters.admincommands;
    } /*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
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
  updated () {
    console.log("tess4lg oncreate-- > start");
  },
  mounted () { }
};
</script>

<style media="screen" scoped>
.ancsederLG {
  position: absolute;
  z-index: 5;
  /*height: 600px;*/
  height: 1000px;
  width: 100%;
  background-color: transparent;
  opacity: 1;
  /*transparent;*/
  padding-top: 20px;
  padding-bottom: 20px;
}
.sedecolcx {
  background-color: transparent;
  opacity: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
}

.sedecardcx {
  opacity: 0.8;
  padding-top: 20px;
  padding-bottom: 20px;

  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 45px;
}

.SfParallaxSede {
  /* Sfondo Parallax */
  position: absolute;
  z-index: 1;
  opacity: 0.15;
  width: 100%;
}

.home4SfShUp {
  height: 150px;
  background-color: transparent;
}
.home4SfShDown {
  height: 50px;
}

.h3 {
  color: black;
}
.cardround {
  border-radius: 45px 45px 45px 45px; /*TL-TR-BR-BL*/
}

.rT_lv {
  /* row Transparent level  */
  position: absolute;
  z-index: 6;
}
.it {
  height: 100%;
}
.it1 {
  background-color: brown;
}
.it2 {
  background-color: chartreuse;
  height: 100%;
}
.it3 {
  background-color: darkcyan;
}
.h1000 {
  height: 1000px;
}
.h2000 {
  height: 100%;
}
.rel1 {
  position: relative;
}
.rel2 {
  position: relative;
}
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
