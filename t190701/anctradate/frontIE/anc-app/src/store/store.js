import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";

//import moduleC from "./modCategorie"

// @ resolve src
import { apiService } from "@/common/api.service";
import { axiosService } from "@/common/axios_calls";

import menuT from "@/common/menuTime.js";

Vue.use(Vuex)

/*      general      */
const moduleA = {
    state: {
        rcS: "rcS rcX rcLat rcLat_BC_Visitor",
        rcD: "rcD rcX rcLat rcLat_BC_Visitor",
        rcU: "rmvcolD rmH   rcLat_BC_Visitor",
        count: 3,
    },
    mutations: {
        increment (state) {
            // `state` is the local module state
            state.count++
        },
        set_rcS (state, val) {
            state.rcS = val;
        },
        set_rcD (state, val) {
            state.rcD = val;
        },
        set_rcU (state, val) {
            state.rcU = val;
        }

    },
    actions: {

        setcolor (context) {

            var x = this;
            /*TODO: sistema sincronizzazione per non far leggere sempre vis...*/
            var cu = context.getters.requestUser;
            console.log("$store moduleA setcolor, intanto user :", cu);

            if (context.getters.requestUserIsSuper === true) {

                context.commit("set_rcS", "rcS rcX rcLat rcLat_BC_Admin");
                context.commit("set_rcD", "rcD rcX rcLat rcLat_BC_Admin");
                context.commit("set_rcU", "rmvcolD rmH   rcLat_BC_Admin"); //menu USER

                /*
                                state.nbc = "#212121"; //dark-grey
                                state.rcU = "rmvcolD rmH   rcLat_BC_Admin"; //menu USER
                                state.admin = true;
                                */
            } else {
                if (context.getters.requestUserIsStaff === true) {

                    context.commit("set_rcS", "rcS rcX rcLat rcLat_BC_Staff");
                    context.commit("set_rcD", "rcD rcX rcLat rcLat_BC_Staff");
                    context.commit("set_rcU", "rmvcolD rmH   rcLat_BC_Staff"); //menu USER

                    /*
                                        state.rcS = "rcS rcX rcLat rcLat_BC_Staff";
                                        state.rcD = "rcD rcX rcLat rcLat_BC_Staff";
                                        state.nbc = "black";
                                        state.admin = false;
                                        */
                    /*state.rcU = "rmvcolD rmH   rcLat_BC_Staff"; /*menu USER*/


                } else {
                    context.commit("set_rcS", "rcS rcX rcLat rcLat_BC_Visitor");
                    context.commit("set_rcD", "rcD rcX rcLat rcLat_BC_Visitor");
                    context.commit("set_rcU", "rmvcolD rmH   rcLat_BC_Visitor"); //menu USER
                    /*
                    state.rcS = "rcS rcX rcLat rcLat_BC_Visitor";
                    state.rcD = "rcD rcX rcLat rcLat_BC_Visitor";
                    state.nbc = "#212121"; //dark-grey
                    state.admin = false;
                    *//*
                    state.rcU = "rmvcolD rmH   rcLat_BC_Visitor"; /*menu USER*/

                }
            }
        },

    },
    getters: {

        rcS (state) { return state.rcS },
        rcD (state) { return state.rcD },
        rcU (state) { return state.rcU },

    },

}
/*      categorie: menucat      */
const moduleC = {
    state: {
        count: 3,
        //anc app Menu
        menucat:
            [
                {//cat1
                    n: "10",
                    descrizione: "Home",
                    titolo: "",
                    //icona: "mdi-shield-half-full",
                    icona: "mdi-bank",
                    img: "/static/icons/menu/Sede.jpg",
                    imgEvidenza: "/static/icons/menu/importanteww.png",
                    link: "/",
                    linksFP:
                        [{
                            descrizione: "Ubicazione sede",
                            link: "sede/"
                        },
                        {
                            descrizione: "Chi siamo",
                            link: "chisiamo/"
                        },
                        {
                            descrizione: "Richiedi INFO",
                            link: "contatti/"
                        },
                        ],
                    sottocategorie: [
                    ]
                },
                {//cat2
                    n: "20",
                    descrizione: "Sede",
                    titolo: "Il ritrovo abituale per i soci",
                    icona: "mdi-compass",
                    //icona: "mdi-bank",
                    img: "/static/images/Icone/anclogo7.gif",
                    link: "/sede",
                    linksFP:
                        [{
                            descrizione: "Ubicazione sede",
                            link: "sede/"
                        },
                        {
                            descrizione: "Chi siamo",
                            link: "chisiamo/"
                        },
                        {
                            descrizione: "Richiedi INFO",
                            link: "contatti/"
                        },
                        ],
                    sottocategorie: [
                        {
                            n: "21",
                            descrizione: "ubicazione",
                            titolo: "Dove siamo",
                            icona: "mdi-compass",
                            img: "/static/icons/menu/Sede.png",
                            link: "/sede",
                        },
                        {
                            n: "22",
                            descrizione: "orari",
                            titolo: "Quando ci troviamo",
                            icona: "mdi-clock-outline",
                            img: "/static/icons/menu/Orologio.jpg",
                            link: "/sedeOrari",
                        },
                    ]
                },
                {//cat3
                    n: "30",
                    descrizione: "Contatti",
                    titolo: "Come contattarci",
                    icona: "mdi-face-agent",
                    img: "/static/images/Icone/anclogo7.gif",
                    link: "/contatti",
                    linksFP:
                        [{
                            descrizione: "Ubicazione sede",
                            link: "sede/"
                        },
                        {
                            descrizione: "Chi siamo",
                            link: "chisiamo/"
                        },
                        {
                            descrizione: "Richiedi INFO",
                            link: "contatti/"
                        },
                        ],
                    sottocategorie: [
                        {
                            n: "31",
                            descrizione: "presidente",
                            titolo: "",
                            icona: "",
                            img: "",
                            link: "",
                        },
                        {
                            n: "32",
                            descrizione: "vicepresidente",
                            titolo: "",
                            icona: "",
                            img: "",
                            link: "",
                        },
                        {
                            n: "33",
                            descrizione: "posta",
                            titolo: "",
                            icona: "",
                            img: "",
                            link: "",
                        },
                    ]
                },

                {//cat4
                    n: "40",
                    descrizione: "Chi siamo",
                    titolo: "Organizzazione della sezione",
                    icona: "mdi-account-group",
                    img: "/static/images/Icone/anclogo7.gif",
                    link: "/chisiamo",
                    linksFP:
                        [{
                            descrizione: "Ubicazione sede",
                            link: "sede/"
                        },
                        {
                            descrizione: "Chi siamo",
                            link: "chisiamo/"
                        },
                        {
                            descrizione: "Richiedi INFO",
                            link: "contatti/"
                        },
                        ],

                    sottocategorie: [
                        {
                            n: "41",
                            descrizione: "Direttivo",
                            titolo: "L'Amministrazione dell'Associazione",
                            icona: "mdi-human-greeting",
                            img: "/static/images/Icone/bus.jpg",
                            link: "/chisiamodirettivo",
                        },
                        {
                            n: "42",
                            descrizione: "Soci",
                            titolo: "Il cuore dell'Associazione",
                            icona: "mdi-human-greeting",
                            img: "/static/images/Icone/bus.jpg",
                            link: "/chisiamosoci",
                        },
                        {
                            n: "43",
                            descrizione: "Benemerite",
                            titolo: "Il fiore all'occhiello",
                            icona: "mdi-human-female",
                            img: "/static/images/Icone/bengradi.jpg",
                            link: "/chisiamobenemerite",
                        },
                        {
                            n: "44",
                            descrizione: "Simpatizzanti",
                            titolo: "La forza di chi sta dalla nostra parte",
                            icona: "mdi-human-handsup",
                            img: "/static/images/Icone/cap.jpg",
                            link: "/chisiamosimpatizzanti",
                        },
                    ]
                },
                {//cat5
                    n: "50",
                    descrizione: "Agenda",
                    titolo: "prossimi appuntamenti da non perdere",
                    icona: "mdi-calendar-clock",
                    img: "/static/icons/menu/Agenda.jpg",
                    link: "/agenda",
                    linksFP:
                        [{
                            descrizione: "Ubicazione sede",
                            link: "sede/"
                        },
                        {
                            descrizione: "Chi siamo",
                            link: "chisiamo/"
                        },
                        {
                            descrizione: "Richiedi INFO",
                            link: "contatti/"
                        },
                        ],
                    sottocategorie: [
                        {
                            n: "51",
                            descrizione: "appuntamenti",
                            titolo: "",
                            icona: "",
                            img: "/static/icons/menu/Agenda.jpg",
                            link: "",
                        },
                    ]
                },
                {//cat6
                    n: "60",
                    descrizione: "Archivio",
                    titolo: "sfogliando tra i vecchi ricordi ",
                    icona: "mdi-archive",
                    img: "/static/images/Icone/anclogo7.gif",
                    link: "/archivio",
                    linksFP:
                        [{
                            descrizione: "Ubicazione sede",
                            link: "sede/"
                        },
                        {
                            descrizione: "Chi siamo",
                            link: "chisiamo/"
                        },
                        {
                            descrizione: "Richiedi INFO",
                            link: "contatti/"
                        },
                        ],

                    sottocategorie: [
                        {
                            n: "61",
                            descrizione: "Eventi",
                            titolo: "Cosa abbiamo realizzato",
                            icona: "",
                            img: "/static/images/Icone/anclogo7.gif",
                            link: "",
                        },
                    ]
                },
                {//cat7
                    n: "70",
                    descrizione: "Tesseramento",
                    titolo: "sostenere l'Associazione",
                    icona: "mdi-passport",
                    img: "/static/images/Materiale/tesserino.jpg",
                    link: "/tesseramento",
                    linksFP:
                        [{
                            descrizione: "Ubicazione sede",
                            link: "sede/"
                        },
                        {
                            descrizione: "Chi siamo",
                            link: "chisiamo/"
                        },
                        {
                            descrizione: "Richiedi INFO",
                            link: "contatti/"
                        },
                        ],

                    sottocategorie: [
                        {
                            n: "71",
                            descrizione: "Prassi",
                            titolo: "Come funziona il tesseramento e il rinnovo",
                            icona: "mdi-format-list-text",
                            img: "/static/images/Materiale/tesserino.jpg",
                            link: "/tesseramentoprassi",
                        },
                    ]
                },
                {//cat8
                    n: "80",
                    descrizione: "Links",
                    titolo: "Siti di interesse, amici, altro...",
                    icona: "mdi-link-variant",
                    img: "/static/images/Icone/anclogo7.gif",
                    link: "/links",
                    linksFP:
                        [{
                            descrizione: "Ubicazione sede",
                            link: "sede/"
                        },
                        {
                            descrizione: "Chi siamo",
                            link: "chisiamo/"
                        },
                        {
                            descrizione: "Richiedi INFO",
                            link: "contatti/"
                        },
                        ],

                    sottocategorie: [
                    ]
                },
            ]
    },
    mutations: {

    },
    actions: {

    },

    getters: {
        categorie (state) { return state.menucat },
    },

}

