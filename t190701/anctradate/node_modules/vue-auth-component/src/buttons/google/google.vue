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
import svg from './google.svg'

export default {
  name: 'google-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'google'
    },
    url: {
      type: String,
      default: '/auth/google'
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
.oauth-google {
  background: #DD4B39;
  > * {
    color: white;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 145px;
  }
}
</style>