{% load l10n %}
<template>
  <v-list-item-group rounded v-model="selectedItem" class="">
    <v-list-item v-for="(item, i) in categorie[C / 10 - 1].linksAmici" :key="i">
      <ancItem :item="item"></ancItem>
    </v-list-item>
  </v-list-item-group>
</template>
<script>
import AncItem from "@/components/AncRow/Item/ancItem.vue";

export default {
  name: "AncList",
  components: { AncItem },
  props: {},
  data(){return{};},
  computed: {
    categorie() { return this.$store.getters.categorie; },
    C() {         return this.$store.getters.getC;      },
    CS() {        return this.$store.getters.getCS;     }
  },
  methods: {}}
</script>
<style></style>
