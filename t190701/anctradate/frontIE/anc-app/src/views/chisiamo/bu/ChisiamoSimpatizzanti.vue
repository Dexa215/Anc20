<template>
  <div class="chisiamosimpatizzanti">
    <v-row
      class="AncTrasparenza"
      v-show="drawerLeft"
    ></v-row>
    <!-- Ai  -->
    <AncIntestazione
      :C="40"
      :CS="43"
      :categorie="categorie"
      @gotoR="gotoR"
    ></AncIntestazione>
    <!-- Ai  -->

    <div>
      <!-- div 00 -->
      <div class="my-4 pb-2 container-fluid text-center">
        <!--container-fluid -->
        <!-- Titolo -->
        <AncCard
          :C="40"
          :CS="43"
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
        >
          <!-- row 01 -->
          <!--  -->
          <v-col
            cols="4"
            v-for="cat in cats"
            :key="cat.n"
          >
            <v-card
              light
              class="pa-4"
              height="400px"
            >
              <v-img
                :src="cat.link"
                width="300"
                max-height="200"
              ></v-img>
              <v-card-title>{{ cat.descrizione }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <!-- row 01 -->
        <!--  -->

        <!-- **** -->

        <v-row
          dense
          class="row ma-2 pa-2"
        >
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
              :src="src"
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
import router from "../../../router";
import AncIntestazione from "@/components/AncIntestazione.vue";
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import AncCard from "@/components/AncCard.vue";

export default {
  name: "chisiamosimpatizzanti",

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

    catsChi: { type: Array }, //
    catsConsiglio: { type: Array }, //

    categorie: { type: Array },
    C: { type: Number },
    CS: { type: Number },

    drawerLeft: { type: Boolean }
  },

  data () {
    return {
      catLink: "/chisiamo",

      img1: "/static/images/Icone/bus.jpg", // chisiamo cappello soci
      img2: "/static/images/Icone/ben.jpg", // chisiamo cappello benemerite
      img3: "/static/images/Icone/cap.jpg", // chisiamo cappello simpatizzanti

      alignment: "start",
      justify: "start",
      dense: false
    };
  },

  methods: {
    setMyPar () {
      let myparam = {
        Ccurrent: 40,
        CScurrent: 43
      };
      this.$emit("spMC", myparam); //spMC -- > sAVE pARAMETER / menu Cat
    },
    gotoR (r) {
      console.log("rotta per...");
      this.$emit("gotoR", r);
    }
  },
  created () {
    console.log("chisiamosimpatizzanti created --> start");
    //this.setMyPar();
  }
};
</script>

<style media="screen">
.chisiamosimpatizzanti {
  background-color: greenyellow;
  width: 100%;
  height: 100%;
}
</style>
