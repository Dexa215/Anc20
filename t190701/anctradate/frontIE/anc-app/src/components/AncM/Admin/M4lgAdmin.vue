<template>
  <v-row class="rmvcolrSadmin">
    <v-col class="cPAdmin-pre" cols="8">{{admincommands}}</v-col>
    <v-col class="cPAdmin">
      <v-list shaped dark class="ancM4l ancM4l_BC">
        <!--
      <v-list dark shaped class="adminList">
        -->
        <div class="display-1">
          <a>Comandi Amministratore</a>
        </div>
        <v-list-item class="tile" @click="gotoR('event/')">
          <v-list-item-content>
            <v-list-item-title>Nuovo Evento</v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-timeline-plus</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "m4lgAdmin",

  components: {},

  computed: {
    lang() {
      return this.$store.getters.getCurrentLanguage;
    },
    languages() {
      return this.$store.getters.getLanguages;
    },
    languagesShow() {
      return this.$store.getters.getLanguagesShow;
    },
    /*  -----------------------------------------------------------------------   */
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
    /*  -----------------------------------------------------------------------   */
    iconX() {
      return this.$store.getters.getIconX;
    },
    iconO() {
      return this.$store.getters.getIconO;
    },
    iconOdx() {
      return this.$store.getters.getIconOdx;
    },
    iconC() {
      return this.$store.getters.getIconC;
    },
    iconCdx() {
      return this.$store.getters.getIconCdx;
    },
    /*  -----------------------------------------------------------------------   */
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
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* DINAMIC CSS */
    rcS() {
      return this.$store.getters.rcS;
    },
    rcD() {
      return this.$store.getters.rcD;
    },
    rcU() {
      return this.$store.getters.rcU;
    },
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    admincommands() {
      return this.$store.getters.admincommands;
    }
  },

  props: {
    /*
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array }
    */
  },

  data() {
    return {
      dark: "true"
    };
  },
  methods: {
    gotoR(r) {
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    setDF() {
      this.$store.dispatch("setDF");
      //this.$emit("setDF");
    }
  }
};
</script>

<style media="screen">
.cPAdmin-pre {
  background-color: transparent !important;
}
.cPAdmin {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgb(7, 14, 85);
  height: 600px;
  border-radius: 0px 15px 15px 15px;
}
</style>





