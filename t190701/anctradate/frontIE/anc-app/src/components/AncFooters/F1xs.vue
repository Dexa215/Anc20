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
                          max-height:550px; "
          align=          "center"
          justify=        "start"
      >
          <!-- Smartphone -->
          <v-col
            cols="12"      
            class=          "colFotSmallUp" 
            align=          "center"
            justify=        "center"      
          >
            <div class="grey--text">
                <span class="font-weight-light"> ANC Tradate f1xs</span>
            </div>
          </v-col>
          <!-- Smartphone -->

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
  export default {
    name: "f1xs",
    
    props:{
        footercolor: String,
        requestUser: String,
        C:              {type: Number,},
        CS:             {type: Number,},
        categorie:      {type: Array,},   
    },

    data: () => ({
    }),
    methods:{
      gotoR(r){
        console.log("f1xs rotta per...");
        this.$emit("gotoR",r)
        },
    },
  }
</script>

<style media="screen">
</style>
