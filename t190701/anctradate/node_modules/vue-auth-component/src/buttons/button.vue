<template>
<button
  :class="['auth-button', btnClass]"
  :title="title">
    <a :href="url" @click.prevent="openPopup(url)" >
      <span class="inline-svg" v-if="svg" v-html="svg" />
      <img v-else class='logo' :src='img' :alt='alt' />
      <span v-if="text" class='auth-button-text'>{{text}}</span>
    </a>
</button>
</template>

<script>
import openPopup from 'feathers-authentication-popups'

export default {
  name: 'auth-button',
  computed: {
    btnClass () {
      let ending = this.classSuffix || this.name.toLowerCase().replace(' ', '')
      return 'oauth-' + ending
    },
    title () {
      return `Login with ${this.name}`
    }
  },
  methods: {
    openPopup (url) {
      if (this.popup) {
        openPopup(url)
      }
    }
  },
  props: {
    name: String,
    classSuffix: String,
    url: String,
    img: String,
    alt: String,
    text: String,
    svg: String,
    popup: Boolean
  }
}
</script>

<style lang="less">
div.oauth-buttons {
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}

button.auth-button {
  border: 0px solid #556D99;
  border-radius: 2px;
  padding: 0;
  margin: 0.4em;
  font-size: 12px;

  a {
    display: flex;
    align-items: center;
    padding: 0.5em 0;
    text-decoration: none;

    span.inline-svg {
      width: 28px;
      height: 28px;
      margin: 0 8px;
      display: inline-block;
      svg {
        height: 100%;
        width: 100%;
      }
    }
    img.logo {
      height: 28px;
      margin: 0 8px;
    }
  }
  a:hover {
    text-decoration: underline;
  }
  span.auth-button-text {
    padding-left: 2px;
    white-space: nowrap;
    margin-right: 0.8em;
  }
}
</style>