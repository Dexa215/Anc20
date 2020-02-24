import Vue from 'vue/dist/vue'
import AmazonButton from './amazon/amazon.vue'
import DropboxButton from './dropbox/dropbox.vue'
import EvernoteButton from './evernote/evernote.vue'
import FacebookButton from './facebook/facebook.vue'
import GithubButton from './github/github.vue'
import GoogleButton from './google/google.vue'
import LinkedInButton from './linkedin/linkedin.vue'
import MicrosoftButton from './microsoft/microsoft.vue'
import OpenIdButton from './openid/openid.vue'
import PaypalButton from './paypal/paypal.vue'
import SkypeButton from './skype/skype.vue'
import SlackButton from './slack/slack.vue'
import StackOverflowButton from './stackoverflow/stackoverflow.vue'
import TwitterButton from './twitter/twitter.vue'
import YahooButton from './yahoo/yahoo.vue'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  components: {
    AmazonButton,
    DropboxButton,
    EvernoteButton,
    FacebookButton,
    GithubButton,
    GoogleButton,
    LinkedInButton,
    MicrosoftButton,
    OpenIdButton,
    PaypalButton,
    SkypeButton,
    SlackButton,
    StackOverflowButton,
    TwitterButton,
    YahooButton
  }
})
