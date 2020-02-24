<template>

    <div class="text-center">
        <v-timeline>
          <v-timeline-item
            v-for="(event, i) in events"
            :key="i"
            :color="year.color"
            small
            class="ma-10"
          >
            <template v-slot:icon>
                    <v-avatar
                        size=100
                    >
                      <v-img
                        :src="event.preview"
                      ></v-img>

                    </v-avatar>

            </template>

            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${year.color}--text mx-4`"
                v-text="event.content"
              ></span>
            </template>
            <div class="py-4">
                <h2
                    :class="`headline font-weight-light mb-4 ${year.color}--text mx-4`"
                >

                    {{event.title}}

                </h2>
            </div>


          </v-timeline-item>
        </v-timeline>



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

</template>



<script>
import { apiService }       from "../common/api.service";
import router               from "../router";
import AncCard              from "@/components/AncCard.vue";


export default {
  name: "archivioAnno",


  props: {
    year: null,

    categorie:      {type: Array,},     
    C:              {type: Number,},
    CS:             {type: Number,},

  },


  components: {
  },


  data() {
    return {
        events:[],
        next: null,
        loadingEvents: false,
    };
  },



  methods: {

        gotoR(r){
            let anno = r.toString()
            console.log("anno..."+anno);

            let endpoint = "api/events/archive/"+anno;

            console.log("rotta per...");
            router.push('/')
            router.push(endpoint)
        },


  },
  created() {
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
