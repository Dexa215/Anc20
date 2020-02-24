<template>
  <div class="sede">
                                                            <!-- Ai  -->
    <AncIntestazione
      :C=               20
      :CS=              21
      :categorie=       "categorie"
       @gotoR=           "gotoR"
    ></AncIntestazione>                                     <!-- Ai  -->
    
    <div>                                                   <!-- div 00 -->
      <div class="my-4 pb-2 container-fluid text-center">   <!--container-fluid -->                                                           <!-- Titolo -->
        <AncCard
          :C=               20
          :CS=              21
          :categorie=       "categorie"
          :evidenza=        "Eevents"
          :Titolone=        "Titolone"
          @gotoR=           "gotoR"
        ></AncCard>     
                                                            <!-- Titolo -->   
<!-- **** -->

        <v-row dense class="row ma-2 pa-2"> <!-- row 00 --><!-- Riassunto Sede -->  
            <v-col cols="6">
              <v-card class="pa-4" dark>      
                  <h2>Indirizzo</h2><br>
                  <h3>Via De Simoni 1</h3>
                  
              </v-card>    
            </v-col>
            <hr>
            <v-col cols="6">
              <v-card class="pa-4">      
                  <h2>Piano</h2><br>
                  <h3>2</h3>
                  
              </v-card>  
            </v-col>
        </v-row>                            <!-- row 00 --><!-- Riassunto Sede -->  

        <v-row dense class="row ma-2 pa-2"> <!-- row 01 --><!-- Descrizione Ubicazione -->  
          <!--h3>iframe [0] {{maps[0].src}}</h3--> 
          <v-card
            class="pa-4"
          >
                <blockquote>
                  <P class="text-justify">
                    La sede della Sezione é aperta per tutti i Soci, Benemerite e Simpatizzanti.
                    Le giornate di apertura sono il Giovedí sera e Domenica mattina.
                    I dettagli degli orari sono disponibili nella pagina degli 
                    <a @click="gotoR('sedeorari/')" style="color:green"> orari sede</a>.
                    Per accedere in sede l'ingresso si trova al civico n.1 di via De Simoni, 
                    una delle quattro vie che circoscrivono il 
                    <a href="http://www.comune.tradate.va.it/" style="color:green" >Comune di Tradate</a>.
                  </P>
                </blockquote>
          <!--div class="column col-6 text-justify"></div--><!--column-->  
          </v-card>
        </v-row>                            <!-- row 01 --><!-- Descrizione Ubicazione -->

        <v-row dense class="row ma-2 pa-2"> <!-- row 02 -->
            <v-img
              id=c10img
              width= "100%"
              src="../assets/images/Foto/tradatecomune.jpg"
            ></v-img>
        </v-row>                            <!-- row 02 -->

        <v-row dense class="row ma-2 pa-2"> <!-- row 03 -->
          <v-card
            class="pa-4"
          >   
                <blockquote>
                  <P class="text-justify">
                    Considerando come riferimento l'ingresso principale del Comune di Tradate (per intenderci dal lato dei giardini pubblici),
                    l'ingresso per la sede si trova nel lato opposto dello stabile del Comune.
                  </P>
                </blockquote>
          </v-card>
          <!--div class="column col-6 text-justify"></div--><!--column-->  
        </v-row>                            <!-- row 03 -->

        <v-row dense class="row ma-2 pa-2"> <!-- row 04 -->   
          <iframe
            id=c1img
            width= "100%"
            src="https://www.google.com/maps/embed?pb=!4v1576284624812!6m8!1m7!1sXkQU4fJD85BZziGDdsNGNw!2m2!1d45.71363123189879!2d8.906257580735!3f290.300251927189!4f2.186880441983959!5f1.1924812503605782"     
            frameborder="0" 
            style="border:0;" 
            allowfullscreen="false"
          ></iframe>  
        </v-row>                            <!-- row 04 -->

        <v-row dense class="row ma-2 pa-2"> <!-- row 05 -->   
          <v-card
            class="pa-4"
          >
                <blockquote>
                  <P class="text-justify">
                    Una volta entrati per arrivare al 2º piano ci sono le scale oppure l'ascensore.
                    Arrivati al piano, la sede si trova sulla destra; come riferimento visivo sulla sinistra si vede l'ingresso dell'<a style="color:green" href="https://www.inps.it/nuovoportaleinps/default.aspx">INPS</a>.
                    Gli orari di apertura sono garantiti dalla presenza di un Consigliere.
                    Per ulteriori informazioni sugli <a style="color:green" @click="gotoR('sedeorari/')">orari</a> visitate la pagina dedicata.
                  </P>
                </blockquote>
          </v-card>
        </v-row>                            <!-- row 05 -->

        <v-row dense class="row ma-2 pa-2"> <!-- row 06 -->   
              <!-- Cartina Google Maps -->
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.15881154439!2d8.905701070027497!3d45.71332899343703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478685f126a1ea85%3A0x7c16b78535fb871a!2sVia%20Carlo%20de%20Simoni%2C%201%2C%2021049%20Tradate%20VA!5e0!3m2!1sit!2sit!4v1576285621978!5m2!1sit!2sit" 
                width="100%" 
                height="550" 
                frameborder="0" 
                style="border:0;" 
                allowfullscreen="false"
              ></iframe>
              <!-- Cartina Google Maps -->
        </v-row>                            <!-- row 06 -->

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
    name: "sede",

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

        evidenza:         {type: String}, 
      },    

    data() {
      return {
        Eevents:[],
        Titolone: null,

        photocarousel:[
          {
            descrizione:"f1",
            link: "require('../assets/images/Foto/tradatecomune.jpg')" 
          },
          {
            descrizione:"f2",
            link: "require('../assets/images/Foto/sede001.jpg')"
          }
        ],

        maps:[
          {
            src: "https://goo.gl/maps/xS1p6Dt3C4FkPvC19"
          },
          {
            src: "https://goo.gl/maps/tw2PuW9hpMXDXmhj9"
          },
          {
            src: "https://goo.gl/maps/hQcbT7mdWdmZ3Xsf9"
          },

          {
            src: "https://goo.gl/maps/auCPNYRGdgGxPtCV7"
          },
          {
            src: "https://goo.gl/maps/7kKi7JgNihk3xbBG8"
          },
          {
            src: "https://goo.gl/maps/jVpxrWXJEjetPHk1A"
          },
          {
            src: ""
          },
        ],


        mapsiframe: [
            {
              text: 'github',
              src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.15881154439!2d8.905701070027497!3d45.71332899343703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478685f126a1ea85%3A0x7c16b78535fb871a!2sVia%20Carlo%20de%20Simoni%2C%201%2C%2021049%20Tradate%20VA!5e0!3m2!1sit!2sit!4v1576285621978!5m2!1sit!2sit",
              width:"50%", 
              height:"600", 
              frameborder:"0", 
              style:"border:0;", 
              allowfullscreen:"false",
            },
            {
              text: 'github',
              src:"https://www.google.com/maps/embed?pb=!4v1576284445908!6m8!1m7!1s4JT4jUAE9RjQizRA_lMjxQ!2m2!1d45.71416915916085!2d8.905633824339253!3f172.89803207975265!4f-4.814371298563287!5f0.4000000000000002",
              width:"50%", 
              height:"600", 
              frameborder:"0", 
              style:"border:0;", 
              allowfullscreen:"false",
            },
            {
              text: 'github',
              src:"https://www.google.com/maps/embed?pb=!4v1576284624812!6m8!1m7!1sXkQU4fJD85BZziGDdsNGNw!2m2!1d45.71363123189879!2d8.906257580735!3f290.300251927189!4f2.186880441983959!5f1.1924812503605782" ,
              width:"50%", 
              height:"600", 
              frameborder:"0", 
              style:"border:0;", 
              allowfullscreen:"false",
            },
        ],

      };
    },

    methods:{
        setMyPar(){

          // TODO: COPIA PROCEDURA SU OGNI VIEW PERCHE FUNZIONA !!!!

            let myparam={
              Ccurrent:         20,
              CScurrent:        21,
            }
            this.$emit("spMC",myparam) //spMC -- > sAVE pARAMETER / menu Cat 
        },    
        
    gotoR(r){
        console.log("rotta per...");
        this.$emit("gotoR",r)
    },
    
   },//methods

    created(){
        console.log("sede oncreate --> start");
        //this.setMyPar();
    }
};
</script>

<style media="screen">
.sede{
    background-color: darkgreen;
    width: 100%;
    height: 100%;
}
</style>