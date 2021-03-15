<template>

<div>
    <div v-if="clDark=='true'">
        <p class="text-center"> hola pedro dark is on</p>
    </div>
    <div v-if="clLight=='true'">
        <p class="text-center"> hola pedro light is on</p>
    </div>


        <v-card
            elevation=  "24"
            width=      "500"

            class="mx-auto my-4"
            :class="clFcard"
            dark
        >
        <v-list two-line
            :class="clFtitle"

        >
                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon x-large >mdi-calendar-clock</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>
                            Prossimi appuntamenti {{clDark}}{{clLight}}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                        </v-list-item-subtitle>
                    </v-list-item-content>


                </v-list-item>
        </v-list>
<!--intestazione card-->
        <v-carousel
            width="500"
            height="100%"

            hide-delimiter-background
            show-arrows-on-hover
            direction="up"
            cycle="true"
            continuous="true"

            delimiter-icon="mdi-chart-donut"

            reverse-transition="fade-transition"
            transition="fade-transition"

        >
            <v-carousel-item
                v-for="event in events"
                :key="event.pk"
            >
                <v-sheet
                >
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                        <div>
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
                                    height="400"
                                >
                                </v-img>
                            </div>
                        </div>

                        </v-row>
                </v-sheet>
<!-- intestazione evento -->
                <v-list two-line
                    :class="clFevent"
                >
                    <v-list-item
                        :class="clFeventInt"
                    >
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ event.datainizio | formatDate }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                <router-link
                                  :to="{    name: 'event',
                                            params: { slug: event.slug }
                                        }"
                                  class="event-link"
                                >
                                  {{ event.title }}
                                </router-link>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar>
                            <v-img src="../../src/assets/images/Icone/anclogo2012.gif"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>
                </v-list>
<!-- intestazione evento -->
            </v-carousel-item>
        </v-carousel>

<!-- future
        <v-system-bar lights-out> system bar</v-system-bar>
        <v-card-title><p color="#37474F">prossimi appuntamenti</p></v-card-title>
-->
    </v-card>
</div>


</template>




<script>

export default {
  name: "ancEventsPreview",

  props: {
      events:     [],
      next: null,
      loadingEvents: false,

      clDark: Boolean,
      clLight: Boolean,

      clFcard:      String,
      clFtitle:     String,
      clFevent:     String,
      clFeventInt:  String

  },

  data() {
    return {
    };
  },

  methods: {
  },

  created() {
    document.title = "ANC Tradate";
  }

};
</script>

<style media="screen">

.v-card {

}


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

.imgop {
opacity: 0.4;
}

</style>



<!--
                <v-card
                          elevation="24"
                          width="500"
                          class="mx-auto my-4 light-blue lighten-1"
                >

            <!--intestazione card class="mdi-spin"

                    <v-list two-line
                        class="grey darken-4"
                        dark
                    >
                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-icon x-large >mdi-calendar-clock</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        prossimi appuntamenti
                                    </v-list-item-title>
                                    <v-list-item-subtitle>

                                    </v-list-item-subtitle>

                                </v-list-item-content>


                            </v-list-item>
                    </v-list>
            <!--intestazione card

                    <v-carousel
                        width="500"
                        height="100%"

                        hide-delimiter-background
                        show-arrows-on-hover
                        direction="up"
                        cycle="true"
                        continuous="true"

                        delimiter-icon="mdi-chart-donut"

                        class="blue-grey lighten-2"

                    >
                        <v-carousel-item
                            v-for="event in eventsFuture"
                            :key="event.pk"
                        >
                            <v-sheet>
                                    <v-row
                                      class="fill-height"
                                      align="center"
                                      justify="center"
                                    >
                                    <div>
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
                                                height="400"
                                            >
                                            </v-img>
                                        </div>
                                    </div>

                                    </v-row>
                            </v-sheet>
            <!-- intestazione evento
                            <v-list two-line
                                class="grey darken-3"
                                dark
                            >
                                    <v-list-item
                                        class="grey darken-4"
                                        dark
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                {{ event.datainizio | formatDate }}
                                            </v-list-item-title>
                                            <v-list-item-subtitle>
                                                <router-link
                                                  :to="{    name: 'event',
                                                            params: { slug: event.slug }
                                                        }"
                                                  class="event-link"
                                                >
                                                  {{ event.title }}
                                                </router-link>
                                            </v-list-item-subtitle>

                                        </v-list-item-content>

                                        <v-list-item-avatar>
                                            <v-img src="../../src/assets/images/Icone/anclogo2012.gif"></v-img>
                                        </v-list-item-avatar>
                                    </v-list-item>
                            </v-list>
            <!-- intestazione evento

                        </v-carousel-item>
                    </v-carousel>

            <!-- future
                    <v-system-bar lights-out> system bar</v-system-bar>
                    <v-card-title><p color="#37474F">prossimi appuntamenti</p></v-card-title>

                </v-card>
