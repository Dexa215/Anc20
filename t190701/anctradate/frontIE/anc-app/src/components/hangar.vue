

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
<!--
      <v-card-subtitle class="pb-0"
      >
        <h6>
            {{ event.slug }}
        </h6>
      </v-card-subtitle>
-->

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
<!--
        <v-btn
          color="orange"
          text
        >
          Explore
        </v-btn>
-->
      </v-card-actions>
    </v-card>
</div>
