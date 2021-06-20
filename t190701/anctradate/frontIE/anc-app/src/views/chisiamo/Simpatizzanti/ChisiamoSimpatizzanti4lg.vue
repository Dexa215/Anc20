{% load l10n %}

<template>
  <div class="SfBase">
    <v-row
      class="rT rT_lv rThXL rTbg2 mx-auto"
      v-show="drawerLeft"
    ></v-row>
    <!--menu/txp-->
    <!--div class="r_main_hsUp_LG">spazio Up lg</div-->
    <!--rr-->
    <v-parallax
      class="SfParallax"
      src="/static/images/bg/bg8.jpg"
      height="850"
    ></v-parallax>
    <v-row
      class="r_main r_main_h_LG mx-auto"
      justify="start"
      align="start"
    >
      <!--rr-->
      <v-col
        cols="2"
        class="carcol carcolsx"
      ></v-col>
      <!--sx-->
      <v-col
        cols="8"
        class="cx_main"
      >
        <!--cx-->
        <v-card class="card_main Anc_BC_BlueDark">
          Simpatizzanti...
        </v-card>
        <AncIntestazioneFine></AncIntestazioneFine>
        <div class="r_main_hsDown_LG">spazio Down lg</div>
        <!--rr-->
      </v-col>
      <!--cx-->
      <v-col
        cols="2"
        class="carcol carcoldx"
      ></v-col>
      <!--dx-->
    </v-row>
  </div>
</template>

<script>
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import rc1p from "@/components/AncRow/Text/rc1p.vue";
import p1 from "@/components/AncRow/Picture/p1.vue";
export default {
  name: "contatti4lg",
  components: {
    AncIntestazioneFine,
    rc1p,
    p1
  },
  props: {},
  data () {
    return {
      tn1: [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }],
      mappa1:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.15881154439!2d8.905701070027497!3d45.71332899343703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478685f126a1ea85%3A0x7c16b78535fb871a!2sVia%20Carlo%20de%20Simoni%2C%201%2C%2021049%20Tradate%20VA!5e0!3m2!1sit!2sit!4v1576285621978!5m2!1sit!2sit",
      mappa2:
        "https://www.google.com/maps/embed?pb=!4v1576284624812!6m8!1m7!1sXkQU4fJD85BZziGDdsNGNw!2m2!1d45.71363123189879!2d8.906257580735!3f290.300251927189!4f2.186880441983959!5f1.1924812503605782",
      img1: "/static/images/2019/MAX.jpg",
      img2: "/static/images/2019/CALZAVARA.jpg",
      img3: "/static/images/Foto/sopracolletto.jpg"
    };
  },
  computed: {
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    lang () {
      return this.$store.getters.getCurrentLanguage;
    },
    languages () {
      return this.$store.getters.getLanguages;
    },
    languagesShow () {
      return this.$store.getters.getLanguagesShow;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
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
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
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
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    categorie () {
      return this.$store.getters.categorie;
    },
    C () {
      return this.$store.getters.getC;
    },
    CS () {
      return this.$store.getters.getCS;
    },
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
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
    /*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
    rcS () {
      return this.$store.getters.rcS;
    },
    rcD () {
      return this.$store.getters.rcD;
    },
    rcU () {
      return this.$store.getters.rcU;
    },
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    admin () {
      return this.$store.getters.admin;
    },
    admincommands () {
      return this.$store.getters.admincommands;
    },
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    currentres () {
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
    gotoR (r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    v (link) {
      this.$store.dispatch("vola", link);
    }
  },
  created () { },
  updated () {
    console.log("contatti4lg oncreate-- > start");
  },
  mounted () { }
};
</script>

<style media="screen" scoped>
/*20201204*/
/*general...*/
.rT_lv {
  position: absolute;
  z-index: 6;
} /*Row semi-Transparent level on MENU */
.SfParallax {
  position: absolute;
  z-index: 1;
  opacity: 0.15;
  width: 100%;
}
.r_main {
  position: absolute;
  z-index: 5;
  opacity: 1;
  background-color: transparent;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.cx_main {
  opacity: 1;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
}
.card_main {
  opacity: 0.8;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 45px;
}

/*responsive...*/
.r_main_h_LG {
  margin-top: 150px;
  height: 600px;
}
.r_main_hsUp_LG {
  height: 150px;
}
.r_main_hsDown_LG {
  height: 50px;
}
/**/
.Anc_BC_BlueDark {
  background-color: rgb(1, 4, 20);
  color: blanchedalmond;
}
#rci {
  /*background-color: darkseagreen;*/
}
</style>
