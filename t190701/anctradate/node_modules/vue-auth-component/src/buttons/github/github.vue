<template>
<auth-button :name="name"
  :url="url"
  :svg='svg'
  :alt="alt"
  :text="text"
  :popup="popup"
/>
</template>

<script>
import AuthButton from '../button.vue'
import svg from './github.svg'

export default {
  name: 'github-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'github'
    },
    url: {
      type: String,
      default: '/auth/github'
    },
    img: String,
    alt: String,
    text: String,
    popup: Boolean
  },
  components: {
    AuthButton
  }
}
</script>

<style lang="less">
.oauth-github {
  background: #a6a0a0;
  > * {
    color: white;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 144px;
  }
}
</style>