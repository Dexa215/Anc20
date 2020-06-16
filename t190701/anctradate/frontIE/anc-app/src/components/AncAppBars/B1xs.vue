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
            <!-- ICONA CATEGORIA CORRENTE -->
            <v-col class="icoSx iconavcSbtnCategoriaCorrente" cols="12">
              <v-row class="rIco" justify="center" align="center">
                <!-- categoria corrente -->
                <transition
                  name="custom-classes-transition"
                  enter-active-class="animated bounceInLeft"
                  leave-active-class="animated fadeOutUp"
                >
                  <v-icon
                    class="AncIconColor"
                    large
                    dark
                    @mouseenter="DSCset('true')"
                    @click="gotoR(categorie[C/10-1].link)"
                  >{{categorie[C/10-1].icona}}</v-icon>
                </transition>
                <!-- categoria corrente -->
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
            <!--
            <v-col class="icoSx iconavcDD" cols="3">
              <v-row class="rIco" align="center" justify="center">
                <v-btn v-if="!languagesShow && drawerLeft" class="mx-3" icon @click="gotoR('/')">
                  <v-icon class="mx-3 AncIconLang" large dark>mdi-bank</v-icon>
                </v-btn>
              </v-row>
            </v-col>
            -->

            <v-col v-if="languagesShow && !drawerLeft" cols="12">
              <v-row class="rIco" align="center" justify="center">
                <!-- lista di linguaggi... -->
                <!-- @click="SDL" -->
                <!-- -->
                <v-btn @click="SDL" rounded v-show="languagesShow && !drawerLeft" class="mx-3">
                  {{lang.t[0].lista[2].t[0].text}}
                  <!-- lang.t[0] == components-->
                  <!-- lang.t[0].lista[2] == Menu Language-->
                  <!-- lang.t[0].lista[2].t[0] == Menu Language testo 0 -->
                </v-btn>
                <!-- -->
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

            <v-col class="icoSx iconavcS" cols="6">
              <v-row class="rIco" align="center">
                <!-- Language... 
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
                -->
                <!-- TEST OK 2020 05 10-->
                <!--
                    {{lang.code}}
                    {{lang.icona}}
                    <v-img class="mx-3 AncIconLang" large dark :src="langIco"></v-img>
                -->
                <!--

                  </v-btn>
                </v-expand-x-transition>
                Language...-->

                <!-- search... 
                <v-expand-x-transition>
                  <v-btn
                    class="mx-1"
                    icon
                    v-show="!drawerLeft & !languagesShow"
                    fab
                    rounded
                    style="background-color: transparent"
                  >
                    <v-icon size="48" class="mx-3 AncIconColor" large dark>mdi-magnify</v-icon>
                  </v-btn>
                </v-expand-x-transition>
                search...-->
              </v-row>
            </v-col>

            <v-col v-if="!languagesShow" class="icoSx iconavcDD" cols="6">
              <v-row class="rIco" justify="end" align="center">
                <!-- BUTTON HOME... -->
                <v-btn icon v-model="iconX" @click.stop="setD">
                  <v-icon size="48" v-if="drawerLeft" large>{{ iconO }}</v-icon>
                  <v-icon size="48" v-else large>{{ iconC }}</v-icon>
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
  name: "b1xs",
  data() {
    return {
      h: "80px",
      cab: "AncAppBarE cBE-Vis",
      nbc: "blue", //dark-grey
      AncRowBarColsssx: "AncRowBarColssx",
      AncRowBarColdddx: "AncRowBarColddx",
      iconX: "mdi-menu",
      //        iconC:"mdi-backburger",
      //        iconO:"mdi-tray-full",
      iconC: "mdi-dots-vertical",
      iconO: "mdi-menu-up",
      requestToken: "",
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
      shrinkOnScroll: false,
      extended: false
    };
  },
  props: {
    height: { type: Number },
    nbc: { type: String },
    colBarEst: { type: String },
    colBarInt: { type: String },
    requestUser: { type: String },
    requestUserIsStaff: { type: Boolean },
    requestUserIsSuper: { type: Boolean },
    requestUserAvatar: { type: String },
    requestUserBio: { type: String },
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array },
    drawer: { type: Boolean },
    drawerLeft: { type: Boolean },
    drawerRight: { type: Boolean }
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
    } /*TODO: SOSTITUIRE RCS RCD [ PROP CON COMPUTED DA STORE ] */ /*TODO: SOSTITUIRE RCS RCD [ PROP CON COMPUTED DA STORE ] */ /*
    rcS: { type: String },
    rcD: { type: String },
    */,

    /* TEST DINAMIC CSS */

    rcS() {
      return this.$store.getters.rcS;
    },
    rcD() {
      return this.$store.getters.rcD;
    },
    rcU() {
      return this.$store.getters.rcU;
    },

    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    todoscomputed() {
      return this.$store.state.todoscomputed;
    },
    todosDone() {
      return this.$store.getters.todosDone;
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
.AncIconLang {
  height: 38px;
  width: 38px;
  transform: scale(1, 1);
}

.AncIconLang:hover {
  transform: scale(1.2, 1.2);
}

.iconavR {
  /*height: 1px;*/
  height: 100%;
  background-color: transparent !important;
  /*
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  */
}

.rIco {
  /* row - fila di icone parte sinistra */
  height: 100%;
  background-color: transparent !important;
  /*background-color: black !important;*/
}

.icoSx {
  position: relative;
  height: 100%;
  padding-top: 0px;
  padding-bottom: 0px;
  /*padding-top: 5px;*/
  background-color: transparent !important;
}

.iconavcSbassa {
  /* background-color: yellow !important;*/
  text-align: left;
  padding-left: 5px;
}
.iconavcSbtnCategoriaCorrente {
  /* background-color: burlywood !important; */
  background-color: transparent !important;
  text-align: center;
}
.iconavcSbtnMENU {
  background-color: transparent !important;
  text-align: center;
}

.iconavcS {
  text-align: left;
  padding-left: 15px;
}

.iconavcDD {
  background-color: transparent !important;
}
.ct {
  position: relative;
  background-color: aqua;
  height: 100%;
}
</style>