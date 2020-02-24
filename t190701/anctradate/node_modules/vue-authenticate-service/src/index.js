import service from './service'
import axiosClientDriver from './drivers/axiosClientDriver'

// Expose
export {
  service,
  axiosClientDriver
}

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: '0.7.0',
  install (Vue, options) {
    const serviceInstance = service(Vue, options)
    Vue.$auth = Vue.prototype.$auth = serviceInstance
    if (serviceInstance.options.autoBoot) serviceInstance.boot()
    return serviceInstance
  }
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
