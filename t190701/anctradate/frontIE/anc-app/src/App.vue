<template>
  <v-app id="anc">
    <ancAppBar
      :requestUser="requestUser"
      :requestUserIsStaff="requestUserIsStaff"
      :requestUserIsSuper="requestUserIsSuper"
      :requestUserAvatar="requestUserAvatar"
      :requestUserBio="requestUserBio"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      :iconX="iconX"
      @gotoR="gotoR"
      @setD="setD"
      @setDF="setDF"
      @mouseover="setDF()"
      @DSCset="DSCset"
      :drawer="drawer"
      :drawerLeft="drawerLeft"
      :drawerRight="drawerRight"
      :drawerSottocategoria="drawerSottocategoria"
    ></ancAppBar>
    <!--
    <ancDrawer
      :requestUser="requestUser"
      :requestUserIsStaff="requestUserIsStaff"
      :requestUserIsSuper="requestUserIsSuper"
      :requestUserAvatar="requestUserAvatar"
      :requestUserBio="requestUserBio"
      :nbc="nbc"
      :drawerRight="drawerRight"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      :iconX="iconX"
      @gotoR="gotoR"
      @setD="setD"
      @setDF="setDF"
    ></ancDrawer>
    -->

    <v-content>
      <router-view
        :requestUser="requestUser"
        :rvt="rvt"
        @gotoR="gotoR"
        @spMC="spMC"
        @mouseover="setDF()"
        :evidenza="evidenza"
        :C="C"
        :CS="CS"
        :categorie="categorie"
        :drawerLeft="drawerLeft"
      ></router-view>
    </v-content>

    <!--
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        justify="center"
        align="center"
      >
        <v-col class="shrink">
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn
                :href="source"
                icon
                large
                target="_blank"
                v-on="on"
              >
                <v-icon large>mdi-code-tags</v-icon>
              </v-btn>
            </template>
            <span>Source</span>
          </v-tooltip>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                large
                href="https://codepen.io/johnjleider/pen/QewYYx"
                target="_blank"
                v-on="on"
              >
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
            </template>
            <span>Codepen</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
    -->

    <!--
  <v-footer
    app
    color="blue-grey"
    class="white--text"
  >
    <span>Vuetify</span>
    <div class="flex-grow-1"></div>
    <span>&copy; 2019</span>
  </v-footer>
    -->
    <ancFooter
      :footercolor="footercolor"
      :requestUser="requestUser"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      @gotoR="gotoR"
    ></ancFooter>
  </v-app>
</template>

<script>
//import HelloWorld       from './components/HelloWorld'
//import ancNavbar        from './components/AncNavbar'

import ancFooterMobile from "./components/AncFooterMobile";

//import ancFooter          from './components/AncFooter'
//v-folder
import ancFooter from "@/components/AncFooters/AncFooter.vue";

//import ancAppBar          from './components/AncAppBar'
//v-folder
import ancAppBar from "@/components/AncAppBars/AncAppBar.vue";

import ancAppDrawerLeft from "./components/AncAppDrawerLeft";
import ancAppDrawerRight from "./components/AncAppDrawerRight";

//v-folder
import ancDrawer from "./components/AncAppDrawers/AncDrawer.vue";

import ancSystem from "./components/AncSystem";
import router from "./router";

import { apiService } from "./common/api.service";
import { CSRF_TOKEN } from "./common/csrf_token";
import { getCat } from "./common/menu";
import { getCurrentCat } from "./common/menu";

// test sintassi ok
// @ resolve src

import menuT from "./common/menuTime.js";

