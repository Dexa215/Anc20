import LoginForm from './local-login.vue'
import Vue from 'vue/dist/vue'

const dummyService = {
  create (data) {
    console.log('simulated login using service.create', data)
    return Promise.resolve(data)
  }
}

const feathersClient = {
  authenticate (data) {
    console.log('Simulated login with feathersClient.authenticate', data)
    return Promise.resolve(data)
  }
}

new Vue({ // eslint-disable-line no-new
  el: '#app',
  data () {
    return {
      dummyService,
      feathersClient
    }
  },
  components: {
    LoginForm
  }
})
