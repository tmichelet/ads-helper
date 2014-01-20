/*
    Returns the website's name given a url
    TODO: strengthen this when needed (remove www)
*/
function get_current_website(url) {
    return url.split('www.')[1].split('.')[0]
}

module.exports = {
  get_current_website: function (url) {return get_current_website(url)}
}