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
import svg from './openid.svg'

export default {
  name: 'openid-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'openid'
    },
    url: {
      type: String,
      default: '/auth/openid'
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
.oauth-openid {
  background: #F27F1C;
  > * {
    color: black;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 148px;
  }
}
</style>