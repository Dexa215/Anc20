<template>
  <div>
    <!--
    <div class="AncAppBarE"></div>
    -->

    <!--rmblock-->

    <v-app-bar
      fixed
      :class="cab"
      :height="h"
      clipped-right
      color="#38282b"
      dark
      scroll-target="#playground-example"
      :elevate-on-scroll="elevateOnScroll"
      :hide-on-scroll="hideOnScroll"
      :fade-on-scroll="fadeOnScroll"
      :fade-img-on-scroll="fadeImgOnScroll"
      :inverted-scroll="invertedScroll"
      :collapse="collapse"
      :collapse-on-scroll="collapseOnScroll"
      :shrink-on-scroll="shrinkOnScroll"
      :extended="extended"
    >
      <!-- 

      fixed
      app


    -->
      <v-row class="r r_BC">
        <v-col class="rcS rcX rcLat rcLat_BC ">
          <!-- Avatar -->

          <!-- /*62*/ -->

          <v-avatar class="avatar" size="48" right="true" v-if="!drawerLeft">
            <!-- drawer aperto -->

            <v-expand-x-transition>
              <img
                class="drwOpen"
                src="/static/images/Icone/anclogo2012.gif"
                alt="ancTradate"
                @click="gotoR('/')"
                @mouseover="hoveravatar = true"
                @mouseleave="hoveravatar = false"
              />
            </v-expand-x-transition>
          </v-avatar>

          <v-avatar class="avatar" size="48" right="true" v-else>
            <!-- drawer aperto -->

            <v-expand-x-transition>
              <v-icon size="64" @click="setDF">mdi-close-circle</v-icon>
            </v-expand-x-transition>
          </v-avatar>

          <!-- Avatar -->
        </v-col>

        <v-col class="rcC rcX rcC_BC--T" cols="3">
          <!--v-expand-transition v-show="!drawerLeft" -->
          <v-row
            class="rcCr rcCr_BC--T"
            align="center"
            dense
            style="z-index: 2"
          >
            <v-col class="rcCrcS rcCrcLat_BC--T">
              <div>lg - ANC</div>
            </v-col>

            <v-col class="rcCrcC rcCrcX rcCrcC_BC--T">
              <!-- v-app-bar -->
              <v-app-bar-nav-icon @click.stop="setD">
                <v-btn icon class v-model="iconX">
                  <v-icon v-if="drawerLeft" large>{{ iconO }}</v-icon>
                  <v-icon v-else large>{{ iconC }}</v-icon>
                </v-btn>
              </v-app-bar-nav-icon>
              <!-- v-app-bar -->
            </v-col>

            <v-col class="rcCrcD rcCrcX rcCrcLat_BC--T">
              <div>TRADATE</div>
            </v-col>
          </v-row>

          <!--/v-expand-transition-->
        </v-col>

        <v-col class="rcD rcX rcLat rcLat_BC">
          <v-expand-x-transition>
            <v-btn icon v-show="!drawerLeft">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-expand-x-transition>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import router from "@/router";
/*import m4lg from "@/components/AncM/M4lg.vue";*/

export default {
  name: "b4lg",

  components: {},

  data() {
    return {
      expand: "true",
      h: "80px",
      cab: "AncAppBarE cBE-Vis",
      nbc: "blue", //dark-grey
      AncRowBarColsssx: "AncRowBarColssx",
      AncRowBarColdddx: "AncRowBarColddx",
      iconX: "mdi-menu",
      //        iconC:"mdi-backburger",
      //        iconO:"mdi-tray-full",
      iconC: "mdi-dots-vertical",
      iconO: "mdi-menu-up",
      requestToken: "",
      rvt: 10,
      breweries: [],
      isLoading: false,
      tree: [],
      types: [],
      footercolor: "#0052cc",
      hoveravatar: false,
      right: false,
      left: false,
      elevateOnScroll: false,
      hideOnScroll: false,
      fadeOnScroll: false,
      fadeImgOnScroll: false,
      invertedScroll: false,
      collapse: false,
      collapseOnScroll: false,
      shrinkOnScroll: true,
      extended: false
    };
  },
  props: {
    height: { type: Number },
    // eslint-disable-next-line vue/no-dupe-keys
    nbc: { type: String },
    colBarEst: { type: String },
    colBarInt: { type: String },
    requestUser: { type: String },
    requestUserIsStaff: { type: Boolean },
    requestUserIsSuper: { type: Boolean },
    requestUserAvatar: { type: String },
    requestUserBio: { type: String },
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array },
    drawer: { type: Boolean },
    drawerLeft: { type: Boolean },
    drawerRight: { type: Boolean }
  },
  methods: {
    gotoR(r) {
      this.expand = !this.expand;

      // eslint-disable-next-line no-console
      console.log("AppBar rotta per...");
      this.$emit("gotoR", r);
    },
    setD() {
      let d = this.drawerLeft;
      if (d === false) {
        this.iconX = this.iconC;
        console.log("d true");
      } else {
        this.iconX = this.iconO;
        console.log("d false");
      }
      this.$emit("setD");
    },
    setDF() {
      this.$emit("setDF");
    },
    setcolor() {
      var x = this;
      //console.log("setcolor analizzo this.requestuserisstaff...", x.requestUserIsStaff);
      if (x.requestUserIsStaff === true) {
        //this.cab="AncAppBarE cBE-Staff";
        this.nbc = "#80051c"; //dark-RED
        this.AncRowBarColsssx = "AncRowBarColssx arbcs-Staff";
        this.AncRowBarColdddx = "AncRowBarColddx arbcs-Staff";
      } else {
        //this.cab="AncAppBarE cBE-Socio"
        this.nbc = "#38282b"; //dark-grey
        this.AncRowBarColsssx = "AncRowBarColssx arbcs-Visitor";
        this.AncRowBarColdddx = "AncRowBarColddx arbcs-Visitor";
      }
    }
  },
  updated() {
    this.setcolor();
  },
  mounted() {
    this.setcolor();
    this.h = this.height;
    //console.log(this.$vuetify.breakpoint);
  }
};
</script>

<style media="screen"></style>
