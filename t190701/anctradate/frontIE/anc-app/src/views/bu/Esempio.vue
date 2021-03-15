<template>
  <div class="contatti">
    <HelloWorld msg="ANC Tradate | esempio" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AncCard              from "@/components/AncCard.vue";

export default {
  name: "esempio",
  components: {
    HelloWorld
  }
};
</script>

<style lang="css" scoped>
</style>