export default {
  name: "App",
  components: {
    //      HelloWorld,
    //      ancNavbar,
    ancFooter,
    ancFooterMobile,
    ancSystem,
    ancAppBar,
    ancAppDrawerLeft,
    ancAppDrawerRight,

    ancDrawer /*test 2020 03 18*/
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

    //nbc:"#212121",  //dark-grey

    requestUser: "Visitatore",
    requestUserIsStaff: false,
    requestUserIsSuper: false,
    requestUserAvatar: null,
    requestUserBio: null,
    requestToken: "",
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
    // PULSANTE MENU
    // mdi-tray-full
    // mdi-backburger
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

    //Links utili
    links: [
      {
        n: "1",
        img: "/static/images/Icone/bus.jpg",
        descrizione: "ASSOCIAZIONE NAZIONALE CARABINIERI 1",
        link: "http://assocarabinieri.it/"
      },
      {
        n: "2",
        img: "/static/images/Icone/bengradi.jpg",
        descrizione: "ASSOCIAZIONE NAZIONALE CARABINIERI 2",
        link: "http://assocarabinieri.it/"
      },
      {
        n: "3",
        img: "/static/images/Icone/cap.jpg",
        descrizione: "ASSOCIAZIONE NAZIONALE CARABINIERI 3",
        link: "http://assocarabinieri.it/"
      }
    ],

    //Categorie
    /*

categorie:[

                    {//cat1
                      n:"10",
                      descrizione:"home",
                      titolo:"",
                      icona:"mdi-shield-half-full",
                      img:"/static/icons/menu/Sede.jpg",
                      imgEvidenza:"/static/icons/menu/importanteww.png",      
                      link:"/",
                      linksFP:
                          [   { descrizione:  "Ubicazione sede",
                                link: "sede/"             },
                              { descrizione:  "Chi siamo",
                                link: "chisiamo/"             },             
                              { descrizione:  "Richiedi INFO",
                                link: "contatti/"         }, 
                          ],
                      sottocategorie: [
                      ]
                    },
                    {//cat2
                      n:"20",
                      descrizione:"sede",
                      titolo:"Il ritrovo abituale per i soci",
                      icona:"mdi-bank",
                      img:"/static/images/Icone/anclogo7.gif",   
                      link: "/sede",
                      linksFP:
                          [   { descrizione:  "Ubicazione sede",
                                link: "sede/"             },
                              { descrizione:  "Chi siamo",
                                link: "chisiamo/"             },             
                              { descrizione:  "Richiedi INFO",
                                link: "contatti/"         }, 
                          ],
                      sottocategorie: [
                        {
                          n:"21",
                          descrizione:"ubicazione",
                          titolo:"Dove siamo",
                          icona:"mdi-compass",
                          img:"/static/icons/menu/Sede.png",   
                          link: "/sede",
                        },
                        {
                          n:"22",
                          descrizione:"orari",
                          titolo:"Quando ci troviamo",
                          icona:"mdi-clock-outline",
                          img:"/static/icons/menu/Orologio.jpg",   
                          link: "/sedeOrari",
                        },
                      ]
                    },
                    {//cat3
                      n:"30",
                      descrizione:"contatti",
                      titolo:"Come contattarci",
                      icona: "mdi-face-agent",
                      img:"/static/images/Icone/anclogo7.gif",  
                      link:"/contatti",
                      linksFP:
                          [   { descrizione:  "Ubicazione sede",
                                link: "sede/"             },
                              { descrizione:  "Chi siamo",
                                link: "chisiamo/"             },             
                              { descrizione:  "Richiedi INFO",
                                link: "contatti/"         }, 
                          ],
                      sottocategorie: [
                        {
                          n:"31",
                          descrizione:"presidente",
                          titolo:"",
                          icona:"",
                          img:"",
                          link:"",
                        },
                        {
                          n:"32",
                          descrizione:"vicepresidente",
                          titolo:"",
                          icona:"",
                          img:"",
                          link:"",
                        },
                        {
                          n:"33",
                          descrizione:"posta",
                          titolo:"",
                          icona:"",
                          img:"",
                          link:"",
                        },
                      ]
                    },

                    {//cat4
                      n:"40",
                      descrizione:"Chi siamo",
                      titolo:"Organizzazione della sezione",
                      icona: "mdi-account-group",
                      img:"/static/images/Icone/anclogo7.gif",   
                      link: "/chisiamo",
                      linksFP:
                          [   { descrizione:  "Ubicazione sede",
                                link: "sede/"             },
                              { descrizione:  "Chi siamo",
                                link: "chisiamo/"             },             
                              { descrizione:  "Richiedi INFO",
                                link: "contatti/"         }, 
                          ],

                      sottocategorie: [
                        {
                          n:"41",
                          descrizione:"Soci",
                          titolo:"Il cuore dell'Associazione",
                          icona:"mdi-human-greeting",
                          img: "/static/images/Icone/bus.jpg",
                          link: "/chisiamosoci",
                        },
                        {
                          n:"42",
                          descrizione:"Benemerite",
                          titolo:"Il fiore all'occhiello",
                          icona:"mdi-human-female",
                          img: "/static/images/Icone/bengradi.jpg",
                          link: "/chisiamobenemerite",
                        },
                        {
                          n:"43",
                          descrizione:"Simpatizzanti",
                          titolo:"La forza di chi sta dalla nostra parte",
                          icona:"mdi-human-handsup",
                          img: "/static/images/Icone/cap.jpg",
                          link: "/chisiamosimpatizzanti",
                        },
                      ]
                    },
                    {//cat5
                      n:"50",
                      descrizione:"agenda",
                      titolo:"prossimi appuntamenti da non perdere",
                      icona:"mdi-calendar-multiple",
                      img:"/static/icons/menu/Agenda.jpg",   
                      link:"/agenda",
                      linksFP:
                          [   { descrizione:  "Ubicazione sede",
                                link: "sede/"             },
                              { descrizione:  "Chi siamo",
                                link: "chisiamo/"             },             
                              { descrizione:  "Richiedi INFO",
                                link: "contatti/"         }, 
                          ],
                      sottocategorie: [
                        {
                          n:"51",
                          descrizione:"appuntamenti",
                          titolo:"",
                          icona:"",
                          img:"/static/icons/menu/Agenda.jpg",
                          link:"",   
                        },
                      ]
                    },
                    {//cat6
                      n:"60",
                      descrizione:"Archivio",
                      titolo:"sfogliando tra i vecchi ricordi ",
                      icona:"mdi-archive",
                      img:"/static/images/Icone/anclogo7.gif",   
                      link:"/archivio",
                      linksFP:
                          [   { descrizione:  "Ubicazione sede",
                                link: "sede/"             },
                              { descrizione:  "Chi siamo",
                                link: "chisiamo/"             },             
                              { descrizione:  "Richiedi INFO",
                                link: "contatti/"         }, 
                          ],

                      sottocategorie: [
                        {
                          n:"61",
                          descrizione:"Eventi",
                          titolo:"Cosa abbiamo realizzato",
                          icona:"",
                          img:"/static/images/Icone/anclogo7.gif",   
                          link:"",
                        },
                      ]
                    },
                    {//cat7
                      n:"70",
                      descrizione:"Tesseramento",
                      titolo:"sostenere l'Associazione",
                      icona:"mdi-passport",
                      img:"/static/images/Materiale/tesserino.jpg",   
                      link:"/tesseramento",
                      linksFP:
                          [   { descrizione:  "Ubicazione sede",
                                link: "sede/"             },
                              { descrizione:  "Chi siamo",
                                link: "chisiamo/"             },             
                              { descrizione:  "Richiedi INFO",
                                link: "contatti/"         }, 
                          ],

                      sottocategorie: [
                        {
                          n:"71",
                          descrizione:"Prassi",
                          titolo:"Come funziona il tesseramento e il rinnovo",
                          icona:"mdi-format-list-text",
                          img:"/static/images/Materiale/tesserino.jpg",   
                          link:"/tesseramentoprassi",
                        },
                      ]
                    },
                     {//cat8
                      n:"80",
                      descrizione:"Links",
                      titolo:"Siti di interesse, amici, altro...",
                      icona:"mdi-link-variant",
                      img:"/static/images/Icone/anclogo7.gif",   
                      link:"/links",
                      linksFP:
                          [   { descrizione:  "Ubicazione sede",
                                link: "sede/"             },
                              { descrizione:  "Chi siamo",
                                link: "chisiamo/"             },             
                              { descrizione:  "Richiedi INFO",
                                link: "contatti/"         }, 
                          ],

                      sottocategorie: [
                      ]
                    },



                  ],
*/
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

  methods: {
    /*  gotoSede() {
      console.log("rotta per..");
      router.push('sede')
    },*/

    /*  async setup () {
      this.claims = await this.$auth.getUser()
    },*/
    /*  async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },*/

    getToken() {
      //test OK
      console.log("cookies.get(CSRF_TOKEN)", $cookies.get("csrftoken"));
      this.requestToken = $cookies.get("csrftoken");
    },

    getRequestUser() {
      let endpoint = "api/profiles/getcurrentuser/";
      apiService(endpoint).then(data => {
        console.log("chiamata rest... data:", data.us.name);

        this.requestUser = data.us.name;
        this.requestUserIsStaff = data.us.staff;
        this.requestUserIsSuper = data.us.superuser;
        this.requestUserBio = data.us.bio;
      });
    },

    T(c) {
      console.log("App --> RICEVUTO emit su T ", c); //set parameters
    },

    spMC(P) {
      //          console.log("RICEVUTO emit su spMC ");  //set parameters
      //          console.log("salvo paramentri...", P );

      //          this.menuCat        = P.menuCat;
      //          this.menuSubCat     = P.menuSubCat;

      this.Ccurrent = P.Ccurrent;
      this.CScurrent = P.CScurrent;

      //          this.intMsg         = P.intMsg;        //<!-- Ai -->
      //          this.intMsgSubH     = P.intMsgSubH;
      //          this.intFMsg        = P.intFMsg;        //<!-- AiF -->
      //          this.intFMsgSubH    = P.intFMsgSubH;
      //          this.linksFP        = P.linksFP;
      //          this.src            = P.src;
    },

    setD() {
      this.drawerLeft = !this.drawerLeft;
      if (this.drawerLeft == false) {
        this.setDF();
      } else {
        this.setDT();
      }
    },

    /* Drawer SottoCategoria */
    DSCset(state) {
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
    setDF() {
      this.drawerLeft = false;
      this.drawerRight = false;
      this.iconX = this.iconC;
    },
    setDT() {
      this.drawerLeft = true;
      this.drawerRight = true;
      this.iconX = this.iconO;
    },
    setColor() {
      if (this.requestUserIsSuper === true) {
        this.nbc = "light-red";
      } else if (this.requestUserIsStaff === true) {
        this.nbc = "light-green";
      } else {
        this.nbc = "dark-grey";
      }
    },

    navi() {
      console.log("navi click...");
    },

    mouseOver: function() {
      this.Logoutbtn.color = "LightGoldenRodYellow";
    },

    gotoR(r) {
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

    getCat() {
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

    setCat() {
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

  beforecreated() {},

  created() {
    document.title = "ANC Tradate";
    this.getToken();
    this.getRequestUser();
    this.setColor();
    //this.setCat();  //modulo menu.js
    this.getCat(); // test 2020 02 07

    //this.menu();
  }
};
</script>

<style media="screen">
/* ------------------------------ Dev -------------------- */
.row {
  background-color: snow;
}
.column {
  background-color: snow;
}
/*
.container-fluid {
  background-color: snow;
  width: 100%;
  height: "500px";
}
*/
#c0 {
  background-color: pink;
  height: 700px;
}
#c0img {
  height: 680px;
}
#c1 {
  background-color: plum;
  height: 700px;
}
#c1img {
  height: 680px;
}
#c2 {
  background-color: purple;
}
#c2img {
  height: 680px;
}
/* ------------------------------ Dev -------------------- */

