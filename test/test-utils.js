var assert = require("assert");

describe('/utils/', function(){
    describe('helpers.js', function(){
        it('get_current_website should retrieve the domain name given the url', function() {
            var get_current_website = require("../plugin/utils/helpers.js").get_current_website;
            var supported_urls = require("./utils.js").supported_urls;
            for (var i = 0; i < supported_urls.length; i++) {
                assert.equal(supported_urls[i]["name"], get_current_website(supported_urls[i]["root"]));
            };
        })
    })

    describe('loaders.js', function(){
        it('load_spreadsheet should retrieve an error when not authentified', function(done) {
            var load_spreadsheet = require("../plugin/utils/loaders.js").load_spreadsheet;
            callback = function (data) {console.log(data); done();};
            load_spreadsheet(callback);
        })
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
