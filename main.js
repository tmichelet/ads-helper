websites = [
  'famillechretienne',    // www.famillechretienne.fr
//  'pap',                // www.pap.fr
//  'avendrealouer',      // www.avendrealouer.fr
//  'explorimmo',         // www.explorimmo.com
//  'seloger',            // www.seloger.com
//  'paruvendu'           // www.paruvendu.fr
]

var container // the container of all classified ads
var ads // the list of all classified ads
var loader = new Loader() // the spreadsheet loader
var spreadsheet_content = '' // the spreadsheer content
var read_ads = [] // the list of read ads, contained in the spreadsheet 


wait_load_jquery()

