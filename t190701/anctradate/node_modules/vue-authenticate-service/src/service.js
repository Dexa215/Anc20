import { isTokenValid } from './utils/jwt'

function AuthService (Vue, {
  api,
  client,
  localStorage = window.localStorage,
  options = {}
}) {
  let accessToken = null

  let refreshToken = null

  /**
   * Reactive state for the service
   * @type {Vue}
   */
  let state = new Vue({
    data () {
      return {
        loaded: false,
        userData: null,
        authenticated: null
      }
    },
    watch: {
      loaded (val) {
        if (val) this.$emit('loaded', val)
      },
      userData (val) {
        if (val) this.$emit('userDataLoaded', val)
      },
      authenticated (val) {
        if (val) this.$emit('authenticated', val)
      }
    }
  })

  return {
    /**
     * Options object
     * @type {Object.<boolean, string>}
     */
    options: {
      /* defaults: */
      // support refresh tokens
      refresh: false, // true | false | 'access'
      // boot the service (set up interceptors, etc) right after plugin activated
      autoBoot: true,
      reloadOnLogout: true,
      // try to fetch user data right after boot
      autoFetch: true,
      accessTokenKey: 'accessToken',
      refreshTokenKey: 'refreshToken',
      // before loaded middleware: (service, next) => { next() }
      beforeLoaded: null,
      // override the defaults with given options
      ...options
    },

    api,

    client,

    localStorage,

    state: state,

    /**
     * Reactive state
     * Is plugin loaded and a user fetched (or has tried to fetch a user)
     * @return {boolean}
     */
    isLoaded () { return state.loaded },

    /**
     * Async method for cases when we need to wait until auth plugin is loaded
     * (user data fetching attempt is completed)
     * @return {Promise}
     */
    whenLoaded () {
      return new Promise(resolve => {
        if (state.loaded) return resolve(true)
        state.$on('loaded', resolve)
      })
    },

    /**
     * Async method for cases when we need to wait until user data is loaded
     * @return {Promise}
     */
    whenUserDataLoaded () {
      return new Promise(resolve => {
        if (state.userData) return resolve(state.userData)
        state.$on('userDataLoaded', resolve)
      })
    },

    /**
     * Async method for cases when we need to wait until user is authenticated
     * @return {Promise}
     */
    whenAuthenticated () {
      return new Promise(resolve => {
        if (state.authenticated) return resolve(state.authenticated)
        state.$on('authenticated', resolve)
      })
    },

    /**
     * Reactive state
     * Is user authenticated
     * @return {boolean}
     */
    isAuthenticated () { return state.authenticated },

    /**
     * Reactive state
     * An object with user data retrived from API
     * @return {object}
     */
    userData () { return state.userData },

    /**
     * Update the reactive user data
     * @return {object}
     */
    updateUserData (data) {
      state.userData = data
      return state.userData
    },

    /**
     * Start loading process. After this process complete, the plugin state should be set as loaded
    */
    boot () {
      client.interceptors(this)
      const hasLocalTokens = this.loadLocalTokens()
      if (hasLocalTokens && this.options.autoFetch) {
        return this.fetchUser()
          // no need to propagate the error in this case
          .catch(() => {})
      }
      if (hasLocalTokens) {
        this.setAuthenticated(true)
      }
      this.setLoaded()
    },

    setLoaded () {
      // if beforeLoaded middleware is provided - wait for next() callback
      if (this.options.beforeLoaded) {
        const next = () => { state.loaded = true }
        return this.options.beforeLoaded(this, next)
      }
      state.loaded = true
    },

    setAuthenticated (authenticated) {
      state.authenticated = !!authenticated
    },

    /**
     * @return {Promise}
     */
    login (creds, loginOptions = { fetchUser: this.options.autoFetch, remember: true }) {
      return api.login(creds)
        .then(tokens => this.loginSuccess(tokens, loginOptions))
        .catch(this.loginError.bind(this))
    },

    /**
     * @return {Promise}
     */
    facebookLogin (creds, loginOptions = { fetchUser: this.options.autoFetch }) {
      return api.facebookLogin(creds)
        .then(tokens => this.loginSuccess(tokens, loginOptions))
        .catch(this.loginError.bind(this))
    },

    /**
     * @return {Promise}
     */
    googleLogin (creds, loginOptions = { fetchUser: this.options.autoFetch }) {
      return api.googleLogin(creds)
        .then(tokens => this.loginSuccess(tokens, loginOptions))
        .catch(this.loginError.bind(this))
    },

    /**
     * @return {Object.<string>}
     */
    loginSuccess (tokens, loginOptions = { fetchUser: this.options.autoFetch }) {
      this.setAuthenticated(true)
      this.updateLocalTokens(tokens)
      if (loginOptions.fetchUser) {
        return this.fetchUser()
      }
      return Promise.resolve(null)
    },

    loginError (error) {
      throw error
    },

    /**
     * @param {object} creds
     * @return {Promise}
     */
    logout (creds = null) {
      if (!api.logout) return Promise.resolve().then(this.logoutSuccess.bind(this))
      return api.logout(creds)
        .then(this.logoutSuccess.bind(this))
        .catch(this.logoutError.bind(this))
    },

    /**
     * @return {object} Response object
     */
    logoutSuccess (response) {
      this.clearLocalTokens()
      this.setAuthenticated(false)
      this.updateUserData(null)
      if (this.options.reloadOnLogout) window.location.reload()
      return response
    },

    logoutError (error) {
      throw error
    },

    /**
     * A function for token validation
     */
    isTokenValid: isTokenValid,

    /**
     * Retrieves accessToken through the process
     * @return {Promise}
     */
    accessToken () {
      // try to get saved token if it exists and valid
      const token = this.getLocalAccessToken()
      if (this.isTokenValid(token)) return Promise.resolve(token)

      // try to refresh if refresh is enabled
      if (this.options.refresh) {
        const refreshToken = this.getLocalRefreshToken()
        if (!refreshToken) return Promise.reject(new Error('No refresh token'))
        return this.refresh(refreshToken)
          .then(tokens => tokens.accessToken)
      }

      // if refresh is not enabled
      return Promise.reject(new Error('No refresh token'))
    },

    /**
     * Access token getter & setter
     * @return {string}
     */
    getLocalAccessToken () {
      return accessToken
    },

    /**
     * @param {string} token
     * @return {void}
     */
    setLocalAccessToken (token) {
      accessToken = token
      return localStorage.setItem(this.options.accessTokenKey, token)
    },

    /**
     * Refresh token getter & setter
     * @return {string}
     */
    getLocalRefreshToken () {
      return refreshToken
    },

    /**
     * @param {string} token
     * @return {void}
     */
    setLocalRefreshToken (token) {
      refreshToken = token
      return localStorage.setItem(this.options.refreshTokenKey, token)
    },

    /**
     * @return {boolean} Access JWT token
     */
    loadLocalTokens () {
      accessToken = localStorage.getItem(this.options.accessTokenKey)
      if (this.options.refresh) {
        refreshToken = localStorage.getItem(this.options.refreshTokenKey)
      }
      // has accessToken
      return !!accessToken
    },

    /**
     * Save the tokens to the local storage
     * @param {Object.<string>} tokens An object with access and refresh tokens
     */
    updateLocalTokens (tokens) {
      this.setLocalAccessToken(tokens.accessToken)
      if (!this.options.refresh) return tokens

      if (this.options.refresh === 'access') {
        this.setLocalRefreshToken(tokens.accessToken)
      } else {
        this.setLocalRefreshToken(tokens.refreshToken)
      }
      return tokens
    },

    clearLocalTokens () {
      accessToken = null
      localStorage.removeItem(this.options.accessTokenKey)
      if (this.options.refresh) {
        refreshToken = null
        localStorage.removeItem(this.options.refreshTokenKey)
      }
    },

    /**
     * Retrieves a new accessToken through refresh process
     * @return {Promise}
     */
    refresh (refreshToken) {
      return api.refresh(refreshToken)
        .then(this.refreshSuccess.bind(this))
        .catch(this.refreshError.bind(this))
    },

    /**
     * @param {object} tokens
     * @return {object}
     */
    refreshSuccess (tokens) {
      this.updateLocalTokens(tokens)
      return tokens
    },

    refreshError (error) {
      throw error
    },

    /**
     * @return {Promise}
     */
    fetchUser () {
      return api.user()
        .then(this.fetchUserSuccess.bind(this))
        .catch(this.fetchUserError.bind(this))
    },

    /**
     * @return {object}
     */
    fetchUserSuccess (data) {
      this.setAuthenticated(true)
      this.setLoaded()
      return this.updateUserData(data)
    },

    fetchUserError (error) {
      this.setAuthenticated(false)
      this.setLoaded()
      this.updateUserData(null)
      throw error
    }
  }
}

export default AuthService
