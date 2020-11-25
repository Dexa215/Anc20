<template>
  <div class="tesseramentoprassi">
    <v-row class="AncTrasparenza" v-show="drawerLeft"></v-row>

    <AncIntestazione :C="70" :CS="71" :categorie="categorie" @gotoR="gotoR"></AncIntestazione>
    <!-- Ai  -->

    <div>
      <!-- div 00 -->
      <div class="my-4 pb-2 container-fluid text-center">
        <!--container-fluid -->
        <!-- Titolo -->
        <AncCard
          :C="70"
          :CS="71"
          :categorie="categorie"
          :evidenza="Eevents"
          :Titolone="Titolone"
          @gotoR="gotoR"
        ></AncCard>
        <!-- Titolo -->
        <!-- **** -->

        <v-row
          dense
          class="row ma-2 pa-2"
          style="
                    height: 1000px; 
                    background-color: transparent!important;"
          align="start"
          justify="center"
        >
          <v-col class="t c110" cols="12" align="center" justify="center">
            <v-stepper :value="e6" :alt-labels="true">
              <v-stepper-header>
                <v-stepper-step
                  v-for="st in steps"
                  :key="`${st.n}-step`"
                  :complete="e6 > st.n"
                  :step="st.n"
                  :editable="false"
                >
                  {{ st.titolo }}
                  <v-divider></v-divider>
                </v-stepper-step>
              </v-stepper-header>

              <v-btn v-if="e6 != 3" class="ma-4" color="#ffbe4d" @click="e6plus">Passo successivo</v-btn>
              <v-btn v-else class="ma-4" color="#ffbe4d" @click="e6plus">Torna all'inizio</v-btn>

              <v-stepper-content v-for="st in steps" :key="`${st.n}-step`" :step="st.n">
                <v-card style="background-color:white;" class="pa-1 mb-1">
                  <v-card-content class="pa-1 mb-1">
                    <div>{{ st.descrizione }}</div>

                    <v-img class="ma-4" :src="st.foto" width="100px" eight="150px"></v-img>

                    <hr />
                  </v-card-content>
                </v-card>
              </v-stepper-content>
            </v-stepper>

            <!--
                <v-stepper 
                  v-model="e6"
                  vertical="false"
                  >
                  
                  <v-stepper-step :complete="e6 > 1" step="1">
                    Consegna domanda di iscrizione
                    <small></small>
                  </v-stepper-step>
                  <v-stepper-content step="1">
                    <v-img
                      class="ma-4"
                      src=   "/static/images/Materiale/congedo.jpg"
                      width="100px"
                      eight="150px"
                      @hover= ""
                    >
                    </v-img> 
                    <v-card
                      style="background-color:#FFECB3;"  
                      class="pa-4 mb-4"
                    >
                      <v-card-content
                        class="pa-4 mb-12" 
                      >
                        Per richiedere l'iscrizione sono necessarie n.2 fotografie formato "fototessera". <br> 
                        l'aspirante deve procedere alla <hr> compilazione di un semplice modulo. <hr> 
                        Se la domanda di iscrizione proviene da un militare che desidera diventare socio <strong>effettivo</strong> sará necessaria anche la copia del congedo. <br>
                        <hr>
                        La domanda dell'aspirante viene valutata nel primo consiglio utile.
                        <hr>
                      
                      </v-card-content>
                      <v-card-actions>
                          <v-btn color="#ffbe4d" @click="e6 = 2">Passo successivo</v-btn>
                          
                      </v-card-actions>
                    </v-card>
                  </v-stepper-content>


               
                  <v-stepper-step :complete="e6 > 2" step="2">
                    Notifica alla sede centrale
                    <small></small>
                  </v-stepper-step>
              
                  <v-stepper-content step="2">
                    <v-img
                              src="/static/images/Materiale/roma.jpg"
                              max-width="250px"
                    ></v-img>
                    <v-card
                      style="background-color:#FFECB3;"  
                      class="pa-4 mb-4"
                    >
                      <v-card-content
                        class="pa-4 mb-12" 
                      >
                        Nel primo consiglio di sezione successivo alla presentazione della domanda, viene eseguita una <hr>  indagine dei requisiti <hr>
                        al termine della quale la domanda viene inoltrata alla sede di Roma per l'approvazione definitiva.
                      </v-card-content>
                      <v-card-actions>
                          <v-btn color="#ffbe4d" @click="e6 = 3">Passo successivo</v-btn>
                      </v-card-actions>
                    </v-card>
                    <v-row 
                      dense 
                      class="row ma-2 pa-2"
                      align="center"
                      justify="center"
                    >
                    </v-row>
                  </v-stepper-content>

                  <v-stepper-step :complete="e6 > 3" step="3">
                    Tesserino
                    <small></small>
                  </v-stepper-step>
              
                    <v-stepper-content step="3">
                    <v-img
                            src="/static/images/Materiale/tesserino.jpg"
                            width="100px"
                            eight="150px"
                    ></v-img>
                    <v-card
                      style="background-color:#FFECB3;"  
                      class="pa-4 mb-4"
                    >
                      <v-card-content
                        class="pa-4 mb-12" 
                      >
                        Viene confezionato il tesserino dove é fatto obbligo al socio di apporre il bollino di convalida ogni anno. <br>
                        Ogni socio provvede per tempo a versare la quota per il rinnovo annuale della sua iscrizione all'ANC.
                      </v-card-content>
                      <v-card-actions>
                          <v-btn color="#ffbe4d" @click="e6 = 1">Passo successivo</v-btn>
                      </v-card-actions>
                    </v-card>
                    <v-row 
                      dense 
                      class="row ma-2 pa-2"
                      align="center"
                      justify="center"
                    >
                      
                    </v-row>
                  </v-stepper-content>

                  </v-stepper>
            -->
          </v-col>
        </v-row>

        <!-- **** -->

        <v-row dense class="row ma-2 pa-2">
          <!-- row 7 -->
          <!-- The end -->
          <!-- AiF -->
          <div class="container-fluid text-center">
            <AncIntestazioneFine
              :menuCat="menuCat"
              :menuSubCat="menuSubCat"
              :intFMsg="intMsg"
              :intFMsgSubH="intMsgSubH"
              :linksFP="linksFP"
              src="../../src/assets/images/Icone/busS.png"
            ></AncIntestazioneFine>
          </div>
          <!-- AiF -->
        </v-row>
        <!-- row 7 -->
        <!-- The end -->
      </div>
      <!-- container-fluid -->
    </div>
    <!-- div 00 -->
  </div>
