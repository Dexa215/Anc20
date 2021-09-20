<template>
  <!--
  
  -->

  <transition name="mrT">
    <v-row
      v-if="bb"
      class="mr mx-auto"
    >
      <!--<div v-if="false">-->
      <v-col
        @mouseenter="DSCset('false')"
        @mouseleave="DSCset('true')"
      >
        <v-list
          dark
          shaped
          class="ancM4l ancM4l_BC"
        >
          <!-- * shaped  -->

          <v-list-item
            @mouseover="selectBtn(item.n)"
            @mouseleave="deselectBtn(item.n)"
            v-for="item in categorie"
            :key="item.n"
            link
            class="vlistitem"
          >
            <!-- desel ----------------------------------------------------------------------------
            -->
            <v-list-item-content
              v-if="item.n != Cs"
              class="CcB CclDESEL"
            >
              <v-btn
                class="mbtn"
                color="transparent"
              >
                <v-list-item-icon
                  @click="gotoR(item.link)"
                  class="tileM4icon"
                >
                  <v-icon class="caticon">{{ item.icona }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.descrizione }}</v-list-item-title>

                <!--icona categoria-->
                <v-list-item-icon class="tileM4icon">
                  <!--  
                  <v-icon class="caticon"></v-icon>
                  <v-icon class="caticon">{{ item.icona }}</v-icon>
                  -->
                </v-list-item-icon>
              </v-btn>
            </v-list-item-content>

            <!-- open ----------------------------------------------------------------------------
            -:class="CatCL"
            -->
            <v-list-item-content
              v-else-if="drawerSCM"
              class="CcB CclOPEN"
            >
              <!-- pulsante categoria-->

              <v-btn
                @click="selectR(item.link, item.n)"
                class="mbtn"
                color="transparent"
              >
                <v-list-item-icon
                  @click="gotoR(item.link)"
                  class="tileM4icon"
                >
                  <v-icon
                    class="caticon"
                    @click="gotoR(item.link)"
                  >{{
                    item.icona
                  }}</v-icon>
                </v-list-item-icon>
                <!--descrizione categoria-->

                <v-list-item-title>{{ item.descrizione }}</v-list-item-title>

                <!--icona categoria-->
                <v-list-item-icon
                  class="tileM4icon"
                  @click="drawerSCMswitch()"
                >
                  <v-icon class="caticon">mdi-minus-circle</v-icon>
                </v-list-item-icon>
              </v-btn>

              <SCs></SCs>
            </v-list-item-content>

            <!-- Selected ----------------------------------------------------------------------------
            -:class="CatCL"
            -->
            <v-list-item-content
              v-else
              class="CcB CclSEL"
            >
              <!-- pulsante categoria-->
              <!--@click="selectR(item.link,item.n)"-->
              <v-btn
                class="mbtn"
                color="transparent"
              >
                <!--icona categoria-->
                <v-list-item-icon
                  @click="gotoR(item.link)"
                  class="tileM4icon"
                >
                  <v-icon class="caticon">{{ item.icona }}</v-icon>
                </v-list-item-icon>

                <!--descrizione categoria-->

                <v-list-item-title>{{ item.descrizione }}</v-list-item-title>

                <!--icona sottomenu-->
                <v-list-item-icon
                  class="tileM4icon"
                  @click="drawerSCMswitch()"
                >
                  <v-icon
                    v-show="categorie[Cs / 10 - 1].sottocategorie.length > 1"
                    class="caticon"
                  >mdi-plus-circle</v-icon>
                </v-list-item-icon>
              </v-btn>
            </v-list-item-content>

            <!-- -->
          </v-list-item>

          <!-- * -->
        </v-list>
      </v-col>
      <!--</div>-->
    </v-row>

    <!--
    <a style="color:yellow">in selezione $store > Cs Categoria ... {{ Cs }}</a>
    <a style="color:yellow">in selezione CSs SottoCategoria ... {{ CSs }}</a>
    <a>in selezione... {{ btnsel }}</a>
    <a>{{ btnsel }}</a>
    <a>DRAWER SCM: {{drawerSCM}}</a>
    <v-row class="mx-auto" style="background-color: red"></v-row>
    -->
  </transition>
</template>

<script>
import router from "@/router";
import SCs from "@/components/AncM/CatSotto/M4lgSottocategorieSel.vue";

