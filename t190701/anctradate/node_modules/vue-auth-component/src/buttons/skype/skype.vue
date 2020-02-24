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
import svg from './skype.svg'

export default {
  name: 'skype-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'skype'
    },
    url: {
      type: String,
      default: '/auth/skype'
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
.oauth-skype {
  background: #1AAEF0;
  > * {
    color: white;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 140px;
  }
}
</style>