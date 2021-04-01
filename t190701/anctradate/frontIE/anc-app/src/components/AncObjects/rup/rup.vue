<template>
  <v-row
    class="rup"
    align="end"
  >
    <v-col
      cols="9"
      class="cup mx-auto display-2"
    >{{ lang.text1 }}</v-col>
  </v-row>
</template>

<script>
export default {
  name: "rup",
  components: {},
  props: {},
  data () {
    return {};
  },
  computed: {
    lang () {
      return this.$store.getters.getCurrentLanguage;
    }
  },
  methods: {},
  created () { },
  updated () { }
};
</script>

<style media="screen" scope>
.rup {
  background-color: aliceblue !important;
  height: 50%;
  width: 100%;
  border-radius: 250px 250px 0px 0px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 2px;
}
.cup {
  background-color: transparent !important;
  height: 70px;
  width: 100px;
}
</style>
