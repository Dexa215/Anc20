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
        <v-col
          cols="5"
          class="colFotSx"
          style="background-color: transparent !important;"
        >
          <v-row
            class="mx-auto"
            justify="end"
            style="background-color: transparent !important;"
          >
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
                              max-height:50px "
          align="center"
        >
          <v-row class="rav" align="center" justify="center">
            <div>
              <v-avatar class="mx-auto my-auto avatarBottom">
                <img
                  src="/static/images/Icone/logoanc2000.png"
                  alt="ancTradate"
                  @click="gotoR('/')"
                  @mouseover="hoveravatar = true"
                  @mouseleave="hoveravatar = false"
                  style="
                      height: 20px; 
                      width:  20px;"
                />
              </v-avatar>
            </div>
          </v-row>
        </v-col>
        <!-- col2 CENTER -->

        <!-- dx -->
        <v-col
          cols="5"
          class="colFotDx"
          style="background-color: transparent !important;"
        >
          <v-row
            class="mx-auto"
            justify="start"
            style="background-color: transparent !important;"
          >
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
  name: "f1xs",

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
.avatarBottom {
  z-index: 5;
  max-width: 18px;
  max-height: 20px;
  transform: scale(1, 1);
}
.avatarBottom:hover {
  transform: scale(1.1, 1.1);
}
.colFotSx {
  align-content: flex-end;
  background-color: red !important;
}
.colFotDx {
  align-content: start;
  background-color: red !important;
}
.rav {
  height: 30px;
  background-color: transparent;
  opacity: 0.8;
  border-radius: 15px;
  margin-right: 10px;
  margin-left: 10px;
}
.av {
  height: 25px;
  width: 25px;
}
</style>
