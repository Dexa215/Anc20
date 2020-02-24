<!-- 
  
-->


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
    

      <v-col  class="colbarsx">
        <v-app-bar-nav-icon
              style="z-index:5; "
              @click.stop=  "setD" 
        >
          <v-btn icon class="" >
            <!--v-model="iconX"-->
            <v-icon v-if="drawerLeft"   large>{{iconO}}</v-icon>
            <v-icon v-else              large>{{iconC}}</v-icon>
          </v-btn>            
        </v-app-bar-nav-icon>
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
          <div class="ma-0 px-0" 
              sytle= "max-height:50px;">
            ANC
          </div>
        </v-col>

        <v-col class="colAvatar pt-2" >
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
            TRADATE
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


    <v-col  class="colbardx">
      <v-btn
        icon
        class="hidden-sm-and-down" 
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-col>



  </v-app-bar>

</template>

<script>
import router       from "../router";

  export default {
    name: "ancAppBar",

    data() {
        return {
        
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

.rowBar{
    background-color: yellow !important;
}
.colBar{
    background-color: transparent !important;
}
.coltest{
  background-color: red !important;
}

.AncAppBarE{
    min-height: 80px;
    max-height: 84px;
    align:    center;
    justify:  center;  
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
