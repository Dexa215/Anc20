/**
 * Shared methods for the form components.
 */
export const sharedMethods = {
  formSubmitted (values) {
    if (this.strategy) {
      values.strategy = this.strategy
    }
    this.clearError()
    this.handleSubmit(values)
      .then(response => this.onSuccess(response))
      .catch(error => this.uiError(error))
  },

  /**
   * The default `handleSubmit` function uses the service or onSubmit to submit
   * data to the server. This function can be overwritten.
   */
  handleSubmit (values) {
    let service = this.service
    if (service) {
      // Allows use of Feathers' `app.authenticate`
      if (typeof service.authenticate === 'function') {
        return service.authenticate(values)
      } else {
        return this.service.create(values)
      }
    } else if (typeof this.onSubmit === 'function') {
      return this.handleSubmit(values)
    } else {
      return Promise.reject(new Error(`${this.formName}: You must provide a Model or service attribute, or overwrite the onSubmit function.`))
    }
  },

  clearError () {
    this.error = undefined
  },

  /**
   * `uiError` makes sure the UI responds properly to any error received.
   * It calls `onError`.
   */
  uiError (error) {
    this.error = error.message || error
    this.onError(error)
  },

  /**
   * When submit fails, the `onError` callback can be used to handle custom
   * logic in your app.
   */
  onError (error) {
    this.warn(error)
  },

  warn (message) {
    if (this.suppressWarnings !== true) {
      // devWarning(message)
      console.warn(message)
      return message
    }
  }
}

export const sharedProps = {
  onSubmit: Function,
  service: Object,
  usernamePlaceholder: {
    type: String,
    default: 'e-mail address'
  },
  passwordPlaceholder: {
    type: String,
    default: 'password'
  },
  /**
   * `onSuccess` function gets run when a successful onSubmit response was received.
   * In most cases, it will need to be overwritten to handle custom requirements.
   */
  onSuccess: {
    type: Function,
    default (data) {
      this.warn(`Pass an "onSuccess" function to the ${this.name} to handle success.`)
    }
  }
}
