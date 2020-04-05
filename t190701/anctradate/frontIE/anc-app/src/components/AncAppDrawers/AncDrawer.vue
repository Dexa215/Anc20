<template>
    
      <!-- @@@ -->
      <div  v-if      = "currentres=='xs' | currentres=='sm' " >
        <d1xs
              :requestUser=         "requestUser"
              :requestUserIsStaff=  "requestUserIsStaff"
              :requestUserIsSuper=  "requestUserIsSuper"
              :requestUserAvatar=   "requestUserAvatar"
              :requestUserBio=      "requestUserBio"
              :nbc=                 "nbc"  
              :drawerRight=         "drawerRight"
              :C=                   "C"
              :CS=                  "CS"
              :categorie=           "categorie"
              :iconX=               "iconX"
              @gotoR=               "gotoR"
              @setD=                "setD"
              @setDF=               "setDF"
        >
        </d1xs>
      </div>
<!--
      <div v-else-if="currentres=='sm'"><d2sm
                                        :footercolor  = "footercolor"
                                        :requestUser  = "requestUser"
                                        :C            = "C"
                                        :CS           = "CS"
                                        :categorie    = "categorie"
                                        @gotoR        = "gotoR"
      ></d2sm></div>
      <div v-else-if="currentres=='md'"><d3md
                                        :footercolor  = "footercolor"
                                        :requestUser  = "requestUser"
                                        :C            = "C"
                                        :CS           = "CS"
                                        :categorie    = "categorie"
                                        @gotoR        = "gotoR"
      ></d3md></div>
      <div v-else-if="currentres=='lg'"><d4lg
                                        :footercolor  = "footercolor"
                                        :requestUser  = "requestUser"
                                        :C            = "C"
                                        :CS           = "CS"
                                        :categorie    = "categorie"
                                        @gotoR        = "gotoR"
      ></d4lg></div>
      <div v-else-if="currentres=='xl'"><d5xl
                                        :requestUser=         "requestUser"
                                        :requestUserIsStaff=  "requestUserIsStaff"
                                        :requestUserIsSuper=  "requestUserIsSuper"
                                        :requestUserAvatar=   "requestUserAvatar"
                                        :requestUserBio=      "requestUserBio"
                                        :nbc=                 "nbc"  
                                        :drawerRight=         "drawerRight"
                                        :C=                   "C"
                                        :CS=                  "CS"
                                        :categorie=           "categorie"
                                        :iconX=               "iconX"
                                        @gotoR=               "gotoR"
                                        @setD=                "setD"
                                        @setDF=               "setDF"
      ></d5xl></div>
-->

      <div v-else>
        <d5xl
              :requestUser=         "requestUser"
              :requestUserIsStaff=  "requestUserIsStaff"
              :requestUserIsSuper=  "requestUserIsSuper"
              :requestUserAvatar=   "requestUserAvatar"
              :requestUserBio=      "requestUserBio"
              :nbc=                 "nbc"  
              :drawerRight=         "drawerRight"
              :C=                   "C"
              :CS=                  "CS"
              :categorie=           "categorie"
              :iconX=               "iconX"
              @gotoR=               "gotoR"
              @setD=                "setD"
              @setDF=               "setDF"
        >
        </d5xl>
      </div>
      <!-- @@@ -->  

     
</template>

<script>

import { apiService }         from "@/common/api.service";
import router                 from "@/router";

//import AncIntestazioneFine  from "@/components/AncIntestazioneFine.vue"; 

import d1xs                 from "@/components/AncAppDrawers/D1xs.vue";
import d2sm                 from "@/components/AncAppDrawers/D2sm.vue";
import d3md                 from "@/components/AncAppDrawers/D3md.vue";
import d4lg                 from "@/components/AncAppDrawers/D4lg.vue";
import d5xl                 from "@/components/AncAppDrawers/D5xl.vue";

  export default {

    name: "ancDrawer",

    components: {
      d1xs,
      d2sm,
      d3md,
      d4lg,
      d5xl,
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
      drawerRight:        {type: Boolean,},
    },   


    data() {
        return {

        mini: true,  

        ico:"/static/images/Icone/anclogo2012.gif",  

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

    methods:{
            
            gotoR(r){
            
            this.drawerRight=false;
            this.setDF()

            console.log("AncAppDrawer rotta per...");
            this.$emit("gotoR",r)
            
      
        },
        ctlD(){
            let d = this.drawerRight;
            console.log("d:", d);
            if (d===false)  {
                this.$emit("setDF")
            }
        },

            setD(){
            let d = this.drawerRight;
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
    max-height: 40px;
}
.colFotSmallDown{
    background-color: transparent !important;
    min-height: 30px;
    max-height: 40px;
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
  tile:  "false";

  min-width:    65px;

  max-height:   75px;
  max-width:    75px;   
}

.d1pre{
  background-color:   red !important;
  text-align:           start;
  height:               70px;
}         

.rgbMenuU{
  background-color:   rgb(15, 10, 0);
}
.rgbMenuList{
  background-color:   rgb(29, 20, 6);
}
.rgbMenuUser{
  background-color:   rgb(100, 200, 100);
}
.rgbMenuB{
  background-color:   rgb(15, 10, 0);
}


</style>
