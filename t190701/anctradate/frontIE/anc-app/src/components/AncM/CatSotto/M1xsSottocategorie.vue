<template>
  <!-- BARRA SOTTOCATEGORIE -->
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight"
  >
    <v-row
      v-show="categorie[C/10-1].sottocategorie.length > 1 && drawerSottocategoria"
      class="sottocategorieList"
    >
      <v-col cols="1" class="sottocategorieListr1"></v-col>
      <v-col cols="3" class="sottocategorieListr2 rcLat_BC_Visitor">
        <!-- Finestra sottocategorie -->
        <v-col v-show="drawerSottocategoria" class="mxxxSottocategorie">
          <!-- -------------------------------------------------------------------------------------------------------------------------- -->
          <div class="box" @mouseleave="DSCset('false')">
            <v-list shaped dark class="ancM4l ancM4l_BC">
              <!-- color="rgb(36, 17, 6)" -->
              <v-list-item
                class="tileM listSC"
                v-for="item in categorie[C/10-1].sottocategorie"
                :key="item.n"
                @click="gotoR(item.link)"
                link
              >
                <v-list-item-content class="itemSC">
                  <v-btn rounded>
                    <v-list-item-title>{{ item.descrizione }}</v-list-item-title>
                  </v-btn>
                </v-list-item-content>
                <v-icon
                  class="AncIconColor"
                  large
                  dark
                  @click="gotoR(item.link)"
                  style="height: 30px;"
                >{{item.icona}}</v-icon>
              </v-list-item>
            </v-list>
          </div>
          <!-- -------------------------------------------------------------------------------------------------------------------------- -->
        </v-col>
      </v-col>
      <v-col cols="8" class="sottocategorieListr3 rcLat_BC_Visitor"></v-col>
    </v-row>
  </transition>
</template>
<script>
import router from "@/router";

export default {
  name: "m1xsSottocategorie",
  props: {},
  data() {
    return {};
  },
  computed: {
    lang() {
      return this.$store.getters.getCurrentLanguage;
    },
    languages() {
      return this.$store.getters.getLanguages;
    },
    languagesShow() {
      return this.$store.getters.getLanguagesShow;
    },
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
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
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
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  },

  methods: {
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
      /*Set Current Language*/
      this.$store.dispatch("setL", val);
    },
    DSCset(state) {
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
.box {
  position: absolute;
  height: 200px;
  text-align: right;
  padding-left: 70px;
  padding-right: 0px;
  background-color: transparent;
}

.itemSC {
  padding-right: 20px;
}

.listSC {
  height: 30px;
  padding-right: 70px;
}

.sottocategorieList {
  position: absolute;
  z-index: 3;
  top: 60px;
  left: 0px;
  background-color: transparent !important;
  height: 600px;
  width: 100%;

  border-radius: 0px 0px 0px 0px;
}

.sottocategorieListr1 {
  position: relative;
  z-index: 3;
  background-color: transparent !important;
  height: 600px;
  border-radius: 0px 0px 0px 0px;
}

.sottocategorieListr2 {
  position: relative;
  z-index: 3;
  height: 300px;
  border-radius: 0px 0px 0px 250px;
}

.sottocategorieListr3 {
  position: relative;
  z-index: 3;
  text-align: left;
  /* background-color: green !important;*/
  height: 300px;
  border-radius: 0px 0px 0px 0px;
}
/*
.mxxxSottocategorie {
  position: absolute;
  top: 70px;
  background-color: transparent !important;
}
*/
</style>





