<template lang="html">
  <div class="container mt-2">
    <v-row class="AncTrasparenza" v-show="drawerLeft"></v-row>
    <div class="row">
      <div class="col-12">
        <h1 class="mb-3">Aggiungi un evento</h1>


        <v-form 
          ref="form" 
          v-model="valid" 
          lazy-validation
        >
          
          <v-text-field
            v-model="postTitle"
            :rules="postTitleRules"
            :counter="10"

            placeholder="inserire il titolo dell'evento..."
            label="Title"
            required
          ></v-text-field>
          
          <!--textarea
            v-model="postTitle"
            class="form-control"
            placeholder="titolo"
            rows="3"
          >
          </textarea-->

          <v-textarea
            v-model="postDescrizione"
            :rules="postDescrizioneRules"
            rows="3"
            placeholder="inserire descrizione dell'evento..."
            label="Descrizione"
            required
          >
          </v-textarea>

          <v-layout row wrap>
            
            <v-flex xs12 sm6 class="my-3">
              <v-date-picker 
              @change="getY"
              v-model="postDataInizio" 
              color="green lighten-1" 
              :show-current="true"
              
              ></v-date-picker>
            </v-flex>
            <v-flex md12 lg6>
              <v-time-picker
              @change="setFine" 
              v-model="postTimeInizio" 
              color="green lighten-1"
              format="24hr"
              ></v-time-picker>
            </v-flex>
            
            <v-flex xs12 sm6 class="my-3">
              <v-date-picker 
              v-model="postDataFine" 
              color="blue lighten-1" 
              :show-current="true"
              ></v-date-picker>
            </v-flex>
            <v-flex md12 lg6>
              <v-time-picker 
              v-model="postTimeFine" 
              color="blue lighten-1"
              format="24hr"
            ></v-time-picker>
            </v-flex>
          </v-layout>

          <!--textarea
            v-model="postDescrizione"
            :rules="postDescrizioneRules"
            class="form-control"
            placeholder="descrizione"
            rows="3"
            required
          >
          </textarea-->

          <v-text-field
            v-model="postLuogo"
            :rules="postLuogoRules"
            :counter="10"
            placeholder="inserire il luogo dell'evento..."
            label="Luogo"
            required
          ></v-text-field>

          <!--textarea
            v-model="postLuogo"
            class="form-control"
            placeholder="luogo"
            rows="3"
          >
          </textarea-->

          <!--textarea
            v-model="eventBody"
            class="form-control"
            placeholder="nuovo evento..."
            rows="3"
          >
          </textarea-->


          
<!--
      postData:null,
      postPartecipants:null,  
      postFotografieconteggio:null,  
      postPreview:null, 
      postAnno:null,
-->


          <br />
          <v-btn
            class="btn btn-success"
            :disabled="!valid"
            @click="submit"
          >Pubblica Evento
          </v-btn>

           <v-btn 
            @click="clear"
           >clear
           </v-btn>

<!--
type="submit"
          
          <button 
            class="btn btn-success" 
            @click ="onSubmit"
          >
            Pubblica Evento
          </button>
-->          

        </v-form>
        <p class="error mt-2">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { apiService } from "../common/api.service";
import { CSRF_TOKEN } from "../common/csrf_token.js";
import AncCard from "@/components/AncCard.vue";

