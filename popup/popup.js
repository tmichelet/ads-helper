function clickHandler(e) {
	console.log('test all clicked')
    chrome.extension.sendMessage({directive: "test-all"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('test-all').addEventListener('click', clickHandler);
})