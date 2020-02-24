<template>
  <div class="eventi">
    <HelloWorld msg="ANC Tradate | eventi" />
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld           from "@/components/HelloWorld.vue";
import AncCard              from "@/components/AncCard.vue";

export default {
  name: "eventi",
  components: {
    AncCard,
    HelloWorld
  }
};
</script>
