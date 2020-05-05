<template>
  <!-- 
  <div class="ancM4 rgbANC2">
  -->
  <div>
    <!-- test 2020 04 16 -->

    <v-row class="mr mx-auto">
      <!-- <a style="color : white">{{drawerSottocategoria}}</a>-->

      <!--v-col>lato sx</v-col-->
      <!-- shaped -->
      <v-col @mouseenter="DSCset('false')" @mouseleave="DSCset('true')">
        <v-list shaped dark class="ancM4l ancM4l_BC">
          <!-- color="rgb(36, 17, 6)" -->
          <v-list-item
            class="tileM"
            v-for="item in categorie"
            :key="item.n"
            link
            @click="gotoR(item.link)"
          >
            <v-list-item-content>
              <v-btn rounded>
                <v-list-item-title>{{ item.descrizione }}</v-list-item-title>
              </v-btn>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>{{ item.icona }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-col>
      <!-- v-col>lato dx</v-col -->
    </v-row>

    <!-- old -->

    <v-row class="mx-auto" style="background-color: red">
      <!--  
      <v-col cols="3" style="background-color: green">
      </v-col>
      <v-col class="McU" style="background-color: yellow">
        
      </v-col>
      -->
    </v-row>
    <!-- old -->
  </div>
</template>

<script>
import router from "@/router";
import u4lg from "@/components/AncM/User/U4lg.vue";

export default {
  name: "m4lg",

  components: {
    u4lg
  },

  props: {
    nbc: { type: String },
    /*
    requestUser: { type: String },
    requestUserIsStaff: { type: Boolean },
    requestUserIsSuper: { type: Boolean },
    requestUserAvatar: { type: String },
    requestUserBio: { type: String },
    
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array },
*/

    drawerRight: { type: Boolean },
    drawerSottocategoria: { type: Boolean }
  },
  computed: {
    categorie() {
      return this.$store.getters.categorie;
    },

    C() {
      return this.$store.getters.getC;
    },
    CS() {
      return this.$store.getters.getCS;
    },

    requestUser() {
      return this.$store.getters.requestUser;
    },
    requestUserIsStaff() {
      return this.$store.getters.requestUserIsStaff;
    },
    requestUserIsSuper() {
      return this.$store.getters.requestUserIsSuper;
    },
    requestUserAvatar() {
      return this.$store.getters.requestUserAvatar;
    },
    requestUserBio() {
      return this.$store.getters.requestUserBio;
    },
    requestToken() {
      return this.$store.getters.requestToken;
    } /*TODO: SOSTITUIRE RCS RCD [ PROP CON COMPUTED DA STORE ] */ /*TODO: SOSTITUIRE RCS RCD [ PROP CON COMPUTED DA STORE ] */ /*
    rcS: { type: String },
    rcD: { type: String },
    */,

    /* TEST DINAMIC CSS */ rcS() {
      return this.$store.getters.rcS;
    },
    rcD() {
      return this.$store.getters.rcD;
    },
    rcU() {
      return this.$store.getters.rcU;
    }
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
      console.log("M4lg rotta per...");
      this.$emit("gotoR", r);
    },

    DSCset(state) {
      this.$emit("DSCset", state);
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
  width: 100%;
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
  position: fixed;
  z-index: 1;

  opacity: 0.95;
  padding-top: 20px;

  margin-top: 0px;

  border-radius: 0px 0px 50px 50px;
  height: 600px;
  width: 100%;

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
.ancM4l_BC {
  background-color: transparent !important;
}

.McU {
  /* Menu column User...*/
  padding-left: 0px;
  padding-right: 0px;
}

.mr {
  background-color: transparent !important;
}
</style>





