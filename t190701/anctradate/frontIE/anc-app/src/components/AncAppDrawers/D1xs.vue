<template> 
<!-- -->
        
    <div class="mx-auto">
        <div class="d1int       mx-auto mu-auto"></div>
        <div class="d1          mx-auto mu-auto">
            <!--
            <v-app-bar-nav-icon
                style="z-index:5; "
                @click.stop=  "setD" 
            >
                <v-btn icon class="" >
                    <v-icon v-if="drawerRight"  large>{{iconO}}</v-icon>
                    <v-icon v-else              large>{{iconC}}</v-icon>
                </v-btn>            
            </v-app-bar-nav-icon>
            -->
        </div>

        <v-card>
            <!--v-navigation-drawer
                class="deep-purple accent-4"
                dark
                permanent
                mini-variant
                
                expand-on-hover
                
                bottom
                temporary
                clipped                    
                disable-route-watcher
                src="/static/images/HomePageCarousel/dsc32.jpg"
            -->
            <v-navigation-drawer
                app
                class="dr1 mu-auto"
                v-model="drawerRight"
                @transitionend ="ctlD()"
                color="rgb(29, 20, 6)"
                dark
            >
            <!--  -->




                <!--v-navigation-drawer
                    app
                    v-model="drawerRight"
                    
                    temporary
                    expand-on-hover
                    height="500px"
                    
                -->
                    <template v-slot:append>
                    <!-- template v-slot:prepend-->
                    <v-list-item two-line>
                        <v-list-item-avatar>
                        <img :src="ico">
                        </v-list-item-avatar>
                        <v-list-item-content>
                        <v-row 
                            dense
                            class=          "row mx-2 pa-2"  
                            style=          "background-color: transparent !important;"
                            align=          "start"
                            justify=        "center"
                        >
                            <v-col 
                                class=      "pa-1" 
                                style=      "background-color: transparent !important;"
                                align=      "start"
                                justify=    "center"
                            >   
                                <v-list-item-title
                                    class="my-1"
                                > {{requestUser}}
                                </v-list-item-title>

                                <v-list-item-subtitle
                                    v-if="requestUserIsSuper"
                                    class="my-1"
                                    style="color:red;"
                                >SuperUser</v-list-item-subtitle>
                                <v-list-item-subtitle
                                    v-else-if="requestUserIsStaff"
                                    class="my-1"
                                    style="color:blue;"
                                >Staff</v-list-item-subtitle>
                                <v-list-item-subtitle
                                    v-else
                                    class="my-1"
                                    style="color:grey;"
                                >User</v-list-item-subtitle>

                                <v-list-item-subtitle
                                class="my-1"
                                >
                                <span v-if ="requestUser">
                                    <a  
                                        class="my-1 btn btn-sm btn-outline-secondary"
                                        href="/accounts/logout/"
                                    >Logout
                                    </a>
                                </span>
                                
                                </v-list-item-subtitle>
                            </v-col>
                        </v-row>
                        </v-list-item-content>
                    </v-list-item>
                    </template>


                    <div
                        class = "d1 rgbMenuU mx-auto my-auto"
                    >
                        <v-app-bar-nav-icon
                            style="z-index:5; "
                            @click.stop=  "setD" 
                        >
                            <v-btn icon class="" >
                                <!--v-model="iconX"-->
                                <v-icon v-if="drawerRight"  large>{{iconO}}</v-icon>
                                <v-icon v-else              large>{{iconC}}</v-icon>
                            </v-btn>            
                        </v-app-bar-nav-icon>
                    </div>
        
<v-form> 
    <v-input
    ></v-input>
</v-form>


                    <v-list shaped>
                        <v-list-item
                        class="tile"
                        v-for="item in categorie"
                        :key="item.n"
                        link
                        @click = "gotoR(item.link)"
                    >
                        <v-list-item-icon>
                        <v-icon>{{ item.icona }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                        <v-list-item-title>{{ item.descrizione }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>    
                    </v-list>
                    
                    <v-divider></v-divider>

                    <v-list shaped>
                        <v-list-item
                            class="tile"
                            v-if="requestUserIsStaff"
                            @click="gotoR('event/')"            
                        >
                            <v-list-item-icon>
                            <v-icon>mdi-timeline-plus</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                            <v-list-item-title>Nuovo Evento</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>   
                    </v-list>

                    <v-row 
                        dense
                        class=          "row mx-1"  
                        style=          "background-color: transparent !important;"
                        align=          "center"
                        justify=        "center"
                    >
                        <v-col 
                            class=      "pa-1" 
                            style=      "background-color: transparent !important;"
                            align=      "center"
                            justify=    "center"
                        >                            
                        </v-col>
                    </v-row>    
                    <div>
                    </div>        

                </v-navigation-drawer>
        </v-card>    
    </div>    
</template>

<script>
import router       from "@/router";

  export default {
    name: "d1xs",

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
//        iconC:"mdi-backburger",
//        iconO:"mdi-tray-full",

        iconC:"mdi-dots-vertical",
        //iconO:"mdi-menu-up",
        iconO:"mdi-close-circle",
        
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

  }
</script>

<style media="screen">

    .tile {
        margin: 5px;
        border-radius: 4px;
    }
    .tile:hover {
        background: #ffda99;
    }
    .tile:active {
        background: #ffbe4d;
    }


    .d1int{
        height:             85px;
        background-color: green;
    }

    .d1{
        height:             80px;
/*        background-color:   rgb(15, 10, 0);
*/        
        padding-top: 20px;
        text-align:         center;
        text-justify:       center;
    }
    .dr1{
        opacity:            0.9;
        margin-left:        20px;

        min-height:         30px;
        max-height:         700px;

        width: 70%;

        /*background-color:   rgb(29, 20, 6);*/
    }

    .drawercard{
        border-radius:      0px 50px 50px 5px;
    }

    .x {
        text-align:         center;
        text-justify:       center;
    }





</style>


</style>