/*      Dinamic css - color      */
const moduleD = {
    state: {
        count: 3,
    },
    mutations: {

    },
    actions: {

    },

    getters: {

    },

}

/*  router  */
const moduleR = {
    state: {
        calculatingC: "false",
        calculatingCS: "false",
        C: 10, // start with HOME
        CS: 0, // start with HOME



    },
    mutations: {

        aggiornaC (state, c) {
            state.C = c;
            state.calculatingC = false;
        },
        aggiornaCS (state, cs) {
            state.CS = cs;
            state.calculatingCS = false;
        },
        aggiornaCCS (state, cat) {
            //console.log("!! store aggiornaCCS cat: ", cat[0], cat[1])
            state.C = cat[0];
            state.CS = cat[1];
            state.calculatingC = false;
            state.calculatingCS = false;
            //console.log("!! store state.C", state.C)
            //console.log("!! store state.Cs", state.CS)
            //console.log("!! store calculatingC", state.calculatingC)
            //console.log("!! store calculatingCS", state.calculatingCS)
        },
        aggiornamento (state) {
            console.log("!! store aggiornamento....");
            state.calculatingC = true;
            state.calculatingCS = true;
        }
    },
    actions: {

        //console.log("!! store ROTTA r: ", r);
        //console.log("!! store calculatingC", context.state.calculatingC)
        //console.log("!! store calculatingCS", context.state.calculatingCS)
        //console.log("!! store attesa ok su calculating C e CS ...")
        //console.log("!! store gotor /// fine attesa...");


        /* TEST 2020 05 03 OK */
        gotoR (context, r) {
            context.commit('aggiornamento');
            store.dispatch('setCS', r).then(() => {
                if ((context.state.calculatingC || context.state.calculatingCS)) {
                    setTimeout(100);
                }
                router.push("/");
                router.push(r);
            })
                .catch((error) => { console.log(error.response.data.errors) });
        },

        setCS (context, r) {                    /*  CODE THE CALL    */
            var cat = [];
            //console.log("!! store setCS --> RATING r: ", r);
            switch (r) {
                case "": cat = [0, 0]; break;
                case "/": cat = [10, 0]; break;
                case "/sede": cat = [20, 21]; break;
                case "/sedeOrari": cat = [20, 22]; break;
                case "/contatti": cat = [30, 0]; break;
                case "/chisiamo": cat = [40, 0]; break;
                case "/chisiamodirettivo": cat = [40, 41]; break;
                case "/chisiamosoci": cat = [40, 42]; break;
                case "/chisiamobenemerite": cat = [40, 43]; break;
                case "/chisiamosimpatizzanti": cat = [40, 44]; break;
                case "/agenda": cat = [50, 0]; break;
                case "/archivio": cat = [60, 0]; break;
                case "/event": cat = [60, 68]; break;//crea 
                case "/event/": cat = [60, 68]; break;//crea  
                case "/event/:slug": cat = [60, 69]; break;//modifica 
                case "/tesseramento": cat = [70, 0]; break;
                case "/links": cat = [80, 0]; break;
                default: cat = [10, 0]; break;//HOME...
            };
            context.commit('aggiornaCCS', cat);
            console.log("!! store moduleR setCS --> FINE valutazione r: ", r, "C: ", cat[0], "CS: ", cat[1]);
            return;
        },

    },
    getters: {
        getC: state => { return state.C },
        getCS: state => { return state.CS },
    }

}


