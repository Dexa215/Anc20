<template>
  <div>
    <v-footer
      fixed
      app
      :color="AncFooter_BC"
      class="grey--text"
      dark
    >
      <v-row
        dense
        align="center"
        justify="start"
        :class="Fcl"
      >
        <!--
        class="AncFooter_r_BC ma-1 pu-1"
        style="max-height:550px; background-color:rgb(11, 26, 14);"
        -->

        <!-- large -->
        <!-- class="hidden-md-and-down" -->
        <!-- large -->
        <v-col
          cols="5"
          class="hidden-md-and-down colFot"
          align="end"
          justify="center"
        >
          <div class="grey--text">
            <span class="font-weight-light mx-2">Associazione Nazionale Carabinieri</span>
          </div>
        </v-col>
        <!-- large -->

        <!-- col2 CENTER -->
        <v-col
          cols="2"
          style="background-color: transparent; 
                            max-height:150px "
          align="center"
          justify="start"
        >
          <!--<div sytle="max-height:80px;"></div>-->
          <!--
              class="mx-4 my-0"
              max-height="90"
              max-width="90"
              min-height="50"
              min-width="50"
              -->
          <!--<v-avatar :class="avt_cl"></v-avatar>-->
          <!--
                style=" height: 50px; width: 50px;"
              -->
          <img
            src="/static/images/Icone/logoanc2000.png"
            alt="ancTradate"
            @click="gotoR('/')"
            @mouseover="hoveravatar = true"
            @mouseleave="hoveravatar = false"
            :class="ico_cl"
          />
        </v-col>
        <!-- col2 CENTER -->

        <!-- large -->
        <!-- class="hidden-md-and-down" -->
        <!-- large -->
        <v-col
          cols="5"
          class="colFot hidden-md-and-down"
          style="background-color: transparent; 
                            max-height:90px; "
          align="start"
          justify="center"
        >
          <div class="grey--text">
            <span>&nbsp;Sezione "C.Bergia" Tradate - &nbsp;</span>
            <span class="font-weight-light">&nbsp;CF:95066440124 &nbsp;</span>

            <span class="font-weight-light">&nbsp;-</span>
            <span>
              <a href="https:/www.2piict.it">&nbsp;2Pi-NT</a>
            </span>
            <span>&nbsp;&copy;&nbsp;</span>
            <span class="font-weight-light">{{ new Date().getFullYear() }}&nbsp;</span>
          </div>
        </v-col>
        <!-- large -->
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "f4lg",

  props: {
    footercolor: String,
    requestUser: String,
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array }
  },

  data: () => ({
    /*AncAppBar_BC: "rgb(19, 21, 36)" /* blue */
    AncFooter_BC: "rgb(28, 43, 31)" /* green */,

    AncFooter_r_BC: "rgb(11, 26, 14)" /* green */,

    colordefault: "footercolor",
    //        requestUser: "...",
    requestUserIsStaff: false,
    requestUserIsSuper: false,

    icons: ["home", "mail", "event", "delete"],
    items: ["default", "absolute", "fixed"],
    fixed: true,
    padless: false,
    variant: "default"
  }),

  computed: {
    /*Fcl Anc Footer Class*/
    Fcl () {
      var bb = this.$store.getters.getbarBIG;
      var std = "AncFooter_r_BC ma-1 pu-1 ANCbrd";
      if (bb === true) {
        std += " BBclass";
      } else {
        std += " SSclass";
      }
      return std;
    },
    /*avatar Class*/
    avt_cl () {
      var bb = this.$store.getters.getbarBIG;
      var std = "mx-4 my-0";
      if (bb === true) {
        std += " BBic";
      } else {
        std += " SSic";
      }
      return std;
    },
    /*icon Class*/
    ico_cl () {
      var bb = this.$store.getters.getbarBIG;
      var std = "mx-4 my-0";
      if (bb === true) {
        std += " BBic";
      } else {
        std += " SSic";
      }
      return std;
    }
  },

  methods: {
    gotoR (r) {
      console.log("Anc FOOTER LG - gotoR", r);
      this.expand = !this.expand;
      this.$store.dispatch("gotoR", r);
    }
  }
};
</script>

<style media="screen" scoped>
.BBclass {
  height: 150px;
  border-radius: 75px;
  background-color: rgb(11, 26, 14);
  transition: height 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.5), border-radius 0.5s;
}
.SSclass {
  height: 75px;
  border-radius: 37px;
  background-color: rgb(11, 26, 14);
  transition: height 0.8s, background-color 2s, border-radius 0.5s;
}

.BBic {
  height: 90px;
  width: 90px;
  border-radius: 45px;

  transition: height 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.5),
    width 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.5), border-radius 0.5s;
}
.SSic {
  height: 50px;
  width: 50px;
  border-radius: 25px;

  transition: height 0.8s, width 0.8s, background-color 2s, border-radius 0.5s;
}
</style>
