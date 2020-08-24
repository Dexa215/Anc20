<template>
  <div>
    <v-footer fixed app :color="AncFooter_BC" class="grey--text" dark>
      <!--
      <v-row
        dense
        class="rowFot ma-1 pu-1"
        style="background-color: red; 
                          max-height:550px; "
        align="center"
        justify="start"
      >
      -->
      <v-row
        dense
        class="AncFooter_r_BC ma-0 pu-1"
        style="max-height:550px; background-color:rgb(11, 26, 14);"
        align="center"
        justify="center"
      >
        <!-- Smartphone -->
        <!--
        <v-col cols="12" class="colFotSmallUp" align="center" justify="center">
          <div class="grey--text">
            <span class="font-weight-light">ANC Tradate f1xs</span>
          </div>
        </v-col>
        -->
        <!-- Smartphone -->

        <!-- sx -->
        <v-col cols="5" class="colFotSx" style="background-color: transparent !important;">
          <v-row class="mx-auto" justify="end" style="background-color: transparent !important;">
            <div class="grey--text mr-1">
              <span class="font-weight-light mx-2">Sez."C.Bergia"</span>
            </div>
          </v-row>
        </v-col>
        <!-- sx -->

        <!-- col2 CENTER -->
        <v-col
          cols="2"
          class="mx-auto"
          style="background-color: transparent; 
                              max-height:150px "
          align="center"
        >
          <div sytle="max-height:80px;">
            <v-avatar
              class="mx-auto my-0 avatarBottom"
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

        <!-- dx -->
        <v-col cols="5" class="colFotDx" style="background-color: transparent !important;">
          <v-row class="mx-auto" justify="start" style="background-color: transparent !important;">
            <div class="grey--text ml-1">
              <span class="font-weight-light">CF:95066440124</span>
            </div>
          </v-row>
        </v-col>
        <!-- dx -->

        <!--
      <v-spacer></v-spacer>
      <span class="px-2">{{requestUser}}</span>
      <v-spacer></v-spacer>
        -->
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "f2sm",

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