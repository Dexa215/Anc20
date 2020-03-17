<template>

<!-- test new appbar 
  <v-card class="overflow-hidden">
  scroll-target           ="#scrolling-techniques-5"

-->
      <v-app-bar

        app
        fixed
        dark
        prominent
        src="/static/images/HomePageCarousel/dsc32.jpg"
        height= "350"
        min-height="50"    
        
        scroll-threshold        ="500"
        clipped-right 
        :color                  = "nbc"
        :elevate-on-scroll      = "elevateOnScroll"
        :hide-on-scroll         = "hideOnScroll"
        :fade-on-scroll         = "fadeOnScroll"
        :fade-img-on-scroll     = "fadeImgOnScroll"
        :inverted-scroll        = "invertedScroll"
        
        
        :collapse               = "collapse"
        :collapse-on-scroll     = "collapseOnScroll"

        

        :shrink-on-scroll       = "shrinkOnScroll"
        :extended               = "extended"
      >

        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(106, 55, 52, 0.7), rgba(25,32,72,.7)"
          >
            <p 
              class="display-4"
              style="z-index:11;"
            >ANC
            </p> 

          </v-img>

          
        </template>


        <!--
        <PushRotate>
          <a id="home" href="#">
            <span>Home</span>
          </a>
        </PushRotate>
        -->

  <!--
        <!-- icona MENU 
          <v-app-bar-nav-icon
            style="z-index:10;"
            
            @click.stop=  "setD" 
          >
            <tasty-burger-button
              :type         ="buttonType" 
              :active       ="drawerLeft"
              :size         ="size" 
              :color        ="color" 
              :active-color ="activeColor"
              @toggle       ="onToggle" 
              style="z-index:100; "
            />  
          </v-app-bar-nav-icon>
        <!-- icona MENU --> 
     
        


      <v-col  class="colbarsx" id="toolbar">
      </v-col>


      <v-row 
                    dense
                    class=          "rowBar rowavatar AncAppBar"  
                    style=          "max-height:70px; "
                    align=          "center"
                    justify=        "center"
      >

        <v-col
          class="colAvSx  hidden-sm-and-down"  
        >
          <h6>
              Associazione Nazionale Carabinieri
          </h6>

          


<!--
          <div class="ma-0 px-0" 
              sytle= "max-height:50px;">
            
          </div>
-->

        </v-col>

        <v-col class="colAvatar pt-2" >
          
          
          <!-- icona MENU   
          <v-btn icon
                    class="tile mx-4"
          >
            <v-app-bar-nav-icon
              style="z-index:10;"
              @click.stop=  "setD" 
            >
            -->

              <!--v-model="iconX"-->  
              <!--
                    <v-btn icon >   
                      <v-icon v-if="drawerLeft"   large  >{{iconO}}</v-icon>
                      <v-icon v-else              large  >{{iconC}}</v-icon>
                    </v-btn>
              -->
              
              <!--
                :active       ="isActive" 
              <tasty-burger-button
                :type         ="buttonType" 
                :active       ="drawerLeft"
                :size         ="size" 
                color         ="white" 
                :active-color ="activeColor"
                @toggle       ="onToggle" 
                style="z-index:11;"
              />
              --> 
            <!--
            </v-app-bar-nav-icon>
             icona MENU  
          </v-btn>
          -->

        <!-- right = True -->
          <v-avatar 
            class ="avatar"
            size = "62"
            
          >
                <!-- drawer aperto -->
                <img
                  v-if="drawerLeft"
                  class="drwOpen"
                  src="/static/images/Icone/anclogo2012.gif"
                  alt="ancTradate"
                  @click="gotoR('/')"
                  @mouseover="hoveravatar = true"
                  @mouseleave="hoveravatar = false" 
                >
                <!-- drawer chiuso -->
                <img
                  v-else
                  class="drwClose"
                  src="/static/images/Icone/anclogo2012.gif"
                  alt="ancTradate"
                  @click="gotoR('/')"
                  @mouseover    ="hoveravatar = true"
                  @mouseleave   ="hoveravatar = false"
                >
      
          </v-avatar>
        </v-col>

        <v-col
          class="colAvDx  hidden-sm-and-down"  
          style="max-height:70px;"
          align=          "start"
          justify=        "center"      
        >
         <div 
            class="ma-0 px-0" 
            sytle= "max-height:50px;">
            

                  <v-spacer></v-spacer>
  
        <!--
        <v-app-bar-nav-icon
          @click.stop=  "setD" 
        >
        </v-app-bar-nav-icon>
        -->

        <!--Slide>
          <a id="home" href="#">
            <span>Home</span>
          </a>
        </Slide-->

        <!--
          <tasty-burger-button
              :type         ="buttonType" 
              :active       ="drawerLeft"
              :size         ="size" 
              :color        ="color" 
              :active-color ="activeColor"
              @toggle       ="onToggle" 
              style         ="z-index:10; "
          /> 
        -->
        

        



        


        <!--
        <v-btn icon
                    class="tile mx-4"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon
                    class="tile mx-4"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-btn icon
                    class="tile mx-4"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        -->
        


         </div>
         <!-- @mouseover="setD()" -->
        </v-col>
      </v-row>
    <!-- <v-toolbar-title></v-toolbar-title> -->
        

    
