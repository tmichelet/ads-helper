var assert = require("assert");

describe('Plugin', function(){
    describe('Initialization', function(){
        it('get_current_website should retrieve the domain name given the url', function(){
            var get_current_website = require("../../plugin/utils/helpers.js").get_current_website;
            var supported_urls = require("./helpers.js").supported_urls;
            for (var i = 0; i < supported_urls.length; i++) {
              assert.equal(supported_urls[i]["name"], get_current_website(supported_urls[i]["root"]));
            };
        })

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
//var doc = jsdom('');
//var window = doc.createWindow();


//var assert = require("assert");
//var _jQuery = require("../../plugin/lib/jquery.min.js");

//console.log(_jQuery)
/*
describe('html_without_js', function(){
    it('should remove the script tags and their content', function(){
      assert.equal('abcghi', html_without_js('abcghi'));
      assert.equal('abcghi', html_without_js('abc<script>def</script>ghi'));
      assert.equal('abcghi', html_without_js('abc<script src="">def</script>ghi'));
      assert.equal('abcghi', html_without_js('abc<script src="">def</script>ghi<script src="">jkl</script>'));
      assert.equal('abcghimno', html_without_js('abc<script src="">def</script>ghi<script src="">jkl</script>mno'));
      assert.equal('abc<body src="">def</body>ghimno', html_without_js('abc<body src="">def</body>ghi<script src="">jkl</script>mno'));
    })
})
*/