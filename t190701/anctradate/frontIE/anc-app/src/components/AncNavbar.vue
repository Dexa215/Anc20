<!--
<template lang="html">
    <v-card class="overflow-hidden">
      <v-app-bar
        :collapse="!collapseOnScroll"
        :collapse-on-scroll="collapseOnScroll"
        absolute
        color="deep-purple accent-4"
        dark
        scroll-target="#scrolling-techniques-6"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Collapsing Bar</v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-checkbox
          v-model="collapseOnScroll"
          color="white"
          hide-details
        ></v-checkbox>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-6"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px;"></v-container>
      </v-sheet>
    </v-card>

</template>
-->

<!--
<template>
<nav>
    <v-toolbar flat app class="text-uppercase grey--text">
        <v-toolbar-title>
                <span class="font-weight-light">ANC</span>
                <span>Tradate</span>
        </v-toolbar-title>




    </v-toolbar>
</nav>
</template>
-->


<!-- ICONE:
<v-icon right>mdi-arrow-right-bold-circle</v-icon>
<v-toolbar flat app class="text-uppercase grey--text">
-->


<!--
<v-toolbar app>
  <v-toolbar-title class="headline text-uppercase">
    <span>Vuetify</span>
    <span class="font-weight-light">MATERIAL DESIGN</span>
  </v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn
    flat
    href="https://github.com/vuetifyjs/vuetify/releases/latest"
    target="_blank"
  >
    <span class="mr-2">Latest Release</span>
  </v-btn>
</v-toolbar>
-->


<!--

                    <v-card
                       flat
                       class="py-12"
                     >
                       <v-card-text>
                         <v-row
                           align="center"
                           justify="center"
                         >
                       <col cols="12">
                         <p class="text-center">Rounded</p>
                       </col>

                       <v-btn-toggle
                         v-model="toggle_exclusive"
                         rounded
                       >
                         <v-btn>
                           <v-icon>mdi-format-align-left</v-icon>
                         </v-btn>
                         <v-btn>
                           <v-icon>mdi-format-align-center</v-icon>
                         </v-btn>
                         <v-btn>
                           <v-icon>mdi-format-align-right</v-icon>
                         </v-btn>
                         <v-btn>
                           <v-icon>mdi-format-align-justify</v-icon>
                         </v-btn>
                       </v-btn-toggle>
                    </v-row>
                   </v-card-text>
                 </v-card>
-->

<!--
<v-layout
    text-xs-center
    wrap
  >
-->


<template>

    <v-app-bar
      app
      clipped-right
      color="blue-grey"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
              <span>ANC</span>
              <span class="font-weight-light">Tradate</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn flat color="grey" dark
      router-link :to="{ name: 'sede' }"
      >
          <span class="font-weight-light">Sede</span>
          <v-icon right>mdi-home</v-icon>
      </v-btn>

      <v-btn flat color="grey" dark
      router-link :to="{ name: 'contatti' }">
          <span class="font-weight-light">Contatti</span>
          <v-icon right>mdi-face-agent</v-icon>
      </v-btn>

      <v-btn flat color="grey" dark
      router-link :to="{ name: 'chisiamo' }">
          <span class="font-weight-light">Chi siamo</span>
          <v-icon right>mdi-account-group</v-icon>
      </v-btn>
      <v-btn flat color="grey" dark
      router-link :to="{ name: 'eventi' }">
          <span class="font-weight-light">Eventi</span>
          <v-icon right>mdi-calendar-multiple</v-icon>
      </v-btn>
      <v-btn flat color="grey" dark
      router-link :to="{ name: 'links' }">
          <span class="font-weight-light">Lins</span>
          <v-icon right>mdi-link-variant</v-icon>
      </v-btn>


      <v-spacer></v-spacer>

      <v-btn flat color="grey">
          <span class="font-weight-light">Sign out</span>
          <v-icon right>mdi-export</v-icon>
      </v-btn>


    </v-app-bar>



</template>
<!--
<template>
<v-container>
    <v-layout
        text-xs-center
      >
        <nav>
            <v-toolbar app flat class="text-uppercase grey--text">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>
                        <span>ANC</span>
                        <span class="font-weight-light">Tradate</span>
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn flat color="grey" dark
                router-link :to="{ name: 'sede' }"
                >
                    <span class="font-weight-light">Sede</span>
                    <v-icon right>mdi-home</v-icon>
                </v-btn>

                <v-btn flat color="grey" dark
                router-link :to="{ name: 'contatti' }">
                    <span class="font-weight-light">Contatti</span>
                    <v-icon right>mdi-face-agent</v-icon>
                </v-btn>

                <v-btn flat color="grey" dark
                router-link :to="{ name: 'chisiamo' }">
                    <span class="font-weight-light">Chi siamo</span>
                    <v-icon right>mdi-account-group</v-icon>
                </v-btn>
                <v-btn flat color="grey" dark
                router-link :to="{ name: 'eventi' }">
                    <span class="font-weight-light">Eventi</span>
                    <v-icon right>mdi-calendar-multiple</v-icon>
                </v-btn>
                <v-btn flat color="grey" dark
                router-link :to="{ name: 'links' }">
                    <span class="font-weight-light">Lins</span>
                    <v-icon right>mdi-link-variant</v-icon>
                </v-btn>


                <v-spacer></v-spacer>

                <v-btn flat color="grey">
                    <span class="font-weight-light">Sign out</span>
                    <v-icon right>mdi-export</v-icon>
                </v-btn>

            </v-toolbar>
        </nav>
    </v-layout>
</v-container>
</template>
-->






<script>
import { apiService } from "../common/api.service";

export default {
    name: "ancNavbar",
    data: () => ({


        items: [
              {
                icon: 'mdi-inbox',
                text: 'Inbox',
              },
              {
                icon: 'mdi-star',
                text: 'Star',
              },
              {
                icon: 'mdi-send',
                text: 'Send',
              },
              {
                icon: 'mdi-email-open',
                text: 'Drafts',
              },
            ],
        model: 1,

        toggle_exclusive: undefined,

        requestUser: "...",
        requestUserIsStaff: false,
        requestUserIsSuper: false,
        elevateOnScroll: false,
        hideOnScroll: false,
        fadeOnScroll: false,
        fadeImgOnScroll: false,
        invertedScroll: false,
        collapse: false,
        collapseOnScroll: true,
        shrinkOnScroll: false,
        extended: false,
        color: 'accent',
        colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'orange'],


        hidden: false,
        direction: 'bottom',

        fab: false,
        fling: false,
        hover: true,
        tabs: null,

        top: false,
        right: true,
        bottom: true,
        left: false,

        transition: 'slide-x-transition',
    }),

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      },
    },

    props: {
      //msg: String,
      //auth_user: String
    },

    methods: {
        getRequestUser() {
            let endpoint = "api/profiles/getcurrentuser/";
            apiService(endpoint).then(data => {
              console.log("chiamata rest... user:",data);
              console.log("chiamata rest... user:",data.us.name);
              this.requestUser = data.us.name;
              this.requestUserIsStaff = data.us.staff;
              this.requestUserIsSuper = data.us.superuser;
            });
        },

        go(dest){
            router.push({ path: dest })
        },



    },

    created() {
      document.title = "ANC Tradate";
      this.getRequestUser();
    }
};

</script>

<style>
.v-btn:focus {
  box-shadow: none !important;
}

.v-btn:click {
  box-shadow: none !important;
}
</style>
