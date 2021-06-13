{% load l10n %}

<template>
  <div class="SfBase">
    

    <v-row
      class="rT rT_lv rThLG rTbg2 mx-auto"
      v-show="drawerLeft"
    ></v-row>


    <div class="SfSpazio home4SfShUp AncAppBar_BC">spazio Up</div>

    <v-row
      justify="center"
      align="center"
      class="ancSederLG mx-auto"
    >
      <!--sx-->
      <v-col
        cols="2"
        class="carcol carcolsx bgt1"
      ></v-col>
      <!--cx-->
      <v-col
        cols="8"
        class="carcol carcolcx bgtc "
      >
        <!---->
        <v-row class="ancSedeCxrLG">
          <v-col cols="12">
            <v-card
              class="pa-4 cardround"
              light
            >
              <!--  * -->

              <!--v-row>sede ubicazione 2020 11 22</v-row-->

              <v-row
                dense
                class="row ma-2 pa-2"
              >
                <!-- row 00 -->
                <!-- Riassunto Sede -->
                <v-col cols="12">
                  <v-card
                    color="rgb(19, 21, 36)"
                    class="pa-4"
                  >
                    <h2>
                      {{ lang.t[1].lista[1].sc[0].t[0].text }}
                      {{ lang.t[1].lista[1].sc[0].t[1].text }} /
                      {{ lang.t[1].lista[1].sc[0].t[2].text }}
                      {{ lang.t[1].lista[1].sc[0].t[3].text }}
                    </h2>
                  </v-card>
                </v-col>
              </v-row>
              <!-- row 00 -->
              <!-- Riassunto Sede -->

              <!-- row 06 -->
              <!-- Cartina Google Maps -->

              <v-row
                dense
                class="row ma-2 pa-2"
              >
                <v-col cols="12">
                  <v-card class="pa-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.15881154439!2d8.905701070027497!3d45.71332899343703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478685f126a1ea85%3A0x7c16b78535fb871a!2sVia%20Carlo%20de%20Simoni%2C%201%2C%2021049%20Tradate%20VA!5e0!3m2!1sit!2sit!4v1576285621978!5m2!1sit!2sit"
                      width="100%"
                      height="550"
                      frameborder="0"
                      style="border:0;"
                      allowfullscreen="false"
                    ></iframe>
                  </v-card>
                </v-col>

                <!-- Cartina Google Maps -->
              </v-row>
              <!-- row 06 -->
              <v-row
                dense
                class="row ma-2 pa-2"
              >
                <!-- row 01 -->
                <!-- Descrizione Ubicazione -->
                <!--h3>iframe [0] {{maps[0].src}}</h3-->
                <v-col cols="12">
                  <v-card class="pa-4">
                    <blockquote>
                      <P class="text-justify">
                        {{ lang.t[1].lista[1].sc[0].t[4].text }}
                        {{ lang.t[1].lista[1].sc[0].t[6].text }}
                        <a
                          href="http://www.comune.tradate.va.it/"
                          style="color:green"
                        >Comune di Tradate</a>.
                      </P>
                    </blockquote>

                    <!--div class="column col-6 text-justify"></div-->
                    <!--column-->
                  </v-card>
                </v-col>
              </v-row>
              <!-- row 01 -->
              <!-- Descrizione Ubicazione -->

              <v-row
                dense
                class="row ma-2 pa-2"
              >
                <!-- row 02 -->
                <v-col cols="12">
                  <v-card class="pa-4">
                    <v-img
                      id="c10img"
                      width="100%"
                      src="/static/images/Foto/tradatecomune.jpg"
                    ></v-img>
                  </v-card>
                </v-col>
              </v-row>
              <!-- row 02 -->

              <v-row
                dense
                class="row ma-2 pa-2"
              >
                <!-- row 03 -->
                <v-col cols="12">
                  <v-card class="pa-4">
                    <blockquote>
                      <P class="text-justify">
                        {{ lang.t[1].lista[1].sc[0].t[7].text }}
                      </P>
                    </blockquote>
                  </v-card>
                  <!--div class="column col-6 text-justify"></div-->
                  <!--column-->
                </v-col>
              </v-row>
              <!-- row 03 -->

              <v-row
                dense
                class="row ma-2 pa-2"
              >
                <!-- row 04 -->
                <v-col cols="12">
                  <v-card class="pa-4">
                    <iframe
                      id="c1img"
                      src="https://www.google.com/maps/embed?pb=!4v1576284624812!6m8!1m7!1sXkQU4fJD85BZziGDdsNGNw!2m2!1d45.71363123189879!2d8.906257580735!3f290.300251927189!4f2.186880441983959!5f1.1924812503605782"
                      width="100%"
                      height="550"
                      frameborder="0"
                      style="border:0;"
                      allowfullscreen="false"
                    ></iframe>
                  </v-card>
                </v-col>
              </v-row>
              <!-- row 04 -->

              <v-row
                dense
                class="row ma-2 pa-2"
              >
                <!-- row 05 -->
                <v-col cols="12">
                  <v-card class="pa-4">
                    <blockquote>
                      <P class="text-justify">{{
                        lang.t[1].lista[1].sc[0].t[8].text
                      }}</P>
                    </blockquote>
                  </v-card>
                </v-col>
              </v-row>
              <!-- row 05 -->

              <v-row
                dense
                class="row ma-2 pa-2"
              >
                <!-- row 05 inps-->
                <v-col cols="12">
                  <v-card class="pa-4">
                    <blockquote>
                      <P class="text-justify">
                        {{ lang.t[1].lista[1].sc[0].t[9].text }}
                        <a
                          style="color:green"
                          href="https://www.inps.it/nuovoportaleinps/default.aspx"
                        >INPS</a>
                        . Gli orari di apertura sono garantiti dalla presenza di
                        un Consigliere. Per ulteriori informazioni sugli
                        <a
                          @click="gotoR('sedeorari/')"
                          style="color:green"
                        >{{
                          lang.t[1].lista[1].sc[0].t[5].text
                        }}</a>
                        visitate la pagina dedicata.
                      </P>
                    </blockquote>
                  </v-card>
                </v-col>
              </v-row>
              <!-- row 05 inps-->

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
        class="carcol carcoldx bgt1"
      ></v-col>
    </v-row>

    <v-parallax
      class="SfParallaxSede"
      src="/static/images/bg/bg8.jpg"
      height="2000"
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

