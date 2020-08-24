<template>
  <div v-if="drawerLeft">
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
      <v-row class="r-b1-menu r_BC">
        <!-- BARRA PRINCIPALE test ok

        <v-col></v-col>
        <v-col class="c-b1"></v-col>
        <v-col>
          
          <v-btn icon v-model="iconX" @click.stop="setD">
            <v-icon size="48" v-if="drawerLeft" large>{{ iconO }}</v-icon>
            <v-icon size="48" v-else large>{{ iconC }}</v-icon>
          </v-btn>
         
        </v-col>
        -->
        <!-- BUTTON MENU on-off ... -->
        <!-- BARRA PRINCIPALE test ok -->

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
            <v-col v-if="!languagesShow" class="icoSx iconavcDD" cols="12">
              <v-row class="rIco" justify="end" align="center">
                <!-- BUTTON MENU on-off ... -->
                <v-btn icon v-model="iconX" @click.stop="setD">
                  <v-icon size="48" v-if="drawerLeft" large>{{ iconO }}</v-icon>
                  <v-icon size="48" v-else large>{{ iconC }}</v-icon>
                </v-btn>
                <!-- BUTTON MENU on-off ... -->
              </v-row>
            </v-col>

            <!-- ICONE NAVIGAZIONE - DX -->
          </v-row>
        </v-col>
        <!-- MACRO COLONNA DESTRA ************************************************************************************************************ -->
      </v-row>
    </v-app-bar>
  </div>

  <div v-else>
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
      <v-row class="r-b1 r_BC">
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
            <v-col v-if="!languagesShow" class="icoSx iconavcDD" cols="12">
              <v-row class="rIco" justify="end" align="center">
                <!-- BUTTON MENU on-off ... -->
                <v-btn icon v-model="iconX" @click.stop="setD">
                  <v-icon size="48" v-if="drawerLeft" large>{{ iconO }}</v-icon>
                  <v-icon size="48" v-else large>{{ iconC }}</v-icon>
                </v-btn>
                <!-- BUTTON MENU on-off ... -->
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
    colBarInt: { type: String }
    /*
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
    */
  },

  computed: {
    drawerLeft() {
      return this.$store.getters.getDrawerLeft;
    },
    categorie() {
      return this.$store.getters.categorie;
    },
    C() {
      return this.$store.getters.getC;
    },
    CS() {
      return this.$store.getters.getCS;
    },
    Cs() {
      return this.$store.getters.getCs;
    },
    CSs() {
      return this.$store.getters.getCSs;
    },

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
<style media="screen" scoped>
.r-b1 {
  /*.AncRowBarEst / ARBI */
  position: relative;
  z-index: 7;
  height: 70px;
  margin-top: 2;
  margin-bottom: 2;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  text-justify: center;
  border-radius: 30px 30px 0px 30px;
}
.r-b1-menu {
  /*.AncRowBarEst / ARBI */
  position: relative;
  z-index: 7;
  height: 70px;
  margin-top: 2;
  margin-bottom: 2;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  text-justify: center;
  border-radius: 30px 30px 0px 30px;
}
.c-b1 {
  height: 80px;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 1px;
  margin-right: 1px;
  text-align: center;
  text-justify: center;
  border-radius: 10px 10px 10px 10px;
}
</style>