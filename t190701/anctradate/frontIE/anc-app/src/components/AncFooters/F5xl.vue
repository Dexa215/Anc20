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
        <!-- extra-large -->
        <v-col cols="5" class="hidden-md-and-down colFot" align="end" justify="center">
          <div class="grey--text">
            <span class="font-weight-light">&nbsp;Associazione Nazionale Carabinieri &nbsp;</span>
          </div>
        </v-col>
        <!-- extra-large -->

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

            <span class="font-weight-light">&nbsp;Powered by&nbsp;</span>
            <span>
              <a href="https:/www.2piict.it" class="link2pi">
                &nbsp;2Pi-NT
                <!--img
                  src="/static/images/Icone/logoanc2000.png"
                  border="0"
                  alt="2pi ict consulting"
                  width="25"
                  height="25"
                /-->
              </a>
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
  name: "f5xl",

  props: {
    footercolor: String,
    requestUser: String,
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array }
  },

  data: () => ({
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
    }
  }
};
</script>

<style media="screen" scoped>
</style>
