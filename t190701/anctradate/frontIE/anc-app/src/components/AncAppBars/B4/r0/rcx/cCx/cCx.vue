<template>
  <v-col
    cols="4"
    class="col3"
  >
    <v-row
      class="row4"
      justify="center"
      align="center"
      @mouseenter="setSc(false)"
    >
      <img
        :class="rcxIco"
        src="/static/images/Icone/anclogo2012.gif"
        alt="ancTradate"
        @click="setmenuC"
        @mouseover="hoveravatar = true"
        @mouseleave="hoveravatar = false"
      />
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "cCx",
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

    rcX () {
      var rcX = "rcx mx-auto my-auto colorBlue "; /*Bordi*/
      var rank = 0;
      /**/
      var u = this.$store.getters.requestUser;
      var ust = this.$store.getters.requestUserIsStaff;
      var usp = this.$store.getters.requestUserIsSuper;

      var bb = this.$store.getters.getbarBIG;

      if (u) {
        rank = 1; /*user*/
      }
      if (ust === true) {
        rank = 2; /*staff*/
      }
      if (usp === true) {
        rank = 3; /*super*/
      }

      if (bb === true) {
        rcX += "BBclass bg_blue ";
        /*bgc*/
        switch (rank) {
          case 1:
            rcX += "BB-r1 ";
            break;
          case 2:
            rcX += "BB-r2 ";
            break;
          case 3:
            rcX += "BB-r3 ";
            break;
          default:
        }
      } else {
        rcX += "SSclass bg_blue ";
        /*bgc*/
        switch (rank) {
          case 1:
            rcX += "SS-r1 ";
            break;
          case 2:
            rcX += "SS-r2 ";
            break;
          case 3:
            rcX += "SS-r3 ";
            break;
          default:
        }
      }
      return rcX;
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