export default {
  name: "EventEditor",

  props: {
    slug: {
      type: String,
      required: false
    },
    previousEvent: {
      type: String,
      required: false
    },
    categorie: { type: Array },
    C: { type: Number },
    CS: { type: Number },

    drawerLeft: { type: Boolean }
  },

  data() {
    return {
      eventBody: this.previousEvent || null,
      error: null,

      postTitle: null,
      postTitleRules: [
        v => !!v || "Title is required",
        v => (v && v.length <= 20) || "Title must be less than 10 characters"
      ],

      postDescrizione: null,
      postDescrizioneRules: [
        v => !!v || "Descrizione is required",
        v =>
          (v && v.length <= 240) ||
          "Descrizione must be less than 20 characters"
      ],

      postData: null,
      postDataRules: [v => !!v || "Data is required"],

      postDataInizio: null,
      postDataInizioRules: [v => !!v || "Data is required"],
      postTimeInizio: null,
      postInizio: null,

      postDataFine: null,

      postDataFineRules: [v => !!v || "Data is required"],

      postTimeFine: null,
      postFine: null,

      postLuogo: "Tradate",
      postLuogoRules: [
        v => !!v || "Luogo is required",
        v => (v && v.length >= 3) || "Luogo must be more than 3 characters"
      ],

      postPartecipants: null,
      postFotografieconteggio: null,
      postPreview: null,
      postAnno: null,

      valid: true,
      name: "",

      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false,
      anno: ""
    };
  },

  async beforeRouteEnter(to, from, next) {
    if (to.params.slug !== undefined) {
      let endpoint = `/api/events/${to.params.slug}/`;
      await apiService(endpoint).then(data => {
        to.params.previousEvent = data.content;
      });
    }
    return next();
  },

  methods: {
    getY() {
      var d = new Date(this.postDataInizio);
      var n = d.getFullYear();
      this.anno = n;
    },
    setFine() {
      this.postDataFine = this.postDataInizio;
      this.postTimeFine = this.postTimeInizio;
    },

    //------------------------------------------------------------------
    submit() {
      const axios = require("axios");

      // test dati ok su postman:
      /*    let author = 1;
      let title = "null";
      title = (this.postTitle ? this.postTitle : "nessun titolo inserito...");
      let datainizio    = "2019-10-10T08:08Z";
      let datafine      = "2019-10-10T08:08Z";
*/
      let content = "Content TEST 2019 12 05";
      let created_at = "2019-10-10T08:08:00Z";
      let foto_count = 0;
      let luogo = "Tradate";
      let partecipants = 0;
      let fotografieconteggio = 0;
      let preview = null;

      //      let anno          = 3;
      let eventoInizio = null;
      let eventoFine = null;

      let url = "/api/events/";

      if (this.$refs.form.validate()) {
        console.log("validate ok");

        if (this.postDataInizio) {
          if (this.postTimeInizio) {
            this.postInizio =
              this.postDataInizio + "T" + this.postTimeInizio + "Z";
          } else {
            //orario non settato
            this.postInizio = this.postDataInizio + "T" + "12:00" + "Z";
          }
        } else {
          //data non settata
          this.postInizio = "2020-12-25T12:00Z";
        }

        if (this.postDataFine) {
          if (this.postTimeFine) {
            this.postFine = this.postDataFine + "T" + this.postTimeFine + "Z";
          } else {
            //orario non settato
            this.postFine = this.postDataFine + "T" + "23:55" + "Z";
          }
        } else {
          //data non settata
          this.postFine = "2020-12-25T23:55Z";
        }

        console.log("data inizio", this.postDataInizio);
        console.log("time inizio", this.postTimeInizio);
        console.log("this.postInizio", this.postInizio);
        console.log("postDataInizio", this.postDataInizio);
        console.log("postDataFine", this.postTimeFine);
        console.log("this.postFine", this.postFine);
        console.log("this.anno", this.anno);

        let data = {
          //        author: author,
          //        created_at:created_at,
          //        foto_count:foto_count,
          title: this.postTitle ? this.postTitle : "NO Title...",
          content: this.postDescrizione ? this.postDescrizione : "NO Content",

          datainizio: this.postInizio,
          datafine: this.postFine,

          luogo: luogo,
          partecipants: partecipants,
          fotografieconteggio: fotografieconteggio,
          preview: preview,
          anno: this.anno
        };

        const config = {
          headers: {
            "content-type": "application/json",
            "X-CSRFToken": CSRF_TOKEN
          }
        };

        axios.post(url, data, config).then(response => {
          console.log("AFTER AXIOS POST STATUS:", response.status);
          console.log("AFTER AXIOS POST response:", response);
          console.log(
            "AFTER AXIOS POST response.data.slug:",
            response.data.slug
          );
          console.log("AFTER AXIOS POST response.data.pk:", response.data.id);
          console.log(
            "AFTER AXIOS POST response.data.anno:",
            response.data.anno
          );

          this.$router.push({
            name: "event",
            params: {
              slug: response.data.slug,
              id: response.data.id
            }
          });
        });
      } else {
        console.log("validate NG");
      }
    },
    //------------------------------------------------------------------
    clear() {
      this.$refs.form.reset();
    },

    onSubmit() {
      let author = 1;
      let created_at = "2019-10-10T08:08:00Z";
      let foto_count = 0;

      let title = null;
      console.log("valutazione title");
      /*
      var x = document.getElementById("postTitleLabel");
      x.innerHTML = "valutazione titolo...";
*/

      if (this.postTitle) {
        title = this.postTitle;
        //        x.innerHTML = "titolo ok";
      } else {
        this.postError = "titolo mancante";
        //        x.innerHTML = "titolo mancante";
        //        x.className = "titolomancante";
        return;
      }

      let content = null;
      console.log("valutazione descrizione");

      if (this.postDescrizione) {
        content = this.postDescrizione;
      } else {
        this.postError = "Descrizione mancante";
        return;
      }

      let datainizio = "2019-10-10T08:08Z";
      let datafine = "2019-10-10T08:08Z";
      let luogo = "tradate";
      let partecipants = 0;
      let fotografieconteggio = 0;
      let preview = null;
      let anno = 3;
      /*
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
*/
      let post = {
        author,
        created_at,
        foto_count,
        title,
        content,
        datainizio,
        datafine,
        luogo,
        partecipants,
        fotografieconteggio,
        preview,
        anno
      };

      let NEbody = JSON.stringify(post);
      console.log("CREAZIONE NEbody");

      /*

      if (!this.eventBody) {
        this.error = "Il campo non può essere vuoto!";
    } else if (this.eventBody.length > 240) {
        this.error = "Non superare i 240 caratteri";
      } else {
*/

      let endpoint = "/api/events/";
      let method = "POST";

      /*
        if (this.previousEvent) {
          method = "PUT";
          endpoint += `${this.slug}/`;
        }
*/

      //        apiService(endpoint, method, { content: this.eventBody }).then(
      apiService(endpoint, method, NEbody).then(event_data => {
        console.log("slug ottenuto", event_data.slug);
        /*
            this.$router.push({
              name: "event",
              params: { slug: event_data.slug }
            });
*/
      });
    },

    setMyPar() {
      let myparam = {
        Ccurrent: 60,
        CScurrent: 68
      };
      this.$emit("spMC", myparam); //spMC -- > sAVE pARAMETER / menu Cat
    }
  },

  created() {
    document.title = "Editor - Eventi Anc Tradate";
    //this.setMyPar();
  }
};
</script>
