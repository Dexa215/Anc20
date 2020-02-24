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
import svg from './yahoo.svg'

export default {
  name: 'yahoo-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'yahoo'
    },
    url: {
      type: String,
      default: '/auth/yahoo'
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
.oauth-yahoo {
  background: #7B0099;
  > * {
    color: white;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 142px;
  }
}
</style>