<!--
    <a v-if="requestUserIsStaff">
      <span class="mb-4 text-center text-rm-right">
        
        <v-btn
            class="mx-4 btn btn-sm btn-outline-secondary"
            tagName="nuovoevento"
            @click="gotoR('event/')"
        > Nuovo Evento
        </v-btn>                             
      </span>
    </a>

    <div v-if ="requestUser">
        <span class=""          >Benvenuto </span>
        <span class="logeduser" > {{ requestUser }}   </span>
        <span class=""          > !!!! </span>
        
    </div>
    <div v-else>
        <span>Login</span>              
    </div>
-->

<!--    TEST OK:  <div class="btn btn-sm btn-info">Nuovo Evento</div> -->
        <!--    TEST OK:  
        <p>requestUser is staff: {{ requestUserIsStaff }}</p>
        <p>requestUser is Superuser: {{ requestUserIsSuper }}</p>             
-->


<!--
    <a v-if="requestUserIsStaff"><span>Staff</span></a>
    <span v-if ="requestUser">
      <a  
        class="mx-4 btn btn-sm btn-outline-secondary"
        href="/accounts/logout/"
      >Logout
      </a>
    </span>
    <div class="flex-grow-1"></div>
-->



    <!-- v-col  class="colbardx">
      <v-btn
        icon
        class="hidden-sm-and-down" 
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-col -->
  
        <v-toolbar-title>
          <!-- Menu -->
          <!--
          <v-btn icon
                      class="tile mx-2"
                      @click.stop=  "setD" 
          >  
                      <tasty-burger-button
                        :type         ="buttonType" 
                        :active       ="drawerLeft"
                        :size         ="size" 
                        color         ="white" 
                        :active-color ="activeColor"
                        @toggle       ="onToggle" 
                        style="z-index:11;"
                      /> 
                      <v-icon id="menu">mdi-menu</v-icon>
          </v-btn>
          -->
          
          <v-btn icon
                      class="tile mx-4"
                      @click.stop=  "setD" 
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
          
          <v-btn icon
                      class="tile mx-2"
                      v-for="item in categorie"
                      :key="item.n"
                      link
                      @click = "gotoR(item.link)"
          >
                      <v-icon  id="item.icona">{{ item.icona }}</v-icon>
                      <!--p                      >{{ item.descrizione }}</p-->
          </v-btn>
          <!-- Menu -->

          
          Sezione "C.Bergia" Tradate
        </v-toolbar-title>

      </v-app-bar>


      <!--
      <v-sheet
        id="scrolling-techniques-5"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1500px;"></v-container>
      </v-sheet>
    </v-card-->

<!-- test new appbar -->




