<template>
  <div>
    <v-app-bar
      fixed
      :class="cab"
      :height="h"
      clipped-right
      :color="AncAppBar_BC"
      dark
      scroll-target="#playground-example"
      :elevate-on-scroll="elevateOnScroll"
      :hide-on-scroll="hideOnScroll"
      :fade-on-scroll="fadeOnScroll"
      :fade-img-on-scroll="fadeImgOnScroll"
      :inverted-scroll="invertedScroll"
      :collapse="collapse"
      :collapse-on-scroll="collapseOnScroll"
      :shrink-on-scroll="shrinkOnScroll"
      :extended="extended"
    >
      <v-row class="r r_BC">
        <!-- BARRA PRINCIPALE -->

        <v-col :class="rcS">
          <!-- MACRO COLONNA SINISTRA ************************************************************************************************************ -->
          <v-row class="iconavR mx-auto" justify="center" align="center">
            <!-- ICONE NAVIGAZIONE - SX class="avatar" -->
            <v-col class="icoSx iconavcSbassa" cols="12">
              <v-row class="rIco" justify="start" align="center">
                <transition
                  name="custom-classes-transition"
                  enter-active-class="animated bounceInLeft"
                  leave-active-class="animated fadeOutUp"
                >
                  <!--TODO: RIPRISTINARE V-BTN-->
                  <v-btn
                    rounded
                    class="ml-3"
                    v-if="categorie[C/10-1].descrizione"
                    @click="gotoR(categorie[C/10-1].link)"
                    @mouseenter="DSCset('true')"
                  >
                    <a class="mx-1 caption">
                      <span class="mx-1" style="color:white;">{{categorie[C/10-1].descrizione}}</span>
                      <span class="mx-1" v-if="CS!=0" style="color:white;">\</span>
                      <span
                        class="mx-1"
                        v-if="CS!=0"
                        style="color:burlywood;"
                      >{{categorie[C/10-1].sottocategorie[(CS-C)-1].descrizione }}</span>
                    </a>
                  </v-btn>

                  <!-- TODO: RIPRISTINARE V-BTN-->
                </transition>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <!-- MACRO COLONNA SINISTRA ************************************************************************************************************ -->
        <v-col class="rcC rcX rcC_BC" cols="4">
          <!-- MACRO COLONNA CENTRO ************************************************************************************************************ -->
          <!--v-expand-transition v-show="!drawerLeft" -->
          <v-row class="rcCr rcCr_BC" align="center" justify="center" dense style="z-index: 2">
            <v-col class="rcCrcC rcCrcX rcCrcC_BC">
              <v-expand-x-transition>
                <v-avatar class="avatar" size="48" v-if="!drawerLeft">
                  <!-- drawer aperto right="True" -->
                  <img
                    class="drwOpen"
                    src="/static/images/Icone/anclogo2012.gif"
                    alt="ancTradate"
                    @click="gotoR('/')"
                    @mouseover="hoveravatar = true"
                    @mouseleave="hoveravatar = false"
                  />
                </v-avatar>
                <v-avatar size="48" right="true" v-else>
                  <!-- drawer aperto -->
                  <v-icon size="48" @click="setDF">mdi-close-circle-outline</v-icon>
                </v-avatar>
              </v-expand-x-transition>
              <!-- Avatar -->
            </v-col>
          </v-row>

          <!--/v-expand-transition-->
        </v-col>
        <!-- MACRO COLONNA CENTRO ************************************************************************************************************ -->
        <!-- MACRO COLONNA DESTRA ************************************************************************************************************ -->
        <v-col :class="rcD">
          <v-row class="iconavR mx-auto" justify="center" align="center">
            <!-- ICONE NAVIGAZIONE - DX -->
            <v-col v-if="languagesShow && !drawerLeft" cols="12" class="icoSx iconavcDD">
              <v-row class="rIco" align="center" justify="center">
                <v-icon
                  @click="SDL"
                  rounded
                  v-show="languagesShow && !drawerLeft"
                  class="mr-3"
                  size="48"
                >mdi-close-circle-outline</v-icon>
                <v-btn
                  v-for="lang in languages"
                  :key="lang.pk"
                  class="mx-1 AncBtnLanguages"
                  icon
                  fab
                  rounded
                  @click="ScL(lang.code)"
                >
                  <v-img class="mx-1 AncIconLang" large dark :src="lang.icona"></v-img>
                </v-btn>
              </v-row>
            </v-col>

            <v-col class="icoSx iconavcDD" cols="3">
              <v-row class="rIco" align="center" justify="center">
                <v-btn v-show="!languagesShow && drawerLeft" class="mx-3" icon @click="gotoR('/')">
                  <v-icon class="mx-3 AncIconLang" large dark>mdi-bank</v-icon>
                </v-btn>
                <!-- Language... -->
                <v-expand-x-transition>
                  <v-btn
                    class="mx-1"
                    icon
                    v-show="!drawerLeft && !languagesShow"
                    fab
                    rounded
                    style="background-color: transparent"
                    @click="SDL"
                  >
                    <v-img class="mx-1 AncIconLang" large dark :src="lang.icona"></v-img>
                  </v-btn>
                </v-expand-x-transition>
              </v-row>
            </v-col>

            <v-col class="icoSx iconavcS" cols="5">
              <v-row class="rIco" align="center">
                <!-- search... -->
                <v-expand-x-transition>
                  <v-btn
                    class="mx-1"
                    icon
                    v-show="!drawerLeft & !languagesShow"
                    fab
                    rounded
                    style="background-color: transparent"
                  >
                    <v-icon class="mx-3 AncIconColor" large dark>mdi-magnify</v-icon>
                  </v-btn>
                </v-expand-x-transition>
              </v-row>
            </v-col>
            <v-col v-if="!languagesShow" class="icoSx iconavcDD" cols="1">
              <v-row class="rIco" justify="center" align="center">
                <v-btn icon>
                  <a class="caption" style="color: antiquewhite">sm</a>
                </v-btn>
              </v-row>
            </v-col>
            <v-col v-if="!languagesShow" class="icoSx iconavcDD" cols="2">
              <v-row class="rIco" justify="end" align="center">
                <!-- BUTTON MENU... -->

                <v-btn icon v-model="iconX" @click.stop="setD">
                  <v-icon v-if="drawerLeft" large>{{ iconO }}</v-icon>
                  <v-icon v-else large>{{ iconC }}</v-icon>
                </v-btn>
              </v-row>
            </v-col>

            <!-- ICONE NAVIGAZIONE - DX -->
          </v-row>
        </v-col>
        <!-- MACRO COLONNA DESTRA ************************************************************************************************************ -->
      </v-row>
      <!-- BARRA PRINCIPALE -->
    </v-app-bar>
  </div>
