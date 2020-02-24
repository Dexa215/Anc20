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
import svg from './slack.svg'

export default {
  name: 'slack-button',
  data () {
    return {
      svg
    }
  },
  props: {
    name: {
      type: String,
      default: 'slack'
    },
    url: {
      type: String,
      default: '/auth/slack'
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
.oauth-slack {
  background: #50AD83;
  > * {
    color: white;
  }

  /* This shouldn't know about its implementation.  Move this somewhere else. */
  &.one {
    width: 135px;
  }
}
</style>