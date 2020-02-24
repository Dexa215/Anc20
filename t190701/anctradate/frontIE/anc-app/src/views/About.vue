<template>
  <div class="about">
    <HelloWorld msg="ANC Tradate | about" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "about",
  
  components: {
    HelloWorld
  },

  methods:{
    setMyPar(){
      let myparam={
        Ccurrent:         9000,
        CScurrent:        0,
      }
        this.$emit("spMC",myparam)
    },        
    gotoR(r){
        console.log("rotta per...");
        this.$emit("gotoR",r)
    },
  },
  
  created(){
    console.log("about oncreate --> start");
    //this.setMyPar();
  }

};
</script>
