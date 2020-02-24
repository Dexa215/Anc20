/**
 * This implementation relies on interceptors realisation of Axios lib
 */
export default (axiosInstance) => {
  return {
    interceptors: (service) => {
      /**
       * Injects request modifircator
       */
      axiosInstance.interceptors.request.use(request => {
        return service.accessToken()
          .then(token => {
            request.headers.Authorization = `Bearer ${token}`
            return Promise.resolve(request)
          })
          .catch(() => Promise.resolve(request))
      }, error => Promise.reject(error))

      /**
       * Check response for access denied code
       */
      axiosInstance.interceptors.response.use(response => {
        return response
      }, error => {
        if (error.response && error.response.status === 401) {
          return service.logout()
        }
        return Promise.reject(error)
      })
    }
  }
}
