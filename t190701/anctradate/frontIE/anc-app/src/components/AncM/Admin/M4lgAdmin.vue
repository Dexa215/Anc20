<template>
  <v-row class="rmvcolrSadmin">
    <v-col class="cPAdmin-pre" cols="8">{{admincommands}}</v-col>
    <v-col class="cPAdmin">
      <v-list shaped dark class="ancM4l ancM4l_BC">
        <!--
      <v-list dark shaped class="adminList">
        -->
        <div class="display-1">
          <a>Comandi Amministratore</a>
        </div>
        <v-list-item class="tile" @click="gotoR('event/')">
          <v-list-item-content>
            <v-list-item-title>Nuovo Evento</v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-timeline-plus</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "m4lgAdmin",

  components: {},

  props: {
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array }
  },

  data() {
    return {
      dark: "true"
    };
  },
  methods: {
    gotoR(r) {
      this.drawerRight = false;
      this.setDF();
      console.log("M4lg rotta per...");
      /*TODO: fare scomparire il menu...*/
      this.$emit("gotoR", r);
    },
    setDF() {
      this.$emit("setDF");
    }
  }
};
</script>

<style media="screen">
.cPAdmin-pre {
  background-color: transparent !important;
}
.cPAdmin {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgb(7, 14, 85);
  height: 600px;
  border-radius: 0px 15px 15px 15px;
}
</style>





