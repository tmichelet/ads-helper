function detail_page() {
	var uri = document.URL.split('www.')[1].split('-');
	uri = uri[uri.length-1];
	if(uri[0] != 'r') {
		return false;
	}
	uri = uri.slice(1)
	return parseInt(uri) > 100000
}

function ad_id(url) {
	uri = url.split('-')
	id = uri[uri.length-1]
	return 'http://www.pap.fr/annonces/' + id
}
container_selector = '#body-left'
ads_selector = "div[id^='annonce_resume']"

console.log('submodule loaded')