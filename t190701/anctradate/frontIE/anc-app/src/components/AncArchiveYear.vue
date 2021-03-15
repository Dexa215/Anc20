<template>
  <div>

    <h2   
      class="AncTitleColorDark display-4 font-weight-bold" 
    >
        {{ Yy.anno }}
    </h2>
    <!-- h3>
        Archivio anno
    </h3-- >

    <div>
        <v-avatar
            size=100

        >
            <img
              v-if="Yy.preview"
              :src="Yy.preview"
            >
            </img>
            <img
              v-else
              src="../../src/assets/images/Icone/anclogo2012.gif"
            >
            </img>


        </v-avatar>
    </div>
    <div>
      <p id="posterrore">
        {{ postError }}
      </p>
    </div>


<!-- TEST  FORM 2019 11 14
<form
  id="fapp"
  action="/"
  method="post"
  @submit.prevent="postalo"
>
  <p>
    <label id="postTitleLabel" for="postEvent">Titolo</label>
    <input
      id="postEvent"
      v-model="postTitle"
      type="text"
      name="postEvent"
    >
  </p>
  <p>
    <label for="postDescrizione">Descrizione</label>
    <input
      id="postDescrizione"
      v-model="postDescrizione"
      type="text"
      name="postDescrizione"
    >
  </p>

  <p>
    <label for="postData">Data</label>
    <input
      id="postData"
      v-model="postData"
      type="date"
      name="postData"
    >
  </p>

  <button>
    <input
      class="btn btn-sm"
      type="submit"
      value="postalo"
    >
  </button>

</form>
-->







<!--
        <v-timeline>
              <v-timeline-item>timeline item</v-timeline-item>
              <v-timeline-item class="text-right">timeline item</v-timeline-item>
              <v-timeline-item>timeline item</v-timeline-item>
        </v-timeline>
-->

<!--
        <div>
            <v-row>
              <v-col cols="12" sm="6" offset-sm="3">
                <v-card>
                  <v-container fluid>
                    <v-row>
                      <v-col
                        v-for="event in events"
                        :key="event.pk"
                        class="d-flex child-flex"
                        cols="4"
                      >
                        <v-card flat tile class="d-flex">
                            <v-img
                                :src=       "event.preview"
                                aspect-ratio="1"
                                class="grey lighten-2"
                            >
                                <template v-slot:placeholder>
                                  <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                  >
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                  </v-row>
                                </template>
                            </v-img>




                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>

        </div>
-->

<!--
    <div>
            <v-timeline>
              <v-timeline-item
                v-for="event in events"
                :key="event.pk"
                large
                color="red"
              >
                <template v-slot:icon>

                <v-avatar>
                    <v-img
                      class="white--text align-end"
                      :src="event.preview"
                    >
                      <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                          </v-row>
                      </template>
                    </v-img>
                </v-avatar>

                </template>

                <template v-slot:opposite>
                  <span>{{ event.datainizio | formatDate }}</span>
                </template>

                <div class="py-4">
                     <h2 :class="`headline font-weight-light mb-4`"> {{event.title}}</h2>

                     <div>
                         {{event.content}}
                     </div>

                </div>

              </v-timeline-item>
            </v-timeline>
    </div>
-->

    <div class="my-4" >
        <v-timeline
          Toggle="right"
        >
          <v-timeline-item
            v-for="event in Yevents"
            :key="event.pk"
            color="lightgrey"
            large
            
          >
            <template 
              v-slot:opposite
            >
              <span
                class="headline font-weight-bold"
              >{{event.datainizio | formatDate}} </span>
            </template>

            <div class="py-4 ">
<!--
              <v-card>
                <h5 class="headline font-weight-light mb-4">
                <router-link
                    :to="{    name: 'event',
                              params: { id: event.id, slug: event.slug }
                          }"
                    class="event-link eventRouterLink"
                  >{{ event.title }}
                  </router-link>
                </h5>
                <div>
                {{ event.content }}
                </div>
              </v-card>
-->

              <v-card
                class="mx-auto"
                max-width="344"
              >
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                <v-img
                    v-if = "event.preview" 
                    :src="event.preview"
                    class="white--text align-end v-img-dexo-card"
                    height="80px"
                  >
                    <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                        </v-row>
                    </template>
                  </v-img>
                  <v-img
                    v-else 
                    src="../../src/assets/images/Servizio/frecce.jpg"
                  >
                  </v-img>
            
                <v-card-title>
                  <h5 class="headline font-weight-light mb-4">
                    <router-link
                        :to="{    name: 'event',
                                  params: { id: event.id, slug: event.slug }
                              }"
                        class="event-link eventRouterLink"
                      >{{ event.title }}
                    </router-link>
                </h5>
                </v-card-title>
            
                <v-card-subtitle>
                  {{event.datainizio | formatDate}}
                </v-card-subtitle>
            
                <v-card-actions>
                  <v-btn text>Share</v-btn>
            
                  <v-btn
                    color="purple"
                    text
                  >
                    Explore
                  </v-btn>
            
                  <v-spacer></v-spacer>
            
                  <v-btn
                    icon
                    @click="show = !show"
                  >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>
            
                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>
                      {{ event.content }}
                    </v-card-text>
                  </div>
                </v-expand-transition>

              </v-card>



            </div>



            <template 
              v-slot:icon
            >
