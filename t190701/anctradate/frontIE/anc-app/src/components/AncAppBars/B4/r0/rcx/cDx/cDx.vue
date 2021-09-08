<template>
  <v-col
    class="col3"
    cols="3"
    v-if="bb === true"
  >
    <v-row
      class="row4"
      justify="center"
      align="center"
    >
      <img
        :class="Ico"
        src="/static/icons/Nations/italy.png"
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
  name: "cDx",
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
</style>
