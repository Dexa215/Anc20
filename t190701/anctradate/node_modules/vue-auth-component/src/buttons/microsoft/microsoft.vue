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
import svg from './microsoft.svg'

export default {
  name: 'microsoft-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'microsoft'
    },
    url: {
      type: String,
      default: '/auth/microsoft'
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
.oauth-microsoft {
  background: #2672EC;
  > * {
    color: white;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 153px;
  }
}
</style>