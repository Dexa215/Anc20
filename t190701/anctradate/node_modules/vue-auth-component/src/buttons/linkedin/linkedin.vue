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
import svg from './linkedin.svg'

export default {
  name: 'linkedin-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'linkedin'
    },
    url: {
      type: String,
      default: '/auth/linkedin'
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
.oauth-linkedin {
  background: #006087;
  > * {
    color: white;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 148px;
  }
}
</style>