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

          <!-- test ok rcS from $store-->
          <!-- Avatar -->
          <!-- /*62*/ -->
          <v-row class="iconavR mx-auto" justify="center" align="center">
            <!-- test ok TODO: RIMUOVI TEST
            categoria[2]: {{categorie[1].descrizione}}
            C: {{C}}
            Cs: {{Cs}}
            class: {{rcS}}
            requestuser: {{requestUser}}
            -->

            <!-- ICONE NAVIGAZIONE - SX class="avatar" -->
            <v-col class="icoSx iconavcSbassa" cols="10">
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
                    <a class="mx-1">
                      <!--span
                      v-if="categorie[C/10-1].descrizione.length < 15"
                      class="mr-2"
                      style="color:lightblue;"
                      ></span-->

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

            <!-- ICONA CATEGORIA CORRENTE -->
            <v-col class="icoSx iconavcSbtnCategoriaCorrente" cols="2">
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

            <!-- 
            <v-col class="icoSx iconavcSbtnMENU" cols="2">
            -->
            <!-- 
              BTN MENU @mouseenter="DSCset('false')"
            -->

            <!--          
              <v-btn icon v-model="iconX" @click.stop="setD">
                <v-icon v-if="drawerLeft" large>{{ iconO }}</v-icon>
                <v-icon v-else large>{{ iconC }}</v-icon>
              </v-btn>
              
            </v-col>
            -->
          </v-row>
        </v-col>
        <!-- MACRO COLONNA SINISTRA ************************************************************************************************************ -->

        <v-col class="rcC rcX rcC_BC" cols="4">
          <!-- MACRO COLONNA CENTRO ************************************************************************************************************ -->
          <!--v-expand-transition v-show="!drawerLeft" -->
          <v-row class="rcCr rcCr_BC" align="center" justify="center" dense style="z-index: 2">
            <v-col class="rcCrcS rcCrcLat_BC">
              <div>ANC</div>
            </v-col>

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

            <v-col class="rcCrcD rcCrcX rcCrcLat_BC">
              <div>TRADATE</div>
            </v-col>
          </v-row>

          <!--/v-expand-transition-->
        </v-col>
        <!-- MACRO COLONNA CENTRO ************************************************************************************************************ -->

        <!-- MACRO COLONNA DESTRA ************************************************************************************************************ -->
        <v-col :class="rcD">
          <v-row class="iconavR mx-auto" justify="center" align="center">
            <!-- ICONE NAVIGAZIONE - DX -->

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

            <v-col class="icoSx iconavcDD" cols="3">
              <v-row class="rIco" align="center" justify="center">
                <!-- v-app-bar -->
                <!--v-app-bar-nav-icon >
                </v-app-bar-nav-icon-->

                <v-btn v-show="!languagesShow && drawerLeft" class="mx-3" icon @click="gotoR('/')">
                  <v-icon class="mx-3 AncIconLang" large dark>mdi-bank</v-icon>
                </v-btn>

                <!-- Language btn ...
                <v-expand-x-transition>
                  <v-btn
                    rounded
                    fab
                    class="ml-3"
                    icon
                    v-show="!drawerLeft && !languagesShow"
                    style="background-color:   rgb(1, 4, 20) "
                    @click="SDL"
                  >
                    <v-img class="mx-1 AncIconLang" large dark :src="lang.icona"></v-img>
                  </v-btn>
                </v-expand-x-transition>
                -->
                <!-- Language btn ...-->

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
                    <!-- TEST OK 2020 05 10-->
                    <!--
                    {{lang.code}}
                    {{lang.icona}}
                    <v-img class="mx-3 AncIconLang" large dark :src="langIco"></v-img>
                    -->
                  </v-btn>
                </v-expand-x-transition>
                <!-- Language... -->

                <!-- v-app-bar -->
                <!--
                <v-icon
                  @click.stop="setD"
                  class="mx-2 AncIconColor"
                  v-if="drawerLeft"
                  large
                >{{ iconOdx }}</v-icon>
                <v-icon @click.stop="setD" class="mx-2 AncIconColor" v-else large>{{ iconCdx }}</v-icon>
                -->

                <!--
                <v-btn icon class @click.stop="setD" v-model="iconX">
                  
                </v-btn>
                -->

                <!--
                <v-expand-x-transition>
                  <v-btn icon class v-show="!drawerLeft">
                   </v-btn>
                </v-expand-x-transition>
                -->
              </v-row>
            </v-col>

            <v-col class="icoSx iconavcS" cols="6">
              <!--
              <div class="xxx">
                <v-icon
                  class="mx-2 AncIconColor"
                  large
                  dark
                  @click="gotoR(categorie[C/10-1].link)"
                >{{categorie[C/10-1].icona}}</v-icon>
              </div>
              -->
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

                <!--
              <v-btn icon @click="gotoR('/')">
                -->

                <!--
              <v-icon
                v-for="item in categorie[C/10-1].sottocategorie"
                :key="item.n"
                class="mx-2 AncIconColor"
                large
                dark
                @click="gotoR(item.link)"
                style="height: 30px;"
              >{{item.icona}}</v-icon>
                -->
                <!--
              <div v-if="categorie[C/10-1].sottocategorie.length == 0" class="AncTitleColor ma-2">NN</div>
                -->

                <!-- TEST OK -->
                <!--
              <v-btn icon class>
                <v-icon
                  class="mx-4 AncIconColor"
                  large
                  dark
                  @click="gotoR(categorie[C/10-1].link)"
                >{{categorie[C/10-1].icona}}</v-icon>
              </v-btn>
                -->
                <!-- TEST OK -->
              </v-row>
            </v-col>

            <v-col v-if="!languagesShow" class="icoSx iconavcDD" cols="3">
              <v-row class="rIco" justify="end" align="center">
                <!-- BUTTON MENU on-off ... -->
                <v-btn icon>
                  <a>LG</a>
                </v-btn>
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
// eslint-disable-next-line no-unused-vars
import router from "@/router";
/*import m4lg from "@/components/AncM/M4lg.vue";*/

export default {
  name: "b4lg",

  components: {},

  /*
ESCLUSI DA DATA:

 requestToken: "",

*/
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
    } /*TODO: SOSTITUIRE CS CS categorie [ PROP CON COMPUTED DA STORE ] */ /*
    C:{type: Number},
    CS: { type: Number },
    categorie: {type: Array},
    */ /*TODO: SOSTITUIRE CS CS [ PROP CON COMPUTED DA STORE ] */ /*TODO: SOSTITUIRE RCS RCD [ PROP CON COMPUTED DA STORE ] */ /*
    rcS: { type: String },
    rcD: { type: String },
*/ //colBarEst: { type: String }, //colBarInt: { type: String }, // eslint-disable-next-line vue/no-dupe-keys

    /*
TODO:
test sostituzione con computed su 
TODO:
*/

    /*
    requestUser: { type: String },
    requestUserIsStaff: { type: Boolean },
    requestUserIsSuper: { type: Boolean },
    requestUserAvatar: { type: String },
    requestUserBio: { type: String },
*/

    /*TODO: SOSTITUIRE RCS RCD [ PROP CON COMPUTED DA STORE ] */

    /*TODO: SOSTITUIRE drawer [ PROP CON COMPUTED DA STORE ] */
    /*
    drawer: { type: Boolean },
    drawerLeft: { type: Boolean },
    drawerRight: { type: Boolean },
    drawerSottocategoria: { type: Boolean }
    */
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
