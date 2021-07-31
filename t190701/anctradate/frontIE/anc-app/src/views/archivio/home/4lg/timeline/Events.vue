{% load l10n %}

<template>
  <v-timeline>
    <v-timeline-item
      v-for="event in events"
      :key="event.pk"
      color="lightgrey"
      large
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey darken-5"
          >
            anc attesa immagini...
          </v-progress-circular>
        </v-row>
      </template>

      <template v-slot:icon>
        <router-link
          :to="{
            name: 'event',
            params: { id: event.id, slug: event.slug }
          }"
          class="event-link"
        >
          <v-avatar>
            <img
              :src="event.preview"
              class="white--text v-img-dexo "
            />
          </v-avatar>
        </router-link>
      </template>

      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold `"
          v-text="x"
        ></span>
        <!--{{ event.datainizio | formatDate }}-->

        {{ event.datainizio | formatDate }}
      </template>

      <template>
        <div
          class="py-4"
          align="center"
        >
          {{ event.title }}
        </div>
      </template>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { apiService } from "@/common/api.service";

export default {
  name: "timelineEvents",
  components: {},

  props: {},

  data () {
    return {
      Eevents: [],
      Titolone: null,

      events: [],
      next: null,
      loadingEvents: false
    };
  },
  computed: {},
  methods: {
    getEventsFuture () {
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
    },

    gotoR (r) {
      this.expand = !this.expand;
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    v (link) {
      /*tis.$emit("vola", link);*/
      this.$store.dispatch("vola", link);
    }
  },
  created () {
    this.getEventsFuture();
    document.title = "ANC Tradate";
  },
  updated () { },
  mounted () { }
};
</script>

<style media="screen" scoped>
.v-img-dexo {
  height: 100px;
  width: 100px;
  border-radius: 50px;
}
.v-img-dexo:hover {
  height: 120px;
  width: 120px;
  border-radius: 60px;
}
</style>
