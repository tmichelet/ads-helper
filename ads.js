// class representing the ads and the ads table

function Ad (html, id, position) {
  this.html = html;
    this.id = id
    this.position = position
    this.shouldBeDisplayed = function() {
        console.log(id)
        position = jQuery.inArray(this.id, read_ads)
        console.log(position)
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
