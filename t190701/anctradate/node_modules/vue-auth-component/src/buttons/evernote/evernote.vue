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
import svg from './evernote.svg'

export default {
  name: 'evernote-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'evernote'
    },
    url: {
      type: String,
      default: '/auth/evernote'
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
.oauth-evernote {
  background: #68B629;
  > * {
    color: white;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 149px;
  }
}
</style>