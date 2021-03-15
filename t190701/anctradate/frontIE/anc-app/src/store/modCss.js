import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const modCategorie = new Vuex.Store({


    state: {
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


    },
    mutations: {

    },
    getters: {

    },
    actions: {

    }
})