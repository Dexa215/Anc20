<template>
  <!-- @@@ -->
  <div v-if="currentres == 'xs'">
    <f1xs
      :footercolor="footercolor"
      :requestUser="requestUser"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      @gotoR="gotoR"
    ></f1xs>
  </div>
  <div v-else-if="currentres == 'sm'">
    <f2sm
      :footercolor="footercolor"
      :requestUser="requestUser"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      @gotoR="gotoR"
    ></f2sm>
  </div>
  <div v-else-if="currentres == 'md'">
    <f3md
      :footercolor="footercolor"
      :requestUser="requestUser"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      @gotoR="gotoR"
    ></f3md>
  </div>
  <div v-else-if="currentres == 'lg'">
    <f4lg
      :footercolor="footercolor"
      :requestUser="requestUser"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      @gotoR="gotoR"
    ></f4lg>
  </div>
  <div v-else-if="currentres == 'xl'">
    <f5xl
      :footercolor="footercolor"
      :requestUser="requestUser"
      :C="C"
      :CS="CS"
      :categorie="categorie"
      @gotoR="gotoR"
    ></f5xl>
  </div>
  <!-- @@@ -->
</template>

<script>
import { apiService } from "@/common/api.service";
import router from "@/router";

//import AncIntestazioneFine  from "@/components/AncIntestazioneFine.vue";

import f1xs from "@/components/AncFooters/F1xs.vue";
import f2sm from "@/components/AncFooters/F2sm.vue";
import f3md from "@/components/AncFooters/F3md.vue";
import f4lg from "@/components/AncFooters/F4lg.vue";
import f5xl from "@/components/AncFooters/F5xl.vue";

export default {
  name: "ancFooter",

  components: {
    f1xs,
    f2sm,
    f3md,
    f4lg,
    f5xl
  },

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
    gotoR (r) {
      console.log("Anc FOOTER rotta per...", r);
      this.$emit("gotoR", r);
    }
  },

  mounted () {
    console.log(this.$vuetify.breakpoint);
  },

  computed: {
    imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          console.log("xs");
          return "220px";
        case "sm":
          console.log("sm");
          return "400px";
        case "md":
          console.log("md");
          return "500px";
        case "lg":
          console.log("lg");
          return "600px";
        case "xl":
          console.log("lg");
          return "800px";
      }
    },

    currentres () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          console.log("xs");
          return "xs";

        case "sm":
          console.log("sm");
          return "sm";

        case "md":
          console.log("md");
          return "md";

        case "lg":
          console.log("lg");
          return "lg";

        case "xl":
          console.log("xl");
          return "xl";
      }
    },

    localAttrs () {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    }
  }
};
</script>

<style media="screen">
.AncFooter_r_BC {
  background-color: green; /* rgb(11, 26, 14);*/
  border-radius: 40px;
} /* green */

.rowFot {
  /* background-color: orange !important;*/
  border-radius: 40px;
  background-color: green !important;
}
.rowFotS {
  background-color: lightblue !important;
}

.colFot {
  background-color: transparent !important;
}

.colFotS {
  background-color: lightblue !important;
}

.colFotSmallUp {
  background-color: lightblue !important;
  min-height: 30px;
  max-height: 40px;
}
.colFotSmallDown {
  background-color: transparent !important;
  min-height: 30px;
  max-height: 40px;
}
</style>
