/*
baseUrl è stato deprecato da Vue CLI 3.3, usare invece publicPath
https://cli.vuejs.org/config/#baseurl
*/

const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  // baseUrl: "http://0.0.0.0:8080/", // da usare con VUE CLI < 3.3 (deprecated)

	//DEVok
  publicPath: "http://127.0.0.1:8080", // da usare con VUE CLI >= 3.3 windows10
	//testPROD
  //publicPath: "http://0.0.0.0:8080/", // da usare con VUE CLI >= 3.3

  outputDir: "../dist/",

  chainWebpack: config => {
    config
      .plugin("BundleTracker")
      .use(BundleTracker, [{ filename: "./webpack-stats.json" }]);

    transpileDependencies: ['vuetify'], //edge

    config.output.filename("bundle.js");
    config.optimization.splitChunks(false);
    config.resolve.alias.set("__STATIC__", "static");

    config.devServer
	  //testPROD
      //.public('http://0.0.0.0:8080')
	  //DEVok
      .public("http://127.0.0.1:8080") // da usare con VUE CLI >= 3.3 windows10

      //.host('0.0.0.0')
      .host("127.0.0.1")

      .port(8080)
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .disableHostCheck(true)
      .headers({ "Access-Control-Allow-Origin": ["*"] });
  },

  css: {
    extract: {
      filename: "bundle.css",
      chunkFilename: "bundle.css"
    }
  }
};
