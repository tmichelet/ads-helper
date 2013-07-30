function detail_page() {
	return document.URL.indexOf("http://www.seloger.com/recherche.htm?") == -1
}

function ad_id(url) {
	return url.split('?')[0]
}
container_selector = '#results_container'
ads_selector = ".ann_ann"
ads_selector_id = 0

console.log('submodule loaded')