<template>
  <v-app-bar
    :class="cab"
    :height="h"
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
    <v-row class="r r_BC--T">
      <v-col class="rcS rcX rcLat rcLat_BC--T ">
        <!-- v-app-bar -->
        <v-app-bar-nav-icon @click.stop="setD">
          <v-btn icon class v-model="iconX">
            <v-icon v-if="drawerLeft" large>{{ iconO }}</v-icon>
            <v-icon v-else large>{{ iconC }}</v-icon>
          </v-btn>
        </v-app-bar-nav-icon>
        <!-- v-app-bar -->
      </v-col>

      <v-col class="rcC rcX rcC_BC--T" cols="3">
        <!--v-expand-transition v-show="!drawerLeft" -->
        <v-row class="rcCr rcCr_BC--T" align="center" dense style="z-index: 2">
          <v-col class="rcCrcS rcCrcLat_BC--T">
            <div>lg - ANC</div>
          </v-col>

          <v-col class="rcCrcC rcCrcX rcCrcC_BC--T">
            <!-- Avatar -->

            <!--    
            <v-expand-x-transition>
              <v-card
                v-show="drawerLeft"
                height="100"
                width="200"
                class="mx-auto"
              ></v-card>
            </v-expand-x-transition>
            -->

            <!-- class="animated rollIn" -->
            <div style="background-color: orange !important;">
              <!-- /*62*/ -->

              <v-avatar
                class="avatar"
                size="62"
                right="true"
                v-if="!drawerLeft"
              >
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

              <v-avatar class="avatar" size="62" right="true" v-else>
                <!-- drawer aperto -->

                <v-expand-x-transition>
                  <v-icon size="64" @click="setDF">mdi-close-circle</v-icon>
                </v-expand-x-transition>
              </v-avatar>
            </div>

            <!-- Avatar -->
          </v-col>

          <v-col class="rcCrcD rcCrcX rcCrcLat_BC--T">
            <div>TRADATE</div>
          </v-col>
        </v-row>

        <transition
          name="custom-classes-transition"
          enter-active-class="animated fadeInDown"
          leave-active-class="animated fadeOutUp"
        >
          <div
            class="rm"
            v-show="drawerLeft"
            style="background-color:  transparent !important;"
          >
            <m4lg
              :C="C"
              :CS="CS"
              :categorie="categorie"
              :drawer="drawer"
              :drawerLeft="drawerLeft"
              :drawerRight="drawerRight"
              :iconX="iconX"
              @gotoR="gotoR"
              @setD="setD"
              @setDF="setDF"
              @mouseover="setDF()"
            ></m4lg>

            <!-- /*62*/ 
          <v-card>
            hello
          </v-card>
          --></div>
        </transition>

        <!--/v-expand-transition-->
      </v-col>

      <v-col class="rcD rcX rcLat rcLat_BC--T">
        <v-expand-x-transition>
          <v-btn icon v-show="!drawerLeft">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-expand-x-transition>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import router from "@/router";
import m4lg from "@/components/AncM/M4lg.vue";

export default {
  name: "b4lg",

  components: {
    m4lg
  },

  data() {
    return {
      expand: "true",
      h: "80px",
      cab: "AncAppBarE cBE-Vis ",
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

<style media="screen">
@keyframes slideInDown {
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInDown {
  animation-name: slideInDown;
}

/* -------------------------------------------------------------------- */
@keyframes fadeOutUp {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.fadeOutUp {
  animation-name: fadeOutUp;
  animation-duration: 1s;
}

/* -------------------------------------------------------------------- */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.fadeInDown {
  animation-name: fadeInDown;
  animation-duration: 1s;

  /* animation-delay: -2s; test ok*/
}
/* -------------------------------------------------------------------- */
@keyframes flipOutX {
  from {
    transform: perspective(200px);
  }

  30% {
    transform: perspective(200px) rotate3d(1, 0, 0, -50deg);
    opacity: 1;
  }

  to {
    transform: perspective(200px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  animation-duration: 0.75s;
  animation-name: flipOutX;
  backface-visibility: visible !important;
}
/* -------------------------------------------------------------------- */
@keyframes zoomOutDown {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomOutDown {
  animation-name: zoomOutDown;
}
/* -------------------------------------------------------------------- */
@keyframes zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}
.zoomOut {
  animation-name: zoomOut;
}
/* -------------------------------------------------------------------- */
</style>