.sedeorari {
  background-color: purple;
  width: 100%;
  height: 100%;
}
.taC {
  text-align: center;
}

.logeduser {
  color: LightGoldenRodYellow;
}
.logout {
  color: DimGrey;
}

#Logoutbtn {
  color: aquamarine;
}

.h2 {
  background-color: aqua;
}

.ancTitle {
  color: #f9fbe7;
}
.AncTitleColor {
  color: #f9fbe7;
}
.AncAppBarColor {
  color: #f9fbe7;
}
.AncIconColor {
  color: #f9fbe7;
}

.AncAppBarColor:hover {
  color: #ffbe4d;
}
.AncIconColor:hover {
  color: #ffbe4d;
}
.AncItemColor:hover {
  color: #ffbe4d;
}

.AncItemColor {
  color: #6d4c41;
}
.AncTitleColorDark {
  color: darkslategray;
}

.rgbANC1 {
  background-color: rgb(20, 9, 2); /* Marrone scuro +6 */
}
.rgbANC2 {
  background-color: rgb(36, 17, 6); /* Marrone scuro +5 */
}
.rgbANC3 {
  background-color: rgb(51, 26, 12); /* Marrone scuro +4 */
}

.AncAppBar_BC {
  background-color: rgb(19, 21, 36);
}

