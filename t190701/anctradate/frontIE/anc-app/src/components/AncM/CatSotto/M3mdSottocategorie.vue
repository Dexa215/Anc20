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
      MD
      <v-col cols="1" class="sottocategorieListr1"></v-col>

      <v-col cols="3" class="sottocategorieListr2 rcLat_BC_Visitor">
        <!-- Finestra sottocategorie -->
        <v-col v-show="drawerSottocategoria" class="m4lgSottocategorie">
          <!-- -------------------------------------------------------------------------------------------------------------------------- -->

          <div class="box3" @mouseleave="DSCset('false')">
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
                <!--
        <v-list-item-icon style="background-color:yellow">
          <v-icon>{{ item.icona }}</v-icon>
        </v-list-item-icon>
                -->
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
        <!-- Finestra sottocategorie -->

        <!--
            <v-icon
              v-for="item in categorie[C/10-1].sottocategorie"
              :key="item.n"
              class="mx-2 AncIconColor"
              large
              dark
              @click="gotoR(item.link)"
              style="height: 30px;"
            >{{item.icona}}</v-icon>

        -->
      </v-col>
      <v-col cols="8" class="sottocategorieListr3 rcLat_BC_Visitor"></v-col>
    </v-row>
  </transition>
</template>
<script>
import router from "@/router";

export default {
  name: "m4lgSottocategorie",

  props: {
    /*
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
    }
  },
  data() {
    return {};
  },
  methods: {
    gotoR(r) {
      this.drawerRight = false;
      this.setDF();
      console.log("M4lg rotta per...");
      this.DSCset("false");
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
    }
    /*
    setC() {
      if (requestUserIsStaff === "true") {
        this.navbarcolor = "red";
      } else {
        this.navbarcolor = "grey";
      }
    }
    */
  }
};
</script>


<style media="screen">
.box3 {
  position: absolute;
  height: 250px;
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
.m4lgSottocategorie {
  position: absolute;
  top: 70px;
  background-color: transparent !important;
}
*/
</style>





