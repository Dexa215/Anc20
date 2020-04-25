<template>
  <div class="SfBase">
    <div class="SfSpazio SfShUp AncAppBar_BC">spazio Up</div>
    <!--
    <v-parallax class="SfParallax" src="/static/images/HomePageCarousel/dsc3.jpg" height="1000"></v-parallax>
    -->
    <v-parallax class="SfParallax" src="/static/images/bg/bg8.jpg" height="400"></v-parallax>
    <v-row class="qdcr" justify="center" align="center" style="background-color: transparent">
      <v-col cols="6" class="qdcc">
        <span>spiegone:</span>

        <div>test vuex 4</div>

        <div>
          <label for="flavor">Favorite ice cream flavor?</label>
          <input @input="changed" name="flavor" />
        </div>

        <span v-if="CS==0">{{ categorie[(C/10)-1].descrizione }}</span>
        <span v-else>{{ categorie[(C/10)-1].sottocategorie[(CS-C)-1].descrizione }}</span>
      </v-col>
    </v-row>
    <!--
    <div class="SfImmagine">sfondo Immagine</div>
    -->
    <div class="container-fluid text-center">
      <AncIntestazioneFine :C="C" :CS="CS" :categorie="categorie" @gotoR="gotoR"></AncIntestazioneFine>
    </div>
    <div class="SfSpazio SfShDown AncAppBar_BC">spazio Down</div>
  </div>
</template>
<script>
import router from "@/router";
import AncIntestazione from "@/components/AncIntestazione.vue";
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import AncCard from "@/components/AncCard.vue";

export default {
  name: "chisiamobenemerite",

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

  data() {
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
    setMyPar() {
      let myparam = {
        Ccurrent: 40,
        CScurrent: 41
      };
      this.$emit("spMC", myparam); //spMC -- > sAVE pARAMETER / menu Cat
    },

    gotoR(r) {
      console.log("rotta per...");
      this.$emit("gotoR", r);
    },

    changed: function(event) {
      //alert(event.target.value);
      this.$store.commit("change", event.target.value);
    }
  }, //methods

  created() {
    console.log("chisiamo created --> start");
    //this.setMyPar();
  }
};
</script>


<style media="screen">
.SfBase {
  /* Sfondo Base */
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  text-align: center;
}

.SfImmagine {
  /* Sfondo Immagine TEST OK 2020 04 22*/
  position: relative;
  z-index: 3;
  opacity: 0.15;
  height: 100%;
  width: 100%;
  background-image: url("~@/assets/images/bg/bg8.jpg");
}

.SfSpazio {
  /*spazio sotto AncAppBar*/

  width: 100%;
  position: relative;
  z-index: 3;
  opacity: 1;
}
.SfShUp {
  height: 150px;
}
.SfShDown {
  height: 78px;
}

.q {
  height: 50px;
}

.qd2 {
  /*finestra contenuto*/
  position: absolute;
  top: 300px;
  z-index: 4;
  opacity: 1;

  width: 80%;
}
.qd3 {
  position: relative;
  z-index: 3;
  opacity: 1;
  background-color: green;
  width: 100px;
}
.qd4 {
  position: relative;
  z-index: 4;
  opacity: 1;
  background-color: cyan;
  width: 100px;
}

.qdcr {
  position: absolute;
  top: 300px;
  z-index: 4;
  opacity: 1;
  width: 100%;
  background-color: yellow;
}
.qdcc {
  position: relative;
  width: 100px;
  background-color: transparent;
}
</style>