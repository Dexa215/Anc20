<template lang="html">
    <div class="single-photo">
        <p class="text-muted">
            <strong>{{ photo.author }}
            </strong> aggiunta il {{ photo.created_at }}
        </p>
        <p>{{ photo.body }}</p>
<!--
        <div v-if="isPhotoAuthor" class="photo-owner">
-->
        <div class="photo-owner">
            <router-link
                :to="{
                    name: 'photo-editor',
                    params: { id: photo.id } }"
                class="btn btn-sm btn-outline-secondary mr-1"
                > <span>Modifica</span>
            </router-link>

            <button
                class="btn btn-sm btn-outline-danger"
                @click="triggerDeletePhoto"
                >Cancella
            </button>
        </div>
<!--
        <div v-else class="like-answer">
            <button
                class="btn btn-sm"
                @click="toggleLike"
                :class="{
                    'btn-danger': userLikedAnswer,
                    'btn-outline-danger': !userLikedAnswer,
                    }">
                <strong>Mi Piace [{{ likesNumber }}]</strong>
            </button>
        </div>
-->
        <hr>
    </div>
</template>

<script>
import { apiService } from "../common/api.service.js";
export default {
    name: "PhotoComponent",
    props: {
        photo: {
            type: Object,
            required: true
        },
//        requestUser: {
//            type: String,
//            required: true
//        }
    },

    data() {
      return {
        requestUser: ".*."
      };
    },
//    data() {
//        return {
//            userLikedAnswer: this.answer.user_has_voted,
//            likesNumber: this.answer.likes_count
//        }
//    },
//    computed: {
//        isPhotoAuthor() {
//            return this.photo.author === this.requestUser;
//        }
//    },
    methods: {
        triggerDeletePhoto() {
            this.$emit("delete-photo", this.photo);
        },
          getRequestUser() {
              let endpoint = "api/profiles/getcurrentuser/";
              apiService(endpoint).then(data => {
                console.log("chiamata rest... user:",data);
                //console.log("chiamata rest... user:",data.us.name);
                this.requestUser = data.us.name;
              });
          },
    },

    created() {
//      document.title = "ANC Tradate";
      this.getRequestUser();
    }


}
</script>

<style lang="css">
</style>
