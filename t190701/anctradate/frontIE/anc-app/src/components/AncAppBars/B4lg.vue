<template>
  <div>
    <!--
    <div class="AncAppBarE"></div>
    -->

    <!--rmblock color="#38282b" -->

    <v-app-bar
      fixed
      :class="cab"
      :height="h"
      clipped-right
      color="rgb(6, 20, 89)"
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
        <v-col :class="rcS">
          <!-- Avatar -->

          <!-- /*62*/ -->

          <v-row class="iconavR mx-auto" justify="center">
            <!-- ICONE NAVIGAZIONE - SX class="avatar" -->

            <v-col class="iconavcS" cols="6">
              <!--
              <span
                v-if="categorie[C/10-1].sottocategorie.length > 1"
                class="mr-2"
                style="color:lightblue;"
              >
                <v-btn rounded>+</v-btn>
              </span>
              -->
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated fadeOutUp"
              >
                <v-btn rounded v-if="categorie[C/10-1].descrizione">
                  <a class="ml-4 mr-2">
                    <span
                      v-if="categorie[C/10-1].descrizione.length < 15"
                      class="mr-2"
                      style="color:lightblue;"
                    ></span>

                    <span class="mr-2" style="color:white;">{{categorie[C/10-1].descrizione}}</span>
                  </a>
                </v-btn>
              </transition>
            </v-col>

            <!-- v-col class="iconavcD" cols="3" style="background-color:orange !important"-->
            <v-col class="iconavcSbtnCategoriaCorrente" cols="2">
              <!--
              TODO: controllare transizione apparentemente non attiva
              -->

              <!-- categoria corrente -->
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated fadeOutUp"
              >
                <v-icon
                  class="AncIconColor"
                  large
                  dark
                  @click="gotoR(categorie[C/10-1].link)"
                >{{categorie[C/10-1].icona}}</v-icon>
              </transition>
              <!-- categoria corrente -->
            </v-col>

            <v-col class="iconavcSbtnMENU" cols="2">
              <!-- BTN MENU -->
              <v-btn icon v-model="iconX" @click.stop="setD">
                <v-icon v-if="drawerLeft" large>{{ iconO }}</v-icon>
                <v-icon v-else large>{{ iconC }}</v-icon>
              </v-btn>
              <!-- BTN MENU -->
            </v-col>
          </v-row>
        </v-col>

        <v-col class="rcC rcX rcC_BC" cols="4">
          <!--v-expand-transition v-show="!drawerLeft" -->
          <v-row class="rcCr rcCr_BC" align="center" justify="center" dense style="z-index: 2">
            <v-col class="rcCrcS rcCrcLat_BC">
              <div>lg - ANC</div>
            </v-col>

            <v-col class="rcCrcC rcCrcX rcCrcC_BC">
              <v-avatar class="avatar" size="48" right="true" v-if="!drawerLeft">
                <!-- drawer aperto-->

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
                  <v-icon size="32" @click="setDF">mdi-shield-half-full</v-icon>
                </v-expand-x-transition>
              </v-avatar>

              <!-- Avatar -->
            </v-col>

            <v-col class="rcCrcD rcCrcX rcCrcLat_BC">
              <div>TRADATE</div>
            </v-col>
          </v-row>

          <!--/v-expand-transition-->
        </v-col>

        <!--
        <v-col :class="rcD">
        -->
        <v-col :class="rcD">
          <!--
        <v-col class="rcD rcX rcLat rcLat_BC">
          -->
          <v-row class="iconavR mx-auto" justify="center">
            <!-- ICONE NAVIGAZIONE - SX -->
            <v-col class="iconavcS">
              <!--
              <div class="xxx">
                <v-icon
                  class="mx-2 AncIconColor"
                  large
                  dark
                  @click="gotoR(categorie[C/10-1].link)"
                >{{categorie[C/10-1].icona}}</v-icon>
              </div>
              -->

              <v-expand-x-transition>
                <v-icon v-show="!drawerLeft" class="mx-2 AncIconColor" large dark>mdi-magnify</v-icon>
              </v-expand-x-transition>

              <v-icon
                v-for="item in categorie[C/10-1].sottocategorie"
                :key="item.n"
                class="mx-2 AncIconColor"
                large
                dark
                @click="gotoR(item.link)"
                style="height: 30px;"
              >{{item.icona}}</v-icon>

              <!--
              <div v-if="categorie[C/10-1].sottocategorie.length == 0" class="AncTitleColor ma-2">NN</div>
              -->

              <!-- TEST OK -->
              <!--
              <v-btn icon class>
                <v-icon
                  class="mx-4 AncIconColor"
                  large
                  dark
                  @click="gotoR(categorie[C/10-1].link)"
                >{{categorie[C/10-1].icona}}</v-icon>
              </v-btn>
              -->
              <!-- TEST OK -->
            </v-col>
            <!-- ICONE NAVIGAZIONE - SX -->

            <!-- <v-col cols="0"></v-col> -->

            <!-- ICONE NAVIGAZIONE - DX style="height: 30px;" -->
            <v-col class="iconavcDD">
              <!-- v-app-bar -->
              <!--v-app-bar-nav-icon >
              </v-app-bar-nav-icon-->

              <v-btn icon v-model="iconX" @click.stop="setD">
                <v-icon v-if="drawerLeft" large>{{ iconO }}</v-icon>
                <v-icon v-else large>{{ iconC }}</v-icon>
              </v-btn>

              <!-- v-app-bar -->
              <!--
                <v-icon
                  @click.stop="setD"
                  class="mx-2 AncIconColor"
                  v-if="drawerLeft"
                  large
                >{{ iconOdx }}</v-icon>
                <v-icon @click.stop="setD" class="mx-2 AncIconColor" v-else large>{{ iconCdx }}</v-icon>
              -->

              <!--
                <v-btn icon class @click.stop="setD" v-model="iconX">
                  
                </v-btn>
              -->

              <!--
                <v-expand-x-transition>
                  <v-btn icon class v-show="!drawerLeft">
                   </v-btn>
                </v-expand-x-transition>
              -->
            </v-col>
            <!-- ICONE NAVIGAZIONE - DX -->
          </v-row>
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
      expandSC: "false",
      h: "80px",
      cab: "AncAppBarE cBE-Vis",
      iconX: "mdi-menu",
      //        iconC:"mdi-backburger",
      //        iconO:"mdi-tray-full",
      iconC: "mdi-dots-vertical",
      iconO: "mdi-menu-up",

      iconCdx: "mdi-menu-down",
      iconOdx: "mdi-menu-up",

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
    rcS: { type: String },
    rcD: { type: String },

    //colBarEst: { type: String },
    //colBarInt: { type: String },

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
    }
    /*
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
    */
  },
  updated() {
    /*this.setcolor();*/
  },
  mounted() {
    /*this.setcolor();*/
    this.h = this.height;
    //console.log(this.$vuetify.breakpoint);
  }
};
</script>

<style media="screen">
.iconavR {
  height: 100%;

  background-color: transparent !important;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
}

.iconavcSbtnCategoriaCorrente {
  position: relative;
  /*height: 80%;*/
  height: 100%;
  /* background-color: burlywood !important;*/
  text-align: center;
  padding-top: 12px;
}

.iconavcSbtnMENU {
  position: relative;
  /*height: 80%;*/
  height: 100%;
  /* background-color: GREEN !important; */
  text-align: center;
  padding-top: 5px;
}

.iconavcS {
  position: relative;
  /*height: 80%;*/
  height: 100%;
  background-color: transparent !important;
  text-align: left;
  padding-left: 5px;
}
.iconavcSD {
  /*height: 80%;*/
  height: 100%;
  background-color: transparent !important;
  text-align: right;
  padding-right: 15px;
}
.iconavcDD {
  /*height: 80%;*/
  height: 100%;
  background-color: transparent !important;
  text-align: right;
  padding-right: 20px;
  padding-top: 5px;
}
.ct {
  position: relative;
  background-color: aqua;
  height: 100%;
}
</style>
