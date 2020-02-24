<template>
  <div class="chisiamo">
                                                            <!-- Ai  -->
    <AncIntestazione
      :C=               "C"
      :CS=              "CS"
      :categorie=       "categorie"
       @gotoR=           "gotoR"
    ></AncIntestazione>                                     <!-- Ai  -->
    
    <div>                                                   <!-- div 00 -->
      <div class="my-4 pb-2 container-fluid text-center">   <!--container-fluid -->                                                           <!-- Titolo -->
        <AncCard
          :C=               "C"
          :CS=              "CS"
          :categorie=       "categorie"
          
          :evidenza=        "evidenza"
          :Titolone=        "Titolone" 

          @gotoR=           "gotoR"
        ></AncCard>     
                                                            <!-- Titolo -->   

<!-- **** -->

               

        <v-row 
          dense 
          class="row ma-2 pa-2"
        >                                     <!-- row 01 --><!--  -->  
              <v-col 
                cols="4" 
                v-for="cat in categorie[3].sottocategorie"               
                :key="cat.n"
              >
                <v-card 

                  light
                  class="pa-4"
                  height="400px"
                  hover=""
                  @click="gotoR(cat.link)"
                >
                  <v-img
                      :src= "cat.img"
                      width="300"
                      max-height="200"
                  >
                    
                  </v-img>
                  <v-card-title>
                    {{cat.descrizione}}
                  </v-card-title>                
                </v-card>    
              </v-col>  
        </v-row>                              <!-- row 01 --><!--  --> 


        <!-- row 00 --><!--  -->

        <v-row dense class="row ma-2 pa-2 ">   
          <v-col cols="12">
              <p>La Sezione é formata dai Soci Effettivi, dalle Benemerite e dai Simpatizzanti.</p>
            </v-col>
        </v-row>               
                        
        <!-- row 00 --><!--  -->  

    



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

import router               from "../router";
import AncIntestazione      from "@/components/AncIntestazione.vue";
import AncIntestazioneFine  from "@/components/AncIntestazioneFine.vue";
import AncCard              from "@/components/AncCard.vue";

export default {
  name: "chisiamo",
  
  components: {
    AncIntestazione,
    AncIntestazioneFine,
    AncCard
  },

  props:{
      footercolor: String,
      requestUser: String,
/*      
      menuCat:        {type: String,},
      menuSubCat:     {type: String,},
      intMsg:         {type: String,},    //  "Anc Tradate",
      intMsgSubH:     {type: String,},    //  "Homepage",
      intFMsg:        {type: String,},    //  "Anc Tradate F",
      intFMsgSubH:    {type: String,},    //  "Homepage F",
      linksFP:        {type: Array,},     //
      src:            {type: String,},

      catsChi:        {type: Array,},     //
      catsConsiglio:  {type: Array,},     //
*/

      categorie:      {type: Array,},     
      C:              {type: Number,},
      CS:             {type: Number,},

    },      

  data() {
      return {
        Titolone: null,
        evidenza: [],

        catLink:  "/chisiamo",

        img1: "/static/images/Icone/bus.jpg",  // chisiamo cappello soci         
        img2: "/static/images/Icone/ben.jpg",  // chisiamo cappello benemerite
        img3: "/static/images/Icone/cap.jpg",  // chisiamo cappello simpatizzanti

      };
  },

  methods:{
    setMyPar(){
        
        let myparam={
          
          Ccurrent:         40,
          CScurrent:        0,
          
          /*
          menuCat:          "Chi siamo",
          menuSubCat:       "La Sezione...",

          intMsg:           "Chi siamo... ",                //<!-- Ai -->
          intMsgSubH:       "le figure che compongono la Sezione...",
          intFMsg:          "Chi siamo... ",
          intFMsgSubH:      "le figure che compongono la Sezione...",   //<!-- AiF -->
          src:              "../../src/assets/images/HomePageCarousel/ImmSociHome.jpg",

          linksFP:          [   { descrizione:  "Ubicazione sede",
                                  link: "sede/"             },
                                { descrizione:  "Chi siamo",
                                  link: "chisiamo/"             },             
                                { descrizione:  "Richiedi INFO",
                                  link: "contatti/"         }, 
                            ],
          */        
        }
        this.$emit("spMC",myparam) //spMC -- > sAVE pARAMETER / menu Cat 
    },   

    gotoR(r){
        console.log("rotta per...");
        this.$emit("gotoR",r)
    },
    
   },//methods

    created(){
        console.log("chisiamo created --> start");
        //this.setMyPar();
    },


};
</script>


<style media="screen">
.chisiamo{
    background-color: black;
    width: 100%;
    height: 100%;
}
</style>