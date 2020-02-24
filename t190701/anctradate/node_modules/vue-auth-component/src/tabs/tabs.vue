<template>
<ul class="vue-auth-component-tabs">
  <li :class="['signup', signupActive]" @click.prevent="onClick('signup')">
    <a href="javascript://">Signup</a>
  </li>
  <li :class="['login', loginActive]" @click.prevent="onClick('login')">
    <a href="javascript://">Login</a>
  </li>
</ul>
</template>

<script>
export default {
  computed: {
    signupActive () {
      return this.activeTab === 'signup' ? 'active' : ''
    },
    loginActive () {
      return this.activeTab === 'login' ? 'active' : ''
    }
  },
  props: {
    activeTab: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="less">
ul.vue-auth-component-tabs {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  font-size: 16px;
  font-weight: 400;

  li {
    height: 56px;
    line-height: 56px;
    width: 50%;
    text-align: center;
    &:not(.active){
      background: #77BFED;
      a {
        color: white;
        display:block;
        height: 100%;
        width: 100%;
      }
    }
  }
  a:active, a:focus, a:hover, a:visited {
    text-decoration: none;
  }
}
</style>