</template>




<script>
import router from "@/router";
export default {
  name: "b2sm",

  components: {},

  data() {
    return {
      langIco: "/static/icons/Nations/italy.png",

      expand: "true",
      expandSC: "false",
      h: "80px",
      cab: "AncAppBarE cBE-Vis",

      rvt: 10,
      breweries: [],
      isLoading: false,
      tree: [],
      types: [],
      footercolor: "#0052cc",
      hoveravatar: false,
      right: false,
      left: false,
      elevateOnScroll: false,
      hideOnScroll: false,
      fadeOnScroll: false,
      fadeImgOnScroll: false,
      invertedScroll: false,
      collapse: false,
      collapseOnScroll: false,
      shrinkOnScroll: true,
      extended: false,

      AncAppBar_BC: "rgb(19, 21, 36)"
    };
  },
  props: {
    height: {
      type: String
    }
  },

  computed: {
    lang() {
      return this.$store.getters.getCurrentLanguage;
    },
    languages() {
      return this.$store.getters.getLanguages;
    },
    languagesShow() {
      return this.$store.getters.getLanguagesShow;
    },
    /*  -----------------------------------------------------------------------   */
    drawer() {
      return this.$store.getters.getDrawer;
    },
    drawerLeft() {
      return this.$store.getters.getDrawerLeft;
    },
    drawerRight() {
      return this.$store.getters.getDrawerRight;
    },
    drawerSottocategoria() {
      return this.$store.getters.getDrawerSottocategoria;
    },
    /*  -----------------------------------------------------------------------   */
    iconX() {
      return this.$store.getters.getIconX;
    },
    iconO() {
      return this.$store.getters.getIconO;
    },
    iconOdx() {
      return this.$store.getters.getIconOdx;
    },
    iconC() {
      return this.$store.getters.getIconC;
    },
    iconCdx() {
      return this.$store.getters.getIconCdx;
    },
    /*  -----------------------------------------------------------------------   */
    categorie() {
      return this.$store.getters.categorie;
    },
    C() {
      return this.$store.getters.getC;
    },
    CS() {
      return this.$store.getters.getCS;
    },
    requestUser() {
      return this.$store.getters.requestUser;
    },
    requestUserIsStaff() {
      return this.$store.getters.requestUserIsStaff;
    },
    requestUserIsSuper() {
      return this.$store.getters.requestUserIsSuper;
    },
    requestUserAvatar() {
      return this.$store.getters.requestUserAvatar;
    },
    requestUserBio() {
      return this.$store.getters.requestUserBio;
    },
    requestToken() {
      return this.$store.getters.requestToken;
    },
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* DINAMIC CSS */
    rcS() {
      return this.$store.getters.rcS;
    },
    rcD() {
      return this.$store.getters.rcD;
    },
    rcU() {
      return this.$store.getters.rcU;
    }
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  },

  methods: {
    gotoR(r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    SDL() {
      /*Switch Drawer Language*/
      this.$store.dispatch("switchDrawerLang");
    },
    ScL(val) {
      /*Set Current Language*/
      this.$store.dispatch("setL", val);
    },
    DSCset(state) {
      this.$store.dispatch("DSCset", state);
    },
    setD() {
      this.$store.dispatch("setD");
    },
    setDF() {
      this.$store.dispatch("setDF");
    }
  },
  updated() {
    /*this.setcolor();*/
  },
  mounted() {
    /*this.setcolor();*/
    this.h = this.height;
    //console.log(this.$vuetify.breakpoint);
  }
};
</script>

<style media="screen">
</style>
