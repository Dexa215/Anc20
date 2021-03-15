# vue-authenticate-service

[![npm](https://img.shields.io/npm/v/vue-authenticate-service.svg) ![npm](https://img.shields.io/npm/dm/vue-authenticate-service.svg)](https://www.npmjs.com/package/vue-authenticate-service)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Flexible Vue Auth Service & Plugin

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

# Installation

```
npm install --save vue-authenticate-service
```

## Default import

```javascript
import Vue from 'vue'
import VueAuthenticateService from 'vue-authenticate-service'

Vue.use(VueAuthenticateService, {
  // options
})
```

## Browser

```html
<link rel="stylesheet" href="vue-authenticate-service/dist/vue-authenticate-service.css"/>

<script src="vue.js"></script>
<script src="vue-authenticate-service/dist/vue-authenticate-service.browser.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually with the instructions below.

```javascript
Vue.use(VueAuthenticateService)
```


# Usage
### 1) import plugin module

```javascript
import VueAuthService from 'vue-authenticate-service'
```

### 2) Prepare a Client driver

Client driver is aimed to intercept requests and responses in order to provide an accessToken for each request or process response code.

The service doesn't do any interception, it just calls the interceptors function in the provided client driver and passes the service instance as argument, so that the simplest client driver looks like:
```javascript
const clientDriver = {
  interceptors: (authSerice) => {
    // some code where you can intercept your http client requests and Responses
    // access token can be retrieved by calling authSerice.accessToken() function that returns a Promise
  }
}
```

Ready to use Axios Client Driver is included (see the driver's code [here](src/drivers/axiosClientDriver.js))
```javascript
import { axiosClientDriver } from 'vue-authenticate-service'
const clientDriver = axiosClientDriver(axios)
```

### 3) Prepare an API Driver

API driver is just a map to resolve the functions that are responsible for api data. The functions should return Promises:

```javascript
const apiDriver = {
  login: (creds) => axios.post('/user/signin', creds),
  // user,
  // refresh,
  // facebookLogin,
  // googleLogin,
  // logout
}
```

### 4) Install the plugin providing the drivers and options

```javascript
Vue.use(VueAuthService, {
  client: clientDriver,
  api: apiDriver,
  options: {
    refresh: true, // use refresh token procedure
    autoFetch: true // fetch user data on boot and on login
    // (other options to be documented)
  }
})
```
### 5) Use the service in app


```javascript
// in a module (e.g. in vuex module file)
import Vue from 'vue'
Vue.$auth.login({ user, pass }).then(...)
```


```javascript
// in a component
this.$auth.login({ user, pass }).then(...)
```

```javascript
// cool helpers are available:
this.$auth.isLoaded() // reactive state, can be used in order to wait until user data is fetched (if authenticated)

this.$auth.isAuthenticated() // the same for checking for auth

// Promises:
this.$auth.whenLoaded()
  .then(/* do stuff */)

this.$auth.whenAuthenticated()
  .then(/* do stuff */)

```

# Example

> TODO

---

# Plugin Development

## Installation

The first time you create or clone your plugin, you need to install the default dependencies:

```
npm install
```

## Watch and compile

This will run webpack in watching mode and output the compiled files in the `dist` folder.

```
npm run dev
```

## Manual build

This will build the plugin into the `dist` folder in production mode.

```
npm run build
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
