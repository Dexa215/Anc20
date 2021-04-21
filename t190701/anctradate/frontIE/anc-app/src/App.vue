<template>
  <v-app id="anc">
    <ancAppBar class="Mx7"></ancAppBar>
    <ancNews class="Mx5"></ancNews>

    <menuS class="Mx6"></menuS>
    <!--menuSC class="Mx4"></menuSC-->

    <v-content class="Mx3">
      <router-view
        :rvt="rvt"
        @spMC="spMC"
        @mouseover="setDF()"
        :evidenza="evidenza"
        @gotoR="gotoR"
        :C="C"
        :CS="CS"
        :categorie="categorie"
        :drawerLeft="drawerLeft"
      ></router-view>
    </v-content>

    <ancFooter
      :footercolor="footercolor"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      @gotoR="gotoR"
    ></ancFooter>
  </v-app>
</template>

<script>
import ancFooterMobile from "./components/AncFooterMobile";
import ancFooter from "@/components/AncFooters/AncFooter.vue";
import ancAppBar from "@/components/AncAppBars/AncAppBar.vue";
import ancAppDrawerLeft from "./components/AncAppDrawerLeft";
import ancAppDrawerRight from "./components/AncAppDrawerRight";
import ancDrawer from "./components/AncAppDrawers/AncDrawer.vue";
import ancSystem from "./components/AncSystem";
import router from "./router";
import menuS from "@/components/AncM/MenuS/MenuS.vue";
import menuSC from "@/components/AncM/CatSotto/MenuSottoCategorie.vue";
import ancNews from "@/components/AncNews/AncNews.vue";
import { apiService } from "./common/api.service";
import { CSRF_TOKEN } from "./common/csrf_token";
import { getCat } from "./common/menu";
import { getCurrentCat } from "./common/menu";
// test sintassi ok
// @ resolve src
import menuT from "./common/menuTime.js";
import $ from "jquery";

