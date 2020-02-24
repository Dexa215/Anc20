<template> 

  <v-card>
      <v-navigation-drawer

        expand-on-hover
        permanent
        clipped
        
        :mini-variant.sync="mini"

        v-model="drawerLeft"
        app
       
      >
          <v-list
            @close=                 "navi"
            @click=                 "navi"
          >
            <v-img
              class="ma-4 justify-center text-alignment-center"
              src= "/static/images/Icone/anclogo7.gif"   
              max-width="50"
              max-height="50"
            >
            </v-img>        
          
            <v-list-item  @click = "gotoR('/')">
                  <v-list-item-action>
                      <v-icon>mdi-shield-half-full</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                      <v-list-item-title>Home</v-list-item-title>
                  </v-list-item-content>
            </v-list-item>

            <v-list-item  @click = "gotoR('sede')">
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>Sede</v-list-item-title>
                    </v-list-item-content>
            </v-list-item>

            <v-list-item  @click = "gotoR('sedeorari')">
                  <v-list-item-action>
                      <v-icon>mdi-clock-outline</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                      <v-list-item-title>Orari</v-list-item-title>
                  </v-list-item-content>
            </v-list-item>

            <v-list-item  @click = "gotoR('contatti')">
                  <v-list-item-action>
                      <v-icon>mdi-face-agent</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                      <v-list-item-title>Contatti</v-list-item-title>
                  </v-list-item-content>
            </v-list-item>

            <v-list-item  @click = "gotoR('chisiamo')">
                    <v-list-item-action>
                        <v-icon>mdi-account-group</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Chi siamo</v-list-item-title>
                    </v-list-item-content>
              </v-list-item>

          <v-list-item  @click = "gotoR('agenda')">
                <v-list-item-action>
                    <v-icon>mdi-calendar-multiple</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Agenda</v-list-item-title>
                </v-list-item-content>
          </v-list-item>

          <v-list-item  @click = "gotoR('archivio')">
                <v-list-item-action>
                    <v-icon>mdi-archive</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Archivio</v-list-item-title>
                </v-list-item-content>
          </v-list-item>

          <v-list-item  @click = "gotoR('links')">
                <v-list-item-action>
                    <v-icon>mdi-link-variant</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Links</v-list-item-title>
                </v-list-item-content>
          </v-list-item>




    <!--
    <v-list-item @click.stop="left = !left">
    -->

        </v-list>
      </v-navigation-drawer>
      
  </v-card>    

</template>

<script>
import router       from "../router";

  export default {
    name: "ancAppDrawerLeft",

    data() {
        return {

        mini: true,  

        iconX:"",
//      "mdi-alien-outline"
        iconC:"mdi-backburger",
        iconO:"mdi-tray-full",

        requestToken: "",
        rvt:10,

        breweries: [],
        isLoading: false,
        tree: [],
        types: [],
      
        footercolor:'#0052cc',

        right:              false,
        left:               false,

        elevateOnScroll:    false,
        hideOnScroll:       false,
        fadeOnScroll:       false,
        fadeImgOnScroll:    false,
        invertedScroll:     false,
        collapse:           false,
        collapseOnScroll:   false,

        shrinkOnScroll:     false,
        extended:           false,

        }
    },
    
    props:{
      nbc:                {type: String,},  
      requestUser:        {type: String,},
      
      requestUserIsStaff: {type: Boolean,},
      requestUserIsSuper: {type: Boolean,},

      requestUserAvatar:  {type: String,},
      requestUserBio:     {type: String,},

      C:                  {type:  Number,},
      CS:                 {type:  Number,},
      categorie:          {type:  Array,},
      
      drawerLeft:         {type: Boolean,},
    },      


    methods:{
        
        gotoR(r){
        
        this.drawerLeft=false;
        this.setDF()

        console.log("rotta per...");
        this.$emit("gotoR",r)
        
  
    },
        setD(){
        let d = this.drawerLeft;
        if (d===false)  { this.iconX = this.iconC;  console.log("d true");}
        else            { this.iconX = this.iconO;  console.log("d false");}
        this.$emit("setD")
    },
        setDF(){
        this.$emit("setDF")
    },

        setC(){
          console.log("1 analizzo DATA this.requestUserIsStaff");
          console.log(this.requestUserIsStaff);

          console.log("2 analizzo DATA this.x");
          console.log(this.x);

          console.log("3 analizzo PROP {requestuserisstaff}...");
          console.log({requestUserIsStaff});

          console.log("4 analizzo PROP requestUserIsStaff...");
          console.log(requestUserIsStaff);

          if (requestUserIsStaff === "true")  {this.navbarcolor="red";  }
          else                                {this.navbarcolor="grey"; }

        },        
    },

  }
</script>

<style media="screen">
</style>