</template>

<script>

import router               from "../router";

import {TastyBurgerButton}  from 'vue-tasty-burgers'// test 2020 03 10
//--------------------------------------------------------------------
import { Slide }            from 'vue-burger-menu'  // test 2020 03 11
import { Push }             from 'vue-burger-menu'  // test 2020 03 11
import { PushRotate }       from 'vue-burger-menu'  // test 2020 03 11
import { ScaleDown }        from 'vue-burger-menu'  // test 2020 03 11
import { ScaleRotate }      from 'vue-burger-menu'  // test 2020 03 11
import { Reveal }           from 'vue-burger-menu'  // test 2020 03 11


//import '../../dist/hamburger.css'
//import 'vue-tasty-burgers/dist/vue-tasty-burgers.css'


  export default {
    name: "ancAppBar",

    components: {
      'tasty-burger-button': TastyBurgerButton,
      Slide,
      PushRotate,
    },

    data() {
        return {

        //burger
        //buttonType:   'elastic',
        //buttonType:   'spin',
        //buttonType:   'spring',

        buttonType:   'collapse',


        isActive:     false,
        //size:         'xl',
        size:           'xl',
        //color:        'green',
        //activeColor:  'orange',

        //burger
        
        
        
        nbc:  "#212121",  //dark-grey

        iconX:"mdi-menu",
        iconO:"mdi-backburger",
        iconC:"mdi-menu",

        requestToken: "",
        rvt:10,

        breweries: [],
        isLoading: false,
        tree: [],
        types: [],

      
        footercolor:'#0052cc',

        hoveravatar:        false,

        right:              false,
        left:               false,

        elevateOnScroll:    false,
        hideOnScroll:       false,
        fadeOnScroll:       false,
        fadeImgOnScroll:    true,   //[2020 03 11]
        invertedScroll:     false,

       
        collapse:           false,
        collapseOnScroll:   false,

        shrinkOnScroll:     true,  //[2020 03 11]
        extended:           false,


        }
    },
    
    props:{
 
    //  iconX:              {type: String,},       

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


    methods:{

        //HAMBURGER
        onToggle(active) {
          /*
          //console.log("toggle");  
          let d = this.drawerLeft;
          console.log("active:",d);  
          console.log("isActive:",this.isActive);  

          if (d===false) {
            console.log("d:", this.isActive);
            console.log("active:" ,active);
            this.drawerLeft=true;
            //this.drawerRight=true;
          }
          else {
            console.log("d true");
            console.log("active:" ,active);
            this.drawerLeft=false;
            //this.drawerRight=false;
          }
          */
        },

        
        gotoR(r){
        console.log("AppBar rotta per...");
        this.$emit("gotoR",r)
        },


        setD(){
        let d = this.drawerLeft;
        if (d===false)  { this.iconX = this.iconC;  ; console.log("d===false - AncAppBar setD: d [this.drawerLeft] : ",d);}
        else            { this.iconX = this.iconO;  ; console.log("else      - AncAppBar setD: d [this.drawerLeft] : ",d);}
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
    
    
    },
    updated() {
      this.setcolor();
    }




  }
</script>






<style media="screen">

/* NOT USED... */
@media print {
  body {
    color: black; 
  }
}




/* Extra small devices        (phones, 600px and down) */
@media only screen and (max-width: 600px) {
}

/* Small devices              (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices             (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices              (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Extra large devices        (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}




/* For portrait, we want the tool bar on top */
@media screen and (orientation: portrait) {
  #toolbar {
    /*background-color: greenyellow !important;*/
    background-color: transparent !important;
  }
  h2 {
    color: aqua
  }
}
/* For landscape, we want the tool bar stick on the left */
@media screen and (orientation: landscape) {
  #toolbar {
    /* display: none; */
    /* background-color: red !important; */
    background-color: transparent !important;
  }
  h2 {
    color:blue
  }
}
/* ------------------------------------- */


col {
  padding: 20px 0px 0px;
}