/*      user      */
const moduleU = {
    state: {

        loadingStatusUser: false,

        requestUser: "Vis",
        requestUserIsStaff: false,
        requestUserIsSuper: false,
        requestUserAvatar: null,
        requestUserBio: null,
        requestUserCity: "",
        requestToken: "",

        count: 3,

    },
    mutations: {
        SET_LOADING_STATUS_user (state, status) {
            state.loadingStatusUser = status
        },

        SET_requestUserAll (state, us) {


            console.log("!! STORE --> SET request user all...");

            console.log("!! STORE --> SET us.name...", us.name);
            state.requestUser = us.name;
            console.log("!! STORE --> SET us.IsStaff...", us.staff);
            state.requestUserIsStaff = us.staff;
            console.log("!! STORE --> SET us.IsSuper..", us.superuser);
            state.requestUserIsSuper = us.superuser;
            state.requestUserBio = us.bio;
            state.requestUserCity = us.city;
            state.requestUserAvatar = us.Avatar;
        },

        SET_user (state, ru) { state.requestUser = ru },
        SET_userIsStaff (state, ruIsStaff) { state.requestUserIsStaff = ruIsStaff },
        SET_userIsSuper (state, ruIsSuper) { state.requestUserIsSuper = ruIsSuper },
        SET_userAvatar (state, ruAvatar) { state.requestUserAvatar = ruAvatar },
        SET_userBio (state, ruBio) { state.requestUserIsSuper = ruBio },
        SET_Token (state, rT) { state.requestToken = rT },
    },
    actions: {

        getRequestUser (context) {
            console.log("!! STORE --> tentativo chiamata axiosService... getcurrentuser");
            let endpoint = "api/profiles/getcurrentuser/";
            console.log("!! STORE --> tentativo chiamata axiosService...", endpoint);
            apiService(endpoint).then(data => {
                //axiosService(url, method).then(data => {
                //const axios = require('axios');
                console.log("!! STORE --> RITORNATO data:", data);
                context.commit('SET_LOADING_STATUS', 'finish loading');
                context.commit('SET_requestUserAll', data.us);
                console.log("!! STORE --> provo a settare anche color");
                // TODO: TEST OK ?
                context.dispatch('setcolor');


            }).catch(error => {
                console.log("!! STORE Err ... ", error)
                context.commit('SET_LOADING_STATUS', 'NOT loading')
                /*TODO:
                funzione SOS da studiare...
                */
            });
        },


        setUSER (context) {  /* test ok */
            /*
                        context.commit('SET_LOADING_STATUS_user', 'loading')
                        const axios = require('axios');
                        let endpoint = "api/profiles/getcurrentuser/";
                        axios.get(endpoint).then(response => {
                            console.log("Store... axios... setUSER...");
                            console.log("RESPONSE: ", response);
                            console.log("RESPONSE headers: ", response.headers);
                            console.log("RESPONSE status: ", response.status);
                            console.log("RESPONSE url: ", response.url);
                            context.commit('SET_LOADING_STATUS_user', 'finish loading')
                            context.commit('SET_TODOS', response.data.results)
                            context.commit('setuser', response.data.us.name)
                            context.commit('setuserIsStaff', data.us.staff)
                            context.commit('setuserIsSuper', data.us.superuser)
                            //context.commit('setuserAvatar', data.us.avatar)
                            context.commit('setuserBio', data.us.bio)
                            context.commit('SET_LOADING_STATUS_user', 'loading')
                        }).catch(error => {
                            console.log(error)
                            context.commit('SET_LOADING_STATUS_user', 'NOT loading')
                        });;
              */
        },

    },
    getters: {
        requestUser (state) { return state.requestUser },
        requestUserIsStaff (state) { return state.requestUserIsStaff },
        requestUserIsSuper (state) { return state.requestUserIsSuper },
        requestUserAvatar (state) { return state.requestUserAvatar },
        requestUserBio (state) { return state.requestUserBio },
        requestToken (state) { return state.requestToken },
    },

}



