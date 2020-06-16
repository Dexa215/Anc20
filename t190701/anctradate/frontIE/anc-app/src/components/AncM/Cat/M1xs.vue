<template>
  <div>
    <v-row class="mr mx-auto">
      <v-col @mouseenter="DSCset('false')" @mouseleave="DSCset('true')">
        <v-list shaped dark class="ancM4l ancM4l_BC">
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
    </v-row>
    <v-row class="mx-auto" style="background-color: red"></v-row>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "m1xs",
  components: {},
  props: {},
  computed: {
    /*  -----------------------------------------------------------------------   */
    drawer() {
      return this.$store.getters.getDrawer;
    },
    drawerLeft() {
      return this.$store.getters.getDrawerLeft;
    },
    drawerRight() {
      return this.$store.getters.getDrawerRight;
    },
    drawerSottocategoria() {
      return this.$store.getters.getDrawerSottocategoria;
    },
    /*  -----------------------------------------------------------------------   */
    iconX() {
      return this.$store.getters.getIconX;
    },
    iconO() {
      return this.$store.getters.getIconO;
    },
    iconOdx() {
      return this.$store.getters.getIconOdx;
    },
    iconC() {
      return this.$store.getters.getIconC;
    },
    iconCdx() {
      return this.$store.getters.getIconCdx;
    },
    /*  -----------------------------------------------------------------------   */
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
    },
    /* DINAMIC CSS */
    rcS() {
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
    /*2020 06 16*/
    gotoR(r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    SDL() {
      /*Switch Drawer Language*/
      this.$store.dispatch("switchDrawerLang");
    },
    ScL(val) {
      /*SET Current Language*/
      this.$store.dispatch("setL", val);
    },
    DSCset(state) {
      /*SC Sotto Categoria*/
      this.$store.dispatch("DSCset", state);
    },
    setD() {
      this.$store.dispatch("setD");
    },
    setDF() {
      this.$store.dispatch("setDF");
    }
  }
};
</script>

<style media="screen">
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