.t{
    background-color: transparent !important;
}

.rowBar{
    background-color: yellow !important;
}
.colBar{
    background-color: transparent !important;
}
.coltestOK{
  background-color: red !important;
}
.coltest{
  background-color: transparent !important;
}
.AncAppBarE{
    min-height: 80px;
    max-height: 84px;
    align:    center;
    justify:  center;  
}

.toolbarTitle{
  background-color: orange !important;
  align:    center;
  justify:  center;  
  padding: 2px 2px;    
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


.rowavatar{
    
    background-color: darkgreen !important;
    min-height:   76px;
    max-height:   80px;
    align:        center;
    justify:      center;
}
.colAvatar{
    background-color: pink !important;
    min-height:   74px;
    max-height:   76px;
    
    max-width:    80px;
    text-align:   center;
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
         
.icorot{
    transform: rotate(10deg);
}

.drwOpen{
    transform: rotate(25deg);
    min-height: 50px;
    max-height: 70px;
    max-width:  70px;
}
.drwClose{
    transform: rotate(0deg);
    min-height: 50px;
    max-height: 70px;
    max-width:  70px;
}

.icoO{
    transform: origin-xtranslateX(0px);
    position: relative;
    left:200px;
}
.icoC{
    transform: origin-xtranslateX(400px);
}

.btn:focus {
  box-shadow: none !important;
  box-decoration-break: none !important;
}

</style>


        
<!-- TEST NAV BAR -->
<!--


        <v-app-bar
          app
          clipped-right
          dark

          fixed
          scroll-target="#playground-example"

          :color="navbarcolor"
          :elevate-on-scroll="elevateOnScroll"
          :hide-on-scroll="hideOnScroll"
          :fade-on-scroll="fadeOnScroll"
          :fade-img-on-scroll="fadeImgOnScroll"
          :inverted-scroll="invertedScroll"
          :collapse="collapse"
          :collapse-on-scroll="collapseOnScroll"
          :shrink-on-scroll="shrinkOnScroll"
          :extended="extended"

          :requestUser="requestUser"
          :requestUserIsStaff="requestUserIsStaff"
          :requestUserIsSuper="requestUserIsSuper"

        >

           <v-app-bar-nav-icon
           @click.stop="drawer = !drawer"
           ></v-app-bar-nav-icon>

          <v-spacer></v-spacer>
          <v-spacer></v-spacer>    

           <v-toolbar-title>
                  <span class="px-0" @click="gotoR('/')">ANC</span>

           <v-avatar
           class ="mx-4"
           max-height=300
           min-height=250
           >
              <img
                src="../src/assets/images/Icone/anclogo2012.gif"
                alt="ancTradate"
                @click="gotoR('/')"
              >
           </v-avatar>

                  <span class="px-1 font-weight-light" @click="getRequestUser">Tradate</span>
           </v-toolbar-title>

          
          <v-spacer></v-spacer>

              <a v-if="requestUserIsStaff">
                <span class="mb-4 text-center text-rm-right">
                                    <v-btn
                                        class="mx-4 btn btn-sm btn-outline-secondary"
                                        tagName="nuovoevento"
                                        @click="gotoR('event/')"
                                    > Nuovo Evento
                                    </v-btn>                             
                </span>
              </a>

            <div v-if ="requestUser">
                <span class=""          >Benvenuto </span>
                <span class="logeduser" > {{ requestUser }}   </span>
                <span class=""          > !!!! </span>
            </div>
            <div v-else>
                <span>Login</span>              
            </div>

            <a v-if="requestUserIsStaff"><span>Staff</span></a>
            <span v-if ="requestUser">
                <a  
                  class="mx-4 btn btn-sm btn-outline-secondary"
                  href="/accounts/logout/"
                >Logout
                </a>
            </span>

           <div class="flex-grow-1"></div>

           <v-btn icon>
             <v-icon>mdi-magnify</v-icon>
           </v-btn>

        </v-app-bar>


-->
<!-- TEST NAV BAR -->
