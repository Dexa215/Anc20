<template> 
    <div class="Ancintestazione text-right">
        <!-- src="/static/images/HomePageCarousel/dsc32.jpg" -->
        <!-- src=   "../../src/assets/images/HomePageCarousel/dsc32.jpg" -->
        <v-parallax 
            v-if="C!=10"
            src="/static/images/HomePageCarousel/dsc32.jpg"
            height= "200"
            width=  "100%"
        >
            <div>    
                <AncCardCat
                    :C=               "C"
                    :CS=               "CS"
                    :categorie=       "categorie"
                    @gotoR=           "gotoR"
                ></AncCardCat>   
            </div>

        </v-parallax>


        <!-- src="../../src/assets/images/bg/bg8.jpg" -->
        <!-- home page -->
        <v-parallax
            v-else 
            src="/static/images/bg/bg8.jpg"
            height= "200"
            width=  "100%"
        >
            <div>    
                <AncCardCat
                    :C=               "C"
                    :CS=               "CS"
                    :categorie=       "categorie"
                    @gotoR=           "gotoR"
                ></AncCardCat>   
            </div>
        </v-parallax>
    </div>
</template>

<script>
import router               from "../router";
import AncCard              from "@/components/AncCard.vue";
import AncCardCat           from "@/components/AncCardCat.vue";

  export default {
    name: "ancIntestazione",

    components: {
        AncCard,
        AncCardCat
    },

    props: {
        linksFP:        {type: Array,},    
        alignment:      {type: String,},
        justify:        {type: String,},

        C:              {type: Number,},
        CS:             {type: Number,},
        categorie:      {type:Array,},        
    },

    data() {
        return {
            nreq: "",

            src1: "",
            src2: "../../src/assets/images/HomePageCarousel/Imm021w.jpg",//sede

        }
    },        

    methods:{
        gotoR(r){this.$emit("gotoR",r)},            
    },

  }
</script>

<style media="screen">

.container-fluid {
    background-color:white;
    width: 100% ;
}

.h3 {
    color:orangered;
}

</style>
