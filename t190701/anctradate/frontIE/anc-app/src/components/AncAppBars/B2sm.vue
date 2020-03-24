<template>   
      <v-app-bar
        class="AncAppBarE"
        app
        
        clipped-right 
        fixed

        :color                  = "nbc"

        dark
        scroll-target           = "#playground-example"
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
        
       
        <v-row
          class="AncRowBar"
        >

          <v-col              class="AncRowBarColsx">
            <div>
              b2sm
            </div>
      
                  <v-btn  icon >
                    <v-icon>mdi-magnify</v-icon>
                  </v-btn>
           
          </v-col>



<!-- class="hidden-sm-and-down"-->
<!--
          
          <v-col      class="AncRowBarColsx">

            <v-card>

                <v-btn  icon >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>

            </v-card>


          </v-col>  
-->




            <!--  
            <v-app-bar-nav-icon
                  style="z-index:5; "
                  @click.stop=  "setD" 
            >
              <v-btn icon class="" >
            -->     
                <!--v-model="iconX"-->
            <!--
                <v-icon v-if="drawerLeft"   large>{{iconO}}</v-icon>
                <v-icon v-else              large>{{iconC}}</v-icon>
              </v-btn>            
            </v-app-bar-nav-icon>
            -->
          
          

          <v-col              class="AncRowBarColcx">
            <v-card>

            <v-row            class="AncRowBarColcxRowInt" 
                              align= "center"  
                              dense>
              <v-col          class="AncRowBarColcxRowIntColsx">
                <div>ANC</div>
              </v-col>

              <!-- Avatar -->
              <v-col          class="AncRowBarColcxRowIntColcx">


    

          


                <div>

          <tasty-burger-button

            :type         ="buttonType" 
            :active       ="isActive" 
            :size         ="size" 
            :color        ="color" 
            :active-color ="activeColor"
            @toggle       ="onToggle" 
            style="z-index:100; "

          />  



                    <v-avatar 
                      class ="avatar"
                      size = "62"
                      right = true
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
                </div>  
              <!-- Avatar -->
              
              
              </v-col>
              
              <v-col          class="AncRowBarColcxRowIntColdx">
                <div>TRADATE</div>
              </v-col>
            </v-row>

            </v-card>
        </v-col>  

        <!--  hidden-sm-and-down-->
        <!-- <v-toolbar-title></v-toolbar-title> -->

            <!-- avatar -->
            <!--
            <v-col class="colAvatar pt-2" >
              <v-avatar 
                class ="avatar"
                size = "62"
                right = true
              >
                    <!-- drawer aperto -->
            <!--        
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
            <!--
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
              <div
                class="menubtnd1"
              >
                  <v-app-bar-nav-icon
                      style="z-index:5; "
                      @click.stop=  "setD" 
                  >
                      <v-btn icon class="" >
                          <v-icon v-if="drawerRight"  large>{{iconO}}</v-icon>
                          <v-icon v-else              large>{{iconC}}</v-icon>
                      </v-btn>            
                  </v-app-bar-nav-icon>
              </div>
            </v-col>
            -->
            <!-- avatar -->

  

        
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


        <v-col  class="AncRowBarColdx"
                align= "center"
                justify= "center"  
        >
          <v-btn  icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>  

 

      </v-row>
    

     

     


    </v-app-bar>
</template>

