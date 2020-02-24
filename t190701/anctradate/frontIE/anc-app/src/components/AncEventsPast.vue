<template>

    <v-card
        elevation="24"
        width="500"
        height="600"
        class="mx-auto my-4"
        :class="clFcard"
        dark
    >

<!--intestazione card
elevation="24"
width="500"
class="mx-auto my-4
light-blue lighten-1"
class="mdi-spin"
-->
        <v-list two-line
            class="grey darken-4"
            dark
        >
                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon x-large >mdi-calendar-check</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>
                            Ultimi eventi
                        </v-list-item-title>
                        <v-list-item-subtitle>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
        </v-list>
<!--intestazione card

            cycle="true"
            continuous="true"
-->

        <v-carousel
            cycle
            continuous
            width="500"
            height="100%"
            hide-delimiter-background
            show-arrows-on-hover
            direction="up"
            delimiter-icon="mdi-chart-donut"
            reverse-transition="fade-transition"
            transition="fade-transition"

        >
            <v-carousel-item
                v-for="event in Pevents"
                :key="event.pk"
            >
                <v-sheet
                >
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                        <div class="imgop">
                            <div v-if="event.preview">
                                <v-img
                                    class="imgop1"
                                    :src="event.preview"
                                    width="500"
                                    max-height="400"
                                >
                                </v-img>
                            </div>
                            <div v-else>
                                <v-img
                                    class="imgop1"
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
                        class="eventrif"
                        :class="clFevent"
                        dark
                    >
                        <v-list-item
                            :class="clFeventInt"
                            dark
                        >
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ event.datainizio | formatDate }}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    <router-link
                                      :to="{    name: 'event',
                                                params: { id: event.id, slug: event.slug }
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
</template>

<script>

export default {
  name: "ancEventsPast",

  props: {
      Pevents:{
          type : Array
      },
      Pnext:{
          type: String
      },
      PloadingEvents:{
          type: Boolean
      },

//      clDark: Boolean,
//      clLight: Boolean,

      clFcard:      String,
      clFtitle:     String,
      clFevent:     String,
      clFeventInt:  String

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

.imgop {
opacity: 0.4;
}

.eventrif {
    position: absolute;
    bottom: 85px;
    width:500px;
}

</style>



<!--
            <v-card
                elevation="24"
                width="500"
                class="mx-auto my-4 light-blue lighten-1"
            >
-->

<!--
                <v-list two-line
                    class="grey lighten-4"
                    light
                >
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-icon x-large class="mdi-spin">mdi-calendar-check</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>
                                    ultimi eventi
                                </v-list-item-title>
                                <v-list-item-subtitle>

                                </v-list-item-subtitle>

                            </v-list-item-content>


                        </v-list-item>
                </v-list>


                <v-carousel
                    width="500"
                    height="100%"

                    hide-delimiter-background
                    show-arrows-on-hover
                    direction="up"
                    cycle="true"
                    continuous="true"

                    delimiter-icon="mdi-chart-donut"

                    class="grey lighten-4"
                    light

                    reverse-transition="fade-transition"
                    transition="fade-transition"

                >
                    <v-carousel-item
                        v-for="event in eventsPast"
                        :key="event.pk"
                    >
                        <v-sheet
                        >
                                <v-row
                                  class="fill-height"
                                  align="center"
                                  justify="center"
                                >
                                <div class="imgop">
                                    <div v-if="event.preview">
                                        <v-img
                                            class="imgop1"
                                            :src="event.preview"
                                            width="500"
                                            height="100%"
                                        >
                                        </v-img>
                                    </div>
                                    <div v-else>
                                        <v-img
                                            class="imgop1"
                                            src="../../src/assets/images/Servizio/frecce.jpg"
                                            width="500"
                                            height="400"
                                        >
                                        </v-img>
                                    </div>
                                </div>

                                </v-row>
                        </v-sheet>


                        <v-list two-line
                            class="grey lighten-4"
                            light
                        >
                                <v-list-item
                                    class="grey lighten-3"
                                    light
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


                    </v-carousel-item>
                </v-carousel>


            </v-card>

-->
<!-- future
        <v-system-bar lights-out> system bar</v-system-bar>
        <v-card-title><p color="#37474F">prossimi appuntamenti</p></v-card-title>
-->
