import Vue from "vue";
import Router from "vue-router";

/*TODO: TEST 2020 07 24*/
/*import Home from "./views/Home.vue";*/
import Home from "@/views/home/Home.vue";
/*import Links from "./views/Links.vue";*/
import Links from "@/views/links/Links.vue";

//import Esempio from "./views/Esempio.vue";

//import Sede from "./views/Sede.vue";
import Sede from "./views/sede/Sede.vue";

//import SedeOrari from "./views/SedeOrari.vue";
import SedeOrari from "./views/sedeorari/Sedeorari.vue";

//import Contatti from "./views/Contatti.vue";
import Contatti from "./views/contatti/Contatti.vue";

//import Chisiamo from "./views/Chisiamo.vue";
//2021 06 20
import Chisiamo from "./views/chisiamo/Chisiamo.vue";
import ChisiamoBenemerite from "./views/chisiamo/Benemerite/ChisiamoBenemerite.vue";
import ChisiamoDirettivo from "./views/chisiamo/Direttivo/ChisiamoDirettivo.vue";
import ChisiamoSoci from "./views/chisiamo/Soci/ChisiamoSoci.vue";
import ChisiamoSimpatizzanti from "./views/chisiamo/Simpatizzanti/ChisiamoSimpatizzanti.vue";

//import ChisiamoBenemerite from "./views/ChisiamoBenemerite.vue";
//import ChisiamoSimpatizzanti from "./views/ChisiamoSimpatizzanti.vue";
//import ChisiamoSoci from "./views/ChisiamoSoci.vue";
//import ChisiamoDirettivo from "@/views/chisiamo/ChisiamoDirettivo.vue";
//import ChisiamoBenemerite from "@/views/chisiamo/ChisiamoBenemerite.vue";

//import Eventi from "./views/Eventi.vue";

import Bacheca from "./views/Bacheca.vue";

//import Tesseramento from "./views/Tesseramento.vue";
import Tesseramento from "./views/tesseramento/Tess.vue";
//import Tesseramentoprassi from "./views/Tesseramentoprassi.vue";
import TesseramentoPrassi from "./views/tesseramento/tesseramentoPrassi/TessP.vue";

import Event from "./views/Event.vue";
import EventEditor from "./views/EventEditor.vue";

//import EventNEXT from "./views/EventNEXT.vue";

import Agenda from "./views/agenda/Agenda.vue";

/*
import Archivio from "./views/archivio/Archivio.vue";
*/
import Archivio from "./views/archivio/home/AHome.vue";
import ArchivioAnni from "./views/archivio/anni/Anni.vue";

import ArchivioUltimi from "./views/archivioUltimi/A.vue";
import ArchivioAnno from "./views/archivio/ArchivioAnno.vue";

import Login from "./views/Login.vue";

Vue.use(Router);
export default new Router({
    mode: "history", // # normalmente verrebbe usato l'hashtag
    // base: process.env.BASE_URL,
    // doppio percorso nella barra di navigazione

    routes: [
        {
            path: "^.*$",
            name: "homeDefault",
            component: Home
        },
        {
            path: "/",
            name: "home", //export default {  name: "home"
            component: Home //Home.vue
        },
        {
            path: "/home",
            name: "home",
            component: Home
        },
        /*      {
                                                                                                      path: "/esempio",
                                                                                                      name: "esempio",
                                                                                                      component: Esempio
                                                                                                  },
                                                                                            */
        {
            path: "/sede",
            name: "sede",
            component: Sede
        },
        {
            path: "/sedeOrari",
            name: "sedeOrari",
            component: SedeOrari
        },
        {
            path: "/contatti",
            name: "contatti",
            component: Contatti
        },

        {
            path: "/chisiamo",
            name: "chisiamo",
            component: Chisiamo
        },
        {
            path: "/chisiamosoci",
            name: "chisiamosoci",
            component: ChisiamoSoci
        },
        {
            path: "/chisiamobenemerite",
            name: "chisiamobenemerite",
            component: ChisiamoBenemerite
        },
        {
            path: "/chisiamosimpatizzanti",
            name: "chisiamosimpatizzanti",
            component: ChisiamoSimpatizzanti
        },
        {
            path: "/chisiamodirettivo",
            name: "chisiamodirettivo",
            component: ChisiamoDirettivo
        },

        /*        {
                                                                                                        path: "/eventi",
                                                                                                        name: "eventi",
                                                                                                        component: Eventi
                                                                                                    },
                                                                                             */
        {
            path: "/event/:slug",
            name: "event",
            component: Event,
            props: true
        },
        {
            path: "/event/",
            name: "eventEditor",
            component: EventEditor
        },
        {
            path: "/links",
            name: "links",
            component: Links
        },
        {
            path: "/bacheca",
            name: "bacheca",
            component: Bacheca
        },
        {
            path: "/tesseramento",
            name: "tesseramento",
            component: Tesseramento
        },
        {
            path: "/tesseramentoPrassi",
            name: "tesseramentoPrassi",
            component: TesseramentoPrassi
        },
        {
            path: "/agenda",
            name: "agenda",
            component: Agenda
            //        component: EventNEXT
        },
        {
            path: "/archivio",
            name: "archivio",
            component: Archivio
        },
        {
            path: "/archivioanni",
            name: "archivioanni",
            component: ArchivioAnni
        },

        {
            path: "/archivioAnno",
            name: "archivioAnno",
            component: ArchivioAnno
        },
        {
            path: "/archivioUltimi",
            name: "archivioUltimi",
            component: ArchivioUltimi
        },

        {
            path: "/login",
            name: "login",
            component: Login
        }
        /*
                                                                                            {
                                                                                                path: "/about",
                                                                                                name: "about",
                                                                                                // route level code-splitting
                                                                                                // this generates a separate chunk (about.[hash].js) for this route
                                                                                                // which is lazy-loaded when the route is visited.
                                                                                                component: () =>
                                                                                                  import(/* webpackChunkName: "about"  "./views/About.vue")
                                                                                        
                                                                                                },
                                                                                            */
    ]
});
