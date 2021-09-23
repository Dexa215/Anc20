<template>
  <!--transition name="langT"-->
  <v-row class="lr mx-auto">
    <!-- MACRO COLONNA DESTRA ************************************************************************************************************ -->

    <v-row class="T iconavR mx-auto my-auto" justify="center" align="center">
      <!-- ICONE NAVIGAZIONE - DX -->

      <!--elenco lingue-->
      <v-col v-if="languagesShow && !drawerLeft" cols="12">
        <v-row class="rIco" align="center" justify="center">
          <!-- lista di linguaggi... -->
          <!-- @click="SDL" -->
          <!-- -->
          <v-btn
            @click="SDL"
            rounded
            v-show="languagesShow && !drawerLeft"
            class="mx-3"
          >
            {{ lang.t[0].lista[2].t[0].text }}
            <!-- lang.t[0]                == components-->
            <!-- lang.t[0].lista[2]       == Menu Language-->
            <!-- lang.t[0].lista[2].t[0]  == Menu Language testo 0 -->
          </v-btn>
          <!-- -->
          <v-btn
            v-for="lang in languages"
            :key="lang.pk"
            class="mx-1 AncBtnLanguages"
            icon
            fab
            rounded
            @click="ScL(lang.code)"
          >
            <v-img
              class="mx-1 AncIconLang"
              large
              dark
              :src="lang.icona"
            ></v-img>
          </v-btn>
        </v-row>
      </v-col>
      <!--elenco lingue-->

      <v-col class="icoSx iconavcDD" cols="3">
        <v-row class="rIco my-auto" align="center" justify="center">
          <v-btn
            v-show="!languagesShow && drawerLeft"
            class="mx-3"
            icon
            @click="gotoR('/')"
          >
            <v-icon class="mx-3 AncIconLang" large dark>mdi-bank</v-icon>
          </v-btn>

          <v-expand-x-transition>
            <v-btn
              class="mx-1"
              icon
              v-show="!drawerLeft && !languagesShow"
              fab
              rounded
              style="background-color: transparent"
              @click="SDL"
            >
              <v-img class="mx-1 AncIconLang" large dark :src="lang.icona">
              </v-img>
              <v-row class="TT">menu language</v-row>
            </v-btn>
          </v-expand-x-transition>
        </v-row>
      </v-col>
      <!--barra ricerca-->
      <!--
      <v-col
        class="icoSx iconavcS"
        cols="6"
      >
        <v-row
          class="rIco my-auto"
          align="center"
        >
    -->
      <!-- search...
      <v-expand-x-transition>
        <v-btn
          class="mx-1"
          icon
          v-show="!drawerLeft & !languagesShow"
          fab
          rounded
          style="background-color: transparent"
        >
          <v-icon
            class="mx-3 AncIconColor"
            large
            dark
          >mdi-magnify</v-icon>
        </v-btn>
      </v-expand-x-transition>
    </v-row>
    </v-col>
-->
      <!--barra ricerca-->

      <!--barra apri menu-->
      <!--
        <v-col
        v-if="!languagesShow"
        class="icoSx iconavcDD"
        cols="3"
      >
        <v-row
          class="rIco my-auto"
          justify="end"
          align="center"
        >
          
      <v-btn icon>
        <a>LG</a>
      </v-btn>
      <v-btn
        icon
        v-model="iconX"
        @click.stop="setD"
      >
        <v-icon
          v-if="drawerLeft"
          large
        >{{ iconO }}</v-icon>
        <v-icon
          v-else
          large
        >{{ iconC }}</v-icon>
      </v-btn>
    </v-row>
    </v-col>
    -->
      <!--barra apri menu-->

      <!-- ICONE NAVIGAZIONE - DX -->
    </v-row>

    <!-- MACRO COLONNA DESTRA ************************************************************************************************************ -->
  </v-row>
  <!--/transition-->
</template>

<script>
import router from "@/router";

export default {
  name: "l4lg",

  props: {},

  data() {
    return {
      mini: true,
      ico: "/static/images/Icone/anclogo2012.gif",
      iconX: "",
      iconC: "mdi-dots-vertical",
      iconO: "mdi-close-circle"
    };
  },

  computed: {
    /*  -----------------------------------------------------------------------   */
    lang() {
      return this.$store.getters.getCurrentLanguage;
    },
    languages() {
      return this.$store.getters.getLanguages;
    },
    languagesShow() {
      return this.$store.getters.getLanguagesShow;
    },

    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
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
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */

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

  methods: {
    gotoR(r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },

    acs() {
      this.$store.dispatch("adminCommandSwitch");
      //this.$emit("adminCommandSwitch");
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
.T {
  background-color: red !important;
}

.TT {
  width: 100%;
  margin-bottom: 20px;
  background-color: aqua !important;
}

.AncIconLang {
  height: 38px;
  width: 38px;
  transform: scale(1, 1);
}
.AncIconLang:hover {
  transform: scale(1.2, 1.2);
}

.lr {
  /*background-color: transparent !important;*/
  padding-top: 50px;
  margin-left: 0px;
  margin-right: 0px;
}
/*  ++++  ++++  ++++  ++++  */

.langT-enter-active {
  animation-name: mrAnimationIN;
  animation-duration: 0s;
}
.langT-leave-active {
  animation-name: mrAnimationOUT;
  animation-duration: 0s;
}

@keyframes mrAnimationIN {
  0% {
  }
  100% {
  }
}

@keyframes mrAnimationOUT {
  0% {
  }
  100% {
  }
}
</style>
