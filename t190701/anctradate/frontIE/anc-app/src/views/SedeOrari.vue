<template>
  <div class="sedeorari">
                                                            <!-- Ai  -->
    <AncIntestazione
      :C=               20
      :CS=              22
      :categorie=       "categorie"
       @gotoR=           "gotoR"
    ></AncIntestazione>                                     <!-- Ai  -->
    
    <div>                                                   <!-- div 00 -->
      <div class="my-4 pb-2 container-fluid text-center">   <!--container-fluid -->                                                           <!-- Titolo -->
        <AncCard
          :C=               20
          :CS=              22
          :categorie=       "categorie"
          :evidenza=        "Eevents"
          :Titolone=        "Titolone"
          @gotoR=           "gotoR"
        ></AncCard>     
                                                            <!-- Titolo -->   
<!-- **** -->

        <v-row dense class="row ma-2 pa-2"> <!-- row 00 --><!-- Riassunto Orari -->  
          <v-col cols="6">
            <v-card class="pa-4" dark>      
                <h2>Giovedi</h2><br>
                <h3>dalle {{pickerGstart}} alle {{pickerGend}}</h3>
                
            </v-card>    
          </v-col>
          <hr>
          <v-col cols="6">
            <v-card class="pa-4">      
                <h2>Domenica</h2><br>
                <h3>dalle {{pickerDstart}} alle {{pickerDend}}</h3>
                
            </v-card>  
          </v-col>
        </v-row>                            <!-- row 00 --><!-- Riassunto Orari -->  

        <v-row dense class="row ma-2 pa-2"> <!-- row 01 --><!-- Pickers -->        
          <v-col cols="12">                 <!-- col 01 --><!-- Giovedi -->            
            <!--div>
              <h2               align="center" 
                                class="display-3 font-weight-bold mb-3 pa-6" 
                                style="color:white" 
              >Giovedí
              </h2><h3>dalle {{pickerGstart}} alle {{pickerGend}}
              </h3>
            </div-->

            <v-card outlined dark>

              <v-img
                
                  :src= "img1" 
                  height="200px"
              >   
                <div>        
                  <h3
                    class="display-3 font-weight-bold mb-0 text-right" 
                    style="color:white" 
                  >Giovedí
                  </h3>
                </div>  
              
              </v-img>  
              

              <v-flex           class="ma-4">
                <v-time-picker  v-model="pickerGstart"
                                color="green lighten-1"
                                format="24hr"
                >
                  <h4           class="ma-4"
                  >Apre
                  </h4>
                </v-time-picker>  
              </v-flex>
              <v-flex           class="ma-4">
                <v-time-picker  v-model="pickerGend"
                                color="red lighten-1"
                                format="24hr"
                >
                  <h4            class="ma-4"
                  >Chiude
                  </h4>
                </v-time-picker>
              </v-flex>

              

            </v-card>
          </v-col>                          <!-- col 01 --><!-- Giovedi -->

          <v-col cols="12">                 <!-- col 02 --><!-- Domenica -->
          
            <!--div>
              <h2               align="center" 
                                class="display-3 font-weight-bold mb-3 pa-6" 
                                style="color:white" 
              >Domenica
              </h2>
              <h3>dalle {{pickerDstart}} alle {{pickerDend}}
              </h3>
            </div-->
          
            <v-card outlined >
              <v-flex           class="ma-4">
                <v-time-picker  v-model="pickerDstart"
                                color="green lighten-1"
                                format="24hr"
                >
                  <h4           class="ma-4"
                  >Apre
                  </h4>
                </v-time-picker>  
              </v-flex>
              <v-flex           class="ma-4">
                <v-time-picker  v-model="pickerDend"
                                color="red lighten-1"
                                format="24hr"
                >
                  <h4            class="ma-4"
                  >Chiude
                  </h4>
                </v-time-picker>
              </v-flex>
              <v-img            :src= "img1" 
                                height="200px">
                <v-card-title   class="ma-4"
                                color="white lighten-2"
                  >
                    <h3         class="display-3 font-weight-bold mb-0 text-right" 
                                style="color:white" 
                    >Domenica
                    </h3>
                </v-card-title>               
              </v-img>
            </v-card>
          </v-col>                            <!-- col 02 --><!-- Domenica -->
        </v-row>                              <!-- row 01 --><!-- Pickers -->

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

import router               from "../router";
import AncIntestazione      from "@/components/AncIntestazione.vue";
import AncIntestazioneFine  from "@/components/AncIntestazioneFine.vue";
import AncCard              from "@/components/AncCard.vue";


export default {
  name: "sedeOrari",
  
  components: {
    AncIntestazione,
    AncIntestazioneFine,
    AncCard
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

        pickerGstart: "21:00",
        pickerGend:   "23:00",
        pickerDstart: "09:00",
        pickerDend:   "12:00",

        img1:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        img2:"../assets/images/HomePageCarousel/dsc32.jpg", //
        img3:"../../src/assets/images/HomePageCarousel/Imm021w.jpg", //foto sede con benemerite
       
      };
  },

  methods:{
    setMyPar(){
          let myparam={ 
            Ccurrent:         20,
            CScurrent:        22,
          }
          this.$emit("spMC",myparam) //spMC -- > sAVE pARAMETER / menu Cat 
    }, 
    gotoR(r){
        console.log("SedeORARI --> rotta per...");
        this.$emit("gotoR",r)
    },
   },
    created(){
        console.log("sede orari oncreate --> start");
        //this.setMyPar();
    }  
};
</script>

<style media="screen">
.sedeorari{
    background-color: darkred;
    width: 100%;
    height: 100%;
}
</style>