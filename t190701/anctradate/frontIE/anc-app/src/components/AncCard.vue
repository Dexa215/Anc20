<template>
  <!-- std view -->
  <v-row
    v-if="C != 10"
    dense
    class="rowX mb-2 pa-0"
    style="height: 250px;"
    align="center"
    justify="center"
  >
    <v-col
      cols="2"
      class="pa-1"
      style="height:240px; background-color: transparent !important;"
      align="center"
      justify="center"
    >
      <v-img
        v-if="CS != 0"
        class="my-0"
        :src="categorie[C/10-1].sottocategorie[(CS-C)-1].img"
        style="height:230px; background-color: transparent !important;"
        :contain="contain"
      ></v-img>
      <v-img
        v-else
        class="my-0"
        :src="categorie[C/10-1].img"
        style="height:230px; background-color: transparent !important;"
        :contain="contain"
      ></v-img>
    </v-col>
    <v-col
      cols="8"
      class="pa-2"
      style="background-color: transparent!important; height:100px;"
      align="center"
      justify="center"
    >
      <div class="pa-2" outlined>
        <h2
          v-if="CS != 0"
          class="display-2 font-weight-bold AncTitleColorDark"
        >{{categorie[C/10-1].sottocategorie[(CS-C)-1].descrizione}}</h2>

        <h2 v-else class="display-2 font-weight-bold AncTitleColorDark">
          {{categorie[C/10-1].descrizione}}
          <!--
                                {{categorie[C/10-1].descrizione}}
          -->
        </h2>

        <h4 v-if="CS != 0" class="font-weight-bold AncTitleColorDark">
          {{categorie[C/10-1].sottocategorie[(CS-C)-1].titolo}}
          <!--
                        {{menuSubCat}}
          -->
        </h4>
        <h4 v-else class="font-weight-bold AncTitleColorDark">
          {{categorie[C/10-1].titolo}}
          <!--
                        {{menuSubCat}}
          -->
        </h4>
      </div>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>

  <!-- ------------------------------------------------------------------------------------------------------- -->

  <!-- home view -->
  <!--
            <v-row 
                v-else-if="Titolone!=''"
                dense
                class="rowX mb-0 pa-0"  
                style="
                    height: 100px; 
                    background-color: red !important;"
                align="center"
                justify="center"
            >
  <!-- img-->
  <!--
                <v-col                    
                    cols="1"
                    class="pa-0 ml-1" 
                    style=" z-index:2; background-color: red !important; height:90px; "
                    align="center"
                    justify="center"
                >        
                    
                    <v-img v-if="C==10 && evidenza!='' && evidenza " 
                        class="my-1"
                        style="background-color: red !important; weight:100px; "
                        :src= "categorie[0].imgEvidenza"

                        max-width="90"
                        width="80"
                        max-height="90"
                        height="80"
                        
                    >
                    </v-img>
                    

                </v-col>
  <!-- img-->

  <!-- msg -->
  <!--
                <v-col 
                    cols="10" 
                    class="pa-0" 
                    style="z-index:1; background-color: red!important; height:50px;"
                    align="center"
                    justify="center"
                >
                    
                    <div
                        v-if="C==10 && evidenza!='' " 
                    >
                        <marquee 
                                align="center"
                                justify="center" 
                                behavior="scroll" 
                                direction="left"
                                scrolldelay="0"

                            >
                                <div
                                    class="display-2 font-weight-bold AncTitleColorDark"
                                    style="color:white; background-color:transparent;" 
                                >
                                    {{Titolone}}
                                </div>
                            </marquee>

                    </div>
                </v-col>
                </v-row>
  -->

  <!-- ------------------------------------------------------------------------------------------------------- -->

  <!-- Selettore Formattazione -->
  <!--
                <v-col cols="12">
                <v-row justify="center">
                    <v-col
                    cols="6"
                    md="2"
                    >
                    <v-select
                        v-model="alignment"
                        :items="alignmentsAvailable"
                        label="Align"
                    ></v-select>
                    </v-col>
        
                    <v-col
                    cols="6"
                    md="2"
                    >
                    <v-select
                        v-model="justify"
                        :items="justifyAvailable"
                        label="Justify"
                    ></v-select>
                    </v-col>
                </v-row>
                </v-col>
  -->
  <!-- Selettore Formattazione -->

  <!-- ------------------------------------------------------------------------------------------------------- -->
</template>

<script>
import router from "../router";

export default {
  name: "ancCard",
  props: {
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array },

    evidenza: { type: Array },
    Titolone: { type: String }
  },

  /*

    props: {
        menuCat:        {type: String,},
        menuSubCat:     {type: String,},

        catsChi:        {type: Array,},
        catsConsiglio:  {type: Array,},

        catRif:         {type: Number,},

        catLink:        {type: String,},

        alignment:      {type: String,},
        justify:        {type: String,},

        C:              {type: Number,},
        CS:             {type: Number,},

        categorie:      {type:Array,},
        evidenza:       {type:Array,}, 
        Titolone:       {type:String,},

    },
    
    */

  data() {
    return {
      src2: "../../src/assets/images/HomePageCarousel/Imm021w.jpg", //sede

      dense: false,

      alignmentsAvailable: ["start", "center", "end", "baseline", "stretch"],

      justifyAvailable: [
        "start",
        "center",
        "end",
        "space-around",
        "space-between"
      ],

      contain: false
    };
  },

  methods: {
    gotoR(r) {
      this.$emit("gotoR", r);
    }
  }
};
</script>

<style media="screen">
.container-fluid {
  /*    background-color:white;
*/
  width: 100%;
}

.v-img {
  background-color: white;
}

.rowX {
  background-color: purple !important;
  height: 250px;
}
</style>