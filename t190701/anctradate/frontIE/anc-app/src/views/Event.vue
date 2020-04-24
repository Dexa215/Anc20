<template lang="html">
<div class="SfBase">
    <div class="SfSpazio SfShUp AncAppBar_BC">spazio Up</div>

  <div class="single-event">
    <v-row class="AncTrasparenza" v-show="drawerLeft"></v-row>



  <!--
  name
  lastModified
  lastModifiedDate 
  size
  type
  webkitRelativePath 
  -->
    <template>
      <v-carousel
        cycle
        height="400"
      >
        <v-carousel-item
          v-for="(item,i) in pp"
          :key="i"
          :src="item.picture"
          continuous="true"
          
        ></v-carousel-item>
      </v-carousel>
    </template>


    <div v-if="notFound"  class="container">
      <h1 id="notfound">Evento Non Trovato</h1>
      <h3 id="notfound">l'evento cercato potrebbe essere stato rimosso</h3>
    </div>

    <div v-else         class="container">
      {{event.slug}}
      <v-btn
        @click="eventoDELETE"
      >
          Cancella 
      </v-btn>

      <v-btn
        @click="eventoPATCH"
      >
          Modifica 
      </v-btn>

      <v-btn
        @click="vaiadarchivio"
      >
          Archivio 
      </v-btn>



      <h1>{{ event.title }}</h1>
      <EventActions v-if="isOwner" :slug="slug" />
      
      <div> 
        <p   class="mb-2">
          <span class="content">{{ event.luogo }}</span>
        </p>
      </div>

      <p class="mb-0">
        Evento aggiunto da:
        <span class="author-name">{{ event.author }}</span>
      </p>
      <p>{{ event.datainizio }}</p>
      <hr />

      <div> 
        <p   class="mb-2">
          <span class="content">{{ event.content }}</span>
        </p>
      </div>


    <!-- fotografie -->
    <v-card
        max-width="400"
        class="mx-auto"
    >
      <v-container class="pa-1">
        <v-item-group
          v-model="selected"
          multiple
        >
          <v-row>
            <v-col
              v-for="(item, i) in pp"
              :key="i"
              cols="12"
              md="6"
            >
              <v-item v-slot:default="{ active, toggle }">
                <v-img
                  :src="item.picture"
                  height="150"
                  class="text-right pa-2"
                  @click="toggle"
                >
                  <v-btn
                    icon
                    dark
                  >
                    <v-icon>
                      {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                    </v-icon>

                  </v-btn>
                </v-img>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
      </v-container>
    </v-card>
    <!-- fotografie -->


    <!-- fotografie caricamento -->
    <v-card
      max-width="400"
      class="mx-auto"
    >
      <div class="container text-center">
        <!--<h6>carica nuova fotografia</h6>-->
              <div class="large-12 medium-12 small-12 cell">

                <!--v-btn 
                  v-if="file"
                  v-on:click="submitFile()"
                >
                  <v-icon>
                    mdi-file-upload
                  </v-icon>
                </v-btn-->

                <div 
                  v-if="file"
                >

                  <!--block-->
                  <v-btn

                    
                    :loading="loading3"
                    :disabled="loading3"
                    color="blue-grey"
                    class="my-4 white--text text-center fab x-large dark"
                    v-on:click="submitFile()"
                  >
                    Carica
                    <v-icon right dark>mdi-cloud-upload</v-icon>
                  </v-btn>
                  <!--p class="text--green">{{file.name}}</p-->
                  
                  <v-file-input
                    class="my-4 text--green"
                    v-model= "file"
                    label="File input"
                    filled
                    prepend-icon="mdi-camera"
                    multipart="true"
                  ></v-file-input>

                  {{axiosMsg}}

                <hr></hr>
                </div>

                <div v-if="!file">

                  <label class="text-center my-4">Nuova fotografia</label>
                  <hr></hr>
                  <input
                    
                      class="ma-2 green--text text-center"
                      type="file"
                      id="file"
                      ref="file"

                      v-on:change="handleFileUpload()"
                      multipart="true"
                  />
                </div>

                <div class="container">
                  <hr></hr>
                  <P>
                    PEvP: id: {{id}} slug: {{slug}} file.name: {{file.name}}
                  </P>
                </div>

              </div>
            

        <div class="row">
          <div class="column">      
          </div>  
          <!--div class="column">
                <v-file-input
                  v-model= "file"
                  label="File input"
                  filled
                  prepend-icon="mdi-camera"
                  multipart="true"
                ></v-file-input>
          </div-->
          <!--div class="column">
              <v-btn
                @click="addPhoto"
              >aggiungi
              </v-btn>
          </div>
          <div>
            object {{postnewphoto}}
          </div-->
        </div>
      </div>
    </v-card>
    <!-- fotografie caricamento -->






<!--
    <h3>test carousel </h3>
-->



<!--
      <h3>test urkel </h3>
          <img alt="Foto urkel"
          src="http://localhost:8000/media/Urkel.jpg"
          class="rounded mx-auto d-block"
          style ="width: 100px; border-radius: 10px"
          />

      <h3>test sopracolletto</h3>
          <img alt="Foto urkel"
          src="../assets/images/Icone/sop.jpg"
          class="rounded mx-auto d-block"
          style ="width: 100px; border-radius: 10px"
          />
-->


<!--
<v-row align="center">

      <v-row justify="space-around">
        <v-switch v-model="valid" class="ma-4" label="Valid" readonly></v-switch>
        <v-switch v-model="lazy" class="ma-4" label="Lazy"></v-switch>
      </v-row>


      <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="lazy"
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset Form
        </v-btn>

        <v-btn
          color="warning"
          @click="resetValidation"
        >
          Reset Validation
        </v-btn>
      </v-form>


    </v-row>

-->    

<!-- *********************************************************************** 
test parallax OK !!!

    <h3>test parallax 2</h3>
            <div class="container">
              <div class="row">
                <div class="col-xs-">
                    <ul>
                      <template v-for="item in photos">
                        <li>
                            <template>
                              <v-parallax
                                  width="800"
                                  height="400"
                                  dark
                                  :src="item.picture"
                              >
                                <v-layout
                                  align-center
                                  column
                                  justify-center
                                >
                                  <h1 class="display-2 font-weight-thin mb-3">ANC Tradate</h1>
                                  <h4 class="subheading">test parallax 2</h4>
                                </v-layout>
                              </v-parallax>
                            </template>

                        </li>
                      </template>
                    </ul>

                </div>
                <div class="col-xs-">

                </div>
              </div>
            </div>


    </div>


test parallax OK !!! ***********************************************************************   
-->


<!--
    src="http://80.211.234.218/home/dexo/media-serve/welcome-2651108_960_720_szKu2jh.jpg"
-->
<!--
    <v-img
        src="http://photos.google.com/photo/AF1QipOiczpT-RyOGswkbO6I0M3UoWkoA-pUtGb4s94D"
      lazy-src="item"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="200"
      max-height="100"
      alt=""
    ></v-img>
-->
<!--
    <hr>
    <a>test v-image ARUBA</a>
    <hr>

    <v-img
        src="http://80.211.234.218/media/Foto_95.jpg"
      lazy-src="item"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="200"
      max-height="100"
      alt=""
    ></v-img>
-->

<!--
    <h6>picture</h6>
      
        <template v-for="item in photoss">
              <v-img
                :src="item"
                lazy-src="item"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="200"
                max-height="100"
                alt=""
              ></v-img>
        </template>
-->

<!--
    <h6>img</h6>
    <input type="file" name="cippirimerlo" value="cippirimerlo" @onchange="">

      <ul>
        <template v-for="item in photos">
          <li>
            <p>{{item.descrizione}}</p>
            <p>{{item.picture}}</p>
              <v-img 
                      :src="item.picture"
                      max-width="200"
                      max-height="100"
                      alt=""
              ></v-img>
          </li>
        </template>
      </ul>
-->

<!--
      <template v-if="userHasAnswered">
        <p class="answer-added">Hai risposto a questa domanda.</p>
      </template>

      <template v-else-if="showForm">
        <form class="card" @submit.prevent="onSubmit">
          <div class="card-header px-3">
            Aggiungi una fotografia all'evento
          </div>
          <div class="card-block">
            <textarea
              v-model="newPhotoBody"
              class="form-control"
              placeholder="Aggiungi una fotografia all'evento"
              rows="5"
            ></textarea>
          </div>
          <div class="card-footer px-3">
            <button type="submit" class="btn btn-sm btn-success">
              Aggiungi Fotografia
            </button>
          </div>
        </form>
        <p class="error mt-2">{{ error }}</p>
      </template>

      <template v-else>
        <button class="btn btn-sm btn-success" @click="showForm = true">
          Aggiungi fotografia
        </button>
      </template>
-->
<!--
:requestUser="requestUser"
-->


<!--
<a href="#">carosello</a>

    <template>
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in photos"
          :key="i"
          :src="item.picture"
        ></v-carousel-item>
      </v-carousel>
    </template>
-->


<!-- v-for="(photo, index) in photos" -->

  <a href="#"> PhotoComponent </a>

      <PhotoComponent
        v-for="(photo, index) in pp"
        :photo="photo"
        :key="index"
        @delete-photo=  "deletePhoto"
        @add-photo=     "addPhoto"
      />

      <div class="my-4">
        <p v-show="loadingPhotos">...loading...</p>
        <button
          v-show="next"
          @click="getEventPhotos"
          class="btn btn-sm btn-outline-success"
        >
          Carica Ancora
        </button>
      </div>
    </div>
  </div>


</div>
</div>



</template>

<script>
import router from "../router";

import { apiService } from "../common/api.service";
import PhotoComponent from "../components/Photo.vue";
import EventActions from "../components/EventActions.vue";

//test axios
import { axiosTest } from "../common/axios_calls";
import { axiosGet } from "../common/axios_calls";
import { CSRF_TOKEN } from "../common/csrf_token.js";

import AncCard from "@/components/AncCard.vue";

/*
import { axiosRequest }         from "../common/axios_calls";

axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
*/

export default {
  name: "Event",

  props: {
    slug: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    requestUser: {
      type: String
    },
    categorie: { type: Array },
    C: { type: Number },
    CS: { type: Number },

    drawerLeft: { type: Boolean }
  },

  components: {
    PhotoComponent,
    EventActions,
    AncCard
  },

  data() {
    return {
      selectedphoto: "",

      event: {},
      loadingPhotos: false,
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      photos: [],
      photoss: [
        "https://ichef.bbci.co.uk/news/624/cpsprodpb/65EB/production/_103919062_ezultimo.jpg",
        "https://ichef.bbci.co.uk/news/624/cpsprodpb/2F81/production/_103916121_mediaitem103910950.jpg"
      ],
      //userHasAnswered: false,
      showForm: false,
      newPhotoBody: null,
      error: null,
      next: null,

      //form *************************************************************************
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false,
      lazy: false,

      postevento: null,
      postdescrizione: null,
      postdata: null,

      postnewphoto: null,
      file: "",
      ideventofoto: 38,

      ppLoading: null,
      ppNext: null,
      pp: [],
      selected: [],

      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,

      axiosMsg: ""
    };
  },

  computed: {
    isOwner() {
      return this.event.author === this.requestUser;
    },
    notFound() {
      return this.event["detail"];
    }
  },

  methods: {
    AxiosTest() {
      axiosTest();
    },

    AxiosTestGet() {
      axiosGet();
    },

    setPageTitle(title) {
      document.title = title;
    },

    setRequestUser() {
      this.requestUser = window.localStorage.getItem("username");
    },
    /*
    getRequestUser() {
        let endpoint = "api/profiles/getcurrentuser/";
        apiService(endpoint).then(data => {
          console.log("chiamata rest... user:",data);
          //console.log("chiamata rest... user:",data.us.name);
          this.requestUser = data.us.name;
        });
    },
*/

    getEventData() {
      let endpoint = `/api/events/${this.slug}/`;
      apiService(endpoint).then(data => {
        this.event = data;
        //this.userHasAnswered = data.user_has_answered;
        this.setPageTitle(data.content);
      });
    },

    /*
    async deleteEvent() {
      let endpoint = `/api/events/${this.slug}/`;

      try {
        await apiService(endpoint, "DELETE");
      } catch (err) {
        console.log(err);
      }
    },
*/
    async eventoDELETE() {
      const axios = require("axios");
      let url = `/api/events/${this.slug}/`;

      axios
        .delete(url, {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRFToken": CSRF_TOKEN
          }
        })
        .then(response => {
          console.log("SUCCESS!! EVENTO CANCELLATO");
          //this.axiosMsg = "evento cancellato";
          this.gotoR("/");
        })
        .catch(function() {
          console.log("evento delete FAILURE!!");
          //this.axiosMsg = "evento NON cacellato";
        });
    },

    eventoPATCH() {
      const axios = require("axios");
      let url = `/api/events/${this.slug}/`;

      console.log("title prima", this.title);

      let formData = new FormData(); //Initialize the form data

      formData.append("title", "title MOD 9");
      formData.append("content", "content MOD 9");
      formData.append("luogo", "luogo MOD 9");

      console.log("title durante ", this.title + "modificato2");
      console.log("dati...", formData);

      axios
        .patch(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRFToken": CSRF_TOKEN
          }
        })
        .then(response => {
          console.log("SUCCESS!!");
          console.log("AFTER AXIOS Patch STATUS:", response.status);
          console.log("AFTER AXIOS Patch response:", response);

          this.axiosMsg = "evento modificato correttamente";
        })
        .catch(function() {
          console.log("evento patch FAILURE!!");
          this.axiosMsg = "evento NON modificato";
        });
    },

    getEventPhotos() {
      let endpoint = `/api/events/${this.slug}/photos/`;
      if (this.next) {
        endpoint = this.next;
      }
      this.loadingPhotos = true;
      apiService(endpoint).then(data => {
        this.photos.push(...data.results);
        this.loadingPhotos = false;
        if (data.next) {
          this.next = data.next;
        } else {
          this.next = null;
        }
      });
    },

    onSubmit() {
      if (this.newPhotoBody) {
        let endpoint = `/api/events/${this.slug}/photo/`;
        apiService(endpoint, "POST", { body: this.newPhotoBody }).then(data => {
          this.photos.unshift(data);
        });
        this.newPhotoBody = null;
        this.showForm = false;
        //this.userHasAnswered = true;
        if (this.error) {
          this.error = null;
        }
      } else {
        this.error = "Il campo non può essere vuoto!";
      }
    },

    onfileselected(event) {
      console.log(event);
    },

    async deletePhoto(photo) {
      //ng      let endpoint = `/api/photos/${photo.id}/`;
      let endpoint = `/api/events/${this.slug}/photos/${photo.id}/`;

      try {
        await apiService(endpoint, "DELETE");
        // this.answers.splice(this.answers.indexOf(answer), 1);
        this.$delete(this.photos, this.photos.indexOf(photo));
        //this.userHasAnswered = false;
      } catch (err) {
        console.log(err);
      }
    },

    addPhoto(photo) {
      const axios = require("axios");
      let url = `/api/events/${this.slug}/photos/new/`;

      const config = {
        headers: {
          "content-type": "application/json",
          "X-CSRFToken": CSRF_TOKEN
        }
      };
      let FILES = [];
      FILES.push(this.postnewphoto);

      let data = {
        picture: this.postnewphoto,
        descrizione: "fotoAAAA",
        created_at: "2019-12-25T10:00Z",
        updated_at: "2019-12-25T10:00Z",
        isFirst: true,
        data: "2019-12-25T10:00Z",
        luogo: "appiano"
      };

      axios.post(url, data, config, FILES).then(response => {
        console.log("AFTER AXIOS POST STATUS:", response.status);
        console.log("AFTER AXIOS POST response:", response);
      });
    },

    //2019 12 10 TEST OK
    submitFile() {
      const axios = require("axios");
      let url = `/api/events/${this.slug}/caricafile/`;
      let formData = new FormData(); //Initialize the form data
      formData.append("picture", this.file);
      formData.append("evento", this.id);
      formData.append("descrizione", "test file 10");

      axios
        .post(
          url, //Make the request to the POST /single-file URL
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-CSRFToken": CSRF_TOKEN
            }
          }
        )
        .then(response => {
          console.log("SUCCESS!!");
          console.log("AFTER AXIOS POST STATUS:", response.status);
          console.log("AFTER AXIOS POST response:", response);

          this.axiosMsg = "file caricato correttamente";
        })
        .catch(function() {
          console.log("submit file FAILURE!!");
          this.axiosMsg = "file NON caricato";
        });
    },

    getPP() {
      this.loader = "loading3";
      const axios = require("axios");
      let url = `/api/events/${this.id}/photosPlus/`;

      if (this.ppNext) {
        endpoint = this.ppNext;
      }

      this.ppLoading = true;
      axios
        .get(url, {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRFToken": CSRF_TOKEN
          }
        })
        .then(response => {
          console.log("SUCCESS!!");
          console.log("AFTER AXIOS POST STATUS:", response.status);
          console.log("AFTER AXIOS POST response:", response);
          console.log(
            "AFTER AXIOS POST response.results:",
            response.data.results
          );

          this.pp.push(...response.data.results);
          this.ppLoading = false;
          if (response.next) {
            this.ppNext = response.next;
          } else {
            this.ppNext = null;
          }
        })
        .catch(function() {
          console.log("get PP FAILURE!!");
        });
    },

    handleFileUpload() {
      //Handles a change on the file upload
      this.file = this.$refs.file.files[0];
    },

    vaiadarchivio() {
      let r = "archivio/";
      this.gotoR(r);
    },

    setMyPar() {
      let myparam = {
        Ccurrent: 60,
        CScurrent: 69
      };
      this.$emit("spMC", myparam); //spMC -- > sAVE pARAMETER / menu Cat
    },

    gotoR(r) {
      console.log("rotta per...");
      this.$emit("gotoR", r);
    },

    //form *************************************************************************
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
    //form *************************************************************************
  },
  // methods ******

  updated() {
    //    this.getRequestUser();
  },

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  },

  created() {
    //this.getRequestUser();
    //this.setMyPar();
    this.getEventData();
    this.getEventPhotos();
    this.getPP(); //PP==PhotoPlus

    //    this.AxiosTest();
    //    this.AxiosTestGet();
  }
};
</script>

<style lang="css">
.Photo-added {
  color: green;
  font-weight: bold;
}
.error {
  color: red;
  font-weight: bold;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
