
<template>
  <div class="container" style="width='300'">
    <v-row class="AncTrasparenza" v-show="drawerLeft"></v-row>

    <h2 class="text-center">Appuntamenti in agenda...</h2>

    <v-timeline>
      <v-timeline-item v-for="event in events" :key="event.pk" large>
        <template v-slot:icon>
          <div v-if="event.preview">
            <v-avatar>
              <img :src="event.preview" />
            </v-avatar>
          </div>
          <div v-else>
            <v-avatar>
              <img src="../../src/assets/images/Servizio/frecce.jpg" />
            </v-avatar>
          </div>
        </template>

        <template v-slot:opposite>
          <span>{{ event.datainizio | formatDate | localize }}</span>
        </template>

        <v-card class="elevation-2">
          <v-card-title class="headline">{{ event.title }}</v-card-title>
          <v-card-text>{{ event.content }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<!--
<template>
    <div>ciao</div>

    <div v-if="event.preview">
          <v-img
            :src="event.preview"
            width="10"
          >
          </v-img>
    </div>
    <div v-else>
          <v-img
            src="../../src/assets/images/Servizio/frecce.jpg"
            width="10"
          >
        </v-img>
    </div>


</template>
-->

<script>
import { apiService } from "../common/api.service";
import AncCard from "@/components/AncCard.vue";

export default {
  name: "EventNEXT",

  components: {
    AncCard
  },

  props: {
    drawerLeft: { type: Boolean }
  },

  data() {
    return {
      events: [],
      next: null,
      loadingEvents: false
    };
  },

  methods: {
    getEventsFuture() {
      let endpoint = "api/events/crud/listFuture/";
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
    }
  },
  created() {
    //this.getRequestUser();
    this.getEventsFuture();
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
  color: cadetblue !important;
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

.bg {
  background-image: url("../assets/images/bg/bg1.jpg");
}
</style>

<!--
<v-parallax
    height="300"
    src="../assets/images/bg/bg1.jpg"
></v-parallax>
-->
