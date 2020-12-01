{% load l10n %}

<template>
  <div class="SfBase">
    <!---->
    <v-row
      class="rT rT_lv rThLG rTbg2 mx-auto"
      v-show="drawerLeft"
      height="1500"
    ></v-row>
    <div class="SfSpazio home4SfShUp AncAppBar_BC">spazio Up</div>

    <v-row
      justify="center"
      align="center"
      class="anchomerLG mx-auto"
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
        <!---->
        <v-row>
          <v-col cols="12">
            <v-card
              class="pa-4 cardround"
              light
            >
              <!--  * -->
              <v-row
                dense
                class="row ma-2 pa-2"
                align="center"
                justify="center"
              >
                <!--h3>Sei un collega in congedo e non ti sei ancora iscritto all'ANC?</h3-->
                <!--h3 class="font-weight-thin colorBlue"></h3-->
                <h5 class="colorBlue">
                  {{ lang.t[1].lista[6].sc[0].t[0].text }}
                </h5>

                <v-expansion-panels
                  focusable
                  inset
                >
                  <!--v-expansion-panel v-for="(item, i) in 5" :key="i"-->
                  <v-expansion-panel
                    v-for="(item, i) in lang.t[1].lista[6].sc[0].steps"
                    :key="i"
                  >
                    <v-expansion-panel-header :expand-icon="item.icon">{{
                      item.title
                    }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <!--v-row>{{ i }}</v-row-->
                      <v-row class="ma-3">{{ item.text }}</v-row>
                      <v-row
                        class="ma-3"
                        justify="center"
                        align="center"
                      >
                        <v-img
                          :src="item.picture"
                          max-height="250"
                          max-width="150"
                        >{{ i }}{{ item.picture }}</v-img>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <br />
              </v-row>
              <!--  * -->
            </v-card>
          </v-col>
        </v-row>
        <!-- row 00 -->
        <!--cx-->
      </v-col>
      <!--dx-->
      <v-col
        cols="2"
        class="carcol carcoldx"
      ></v-col>
    </v-row>

    <v-parallax
      class="SfParallaxTess"
      src="/static/images/bg/bg8.jpg"
      height="500"
    ></v-parallax>
    <!-- <span>spiegone:</span>-->

    <v-row
      justify="center"
      align="center"
      class="mx-auto"
    >
      <span>
        <!--Prassi per il tesseramento-->
        <h4 class="font-weight-thin colorBlue">
          {{ lang.t[1].lista[6].t[0].text }}
        </h4>
      </span>
    </v-row>

    <!-- <span>spiegone:</span>-->
    <v-row>
      <div
        class="container-fluid text-center"
        style="background-color:transparent "
      >
        <span v-if="CS == 0">{{ categorie[C / 10 - 1].descrizione }}</span>
        <span v-else>
          {{ categorie[C / 10 - 1].sottocategorie[CS - C - 1].descrizione }}
        </span>
      </div>
    </v-row>

    <!--<div class="SfImmagine">sfondo Immagine</div>-->
    <div class="container-fluid text-center">
      <AncIntestazioneFine></AncIntestazioneFine>
    </div>
    <!-- AncIntestazioneFine :C="C" :CS="CS" :categorie="categorie" @gotoR="gotoR"></AncIntestazioneFine-->

    <div class="SfSpazio home4SfShDown AncAppBar_BC">spazio Down</div>
    <!--/* *** */-->
  </div>
</template>

<script>
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";

export default {
  name: "links4lg",
  components: {
    AncIntestazioneFine
  },

  props: {},
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
    categorie () {
      return this.$store.getters.categorie;
    },
    C () {
      return this.$store.getters.getC;
    },
    CS () {
      return this.$store.getters.getCS;
    } /*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */,
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
      /*this.$emit("vola", link);*/

      this.$store.dispatch("vola", link);
    }
  },

  created () {
    // eslint-disable-next-line no-console
    console.log("'tess4lg oncreate-- > start'");
  },
  updated () { },
  mounted () { }
};
</script>

<style media="screen" scoped>
.home4SfShUp {
  height: 150px;
  background-color: transparent;
}
.home4SfShDown {
  height: 78px;
}
.anchomerLG {
  position: absolute;
  z-index: 5;
  height: 300px;
  width: 100%;
  background-color: transparent;
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
</style>
