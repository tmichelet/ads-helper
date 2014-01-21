requirejs.config({
    paths: {
        'jquery': 'lib/jquery.min',
    }
});

var ads_helper = {};
require(['jquery', 'utils/helpers'], function(jquery, helpers) {
    
    var container // the container of all classified ads
    var ads // the list of all classified ads
    //var loader = new Loader() // the spreadsheet loader
    var spreadsheet_content = 'this is a content' // the spreadsheer content
    var read_ads = [] // the list of read ads, contained in the spreadsheet 

    ads_helper.spreadsheet_content = spreadsheet_content;
    console.log(helpers.get_current_website)
    console.log('done')

//wait_load_jquery()

});
