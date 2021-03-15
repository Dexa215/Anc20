<template lang="html">
    <v-system-bar dark color="orange darken-2">
    <div class="flex-grow-1"></div>
    <v-icon>mdi-wifi-strength-4</v-icon>
    <v-icon>mdi-signal-cellular-outline</v-icon>
    <v-icon>mdi-battery</v-icon>
    <span>12:30</span>
  </v-system-bar>
</template>

<script>
export default {
    name: "ancSystem",
    data() {
      return {
          requestUser: "...",
          requestUserIsStaff: false,
          requestUserIsSuper: false,
          elevateOnScroll: false,
          hideOnScroll: false,
          fadeOnScroll: false,
          fadeImgOnScroll: false,
          invertedScroll: false,
          collapse: false,
          collapseOnScroll: true,
          shrinkOnScroll: false,
          extended: false,
          color: 'accent',
          colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'orange'],
      };
    },
    props: {
      //msg: String,
      //auth_user: String
    },
    methods: {
    },
    created() {
      document.title = "ANC Tradate";
    }
};
</script>

<style lang="css" scoped>
</style>
