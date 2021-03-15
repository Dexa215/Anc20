<template lang="html">
  <div class="event-actions">
      <router-link
        :to="{ name: 'event-editor', params: { slug: slug } }"
        class="btn btn-sm btn-outline-secondary mr-1"
        ><span>Modifica</span>
      </router-link>

      <button
        class="btn btn-sm btn-outline-danger"
        @click="deleteEvent"
        >Cancella
      </button>

  </div>
</template>

<script>
import { apiService } from "../common/api.service.js";
export default {
    name: "EventActions",
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    methods: {
        async deleteEvent() {
            let endpoint = `/api/events/${this.slug}/`;
            try {
                await apiService(endpoint, "DELETE");
                this.$router.push("/");
            } catch(err) {
                console.log(err);
            }
        }
    }
}
</script>
