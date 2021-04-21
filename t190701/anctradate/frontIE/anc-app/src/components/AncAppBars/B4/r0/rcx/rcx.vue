<template>
  <!-- MACRO row centro z20 ************************************************************************************************************ -->
  <v-row
    :class="rcX"
    align="center"
    justify="center"
  >
    <div>
      ciao
    </div>
  </v-row>
</template>
<script>
export default {
  name: "rcx",
  components: {},
  computed: {
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
        rcX += "BBclass ";
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
        rcX += "SSclass ";
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
  }
};
</script>
<style media="screen" scoped>
.rcx {
  position: fixed;
  z-index: 20;
  /*background-color: pink !important;*/
  height: 64px;
  width: 64px;
}

.BBclass {
  /*background-color: rgb(146, 0, 0); /*test !important*/
  opacity: 1;
  /*height: 98%;*/
  height: 160px;
  width: 160px;
  border-radius: 80px;
  transition: border-radius 1.5s, height 1.5s, width 1.5s,
    cubic-bezier(0.1, 0.1, 0.1, 0.5), background-color 1s, opacity 2s;
}
.SSclass {
  /*background-color: black;*/
  opacity: 1;
  /*background-color: yellowgreen !important;*/
  height: 64px;
  width: 64px;
  border-radius: 35px;
  transition: border-radius 0.5s, height 0.5s, width 0.5s, background-color 1s;
}

/*Combinazioni RANK*/
.SS-r1 {
  background-color: rgb(19, 21, 36);
  /*background-color: rgb(1, 4, 20);*/
}
.SS-r2 {
  background-color: rgb(19, 21, 36);
  /*background-color: #470410;*/
}
.SS-r3 {
  background-color: rgb(19, 21, 36);
  /*background-color: #9b0c26;*/
}

.BB-r1 {
  background-color: rgb(19, 21, 36);
  /*background-color: rgb(1, 4, 20);*/
}
.BB-r2 {
  background-color: rgb(19, 21, 36);
  /*background-color: #470410;*/
}
.BB-r3 {
  background-color: rgb(19, 21, 36);
  /*background-color: #9b0c26;*/
}
</style>
