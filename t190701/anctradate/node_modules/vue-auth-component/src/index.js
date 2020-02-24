import AuthContainer from './auth-container/auth-container.vue'
import LocalLoginForm from './forms/local-login/local-login.vue'
import LocalSignupForm from './forms/local-signup/local-signup.vue'
import AuthTabs from './tabs/tabs.vue'

import AuthButton from './buttons/button.vue'
import AmazonButton from './buttons/amazon/amazon.vue'
import DropboxButton from './buttons/dropbox/dropbox.vue'
import EvernoteButton from './buttons/evernote/evernote.vue'
import FacebookButton from './buttons/facebook/facebook.vue'
import GithubButton from './buttons/github/github.vue'
import GoogleButton from './buttons/google/google.vue'
import LinkedInButton from './buttons/linkedin/linkedin.vue'
import MicrosoftButton from './buttons/microsoft/microsoft.vue'
import OpenIDButton from './buttons/openid/openid.vue'
import PayPalButton from './buttons/paypal/paypal.vue'
import SkypeButton from './buttons/skype/skype.vue'
import SlackButton from './buttons/slack/slack.vue'
import StackOverflowButton from './buttons/stackoverflow/stackoverflow.vue'
import TwitterButton from './buttons/twitter/twitter.vue'
import YahooButton from './buttons/yahoo/yahoo.vue'

// Install the components
export function install (Vue) {
  Vue.component('auth-container', AuthContainer)
  Vue.component('local-login-form', LocalLoginForm)
  Vue.component('local-signup-form', LocalSignupForm)
  Vue.component('auth-tabs', AuthTabs)
  Vue.component('auth-button', AuthButton)
  Vue.component('auth-amazon-button', AmazonButton)
  Vue.component('auth-dropbox-button', DropboxButton)
  Vue.component('auth-evernote-button', EvernoteButton)
  Vue.component('auth-facebook-button', FacebookButton)
  Vue.component('auth-github-button', GithubButton)
  Vue.component('auth-google-button', GoogleButton)
  Vue.component('auth-linkedin-button', LinkedInButton)
  Vue.component('auth-microsoft-button', MicrosoftButton)
  Vue.component('auth-openid-button', OpenIDButton)
  Vue.component('auth-paypal-button', PayPalButton)
  Vue.component('auth-skype-button', SkypeButton)
  Vue.component('auth-slack-button', SlackButton)
  Vue.component('auth-stack-overflow-button', StackOverflowButton)
  Vue.component('auth-twitter-button', TwitterButton)
  Vue.component('auth-yahoo-button', YahooButton)
}

// Expose the components
export {
  AuthContainer,
  AuthTabs,
  LocalLoginForm,
  LocalSignupForm,
  AuthButton,
  AmazonButton,
  DropboxButton,
  EvernoteButton,
  FacebookButton,
  GithubButton,
  GoogleButton,
  LinkedInButton,
  MicrosoftButton,
  OpenIDButton,
  PayPalButton,
  SkypeButton,
  SlackButton,
  StackOverflowButton,
  TwitterButton,
  YahooButton
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
