<template>
  <!-- MACRO COLONNA SINISTRA ************************************************************************************************************ -->
  <v-col
    :class="rcS"
    cols="6"
  >
    <v-row> </v-row>

    <!--<r1></r1>-->
  </v-col>
</template>
<script>
import r1 from "@/components/AncAppBars/B4/r0/c0sx/r1/r1.vue";
export default {
  name: "csx",
  components: {
    r1
  },
  computed: {
    rcS () {
      var rcS = "csx ANCbrd mx-auto my-auto "; /*Bordi*/
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
}

.BBclass {
  background-color: rgb(146, 0, 0); /*test !important*/
  opacity: 1;
  height: 75px;
  /*height: 98%;*/
  width: 250px;
  border-radius: 80px 160px 0px 80px;
  transition: width 0.3s, height 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.5),
    background-color 1s, opacity 2s, border-radius 0.5s;
}
.SSclass {
  background-color: black;
  opacity: 0.8;
  /*background-color: yellowgreen !important;*/
  height: 75px;
  border-radius: 48px 1px 1px 48px;
  transition: width 0.3s, height 0.8s, background-color 1s, border-radius 0.5s;
}

/*Combinazioni RANK*/
.SS-r1 {
  background-color: rgb(1, 4, 20);
}
.SS-r2 {
  background-color: #470410;
}
.SS-r3 {
  background-color: #9b0c26;
}

.BB-r1 {
  background-color: rgb(1, 4, 20);
}
.BB-r2 {
  background-color: #470410;
}
.BB-r3 {
  background-color: #9b0c26;
}
</style>
