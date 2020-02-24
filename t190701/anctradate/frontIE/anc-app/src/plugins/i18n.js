//plugins/i18n.js

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
export const i18n = new VueI18n({
    locale: 'it', //set locale
    fallbackLocale: 'it',
    messages:{ it: { hello: 'Ciao'}, en:{hello: 'Hello'}} // set locale messagees

})
