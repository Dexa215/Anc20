<template>
      <!-- @@@ -->
      <div v-if     ="currentres=='xs'">
        <b1xs
              :requestUser        = "requestUser"
              :requestUserIsStaff = "requestUserIsStaff"
              :requestUserIsSuper = "requestUserIsSuper"
              :requestUserAvatar  = "requestUserAvatar"
              :requestUserBio     = "requestUserBio"
              :C                  = "C"
              :CS                 = "CS"
              :categorie          = "categorie"
              :drawer             = "drawer"
              :drawerLeft         = "drawerLeft"
              :drawerRight        = "drawerRight"
      
              @gotoR              = "gotoR"     
              @setD=                "setD"
              @setDF=               "setDF"
              @mouseover              ="setDF()"                                                
        ></b1xs>
      </div>
      <div v-else-if="currentres=='sm'">
        <b2sm
              :requestUser        = "requestUser"
              :requestUserIsStaff = "requestUserIsStaff"
              :requestUserIsSuper = "requestUserIsSuper"
              :requestUserAvatar  = "requestUserAvatar"
              :requestUserBio     = "requestUserBio"
              :C                  = "C"
              :CS                 = "CS"
              :categorie          = "categorie"
              :drawer             = "drawer"
              :drawerLeft         = "drawerLeft"
              :drawerRight        = "drawerRight"

              @gotoR              = "gotoR"     
              @setD=                "setD"
              @setDF=               "setDF"
              @mouseover              ="setDF()"
        ></b2sm>
      </div>
      <div v-else-if="currentres=='md'">
        <b3md
              :requestUser        = "requestUser"
              :requestUserIsStaff = "requestUserIsStaff"
              :requestUserIsSuper = "requestUserIsSuper"
              :requestUserAvatar  = "requestUserAvatar"
              :requestUserBio     = "requestUserBio"
              :C                  = "C"
              :CS                 = "CS"
              :categorie          = "categorie"
              :drawer             = "drawer"
              :drawerLeft         = "drawerLeft"
              :drawerRight        = "drawerRight"

              @gotoR              = "gotoR"     
              @setD=                "setD"
              @setDF=               "setDF"
              @mouseover              ="setDF()"
        ></b3md>
      </div>
      <div v-else-if="currentres=='lg'">
        <b4lg
              :requestUser        = "requestUser"
              :requestUserIsStaff = "requestUserIsStaff"
              :requestUserIsSuper = "requestUserIsSuper"
              :requestUserAvatar  = "requestUserAvatar"
              :requestUserBio     = "requestUserBio"
              :C                  = "C"
              :CS                 = "CS"
              :categorie          = "categorie"
              :drawer             = "drawer"
              :drawerLeft         = "drawerLeft"
              :drawerRight        = "drawerRight"

              @gotoR              = "gotoR"     
              @setD=                "setD"
              @setDF=               "setDF"
              @mouseover              ="setDF()"
              
        ></b4lg>
      </div>
      <div v-else-if="currentres=='xl'">
        <b5xl
              :requestUser        = "requestUser"
              :requestUserIsStaff = "requestUserIsStaff"
              :requestUserIsSuper = "requestUserIsSuper"
              :requestUserAvatar  = "requestUserAvatar"
              :requestUserBio     = "requestUserBio"
              :C                  = "C"
              :CS                 = "CS"
              :categorie          = "categorie"
              :drawer             = "drawer"
              :drawerLeft         = "drawerLeft"
              :drawerRight        = "drawerRight"

              @gotoR              = "gotoR"     
              @setD=                "setD"
              @setDF=               "setDF"
              @mouseover              ="setDF()"
        ></b5xl>
      </div>
      <!-- @@@ -->  
</template>

<script>
import { apiService }         from "@/common/api.service";
import router                 from "@/router";

import b1xs                 from "@/components/AncAppBars/B1xs.vue";
import b2sm                 from "@/components/AncAppBars/B2sm.vue";
import b3md                 from "@/components/AncAppBars/B3md.vue";
import b4lg                 from "@/components/AncAppBars/B4lg.vue";
import b5xl                 from "@/components/AncAppBars/B5xl.vue";

  export default {

    name: "ancAppBar",

    components: {
      b1xs,
      b2sm,
      b3md,
      b4lg,
      b5xl,
    },

    props:{
     //iconX:              {type: String,},       
     //nbc:                {type: String,},  
      requestUser:        {type: String,},
      requestUserIsStaff: {type: Boolean,},
      requestUserIsSuper: {type: Boolean,},
      requestUserAvatar:  {type: String,},
      requestUserBio:     {type: String,},
      C:                  {type:  Number,},
      CS:                 {type:  Number,},
      categorie:          {type:  Array,},
      drawer:             {type: Boolean,},
      drawerLeft:         {type: Boolean,},
      drawerRight:        {type: Boolean,},
    },  

    data: () => ({

    }),

    methods:{
      gotoR(r){
        console.log("AppBar rotta per...");
        this.$emit("gotoR",r)
        },
    },

            gotoR(r){
        console.log("AppBar rotta per...");
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



          if  ( requestUserIsStaff === "true") {
            this.navbarcolor="red";
          } else { 
            this.navbarcolor="grey";
          }
        },



        setcolor(){
            var x = this;
            //console.log("setcolor analizzo this.requestuserisstaff...", x.requestUserIsStaff);
            if  ( x.requestUserIsStaff === true) {
              this.nbc="red";
            } else { 
              this.nbc="#212121";  //dark-grey 
            } 
        },
    
    
        
    updated() {
      this.setcolor();
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
         


</style>
