<template>
  <v-col
    class="col3s"
    cols="3"
    v-if="bb === true"
  >
    <v-row
      v-if="mU"
      class="IcoSel"
    >
      <div class="IcoSelINT"></div>
    </v-row>

    <v-row
      class="row4csx"
      justify="center"
      align="center"
    >
      <a
        class="IcoTEST"
        @click="setmenuU"
      >{{ mU }}</a>

      <img
        :class="Ico"
        src="/static/images/Icone/bus.jpg"
        alt="ancTradate"
        @click="setmenuU"
        @mouseover="hoveravatar = true"
        @mouseleave="hoveravatar = false"
      />
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: "cSx",
  components: {},
  data: () => ({
    u: "user",
    c: "cat",
    l: "lang"
  }),

  computed: {
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
    mU () {
      var mU = this.$store.getters.getmenuUSER;
      return mU;
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
    }
  }
};
</script>
<style media="screen" scoped>
.col3s {
  background-color: palevioletred;
  height: 100%;
  padding: 0px;
}

.Ico {
  z-index: index 10;
  height: 10px;
  width: 10px;
  border-radius: 5px;
}
/**/
.row4csx {
  opacity: 1;
  z-index: 10;
  position: absolute;
  height: 100%;
  width: 100%;

  background-color: transparent;

  margin: 0px;
  padding: 0px;
  justify-content: center;
  align-content: center;
}
/**/
.IcoSel {
  opacity: 1;
  z-index: 9;
  position: absolute;
  height: 100%;
  width: 100%;
  /*background-color: blue;*/
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  justify-content: center;
  align-content: center;
}
.IcoSelINT {
  background-color: blue;
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
