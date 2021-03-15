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
import svg from './stackoverflow.svg'

export default {
  name: 'stackoverflow-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'stackoverflow'
    },
    url: {
      type: String,
      default: '/auth/stackoverflow'
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
.oauth-stackoverflow {
  background: #E5712A;
  > * {
    color: black;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 179px;
  }
}
</style>