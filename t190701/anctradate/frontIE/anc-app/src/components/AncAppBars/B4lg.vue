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
        <v-col :class="rcS">
          <!-- test ok rcS from $store-->
          <!-- Avatar -->
          <!-- /*62*/ -->
          <v-row class="iconavR mx-auto" justify="center">
            <!-- test ok TODO: RIMUOVI TEST
            categoria[2]: {{categorie[1].descrizione}}
            C: {{C}}
            Cs: {{Cs}}
            class: {{rcS}}
            requestuser: {{requestUser}}
            -->

            <!-- ICONE NAVIGAZIONE - SX class="avatar" -->
            <v-col class="iconavcSbassa" cols="6">
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated fadeOutUp"
              >
                <!--TODO: RIPRISTINARE V-BTN-->

                <v-btn
                  rounded
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
            </v-col>

            <!-- v-col class="iconavcD" cols="3" style="background-color:orange !important"-->
            <v-col class="iconavcSbtnCategoriaCorrente" cols="2">
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
            </v-col>

            <v-col class="iconavcSbtnMENU" cols="2">
              <!-- BTN MENU @mouseenter="DSCset('false')" -->
              <v-btn icon v-model="iconX" @click.stop="setD">
                <v-icon v-if="drawerLeft" large>{{ iconO }}</v-icon>
                <v-icon v-else large>{{ iconC }}</v-icon>
              </v-btn>
              <!-- BTN MENU -->
            </v-col>
          </v-row>
        </v-col>

        <v-col class="rcC rcX rcC_BC" cols="4">
          <!--v-expand-transition v-show="!drawerLeft" -->
          <v-row class="rcCr rcCr_BC" align="center" justify="center" dense style="z-index: 2">
            <v-col class="rcCrcS rcCrcLat_BC">
              <div>lg $STORE- ANC</div>
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

        <!--
        <v-col :class="rcD">
        -->
        <v-col :class="rcD">
          <!--
        <v-col class="rcD rcX rcLat rcLat_BC">
          -->
          <v-row class="iconavR mx-auto" justify="center">
            <!-- ICONE NAVIGAZIONE - SX -->
            <v-col class="iconavcS" cols="9">
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

              <!-- search... -->
              <v-expand-x-transition>
                <v-btn
                  class="mx-3"
                  icon
                  v-show="!drawerLeft & !languagesShow"
                  fab
                  rounded
                  style="background-color: transparent"
                >
                  <v-icon class="mx-3 AncIconColor" large dark>mdi-magnify</v-icon>
                </v-btn>
              </v-expand-x-transition>

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
                  <v-img class="mx-3 AncIconLang" large dark :src="lang.icona"></v-img>
                  <!-- TEST OK 2020 05 10-->
                  <!--
                                  {{lang.code}}
              {{lang.icona}}

                  <v-img class="mx-3 AncIconLang" large dark :src="langIco"></v-img>
                  -->
                </v-btn>
              </v-expand-x-transition>

              <!-- lista di linguaggi... -->
              <!-- @click="SDL" -->
              <v-btn
                v-show="languagesShow"
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

              <!--
              <v-btn icon @click="gotoR('/')">
              -->
              <v-btn v-show="!languagesShow && drawerLeft" class="mx-3" icon @click="gotoR('/')">
                <v-icon class="mx-3 AncIconLang" large dark>mdi-bank</v-icon>
              </v-btn>
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
            </v-col>
            <!-- ICONE NAVIGAZIONE - SX -->

            <!-- <v-col cols="0"></v-col> -->

            <!-- ICONE NAVIGAZIONE - DX style="height: 30px;" -->
            <v-col class="iconavcDD" cols="3">
              <!-- v-app-bar -->
              <!--v-app-bar-nav-icon >
              </v-app-bar-nav-icon-->

              <!-- BUTTON HOME... -->
              <v-btn icon v-model="iconX" @click.stop="setD">
                <v-icon v-if="drawerLeft" large>{{ iconO }}</v-icon>
                <v-icon v-else large>{{ iconC }}</v-icon>
              </v-btn>

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
            </v-col>
            <!-- ICONE NAVIGAZIONE - DX -->
          </v-row>
        </v-col>
      </v-row>
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
      iconX: "mdi-menu",
      //        iconC:"mdi-backburger",
      //        iconO:"mdi-tray-full",
      iconC: "mdi-dots-vertical",
      iconO: "mdi-menu-up",

      iconCdx: "mdi-menu-down",
      iconOdx: "mdi-menu-up",

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
*/, //colBarEst: { type: String }, //colBarInt: { type: String }, // eslint-disable-next-line vue/no-dupe-keys

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

    /*TODO: SOSTITUIRE RCS RCD [ PROP CON COMPUTED DA STORE ] */ drawer: {
      type: Boolean
    },
    drawerLeft: { type: Boolean },
    drawerRight: { type: Boolean },
    drawerSottocategoria: { type: Boolean }
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
      this.$store.dispatch("gotoR", r);
      /*console.log("AppBar B4LG rotta per...", r);
      this.$emit("gotoR", r);
      */
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
      this.$emit("DSCset", state);
    },

    setD() {
      let d = this.drawerLeft;
      if (d === false) {
        this.iconX = this.iconC;
        console.log("d true");
      } else {
        this.iconX = this.iconO;
        console.log("d false");
      }
      this.$emit("setD");
    },
    setDF() {
      this.$emit("setDF");
    }
    /*
    setcolor() {
      var x = this;
      //console.log("setcolor analizzo this.requestuserisstaff...", x.requestUserIsStaff);
      if (x.requestUserIsStaff === true) {
        //this.cab="AncAppBarE cBE-Staff";
        this.nbc = "#80051c"; //dark-RED
        this.AncRowBarColsssx = "AncRowBarColssx arbcs-Staff";
        this.AncRowBarColdddx = "AncRowBarColddx arbcs-Staff";
      } else {
        //this.cab="AncAppBarE cBE-Socio"
        this.nbc = "#38282b"; //dark-grey
        this.AncRowBarColsssx = "AncRowBarColssx arbcs-Visitor";
        this.AncRowBarColdddx = "AncRowBarColddx arbcs-Visitor";
      }
    }
    */
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
  height: 1px;
  /*
  height: 100%;
*/
  background-color: transparent !important;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
}

.iconavcSbtnCategoriaCorrente {
  position: relative;
  /*height: 80%;*/
  height: 100%;
  /* background-color: burlywood !important;*/
  text-align: center;
  padding-top: 12px;
}

.iconavcSbtnMENU {
  position: relative;
  /*height: 80%;*/
  height: 100%;
  /* background-color: GREEN !important; */
  text-align: center;
  padding-top: 5px;
}
.iconavcSbassa {
  position: relative;
  /*height: 80%;*/
  height: 1px;
  background-color: transparent !important;
  text-align: left;
  padding-left: 5px;
}

.iconavcS {
  position: relative;
  /*height: 80%;*/
  height: 100%;
  background-color: transparent !important;
  text-align: left;
  padding-left: 35px;

  padding-top: 5px;
  padding-bottom: 5px;
}
.iconavcSD {
  /*height: 80%;*/
  height: 100%;
  background-color: transparent !important;
  text-align: right;
  padding-right: 15px;
  padding-top: 5px;
}
.iconavcDD {
  /*height: 80%;*/
  height: 100%;
  background-color: transparent !important;
  text-align: right;
  padding-right: 20px;
  padding-top: 5px;
}
.ct {
  position: relative;
  background-color: aqua;
  height: 100%;
}
</style>
