import Vue from 'vue'
import Vuex from 'vuex'

// @ resolve src
import { apiService } from "@/common/api.service";
import { CSRF_TOKEN } from "@/common/csrf_token";
import { getCat } from "@/common/menu";
import { getCurrentCat } from "@/common/menu";

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {

        C: 10, // start with HOME
        CS: 0, // start with HOME
        categorie: [],
        /* ---- */
        requestUser: "Visitatore",
        requestUserIsStaff: false,
        requestUserIsSuper: false,
        requestUserAvatar: null,
        requestUserBio: null,
        requestToken: "",



        /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ css */
        // # identificativi         es #co
        id_c0: "{background - color: pink; height: 700px;}",
        id_c0img: "{height: 680px;}",
        id_c1: "{background - color: plum;    height: 700px;}",
        id_c1img: "{height: 680px;}",
        id_c2: "{background - color: purple;}",
        id_c2img: "{height: 680px;}",
        id_Logoutbtn: "{color: aquamarine;}",
        /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ css */
        // classi...                es .row
        cl_row: "{background- color: snow;}",
        cl_column: "{background - color: snow;}",
        cl_sedeorari: "{background - color: purple;    width: 100 %;    height: 100 %;}",
        cl_taC: "{text - align: center;}",
        cl_logeduser: "{color: LightGoldenRodYellow;}",
        cl_logout: "{color: DimGrey;   }",
        cl_h2: "{background - color: aqua;}",
        cl_ancTitle: "{color: #f9fbe7;}",
        cl_AncTitleColor: "{color: #f9fbe7;}",
        cl_AncAppBarColor: "{            color: #f9fbe7;}",
        cl_AncAppBarColor: ": hover {    color: #ffbe4d;}",
        cl_AncIconColor: "{              color: #f9fbe7;}",
        cl_AncIconColor: ": hover {      color: #ffbe4d;}",
        cl_AncItemColor: "{              color: #6d4c41;}",
        cl_AncItemColor: ": hover {      color: #ffbe4d;}",
        cl_AncTitleColorDark: "{         color: darkslategray;}",
        cl_rgbANC1: "{    background-color: rgb(20, 9, 2);}",               /* Marrone scuro +6 */
        cl_rgbANC2: "{    background-color: rgb(36, 17, 6);}",              /* Marrone scuro +5 */
        cl_rgbANC3: "{    background-color: rgb(51, 26, 12);}",             /* Marrone scuro +4 */
        cl_AncAppBar_BC: "{    background-color: rgb(19, 21, 36);}",
        /*background-color: #241518 !important;   */
        /*background-color: #2b2b29 !important;   */
        /*background-color: #241518 !important;   */
        cl_r_BC: "{    background - color: rgb(4, 11, 46)!important;}",  /* AncColor Blue +6 */
        cl_r_C: "{    color: rgb(4, 11, 46)!important;}",               /* AncColor Blue +6 */
        cl_rcLat_BC: "{    background - color: rgb(1, 4, 20)!important;}",   /* Blue */
        /*background-color: rgb(20, 9, 2) !important;*/
        cl_AncTrasparenza: `"{ /*      Effetto trasparenza su menu attivo */ 
                                position: absolute; 
                                z - index: 2;    
                                background-color: rgb(44, 3, 12)!important;
                                height: 100 %;
                                width: 100 %;
                                opacity: 0.7;}"`,
        cl_AncAppBar_BC: "{  background - color: 'rgb(19, 21, 36)';}",
        cl_SfBase: `"{ /*      Sfondo Base */
                                position: absolute;
                                z - index: 1;
                                width: 100 %;
                                height: 100 %;
                                background - color: whitesmoke;
                                text - align: center;}"`,
        cl_SfImmagine: `"{ /*      Sfondo Immagine TEST OK 2020 04 22*/
                                position: relative;
                                z - index: 3;
                                opacity: 0.15;
                                height: 100 %;
                                width: 100 %;
                                background - image: url("~@/assets/images/bg/bg8.jpg");}"`,
        cl_SfSpazio: `"{/*    spazio sotto AncAppBar */                       
                                position: relative;
                                z - index: 3;
                                width: 100 %;
                                opacity: 1;}"`,
        cl_SfShUp: "{ height: 150px;}",
        cl_SfShDown: "{ height: 78px;}",
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

        getToken () {
            //test OK
            console.log("cookies.get(CSRF_TOKEN)", $cookies.get("csrftoken"));
            this.requestToken = $cookies.get("csrftoken");
        },

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
        }


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