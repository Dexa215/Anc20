{% load l10n %}

<template>
  <div class="SfBase">
    <!---->
    <v-row
      class="rT rT_lv rThLG rTbg2 mx-auto"
      v-show="drawerLeft"
    ></v-row>
    <v-parallax
      class="SfParallax"
      src="/static/images/bg/bg8.jpg"
      height="850"
    ></v-parallax>
    <v-row
      class="r_main r_main_h_LG mx-auto"
      justify="start"
      align="start"
    >
      <!--sx-->
      <v-col
        cols="2"
        class="carcol carcolsx"
      ></v-col>
      <!--cx-->
      <v-col
        cols="8"
        class="carcol carcolcx"
      >
        <v-card class="card_main Anc_BC_BlueDark">
          <v-row
            dense
            class="row ma-2 pa-2"
            align="center"
            justify="center"
          >
            <!--00-->

            <!--  * -->
            <v-row
              dense
              class="row row1 ma-2 pa-2"
              align="center"
              justify="center"
            >
              <!--h3>Sei un collega in congedo e non ti sei ancora iscritto all'ANC?</h3-->
              <!--h3 class="font-weight-thin colorBlue"></h3-->
              <h5 class="colorBlue">{{ lang.t[1].lista[6].t[1].text }}</h5>
              <br />
            </v-row>
            <!--  * -->

            <!--  * -->
            <v-row
              dense
              class="row row2 ma-2 pa-2"
              align="center"
              justify="center"
            >
              <v-img
                src="/static/images/Materiale/carrozza.png"
                max-width="250px"
              ></v-img>
            </v-row>
            <!--  * -->
            <!--  * -->
            <v-row
              dense
              class="row row1 ma-2 pa-2"
              align="center"
              justify="center"
            >
              <h2 class="display-2 colorBlue">
                <!--strong>E cosa aspetti, la carrozza?</strong-->
                <strong>{{ lang.t[1].lista[6].t[2].text }}</strong>
              </h2>
            </v-row>
            <!--  * -->
            <!--  * -->
            <v-row
              dense
              class="row ma-2 pa-2"
              align="center"
              justify="center"
            >
              <!--h3>Bastano 2 foto formato tessera. Facile no?</h3-->
            </v-row>
            <v-row
              dense
              class="row ma-2 pa-2"
              align="center"
              justify="center"
            >
              <!--come fare-->
              <!--raised outlined-->
              <v-btn
                @click="gotoR('/tesseramentoprassi')"
                elevation="2"
                rounded
                color="success"
              >{{ lang.t[1].lista[6].t[0].text }}</v-btn>
            </v-row>
            <!--  * -->

            <!--00-->
          </v-row>
        </v-card>
        <AncIntestazioneFine></AncIntestazioneFine>
        <!--spazio down LG-->
        <div class="r_main_hsDown_LG"></div>

        <!--cx-->
      </v-col>
      <!--dx-->
      <v-col
        cols="2"
        class="carcol carcoldx"
      ></v-col>
    </v-row>
  </div>
</template>

<script>
//import AncIntestazioneHome from "@/components/AncIntestazioneHome.vue";
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";

export default {
  name: "links4lg",
  components: {
    AncIntestazioneFine
  },

  prop: {},
  data () {
    return {
      scr: "",
      focusOn: false,
      snackbar: true,
      text: `Hello, I'm a snackbar`,
      dialog: false
    };
  },
  computed: {
    /*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    lang () {
      return this.$store.getters.getCurrentLanguage;
    },
    languages () {
      return this.$store.getters.getLanguages;
    },
    languagesShow () {
      return this.$store.getters.getLanguagesShow;
    } /*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
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
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
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
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
    categorie () {
      return this.$store.getters.categorie;
    },
    C () {
      return this.$store.getters.getC;
    },
    CS () {
      return this.$store.getters.getCS;
    } /*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
    requestUser () {
      return this.$store.getters.requestUser;
    },
    requestUserIsStaff () {
      return this.$store.getters.requestUserIsStaff;
    },
    requestUserIsSuper () {
      return this.$store.getters.requestUserIsSuper;
    },
    requestUserAvatar () {
      return this.$store.getters.requestUserAvatar;
    },
    requestUserBio () {
      return this.$store.getters.requestUserBio;
    },
    requestToken () {
      return this.$store.getters.requestToken;
    } /*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
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
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    admin () {
      return this.$store.getters.admin;
    },
    admincommands () {
      return this.$store.getters.admincommands;
    } /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
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
      /*this.$emit("vola", link);*/
      this.$store.dispatch("vola", link);
    }
  },

  updated () { },

  mounted () { },

  created () { }
};
</script>

<style media="screen" scoped>
/*2021 06 21*/
/*20201204*/
/*general...*/
.rT_lv {
  position: absolute;
  z-index: 6;
} /*Row semi-Transparent level on MENU */
.SfParallax {
  position: absolute;
  z-index: 1;
  opacity: 0.15;
  width: 100%;
}
.r_main {
  position: absolute;
  z-index: 5;
  opacity: 1;
  background-color: transparent;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.cx_main {
  opacity: 1;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
}
.card_main {
  opacity: 0.8;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 45px;
}

/*responsive...*/
.r_main_h_LG {
  margin-top: 150px;
  height: 600px;
}
.r_main_hsUp_LG {
  height: 150px;
}
.r_main_hsDown_LG {
  height: 50px;
}
/**/
.Anc_BC_BlueDark {
  background-color: rgb(1, 4, 20);
  color: blanchedalmond;
}
#rci {
  /*background-color: darkseagreen;*/
}

.row1 {
  width: 100%;
}

.row2 {
  width: 100%;
  border-radius: 20px;
  background-color: white;
}
</style>
