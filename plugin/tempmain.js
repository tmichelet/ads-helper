console.log("tempmain");

require(["include"], function(include) {
    console.log('loaded')
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});

//var get_current_website = require("./utils/helpers").get_current_website;
//console.log(get_current_website('http://www.famillechretienne.fr/'));