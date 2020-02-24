<template>
  <div class="bacheca">
    <HelloWorld msg="ANC Tradate | bacheca" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AncCard              from "@/components/AncCard.vue";

export default {
  name: "bacheca",
  components: {
    HelloWorld
  }


  
};
</script>
