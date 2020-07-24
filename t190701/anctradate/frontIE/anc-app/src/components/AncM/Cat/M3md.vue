<template>
  <div>
    <v-row class="mr mx-auto">
      <v-col @mouseenter="DSCset('false')" @mouseleave="DSCset('true')">
        <v-list dark shaped class="ancM4l ancM4l_BC">
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
            <v-list-item-content v-if="item.n!=Cs" class="CcB CclDESEL">
              <v-btn class="mbtn3" color="transparent">
                <!--
                <v-list-item-icon @click="gotoR(item.link)" class="tileM4icon">
                  <v-icon class="caticon">{{ item.icona }}</v-icon>
                </v-list-item-icon>
                -->
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
            <v-list-item-content v-else-if="drawerSCM" class="CcB CclOPEN3">
              <!-- pulsante categoria-->

              <v-btn @click="selectR(item.link,item.n)" class="mbtn3" color="transparent">
                <v-list-item-icon @click="gotoR(item.link)" class="tileM4icon">
                  <v-icon class="caticon" @click="gotoR(item.link)">{{ item.icona }}</v-icon>
                </v-list-item-icon>

                <!--descrizione categoria-->

                <!--<v-list-item-title>{{ item.descrizione }}</v-list-item-title>
                -->
                <!--icona categoria-->

                <v-list-item-icon class="tileM4icon" @click="drawerSCMswitch()">
                  <v-icon class="caticon">mdi-minus-circle</v-icon>
                </v-list-item-icon>
              </v-btn>

              <SCs></SCs>
            </v-list-item-content>

            <!-- Selected ----------------------------------------------------------------------------
            -:class="CatCL"
            -->
            <v-list-item-content v-else class="CcB CclSEL">
              <!-- pulsante categoria-->
              <!--@click="selectR(item.link,item.n)"-->
              <v-btn class="mbtn3" color="transparent">
                <!--icona categoria-->
                <!--
                <v-list-item-icon @click="gotoR(item.link)" class="tileM4icon">
                  <v-icon class="caticon">{{ item.icona }}</v-icon>
                </v-list-item-icon>
                -->
                <!--descrizione categoria-->

                <v-list-item-title @click="gotoR(item.link)">{{ item.descrizione }}</v-list-item-title>

                <!--icona sottomenu-->
                <v-list-item-icon class="tileM4icon" @click="drawerSCMswitch()">
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
    </v-row>
    <!--
    <a style="color:yellow">in selezione $store > Cs Categoria ... {{ Cs }}</a>
    <a style="color:yellow">in selezione CSs SottoCategoria ... {{ CSs }}</a>
    <a>in selezione... {{ btnsel }}</a>
    <a>{{ btnsel }}</a>
    <a>DRAWER SCM: {{drawerSCM}}</a>
    <v-row class="mx-auto" style="background-color: red"></v-row>
    -->
  </div>
</template> 


<script>
import router from "@/router";
import SCs from "@/components/AncM/CatSotto/M3mdSottocategorieSel.vue";

export default {
  name: "m3md",
  components: {
    SCs
  },
  props: {},
  computed: {
    catCL() {
      return this.$store.getters.catCL;
    },

    /*Selezione nel menu  +++++++++++++++++++++++++++++++++++++++++++++ */
    CatCL() {
      /*Categoria selezionata nel menu --> Classe per CSS DINAMICO <-- */
      return this.$store.getters.CatCL;
    },
    Cs() {
      /*Categoria*/
      return this.$store.getters.getCs;
    },
    CSs() {
      /*SottoCategoria*/
      return this.$store.getters.getCSs;
    },
    /*Selezione nel menu  +++++++++++++++++++++++++++++++++++++++++++++ */

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
    drawerSCM() {
      return this.$store.getters.drawerSCMget;
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
    /*In selezione nel menu...*/
    Cs() {
      return this.$store.getters.getCs;
    },
    CSs() {
      return this.$store.getters.getCSs;
    },

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
  },

  data() {
    return {
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
    gotoR(r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },

    /*2020 06 27*/
    selectBtn(ncat) {
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

    deselectBtn(ncat) {
      this.btnsel = ncat;
      this.$store.dispatch("selectncat", 0);
      this.$store.dispatch("setCatcl", "desel");
      /*  setta in moduleA/CatCL : CclDESEL  */
    },

    drawerSCMswitch() {
      if (this.categorie[this.Cs / 10 - 1].sottocategorie.length > 1) {
        this.$store.dispatch("drawerSCMswitch");
      }
    },

    selectR(r, ncat) {
      this.$store.dispatch("selectncat", ncat);
      this.$store.dispatch("selectR", r);

      //this.$store.dispatch("switchDrawerSottocategoriaSelezione");
      /* SE LA CAT SELEZIONATA CONTIENE SUB MENU */
    },
    setcatCL(val) {
      this.$store.dispatch("setcatCL", val);
    },

    SDL() {
      /*Switch Drawer Language*/
      this.$store.dispatch("switchDrawerLang");
    },
    ScL(val) {
      /*SET Current Language*/
      this.$store.dispatch("setL", val);
    },
    DSCset(state) {
      /*SC Sotto Categoria*/
      this.$store.dispatch("DSCset", state);
    },
    setD() {
      this.$store.dispatch("setD");
    },
    setDF() {
      this.$store.dispatch("setDF");
    }
  }
};
</script>

<style media="screen">
.CclOPEN3 {
  color: aqua;
  border-radius: 25px 25px 25px 25px;
  width: 60%;
  height: 200px;
  background-color: #083b8c;
  transition-property: height;
  transition-duration: 0.8s;
}
CclSEL3 {
}

.mbtn3 {
  margin: 1px;
  border-radius: 20px 20px 20px 20px;
  background-color: transparent;
}
.mbtn3:hover {
  margin: 1px;
  background-color: mediumturquoise;
}
</style>





