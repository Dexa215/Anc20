{% load l10n %}

<template>
  <div class="SfBase">
    <v-row class="rT rT_lv rThXL rTbg2 mx-auto" v-show="drawerLeft"></v-row
    ><!--menu/txp-->
    <!--rr-->
    <v-parallax
      class="SfParallax"
      src="/static/images/bg/bg8.jpg"
      height="850"
    ></v-parallax>
    <v-row class="r_main r_main_h_MD mx-auto" justify="start" align="start"
      ><!--rr-->
      <v-col cols="1" class="carcol carcolsx"></v-col
      ><!--sx-->
      <v-col cols="10" class="cx_main"
        ><!--cx-->
        <v-card class="card_main Anc_BC_BlueDark">
          <v-row align="center" justify="center" id="rci" dark>
            <v-col cols="12"
              ><p1
                :langCode="130"
                :tn="[
                  { id: '1' },
                  { id: '3' },
                  { id: '5' },
                  { id: '6' },
                  { id: '8' },
                  { id: '9' }
                ]"
                :src="img1"
              ></p1>

              <v-divider dark></v-divider>

              <p1
                :langCode="130"
                :tn="[
                  { id: '2' },
                  { id: '4' },
                  { id: '5' },
                  { id: '7' },
                  { id: '8' },
                  { id: '10' }
                ]"
                :src="img2"
              ></p1
            ></v-col>
          </v-row>
        </v-card>
        <AncIntestazioneFine></AncIntestazioneFine>
        <div class="r_main_hsDown_MD">spazio Down md</div>
        <!--rr--> </v-col
      ><!--cx-->
      <v-col cols="1" class="carcol carcoldx"></v-col
      ><!--dx-->
    </v-row>
  </div>
</template>

<script>
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import p1 from "@/components/AncRow/Picture/p1.vue";

export default {
  name: "contatti2sm",
  components: {
    AncIntestazioneFine,
    p1
  },
  props: {},
  data() {
    return {
      tn1: [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }],
      img1: "/static/images/2019/MAX.jpg",
      img2: "/static/images/2019/CALZAVARA.jpg",
      img3: "/static/images/Foto/sopracolletto.jpg"
    };
  },
  computed: {},
  methods: {
    /*2020 06 16*/
    gotoR(r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    v(link) {
      this.$store.dispatch("vola", link);
    }
  },
  created() {},
  updated() {
    console.log("sedeorari3md oncreate-- > start");
  },
  mounted() {}
};
</script>

<style media="screen" scoped>
/*20201204*/
/*general...*/
.rT_lv {
  position: absolute;
  z-index: 6;
} /*Row semi-Transparent level on MENU */
.SfParallax {
  position: absolute;
  z-index: 1;
  opacity: 0.15;
  width: 100%;
}
.r_main {
  position: absolute;
  z-index: 5;
  opacity: 1;
  background-color: transparent;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.cx_main {
  opacity: 1;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
}
.card_main {
  opacity: 0.8;
  margin-top: 160px;
  margin-bottom: 20px; /*margine superiore card*/
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 45px;
}
.Anc_BC_BlueDark {
  background-color: rgb(1, 4, 20);
  color: blanchedalmond;
}
/*general...*/
/*responsive...*/
.r_main_h_SM {
  height: 600px;
}
.r_main_hsUp_SM {
  height: 150px;
}
.r_main_hsDown_SM {
  height: 50px;
}
/*responsive...*/
</style>
