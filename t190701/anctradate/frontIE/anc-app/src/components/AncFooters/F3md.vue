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
        <!-- medium -->
        <v-col cols="5" class="colFot" align="end" justify="center">
          <div class="grey--text">
            <span class="font-weight-light">ANC&nbsp;|&nbsp;</span>
            <span>Sezione "C.Bergia" Tradate</span>
          </div>
        </v-col>
        <!-- medium -->

        <!-- col2 CENTER -->
        <v-col
          cols="2"
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

        <!-- medium -->
        <!-- v-if="currentres=='md'" -->
        <!-- medium -->
        <v-col
          cols="5"
          class="colFot"
          style="background-color: transparent; 
                            max-height:90px; "
          align="start"
          justify="center"
        >
          <div class="grey--text">
            <span class="font-weight-light">CF:95066440124</span>
            <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 2Pi-NT &copy;</span>
            <span class="font-weight-light">{{ new Date().getFullYear() }}</span>
          </div>
        </v-col>
        <!-- medium -->
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "f3md",

  props: {
    footercolor: String,
    requestUser: String,
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array }
  },

  data: () => ({}),
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