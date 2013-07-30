function detail_page() {
	return document.URL.indexOf("detail+pro-") != -1
}

function ad_id(url) {
	id = url.split('detail+pro-')[1]
	return 'http://www.avendrealouer.fr/annonces-immobilieres/detail+pro-' + id
}

container_selector = '.resultats-centre .listing'
ads_selector = ".resultats-centre .listing li.resultat"
ads_selector_id = 1

console.log('submodule loaded')