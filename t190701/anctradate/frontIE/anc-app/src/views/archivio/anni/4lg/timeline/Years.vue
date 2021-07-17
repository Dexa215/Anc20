{% load l10n %}

<template>
  <v-col cols="12">
    <!--column 1-->

    <h2 class="display-1 font-weight-bold AncTitleColorDark">Anni---</h2>

    <!--h3>{{ yearsList }}</h3-->

    <v-timeline
      class="my-6 py-2"
      style="background-color:#ECEFF1;"
    >
      <v-timeline-item
        v-for="(year, i) in yearsList"
        :key="i"
        :color="year.color"
        small
        right
        class="ma-10"
        style="background-color:#ECEFF1;"
      >
        <template v-slot:icon>
          <v-avatar
            v-show="!YfocusOn | (Yy != year)"
            size="100"
          >
            <v-img
              v-if="year.preview"
              :src="year.preview"
              @click="sety(year)"
            ></v-img>
            <v-img
              v-else
              src="../../../../../../src/assets/images/Icone/anclogo2012.gif"
              @click="sety(year)"
            ></v-img>
          </v-avatar>
        </template>

        <template v-slot:opposite>
          <div v-show="Yy != year">
            <span
              style="color: #1A237E;"
              :class="
                `display-2 headline font-weight-bold ${year.color}--text mx-4`
              "
              v-text="year.anno"
            ></span>
          </div>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${year.color}--text mx-4`"></h2>
        </div>
      </v-timeline-item>
    </v-timeline>

    <div class="my-4">
      <p v-show="loadingYears">...loading...</p>
    </div>
    <button
      v-show="next"
      @click="getYears"
      class="btn btn-sm btn-outline-success"
    >
      Carica anni precedenti
    </button>
  </v-col>
</template>

<script>
import { apiService } from "@/common/api.service";

export default {
  name: "timelineYears",
  components: {},

  props: {},

  data () {
    return {
      Eevents: [],
      Titolone: null,

      events: [],
      next: null,
      loadingEvents: false,

      Eevents: [],
      Titolone: null,

      years: [],
      yearsList: [],
      next: null,
      loadingYears: false,

      YfocusOn: false,
      Yy: null,
      YyPREV: null,
      Yyanno: null,

      Yevents: [],
      Ynext: null,
      YloadingEvents: false,

      error: null
    };
  },
  computed: {},
  methods: {
    getYears () {
      let endpoint = "api/events/crud/Years/";
      if (this.next) {
        endpoint = this.next;
      }
      this.loadingYears = true;
      apiService(endpoint).then(data => {
        console.log(data.results);

        this.yearsList.push(...data.results);
        this.loadingYears = false;
        if (data.next) {
          this.next = data.next;
        } else {
          this.next = null;
        }
      });
    }
  },
  created () {
    this.getYears();
  },
  updated () { },
  mounted () { }
};
</script>

<style media="screen" scoped></style>
