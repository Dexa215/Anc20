<template>
  <div class="u4menu mx-auto">
    <!--  User RANK / RANGO  -->
    <v-row id="u4r4" class="mx-auto">
      <v-col>
        <v-btn
          v-if="requestUserIsSuper"
          class="ma-2"
          rounded
          outlined
          large
          color="rgb(245, 244, 228)"
          @click="acs"
        >
          <a style="color:red;">Amministratore</a>
        </v-btn>

        <v-btn
          v-else-if="requestUserIsStaff"
          class="ma-2"
          rounded
          outlined
          large
          color="rgb(245, 244, 228)"
        >
          <a style="color:blue;">Consigliere</a>
        </v-btn>

        <v-btn v-else class="ma-2" rounded outlined large color="rgb(245, 244, 228)">
          <a style="color:brown;">Socio</a>
        </v-btn>
      </v-col>
    </v-row>

    <!--  User AVATAR  -->
    <v-row id="u4r1" class="mx-auto" align="center" justify="center">
      <img class="uimg" :src="ico" />
    </v-row>

    <!--  User NAME  -->
    <v-row id="u4r2" class="mx-auto" align="center" justify="center">
      <v-col>
        <h2 class>Ciao {{ requestUser }} !!</h2>
      </v-col>
    </v-row>

    <!--  User LOGOUT  -->
    <v-row id="u4r3" class="mx-auto" align="center" justify="center">
      <v-col>
        <v-btn class="ma-2" rounded outlined large color="rgb(245, 244, 228)">
          <span v-if="requestUser">
            <!--
            <a @click="gotoR('/')">test logout...</a>
            <spacer type="horizontal" width="100" height="100">♢</spacer>
            -->
            <a class="my-1 logout" href="/accounts/logout/">Logout</a>
          </span>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "u4lg",

  props: {},

  data() {
    return {
      mini: true,
      ico: "/static/images/Icone/anclogo2012.gif",
      iconX: "",
      //      "mdi-alien-outline"
      //        iconC:"mdi-backburger",
      //        iconO:"mdi-tray-full",

      iconC: "mdi-dots-vertical",
      //iconO:"mdi-menu-up",
      iconO: "mdi-close-circle"
    };
  },

  computed: {
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
      //this.$emit("adminCommandSwitch");
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
.u4menu {
  /* div  */
  margin-left: 0px;
  margin-right: 0px;
  background-color: transparent !important;
  /*background-color: YELLOW !important;*/
}

.u4r {
  height: 70px;
  text-align: center;
  text-justify: auto;
}

/*  AVATAR  immagine                  */
.uimg {
  /*  size: 100px; */
  height: 100px;
  width: 100px;
  border-radius: 50px;
}

/*  rows...                           */

/*  User AVATAR  -->                  */
#u4r1 {
  height: 120px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  text-justify: center;
  /*background-color: lawngreen;*/
}
#u4r2 {
  /*  CIAO USERNAME                   */
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  text-justify: center;
  /*background-color: lightskyblue;*/
}
#u4r3 {
  /*  Logout                          */
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  text-justify: center;
  /*background-color: lightcoral;*/
}
#u4r4 {
  /*  User RANK / RANGO  -->          */
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  text-justify: center;
  /*background-color: lightcoral !important;*/
}

h2 {
  color: rgb(245, 244, 228);
}

.logout {
  color: bisque;
}
</style>

 