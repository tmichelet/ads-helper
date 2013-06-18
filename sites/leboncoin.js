function detail_page() {
	return document.URL.indexOf(".htm") != -1
}

function ad_id(url) {
	return url.split('?')[0]
}
container_selector = '.list-lbc'
ads_selector = ".list-lbc a"

console.log('submodule loaded')