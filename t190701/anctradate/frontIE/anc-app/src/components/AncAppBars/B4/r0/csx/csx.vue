<template>
  <!-- MACRO COLONNA SINISTRA ************************************************************************************************************ -->
  <v-col
    cols="6"
    class="c"
  >
    <v-row
      class="cr"
      align="center"
      justify="start"
    >
      <div :class="rcS">
        <rBB v-if="bb"></rBB>
        <rSS v-else></rSS>
      </div>
    </v-row>

    <!--<r1></r1>-->
  </v-col>
</template>
<script>
import r1 from "@/components/AncAppBars/B4/r0/c0sx/r1/r1.vue";
import rSS from "@/components/AncAppBars/B4/r0/csx/rSS/rSS.vue";
import rBB from "@/components/AncAppBars/B4/r0/csx/rBB/rBB.vue";
export default {
  name: "csx",
  components: {
    r1,
    rSS,
    rBB
  },

  computed: {
    bb () {
      var bb = this.$store.getters.getbarBIG;
      return bb;
    },
    rcS () {
      var rcS = "csx ANCbrd "; /*Bordi*/
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
        rcS += "BBclass ";
        /*bgc*/
        switch (rank) {
          case 1:
            rcS += "BB-r1 ";
            break;
          case 2:
            rcS += "BB-r2 ";
            break;
          case 3:
            rcS += "BB-r3 ";
            break;
          default:
        }
      } else {
        rcS += "SSclass ";
        /*bgc*/
        switch (rank) {
          case 1:
            rcS += "SS-r1 ";
            break;
          case 2:
            rcS += "SS-r2 ";
            break;
          case 3:
            rcS += "SS-r3 ";
            break;
          default:
        }
      }
      return rcS;
    }
  }
};
</script>
<style media="screen" scoped>
.csx {
  position: relative;
  z-index: 10;
  margin: 0%;
}
.c {
  /*v-col*/
  height: 100%;
  /*background-color: pink;*/
  background-color: transparent;
  padding: 0%;
}

.cr {
  /*v-row*/
  height: 100%;
  /*background-color: yellow;*/
  background-color: transparent;
  margin: 0%;
  margin-right: 2px;
}

.BBclass {
  background-color: rgb(146, 0, 0); /*test !important*/
  opacity: 1;
  height: 75px;
  width: 70%;
  border-radius: 48px 75px 0px 48px;
  margin-left: 2px;

  transition: width 0.7s, height 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.5),
    border-radius 1s cubic-bezier(0.1, 0.2, 0.5, 1);
}
.SSclass {
  background-color: black;
  opacity: 0.8;
  /*background-color: yellowgreen !important;*/
  width: 100%;
  height: 75px;
  border-radius: 48px 1px 1px 48px;
  transition: width 0.5s, height 0.8s, background-color 2s,
    border-radius 0.5s cubic-bezier(1, 0.2, 0.2, 1);
}

/*Combinazioni RANK*/
.SS-r1 {
  background-color: rgb(1, 4, 20);
}
.SS-r2 {
  background-color: #470410;
}
.SS-r3 {
  /*background-color: #9b0c26;*/
  background-color: #470410;
}

.BB-r1 {
  background-color: rgb(1, 4, 20);
}
.BB-r2 {
  background-color: #470410;
}
.BB-r3 {
  /*background-color: #9b0c26;*/
  background-color: #470410;
}
/*---------------------*/
</style>