<!--
              <div>
                <v-avatar 
                    size="80"
                >
                  <v-img
                    v-if = "event.preview" 
                    :src="event.preview"
                    class="white--text align-end v-img-dexo"
                  >
                    <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                        </v-row>
                    </template>
                  </v-img>
                  <v-img
                    v-else 
                    src="../../src/assets/images/Servizio/frecce.jpg"
                  >
                  </v-img>
                </v-avatar>
              </div>
-->
            </template>


              <!-- <v-card-title></v-card-title> 
                class="headline font-weight mx-2"
                class="event-link eventRouterLink"              
              -->
<!--              
            <template>
              <span>
                <h5>
                  <router-link
                    :to="{    name: 'event',
                              params: { id: event.id, slug: event.slug }
                          }"
                    class="event-link eventRouterLink"
                  >{{ event.title }}
                  </router-link>
                </h5>
              </span>
            </template>
-->

          </v-timeline-item>

        </v-timeline>

       

        <div class="my-4">
                  <div class="my-4">
                    <p v-show="YloadingEvents">...loading...</p>
                  </div>
                  
                  <button
                    v-show="Ynext"
                    @click="getNextEvent"
                    class="btn btn-sm btn-outline-success"
                  >  
                    Carica eventi precedenti
                  </button>        
        </div>




        <h2
          class="AncTitleColorDark display-4 font-weight-bold" 
        >
            {{ Yy.anno }}
        </h2>




        <div class="text-center my-2">
          <v-sheet color="white lighten-2">.</v-sheet>
        </div>

    </div>


        
    


<!--
        class="btn btn-sm btn-outline-success"

      >
////////////////////////////////////////////////////////////////////////////////
<template>
  <div>
    <b-img v-bind="mainProps" rounded           alt="Rounded image"         ></b-img>
    <b-img v-bind="mainProps" rounded="top"     alt="Top-rounded image"     ></b-img>
    <b-img v-bind="mainProps" rounded="right"   alt="Right-rounded image"   ></b-img>
    <b-img v-bind="mainProps" rounded="bottom"  alt="Bottom-rounded image"  ></b-img>
    <b-img v-bind="mainProps" rounded="left"    alt="Left-rounded image"    ></b-img>
    <b-img v-bind="mainProps" rounded="circle"  alt="Circle image"          ></b-img>
    <b-img v-bind="mainProps" rounded="0"       alt="Not rounded image"     ></b-img>
  </div>
</template>
-->


<!--
////////////////////////////////////////////////////////////////////////////////
-->

<!--
        <div
            v-for="event in events"
            :key="event.pk"
        >

            <v-card
              class="mx-auto"
              max-width="200px"
              max-eight="100px"
            >
              <v-img
                tile = false
                class="white--text align-end"
                height="100px"
                :src="event.preview"
              >
                <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                    </v-row>
                </template>
                <v-card-title>
                        <h5>
                            {{ event.title }}
                        </h5>
                </v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0"
              >
                <h6>
                    {{ event.slug }}
                </h6>
              </v-card-subtitle>


              <v-card-text class="text--primary">
                  <h6>
                    {{ event.datainizio | formatDate }}
                  </h6>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="orange"
                  text
                >
                  Leggi
                </v-btn>

                <v-btn
                  color="orange"
                  text
                >
                  Explore
                </v-btn>

              </v-card-actions>
            </v-card>
        </div>
-->

<!--
        <div
            v-for="event in events"
            :key="event.pk"
        >
            {{ event.title }}
            <v-img
                width=50
                height=50
                :src="event.preview"
            ></v-img>
            {{ event.content }}
        </div>
-->

  </div>
</template>


<script>
import { apiService }           from "../common/api.service";
import moment                   from 'moment'

// YYYY-MM-DDThh:mm[:ss[.uuuuuu]][+HH:MM|-HH:MM|Z].

/*
test ok:
{
    "title": "x",
    "content": "x",
    "datainizio": "2019-10-10T08:08",
    "datafine": "2019-10-10T08:08",
    "luogo": "tradate",
    "partecipants": 0,
    "fotografieconteggio": 0,
    "preview": null,
    "anno": 1
}
*/

