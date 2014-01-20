var assert = require("assert");

describe('Plugin', function(){
    describe('Initialization', function(){
        it('get_current_website should retrieve the domain name given the url', function(){
            var get_current_website = require("../plugin/utils/helpers.js").get_current_website;
            var supported_urls = require("./testhelpers.js").supported_urls;
            for (var i = 0; i < supported_urls.length; i++) {
              assert.equal(supported_urls[i]["name"], get_current_website(supported_urls[i]["root"]));
            };
        })

        
        //require("../../plugin/tempmain.js")
        /*it('should retrieve the domain name given the url', function(done){
var jsdom = require("jsdom").jsdom;
            console.log('&');
            jsdom.env(
              "http://nodejs.org/dist/",
              ["http://code.jquery.com/jquery.js"],
              function (errors, window) {
                console.log("there have been", window.$("a").length, "nodejs releases!");
                done();
              }
            );
            console.log('&');
        })*/
    })
})
