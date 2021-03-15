<template>

    <v-card
        elevation="24"
        width="500"
        height="600"
        class="mx-auto my-4"
        :class="clFcard"
        light
    >

<!--intestazione card
elevation="24"
width="500"
class="mx-auto my-4
light-blue lighten-1"
class="mdi-spin"
-->

        <v-list two-line
            :class="clFtitle"
            light
        >
                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon x-large >mdi-calendar-clock</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>
                            Appuntamenti futuri
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
                v-for="event in Fevents"
                :key="event.pk"
            >
                <v-sheet
                >
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                        <div class="">
                            <div v-if="event.preview">
                                <h3> {{event.preview}} </h3>
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
                        light
                    >
                        <v-list-item
                            :class="clFeventInt"
                            light
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
  name: "ancEventsFuture",

props: {
      Fevents:{
          type : Array
      },
      Fnext:{
          type: String
      },
      FloadingEvents:{
          type: Boolean
      },

//      clDark: Boolean,
//      clLight: Boolean,

      clFcard:      String,
      clFtitle:     String,
      clFevent:     String,
      clFeventInt:  String
  },

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
