<template>
  <div class="links">
    <v-row
      class="AncTrasparenza"
      v-show="drawerLeft"
    ></v-row>
    <!-- Ai  -->
    <AncIntestazione
      :C="80"
      :CS="0"
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
          :C="80"
          :CS="0"
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
          <!-- row 00 -->
          <!-- Riassunto Sede -->
          <v-col
            cols="12"
            v-for="l in links"
            :key="l.n"
          >
            <v-card
              light
              class="container pa-1"
              height="200px"
              hover
              @click="gotoR(l.link)"
            >
              <div style="background-color:red;">
                <v-row
                  class="mx-4 px-4"
                  align="center"
                  justify="center"
                >
                  <v-img
                    class="mx-4"
                    :src="l.img"
                    max-width="100"
                    max-height="90"
                  ></v-img>
                  <h2
                    class="mx-2 display-1 font-weight-bold"
                    style="color: #1A237E;"
                  >
                    {{ l.descrizione }}
                  </h2>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- row 00 -->
        <!-- Riassunto Sede -->

        <!-- row 01 -->
        <!-- Descrizione Ubicazione -->

        <v-row
          dense
          class="row ma-2 pa-2"
        >
          <!-- row 02 -->
        </v-row>
        <!-- row 02 -->

        <v-row
          dense
          class="row ma-2 pa-2"
        >
          <!-- row 03 -->
        </v-row>
        <!-- row 03 -->

        <v-row
          dense
          class="row ma-2 pa-2"
        >
          <!-- row 04 -->
        </v-row>
        <!-- row 04 -->

        <v-row
          dense
          class="row ma-2 pa-2"
        >
          <!-- row 05 -->
        </v-row>
        <!-- row 05 -->

        <v-row
          dense
          class="row ma-2 pa-2"
        >
          <!-- row 06 -->
        </v-row>
        <!-- row 06 -->

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
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import router from "../../../router";
import AncIntestazione from "@/components/AncIntestazione.vue";
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import AncCard from "@/components/AncCard.vue";

export default {
  name: "links",

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
    links: { type: Array }, //  links utili

    categorie: { type: Array },
    C: { type: Number },
    CS: { type: Number },
    drawerLeft: { type: Boolean }
  },

  data () {
    return {};
  },

  methods: {
    setMyPar () {
      let myparam = {
        Ccurrent: 80,
        CScurrent: 0
      };
      this.$emit("spMC", myparam); //spMC -- > sAVE pARAMETER / menu Cat
    },

    gotoR (r) {
      console.log("rotta per...");
      this.$emit("gotoR", "r");
    }
  }, //methods

  created () {
    console.log("links oncreate --> start");
    //this.setMyPar();
  }
};
</script>

<style media="screen">
.links {
  background-color: darkorchid;
  width: 100%;
  height: 100%;
}
</style>
