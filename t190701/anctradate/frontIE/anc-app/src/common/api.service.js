import { CSRF_TOKEN } from "./csrf_token.js";

async function getJSON (response) {

  /*
  console.log("apiService valutazione getJSON response");
  console.log("RESPONSE: ",response);
  console.log("RESPONSE headers: ",response.headers);
  console.log("RESPONSE status: ",response.status);
  console.log("RESPONSE url: ",response.url);
 */

  controlCookies("resp");
  if (response.status === 204) return "";
  return response.json();
}

function controlCookies (when) {

  console.log("control cookies --->", when === "resp" ? "response" : "request");
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      //var cookie = jquery.trim(cookies[i]);
      //    console.log("cookie n.", i, " : ", cookies[i]);
      var cookie = cookies[i].trim();
      /*
        // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
              }
      */
    }
  }
}





function apiService (endpoint, method, data) {
  /*
    console.log("dati da spedire...");
    console.log(data);
  */

  const config = {
    method: method || "GET",
    body: data !== undefined ? JSON.stringify(data) : null,
    headers: {
      "content-type": "application/json",
      "X-CSRFToken": CSRF_TOKEN
    }
  };

  /*
  console.log("TOKEN acquisito:", CSRF_TOKEN);
  console.log("config method:",   config.method);
  console.log("config body:",     config.body);
  console.log("config headers:",  config.headers);
  controlCookies("");
*/

  return fetch(endpoint, config)
    .then(getJSON)
    // eslint-disable-next-line no-console
    .catch(error => console.log(error));
}

export { apiService };



