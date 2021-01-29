<template>
  <v-col
    class="h100 rcCrcC_BC"
    cols="4"
  >
    <v-row
      class="h100r my-auto"
      align="center"
      justify="center"
    >
      <v-expand-x-transition>
        <v-avatar
          class="avatar"
          size="48"
          v-if="!drawerLeft"
        >
          <!-- drawer aperto right="True" -->
          <img
            class="drwOpen"
            src="/static/images/Icone/anclogo2012.gif"
            alt="ancTradate"
            @click="gotoR('/')"
            @mouseover="hoveravatar = true"
            @mouseleave="hoveravatar = false"
          />
        </v-avatar>
        <v-avatar
          size="48"
          right="true"
          v-else
        >
          <!-- drawer aperto -->

          <v-icon
            size="48"
            @click="setDF"
          >mdi-close-circle-outline</v-icon>
        </v-avatar>
      </v-expand-x-transition>

      <!-- Avatar -->
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "c1cx",

  components: {},

  computed: {
    lang () {
      return this.$store.getters.getCurrentLanguage;
    },
    languages () {
      return this.$store.getters.getLanguages;
    },
    languagesShow () {
      return this.$store.getters.getLanguagesShow;
    },
    /*  -----------------------------------------------------------------------   */
    drawer () {
      return this.$store.getters.getDrawer;
    },
    drawerLeft () {
      return this.$store.getters.getDrawerLeft;
    },
    drawerRight () {
      return this.$store.getters.getDrawerRight;
    },
    drawerSottocategoria () {
      return this.$store.getters.getDrawerSottocategoria;
    },
    /*  -----------------------------------------------------------------------   */
    iconX () {
      return this.$store.getters.getIconX;
    },
    iconO () {
      return this.$store.getters.getIconO;
    },
    iconOdx () {
      return this.$store.getters.getIconOdx;
    },
    iconC () {
      return this.$store.getters.getIconC;
    },
    iconCdx () {
      return this.$store.getters.getIconCdx;
    },
    /*  -----------------------------------------------------------------------   */
    categorie () {
      return this.$store.getters.categorie;
    },
    C () {
      return this.$store.getters.getC;
    },
    CS () {
      return this.$store.getters.getCS;
    },
    requestUser () {
      return this.$store.getters.requestUser;
    },
    requestUserIsStaff () {
      return this.$store.getters.requestUserIsStaff;
    },
    requestUserIsSuper () {
      return this.$store.getters.requestUserIsSuper;
    },
    requestUserAvatar () {
      return this.$store.getters.requestUserAvatar;
    },
    requestUserBio () {
      return this.$store.getters.requestUserBio;
    },
    requestToken () {
      return this.$store.getters.requestToken;
    },
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* DINAMIC CSS */
    rcS () {
      return this.$store.getters.rcS;
    },
    rcD () {
      return this.$store.getters.rcD;
    },
    rcU () {
      return this.$store.getters.rcU;
    }
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  }
};
</script>

<style media="screen">
.h100 {
  height: 100%;
  padding-top: 0px;
  padding-bottom: 0px;
}
.h100r {
  height: 100%;
}
.avatarLG {
  height: 100%;
}
</style>
