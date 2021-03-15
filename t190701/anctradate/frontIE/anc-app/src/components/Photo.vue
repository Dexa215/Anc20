<template lang="html">


    <div class="single-photo">
        <h2>photocomponent</h2>
        <p class="text-muted">
            <strong>{{ photo.author }}
            </strong> aggiunta il {{ photo.created_at }}
        </p>
        <p>{{ photo.body }}</p>
<!--
        <div v-if="isPhotoAuthor" class="photo-owner">
-->
        <div class="photo-owner">
            <br>
            {{ photo.descrizione }}
            <br>
            picture:
            {{ photo.picture }}
            <br>

            <v-img :src="photo.picture"
            max-width="200"
            max-height="100"
            alt=""
            ></v-img>


<!--
<img src="{{ photo.picture.url }}" alt="xxx">
-->

            <router-link
                :to="{
                    name: 'photo-editor',
                    params: { id: photo.id }
                }"
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
//Superclass--> Event
//import { apiService } from "../common/api.service.js";
export default {
    name: "PhotoComponent",
    props: {
        photo: {
            type: Object,
            required: true
        },
        requestUser:{
            type:String,
            }
    },

    data() {
      return {        
        newphoto: Object,
      };
    },
    methods: {
        triggerDeletePhoto() {
            this.$emit("delete-photo", this.photo);
        },
        //test 2019 12 05
        triggerAddPhoto() {
            this.$emit("add-photo", this.newphoto);
        },
    },

    created() {
    }

}
</script>

<style lang="css">
</style>
