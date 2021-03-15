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
                         max-height:550px; "
        align=          "center"
        justify=        "start"
      >
      
      <!-- @@@ -->
      <v-col  cols="12"
              v-if="currentres=='xs'"     
      >
        <f1xs
                                @gotoR= "gotoR"
        ></f1xs>
      </v-col>
      <v-col  cols="12"
              v-if="currentres=='sm'"     
      >
        <f2sm
                                @gotoR= "gotoR"
        ></f2sm>
      </v-col>
      <v-col  cols="12"
              v-if="currentres=='md'"     
      >
        <f3md
                                @gotoR= "gotoR"
        ></f3md>
      </v-col>
      <v-col  cols="12"
              v-if="currentres=='lg'"     
      >
        <f4lg
                                @gotoR= "gotoR"
        ></f4lg>
      </v-col>
      <v-col  cols="12"
              v-if="currentres=='xl'"     
      >
        <f5xl
                                @gotoR= "gotoR"
        ></f5xl>
      </v-col>                        
      
      
      <!-- @@@ -->  

        

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


        

      </v-row>
      <!--
      <v-spacer></v-spacer>
      <span class="px-2">{{requestUser}}</span>
      <v-spacer></v-spacer>
      -->
    </v-footer>
  </div>
</template>