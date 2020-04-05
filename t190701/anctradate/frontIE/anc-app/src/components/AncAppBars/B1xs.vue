<template>
  <v-app-bar
    :class="cab"
    app
    clipped-right
    fixed
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
    <v-row class="AncRowBarEst ESTsm">
      <v-col :class="AncRowBarColsssx">
        <!-- v-app-bar -->
        <v-app-bar-nav-icon style="z-index:5; " @click.stop="setD">
          <v-btn icon class v-model="iconX">
            <v-icon v-if="drawerLeft" large>{{ iconO }}</v-icon>
            <v-icon v-else large>{{ iconC }}</v-icon>
          </v-btn>
        </v-app-bar-nav-icon>
        <!-- v-app-bar -->
      </v-col>

      <v-col class="AncRowBarColccx">
        <!-- Avatar -->
        <div>
          <v-avatar class="avatar" size="62" right="true">
            <!-- drawer aperto -->
            <img
              v-if="drawerLeft"
              class="drwOpen"
              src="/static/images/Icone/anclogo2012.gif"
              alt="ancTradate"
              @click="gotoR('/')"
              @mouseover="hoveravatar = true"
              @mouseleave="hoveravatar = false"
            />
            <!-- drawer chiuso -->
            <img
              v-else
              class="drwClose"
              src="/static/images/Icone/anclogo2012.gif"
              alt="ancTradate"
              @click="gotoR('/')"
              @mouseover="hoveravatar = true"
              @mouseleave="hoveravatar = false"
            />
          </v-avatar>
        </div>
        <!-- Avatar -->
      </v-col>

      <v-col :class="AncRowBarColdddx">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
import router from "@/router";
export default {
  name: "b1xs",
  data() {
    return {
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
      shrinkOnScroll: false,
      extended: false
    };
  },
  props: {
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
    // eslint-disable-next-line no-console
    console.log(this.$vuetify.breakpoint);
  }
};
</script>
