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

        <!-- large --> 
        <!-- class="hidden-md-and-down" -->
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

        <!-- large --> 
        <!-- class="hidden-md-and-down" -->
        <!-- large --> 
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
        <!-- large --> 
        
      </v-row>
    </v-footer>
  </div>
</template>

<script>
  export default {
    name: "f4lg",
    
    props:{
        footercolor: String,
        requestUser: String,
        C:              {type: Number,},
        CS:             {type: Number,},
        categorie:      {type: Array,},   
    },

    data: () => ({

        colordefault : 'footercolor',
//        requestUser: "...",
        requestUserIsStaff: false,
        requestUserIsSuper: false,

      icons: [
        'home',
        'mail',
        'event',
        'delete',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      fixed:    true,
      padless:  false,
      variant: 'default',

    }),

    methods:{
      gotoR(r){
        console.log("AppBar rotta per...");
        this.$emit("gotoR",r)
        },
    },

  }
</script>

<style media="screen">
</style>