/*background-color: #241518 !important;   */
/*background-color: #2b2b29 !important;   */
/*background-color: #241518 !important;   */

.r_BC {
  background-color: rgb(4, 11, 46) !important; /* AncColor Blue +6 */
}

.AncTrasparenza {
  position: absolute;
  z-index: 2;
  background-color: rgb(44, 3, 12) !important;
  height: 100%;
  width: 100%;
  opacity: 0.7;
}

.AncAppBar_BC {
  background-color: "rgb(19, 21, 36)";
}

.SfBase {
  /* Sfondo Base */
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  text-align: center;
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

.SfParallax {
  /* Sfondo Parallax */
  position: relative;
  z-index: 1;
  opacity: 0.15;
  height: 600px;
  width: 100%;
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

/*

vuetify
  v-row
    
    <- -> justify=  ['start','center','end','space-around','space-between',]  
    ^     align=    ['start','center','end','baseline','stretch',]

    es:
    <v-row
            :align  ="alignment"
            :justify="justify"
            class   ="grey lighten-5"
            style   ="height: 300px;"
            dense
    >

css
  text
    ^     text-justify:       auto|inter-word|inter-character|none|initial|inherit;
    <- -> text-align:         left|right|center|justify|initial|inherit;
    
  padding
    padding: 25px 50px 75px 100px;      T-R-B-L
    padding: 25px 50px 75px;            T-RL-B
    padding: 25px 50px;                 TB-RL
    padding: 25px;                      TBRL

    1 value applies to  top padding is 25px
    2 value applies to  right padding is 50px
    3 value applies to  bottom padding is 75px
    4 value applies to  left padding is 100px
  padding: 25px 50px 75px;
    1 value applies to  top padding is 25px
    2 value applies to  right and left paddings are 50px
    3 value applies to  bottom padding is 75px
  padding: 25px 50px;
    1 value applies to  top and bottom paddings are 25px
    2 value applies to  right and left paddings are 50px
  padding: 25px;
    all four paddings are 25px

  border-radius
    border-radius: 15px 50px 30px 5px;  TL-TR-BR-BL 
    border-radius: 15px 50px 30px;      TL-TRBL-BR
    border-radius: 15px 50px;           TLBR-TRBL
    border-radius: 15px;                TLBRTRBL    

  border-radius: 15px 50px 30px 5px; 
    1 value applies to top-left corner, 
    2 value applies to top-right corner, 
    3 value applies to bottom-right corner, 
    4 value applies to bottom-left corner
  border-radius: 15px 50px 30px; 
    1 value applies to top-left corner, 
    2 value applies to top-right and bottom-left corners, 
    3 value applies to bottom-right corner
  border-radius: 15px 50px; 
    1 value applies to top-left and bottom-right corners, 
    2 value applies to top-right and bottom-left corners
  border-radius: 15px; 
    the value applies to all four corners, which are rounded equally


*/
</style>
