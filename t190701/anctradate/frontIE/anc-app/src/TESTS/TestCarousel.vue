{% load l10n %}
<template>
  <div class="home-view">


      <!-- ************************************************************** -->

      <!-- future -->
          <div class="container">
          <div class="my-4 text-center" >

               <div class="my-4 text-center">
                <p v-show="loadingEvents">...loading...</p>
                <button
                  v-show="efnext"
                  @click="getEventsFuture"
                  class="btn btn-sm btn-outline-success"
                >
                  Carica Ancora
                </button>
              </div>

              <div class="mt-2 text-center">
                  <div v-for="event in eventsFuture" :key="event.pk">
                      <v-card
                              class="mx-auto"
                              max-width="344"
                              outlined
                      >
                              <v-list-item three-line>

                                  <v-list-item-content>
                                      <router-link
                                          :to="{    name: 'event',
                                                    params: { slug: event.slug }
                                          }"
                                          class="event-link"
                                      >
                                          {{ event.content }}
                                      </router-link>
                                      <v-list-item-title class="headline mb-1" >
                                          {{event.datainizio | formatDate | localize }}
                                      </v-list-item-title>
                                      <div class="overline mb-4">
                                          {{ event.author }}
                                      </div>

      <!--
                                      <v-list-item-subtitle>{{ event.title }}
                                          {{ event.slug}}
                                      </v-list-item-subtitle>
      -->

                                  </v-list-item-content>

                                  <div v-if="event.preview">
                                      <v-avatar color="#ECCFC3" size="62">
                                          <v-img :src="event.preview"></v-img>
                                      </v-avatar>
                                  </div>
                                  <div v-else>
                                      <v-avatar color="#957D95" size="62">
                                          <v-img src="../../src/assets/images/Servizio/frecce.jpg"></v-img>
                                      </v-avatar>
                                  </div>
      <!--
                                  <v-list-item-avatar
                                      tile
                                      size="80"
                                      color="grey"
                                  >
                                  </v-list-item-avatar>
      -->
                              </v-list-item>
                      </v-card>
                  </div>
                  <v-card
                      class="mx-auto pa-2 text-center"
                      max-width="344"
                      outlined
                  >
                  <div>
                      <p>Prossimi appuntamenti...</p>
                  </div>
                  </v-card>

                  <div class="pa-4">
                      <v-icon x-large>info</v-icon>
                      <v-icon x-large>mdi-airballoon</v-icon>
                  </div>

              </div>
          </div>
      </div>

      <!-- 8888888888888888888888888888888888888888888888888888888888888 -->
          <div class="container">
                            <v-carousel
                              height="400"
                              hide-delimiter-background
                              show-arrows-on-hover
                              direction="up"
                              cycle="true"
                            >
                              <v-carousel-item
                                v-for="event in eventsFuture"
                                :key="event.pk"
                              >
                                <v-sheet
                                  height="100%"
                                >
                                  <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                  >
                                  <div class="display-3">

                                      <div v-if="event.preview">
                                          <v-img
                                              :src="event.preview"
                                              width="500"
                                              height="400"
                                          >
                                          </v-img>
                                      </div>
                                      <div v-else>
                                          <v-img
                                              src="../../src/assets/images/Servizio/frecce.jpg"
                                              width="500"
                                              height="400"
                                          >
                                          </v-img>
                                      </div>

                                  </div>

                                  </v-row>
                                </v-sheet>
                              </v-carousel-item>
                            </v-carousel>
          </div>
      <!-- 8888888888888888888888888888888888888888888888888888888888888 -->



<!-- test carousel************************************************* -->
<!-- ************************************************************** -->





<!-- ************************************************************** -->

<!-- future -->
    <div class="container">
    <div class="my-4 text-center" >

         <div class="my-4 text-center">
          <p v-show="loadingEvents">...loading...</p>
          <button
            v-show="efnext"
            @click="getEventsFuture"
            class="btn btn-sm btn-outline-success"
          >
            Carica Ancora
          </button>
        </div>

        <div class="mt-2 text-center">
            <div v-for="event in eventsFuture" :key="event.pk">
                <v-card
                        class="mx-auto"
                        max-width="344"
                        outlined
                >
                        <v-list-item three-line>

                            <v-list-item-content>
                                <router-link
                                    :to="{    name: 'event',
                                              params: { slug: event.slug }
                                    }"
                                    class="event-link"
                                >
                                    {{ event.content }}
                                </router-link>
                                <v-list-item-title class="headline mb-1" >
                                    {{event.datainizio | formatDate | localize }}
                                </v-list-item-title>
                                <div class="overline mb-4">
                                    {{ event.author }}
                                </div>

<!--
                                <v-list-item-subtitle>{{ event.title }}
                                    {{ event.slug}}
                                </v-list-item-subtitle>
