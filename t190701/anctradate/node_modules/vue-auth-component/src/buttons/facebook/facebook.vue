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
import svg from './facebook.svg'

export default {
  name: 'facebook-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'facebook'
    },
    url: {
      type: String,
      default: '/auth/facebook'
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
.oauth-facebook {
  background: #5E7AB5;
  > * {
    color: white;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 159px;
  }
}
</style>