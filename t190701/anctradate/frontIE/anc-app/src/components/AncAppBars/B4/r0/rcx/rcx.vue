<template>
  <!-- MACRO row centro z20 ************************************************************************************************************ -->
  <v-row
    :class="rcX"
    justify="center"
    align="center"
    @mouseenter="setSc(false)"
  >
    <!--align="center"-->
    <!--c1cx></c1cx-->
    <v-col
      class="col3"
      cols="3"
      v-if="bb === true"
    >
      <v-row
        justify="center"
        align="center"
      >
        <img
          :class="rcxIco"
          src="/static/images/Icone/anclogo2012.gif"
          alt="ancTradate"
          @click="setmenuU"
          @mouseover="hoveravatar = true"
          @mouseleave="hoveravatar = false"
        />
      </v-row>
    </v-col>
    <v-col
      cols="4"
      class="col3"
    >
      <v-row
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
    <v-col
      class="col3"
      cols="3"
      v-if="bb === true"
    >
      <v-row
        justify="center"
        align="center"
      >
        <img
          v-if="bb === true"
          :class="rcxIco"
          src="/static/images/Icone/anclogo2012.gif"
          alt="ancTradate"
          @click="setmenuL"
          @mouseover="hoveravatar = true"
          @mouseleave="hoveravatar = false"
        />
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import c1cx from "@/components/AncAppBars/B4/r0/c0cx/r1/c1cx/c1cx.vue";

export default {
  name: "rcx",
  components: {
    c1cx
  },
  data: () => ({
    u: "user",
    c: "cat",
    l: "lang"
  }),

  computed: {
    bb () {
      var bb = this.$store.getters.getbarBIG;
      return bb;
    },

    /*menu CAt*/
    mC () {
      var mC = this.$store.getters.getmenuCAT();
      return mC;
    },
    mU () {
      var mU = this.$store.getters.getmenuUSER();
      return mU;
    },
    mL () {
      var mL = this.$store.getters.getmenuLANG();
      return mL;
    },

    rcxIco () {
      var rcxIco = "rcxIco ";
      var bb = this.$store.getters.getbarBIG;
      if (bb === true) {
        rcxIco += "rcxIcoBB ";
      } else {
        rcxIco += "rcxIcoSS ";
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
.rcx {
  position: fixed;
  z-index: 20;
  /*background-color: pink !important;*/
  height: 70px;
  width: 350px;
  /*width: 70px;*/
}

.BBclass {
  /*background-color: rgb(146, 0, 0); /*test !important*/
  opacity: 1;
  /*height: 98%;*/
  height: 68px;
  /*width: 68px;*/
  width: 350px;
  border-radius: 34px;
  transition: border-radius 0.5s cubic-bezier(0.1, 0.1, 0.1, 0.5), height 0.5s,
    width 0.5s, background-color 0.2s, opacity 2s;
}
.SSclass {
  /*background-color: black;*/
  opacity: 1;
  /*background-color: yellowgreen !important;*/
  height: 66px;
  width: 66px;
  border-radius: 33px;
  transition: border-radius 0.5s, height 0.5s, width 0.5s, background-color 1s;
}

.bg_blue {
  background-color: rgb(37, 55, 105);
}

/*Combinazioni RANK*/
.SS-r1 {
  /*.colorBlueOpaque */
  background-color: rgb(37, 55, 105);
  /*background-color: rgb(27, 64, 163);*/
  /*background-color: rgb(19, 21, 36);*/
  /*background-color: rgb(1, 4, 20);*/
}
.SS-r2 {
  background-color: rgb(27, 64, 163);
  /*background-color: rgb(19, 21, 36);*/
  /*background-color: #470410;*/
}
.SS-r3 {
  background-color: rgb(27, 64, 163);
  /*background-color: rgb(19, 21, 36);*/
  /*background-color: #9b0c26;*/
}

.BB-r1 {
  background-color: rgb(209, 209, 209);
  /*background-color: rgb(19, 21, 36);*/
  /*background-color: rgb(1, 4, 20);*/
}
.BB-r2 {
  background-color: rgb(209, 209, 209);
  /*background-color: rgb(19, 21, 36);*/
  /*background-color: #470410;*/
}
.BB-r3 {
  background-color: rgb(209, 209, 209);
  /*background-color: rgb(19, 21, 36);*/
  /*background-color: #9b0c26;*/
}
.rcxIco {
  height: 10px;
  width: 10px;
  border-radius: 5px;
}

.rcxIcoSS {
  height: 58px;
  width: 58px;
  border-radius: 29px;
  transition: border-radius 0.5s cubic-bezier(0.1, 0.1, 0.1, 0.5), height 0.5s,
    width 0.5s, background-color 1s, opacity 2s;
}
.rcxIcoBB {
  height: 60px;
  width: 60px;
  border-radius: 30px;
  transition: border-radius 0.5s, height 0.5s, width 0.5s, background-color 2s,
    opacity 2s;
}

.col3 {
  height: 100%;
  background-color: yellow;
}
</style>
