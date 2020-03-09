{% load l10n %}
<template>
  <div class="home-view">

                                                            <!-- Ai  -->

                                                            <!--
                                                            :menuCat=         "menuCat"              
                                                            :menuSubCat=      "menuSubCat"
                                                            :intMsg=          "intMsg"
                                                            :intMsgSubH=      "intMsgSubH"
                                                            :linksFP=         "linksFP"
                                                            -->
    <AncIntestazioneHome
      :C=               10
      :CS=              0
      :categorie=       "categorie"
      @gotoR=           "gotoR"
    ></AncIntestazioneHome>                                     <!-- Ai  -->
                                                      <!-- Titolo -->
    <AncCard
      :C=               10
      :CS=              0
      :categorie=       "categorie"
      :evidenza=        "Eevents"
      :Titolone=        "Titolone"
       
      @gotoR=           "gotoR"
    ></AncCard>     
                                                        <!-- Titolo -->   


    
    <div>                           <!-- div 00 -->
      <div class="mb-0 pb-0 container-fluid text-center">   <!--container-fluid -->

      



<!--
    <v-parallax
        height="180"
        src="../assets/images/bg/bg8.jpg"
    >
      <div>    
          <div class="text-right">
              <h1     class="display-2 font-weight-bold mb-3"
              >Home page
              </h1>

              <p class="subheading font-weight-regular">
                 <a href="">Ultimi avvenimenti e prossimi appuntamenti...</a>
              </p>

          </div>
      </div>      
    </v-parallax>
-->


    <!--div>
        <div> {{ requestUser.name }} {{rvt}}</div>
        <div v-if= "focusOn" >focus on</div>
        <div v-else>focus off</div>
    </div-->

    



    <v-row
        class="fill-height"
        align="center"
        justify="center"
    >

        <v-col>
            <ancEventsPast
                :Pevents="Pevents"
                :Pnext="Pnext"
                :PloadingEvents="PloadingEvents"

                clFcard         ="grey darken-4 mx-auto my-4"
                clFtitle        ="grey darken-4 "
                clFevent        ="grey darken-3 "
                clFeventInt     ="grey darken-4 "
            ></ancEventsPast>
        </v-col>

        <v-col align="center">
<!-- data oggi 555555555555555555555555555555555555555555555555555555555555  -->
        <v-card
          class="mx-auto my-4 text-center ma-2 grey lighten-5"
          light
          max-width="500"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline ma-2"></div>
              <v-list-item-subtitle>
                  OGGI...
              </v-list-item-subtitle>
              <v-list-item-title id="date" class="headline mb-1">
                  <div>
                    {{ displaydate }}
                  </div>
<!--              
                  {{ date }} {{month}} {{year}} 
-->              
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
<!-- data oggi 555555555555555555555555555555555555555555555555555555555555  -->
        </v-col>

        <v-col>
            <ancEventsFuture
                :Fevents="Fevents"
                :Fnext="Fnext"
                :FloadingEvents="FloadingEvents"

                clFcard         ="grey lighten-3 mx-auto my-4"
                clFtitle        ="grey lighten-4"
                clFevent        ="grey lighten-2"
                clFeventInt     ="grey lighten-4"
            ></ancEventsFuture>
        </v-col>
    </v-row>

<!-- **** -->

        <v-row dense class="row ma-2 pa-2">   <!-- row 7 --> <!-- The end --> 
          <!-- AiF -->
          <div class="container-fluid text-center">    
              <AncIntestazioneFine
                :C=               "C"
                :CS=              "CS"
                :categorie=       "categorie"
                @gotoR=           "gotoR"
              ></AncIntestazioneFine>
          </div>
          <!-- AiF -->
        </v-row>                            <!-- row 7 --> <!-- The end -->  

      </div>      <!-- container-fluid -->
    </div>    <!-- div 00 -->  





  </div>
</template>

<script>
import { apiService }       from "../common/api.service";
import router               from "../router";
import ancEventsPast        from '../components/AncEventsPast';
import ancEventsFuture      from '../components/AncEventsFuture';
import AncIntestazioneHome  from "@/components/AncIntestazioneHome.vue";
import AncIntestazioneFine  from "@/components/AncIntestazioneFine.vue";
import AncCard              from "@/components/AncCard.vue";


//import ancEventsPreview     from '../components/AncEventsPreview';

//import HelloWorld           from '../components/HelloWorld';
//import NavbarComponentDark  from '../components/NavbarDark';

