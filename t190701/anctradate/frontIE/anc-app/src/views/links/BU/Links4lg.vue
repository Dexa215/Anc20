{% load l10n %}

<template>
  <div class="SfBase">
    <v-row class="rT rT_lv rThXL rTbg2 mx-auto" v-show="drawerLeft"></v-row
    ><!--menu/txp-->
    <!--div class="r_main_hsUp_LG">spazio Up lg</div-->
    <!--rr-->
    <v-parallax
      class="SfParallax"
      src="/static/images/bg/bg8.jpg"
      height="850"
    ></v-parallax>

    <v-row class="r_main r_main_h_LG mx-auto" justify="start" align="start"
      ><!--rr-->
      <v-col cols="2" class="carcol carcolsx"></v-col
      ><!--sx-->
      <v-col cols="8" class="cx_main"
        ><!--cx-->
        <v-card class="card_main Anc_BC_BlueDark">
          <v-row align="center" justify="center" id="rci" dark>
            row...

            <v-list-item-group
              rounded
              v-model="selectedItem"
              class="links2smListGroup"
            >
              <v-list-item
                v-for="(item, i) in categorie[C / 10 - 1].linksAmici"
                :key="i"
              >
                <rItem
                  :link="item.link"
                  :txt="item.descrizione"
                  :src="item.icon"
                  :height="30"
                  :width="30"
                  :imgtype="img"
                ></rItem> </v-list-item
            ></v-list-item-group>

            <v-col cols="4" class="carcol carcolcx">
              <span>{{ lang.t[1].lista[7].t[0].text }}</span>
              <!-- LISTA LINK-->

              {{ categorie[7].descrizione }}

              <v-list class="links2smList" color="transparent" rounded>
                <!--color="primary"-->
                <v-list-item-group
                  rounded
                  v-model="selectedItem"
                  class="links2smListGroup"
                >
                  <v-list-item
                    class=""
                    v-for="(item, i) in categorie[C / 10 - 1].linksAmici"
                    :key="i"
                  >
                  </v-list-item>
                </v-list-item-group>

                <v-list-item-group
                  rounded
                  v-model="selectedItem"
                  class="links2smListGroup"
                >
                  <v-list-item
                    class="Anc_BC"
                    v-for="(item, i) in categorie[C / 10 - 1].linksAmici"
                    :key="i"
                  >
                    <v-list-item-icon>
                      <v-img
                        @click="v(item.link)"
                        class="linkiconsmall"
                        small
                        dark
                        :src="item.icon"
                      ></v-img>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title
                        @click="v(item.link)"
                        class="linksmallTitle Anc_BC_BlueDark"
                        v-text="item.descrizione"
                      ></v-list-item-title>

                      <v-list-item-subtitle
                        class="linksmallSubTitle"
                        v-text="item.link"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <!-- LISTA LINK-->
            </v-col>
          </v-row>
        </v-card>
        <AncIntestazioneFine></AncIntestazioneFine>
        <div class="r_main_hsDown_LG">spazio Down lg</div>
        <!--rr--> </v-col
      ><!--cx-->
      <v-col cols="2" class="carcol carcoldx"></v-col
      ><!--dx-->
    </v-row>
  </div>
</template>

<script>
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import rItem from "@/components/AncRow/Item/rItem.vue";

export default {
  name: "links4lg",

  components: {
    rItem,
    AncIntestazioneFine
  },
  props: {},
  data() {
    return {
      scr: "",
      focusOn: false,
      snackbar: true,
      text: `Hello, I'm a snackbar`,
      dialog: false
    };
  },
  computed: {
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    lang() {
      return this.$store.getters.getCurrentLanguage;
    },
    languages() {
      return this.$store.getters.getLanguages;
    },
    languagesShow() {
      return this.$store.getters.getLanguagesShow;
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
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
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
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
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
    admin() {
      return this.$store.getters.admin;
    },
    admincommands() {
      return this.$store.getters.admincommands;
    },
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    currentres() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "xs";
        case "sm":
          return "sm";
        case "md":
          return "md";
        case "lg":
          return "lg";
        case "xl":
          return "xl";
      }
    }
  },
  methods: {
    /*2020 06 16*/
    gotoR(r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    v(link) {
      this.$store.dispatch("vola", link);
    }
  },
  created() {},
  updated() {
    console.log("links4lg oncreate-- > start");
  },
  mounted() {}
};
</script>
