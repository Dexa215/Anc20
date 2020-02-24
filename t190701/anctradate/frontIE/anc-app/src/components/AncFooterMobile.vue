<!--
<div class="pr-4"> </div>
<div class="pl-4"> </div>
<div class="px-4"> Powered by 2Pi-NT &copy; {{ new Date().getFullYear() }}</div>
<div></div>
-->

<template>
  <div>

    <!-- ***************************************************************************** -->
      <!-- AiF -->
          
      <div class="container-fluid text-center ma-0 pa-2" id="cf2">    
          <div>   
            <div class="container-fluid" >
              <v-flex xs12>
                <v-img
                  class="my-0"
                  contain
                  height="50"
                ></v-img>
              </v-flex>  

              <v-layout
                text-xs-center
                wrap
              >
                <v-flex xs12>
                        <v-img
                          :src="require('../assets/images/Icone/busS.png')"
                          class="my-3"
                          contain
                          height="100"
                        ></v-img>
                </v-flex>
              </v-layout>


        <!-- contattaci... -->
              <v-layout justify-center>
                <h3>{{menuCat}}</h3>
                <br>
                <p class="my-2">
                  Per qualsiasi informazione non presente in questa pagina non esitare a contattarci 
                  <br>
                    <v-chip
                      class="ma-4"
                      color="red"
                      text-color="white"
                      @click="gotoR('contatti/')"
                    >
                    <a>Contatti</a>
                    </v-chip>
                  <!-- class="headline font-weight-bold" -->  
                </p>
              </v-layout>
        <!-- contattaci... -->

        <!-- links -->
              <v-layout 
                justify-center
                text-center
              >
                <div>
                  <h3 class="headline font-weight-bold mb-3 text-center">Potrebbero interessarti...</h3>
                  <a
                    style="color:green"
                    v-for="(link, i) in linksFP"
                    :key="i"
                    @click="gotoR(link.link)"
                    class="subheading mx-3"
                    target="_blank"
                  >
                    <v-chip
                      v-show="link.link"
                      class="ma-2"
                      color="green"
                      text-color="white"
                    >
                      {{ link.descrizione }}
                    </v-chip>              
                  </a>
                </div>
              </v-layout>
        <!-- links -->    

              
              

            </div> <!--container fluid-->

            <div>    
                <v-card
                    class="d-flex pa-2"
                    outlined
                    tile
                    >
                        <div>
                            <h1 class="display-2 font-weight-bold mb-3">  
                                {{menuSubCat}}
                            </h1>

                            <p class="subheading font-weight-regular">
                                {{menuCat}}
                            </p>
                        </div>
                    
                </v-card>
            </div>
          </div>
      </div>

    <!-- AiF -->
    <!-- ***************************************************************************** -->


    <v-footer
      absolute
      app
      color="yellow"
      class="grey--text"
      dark
    >
      <div class="grey--text">
          <span class="font-weight-light">ANC </span>
          <span> Sezione "C.Bergia" Tradate </span>
          <span class="font-weight-light"> CF:95066440124 </span>
      </div>

      <v-spacer></v-spacer>
      <v-avatar
          text-center
          max-height=20
          min-height=15
      >
              <img
              src="../../src/assets/images/Icone/anclogo2012.gif"
              alt="ancTradate"
              max-height=100
              min-height=95
              @click="gotoR('/')"
              >
      </v-avatar>
      <span class="px-2">{{requestUser}}</span>
      <v-spacer></v-spacer>


      <div class="grey--text">
          <span class="font-weight-light"> Powered by </span>
          <span> 2Pi-NT &copy; </span>
          <span class="font-weight-light"> {{ new Date().getFullYear() }}</span>
      </div>
    </v-footer>
  </div>
</template>

<script>
import { apiService }         from "../common/api.service";
import router                 from "../router";

import AncIntestazioneFine  from "@/components/AncIntestazioneFine.vue";

  export default {

    name: "ancFooterMobile",

    props:{
        footercolor: String,
        requestUser: String,

        menuCat:
            {
                type: String,
            },
        menuSubCat:
            {
                type: String,
            },
        intMsg:
            {
                type: String,
            },
        intMsgSubH:
            {
                type: String,        
            },
        intFMsg:
            {
                type: String,
            },
        intFMsgSubH:
            {
                type: String,        
            },  

        linksfinepagina:
            {
                type : Array,                   
            }, 
        linksFP:
            {
                type : Array,                   
            },     
        src:
            {
                type: String,
            },
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
        console.log("rotta per...");
        router.push('/')
        router.push(r);
      },
    },

    computed: {
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