export default {
  name: "App",
  components: {
    ancFooter,
    ancFooterMobile,
    ancSystem,
    ancAppBar,
    ancAppDrawerLeft,
    ancAppDrawerRight,
    ancDrawer /*test 2020 03 18*/,
    menuS /*test 2020 07 14*/,
    menuSC,
    ancNews
  },

  props: {
    source: String
  },

  data: () => ({
    nbc: "red",
    cc: [],
    Ccurrent: 0,
    CScurrent: 0,
    C: 10, // start with HOME
    CS: 0, // start with HOME
    ru: null,
    rvt: 10,
    breweries: [],
    isLoading: false,
    tree: [],
    types: [],
    footercolor: "#0052cc",
    //        color: 'accent',
    //        colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'orange'],
    drawer: false,
    drawerLeft: false,
    drawerRight: false,
    drawerSottocategoria: false,
    iconX: "mdi-menu",
    iconO: "mdi-backburger",
    iconC: "mdi-menu",
    right: false,
    left: false,
    elevateOnScroll: false,
    hideOnScroll: false,
    fadeOnScroll: false,
    fadeImgOnScroll: false,
    invertedScroll: false,
    collapse: false,
    collapseOnScroll: true,
    shrinkOnScroll: false,
    extended: false,

    //<!--  importate da modulo menu.js-->
    menucat: "",
    categorie: [],

    //<!-- Ai -->
    menuCat: "",
    menuSubCat: "",
    intMsg: "",
    intMsgSubH: "",
    //<!-- AiF -->
    intFMsg: "",
    intFMsgSubH: "",
    //Links fine pagina
    linksFP: [],
    src: "xxx",
    //MESSAGGIO EVIDENZA
    evidenza: "Elezioni per il rinnovo del Consiglio - 2 Febbraio 2020",
    //Links utili -- DELEGATO STORE

    catsChi: [
      {
        n: "1",
        img: "/static/images/Icone/bus.jpg",
        descrizione: "Soci",
        link: "/chisiamosoci"
      },
      {
        n: "2",
        img: "/static/images/Icone/bengradi.jpg",
        descrizione: "Benemerite",
        link: "/chisiamobenemerite"
      },
      {
        n: "3",
        img: "/static/images/Icone/cap.jpg",
        descrizione: "Simpatizzanti",
        link: "/chisiamosimpatizzanti"
      }
    ],
    catsConsiglio: [
      {
        n: "1",
        img: "/static/images/Icone/bus.jpg",
        descrizione: "Soci Effettivi",
        link: "/chisiamosoci"
      },
      {
        n: "2",
        img: "/static/images/Icone/bus.jpg",
        descrizione: "Consigliere",
        link: "/chisiamosoci"
      },
      {
        n: "3",
        img: "/static/images/Icone/bus.jpg",
        descrizione: "Segretario",
        link: "/chisiamosoci"
      },
      {
        n: "4",
        img: "/static/images/Icone/bus.jpg",
        descrizione: "Revisore",
        link: "/chisiamosoci"
      },
      {
        n: "5",
        img: "/static/images/Icone/bus.jpg",
        descrizione: "Vice-Presidente",
        link: "/chisiamosoci"
      },
      {
        n: "6",
        img: "/static/images/Icone/bus.jpg",
        descrizione: "Presidente",
        link: "/chisiamosoci"
      },
      {
        n: "7",
        img: "/static/images/Icone/bus.jpg",
        descrizione: "Presidente-Onorario",
        link: "/chisiamosoci"
      }
    ]
  }),

  computed: {
    barBIG () {
      return this.$store.getters.getbarBIG;
    }
  },

  methods: {
    getToken () {
      //test OK
      console.log("cookies.get(CSRF_TOKEN)", $cookies.get("csrftoken"));
      this.requestToken = $cookies.get("csrftoken");
    },

    getRequestUser () {
      this.$store.dispatch("getRequestUser");
    },

    getEvidenza () {
      this.$store.dispatch("getEvidenza");
    },

    T (c) {
      console.log("App --> RICEVUTO emit su T ", c); //set parameters
    },

    spMC (P) {
      this.Ccurrent = P.Ccurrent;
      this.CScurrent = P.CScurrent;
    },

    setD () {
      this.drawerLeft = !this.drawerLeft;
      if (this.drawerLeft == false) {
        this.setDF();
      } else {
        this.setDT();
      }
    },

    /* Drawer SottoCategoria */
    DSCset (state) {
      switch (state) {
        case "true":
          this.drawerSottocategoria = true;
          break;
        case "false":
          this.drawerSottocategoria = false;
          break;
        default:
          this.drawerSottocategoria = !this.drawerSottocategoria;
          break;
      }
    },
    setDF () {
      this.drawerLeft = false;
      this.drawerRight = false;
      this.iconX = this.iconC;
    },
    setDT () {
      this.drawerLeft = true;
      this.drawerRight = true;
      this.iconX = this.iconO;
    },

    setDLf () {
      this.$store.dispatch("setDLf");
    },

    setColor () {
      this.$store.dispatch("setcolor");
    },

    navi () {
      console.log("navi click...");
    },

    mouseOver: function () {
      this.Logoutbtn.color = "LightGoldenRodYellow";
    },

    /* TEST OK 2020 05 03 */
    gotoR (r) {
      console.log("APP gotoR", r);
      this.$store.dispatch("gotoR", r);
    },

    /* TODO: RIPRISTINARE DOPO IL TEST COME GOTOR */
    gotoR1 (r) {
      var m = menuT;
      m.goto(r);
      (this.C = m.currentcat[0]),
        (this.CS = m.currentcat[1]),
        console.log("App goto --> OTTENGO current ( ", m.currentcat, " )");
      console.log("App goto --> ");
      console.log("App goto --> chiama menuT.goto( ", r, " )");

      //router.push("/");
      //router.push(r);
    },

    getCat () {
      var set = false;
      var count = 0;
      var m = menuT;
      m.retrieveMenu();

      while (set !== true && count < 5) {
        var cr = m.canRead();
        console.log("m.canRead ", cr);
        if (cr === true) {
          console.log("m.canRead é TRUE");
          this.categorie = m.cats;
          set = true;
        } else {
          console.log("m.canRead é FALSE");
        }

        console.log("count ", count);
        count++;
        //var check = menuT.retrieveMenu();

        if (!this.categorie) {
          console.log("ritornato nullo ", this.categorie);
        } else {
          console.log("ritornato menuT canRead", m.canRead());
          console.log("ritornato ", this.categorie);
        }
        console.log("uscito dal ciclo");
      } //fine while

      console.log("App getCat FINEWHILE");
    },

    setCat () {
      menuT.sem
        .then(data => {
          console.log("setCat ...data:", data);
        })
        .catch(error => console.log(error));
      //this.menucat    =  getCat();            //TEST OK
      //this.categorie  =  getCat();            //TEST OK - CORRENTE
      //this.categorie = menuT.retrieveMenu();  //TEST NG
    }

    // --------------------------------------------------------------
  },

  watch: {},

  // Hooks ---------------------------------------------------------

  beforecreated () { },

  created () {
    document.title = "ANC Tradate";
    this.setDLf();
    this.getToken();
    this.getRequestUser(); // !!store - moduleU
    this.getCat(); // test 2020 02 07
    //this.setColor(); // TODO: SPOSTARE SU !!store - moduleA
    //this.getEvidenza(); // !!store - moduleE --> Events...
  }

  /* GIA ESCLUSE AL 2/5/2020 */
  //this.setCat();  //modulo menu.js
  //this.menu();
  /* GIA ESCLUSE AL 2/5/2020 */
};
</script>