<script>
import router       from "@/router";

  export default {
    name: "b2sm",

    data() {
        return {
        
        nbc:  "#212121",  //dark-grey

        iconX:"mdi-menu",
//        iconC:"mdi-backburger",
//        iconO:"mdi-tray-full",

        iconC:"mdi-dots-vertical",
        iconO:"mdi-menu-up",

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
        fadeImgOnScroll:    false,
        invertedScroll:     false,
        collapse:           false,
        collapseOnScroll:   false,

        shrinkOnScroll:     false,
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
    
    
    },
    updated() {
      this.setcolor();
    }




  }
</script>

<style media="screen">

col {
  padding: 20px 0px 0px;
}


.t{
    background-color: transparent !important;
}

.colBar{
    background-color: transparent !important;
}
.coltest{
    background-color: red !important;
}

.AncAppBarE{
    background-color:  teal !important;
    height:             100px;
    
    text-align:         center;
    text-justify:       center;

    padding-top:        4px;  
}

.AncAppBarI{
    z-index: 3;
    background-color:  yellowgreen !important;

    height:             45px;
    
    text-align:         center;
    text-justify:       center;

    border-radius:      48px 48px 48px 48px;
}

.AncAppBar{
    z-index: 3;
    background-color:  yellowgreen !important;

    height:             45px;
    
    text-align:         center;
    text-justify:       center;

     border-radius:      48px 48px 48px 48px;
}

.AncRowBar{
    /*background-color: #2b2b29 !important;*/
    background-color: YELLOW !important;

    height:             70px;
    text-align:         center;
    text-justify:       center;

    padding:            1px;

    margin-left:        50px;
    margin-right:       50px;
    margin-top:         10px;
    margin-bottom:      0px;

    border-radius:      50px 50px 50px 50px;
  
    text-align:         center;
    text-justify:       center;


}

.AncRowBarColsx{
  background-color: lightgreen !important;
  height:             68px;

  text-align:         left;
  text-justify:       auto;

  padding:            11px 20px;

  margin-left:        1px;
  margin-right:       0px;
  margin-top:         1px;
  margin-bottom:      1px;

  border-radius:      48px 48px 0px 48px;
}

.AncRowBarColsxRow{
  background-color: pink !important;
  height:             32px;
}


.AncRowBarColcx{
  /*background-color: #2b2b29 !important;*/
  background-color: salmon !important;
  height: 90px;

  text-align:         center;
  text-justify:       auto;

  padding:            2px 20px;    
  margin-left:        0px;
  margin-right:       0px;
  margin-top:         0px;
  margin-bottom:      0px;
  border-radius:      0px 0px 25px 25px;
}

.AncRowBarColcxRowInt{
  background-color: yellow !important;
  border-radius:      0px 0px 50px 50px;
}

.AncRowBarColcxRowIntColsxsx{
  background-color: darkred !important;
  height:             50px;
  text-align:         left;
  text-justify:       auto;
  
}


.AncRowBarColcxRowIntColsx{
  background-color: red !important;
  text-justify:       auto;
  text-align:         right;
}
.AncRowBarColcxRowIntColcx{
  background-color: darkred !important;
  height:             66px;
  text-align:         center;
}
.AncRowBarColcxRowIntColdx{
  background-color: red !important;
  text-justify:       auto;
  text-align:         left;
}


.AncRowBarColdx{
  background-color: deeppink !important;
  height:             66px;
  text-align:         start;

  padding:            2px 2px;
  margin-left:        0px;
  margin-right:       1px;
  margin-top:         1px;
  margin-bottom:      1px;
  border-radius:      40px 40px 40px 0px;
}


.colAvSx{
  background-color: darkorange !important;
  text-align:       end;
  text-justify:     center;
  height:           22px;
  padding:          22px 10px;   
}

.colAvDx{
  background-color: orange !important;
  text-align:       start;
  text-justify:     center;
  height:           22px;
  padding:          22px 10px;    
}

.colAvatar{
  background-color: pink !important;
  height:         48px;
  max-width:      80px;

  text-align:     center;
  text-justify:   center;

  padding:        1px; 
}

.avatar{
  background-color: green !important;
  color: green;
  right: "true";

  size: 48;                 

  max-width:    48px;
  max-height:   48px;
  
  
  transform:  scale(1.0,1.0);   
}

.avatar:hover{
  transform:  scale(1.1,1.1);

}



.icorot{
    transform: rotate(10deg);
}

.drwOpen{
    /*transform: rotate(25deg);*/
    transform:  scale(1.2,1.2);

    height: 48px;
    width:  48px;
}
.drwClose{
    /*transform: rotate(0deg);*/
    transform:  scale(1.0,1.0);
    height: 48px;
    width:  48px;
}

.menubtnd1{
   z-index: 7;
  background-color: darkorchid !important;
  
  max-width:    75px;   
  max-height:   45px;

  border-radius: 2px 2px 40px 40px;
  
  text-align:         center;
  text-justify:       center;
  padding-bottom:     15px;
  margin-top:         5px;
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
