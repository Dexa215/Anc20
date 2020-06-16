<template>
  <div class="umenu4 mx-auto">
    <v-row id="ur4" class="mx-auto ur" align="center" justify="center">
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

    <v-row id="ur1" class="mx-auto ur" align="center" justify="center">
      <img class="uimg" :src="ico" />
    </v-row>

    <v-row class="mx-auto ur" id="ur2" align="center" justify="center">
      <v-col>
        <h2 class>Ciao {{ requestUser }} !!</h2>
      </v-col>
    </v-row>

    <v-row class="mx-auto ur" id="ur3" align="center" justify="center">
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

    <!--

    <v-card>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img class="uimg" :src="ico" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-row
            dense
            class="row mx-2 pa-2"
            style="background-color: transparent !important;"
            align="start"
            justify="center"
          >
            <v-col
              class="pa-1"
              style="background-color: transparent !important;"
              align="start"
              justify="center"
            >
              <v-list-item-title class="my-1">Ciao {{ requestUser }} !</v-list-item-title>

              <v-list-item-subtitle
                v-if="requestUserIsSuper"
                class="my-1"
                style="color:red;"
              >SuperUser</v-list-item-subtitle>

              <v-list-item-subtitle
                v-else-if="requestUserIsStaff"
                class="my-1"
                style="color:blue;"
              >Staff</v-list-item-subtitle>

              <v-list-item-subtitle v-else class="my-1" style="color:grey;">User</v-list-item-subtitle>

              <v-list-item-subtitle class="my-1">
                <span v-if="requestUser">
                  <a class="my-1 btn btn-sm btn-outline-secondary" href="/accounts/logout/">Logout</a>
                </span>
              </v-list-item-subtitle>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list shaped>
        <v-list-item class="tile" v-if="requestUserIsStaff" @click="gotoR('event/')">
          <v-list-item-icon>
            <v-icon>mdi-timeline-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Nuovo Evento</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    -->
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
.umenu4 {
  margin-left: 0px;
  margin-right: 0px;
  background-color: pink !important;
}

.ur {
  height: 70px;
  text-align: center;
  text-justify: auto;
  background-color: transparent !important;
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
  margin-top: 50px;
  margin-bottom: 10px;
}
.uimg {
  /*  size: 100px; */
  height: 100px;
  width: 100px;
  border-radius: 50px;
}
h2 {
  color: rgb(245, 244, 228);
}

.logout {
  color: bisque;
}
</style>

 