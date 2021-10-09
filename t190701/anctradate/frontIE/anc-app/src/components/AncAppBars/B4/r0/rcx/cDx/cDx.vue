<template>
  <v-col
    class="col3d"
    cols="3"
    v-if="bb === true"
  >
    <v-row
      v-if="mL"
      class="IcoSel"
    >
      <div class="IcoSelINT"></div>
    </v-row>

    <v-row
      class="row4cdx"
      justify="center"
      align="center"
    >
      <a
        class="IcoTEST"
        @click="setmenuL"
      >{{ mL }}</a>

      <v-btn
        class="mx-1"
        icon
        v-if="!drawerLeft && languagesShow && mL"
      >
        <!--class="mx-1 AncIconLang"-->
        <v-img
          :class="rcxIco"
          large
          dark
          :src="worldIcon"
          @click="setmenuL"
        ></v-img>
      </v-btn>

      <v-btn
        class="mx-1"
        icon
        v-show="!drawerLeft && !languagesShow"
        fab
        rounded
        style="background-color: transparent"
        @click="SDL"
      >
        <!-- test testo lingua -->
        <!--
        <v-row class="TT">{{ lang.t[0].lista[2].t[0].text }}</v-row>
        -->
        <!-- test testo lingua -->

        <v-img
          v-if="!languagesShow"
          :class="rcxIco"
          large
          dark
          :src="lang.icona"
          @click="setmenuL"
        ></v-img>
      </v-btn>

      <!---
      <img
        :class="Ico"
        src="/static/icons/Nations/italy.png"
        alt="ancTradate"
        @click="setmenuL"
        @mouseover="hoveravatar = true"
        @mouseleave="hoveravatar = false"
      />
-->
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: "cDx",
  components: {},
  data: () => ({
    u: "user",
    c: "cat",
    l: "lang",
    worldIcon: "/static/icons/Nations/worldIcon.png"

    /*    worldIcon: "/static/icons/Nations/italy.png"*/
  }),

  computed: {
    /*  -----------------------------------------------------------------------   */
    lang () {
      return this.$store.getters.getCurrentLanguage;
    },
    languages () {
      return this.$store.getters.getLanguages;
    },
    languagesShow () {
      return this.$store.getters.getLanguagesShow;
    },
    rcxIco () {
      var rcxIco = "Ico ";
      var bb = this.$store.getters.getbarBIG;
      if (bb === true) {
        rcxIco += "IcoBB ";
      } else {
        rcxIco += "IcoSS ";
      }
      return rcxIco;
    },
    Ico () {
      var rcxIco = "Ico ";
      var bb = this.$store.getters.getbarBIG;
      if (bb === true) {
        rcxIco += "IcoBB ";
      } else {
        rcxIco += "IcoSS ";
      }
      return rcxIco;
    },
    bb () {
      var bb = this.$store.getters.getbarBIG;
      return bb;
    },

    mL () {
      var mL = this.$store.getters.getmenuLANG;
      return mL;
    }
  },

  methods: {
    setSc (val) {
      this.$store.dispatch("setScrolling", val);
    },

    /*{"cat","user","lang"}*/
    setmenu (val) {
      this.$store.dispatch("menuSet", val);
    },

    setmenuU () {
      this.$store.dispatch("menuSet", "user");
    },
    setmenuC () {
      this.$store.dispatch("menuSet", "cat");
    },
    setmenuL () {
      this.$store.dispatch("menuSet", "lang");
      this.SDL;
    },

    /**/
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

    /**/
  }
};
</script>
<style media="screen" scoped>
.col3d {
  background-color: palevioletred;
  height: 100%;
  padding: 0px;
}

/**/
.row4cdx {
  opacity: 1;
  z-index: 10;
  position: absolute;
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-content: center;
}
/**/
.IcoSel {
  opacity: 1;
  z-index: 9;
  position: absolute;
  /*background-color: blue;*/
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-content: center;
}
.IcoSelINT {
  background-color: bisque;
  height: 64px;
  width: 64px;
  border-radius: 35px;
}
/**/
.IcoTEST {
  opacity: 1;
  position: absolute;
  z-index: 15;
}
/**/
/**/
/**/
.Ico {
  height: 10px;
  width: 10px;
  border-radius: 5px;
}
.IcoSS {
  height: 58px;
  width: 58px;
  border-radius: 29px;
  transition: border-radius 0.5s cubic-bezier(0.1, 0.1, 0.1, 0.5), height 0.5s,
    width 0.5s, background-color 1s, opacity 2s;
}
.IcoBB {
  height: 60px;
  width: 60px;
  border-radius: 30px;
  transition: border-radius 0.5s, height 0.5s, width 0.5s, background-color 2s,
    opacity 2s;
}
.actl {
  width: 100%;
}
</style>
