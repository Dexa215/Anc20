<template>
  <!-- MACRO COLONNA DESTRA ************************************************************************************************************ -->
  <v-col
    cols="6"
    class="c"
  >
    <v-row
      class="cr"
      align="center"
      justify="end"
    >
      <div :class="rcD"></div>
    </v-row>

    <!--<r1></r1>-->
  </v-col>
</template>
<script>
import r1 from "@/components/AncAppBars/B4/r0/c0dx/r1/r1.vue";
export default {
  name: "cdx",
  components: {
    r1
  },
  computed: {
    rcD () {
      var rcD = "cdx ANCbrd "; /*Bordi*/
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
        rcD += "BBclass ";
        /*bgc*/
        switch (rank) {
          case 1:
            rcD += "BB-r1 ";
            break;
          case 2:
            rcD += "BB-r2 ";
            break;
          case 3:
            rcD += "BB-r3 ";
            break;
          default:
        }
      } else {
        rcD += "SSclass ";
        /*bgc*/
        switch (rank) {
          case 1:
            rcD += "SS-r1 ";
            break;
          case 2:
            rcD += "SS-r2 ";
            break;
          case 3:
            rcD += "SS-r3 ";
            break;
          default:
        }
      }
      return rcD;
    }
  }
};
</script>
<style media="screen" scoped>
.cdx {
  position: relative;
  z-index: 10;
  margin: 0%;
}

.c {
  height: 100%;
  background-color: pink;
  padding: 0%;
}

.cr {
  height: 100%;
  background-color: yellow;
  margin: 0%;
}

.BBclass {
  background-color: rgb(146, 0, 0); /*test !important*/
  opacity: 1;
  height: 145px;
  width: 350px;
  border-radius: 160px 80px 80px 0px;
  transition: width 0.5s, height 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.5),
    border-radius 0.5s;
}
.SSclass {
  background-color: black;
  opacity: 0.8;
  /*background-color: yellowgreen !important;*/
  width: 100%;
  height: 75px;
  border-radius: 1px 48px 48px 1px;
  transition: width 0.8s, height 0.8s, background-color 2s, border-radius 0.5s;
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
