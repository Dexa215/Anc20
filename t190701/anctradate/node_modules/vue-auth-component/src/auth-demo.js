import Vue from 'vue/dist/vue'

import AuthContainer from './auth-container/auth-container'
import AuthTabs from './tabs/tabs'
import FacebookButton from './buttons/facebook/'
import GithubButton from './buttons/github/'
import GoogleButton from './buttons/google/'
import MicrosoftButton from './buttons/microsoft/'
import TwitterButton from './buttons/twitter/'
import SignupForm from 'vue-auth-component/forms/local-signup/local-signup'
import LoginForm from 'vue-auth-component/forms/local-login/local-login'

import logo from './demo-logo.svg'

const dummyService = {
  create (data) {
    console.log('simulated signup using service.create', data)
    return Promise.resolve(data)
  }
}

const feathersClient = {
  authenticate (data) {
    console.log('Simulated signup with feathersClient.authenticate', data)
    return Promise.resolve(data)
  }
}

new Vue({ // eslint-disable-line no-new
  el: '#app',
  data () {
    return {
      dummyService,
      feathersClient,
      logo,
      activeTab: 'signup'
    }
  },
  methods: {
    setActiveTab (name) {
      this.activeTab = name
    }
  },
  components: {
    AuthContainer,
    AuthTabs,
    FacebookButton,
    GithubButton,
    GoogleButton,
    MicrosoftButton,
    TwitterButton,
    SignupForm,
    LoginForm
  }
})
