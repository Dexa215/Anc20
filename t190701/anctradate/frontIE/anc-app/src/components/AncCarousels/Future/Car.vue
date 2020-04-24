<template>
  <v-col cols="4" class="carcoldx">
    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <v-card
      elevation="24"
      class="anccard mx-auto my-auto grey r_C lighten-4"
      light
      shaped
      height="465"
    >
      <v-list two-line class="carlist grey r_C lighten-4" light>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon x-large>mdi-calendar-clock</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Prossimi appuntamenti</v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-carousel
        light
        height="370"
        cycle
        continuous
        loader
        show-arrows="false"
        class="anccarousel mx-auto"
        hide-delimiter-background
        direction="up"
        delimiter-icon="mdi-chart-donut"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-carousel-item v-for="event in Fevents" :key="event.pk" class="anccarouselitem mx-auto">
          <v-sheet>
            <!-- class="fill-height" -->
            <v-row align="center" justify="center">
              <div v-if="event.preview">
                <v-img class="imgop1" :src="event.preview"></v-img>
              </div>
              <div v-else>
                <v-img class="imgop1" src="@/assets/images/Servizio/frecce.jpg"></v-img>
              </div>
            </v-row>
          </v-sheet>
          <!-- intestazione evento -->
          <v-list two-line class="eventrif" :class="clFevent" light>
            <v-list-item :class="clFeventInt">
              <v-list-item-content>
                <v-list-item-title>{{ event.datainizio | formatDate }}</v-list-item-title>
                <v-list-item-subtitle>
                  <router-link
                    :to="{    name: 'event',
                                                params: { id: event.id, slug: event.slug }
                                            }"
                    class="event-link"
                  >{{ event.title }}</router-link>
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar>
                <v-img src="@/assets/images/Icone/anclogo2012.gif"></v-img>
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
    <!-- ///////////////////////////////////////////////////////////////////////////// -->
  </v-col>
</template>

<script>
export default {
  name: "carF",

  props: {
    Fevents: {
      type: Array
    },
    Fnext: {
      type: String
    },
    FloadingEvents: {
      type: Boolean
    },

    //      clDark: Boolean,
    //      clLight: Boolean,

    clFcard: String,
    clFtitle: String,
    clFevent: String,
    clFeventInt: String
  }
};
</script>

<style media="screen">
.carcoldx {
  position: relative;
  z-index: 5;
  height: 500px;

  background-color: transparent; /*
  background-color: teal;*/
  margin-left: 0px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px 50px 50px 10px;
}

.carlist {
  border-radius: 10px 25px 25px 10px;
}

.anccard {
  width: 450px;
  border-radius: 10px 25px 25px 10px;
}
.anccarousel {
  /*background-color: hotpink;*/
  width: 445px;
}
.anccarouselitem {
  /*background-color: indigo;*/
  width: 440px;
}

.imgop1 {
  height: 320px;
  width: 440px;
}

.eventrif {
  position: absolute;
  top: 220px;
  width: 300px;
  background-color: transparent;
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
  color: cadetblue !important;
  text-decoration: none;
}
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
</style>

      <!--
      <ancEventsFuture
        :Fevents="Fevents"
        :Fnext="Fnext"
        :FloadingEvents="FloadingEvents"
        clFcard="grey lighten-3 mx-auto my-4"
        clFtitle="grey lighten-4"
        clFevent="grey lighten-2"
        clFeventInt="grey lighten-4"
      ></ancEventsFuture>
      -->