</template>

<script>
import router from "../router";
import AncIntestazione from "@/components/AncIntestazione.vue";
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import AncCard from "@/components/AncCard.vue";

export default {
  name: "tesseramentoprassi",

  components: {
    AncIntestazione,
    AncIntestazioneFine,
    AncCard
  },

  props: {
    footercolor: String,
    requestUser: String,
    menuCat: { type: String },
    menuSubCat: { type: String },
    intMsg: { type: String }, //  "Anc Tradate",
    intMsgSubH: { type: String }, //  "Homepage",
    intFMsg: { type: String }, //  "Anc Tradate F",
    intFMsgSubH: { type: String }, //  "Homepage F",
    linksFP: { type: Array }, //
    src: { type: String },

    categorie: { type: Array },
    C: { type: Number },
    CS: { type: Number },
    drawerLeft: { type: Boolean }
  },

  data() {
    return {
      e6: 1,
      steps: [
        {
          n: "1",
          foto: "/static/images/Materiale/congedo.jpg",
          titolo: "Presentazione Domanda",
          descrizione: ` 
                          Per richiedere l'iscrizione sono necessarie n.2 fotografie formato "fototessera".  
                          l'aspirante deve procedere alla compilazione di un semplice modulo.
                          Se la domanda di iscrizione proviene da un militare che desidera diventare socio 
                          effettivo sará necessaria anche la copia del congedo.
                        `
        },
        {
          n: "2",
          foto: "/static/images/Materiale/roma.jpg",
          titolo: "Verifica dei requisiti",
          descrizione: `
                        A seguito della verifica dei requisiti, 
                        nel primo consiglio di sezione utile viene votata
                        la domanda. 
                        Ottenuto il benestare del consiglio la domanda viene inoltrata alla sede di Roma per l'approvazione definitiva.
                        `
        },
        {
          n: "3",
          foto: "/static/images/Materiale/tesserino.jpg",
          titolo: "Consegna del tesserino",
          descrizione: `
                        Viene confezionato e consegnato il tesserino. 
                        Sul tesserino é fatto obbligo al socio di apporre il bollino di convalida ogni anno, 
                        possibile a seguito del versamento della quota per il rinnovo annuale della sua iscrizione all'ANC.
                        Il periodo per il rinnovo inizia alla fine del mese di Dicembre.
                        `
        }
      ]
    };
  },

  methods: {
    setMyPar() {
      let myparam = {
        Ccurrent: 70,
        CScurrent: 71
      };
      this.$emit("spMC", myparam); //spMC -- > sAVE pARAMETER / menu Cat
    },

    e6plus() {
      let e6 = this.e6;
      if (e6 == 3) {
        this.e6 = 1;
      } else {
        this.e6++;
      }
    },

    gotoR(r) {
      console.log("rotta per...");
      this.$emit("gotoR", r);
    }
  }, //methods

  created() {
    console.log("sede oncreate --> start");
    this.setMyPar();
  }
};
</script>

<style media="screen">
.tesseramentoprassi {
  background-color: pink;
  width: 100%;
  height: 100%;
}

.anccard {
  background-color: red;
  color: #f9fbe7;
  height: 400px;
}

.anclist {
  background-color: #ffecb3;
}
</style>
