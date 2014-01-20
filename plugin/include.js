var script = document.createElement('script');
//TODO jquery no conflict mode
//TODO jquery -> lib
script.src = chrome.extension.getURL('/utils/jquery.min.js');
document.body.appendChild(script); 

var script = document.createElement('script');
script.src = chrome.extension.getURL('/loading.js');
document.body.appendChild(script);

//TODO use require
var script = document.createElement('script');
script.src = chrome.extension.getURL('/ads.js');
document.body.appendChild(script);

var script = document.createElement('script');
script.src = chrome.extension.getURL('/sites/'+ get_current_website(document.URL) +'.js');
document.body.appendChild(script);

var script = document.createElement('script');
script.src = chrome.extension.getURL('/main.js');
document.body.appendChild(script); 

var script = document.createElement('script');
script.src = chrome.extension.getURL('/sites/site.js');
document.body.appendChild(script); 

console.log('module loaded')


function get_current_website(url) {
    //TODO strenghten this
	site = url.split('www.')[1].split('.')[0]
	console.log('considering site ' + site)
	return site;
}
