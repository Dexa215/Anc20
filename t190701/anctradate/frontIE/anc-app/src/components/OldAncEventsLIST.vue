

<!-- Elenco originale -->


    <div class="container">
      <div class="mt-2">
        <div v-for="event in events" :key="event.pk">

          <p class="mb-0">
            Evento aggiunto da
            <span class="author-name">{{ event.author }}</span>
          </p>

          <h2>
            <router-link
              :to="{    name: 'event',
                        params: { slug: event.slug }
                    }"
              class="event-link"
            >
              {{ event.content }}
            </router-link>
          </h2>
          <p class="mb-1">
              fotografie:
              <span>{{ event.fotografieconteggio }}</span>
          </p>

<!--
          <p>Risposte: {{ question.answers_count }}</p>
-->

          <hr />
        </div>
      </div>
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
<!-- Elenco originale -->





<!-- past elenco con tasto carica ancora -->
        <div    class="container">
        <div    class="text-center">

            <div class="pa-4">
                <v-icon x-large>event</v-icon>
                <v-icon>mdi-arrow-bottom-bold-hexagon-outline</v-icon>
            </div>

            <v-card
                          class="mx-auto pa-2 text-center"
                          color="#F5F5DC"
                          max-width="344"
                          outlined
            >
            <div>
                <p>Archivio eventi...</p>
            </div>
            </v-card>



                <div v-for="event in eventsPast" :key="event.pk">
                    <v-card
                        class="mx-auto"
                        color="#F5F5DC"
                        max-width="344"
                        outlined
                      >
                        <v-list-item three-line>
                          <v-list-item-content>

                              <router-link
                                :to="{    name: 'event',
                                          params: { slug: event.slug }
                                      }"
                                class="event-link"
                              >
                                {{ event.content }}
                              </router-link>

                              <v-list-item-title class="headline mb-1" >
                              {{event.datainizio | formatDate | localize }}
                               </v-list-item-title>

                              <div class="overline mb-4">                 {{ event.author }}  </div>

                              <v-list-item-subtitle>{{ event.title }}  {{ event.slug}}     </v-list-item-subtitle>
                          </v-list-item-content>

                            <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                            >
                                <v-img :src="event.preview"></v-img>
                            </v-list-item-avatar>
                        </v-list-item>

                    </v-card>
              </div>

              <div class="my-4 text-center">
                <p v-show="loadingEvents">...loading...</p>
                <button
                  v-show="epnext"
                  @click="getEventsPast"
                  class="btn btn-sm btn-outline-success"
                >
                  Carica Ancora
                </button>
              </div>


          </div>

      </div>
<!-- past elenco con tasto carica ancora -->
