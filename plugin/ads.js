// class representing the ads and the ads table

//TODO check best practices
function Ad (html, id, position) {
  this.html = html;
    this.id = id
    this.position = position
    this.shouldBeDisplayed = function() {
        position = jQuery.inArray(this.id, read_ads)
        return position == -1 || spreadsheet_content[position+1][1];
    };
    this.isNew = function() {
        position = jQuery.inArray(this.id, read_ads)
        return position == -1;
    };
}

function AdsContainer (html) {
    this.html = html;
    this.ads = new Array(0)
}