export default {
  name: "m4lg",
  components: {
    SCs
  },

  props: {},
  computed: {
    bb () {
      var bb = this.$store.getters.getbarBIG;
      return bb;
    },
    catCL () {
      return this.$store.getters.catCL;
    },

    /*Selezione nel menu  +++++++++++++++++++++++++++++++++++++++++++++ */
    CatCL () {
      /*Categoria selezionata nel menu --> Classe per CSS DINAMICO <-- */
      return this.$store.getters.CatCL;
    },
    Cs () {
      /*Categoria*/
      return this.$store.getters.getCs;
    },
    CSs () {
      /*SottoCategoria*/
      return this.$store.getters.getCSs;
    },
    /*Selezione nel menu  +++++++++++++++++++++++++++++++++++++++++++++ */

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
    },
    /*  -----------------------------------------------------------------------   */
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
    drawerSCM () {
      return this.$store.getters.drawerSCMget;
    },
    /*  -----------------------------------------------------------------------   */
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
    /*  -----------------------------------------------------------------------   */
    categorie () {
      return this.$store.getters.categorie;
    },
    C () {
      return this.$store.getters.getC;
    },
    CS () {
      return this.$store.getters.getCS;
    },
    /*In selezione nel menu...*/
    Cs () {
      return this.$store.getters.getCs;
    },
    CSs () {
      return this.$store.getters.getCSs;
    },

    /* DINAMIC CSS */
    rcS () {
      return this.$store.getters.rcS;
    },
    rcD () {
      return this.$store.getters.rcD;
    },
    rcU () {
      return this.$store.getters.rcU;
    }
  },

  data () {
    return {
      btnsel: 10,
      dark: "true",
      rgb1: "rgb(56, 25, 7)",
      mini: true,
      ico: "/static/images/Icone/anclogo2012.gif",

      rvt: 10,
      breweries: [],
      isLoading: false,
      tree: [],
      types: [],
      footercolor: "#0052cc",
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

  methods: {
    /*2020 06 16*/
    gotoR (r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },

    /*2020 06 27*/
    selectBtn (ncat) {
      this.btnsel = ncat;
      /*  setta in Cs Categoria dell'item selezionato nel menu  */
      console.log("!! M4lg selectBtn - ncat : ", this.btnsel, ncat);
      this.$store.dispatch("selectncat", ncat);

      if (
        //this.drawerSCM &&
        this.categorie[this.Cs / 10 - 1].sottocategorie.length > 1
      ) {
        this.$store.dispatch("setCatcl", "open"); //  setta in moduleA/CatCL : CclSEL
      } else {
        this.$store.dispatch("setCatcl", "sel"); //  setta in moduleA/CatCL : CclSEL
      }
    },

    deselectBtn (ncat) {
      this.btnsel = ncat;
      this.$store.dispatch("selectncat", 0);
      this.$store.dispatch("setCatcl", "desel");
      /*  setta in moduleA/CatCL : CclDESEL  */
    },

    drawerSCMswitch () {
      if (this.categorie[this.Cs / 10 - 1].sottocategorie.length > 1) {
        this.$store.dispatch("drawerSCMswitch");
      }
    },

    selectR (r, ncat) {
      this.$store.dispatch("selectncat", ncat);
      this.$store.dispatch("selectR", r);

      //this.$store.dispatch("switchDrawerSottocategoriaSelezione");
      /* SE LA CAT SELEZIONATA CONTIENE SUB MENU */
    },
    setcatCL (val) {
      this.$store.dispatch("setcatCL", val);
    },

    SDL () {
      /*Switch Drawer Language*/
      this.$store.dispatch("switchDrawerLang");
    },
    ScL (val) {
      /*SET Current Language*/
      this.$store.dispatch("setL", val);
    },
    DSCset (state) {
      /*SC Sotto Categoria*/
      this.$store.dispatch("DSCset", state);
    },
    setD () {
      this.$store.dispatch("setD");
    },
    setDF () {
      this.$store.dispatch("setDF");
    }
  }
};
</script>

<style media="screen">
.mr {
  background-color: orange !important;
}

.mrT-enter-active {
  animation-name: mrAnimationIN;
  animation-duration: 0s;
  /*animation-timing-function: ease-out;*/
  /*animation-delay: -0.1s;*/
  /*animation-iteration-count: infinite;*/
  /*animation-direction: alternate;*/
  /*animation-fill-mode: forwards;*/
}
.mrT-leave-active {
  animation: mrAnimationOUT 0s;
}

@keyframes mrAnimationIN {
  0% {
    padding-top: 1000px;
    transform: scale(1.05);
    opacity: 0;
  }
  100% {
    padding-top: 0px;
    transform: scale(1);
    opacity: 100%;
  }
}

@keyframes mrAnimationOUT {
  0% {
  }
  100% {
    opacity: 0%;
  }
}

/*
.selezionato {
  height: 200px;
  background-color: chartreuse;
}

.sottotest {
  background-color: yellowgreen;
}
*/
/* 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888  */
</style>
