
// load jquery

function wait_load_jquery() {
  if($ != 'function (a,b){return new e.fn.init(a,b,h)}') {
    console.log('jQuery not loaded... reloading')
    window.setTimeout(function() { wait_load_jquery(); }, 100);
    return 0;
  }
  wait_load_spreadsheet()
}





// load google spreadsheet

function wait_load_spreadsheet() {
  if(read_ads.length == 0) {
    console.log('spreadsheet not loaded... reloading')
    loader.load_spreadsheet()
    window.setTimeout(function() { wait_load_spreadsheet(); }, 500);
    return 0;
  }
  site()
}


function Loader() {
  this.loading = false
  this.load_spreadsheet = function() {
        if(!this.loading) {
          this.loading = true
          return load_spreadsheet();
        }
        return;
    };

}

function load_spreadsheet() {
    var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxi8HcVHfRX4EgA6K35KUMSvn1OiJb3RdIDjiU6rLwW2VPnqTOt/exec";
    $.getJSON(SCRIPT_URL+"?callback=?",
              {method:"retrieve_data"},
              function (data) { 
                console.log('spreadsheet loaded')
                spreadsheet_content = data; 
                for(i=1; i< spreadsheet_content.length; i++) {
                  read_ads.push(spreadsheet_content[i][0])                  
                }
              });
}

