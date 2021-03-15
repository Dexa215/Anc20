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
import svg from './amazon.svg'

export default {
  name: 'amazon-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'Amazon'
    },
    url: {
      type: String,
      default: '/auth/amazon'
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
.oauth-amazon {
  background: #FFAD1D;
  > * {
    color: black;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 154px;
  }
  span {
    font-weight: 400;
  }
}
</style>