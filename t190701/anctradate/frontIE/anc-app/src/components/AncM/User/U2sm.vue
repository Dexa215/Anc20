<template>
  <div class="umenu2 mx-auto">
    <v-row id="ur4" class="mx-auto mu-1 ur" align="start" justify="center">
      <v-btn
        v-if="requestUserIsSuper"
        class="ma-1"
        rounded
        outlined
        large
        color="rgb(245, 244, 228)"
        @click="acs"
      >
        <a style="color:red;">Admin</a>
      </v-btn>
      <!-- -->

      <v-btn
        v-else-if="requestUserIsStaff"
        class="ma-1"
        rounded
        outlined
        large
        color="rgb(245, 244, 228)"
      >
        <a style="color:blue;">Staff</a>
      </v-btn>
      <!-- -->

      <v-btn v-else class="ma-1" rounded outlined large color="rgb(245, 244, 228)">
        <a style="color:brown;">Socio</a>
      </v-btn>
      <!-- -->
    </v-row>

    <v-row id="ur1" class="mx-auto ur" align="center" justify="center">
      <img class="uimg1" :src="ico" />
    </v-row>

    <v-row id="ur2" class="mx-auto ur" align="center" justify="center">
      <h2 class>Ciao {{ requestUser }} !!</h2>
    </v-row>
    <v-row id="ur3" class="mx-auto ur" align="center" justify="center">
      <v-btn class="ma-1" rounded outlined large color="rgb(245, 244, 228)">
        <span v-if="requestUser">
          <a class="my-1 logout" href="/accounts/logout/">Logout</a>
        </span>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "u2sm",
  props: {},
  data() {
    return {
      mini: true,
      ico: "/static/images/Icone/anclogo2012.gif"
    };
  },

  computed: {
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    iconX() {
      return this.$store.getters.getIconX;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    drawer() {
      return this.$store.getters.getDrawer;
    },
    drawerLeft() {
      return this.$store.getters.getDrawerLeft;
    },
    drawerRight() {
      return this.$store.getters.getDrawerRight;
    },
    drawerSottocategoria() {
      return this.$store.getters.getDrawerSottocategoria;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */

    categorie() {
      return this.$store.getters.categorie;
    },

    C() {
      return this.$store.getters.getC;
    },
    CS() {
      return this.$store.getters.getCS;
    },

    requestUser() {
      return this.$store.getters.requestUser;
    },
    requestUserIsStaff() {
      return this.$store.getters.requestUserIsStaff;
    },
    requestUserIsSuper() {
      return this.$store.getters.requestUserIsSuper;
    },
    requestUserAvatar() {
      return this.$store.getters.requestUserAvatar;
    },
    requestUserBio() {
      return this.$store.getters.requestUserBio;
    },
    requestToken() {
      return this.$store.getters.requestToken;
    },
    /* DINAMIC CSS */

    rcS() {
      return this.$store.getters.rcS;
    },
    rcD() {
      return this.$store.getters.rcD;
    },
    rcU() {
      return this.$store.getters.rcU;
    }
  },

  methods: {
    gotoR(r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    acs() {
      this.$store.dispatch("adminCommandSwitch");
    },
    SDL() {
      /*Switch Drawer Language*/
      this.$store.dispatch("switchDrawerLang");
    },
    ScL(val) {
      /*SET Current Language*/
      this.$store.dispatch("setL", val);
    },
    DSCset(state) {
      /*SC Sotto Categoria*/
      this.$store.dispatch("DSCset", state);
    },
    setD() {
      this.$store.dispatch("setD");
    },
    setDF() {
      this.$store.dispatch("setDF");
    }
  }
};
</script>

<style media="screen">
.umenu2 {
  margin-left: 0px;
  margin-right: 0px;
  background-color: red !important;
}

.ur {
  height: 70px;
  text-align: start;
  text-justify: auto;
  /*background-color: transparent !important;*/
  background-color: black !important;
}
#ur1 {
  background-color: lawngreen;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 10px;
}
#ur2 {
  background-color: lightskyblue;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: center;
  text-justify: auto;
}
#ur3 {
  background-color: lightcoral;
  margin-top: 5px;
  margin-bottom: 10px;
}
#ur4 {
  margin-top: 20px;
  margin-bottom: 10px;
}
.uimg1 {
  /*  size: 100px; */
  height: 70px;
  width: 70px;
  border-radius: 35px;
}
h2 {
  color: rgb(245, 244, 228);
}

.logout {
  color: bisque;
}
</style>

 