<v-row>
    <!--<div class="SfImmagine">sfondo Immagine</div>-->
    <div class="container-fluid text-center">
      <AncIntestazioneFine></AncIntestazioneFine>
    </div>
    <!-- AncIntestazioneFine :C="C" :CS="CS" :categorie="categorie" @gotoR="gotoR"></AncIntestazioneFine-->
</v-row>

    <div class="SfSpazio home4SfShDown AncAppBar_BC">spazio Down</div>
    <!--/* *** */-->
  </div>
</template>

<script>
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";

export default {
  name: "sedeubi4lg",
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
    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    lang () {
      return this.$store.getters.getCurrentLanguage;
    },
    languages () {
      return this.$store.getters.getLanguages;
    },
    languagesShow () {
      return this.$store.getters.getLanguagesShow;
    },
    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
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
    },
    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
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
    },
    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    categorie () {
      return this.$store.getters.categorie;
    },
    C () {
      return this.$store.getters.getC;
    },
    CS () {
      return this.$store.getters.getCS;
    },
    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
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
    console.log("tess4lg oncreate-- > start");
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
.ancSedeLG {
  position: absolute;
  z-index: 5;
  height: 100%;
  width: 100%;
  background-color: red;
}
.ancSederLG {
  position: absolute;
  z-index: 5;
  height: 9000px;
  width: 100%;
  background-color: orange;
}

.ancSedeCxrLG {
  position: absolute;
  z-index: 5;
  height: 3000px;
  width: 100%;
  background-color: yellow;
}

.h3 {
  color: black;
}
.cardround {
  border-radius: 25px 45px 45px 45px; /*TL-TR-BR-BL*/
  height: 100%;
  background-color: red;
}

.rT_lv {
  /* row Transparent level  */
  position: absolute;
  z-index: 6;
}

.bgt1 {
  background-color: blueviolet;
}
.bgtc {
  background-color: brown;
}
</style>
