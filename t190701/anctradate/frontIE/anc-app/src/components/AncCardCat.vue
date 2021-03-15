<template> 
    <div>
        <!-- cat -->
        <v-row
            class="pa-1 t r120"
            align="end"
            justify="center"
        >
            <v-col
                class="t c110"
                cols="12"
                align="center"
                justify="end"
            >
                <v-icon
                    class="mx-4 AncIconColor"
                    large
                    dark
                    @click="gotoR(categorie[C/10-1].link)"
                >
                    {{categorie[C/10-1].icona}}
                </v-icon>
                <h2 
                    class="display-2 font-weight-bold AncTitleColor" 
                >
                    {{categorie[C/10-1].descrizione}}
                </h2>
            </v-col>    
        </v-row>
        <!-- sottocategoria -->
        <v-row
            class="t r70 pa-1"
            style=""
            align="center"
            justify="center"
        >
            <v-col
                class="t c60 pa-1"
                style=""
                cols="12"
                align="center"
                justify="center"
            >
                <v-icon
                    v-for="item in categorie[C/10-1].sottocategorie"
                    :key="item.n"
                    class="mx-4 AncIconColor"
                    large
                    dark
                    @click="gotoR(item.link)"
                    style="height: 50px;"
                >
                    {{item.icona}}
                </v-icon>
                <div
                    v-if="categorie[C/10-1].sottocategorie.length == 0"
                    class="AncTitleColor ma-2"
                >
                </div>
                <div
                    v-else
                    class="AncTitleColor ma-2"
                >
<!--
                    <h3     v-if="categorie[C/10-1].sottocategorie.length == 0">nessuna sottocategoria</h3>
                    <h3     v-else-if="categorie[C/10-1].sottocategorie.length == 1">sottocategoria fittizia</h3>
                    <h3     v-else>{{categorie[C/10-1].sottocategorie.length}} sottocategorie</h3>
-->
                </div>
            </v-col>
        </v-row> 
    </div>
</template>

<script>

import router               from "../router";

export default {
    name: "ancCardCat",

    props: {
                C:              {type: Number,},
                CS:             {type: Number,},
                categorie:      {type:Array,},
    },

    data() {
        return {
            src2: "../../src/assets/images/HomePageCarousel/Imm021w.jpg",//sede 
            dense: false,
        }
    },        
    methods:{
        gotoR(r){
        //console.log("rotta per...",r);
        this.$emit("gotoR",r)
        },
    },
  }
</script>

<style media="screen">
.r70{
    height: 70px;  
}
.c60{
    height: 60px;  
}
.r120{
    height: 120px;  
}
.c110{
     height: 110px;  
}                               
.t{
    background-color: transparent !important;
}
</style>