-->

                            </v-list-item-content>

                            <div v-if="event.preview">
                                <v-avatar color="#ECCFC3" size="62">
                                    <v-img :src="event.preview"></v-img>
                                </v-avatar>
                            </div>
                            <div v-else>
                                <v-avatar color="#957D95" size="62">
                                    <v-img src="../../src/assets/images/Servizio/frecce.jpg"></v-img>
                                </v-avatar>
                            </div>
<!--
                            <v-list-item-avatar
                                tile
                                size="80"
                                color="grey"
                            >
                            </v-list-item-avatar>
-->
                        </v-list-item>
                </v-card>
            </div>
            <v-card
                class="mx-auto pa-2 text-center"
                max-width="344"
                outlined
            >
            <div>
                <p>Prossimi appuntamenti...</p>
            </div>
            </v-card>
            <div class="pa-4">
                <v-icon x-large>info</v-icon>
                <v-icon x-large>mdi-airballoon</v-icon>
            </div>

        </div>
    </div>
</div>

<!-- 8888888888888888888888888888888888888888888888888888888888888 -->
    <div class="container">
                      <v-carousel
                        height="400"
                        hide-delimiter-background
                        show-arrows-on-hover
                        direction="up"
                        cycle="true"
                      >
                        <v-carousel-item
                          v-for="event in eventsFuture"
                          :key="event.pk"
                        >
                          <v-sheet
                            height="100%"
                          >
                            <v-row
                              class="fill-height"
                              align="center"
                              justify="center"
                            >
                            <div class="display-3">

                                <div v-if="event.preview">
                                    <v-img
                                        :src="event.preview"
                                        width="500"
                                        height="400"
                                    >
                                    </v-img>
                                </div>
                                <div v-else>
                                    <v-img
                                        src="../../src/assets/images/Servizio/frecce.jpg"
                                        width="500"
                                        height="400"
                                    >
                                    </v-img>
                                </div>

                            </div>

                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                      </v-carousel>
    </div>
<!-- 8888888888888888888888888888888888888888888888888888888888888 -->

    <v-card
              elevation="24"
              width="500"

              class="mx-auto my-4 light-blue lighten-1"
    >
        <v-carousel
            width="500"
            height="100%"

            hide-delimiter-background
            show-arrows-on-hover
            direction="up"
            cycle="true"
            continuous="true"
            delimiter-icon="mdi-minus"
            class="deep-purple lighten-1"

        >
            <v-carousel-item
                v-for="event in eventsFuture"
                :key="event.pk"
            >
                <v-list two-line
                    class="lime lighten-3"
                >
                        <v-list-item
                            class="red accent-1"
                        >
                            <v-list-item-avatar>
                                <v-img src="../../src/assets/images/Icone/anclogo2012.gif"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ event.datainizio | formatDate }}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    {{ event.title }}
                                </v-list-item-subtitle>

                            </v-list-item-content>

                        </v-list-item>
                </v-list>


                <v-sheet
                    tile
                    class ="brown lighten-2"
                >
                        <v-row
                          class="fill-height brown lighten-4"
                          align="center"
                          justify="center"
                        >
                        <div
                                class="display-3 brown lighten-1"
                        >
                            <div v-if="event.preview">
                                <v-img
                                    :src="event.preview"
                                    width="500"
                                    height="100%"
                                >
                                </v-img>
                            </div>
                            <div v-else>
                                <v-img
                                    src="../../src/assets/images/Servizio/frecce.jpg"
                                    width="500"
                                    height="100%"
                                >
                                </v-img>
                            </div>
                        </div>

                        </v-row>
                </v-sheet>

            </v-carousel-item>
        </v-carousel>

<!--
        <v-system-bar lights-out> system bar</v-system-bar>
-->

    </v-card>


<!-- data oggi -->
        <v-card
          class="mx-auto text-center ma-2"
          color="#26c6da"
          dark
          max-width="500"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline ma-2"></div>
              <v-list-item-subtitle>
                  OGGI...
              </v-list-item-subtitle>
              <v-list-item-title class="headline mb-1">
                  {{ date }} {{month}} {{year}} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>



