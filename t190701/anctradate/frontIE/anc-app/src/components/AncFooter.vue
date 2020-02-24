<!--
<div class="pr-4"> </div>
<div class="pl-4"> </div>
<div class="px-4"> Powered by 2Pi-NT &copy; {{ new Date().getFullYear() }}</div>
<div></div>
-->

<template>
  <div>

    <v-footer
      fixed
      app
      color="dark-grey"
      class="grey--text"
      dark
    >
      


      <v-row 
        dense
        class=          "rowFot ma-1 pu-1"  
        style=          "background-color: red; 
                         max-height:150px; "
        align=          "center"
        justify=        "start"
      >

        <!-- smartphone 
        <v-col
          cols="12"
          class="colFotS hidden-md-and-up" 
          style="max-height:40px;
                 min-height:40px;
                 "
          align=          "center"
          justify=        "center"
        >
        </v-col>
        <!-- smartphone -->



        <!-- Smartphone -->
        <v-col
          cols="12"
          v-if="currentres=='xs'"        
          class=          "colFotSmallUp" 
          align=          "center"
          justify=        "center"      
        >
          <div class="grey--text">
              <span class="font-weight-light"> ANC Tradate</span>
          </div>
        </v-col>
        <!-- Smartphone -->
        <!-- Smartphone -->
        <v-col
          cols="12"
          v-if="currentres=='sm'"        
          class=          "colFotSmallUp" 
          align=          "center"
          justify=        "center"      
        >
          <div class="grey--text">
              <span class="font-weight-light"> ANC Tradate </span>
          </div>
        </v-col>
        <!-- Smartphone -->


        <!-- medium -->
        <v-col
          v-if="currentres=='md'"        
          class=          "colFot" 
          align=          "center"
          justify=        "center"      
        >
          <div class="grey--text">
              <span class="font-weight-light">ANC </span>
              <span> Sezione "C.Bergia" Tradate </span>
          </div>
        </v-col>
        <!-- medium -->

        <!-- large -->
        <v-col  
          class=          "hidden-md-and-down colFot" 
          align=          "center"
          justify=        "center"      
        >
          <div class="grey--text">
              <span class="font-weight-light">ANC </span>
              <span> Sezione "C.Bergia" Tradate </span>
          </div>
        </v-col>
        <!-- large -->






        <!-- col2 CENTER -->
        <v-col
           style=         "background-color: transparent; 
                            max-height:150px "
          align=          "center"
          justify=        "start"
        >
          <div sytle= "max-height:80px;"> 
            <v-avatar
                class ="mx-4 my-0"
                max-height= 90
                max-width=  90
                
                min-height= 50
                min-width=  50
            >
              <img
                  src="/static/images/Icone/logoanc2000.png"
                  alt="ancTradate"
                  @click="gotoR('/')"
                  @mouseover="hoveravatar = true"
                  @mouseleave="hoveravatar = false"
                  style="
                    height: 50px; 
                    width:  50px;"
              >
            </v-avatar>        
          </div>
        </v-col>
        <!-- col2 CENTER -->



        <!-- col3 --> 
        <v-col
          class="colFot hidden-md-and-down" 
          style=          "background-color: transparent; 
                            max-height:90px; "
          align=          "center"
          justify=        "center"      
        >
          <div class="grey--text">
              <span class="font-weight-light"> CF:95066440124 </span>
              <span class="font-weight-light"> / Powered by </span>
              <span> 2Pi-NT &copy; </span>
              <span class="font-weight-light"> {{ new Date().getFullYear() }}</span>
          </div>
        </v-col>
        <!-- col3 --> 
        
        <!-- medium --> 
        <v-col
          v-if="currentres=='md'"        
          class="colFot" 
          style=          "background-color: transparent; 
                            max-height:90px; "
          align=          "center"
          justify=        "center"      
        >
          <div class="grey--text">
              <span class="font-weight-light"> CF:95066440124 </span>
              <span> / 2Pi-NT &copy; </span>
              <span class="font-weight-light"> {{ new Date().getFullYear() }}</span>
          </div>
        </v-col>
        <!-- medium --> 


        <!-- Smartphone -->
        <v-col
          cols="12"
          class=          "hidden-md-and-up colFotSmallDown" 
          align=          "center"
          justify=        "center"      
        >
          <div class="grey--text">
              <span class="font-weight-light"> CF:95066440124 </span>
          </div>
          <div class="grey--text">
              <span class="font-weight-light"> Powered by </span>
              <span> 2Pi-NT &copy; </span>
              <span class="font-weight-light"> {{ new Date().getFullYear() }}</span>
          </div>
        </v-col>
        <!-- Smartphone -->

      </v-row>
      <!--
      <v-spacer></v-spacer>
      <span class="px-2">{{requestUser}}</span>
      <v-spacer></v-spacer>
      -->
    </v-footer>
  </div>
