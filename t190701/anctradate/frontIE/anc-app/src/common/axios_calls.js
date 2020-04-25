/*

axios.request(                  config)
axios.get(      url[,           config])
axios.delete(   url[,           config])
axios.head(     url[,           config])
axios.options(  url[,           config])
axios.post(     url[, data[,    config]])
axios.put(      url[, data[,    config]])
axios.patch(    url[, data[,    config]])

*/

// get

import { CSRF_TOKEN } from "./csrf_token.js";

function axiosTest () {
    const axios = require('axios');
    axios.get('http://webcode.me').then(resp => {
        // eslint-disable-next-line no-console
        console.log("test axios...");
        // eslint-disable-next-line no-console
        console.log(resp.data);
    });
}
export { axiosTest };

//get
function axiosGet () {
    const axios = require('axios');
    axios.get('http://webcode.me').then(resp => {
        // eslint-disable-next-line no-console
        console.log("axios.get...");
        // eslint-disable-next-line no-console
        console.log(resp.data);
    });
}
export { axiosGet };

//delete
function axiosDel (event) {
    alert("axios service : --> DELETE...", event.slug);
    const axios = require('axios');
    axios.delete(`/api/events/crud/s/${event.slug}/`).then(resp => {
        // eslint-disable-next-line no-console
        console.log("axios.delete...");
        // eslint-disable-next-line no-console
        console.log(resp.data);
    });
}
export { axiosDel };

//POST
function axiosServicePost (url, data) {

    console.log("axios service ...");
    console.log("axios service url...", url);
    console.log("axios service data...", data);
    alert("axios service : --> POST...");
    const axios = require('axios');

    const config = {
        headers: {
            "content-type": "application/json",
            "X-CSRFToken": CSRF_TOKEN
        }
    };
    axios.post(url, data, config)
        .then(response => {
            console.log(response.status);
        });
}


export { axiosServicePost };

/*test 2020 04 25 */

//get events 
function axiosGetEvents () {
    const axios = require('axios');
    axios.get('api/events').then(resp => {
    });
}
export { axiosGetEvents };
