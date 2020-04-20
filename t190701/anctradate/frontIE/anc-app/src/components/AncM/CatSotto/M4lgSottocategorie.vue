<template>
  <div class="box">
    <v-list shaped dark class="ancM4l ancM4l_BC">
      <!-- color="rgb(36, 17, 6)" -->
      <v-list-item
        class="tileM listSC"
        v-for="item in categorie[C/10-1].sottocategorie"
        :key="item.n"
        @click="gotoR(item.link)"
        link
      >
        <v-list-item-content class="itemSC">
          <v-btn rounded>
            <v-list-item-title>{{ item.descrizione }}</v-list-item-title>
          </v-btn>
        </v-list-item-content>
        <!--
        <v-list-item-icon style="background-color:yellow">
          <v-icon>{{ item.icona }}</v-icon>
        </v-list-item-icon>
        -->
        <v-icon
          class="AncIconColor"
          large
          dark
          @click="gotoR(item.link)"
          style="height: 30px;"
        >{{item.icona}}</v-icon>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name: "m4lgSottocategorie",

  props: {
    C: { type: Number },
    CS: { type: Number },
    categorie: { type: Array },
    drawerRight: { type: Boolean },
    drawerSottocategoria: { type: Boolean }
  },

  data() {
    return {};
  },
  methods: {
    gotoR(r) {
      this.drawerRight = false;
      this.setDF();
      console.log("M4lg rotta per...");
      this.$emit("gotoR", r);
    },
    ctlD() {
      let d = this.drawerRight;
      console.log("d:", d);
      if (d === false) {
        this.$emit("setDF");
      }
    },
    setD() {
      let d = this.drawerRight;
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
    setC() {
      if (requestUserIsStaff === "true") {
        this.navbarcolor = "red";
      } else {
        this.navbarcolor = "grey";
      }
    }
  }
};
</script>


<style media="screen">
.box {
  height: 300px;
  text-align: right;
  padding-left: 70px;
  padding-right: 0px;
}

.itemSC {
  padding-right: 20px;
}

.listSC {
  height: 30px;
  padding-right: 70px;
}
</style>





