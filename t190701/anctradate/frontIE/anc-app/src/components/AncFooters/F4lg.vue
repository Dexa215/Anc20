<template>
  <div>
    <v-footer fixed app :color="AncFooter_BC" class="grey--text" dark>
      <v-row
        dense
        class="AncFooter_r_BC ma-1 pu-1"
        style="max-height:550px; background-color:rgb(11, 26, 14);"
        align="center"
        justify="start"
      >
        <!-- large -->
        <!-- class="hidden-md-and-down" -->
        <!-- large -->
        <v-col class="hidden-md-and-down colFot" align="center" justify="center">
          <div class="grey--text">
            <span class="font-weight-light mx-2">ANC</span>
            <span>Sezione "C.Bergia" Tradate</span>
          </div>
        </v-col>
        <!-- large -->

        <!-- col2 CENTER -->
        <v-col
          style="background-color: transparent; 
                            max-height:150px "
          align="center"
          justify="start"
        >
          <div sytle="max-height:80px;">
            <v-avatar
              class="mx-4 my-0"
              max-height="90"
              max-width="90"
              min-height="50"
              min-width="50"
            >
              <img
                src="/static/images/Icone/logoanc2000.png"
                alt="ancTradate"
                @click="gotoR('/')"
                @mouseover="hoveravatar = true"
                @mouseleave="hoveravatar = false"
                style="
                    height: 50px; 
                    width:  50px;"
              />
            </v-avatar>
          </div>
        </v-col>
        <!-- col2 CENTER -->

        <!-- large -->
        <!-- class="hidden-md-and-down" -->
        <!-- large -->
        <v-col
          class="colFot hidden-md-and-down"
          style="background-color: transparent; 
                            max-height:90px; "
          align="center"
          justify="center"
        >
          <div class="grey--text">
            <span class="font-weight-light">CF:95066440124</span>
            <span class="font-weight-light">/ Powered by</span>
            <span>2Pi-NT &copy;</span>
            <span class="font-weight-light">{{ new Date().getFullYear() }}</span>
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

  methods: {
    gotoR(r) {
      this.expand = !this.expand;
      this.$store.dispatch("gotoR", r);
      /*console.log("AppBar B4LG rotta per...", r);
      this.$emit("gotoR", r);
      */
    }
  }
};
</script>

<style media="screen">
</style>
