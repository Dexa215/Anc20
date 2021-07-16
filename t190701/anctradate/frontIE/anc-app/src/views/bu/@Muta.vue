{% load l10n %}

<template> </template>

<script>
export default {
  name: "timeline4lg",
  components: {},

  props: {},
  data () {
    return {};
  },
  computed: {},

  methods: {
    gotoR (r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    v (link) {
      /*tis.$emit("vola", link);*/
      this.$store.dispatch("vola", link);
    }
  },
  created () { },
  updated () { },
  mounted () { }
};
</script>

<style media="screen" scoped></style>
