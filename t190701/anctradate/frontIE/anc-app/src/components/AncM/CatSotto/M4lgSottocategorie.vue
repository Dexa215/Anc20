<template>
  <!-- BARRA SOTTOCATEGORIE -->
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight"
  >
    <v-row
      v-show="
        categorie[C / 10 - 1].sottocategorie.length > 1 && drawerSottocategoria
      "
      class="sottocategorieList4 mx-auto"
    >
      <!--
      <v-col cols="1" class="sottocategorieListr1"></v-col>
      -->
      <v-col
        cols="4"
        class="sottocategorieListr2 rcLat_BC_Visitor"
      >
        <!-- Finestra sottocategorie -->
        <v-col
          v-show="drawerSottocategoria"
          class="m4lgSottocategorie"
        >
          <v-row class="text-center">
            <!-- chip -->
            <v-chip
              v-for="item in categorie[C / 10 - 1].sottocategorie"
              :key="item.n"
              @click="gotoR(item.link)"
              link
              class="ma-2"
              color="indigo"
              text-color="white"
            >
              <v-avatar left>
                <v-icon>{{ item.icona }}</v-icon>
              </v-avatar>
              {{ item.descrizione }}
            </v-chip>
            <!-- chip -->
          </v-row>

          <!-- -------------------------------------------------------------------------------------------------------------------------- -->

          <div
            class="box"
            @mouseleave="DSCset('false')"
          >
            <v-list
              shaped
              dark
              class="ancM4l ancM4l_BC"
            >
              <!-- color="rgb(36, 17, 6)" -->
              <v-list-item
                class="tileM listSC"
                v-for="item in categorie[C / 10 - 1].sottocategorie"
                :key="item.n"
                @click="gotoR(item.link)"
                link
              >
                <v-list-item-content class="itemSC">
                  <v-btn rounded>
                    <v-list-item-title>{{
                      item.descrizione
                    }}</v-list-item-title>
                  </v-btn>
                </v-list-item-content>
                <v-icon
                  class="AncIconColor"
                  large
                  dark
                  @click="gotoR(item.link)"
                  style="height: 30px;"
                >{{ item.icona }}</v-icon>
              </v-list-item>
            </v-list>
          </div>
          <!-- -------------------------------------------------------------------------------------------------------------------------- -->
        </v-col>
        <!-- Finestra sottocategorie -->
      </v-col>
      <v-col
        cols="5"
        class="sottocategorieListr3 rcLat_BC_Visitor"
      ></v-col>
    </v-row>
  </transition>
</template>
<script>
import router from "@/router";

export default {
  name: "m4lgSottocategorie",

  props: {},

  computed: {
    drawerSottocategoria () {
      return this.$store.getters.getDrawerSottocategoria;
    },
    drawerRight () {
      return this.$store.getters.getDrawerRight;
    },
    categorie () {
      return this.$store.getters.categorie;
    },
    C () {
      return this.$store.getters.getC;
    },
    CS () {
      return this.$store.getters.getCS;
    }
  },
  data () {
    return {};
  },
  methods: {
    /*2020 06 16*/
    gotoR (r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    SDL () {
      /*Switch Drawer Language*/
      this.$store.dispatch("switchDrawerLang");
    },
    ScL (val) {
      /*SET Current Language*/
      this.$store.dispatch("setL", val);
    },
    DSCset (state) {
      /*SC Sotto Categoria*/
      this.$store.dispatch("DSCset", state);
    },
    setD () {
      this.$store.dispatch("setD");
    },
    setDF () {
      this.$store.dispatch("setDF");
    }
  }
};
</script>

<style media="screen" scoped>
.sottocategorieList4 {
  position: relative;
  z-index: 3;
  top: 150px;
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
</style>
