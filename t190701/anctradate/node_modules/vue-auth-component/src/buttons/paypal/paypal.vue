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
import svg from './paypal.svg'

export default {
  name: 'paypal-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'paypal'
    },
    url: {
      type: String,
      default: '/auth/paypal'
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
.oauth-paypal {
  background: #005082;
  > * {
    color: white;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 141px;
  }
}
</style>