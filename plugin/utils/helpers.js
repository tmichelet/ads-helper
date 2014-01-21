if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define([], function () {
    return {
        /*
        Returns the website's name given a url
        TODO: strengthen this when needed (remove www)
        */
        get_current_website: function (url) {
            return url.split('www.')[1].split('.')[0]
        }
    }
});