<style media="screen">
/*  Colori Globali        Blue              */
.colorBlueOpaque {
  color: rgb(19, 21, 36);
  color: antiquewhite;
}
.colorBlue {
  color: rgb(4, 11, 46);
  color: antiquewhite;
}
.colorBlueDark {
  color: rgb(1, 4, 20);
  color: antiquewhite;
}
/*  Colori Globali        Staff - Admin     */
.colorStaff {
  background-color: #470410 !important;
}

/*  Colori Globali Background
BU 2021 03 07
.Anc_BC           {background-color: rgb(19, 21, 36);}
.Anc_BC_Blue      {background-color: rgb(4, 11, 46);}
.Anc_BC_BlueDark  {background-color: rgb(1, 4, 20);}
*/

.Anc_BC {
  background-color: rgb(33, 29, 54);
  color: antiquewhite;
}
.Anc_BC_Blue {
  background-color: rgb(9, 5, 49);
  color: aliceblue;
}
.Anc_BC_BlueDark {
  background-color: rgb(189, 8, 8);
  color: blanchedalmond;
}

/*
Riproposta in ogni VIEW: 
  AncTrasparenzaVIEW
      background-color: rgb(44, 3, 12) !important;
      width: 100%;
      opacity: 0.7;
Con Sottoclassi in ogni view di definizione risoluzione: 
  AncTrasparenzaXS
  AncTrasparenzaSM
  AncTrasparenzaMD
  AncTrasparenzaLG
  AncTrasparenzaXL
      position: absolute;
      z-index: 2;
      height: 1000px;
*/
.AncTrasparenzaVIEW {
  /*
  position: absolute;
  z-index: 2;
  */
  background-color: rgb(44, 3, 12) !important;
  height: 100%;
  width: 100%;
  opacity: 0.7;
}

/* in every view [xs,sm,md,lg,lx]  */

.rT_lv {
  /* row Transparent level  */
  position: absolute;
  z-index: 6;
}

.rT {
  /*  background-color: rgb(44, 3, 12) !important;  */
  /*  height: 100%;*/
  width: 100%;
  opacity: 0.7;
}

/* row Transparent height  */
.rThXS {
  height: 500px;
}
.rThSM {
  height: 1000px;
}
.rThMD {
  height: 2000px;
}
.rThLG {
  height: 3000px;
}
.rThXL {
  height: 3000px;
}

/*  Colori Globali        Row Transparent   */
.colorRowTransparent {
  background-color: rgb(44, 3, 12) !important;
}
.rTbg1 {
  background-color: rgb(44, 3, 12) !important;
}
.rTbg2 {
  background-color: rgb(41, 44, 3) !important;
}
.rTbg3 {
  background-color: rgb(3, 41, 44) !important;
}

/*  Contents class   */

.SfBase {
  /* Sfondo Base */
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  /*  background-color: whitesmoke;*/
  background-color: greenyellow;
  text-align: center;
  color: black;
}

.SfImmagine {
  /* Sfondo Immagine TEST OK 2020 04 22*/
  position: relative;
  z-index: 3;
  opacity: 0.15;
  height: 100%;
  width: 100%;
  background-image: url("~@/assets/images/bg/bg8.jpg");
}

.SfSpazio {
  /*spazio sotto AncAppBar*/

  width: 100%;
  position: relative;
  z-index: 3;
  opacity: 1;
}
.SfShUp {
  height: 150px;
}
.SfShDown {
  height: 78px;
}

.M {
  position: relative;
}

.Mx1 {
  /* menuSC */
  position: relative;
  z-index: 2;
  background-color: transparent !important;
  /* height: 400px; */
}
.Mx3 {
  position: relative;
  z-index: 3;
}
.Mx4 {
  position: relative;
  z-index: 4;
}
.Mx5 {
  position: absolute;
  z-index: 5;
  width: 100%;
}
.Mx6 {
  position: absolute;
  z-index: 6;
  width: 100%;
}
.Mx7 {
  position: relative;
  z-index: 7;
}
.p0 {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
