<template>
  <div class="contatti">
                                                            <!-- Ai  -->
    <AncIntestazione
      :C=               30
      :CS=              0
      :categorie=       "categorie"
       @gotoR=           "gotoR"
    ></AncIntestazione>                                     <!-- Ai  -->
    
    <div>                                                   <!-- div 00 -->
      <div class="my-4 pb-2 container-fluid text-center">   <!--container-fluid -->                                                           <!-- Titolo -->
        <AncCard
          :C=               30
          :CS=              0
          :categorie=       "categorie"
          :evidenza=        "Eevents"
          :Titolone=        "Titolone"
          @gotoR=           "gotoR"
        ></AncCard>     
                                                            <!-- Titolo -->   

<!-- **** -->
        <v-row class="row ma-2 pa-2"> <!-- row 00 --><!-- Riassunto Contatti -->  
            
            <v-col cols="6">
              <v-card
                    class="mx-auto"
                    max-width="400"
                    hover=""
                  >
                    <v-img
                      class="white--text align-end mb-4"
                      height="300px"
                      src="../../src/assets/images/Soci/dscf5555-436x569.jpg"
                    >
                      <v-card-title>Massimo Scariot</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-2 mu-4">Presidente</v-card-subtitle>
                    <v-card-text class="text--primary">
                      <div><h2>Massimo Scariot</h2></div>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        color="orange"
                        text
                      >
                        <p>335 5797460</p>
                      </v-btn>
                     
                      <v-btn
                        color="orange"
                        text
                      >
                        <p>posta@anctradate.it</p>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
            </v-col>


            <v-col cols="6">
              <v-card
                    class="mx-auto"
                    max-width="400"
                    hover=""
                  >
                    <v-img
                      class="white--text align-end mb-4"
                      height="300px"
                      src="../../src/assets/images/Soci/dscf5450-436x571.jpg"
                    >
                      <v-card-title>Maurizio Giuliacci</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-2 mu-4">Vice-presidente</v-card-subtitle>
                    <v-card-text class="text--primary">
                      <div><h2>Maurizio Giuliacci</h2></div>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        color="orange"
                        text
                      >
                        <p>347 2551972</p>
                      </v-btn>
                     
                      <v-btn
                        color="orange"
                        text
                      >
                        <p>posta@anctradate.it</p>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
            </v-col>

        </v-row>                            <!-- row 00 --><!-- Riassunto Contatti -->  


        <v-row dense class="row ma-2 pa-2"> <!-- row 01 --><!-- Descrizione Ubicazione -->  
              <!--
              <HelloWorld msg="ANC Tradate | contatti" />
              -->
        </v-row>                            <!-- row 01 --><!-- Descrizione Ubicazione -->



        <v-row dense class="row ma-2 pa-2"> <!-- row 02 -->

        </v-row>                            <!-- row 02 -->

        <v-row dense class="row ma-2 pa-2"> <!-- row 03 -->

        </v-row>                            <!-- row 03 -->

        <v-row dense class="row ma-2 pa-2"> <!-- row 04 -->   

        </v-row>                            <!-- row 04 -->

        <v-row dense class="row ma-2 pa-2"> <!-- row 05 -->   

        </v-row>                            <!-- row 05 -->

        <v-row dense class="row ma-2 pa-2"> <!-- row 06 -->   

        </v-row>                            <!-- row 06 -->

<!-- **** -->

        <v-row dense class="row ma-2 pa-2">   <!-- row 7 --> <!-- The end --> 
          <!-- AiF -->
          <div class="container-fluid text-center">    
              <AncIntestazioneFine 
                :menuCat=         "menuCat"              
                :menuSubCat=      "menuSubCat"
                :intFMsg=         "intMsg"
                :intFMsgSubH=     "intMsgSubH"
                :linksFP=         "linksFP"
                src= "../../src/assets/images/Icone/busS.png"
              ></AncIntestazioneFine>
          </div>
          <!-- AiF -->
        </v-row>                            <!-- row 7 --> <!-- The end -->  

      </div>      <!-- container-fluid -->
    </div>    <!-- div 00 -->    

  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld           from "@/components/HelloWorld.vue";
import router               from "../router";
import AncIntestazione      from "@/components/AncIntestazione.vue";
import AncIntestazioneFine  from "@/components/AncIntestazioneFine.vue";
import AncCard              from "@/components/AncCard.vue";


export default {
 name: "contatti",
  components: {
    HelloWorld,
    AncIntestazione,
    AncIntestazioneFine,
    AncCard,
  },

  props:{
    footercolor: String,
    requestUser: String,
    menuCat:        {type: String,},
    menuSubCat:     {type: String,},
    intMsg:         {type: String,},    //  "Anc Tradate",
    intMsgSubH:     {type: String,},    //  "Homepage",
    intFMsg:        {type: String,},    //  "Anc Tradate F",
    intFMsgSubH:    {type: String,},    //  "Homepage F",
    linksFP:        {type: Array,},     //
    src:            {type: String,},

    categorie:      {type: Array,},     
    C:              {type: Number,},
    CS:             {type: Number,},

  },   

  data() {
    return {
        events:         [],
        next: null,
        loadingEvents: false,

    };
  },

  methods: {
/*
        getEventsFuture() {
          let endpoint = "api/events/crud/listFuture/";
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
*/

    setMyPar(){
        let myparam={ 
          Ccurrent:         30,
          CScurrent:        0,
        }
        this.$emit("spMC",myparam) //spMC -- > sAVE pARAMETER / menu Cat 
    },   

      gotoR(r){
          console.log("rotta per...");
          this.$emit("gotoR","r")
      },
      
    },//methods

    created() {
      //this.getRequestUser();
      console.log("contatti oncreate --> start");
      //this.setMyPar();
      //this.getEventsFuture();
      document.title = "ANC Tradate";
    }
};
</script>