</template>

<script>
import { apiService }         from "../common/api.service";
import router                 from "../router";

import AncIntestazioneFine  from "@/components/AncIntestazioneFine.vue";

  export default {

    name: "ancFooter",

    props:{
        footercolor: String,
        requestUser: String,

        C:              {type: Number,},
        CS:             {type: Number,},
        categorie:      {type: Array,},   
    },


    data: () => ({

        colordefault : 'footercolor',
//        requestUser: "...",
        requestUserIsStaff: false,
        requestUserIsSuper: false,

      icons: [
        'home',
        'mail',
        'event',
        'delete',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      fixed:    true,
      padless:  false,
      variant: 'default',

    }),
    methods:{
      gotoR(r){
        console.log("AppBar rotta per...");
        this.$emit("gotoR",r)
        },
    },

    mounted () {
      console.log(this.$vuetify.breakpoint)
    },

    computed: {
      imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': 
          console.log("xs")
          return '220px' 
          case 'sm': 
          console.log("sm")
          return '400px'
          case 'md': 
          console.log("md")
          return '500px'
          case 'lg':
          console.log("lg")
          return '600px'
          case 'xl':
          console.log("lg") 
          return '800px'
        }
      },

      currentres () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': 
          console.log("xs") 
          return 'xs' 
          case 'sm': 
          console.log("sm") 
          return 'sm'
          case 'md': 
          console.log("md") 
          return 'md'
          case 'lg': 
          console.log("lg") 
          return 'lg'
          case 'xl': 
          console.log("xl") 
          return 'xl'
        }
      },  


  	  localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },


  






  }
</script>

<style media="screen">


.rowFot{
    background-color: orange !important;
}
.rowFotS{
    background-color: lightblue !important;
}

.colFot{
    background-color: transparent !important;
}

.colFotS{
    background-color: lightblue !important;
}

.colFotSmallUp{
    background-color: lightblue !important;
    min-height: 30px;
    max-height: 30px;
}
.colFotSmallDown{
    background-color: lightblue !important;
    min-height: 60px;
    max-height: 60px;
}

.AncAppBar{
    z-index: 3;
    background-color: brown !important;
    min-height: 80px;
    max-height: 84px;
    align:    center;
    justify:  center;
}

.colbarsx{
  background-color: purple !important;
  min-height: 76px;
  text-align:        start;
  padding: 12px 10px;
}

.colbardx{
  background-color: purple !important;
  min-height: 76px;
  text-align:        end;
  padding: 12px 10px;    
}


.colAvSx{
  background-color: orange !important;
  text-align:        end;
  min-height: 22px;
  max-height: 80px;
  padding: 22px 10px;   
}
.colAvDx{
  background-color: orange !important;
  text-align:        start;
  min-height: 22px;
  max-height: 80px;
  padding: 22px 10px;    
}




.avatar{
  background-color: green !important;
  color: green;
  right: "true";

  size: 62;                 
  tile:  false;

  min-width:    65px;

  max-height:   75px;
  max-width:    75px;   
}
         


</style>