export default {
  name: "home",

  components: {
    ancEventsPast,
    ancEventsFuture,
    AncIntestazioneHome,
    AncIntestazioneFine,
    AncCard,

//  ancEventsPreview
//  NavbarComponentDark
//  HelloWorld
    },
  
  props:{
        requestUser:      { type: String, }, 
        rvt:              { type: Number, },
        evidenza:         { type: String  },

        categorie:        { type: Array,  },     
        C:                { type: Number, },
        CS:               { type: Number, },
        
  },

  data() {
    return {

        scr: "",
        focusOn: false,

// * EVIDENZA
        Eevents:[],
        Enext: null,
        EloadingEvents: false,
        Titolone: null,
       

// * PAST
        Pevents:[],
        Pnext: null,
        PloadingEvents: false,
// * FUTURE
        Fevents:[],
        Fnext: null,
        FloadingEvents: false,

        d: null,
        date: null,
        year: null,
        month: null,
        monthArr: null,
        displaydate:null,
        clF: String,
        clP: String,

        menuCat        : "Home",
        menuSubCat     : "Homepage",

        intMsg         : "Anc Tradate",
        intMsgSubH     : "Homepage",
        intFMsg        : "Anc Tradate F",
        intFMsgSubH    : "Homepage F",

        linksFP        : [  { descrizione:  "Archivio Eventi",      link: "archivio/"             },          
                            { descrizione:  "Agenda",               link: "agenda/"         },  
                         ],
    };
  },

  methods: {

      setMyPar(){
          let myparam={ 
            Ccurrent:         10,
            CScurrent:        0,
          }
          this.$emit("spMC",myparam) //spMC -- > sAVE pARAMETER / menu Cat 
      }, 

        clock() {
            this.d          = new Date();
            this.date       = this.d.getDate();
            this.year       = this.d.getFullYear();
            this.month      = this.d.getMonth();
            this.monthArr   = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
            this.month      = this.monthArr[this.month];

            this.displaydate=this.date+" "+this.month+", "+this.year;
//            document.getElementById("date").innerHTML=this.date+" "+this.month+", "+this.year;
        },

        getEvidenza() {
          var x;
          let endpoint = "api/evidenza/";
          if (this.Enext) {
            endpoint = this.Pnext;
          }
          this.EloadingEvents = true;
          apiService(endpoint).then(data => {
            console.log(data.results);
            this.Eevents.push(...data.results);
            this.EloadingEvents = false;
            if (data.next) {
              this.Enext = data.next;
            } else {
              this.Enext = null;
            }

            //ciclo per creare titolo in evidenza...
            if (this.Eevents.length==0) {
                this.Titolone = ""  
            }else{
                this.Titolone = "IN EVIDENZA: "  
                for (x of this.Eevents) {
                console.log(x.title);
                this.Titolone = this.Titolone + " - " + x.title +"   "
            }

            }  


                     

          });
        },

        getEvents() {
          let endpoint = "api/events/";
          if (this.next) {
            endpoint = this.next;
          }
          this.loadingEvents = true;
          apiService(endpoint).then(data => {

            console.log(data.results);

            this.events.push(...data.results);
            this.loadingEvents = false;
            if (data.next) {
              this.next = data.next;
            } else {
              this.next = null;
            }
          });
        },

        getEventsPast() {
          let endpoint = "api/events/crud/listPast/";
          if (this.Pnext) {
            endpoint = this.Pnext;
          }
          this.PloadingEvents = true;
          apiService(endpoint).then(data => {
            console.log(data.results);
            this.Pevents.push(...data.results);
            this.PloadingEvents = false;
            if (data.next) {
              this.Pnext = data.next;
            } else {
              this.Pnext = null;
            }
          });
        },

        getEventsFuture() {
          let endpoint = "api/events/crud/listFuture/";
          if (this.Fnext) {
            endpoint = this.Fnext;
          }
          this.FloadingEvents = true;
          apiService(endpoint).then(data => {
            console.log(data.results);
            this.Fevents.push(...data.results);
            this.FloadingEvents = false;
            if (data.next) {
              this.Fnext = data.next;
            } else {
              this.Fnext = null;
            }
          });
        },


        getRequestUser() {
            let endpoint = "api/profiles/getcurrentuser/";
            apiService(endpoint).then(data => {
              console.log("chiamata rest... user:",data);
              console.log("chiamata rest... user:",data.us.name);
//              this.requestUser = data.us.name;
            });
        },

        setRequestUser() {
          this.requestUser = window.localStorage.getItem("username");
        },

        gotoR(r){
          console.log("Home rotta per...", r);
          this.$emit("gotoR",r)
        },

  },

  created() {
    console.log("home oncreate --> start");

//    this.getRequestUser();
//    this.getEvents();

//DA RIPRISTINARE

    this.getEvidenza();
    this.getEventsPast();
    this.getEventsFuture();
    this.clock();
    this.setMyPar();


  },
  updated(){
//    this.getRequestUser();    
  }

};
</script>


<style media="screen">
.author-name {
  font-weight: bold;
  color: #dc3545;
}
.event-link {
  font-weight: bold;
  color: black;
}
.event-link:hover {
  color: cadetblue  !important;
  text-decoration: none;
}
.group {
display: flex;
flex: 1;
justify-content: space-around;
}

.imgop {
opacity: 0.4;
}

.bg {

    background-image: url("../assets/images/bg/bg1.jpg");
}
</style>

<!--
<v-parallax
    height="300"
    src="../assets/images/bg/bg1.jpg"
></v-parallax>
-->
