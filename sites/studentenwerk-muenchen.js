function detail_page() {return document.URL.indexOf("?tx_stwmprivatzimmervermittlung_angebotabfrage%5Bangebot%5D=") != -1}

function ad_id(url) {
	uri = url.split('tx_stwmprivatzimmervermittlung_angebotabfrage%5Bangebot%5D=')
	id = uri[1].split('&')[0]
	//fixme id not good
	return 'http://www.studentenwerk-muenchen.de/' + id
}
container_selector = '.tx_stwmprivatzimmervermittlung.tx_stwmprivatzimmervermittlung_list.wrv_uebersicht'
ads_selector = 'tr.tx_stwmprivatzimmervermittlung_list'

console.log('submodule loaded')