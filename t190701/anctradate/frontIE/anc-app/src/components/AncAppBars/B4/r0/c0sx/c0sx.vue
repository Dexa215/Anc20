<template>
  <!-- MACRO COLONNA SINISTRA ************************************************************************************************************ -->
  <v-col :class="rcS">
    <!--
<r1></r1>
    -->

    <!-- test 2021 03 13 OK-->
  </v-col>
</template>
<script>
import r1 from "@/components/AncAppBars/B4/r0/c0sx/r1/r1.vue";
export default {
  name: "c0sx",
  components: {
    r1
  },
  computed: {
    /* DINAMIC CSS */
    /*  rcS rcX rcLat rcLat_BC_Visitor  */
    bb () {
      var bb = this.$store.getters.getbarBIG;
      if (bb === true) {
        return " si BB ATTIVA !!!! ";
      } else {
        return "BB inattiva...";
      }
    },

    rcS () {
      //var rcS = this.$store.getters.rcS;
      var rcS = "ANCbrd "; /*Bordi*/
      var rank = 0;
      /**/
      var u = this.$store.getters.requestUser;
      var ust = this.$store.getters.requestUserIsStaff;
      var usp = this.$store.getters.requestUserIsSuper;
      var uav = this.$store.getters.requestUserAvatar;
      var ub = this.$store.getters.requestUserBio;

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
      /*
      switch (rank) {
        case 1:
          rcS = "rank1";
          break;
        case 2:
          rcS = "rank2";
          break;
        case 3:
          rcS = "rank3";
          break;
        default:
      }
*/

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
      /*
      return this.$store.getters.rcS;
      */
    }
  }
};
</script>
<style media="screen" scoped>
.BBclass {
  background-color: rgb(146, 0, 0); /*test !important*/
  opacity: 1;
  height: 98%;
  border-radius: 80px 160px 0px 80px;
  transition: height 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.5), background-color 1s,
    opacity 2s, border-radius 0.5s;
}
.SSclass {
  background-color: black;
  opacity: 0.8;
  /*background-color: yellowgreen !important;*/
  height: 75px;
  border-radius: 48px 48px 48px 48px;
  transition: height 0.8s, background-color 1s, border-radius 0.5s;
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

/*  Colori Globali        Blue              */
.colorBlueOpaque {
  color: rgb(19, 21, 36);
}
.colorBlue {
  color: rgb(4, 11, 46);
}
.colorBlueDark {
  color: rgb(1, 4, 20);
}
/*  Colori Globali        Staff - Admin     */
.colorStaff {
  background-color: #470410 !important;
}

.Anc_BC {
  background-color: rgb(33, 29, 54);
  color: antiquewhite;
}
.Anc_BC_Blue {
  background-color: rgb(9, 5, 49);
  color: aliceblue;
}
.Anc_BC_BlueDark {
  background-color: rgb(189, 8, 8);
  color: blanchedalmond;
}
</style>
