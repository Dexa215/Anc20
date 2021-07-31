import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { store } from "@/store/store";
import VueFilterDateFormat from "vue-filter-date-format";
import vueDateFormat from "vue-date-format";
import moment from "moment";
//import VueI18n              from 'vue-i18n'

import { i18n } from "./plugins/i18n.js";
import VueCookies from "vue-cookies";

import VueAuthenticateService from "vue-authenticate-service";

//import 'vue-material-design-icons/styles.css';

//Vue.use(vueDateFormat)
//npm install vue-date-format

//Vue.use(VueFilterDateFormat);
//npm install VueFilterDateFormat)

Vue.config.productionTip = false;

// set default config
VueCookies.config("7d");
// set global cookie
VueCookies.set("theme", "default");
VueCookies.set("hover-time", "1s");

Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
});

// change other locale
i18n.locale = "it";

new Vue({
  router,
  //Vuex,
  vuetify,
  VueFilterDateFormat,
  vueDateFormat,
  i18n,
  VueCookies,
  store,

  //  VueAuthenticateService,
  //  VueAuth,

  render: h => h(App)
}).$mount("#app");
