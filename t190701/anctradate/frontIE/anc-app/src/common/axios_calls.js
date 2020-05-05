import { CSRF_TOKEN } from "./csrf_token.js";

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
function axiosService (url, method, data) {
    console.log("!! axiosService --> chiamata ricevuta...", method);

    const config = {
        method: method || "GET",
        body: data !== undefined ? JSON.stringify(data) : null,
        headers: {
            "content-type": "application/json",
            "X-CSRFToken": CSRF_TOKEN
        }
    };

    const axios = require('axios');

    switch (method) {

        case "get" || "GET":
            axios.get(url, config)
                .then(resp => {
                    console.log("axios service get | response...", resp);
                    console.log("axios service get | response.data ...", resp.data);
                    if (resp.status === 204 || resp.status === 200) {
                        console.log("axios service get | STATUS OK");
                        return resp;
                    };
                }).catch(
                    error => {
                        console.log("axios service get | err...", error)
                        return error;

                    });
            break;
        case post:
            axios.post(url, data, config)
                .then(resp => {
                    console.log("axios service post | response status...", resp.status);
                    return resp;
                }).catch(error => console.log("axios service post | err...", error));
            break;
        case delete (url, config):
            // es: url(`/api/events/crud/s/${event.slug}/`)
            axios.delete(url, config)
                .then(resp => {
                    console.log("axios service delete | response...", resp);
                    return resp;
                }).catch(error => console.log("axios service delete | err...", error));
            break;

        case head://(url[, config])
            console.log("axios service head... break...");
            break;
        case options:   //(url[, config])
            console.log("axios service options... break...");
            break;
        case put:       //(url[, data[, config]])
            console.log("axios service put... break...");
            break;
        case patch:     //(url[, data[, config]])  
            console.log("axios service patch... break...");
            break;
        default:
            break;

    }





}
export { axiosService };

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

/*
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
*/