<!-- past -->
        <div    class="container">
        <div    class="text-center">

            <div class="pa-4">
                <v-icon x-large>event</v-icon>
                <v-icon>mdi-arrow-bottom-bold-hexagon-outline</v-icon>
            </div>

            <v-card
                          class="mx-auto pa-2 text-center"
                          color="#F5F5DC"
                          max-width="344"
                          outlined
            >
            <div>
                <p>Archivio eventi...</p>
            </div>
            </v-card>



                <div v-for="event in eventsPast" :key="event.pk">
                    <v-card
                        class="mx-auto"
                        color="#F5F5DC"
                        max-width="344"
                        outlined
                      >
                        <v-list-item three-line>
                          <v-list-item-content>

                              <router-link
                                :to="{    name: 'event',
                                          params: { slug: event.slug }
                                      }"
                                class="event-link"
                              >
                                {{ event.content }}
                              </router-link>

                              <v-list-item-title class="headline mb-1" >
                              {{event.datainizio | formatDate | localize }}
                               </v-list-item-title>

                              <div class="overline mb-4">                 {{ event.author }}  </div>

                              <v-list-item-subtitle>{{ event.title }}  {{ event.slug}}     </v-list-item-subtitle>
                          </v-list-item-content>

                            <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                            >
                                <v-img :src="event.preview"></v-img>
                            </v-list-item-avatar>
                        </v-list-item>

                    </v-card>
              </div>

              <div class="my-4 text-center">
                <p v-show="loadingEvents">...loading...</p>
                <button
                  v-show="epnext"
                  @click="getEventsPast"
                  class="btn btn-sm btn-outline-success"
                >
                  Carica Ancora
                </button>
              </div>


          </div>

      </div>









    <div class="container">
      <div class="mt-2">
        <div v-for="event in events" :key="event.pk">

          <p class="mb-0">
            Evento aggiunto da
            <span class="author-name">{{ event.author }}</span>
          </p>

          <h2>
            <router-link
              :to="{    name: 'event',
                        params: { slug: event.slug }
                    }"
              class="event-link"
            >
              {{ event.content }}
            </router-link>
          </h2>
          <p class="mb-1">
              fotografie:
              <span>{{ event.fotografieconteggio }}</span>
          </p>

<!--
          <p>Risposte: {{ question.answers_count }}</p>
-->

          <hr />
        </div>
      </div>
      <div class="my-4">
        <p v-show="loadingEvents">...loading...</p>
        <button
          v-show="next"
          @click="getEvents"
          class="btn btn-sm btn-outline-success"
        >
          Carica Ancora
        </button>
      </div>
    </div>

  </div>

</template>

<script>
import { apiService }       from "../common/api.service";
//import HelloWorld           from '../components/HelloWorld';
//import NavbarComponentDark  from '../components/NavbarDark';

export default {
  name: "home",

  components: {
//      NavbarComponentDark
//      HelloWorld
    },


  data() {
    return {

        eventsPast:     [],
        epnext: null,
        eploadingEvents: false,

        eventsFuture:   [],
        efnext: null,
        efloadingEvents: false,

        events:         [],
        next: null,
        loadingEvents: false,

        requestUser: null,

        d: null,
        date: null,
        year: null,
        month: null,
        monthArr: null
    };
  },

  methods: {

      clock() {
            this.d          = new Date();
            this.date       = this.d.getDate();
            this.year       = this.d.getFullYear();
            this.month      = this.d.getMonth();
            this.monthArr   = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
            this.month      = this.monthArr[this.month];
            document.getElementById("date").innerHTML=this.date+" "+this.month+", "+this.year;
        },

        getEvents() {
          let endpoint = "api/events/";
          if (this.next) {
            endpoint = this.next;
          }
          this.loadingEvents = true;
          apiService(endpoint).then(data => {

            console.log(data.results);

            this.events.push(...data.results);
            this.loadingEvents = false;
            if (data.next) {
              this.next = data.next;
            } else {
              this.next = null;
            }
          });
        },

        getEventsPast() {
          let endpoint = "api/events/crud/listPast/";
          if (this.epnext) {
            endpoint = this.epnext;
          }
          this.eploadingEvents = true;
          apiService(endpoint).then(data => {
            console.log(data.results);
            this.eventsPast.push(...data.results);
            this.eploadingEvents = false;
            if (data.next) {
              this.epnext = data.next;
            } else {
              this.epnext = null;
            }
          });
        },

        getEventsFuture() {
          let endpoint = "api/events/crud/listFuture/";
          if (this.efnext) {
            endpoint = this.efnext;
          }
          this.efloadingEvents = true;
          apiService(endpoint).then(data => {
            console.log(data.results);
            this.eventsFuture.push(...data.results);
            this.efloadingEvents = false;
            if (data.next) {
              this.efnext = data.next;
            } else {
              this.efnext = null;
            }
          });
        },

        getRequestUser() {
            let endpoint = "api/profiles/getcurrentuser/";
            apiService(endpoint).then(data => {
              console.log("chiamata rest... user:",data);
              console.log("chiamata rest... user:",data.us.name);
              this.requestUser = data.us.name;
            });
        },

        setRequestUser() {
          this.requestUser = window.localStorage.getItem("username");
        },






  },
  created() {
    //this.getRequestUser();

    this.getEventsPast();
    this.getEventsFuture();
    this.getEvents();
    this.clock();


    document.title = "ANC Tradate";
  }
};
</script>

<style media="screen">
.author-name {
  font-weight: bold;
  color: #dc3545;
}
.event-link {
  font-weight: bold;
  color: black;
}
.event-link:hover {
  color: cadetblue  !important;
  text-decoration: none;
}
.group {
display: flex;
flex: 1;
justify-content: space-around;
}


</style>
