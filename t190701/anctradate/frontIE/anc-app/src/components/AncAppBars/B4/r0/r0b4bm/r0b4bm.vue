<template>
  <v-row class="ext">
    <v-col cols="12">
      <v-row
        :class="r0B4bm"
        justify="center"
        align="center"
      >
        <div :class="r0B4bmint">
          <div v-if="bb">menu BB</div>
        </div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "r0b4bm",
  components: {},
  data () {
    return {};
  },
  props: {},
  computed: {
    bb () {
      var bb = this.$store.getters.getbarBIG;
      return bb;
    },

    r0B4bm () {
      var r0b4bm = "r0B4bmx mx-auto Anc_BC_Blue "; /*  my-auto Anc_BC */
      var bb = this.$store.getters.getbarBIG;
      if (bb === true) {
        r0b4bm += "r0B4bmBig ";
      } else {
        r0b4bm += "r0B4bmsmall r0B4bmsmallDin ";
      }
      return r0b4bm;
    },
    r0B4bmint () {
      var r0b4bmint = "r0B4bmintx "; /*mx-auto my-auto Anc_BC_Blue*/
      var bb = this.$store.getters.getbarBIG;
      if (bb === true) {
        r0b4bmint += "r0B4bmintBig ";
      } else {
        r0b4bmint += "r0B4bmintsmall r0B4bmintsmallDin ";
      }
      return r0b4bmint;
    }
  }
};
</script>

<style media="screen" scoped>
/*--------------------------------------------------------*/
.ext {
  position: fixed;
  z-index: 6;
  height: 70px;
  border-radius: 35px;
  width: 31%;
}

.r0B4bmx {
  opacity: 0.95;
  position: relative;
  /*top: 100px;*/
  z-index: 7;

  padding-top: 2px;
  padding-bottom: 0px;
  padding-left: 1px;
  padding-right: 1px;
  /*background-color: blanchedalmond;*/
}
.r0B4bmsmall {
  height: 0px;
  border-radius: 0px 0px 42px 42px;
  transition: border-radius 1s;
}
.r0B4bmsmallDin {
  height: 0px;
  transition: height 0.8s, background-color 2s, border-radius 1.5s;
}
.r0B4bmBig {
  /*width: 610px;*/

  height: 1000px;
  opacity: 1;
  border-radius: 0px 0px 305px 305px;
  transition: height 0.5s cubic-bezier(0.5, 0.5, 0.5, 0.5) 0.4s,
    border-radius 0.5s;
}
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
.r0B4bmintx {
  opacity: 0.95;
  position: relative;
  z-index: 7;
  width: 300px;
}
.r0B4bmintsmall {
  height: 20px;
  border-radius: 42px;
  transition: border-radius 1s;
}
.r0B4bmintsmallDin {
  height: 20px;
  transition: height 0.8s, background-color 2s, border-radius 1.5s;
}
.r0B4bmintBig {
  height: 300px;
  opacity: 1;
  border-radius: 0px 0px 150px 150px;
  transition: height 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.5), border-radius 0.5s;
}
</style>