export default {
  name: "ancArchiveYear",

  components: {
  
  },

  props: {
      Yy:{
          type: Object
      },

      Yevents:{
          type : Array
      },
      Ynext:{
          type: String
      },
      YloadingEvents:{
          type: Boolean
      },
      YfocusOn:{
          type: Boolean
      },
      YyPREV:{
        type: String
      },



  },

  data() {
    return {

        NEbody:null,

        postError: null,

        postEvent: null,

        postTitle: null,
        postDescrizione: null,
        postData:null,
        postLuogo:null,
        postPartecipants:null,  
        postFotografieconteggio:null,  
        postPreview:null, 
        postAnno:null, 
        
        showForm:false,
        show: false,
/*
        YfocusOn: false,
        Yy:null,
        YyPREV:null,
        Yyanno:null,

        Yevents:[],
        Ynext: null,
        YloadingEvents: false,
*/ 

    };
  },

  methods: {

/*
    getEvent(){
      this.$emit("getEvent()");
    },
*/    

    getEvents() {
      let anno = null;
      if (this.Yy.id){
            anno = Yy.anno

          //            let endpoint = "/api/events/archive/"+anno+"/";

                    let endpoint = "api/events/crud/listEventsYear/"+anno+"/";

                    if (this.Ynext) {
                      endpoint = this.Ynext;
                    }

                    this.YloadingEvents = true;

                    apiService(endpoint).then(data => {
                      console.log(data.results);
                      this.Yevents.push(...data.results);
                      this.YloadingEvents = false;
                      if (data.next) {
                        this.Ynext = data.next;
                      } else {
                        this.Ynext = null;
                      }
                    });
      }else{

          // no y set

      }
    },
    getNextEvent(){
      console.log("richiesta get next events da anc archive year");
      this.$emit("getNextEvent");
    },

    postalo(){
/*
test ok 2019 11 24
{
    "id": 57,                 AUTO
    "slug": "xxx-jka495"      AUTO

    "author": "mauro",
    "created_at": "24 novembre 2019",
    "foto_count": 0,
    "title": "XXX",
    "content": "XXX",
    "datainizio": "2019-10-10T08:08:00Z",
    "datafine": "2019-10-10T08:08:00Z",
    "luogo": "tradate",
    "partecipants": 0,
    "fotografieconteggio": 0,
    "preview": null,
    "anno": 3
}

*/ 
      let author = `"author":1`;
      let created_at = `"created_at":"2019-10-10T08:08:00Z"`;
      let foto_count = `"foto_count":0`;
      let title = null;
//      
      console.log("valutazione title");
      var x = document.getElementById("postTitleLabel");
      x.innerHTML = "valutazione titolo...";
      if (this.postTitle){
        title = `"title":"${this.postTitle}"`
        x.innerHTML = "titolo ok";
      } else {
        this.postError = "titolo mancante";
        x.innerHTML = "titolo mancante";  
        x.className = "titolomancante";
        return
      }
      let content= null;
//
      console.log("valutazione descrizione");
      if (this.postDescrizione){
        content = `"content":"${this.postDescrizione}"`
      } else {
        this.postError = "Descrizione mancante";
        return
      }
      let   datainizio    = `"datainizio":"2019-10-10T08:08Z"`
      let   datafine      = `"datafine":"2019-10-10T08:08Z"`
      let   luogo         = `"luogo":"tradate"`
      let   partecipants  = `"partecipants":0`
      let   fotografieconteggio  = `"fotografieconteggio":0`
      let   preview       = `"preview":null`
      let   anno          = `"anno":3`


      let NEbody=`
      {
        ${author},
        ${created_at},
        ${foto_count},
        ${title},
        ${content},
        ${datainizio},
        ${datafine},
        ${luogo},
        ${partecipants},
        ${fotografieconteggio},
        ${preview},
        ${anno}
      }`;
/*     
     let NEbody=`
     {
       "anno":4000,
       "slug":4000
     }
     `
*/


      this.$emit("newEvent",NEbody);
//      console.log("emit newEvent..." , NEbody); 
    }

  },

    onchange(){
      getEvents();
    },
    created() {
      document.title = "ANC Tradate";
      getEvents();

    },

    beforeUpdate() {
        console.log("before update") // Logs the counter value every second, before the DOM updates.
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

  #v-card {
    border: 2px solid red;
    border-radius: 25px;
  }

  .v-img-dexo {
      height: 150px;
      width: 250px;
      border-radius: 50px;
  }
  .v-img-dexo-card {
      max-height: 300px;
      max-width: 800px;
      border-radius: 0px;
  }

  #posterrore {
    color:red;
  }

  .titolo{
    color:null;
  }

  .titolomancante {
    color:red;
  }

  .eventRouterLink{
    color:darkorange;
  }


</style>