export const store = new Vuex.Store({
    modules: {
        a: moduleA,//General

        c: moduleC,//Categorie
        d: moduleD,//Dinamic Css - Colors 
        u: moduleU,//User 
        r: moduleR,//router
    },

    state: {

        /* ---- module U ---- */
        /*
        requestUser: "Visitatore",
        requestUserIsStaff: false,
        requestUserIsSuper: false,
        requestUserAvatar: null,
        requestUserBio: null,
        requestToken: "",
        */
        /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ css */

        flavor: 'pippo',
        count: 0,
        loadingStatus: 'notLoading',
        todos: [
            { id: 1, text: '.aa..', done: true },
            { id: 2, text: '.bb..', done: false },
            { id: 3, text: '.cc..', done: true },
            { id: 4, text: '.dd..', done: true },
            { id: 5, text: '.ee..', done: false },
        ],
        todoscomputed: [{ "nome": "piero" }, { "nome": "marco" },]

    },

    mutations: {
        change (state, newdata) {       /*  this.$store.commit("change", event.target.value);    */
            state.flavor = newdata
        },
        decrementcount (state) {
            state.count--
        },
        incrementcount (state) {
            state.count++
        },

        SET_LOADING_STATUS (state, status) {
            state.loadingStatus = status
        },
        SET_TODOS (state, todos) {
            state.todos = todos
        },
        /*
        SET_requestUser (state, us) {
            console.log("!! STORE --> MUTATION name: ", us.name);
            console.log("!! STORE --> MUTATION staff: ", us.staff);
            console.log("!! STORE --> MUTATION super: ", us.superuser);
            console.log("!! STORE --> MUTATION bio: ", us.bio);
            state.requestUser = us.name;
            state.requestUserIsStaff = us.staff;
            state.requestUserIsSuper = us.superuser;
            state.requestUserBio = us.bio;
 
        }
        */

    },

    actions: {
        ancAction2 (context) {  /* test ok */
            context.commit('SET_LOADING_STATUS', 'loading')
            const axios = require('axios');
            axios.get('api/events').then(response => {
                /*  console.log("apiService valutazione getJSON response");
                    console.log("RESPONSE: ", response);
                    console.log("RESPONSE headers: ", response.headers);
                    console.log("RESPONSE status: ", response.status);
                    console.log("RESPONSE url: ", response.url);    */
                context.commit('SET_LOADING_STATUS', 'finish loading')
                context.commit('SET_TODOS', response.data.results)
            }).catch(error => {
                console.log(error)
                context.commit('SET_LOADING_STATUS', 'NOT loading')
            });;
        },
        /*
                getToken () {
                    //test OK
                    console.log("cookies.get(CSRF_TOKEN)", $cookies.get("csrftoken"));
                    this.requestToken = $cookies.get("csrftoken");
                },
        */

        /* TEST OK
        getRequestUser (context) {
            let endpoint = "api/profiles/getcurrentuser/";
            apiService(endpoint).then(data => {
                console.log("!! STORE --> chiamata rest... data:", data.us.name);
                context.commit('SET_LOADING_STATUS', 'finish loading')
                context.commit('SET_requestUser', data.us)
 
            }).catch(error => {
                console.log("!! STORE Err ... ", error)
                context.commit('SET_LOADING_STATUS', 'NOT loading')
            });
        },
        */
    },

    getters: {
        flavor: state => state.flavor,
        count: state => state.count,
        loadingStatus: state => state.loadingStatus,

        todos: state => state.todos,
        todosDone: state => {
            return state.todos.filter(todo => todo.done)
        },
        todoscomputed: state => state.todoscomputed,
        todoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        },
    }
})







/*
ancAction1 (context) {
    context.commit('SET_LOADING_STATUS', 'loading')
    axios.get('/api/events').then(response => {
        context.commit('SET_LOADING_STATUS', 'notLoading')
        context.commit('    SET_TODOS', response.data.todos)
    }).catch(error => console.log(error));
},
*/
/*
fetchTodos (context) {
    context.commit('SET_LOADING_STATUS', 'loading')
    axios.get('/api/events').then(response => {
        context.commit('SET_LOADING_STATUS', 'notLoading')
        context.commit('    SET_TODOS', response.data.todos)
    }
    ).catch(error => console.log(error));
},
*/