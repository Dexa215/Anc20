import Vue from "vue";
import Router from "vue-router";

/*TODO: TEST 2020 07 24*/
/*import Home from "./views/Home.vue";*/
import Home from "@/views/home/Home.vue";
/*import Links from "./views/Links.vue";*/
import Links from "@/views/links/Links.vue";


//import Esempio from "./views/Esempio.vue";
import Sede from "./views/Sede.vue";
import SedeOrari from "./views/SedeOrari.vue";
import Contatti from "./views/Contatti.vue";

import Chisiamo from "./views/Chisiamo.vue";
//import ChisiamoBenemerite from "./views/ChisiamoBenemerite.vue";
import ChisiamoSimpatizzanti from "./views/ChisiamoSimpatizzanti.vue";
import ChisiamoSoci from "./views/ChisiamoSoci.vue";
import ChisiamoDirettivo from "@/views/chisiamo/ChisiamoDirettivo.vue";
import ChisiamoBenemerite from "@/views/chisiamo/ChisiamoBenemerite.vue";

//import Eventi from "./views/Eventi.vue";

import Bacheca from "./views/Bacheca.vue";

import Tesseramentoprassi from "./views/Tesseramentoprassi.vue";

//import Tesseramento from "./views/Tesseramento.vue";
import Tesseramento from "./views/tesseramento/Tess.vue";

import Event from "./views/Event.vue";
import EventEditor from "./views/EventEditor.vue";

//import EventNEXT from "./views/EventNEXT.vue";

import Agenda from "./views/Agenda.vue";
import Archivio from "./views/Archivio.vue";
import ArchivioAnno from "./views/ArchivioAnno.vue";

import Login from "./views/Login.vue";


Vue.use(Router);
export default new Router({
    mode: "history",      // # normalmente verrebbe usato l'hashtag
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
            name: "home",         //export default {  name: "home"
            component: Home       //Home.vue
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
            path: "/tesseramentoprassi",
            name: "tesseramentoprassi",
            component: Tesseramentoprassi
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
            path: "/archivioAnno",
            name: "archivioAnno",
            component: ArchivioAnno
        },

        {
            path: "/login",
            name: "login",
            component: Login
        },
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
