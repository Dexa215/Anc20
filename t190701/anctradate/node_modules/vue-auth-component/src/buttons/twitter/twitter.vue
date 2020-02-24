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
import svg from './twitter.svg'

export default {
  name: 'twitter-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'twitter'
    },
    url: {
      type: String,
      default: '/auth/twitter'
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
.oauth-twitter {
  background: #50ABF1;
  > * {
    color: white;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 147px;
  }
}
</style>