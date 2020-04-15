<template>
  <!-- -->

  <div class="ancM4 rgbANC2 mx-auto">
    <v-row class="ancM4r rgbANC2 mx-auto">hello...</v-row>

    <!-- v-list shaped dark class="ancM4l   rgbANC1" -->

    <v-list dark shaped class="ancM4l" color="rgb(36, 17, 6)">
      <v-list-item
        class="tileM rgbANC1"
        v-for="item in categorie"
        :key="item.n"
        link
        @click="gotoR(item.link)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icona }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.descrizione }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "m4lg",

  props: {
    nbc: { type: String },
    requestUser: { type: String },
    requestUserIsStaff: { type: Boolean },
    requestUserIsSuper: { type: Boolean },
    requestUserAvatar: { type: String },
    requestUserBio: { type: String },
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array },
    drawerRight: { type: Boolean }
  },

  data() {
    return {
      dark: "true",
      rgb1: "rgb(56, 25, 7)",
      mini: true,
      ico: "/static/images/Icone/anclogo2012.gif",
      iconX: "",
      //      "mdi-alien-outline"
      //        iconC:"mdi-backburger",
      //        iconO:"mdi-tray-full",

      iconC: "mdi-dots-vertical",
      //iconO:"mdi-menu-up",
      iconO: "mdi-close-circle",

      requestToken: "",
      rvt: 10,
      breweries: [],
      isLoading: false,
      tree: [],
      types: [],
      footercolor: "#0052cc",
      right: false,
      left: false,
      elevateOnScroll: false,
      hideOnScroll: false,
      fadeOnScroll: false,
      fadeImgOnScroll: false,
      invertedScroll: false,
      collapse: false,
      collapseOnScroll: false,
      shrinkOnScroll: false,
      extended: false
    };
  },
  methods: {
    gotoR(r) {
      this.drawerRight = false;
      this.setDF();
      console.log("AncAppDrawer rotta per...");
      this.$emit("gotoR", r);
    },
    ctlD() {
      let d = this.drawerRight;
      console.log("d:", d);
      if (d === false) {
        this.$emit("setDF");
      }
    },
    setD() {
      let d = this.drawerRight;
      if (d === false) {
        this.iconX = this.iconC;
        console.log("d true");
      } else {
        this.iconX = this.iconO;
        console.log("d false");
      }
      this.$emit("setD");
    },
    setDF() {
      this.$emit("setDF");
    },
    setC() {
      if (requestUserIsStaff === "true") {
        this.navbarcolor = "red";
      } else {
        this.navbarcolor = "grey";
      }
    }
  }
};
</script>

<style media="screen">
/*
.tile {
  margin: 5px;
  border-radius: 4px;
  color: khaki;
}
.tile:hover {
  background: #ffda99;
  color: black;
}
.tile:active {
  background: #ffbe4d;
}
*/

.tileM {
  margin: 5px;
  border-radius: 4px;
  color: khaki;
}
.tileM:hover {
  background: #1f1401;
}
.tileM:active {
  background: #ffbe4d;
}

.d1int {
  height: 85px;
  background-color: green;
}

.d1 {
  height: 80px;
  /*        background-color:   rgb(15, 10, 0);
*/
  padding-top: 20px;
  text-align: center;
  text-justify: center;
}
.dr1 {
  opacity: 0.9;
  margin-left: 20px;

  min-height: 30px;
  max-height: 700px;

  width: 70%;

  /*background-color:   rgb(29, 20, 6);*/
}

.drawercard {
  border-radius: 0px 50px 50px 5px;
}

.x {
  text-align: center;
  text-justify: center;
}

.ancM4 {
  position: relative;
  z-index: 1;

  opacity: 0.95;
  padding-top: 20px;

  margin-top: 0px;

  border-radius: 0px 0px 50px 5px;
  height: 600px;
  /*width: 368px;*/

  /*background-image: url("/static/images/HomePageCarousel/dsc32.jpg");*/
}
.ancM4r {
  position: relative;
  z-index: 1;
  margin-top: 0px;
  text-align: center;
  text-justify: center;
}

.ancM4l {
  position: relative;
  z-index: 2;
  /*list*/
}
</style>
