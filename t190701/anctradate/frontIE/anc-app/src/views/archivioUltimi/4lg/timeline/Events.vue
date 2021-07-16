{% load l10n %}

<template>
  <v-timeline>
    <v-timeline-item
      v-for="event in events"
      :key="event.pk"
      color="lightgrey"
      large
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold `"
          v-text="x"
        ></span>
        {{ event.datainizio | formatDate }}
      </template>

      <template>
        <div
          class="py-4"
          align="center"
        >
          <v-img
            :src="event.preview"
            class="white--text v-img-dexo"
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
                ></v-progress-circular>
              </v-row>
            </template>
            <v-card-title>
              <h5>{{ event.title }}</h5>
            </v-card-title>
          </v-img>
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

<style media="screen" scoped></style>
