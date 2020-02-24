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
import svg from './dropbox.svg'

export default {
  name: 'dropbox-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'dropbox'
    },
    url: {
      type: String,
      default: '/auth/dropbox'
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
.oauth-dropbox {
  background: #007EE5;
  > * {
    color: white;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 154px;
  }
}
</style>