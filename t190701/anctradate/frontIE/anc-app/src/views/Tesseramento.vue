<template>
  <div class="tesseramento">
    <v-row class="AncTrasparenza" v-show="drawerLeft"></v-row>
    <!-- Ai  -->
    <AncIntestazione :C="70" :CS="0" :categorie="categorie" @gotoR="gotoR"></AncIntestazione>
    <!-- Ai  -->

    <div>
      <!-- div 00 -->
      <div class="my-4 pb-2 container-fluid text-center">
        <!--container-fluid -->
        <!-- Titolo -->
        <AncCard
          :C="70"
          :CS="0"
          :categorie="categorie"
          :evidenza="Eevents"
          :Titolone="Titolone"
          @gotoR="gotoR"
        ></AncCard>
        <!-- Titolo -->
        <!-- **** -->

        <v-row dense class="row ma-2 pa-2" align="center" justify="center">
          <!-- row 00 -->
          <!-- Riassunto tesseramento -->

          <v-col cols="12">
            <v-card class="pa-4" light>
              <v-row dense class="row ma-2 pa-2" align="center" justify="center">
                <h3>Sei un collega in congedo e non ti sei ancora iscritto all'ANC?</h3>
                <br />
              </v-row>
              <v-row dense class="row ma-2 pa-2" align="center" justify="center">
                <h2 class="display-2">
                  <strong>E cosa aspetti, la carrozza?</strong>
                </h2>
              </v-row>

              <v-row dense class="row ma-2 pa-2" align="center" justify="center">
                <v-img src="/static/images/Materiale/carrozza.png" max-width="250px"></v-img>
              </v-row>
              <v-row dense class="row ma-2 pa-2" align="center" justify="center">
                <!--h3>Bastano 2 foto formato tessera. Facile no?</h3-->
              </v-row>
              <v-row dense class="row ma-2 pa-2" align="center" justify="center">
                <v-btn @click="gotoR('/tesseramentoprassi')">Come fare</v-btn>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <!-- row 00 -->
        <!-- Riassunto Sede -->

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
  name: "tesseramento",

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
    return {};
  },

  methods: {
    setMyPar() {
      let myparam = {
        Ccurrent: 70,
        CScurrent: 0
      };
      this.$emit("spMC", myparam); //spMC -- > sAVE pARAMETER / menu Cat
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
.tesseramento {
  background-color: pink;
  width: 100%;
  height: 100%;
}
</style>


