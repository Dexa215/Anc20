<template> 
<!-- -->
        <v-card
             style="z-index:100;"
        >    
            <!-- absolute -->
            <v-navigation-drawer
                app

                v-model="drawerRight"

                @transitionend ="ctlD()"
                temporary
                expand-on-hover
                height="1000px"
                color="#FAEBD7"
            >
                <template v-slot:prepend>
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
    <!--
                            <v-list-item-subtitle
                            class="my-1"
                            >
                            Logged In
                            </v-list-item-subtitle>
    -->                        
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
        
                <v-divider></v-divider>
        

    <!-- list 3 
                <v-list>
                    <v-list-group
                    v-for="cat in  categorie"
                    :key="cat.n"
                    v-model="cat.icona"
                    :prepend-icon="cat.icona"
                    no-action
                    >
                    <template v-slot:activator>
                        <v-list-item-content>
                        <v-list-item-title v-text="cat.descrizione"></v-list-item-title>
                        </v-list-item-content>
                    </template>
            
                    <v-list-item
                        v-for="subItem in cat.sottocategorie"
                        :key="subItem.title"
                        @click="gotoR(subItem.link)"
                    >
                        <v-list-item-content>
                        <v-list-item-title v-text="subItem.descrizione"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list-group>
                </v-list>
    -->


    <!-- list 1 -->
                
        


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
    
    <!-- list 2 
                <v-list shaped>

                    <v-list-item
                        v-for="item in categorie"
                        :key="item.n"
                        link
                        
                    >
                        <v-list-group
                            no-action
                            sub-group
                            value="false"
                        >
                        <template 
                            v-slot:activator
                            value="false"
                        >
                        <v-list-item-icon class="mx-4">
                        <v-icon>{{ item.icona }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>  {{item.descrizione }} </v-list-item-title>
                        </v-list-item-content>
                        </template>

                    

                            <v-list-item
                            v-for="(sottocat, i) in item.sottocategorie"
                            :key="i"
                            link
                            >
                            <v-list-item-icon class="mx-4">
                                <v-icon v-text="sottocat.icona"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>  {{sottocat.descrizione }} </v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-title v-text="sottocat.descrizione"></v-list-item-title>
                            
                            </v-list-item>
                        </v-list-group>

                    
                    </v-list-item>
            </v-list>     
    -->


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


  





<!-- 
      <v-navigation-drawer 
        v-model="drawerRight"

        absolute
        temporary
        expand-on-hover
      >
      
      
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Application
            </v-list-item-title>
            <v-list-item-subtitle>
              subtext
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list
          dense
          nav
        >
          <v-list-item
            
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
      </v-navigation-drawer>

-->


   

    
</template>

<script>
import router       from "@/router";

  export default {
    name: "d2sm",

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

</style>


</style>

